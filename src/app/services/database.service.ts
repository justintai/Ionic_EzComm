import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

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

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'ezcomm.db',
        location: 'default'
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
          this.loadOrder();
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

    getOrder(): Observable<any[]> {
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

    deleteItems(id) {
      return this.database
      .executeSql("DELETE FROM items WHERE items_id = ?", [id])
      .then((_) => {
        this.loadItems();
      });
    }

    addItems(name, price, stock, min_purc, promo, img, date) {
      let data = [name, price, stock, min_purc, promo, img, date];
      return this.database
      .executeSql(
        'INSERT INTO items (name, price, stock, min_purc, promo_price, image, created_date) VALUES (?, ?, ?, ?, ?, ?, ?)',
        data)
      .then(data => {
        this.loadItems();
      });
    }

    updateItems(id, name, price, stock, min_purc, promo, img) {
      let data = [name, price, stock, min_purc, promo, img];
      return this.database
      .executeSql(
        `UPDATE items SET name = ?, price = ?, stock = ?, min_purc = ?, promo_price = ?, image = ? WHERE items_id = ${id}`,
        data)
      .then(data => {
        this.loadItems();
      });
    }

// Order database
    loadOrder() {
      return this.database.executeSql('SELECT * FROM order', []).then(data => {
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

    cancelOrder(id) {
      return this.database
      .executeSql("UPDATE order SET status = 0 WHERE items_id = ?", [id])
      .then((_) => {
        this.loadOrder();
      });
    }

    addOrder() {
    }

    updateOrder() {
    }

  }
