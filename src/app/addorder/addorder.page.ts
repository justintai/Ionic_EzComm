import { Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.page.html',
  styleUrls: ['./addorder.page.scss'],
})

export class AddorderPage implements OnInit {

  mode = this.route.snapshot.paramMap.get("mode");
  id = this.route.snapshot.paramMap.get("id");

  title = {
    "1": "Add Order",
    "2": "Order Details",
    "3": "Edit Item",
    "4": "Cancelled Order"
  }

  page_title: string;
  items: Observable<any[]>;
  orders: Observable<any[]>;
  order = {};
  item = {};

  item_image: string = "./assets/svg/add_photo.svg";
  item_name: string;
  item_price: number = null;
  item_stock: number = null;
  item_min: number = null;
  item_promo: number = null;
  item_id: number = null;
  qty: number = null;
  amount: number = null;
  cus_name: string;
  cus_tel: number;
  cus_address: string;
  shipping_no: string;
  order_date = this.db.getDate();
  status: number = 2;
  itemsList = [];
  dumpdata = [];

  constructor(
    private db: DatabaseService,
    private route: ActivatedRoute, 
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private platform: Platform,
    private router: Router
    ) { 
      this.page_title = this.title[this.mode];

      this.db.updateItemEvent.subscribe((data) => {
        this.loadData();
      });
      this.loadData();

      this.db.updateItemEvent.subscribe((data) => {
        this.loadingOrder();
      });
      this.loadingOrder();
  }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if(rdy) {
        this.items = this.db.getItems();
        this.orders = this.db.getOrders();
      }
    });

    if(this.mode == '2' || this.mode == '3' || this.mode == '4')
    {
      this.db.getOrder(this.id).then((data) => {
        this.item_id = data["items_id"];
        this.qty = data["qty"];
        this.amount = data["amount"];
        this.cus_name = data["cus_name"];
        this.cus_tel = data["cus_tel"];
        this.cus_address = data["cus_address"];
        this.shipping_no = data["shipping_no"];
        this.order_date = data["order_date"];
        this.status = data["status"];
        this.item_name = data["item_name"];
        this.item_stock = data["item_stock"];
        this.item_price = data["item_price"];
        this.item_min = data["item_min"];
        this.item_promo = data["item_promo"];
        this.item_image = data["item_img"];
        this.dumpdata.push(
          {
            item_id: data["items_id"],
            qty: data["qty"]
          });
      })
    }
  }

  loadData() {
    this.db.getItems().subscribe((data) => {
      this.itemsList = data;
    })
  }

  loadingOrder() {
    this.db.getOrders().subscribe((data) => {
      console.log(data);
    })
  }

  selectItem($event) {
    this.item_id = $event.target.value;
    console.log(this.item_id);

    this.db.getItem(this.item_id).then((data) => {
      this.item_name = data["name"];
      this.item_stock = data["stock"];
      this.item_price = data["price"];
      this.item_min = data["min_purc"];
      this.item_promo = data["promo_price"];
      this.item_image = data["image"];
    })
  }

  calculate() {
    if(this.qty !=null) {
      let price = 0;

      if(this.qty >= this.item_min)
      {
        price = this.item_promo;
      }
      else{
        price = this.item_price;
      }

      this.amount = this.qty * price;
    }
  }

  async order_save() {
    if(this.item_name == null) {
      let toast = await this.toastController.create({
        mode: "ios",
        message: "Please select an item.",
        duration: 1000,
      });
      await toast.present();
      return false;
    }

    if(this.qty == null) {
      let toast = await this.toastController.create({
        mode: "ios",
        message: "Please enter quantity of purchase.",
        duration: 1000,
      });
      await toast.present();
      return false;
    }

    if(this.cus_name == null) {
      let toast = await this.toastController.create({
        mode: "ios",
        message: "Please enter customer name.",
        duration: 1000,
      });
      await toast.present();
      return false;
    }

    if(this.cus_tel == null) {
      let toast = await this.toastController.create({
        mode: "ios",
        message: "Please enter customer contact number.",
        duration: 1000,
      });
      await toast.present();
      return false;
    }

    if(this.shipping_no != null) {
      this.status = 1;
    }

    if(this.mode == '1') {
      this.calculate();

      if(this.shipping_no != null || this.shipping_no != '') {
        this.status = 1;
      }

      let orderObj = {
        items_id: this.item_id,
        qty: this.qty,
        amount: this.amount,
        cus_name: this.cus_name,
        cus_tel: this.cus_tel,
        cus_address: this.cus_address,
        shipping_no: this.shipping_no,
        order_date: this.order_date,
        status: this.status
      }

      this.dumpdata.push({
        item_id: this.item_id,
        qty: this.qty
      });

      this.db.addOrder(orderObj, this.dumpdata).then((data) => {
        if(data["insertId"]) {
          this.router.navigate(["/tabs/tab1"], { replaceUrl: true });
        }
      });
    }
    else if(this.mode == '3') {
      this.calculate();

      if(this.shipping_no != null || this.shipping_no != '') {
        this.status = 1;
      }

      let orderObj = {
        items_id: this.item_id,
        qty: this.qty,
        amount: this.amount,
        cus_name: this.cus_name,
        cus_tel: this.cus_tel,
        cus_address: this.cus_address,
        shipping_no: this.shipping_no,
        order_date: this.order_date,
        status: this.status,
      }

      this.dumpdata.push({
        item_id: this.item_id,
        qty: this.qty
      });

      this.db.updateOrder(orderObj, this.dumpdata).then((data) => {
        this.router.navigate(["/tabs/tab1"], { replaceUrl: true });
      })
      .catch((e) => {
        return "Error" + JSON.stringify(e);
      });
    }
  }

  order_edit() {
    this.router.navigate(["/addorder", { mode: 3, id: this.id}]);
  }

  order_undo() {
    this.status = 2;
    let orderObj = {
      items_id: this.item_id,
      qty: this.qty,
      amount: this.amount,
      cus_name: this.cus_name,
      cus_tel: this.cus_tel,
      cus_address: this.cus_address,
      shipping_no: this.shipping_no,
      order_date: this.order_date,
      status: this.status,
    }

    this.db.updateOrder(orderObj, 0).then((data) => {
      this.router.navigate(["/tabs/tab1"], { replaceUrl: true });
    })
    .catch((e) => {
      return "Error" + JSON.stringify(e);
    });
  }

  scanAddress() {
  }

  scanBarCode() {
  }

}
