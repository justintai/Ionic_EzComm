(self["webpackChunkjustin"] = self["webpackChunkjustin"] || []).push([["src_app_addorder_addorder_module_ts"],{

/***/ 6620:
/*!*****************************************************!*\
  !*** ./src/app/addorder/addorder-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddorderPageRoutingModule": () => (/* binding */ AddorderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _addorder_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addorder.page */ 9940);




const routes = [
    {
        path: '',
        component: _addorder_page__WEBPACK_IMPORTED_MODULE_0__.AddorderPage
    }
];
let AddorderPageRoutingModule = class AddorderPageRoutingModule {
};
AddorderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddorderPageRoutingModule);



/***/ }),

/***/ 263:
/*!*********************************************!*\
  !*** ./src/app/addorder/addorder.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddorderPageModule": () => (/* binding */ AddorderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _addorder_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addorder-routing.module */ 6620);
/* harmony import */ var _addorder_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addorder.page */ 9940);







let AddorderPageModule = class AddorderPageModule {
};
AddorderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addorder_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddorderPageRoutingModule
        ],
        declarations: [_addorder_page__WEBPACK_IMPORTED_MODULE_1__.AddorderPage]
    })
], AddorderPageModule);



/***/ }),

/***/ 9940:
/*!*******************************************!*\
  !*** ./src/app/addorder/addorder.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddorderPage": () => (/* binding */ AddorderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_addorder_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addorder.page.html */ 7511);
/* harmony import */ var _addorder_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addorder.page.scss */ 1432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);







let AddorderPage = class AddorderPage {
    constructor(db, route, actionSheetController, toastController, platform, router) {
        this.db = db;
        this.route = route;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.platform = platform;
        this.router = router;
        this.mode = this.route.snapshot.paramMap.get("mode");
        this.id = this.route.snapshot.paramMap.get("id");
        this.title = {
            "1": "Add Order",
            "2": "Order Details",
            "3": "Edit Item",
            "4": "Cancelled Order"
        };
        this.order = {};
        this.item = {};
        this.item_image = "./assets/svg/add_photo.svg";
        this.item_price = null;
        this.item_stock = null;
        this.item_min = null;
        this.item_promo = null;
        this.item_id = null;
        this.qty = null;
        this.amount = null;
        this.order_date = this.db.getDate();
        this.status = 2;
        this.itemsList = [];
        this.dumpdata = [];
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
            if (rdy) {
                this.items = this.db.getItems();
                this.orders = this.db.getOrders();
            }
        });
        if (this.mode == '2' || this.mode == '3' || this.mode == '4') {
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
                this.dumpdata.push({
                    item_id: data["items_id"],
                    qty: data["qty"]
                });
            });
        }
    }
    loadData() {
        this.db.getItems().subscribe((data) => {
            this.itemsList = data;
        });
    }
    loadingOrder() {
        this.db.getOrders().subscribe((data) => {
            console.log(data);
        });
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
        });
    }
    calculate() {
        if (this.qty != null) {
            let price = 0;
            if (this.qty >= this.item_min) {
                price = this.item_promo;
            }
            else {
                price = this.item_price;
            }
            this.amount = this.qty * price;
        }
    }
    order_save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.item_name == null) {
                let toast = yield this.toastController.create({
                    mode: "ios",
                    message: "Please select an item.",
                    duration: 1000,
                });
                yield toast.present();
                return false;
            }
            if (this.qty == null) {
                let toast = yield this.toastController.create({
                    mode: "ios",
                    message: "Please enter quantity of purchase.",
                    duration: 1000,
                });
                yield toast.present();
                return false;
            }
            if (this.cus_name == null) {
                let toast = yield this.toastController.create({
                    mode: "ios",
                    message: "Please enter customer name.",
                    duration: 1000,
                });
                yield toast.present();
                return false;
            }
            if (this.cus_tel == null) {
                let toast = yield this.toastController.create({
                    mode: "ios",
                    message: "Please enter customer contact number.",
                    duration: 1000,
                });
                yield toast.present();
                return false;
            }
            if (this.shipping_no != null) {
                this.status = 1;
            }
            if (this.mode == '1') {
                this.calculate();
                if (this.shipping_no != null || this.shipping_no != '') {
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
                };
                this.dumpdata.push({
                    item_id: this.item_id,
                    qty: this.qty
                });
                this.db.addOrder(orderObj, this.dumpdata).then((data) => {
                    if (data["insertId"]) {
                        this.router.navigate(["/tabs/tab1"], { replaceUrl: true });
                    }
                });
            }
            else if (this.mode == '3') {
                this.calculate();
                if (this.shipping_no != null || this.shipping_no != '') {
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
                };
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
        });
    }
    order_edit() {
        this.router.navigate(["/addorder", { mode: 3, id: this.id }]);
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
        };
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
};
AddorderPage.ctorParameters = () => [
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AddorderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-addorder',
        template: _raw_loader_addorder_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addorder_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddorderPage);



/***/ }),

/***/ 1432:
/*!*********************************************!*\
  !*** ./src/app/addorder/addorder.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".item-img ion-img {\n  border-radius: 20px !important;\n  overflow: hidden;\n  width: 80px;\n  height: 80px;\n  min-width: 40px !important;\n  max-width: 40px !important;\n  max-width: 80px !important;\n  max-height: 80px !important;\n  margin: 40% 5%;\n  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n.input-border ion-textarea {\n  border: #d4d4d4 2px solid;\n  border-radius: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 15px;\n}\n\n.input-border ion-input {\n  border: #d4d4d4 2px solid;\n  border-radius: 15px;\n  margin-top: 2%;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  font-size: 15px;\n}\n\n.input-border ion-label {\n  font-size: 22px;\n}\n\nion-select, ion-datetime {\n  width: 100%;\n  height: 37px;\n  border: #d4d4d4 2px solid;\n  border-radius: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 15px;\n  margin-top: 3%;\n}\n\n.input-border:hover ion-input, .input-border:hover ion-textarea, .input-border:hover ion-datetime, .input-border:hover ion-select {\n  border-color: #494949;\n}\n\n.input-border:hover ion-label {\n  color: #3880ff;\n}\n\n.scan-btn {\n  margin-top: 10%;\n  padding-left: 0%;\n  padding-right: 2%;\n}\n\n.scan-btn ion-image {\n  width: 5px;\n  height: 5px;\n  min-width: 2px;\n  max-width: 2px;\n  max-width: 5px;\n  max-height: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZG9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0VBQ0Esc0RBQUE7RUFDQSxtREFBQTtBQUFSOztBQUtJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRlI7O0FBS0k7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSFI7O0FBTUk7RUFDSSxlQUFBO0FBSlI7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFMSjs7QUFTSTtFQUNJLHFCQUFBO0FBTlI7O0FBU0k7RUFDSSxjQUFBO0FBUFI7O0FBV0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVlBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBVEoiLCJmaWxlIjoiYWRkb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0taW1nIHtcclxuICAgIGlvbi1pbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiA0MCUgNSU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5wdXQtYm9yZGVyIHtcclxuICAgIGlvbi10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyOiByZ2IoMjEyLCAyMTIsIDIxMikgMnB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiByZ2IoMjEyLCAyMTIsIDIxMikgMnB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXNlbGVjdCwgaW9uLWRhdGV0aW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgYm9yZGVyOiByZ2IoMjEyLCAyMTIsIDIxMikgMnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG5cclxuLmlucHV0LWJvcmRlcjpob3ZlciB7XHJcbiAgICBpb24taW5wdXQsIGlvbi10ZXh0YXJlYSwgaW9uLWRhdGV0aW1lLCBpb24tc2VsZWN0IHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYig3MywgNzMsIDczKTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNTYsIDEyOCwgMjU1KTtcclxuICAgIH1cclxufVxyXG5cclxuLnNjYW4tYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxufVxyXG5cclxuLnNjYW4tYnRuIHtcclxuaW9uLWltYWdlIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIG1pbi13aWR0aDogMnB4O1xyXG4gICAgbWF4LXdpZHRoOiAycHg7XHJcbiAgICBtYXgtd2lkdGg6IDVweDtcclxuICAgIG1heC1oZWlnaHQ6IDVweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 7511:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addorder/addorder.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"mode == '2'\" (click)=\"order_edit()\"><ion-icon name=\"create\"></ion-icon></ion-button>\n      <ion-button *ngIf=\"mode == '1' || mode == '3'\" (click)=\"order_save()\"><ion-icon name=\"save\"></ion-icon></ion-button>\n      <ion-button *ngIf=\"mode == '4'\" (click)=\"order_undo()\"><ion-icon name=\"arrow-undo\"></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-title>{{page_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <div class=\"item-img\">\n          <ion-img [src]=\"item_image\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-list>\n          <ion-item lines=\"none\" class=\"input-border\">\n            <ion-label position=\"stacked\">Item Name*</ion-label>\n            <ion-select value=\"item\" interface=\"action-sheet\" (ionChange)=\"selectItem($event)\" #itemSelection>\n              <ion-select-option value=\"{{item.items_id}}\" *ngFor=\"let item of itemsList\">{{item.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n        \n        <ion-row>\n          <ion-item lines=\"none\" class=\"input-border\">\n            <ion-label position=\"stacked\">Stock</ion-label>\n            <ion-input readonly [(ngModel)]=\"item_stock\" type=\"number\"></ion-input>\n          </ion-item>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Price</ion-label>\n          <ion-input readonly [(ngModel)]=\"item_price\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Qty*</ion-label>\n          <ion-input [readonly]=\"mode == '2' || mode == '4'\" \n            [(ngModel)]=\"qty\" \n            type=\"number\" \n            (click)=\"calculate()\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Order Date</ion-label>\n          <ion-datetime displayFormat=\"YYYY-MM-DD\" \n          min=\"2020-01-01\" \n          max=\"2100-01-01\" \n          [(ngModel)]=\"order_date\" (click)=\"calculate()\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Amount</ion-label>\n          <ion-input readonly [(ngModel)]=\"amount\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Customer Name*</ion-label>\n          <ion-input [readonly]=\"mode == '2' || mode == '4'\" [(ngModel)]=\"cus_name\" (click)=\"calculate()\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Tel.*</ion-label>\n          <ion-input [readonly]=\"mode == '2' || mode == '4'\" [(ngModel)]=\"cus_tel\" type=\"number\" (click)=\"calculate()\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Address</ion-label>\n          <ion-textarea rows=\"3\" [readonly]=\"mode == '2' || mode == '4'\" [(ngModel)]=\"cus_address\" (click)=\"calculate()\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"1\" class=\"scan-btn\">\n        <ion-img [src]=\"'./assets/svg/scan.svg'\" (click)=\"scanAddress()\"></ion-img>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Shipping No.</ion-label>\n          <ion-input [readonly]=\"mode == '2' || mode == '4'\" [(ngModel)]=\"shipping_no\" (click)=\"calculate()\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"1\" class=\"scan-btn\">\n        <ion-img [src]=\"'./assets/svg/scan.svg'\" (click)=\"scanBarCode()\"></ion-img>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_addorder_addorder_module_ts.js.map