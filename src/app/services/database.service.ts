import { Platform } from '@ionic/angular';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  items = new BehaviorSubject([]);
  order = new BehaviorSubject([]);
  no_pendorder: number;
  no_comporder: number;
  no_cancorder: number;

  @Output() updateItemEvent = new EventEmitter<string>();

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite
        .create({
          name: "ezcomm",
          location: "default",
        })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
        });
    });
  }

    seedDatabase() {
      this.http.get('assets/seed.sql', { responseType: 'text' })
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
        .then((_) => {
          this.loadItems();
          this.loadOrders();
          this.dbReady.next(true);
        })
        .catch(e => console.log(e));
      });
    }

    getDatabaseState() {
      return this.dbReady.asObservable();
    }

    getItems(): Observable<any[]> {
      return this.items.asObservable();
    }

    getOrders(): Observable<any[]> {
      return this.order.asObservable();
    }

// Items database
    loadItems() {
      return this.database.executeSql('SELECT * FROM items', []).then(data => {
        let items = [];

        if(data.rows.length > 0) {
          for (var i=0; i<data.rows.length; i++) {
            items.push({
              items_id: data.rows.item(i).items_id,
              name: data.rows.item(i).name,
              price: data.rows.item(i).price,
              stock: data.rows.item(i).stock,
              min_purc: data.rows.item(i).min_purc,
              promo_price: data.rows.item(i).promo_price,
              image: data.rows.item(i).image,
              created_date: data.rows.item(i).created_date,
            });
          }
        }
        this.items.next(items);
      });
    }

    getItem(id): Promise<any> {
      return this.database
        .executeSql(
          "SELECT * FROM items WHERE items_id = ?", [id])
        .then((data) => {
          if (data == null) {
            return {
              items_id: 0,
            };
          }
          return {
            items_id: data.rows.item(0).items_id,
            name: data.rows.item(0).name,
            price: parseFloat(data.rows.item(0).price).toFixed(2),
            stock: data.rows.item(0).stock,
            min_purc: data.rows.item(0).min_purc,
            promo_price: parseFloat(data.rows.item(0).promo_price).toFixed(2),
            image: data.rows.item(0).image,
            created_date: data.rows.item(0).created_date
          };
        });
    }

    deleteItems(id) {
      return this.database
      .executeSql("DELETE FROM items WHERE items_id = ?", [id])
      .then((_) => {
        this.loadItems();
      });
    }

    addItems(itemobj) {
      console.log("itemobj");
      let data = [itemobj.name, itemobj.price, itemobj.stock, itemobj.min_purc, itemobj.promo, itemobj.img, itemobj.date];
      return this.database
      .executeSql(
        'INSERT INTO items (name, price, stock, min_purc, promo_price, image, created_date) VALUES (?, ?, ?, ?, ?, ?, ?)',
        data)
      .then((data) => {
        console.log(data);
        this.loadItems();
        return(data);
      })
      .catch((e) => {
        return "Error in addItems" + JSON.stringify(e);
      });
    }

    updateItems(itemobj) {
      let obj = [itemobj.name, itemobj.price, itemobj.stock, itemobj.min_purc, itemobj.promo, itemobj.img];
      return this.database
        .executeSql(
          `UPDATE items SET name = ?, price = ?, stock = ?, min_purc = ?, promo_price = ?, image = ? WHERE items_id = ${itemobj.id}`,
          obj
        )
        .then(data => {
          this.loadItems();
          this.updateItemEvent.emit();
        })
        .catch((e) => {
          return "Error in updateItems" + JSON.stringify(e);
        });
    }

// Order database
    loadOrders() {
      return this.database.executeSql(
        'SELECT o.*, i.name, i.stock, i.price, i.min_purc, i.promo_price, i.image FROM orders o LEFT JOIN items i ON i.items_id = o.items_id',
        [])
        .then((data) => {
        let order = [];

        if(data.rows.length > 0) {
          for (var i=0; i<data.rows.length; i++) {
            order.push({
              order_id: data.rows.item(i).order_id,
              items_id: data.rows.item(i).items_id,
              qty: data.rows.item(i).qty,
              amount: data.rows.item(i).amount,
              cus_name: data.rows.item(i).cus_name,
              cus_tel: data.rows.item(i).cus_tel,
              cus_address: data.rows.item(i).cus_address,
              shipping_no: data.rows.item(i).shipping_no,
              order_date: data.rows.item(i).order_date,
              status: data.rows.item(i).status,
            });
          }
        }
        this.order.next(order);
      });
    }

    buffOrder(status): Promise<any> {
      return this.database
      .executeSql(
        "SELECT o.*, i.name, i.stock, i.price, i.min_purc, i.promo_price, i.image FROM orders o WHERE o.status = ? LEFT JOIN items i ON i.items_id = o.items_id", 
        [status])
      .then((data) => {
        let order = [];
        console.log("service ", data);

        if(data.rows.length > 0) {
          for (var i=0; i<data.rows.length; i++) {
            order.push({
              order_id: data.rows.item(i).order_id,
              items_id: data.rows.item(i).items_id,
              qty: data.rows.item(i).qty,
              amount: data.rows.item(i).amount,
              cus_name: data.rows.item(i).cus_name,
              cus_tel: data.rows.item(i).cus_tel,
              cus_address: data.rows.item(i).cus_address,
              shipping_no: data.rows.item(i).shipping_no,
              order_date: data.rows.item(i).order_date,
              status: data.rows.item(i).status,
              item_name: data.rows.item(i).name,
              item_stock: data.rows.item(i).stock,
              item_price: data.rows.item(i).price,
              item_min: data.rows.item(i).min_purc,
              item_promo: data.rows.item(i).promo_price,
              item_img: data.rows.item(i).image,
            });
          }
        }

        return order;
      });
    }

    getOrder(id) {
      return this.database.executeSql(
        "SELECT o.*, i.name, i.stock, i.price, i.min_purc, i.promo_price, i.image FROM orders o WHERE o.order_id = ? LEFT JOIN items i ON i.items_id = o.items_id", [id])
      .then((data) => {
        if(data == null) {
          return {
            order_id: 0,
          };
        } 
        return {
          order_id: data.rows.item(0).order_id,
          items_id: data.rows.item(0).items_id,
          qty: data.rows.item(0).qty,
          amount: data.rows.item(0).amount,
          cus_name: data.rows.item(0).cus_name,
          cus_tel: data.rows.item(0).cus_tel,
          cus_address: data.rows.item(0).cus_address,
          shipping_no: data.rows.item(0).shipping_no,
          order_date: data.rows.item(0).order_date,
          status: data.rows.item(0).status,
          item_name: data.rows.item(0).name,
          item_stock: data.rows.item(0).stock,
          item_price: data.rows.item(0).price,
          item_min: data.rows.item(0).min_purc,
          item_promo: data.rows.item(0).promo_price,
          item_img: data.rows.item(0).image,
        };
      });
    }

    updateStatus(id, status) {
      return this.database
      .executeSql("UPDATE orders SET status = ? WHERE items_id = ?", [status, id])
      .then((_) => {
        this.loadOrders();
      });
    }

    addOrder(orderobj, dumpdata) {
      let data = [
        orderobj.items_id, orderobj.qty, orderobj.order_date,
        orderobj.amount, orderobj.cus_name, orderobj.cus_tel,
        orderobj.cus_address, orderobj.shipping_no, orderobj.status
      ];
      return this.database
      .executeSql(
        'INSERT INTO orders (items_id, qty, order_date, amount, cus_name, cus_tel, cus_address, shipping_no, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        data)
      .then((data) => {
        this.loadOrders();
        this.updateStock(dumpdata);
        return(data);
      })
      .catch((e) => {
        return "Error in addOrder" + JSON.stringify(e);
      });
    }

    updateStock(dumpdata) {
      console.log(dumpdata);
    }

    updateOrder(orderobj, dumpdata) {

      if(dumpdata.length!=0 || dumpdata.length!=null)
      {
        this.updateStock(dumpdata);
      }

      let data = [orderobj.items_id, 
        orderobj.qty, orderobj.amount, 
        orderobj.cus_name, orderobj.cus_tel, 
        orderobj.cus_address, orderobj.shipping_no, 
        orderobj.order_date, orderobj.status
      ];
      return this.database
      .executeSql(
        `UPDATE orders SET items_id = ?, qty = ?, amount = ?, cus_name = ?, cus_tel = ?, cus_address = ?, shipping_no = ?, order_date =?, status = ? WHERE order_id = ${orderobj.id}`,
        data)
      .then((data) => {
        this.loadOrders();
        this.updateItemEvent.emit();
      })
      .catch((e) => {
        return "Error in updateOrder" + JSON.stringify(e);
      });
    }

    getDate(): string
    {
      let date_ob = new Date();
      // adjust 0 before single digit date
      let date = ("0" + date_ob.getDate()).slice(-2);
      // current month
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
      // current year
      let year = date_ob.getFullYear();
      // current hours
      let hours = ("0" + date_ob.getHours()).slice(-2);
      // current minutes
      let minutes = ("0" + date_ob.getMinutes()).slice(-2);
      // current seconds
      let seconds = ("0" + date_ob.getSeconds()).slice(-2);
      // prints date & time in YYYY-MM-DD HH:MM:SS format
      return `${year}-${month}-${date}T${hours}:${minutes}:${seconds}`;
    }

  }
