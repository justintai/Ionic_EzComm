(self["webpackChunkjustin"] = self["webpackChunkjustin"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 2501:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 9474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 4382);







let Tab1Page = class Tab1Page {
    constructor(router, db, alertController) {
        this.router = router;
        this.db = db;
        this.alertController = alertController;
        this.pending_order = [];
        this.complete_order = [];
        this.cancel_order = [];
        this.db.updateItemEvent.subscribe((data) => {
            this.loadData();
        });
        this.loadData();
    }
    ngOnInit() {
        this.type = 'pending';
    }
    loadData() {
        this.db.getOrders().subscribe((data) => {
            this.pending_order = data.filter((each) => {
                if (each.status == 2) {
                    return each;
                }
            });
            this.complete_order = data.filter((each) => {
                if (each.status == 1) {
                    return each;
                }
            });
            this.cancel_order = data.filter((each) => {
                if (each.status == 0) {
                    return each;
                }
            });
        });
    }
    segmentChanged(ev) {
        console.log('Segment changed', ev);
    }
    addOrder() {
        this.router.navigate(["/addorder", { mode: 1 }]);
    }
    cancelOrder(id, item_id, stock, qty) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            stock = stock + qty;
            const alert = yield this.alertController.create({
                header: "Alert",
                message: "Are you sure to cancel this order?",
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            this.db.updateStatus(id, 0, item_id, stock);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    undoOrder(id, item_id, stock, qty) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            stock = stock - qty;
            const alert = yield this.alertController.create({
                header: "Alert",
                message: "Are you sure to revert this order?",
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            this.db.updateStatus(id, 2, item_id, stock);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 9474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-segment-button {\n  width: 33% !important;\n}\n\nion-badge {\n  border-radius: 15px;\n  width: 20px;\n  height: 20px;\n}\n\nion-list ion-item {\n  width: 95%;\n  padding-bottom: 5px;\n  margin: 0 auto 10px auto;\n  border: rgba(0, 0, 0, 0.1) 1px solid;\n  box-shadow: 6px 7px 5px -2px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 6px 7px 5px -2px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 6px 7px 5px -2px rgba(0, 0, 0, 0.2);\n  border-radius: 15px;\n}\n\nion-list ion-item:hover {\n  width: 95%;\n  padding-bottom: 5px;\n  margin: 0 auto 10px auto;\n  border: rgba(0, 0, 0, 0.3) 1px solid;\n  box-shadow: 6px 7px 5px -2px rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 6px 7px 5px -2px rgba(0, 0, 0, 0.5);\n  -moz-box-shadow: 6px 7px 5px -2px rgba(0, 0, 0, 0.5);\n  border-radius: 15px;\n}\n\nion-list .icon_btn {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFHSTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQ0FBQTtFQUNBLHVEQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtBQUFSOztBQUdJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsdURBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0FBRFI7O0FBSUk7RUFDSSxpQkFBQTtBQUZSIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMyUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJhZGdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMSkgMXB4IHNvbGlkO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDZweCA3cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNnB4IDdweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiA2cHggN3B4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtOmhvdmVyIHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogcmdiYSgwLCAwLCAwLCAwLjMpIDFweCBzb2xpZDtcclxuICAgICAgICBib3gtc2hhZG93OiA2cHggN3B4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDZweCA3cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogNnB4IDdweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbl9idG4ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Home</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-segment [(ngModel)]=\"type\" value=\"pending\">\n    <ion-segment-button value=\"pending\">\n      <ion-label>Pending\n        <ion-badge align=\"center\" slot=\"end\">{{pending_order.length}}</ion-badge>\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"completed\">\n      <ion-label>Completed\n        <ion-badge align=\"center\" color=\"success\" slot=\"end\">{{complete_order.length}}</ion-badge>\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"cancelled\">\n      <ion-label>Cancelled\n        <ion-badge align=\"center\" color=\"danger\" slot=\"end\">{{cancel_order.length}}</ion-badge>\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]=\"type\">\n    <ion-list *ngSwitchCase=\"'pending'\">\n      <div align=\"center\" class=\"text_css\" *ngIf=\"pending_order.length==0\">\n        <h1>No contents</h1>\n      </div>\n      <ion-item *ngFor=\"let order of pending_order\">\n        <ion-thumbnail slot=\"start\" [routerLink]=\"['/addorder', { mode: 2, id: order.order_id }]\">\n          <img [src]=\"order.item_img\">\n        </ion-thumbnail>\n        <ion-grid>\n          <ion-row [routerLink]=\"['/addorder', { mode: 2, id: order.order_id }]\">\n            <h6>Item: {{order.item_name}}</h6>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\" [routerLink]=\"['/addorder', { mode: 2, id: order.order_id }]\">\n              <div>\n                <span>Cus:<br/>\n                  <i>&nbsp;{{order.cus_name}}</i><br/>\n                  Tel:<br/>\n                  <i>&nbsp;{{order.cus_tel}}</i>\n                </span>\n              </div>\n            </ion-col>\n            <ion-col size=\"5\" [routerLink]=\"['/addorder', { mode: 2, id: order.order_id }]\">\n              <div>\n                <span>Qty:<br/>\n                  <i>&nbsp;{{order.qty}}</i><br/>\n                  Amount:<br/>\n                  <i>&nbsp;{{order.amount}}</i>\n                </span>\n              </div>\n            </ion-col>\n            <ion-col class=\"icon_btn\" size=\"1\" (click)=\"cancelOrder(order.order_id, order.items_id, order.item_stock, order.qty)\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'completed'\">\n      <div align=\"center\" class=\"text_css\" *ngIf=\"complete_order.length==0\">\n        <h1>No contents</h1>\n      </div>\n      <ion-item *ngFor=\"let order of complete_order\">\n        <ion-thumbnail slot=\"start\" [routerLink]=\"['/addorder', { mode: 2, id: order.order_id }]\">\n          <img [src]=\"order.item_img\">\n        </ion-thumbnail>\n        <ion-grid [routerLink]=\"['/addorder', { mode: 2, id: order.order_id }]\">\n          <ion-row>\n            <h6>Item: {{order.item_name}}</h6>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div>\n                <span>Cus:<br/>\n                  <i>&nbsp;{{order.cus_name}}</i><br/>\n                  Tel:<br/>\n                  <i>&nbsp;{{order.cus_tel}}</i>\n                </span>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div>\n                <span>Qty:<br/>\n                  <i>&nbsp;{{order.qty}}</i><br/>\n                  Amount:<br/>\n                  <i>&nbsp;{{order.amount}}</i>\n                </span>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div>\n                <span>Track No:\n                  <i>&nbsp;{{order.shipping_no}}</i>\n                </span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'cancelled'\">\n      <div align=\"center\" class=\"text_css\" *ngIf=\"cancel_order.length==0\">\n        <h1>No contents</h1>\n      </div>\n      <ion-item *ngFor=\"let order of cancel_order\">\n        <ion-thumbnail slot=\"start\" [routerLink]=\"['/addorder', { mode: 4, id: order.order_id }]\">\n          <img [src]=\"order.item_img\">\n        </ion-thumbnail>\n        <ion-grid>\n          <ion-row [routerLink]=\"['/addorder', { mode: 4, id: order.order_id }]\">\n            <h6>Item: {{order.item_name}}</h6>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\" [routerLink]=\"['/addorder', { mode: 4, id: order.order_id }]\">\n              <div>\n                <span>Cus:<br/>\n                  <i>&nbsp;{{order.cus_name}}</i><br/>\n                  Tel:<br/>\n                  <i>&nbsp;{{order.cus_tel}}</i>\n                </span>\n              </div>\n            </ion-col>\n            <ion-col size=\"5\" [routerLink]=\"['/addorder', { mode: 4, id: order.order_id }]\">\n              <div>\n                <span>Qty:<br/>\n                  <i>&nbsp;{{order.qty}}</i><br/>\n                  Amount:<br/>\n                  <i>&nbsp;{{order.amount}}</i>\n                </span>\n              </div>\n            </ion-col>\n            <ion-col class=\"icon_btn\" size=\"1\" (click)=\"undoOrder(order.order_id, order.items_id, order.item_stock, order.qty)\">\n              <ion-icon name=\"arrow-undo\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addOrder()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map