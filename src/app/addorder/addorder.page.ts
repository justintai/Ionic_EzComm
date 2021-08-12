import { Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, Platform, ToastController } from '@ionic/angular';
import { HMSScan, ScanTypes, Colors, ErrorCorrectionLevel, HMSPermission } from '@hmscore/ionic-native-hms-scan/ngx';
import { 
  HMSSite, SearchService, SearchServiceFactory,
  TextSearchRequest, TextSearchResponse,
  NearbySearchRequest, NearbySearchResponse,
  DetailSearchRequest, DetailSearchResponse,
  QueryAutocompleteRequest, QueryAutocompleteResponse,
  QuerySuggestionRequest, QuerySuggestionResponse,
  SearchFilter, LocationType, HwLocationType
} from '@hmscore/ionic-native-hms-site/ngx';
import { HMSMap, CameraUpdateFactory, Color, HuaweiMap, LatLng, MarkerOptions } from '@hmscore/ionic-native-hms-map/ngx';

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
    "3": "Edit Order",
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
  cus_tel: string;
  cus_address: string;
  shipping_no: string = null;
  order_date = this.db.getDate();
  status: number = 2;
  newstatus: number;
  itemsList = [];
  dumpdata = [];

  cameraPerm: boolean = false;
  storagePerm: boolean = false;

  private searchService: SearchService = null;
  private readonly apiKey = "CgB6e3x991tj6QIY2ZM0aWY9crhqEPGLCnMwH4t9LNVXgmMSQQEDTKJNGH2woZCd10QSp1425eSqpfmK3QMpOLL1";
  map: HuaweiMap;
  iniLat:any = 1.7327292;
  iniLng:any = 103.7006713;

  constructor(
    private db: DatabaseService,
    private route: ActivatedRoute, 
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private platform: Platform,
    private router: Router,
    private hmsScanKit: HMSScan,
    private hmsSite: HMSSite,
    private hmsMap: HMSMap) 
    { 
      this.page_title = this.title[this.mode];

      SearchServiceFactory.create(this.apiKey)
      .then(service => this.searchService = service)
      .catch(err => console.log('An error occurred.'));
    }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if(rdy) {
        this.items = this.db.getItems();
        this.orders = this.db.getOrders();
      }
    });

    this.loadData();

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
      });
    }
  }
  
  //#region
  loadData() {
    this.db.getItems().subscribe((data) => {
      this.itemsList = data;
    })
  }

  selectItem($event) {
    this.item_id = $event.target.value;

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

      if(this.item_min != null)
      {
        if(this.qty >= this.item_min)
        {
          price = this.item_promo;
        }
        else{
          price = this.item_price;
        }
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

    if(this.shipping_no == null || this.shipping_no == '') {
      this.newstatus = 2;
    }
    else{
      this.newstatus = 1;
    }

    if(this.qty != null) {
      if(this.item_stock < this.qty)
      {
        let toast = await this.toastController.create({
          mode: "ios",
          message: "Purchase quantity cannot more than stock.",
          duration: 1000,
        });
        await toast.present();
        return false;
      }
    }

    if(this.mode == '1') {
      this.calculate();

      let orderObj = {
        items_id: this.item_id,
        qty: this.qty,
        amount: this.amount,
        cus_name: this.cus_name,
        cus_tel: this.cus_tel,
        cus_address: this.cus_address,
        shipping_no: this.shipping_no,
        order_date: this.order_date,
        status: this.newstatus
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

      let orderObj = {
        id: this.id,
        items_id: this.item_id,
        qty: this.qty,
        amount: this.amount,
        cus_name: this.cus_name,
        cus_tel: this.cus_tel,
        cus_address: this.cus_address,
        shipping_no: this.shipping_no,
        order_date: this.order_date,
        status: this.newstatus,
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
      id: this.item_id,
      items_id: this.item_id,
      stock: this.item_stock + this.qty,
      qty: this.qty,
      amount: this.amount,
      cus_name: this.cus_name,
      cus_tel: this.cus_tel,
      cus_address: this.cus_address,
      shipping_no: this.shipping_no,
      order_date: this.order_date,
      status: this.status,
    }

    this.db.updateStatus(orderObj.id, orderObj.status, orderObj.items_id, orderObj.stock).then((data) => {
      this.router.navigate(["/tabs/tab1"], { replaceUrl: true });
    })
    .catch((e) => {
      return "Error" + JSON.stringify(e);
    });
  }
  //#endregion
  
  // #region Scan Barcode
  async scanBarCode() {
    const permit = await this.checkScanPermission(0);

    if(permit)
    {
      this.defaultViewMode();
    }
  }

  async checkScanPermission(times) {
    try {
      const camRes = await this.hmsScanKit.hasPermission(HMSPermission.CAMERA);
      const stoRes = await this.hmsScanKit.hasPermission(HMSPermission.READ_EXTERNAL_STORAGE);
      let count = 0;
  
      if(times == 0) {
        if(!camRes) {
          this.hmsScanKit.requestPermission(HMSPermission.CAMERA);
        }
  
        if(!stoRes) {
          this.hmsScanKit.requestPermission(HMSPermission.READ_EXTERNAL_STORAGE);
        }
      }

      if(camRes && stoRes) {
        count = 2;
        times = 1;
      }
      else if((camRes && !stoRes) || (!camRes && stoRes)) {
        count = 1;
      }
      else {
        count = 0;
      }
      
      if(times == 0 && count == 0) {
        return new Promise((resolve) => {
          setTimeout(() => resolve(true), 3000)
        })
      }
      else if(times == 0 && count == 1) {
        return new Promise((resolve) => {
          setTimeout(() => resolve(true), 1500)
        })
      }
      else {
        return new Promise((resolve) => {
          setTimeout(() => resolve(true), 50)
        })
      }
    }
    catch(e) {
      console.error(JSON.stringify(e));
      return false;
    }
    
  }

  public async defaultViewMode() {
    const permit = await this.checkScanPermission(1);

    if(permit) {
      const scanTypes = [ScanTypes.ALL_SCAN_TYPE];
      this.hmsScanKit
        .defaultViewMode(scanTypes)
        .then((res) => {
          this.shipping_no = res.originalValue;
        })
        .catch((err) => {
          console.log('Scan Code Error: ', err);
        });
    }
  }
  // #endregion scan barcode

  mapsView() {
    this.router.navigate(["/maps", { id: this.cus_address}]);
  }
}
