(self["webpackChunkjustin"] = self["webpackChunkjustin"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 7008:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);









let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page }]),
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab2.page.html */ 2477);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 2055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);







let Tab2Page = class Tab2Page {
    constructor(router, db, alertController) {
        this.router = router;
        this.db = db;
        this.alertController = alertController;
        this.itemsList = [];
        this.db.updateItemEvent.subscribe((data) => {
            this.loadData();
        });
        this.loadData();
    }
    addItems() {
        this.router.navigate(["/additems", { mode: 1 }]);
    }
    loadData() {
        this.db.getItems().subscribe((data) => {
            this.itemsList = data;
        });
    }
    item_delete(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Alert",
                message: "Are you sure to delete?",
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            this.db.deleteItems(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab2Page);



/***/ }),

/***/ 2055:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-list ion-item {\n  padding-bottom: 5px;\n  width: 95%;\n  margin: 0 auto 10px auto;\n  border: rgba(0, 0, 0, 0.1) 1px solid;\n  box-shadow: 6px 7px 5px -2px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 6px 7px 5px -2px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 6px 7px 5px -2px rgba(0, 0, 0, 0.2);\n  border-radius: 15px;\n}\nion-list ion-item:hover {\n  width: 95%;\n  padding-bottom: 5px;\n  margin: 0 auto 10px auto;\n  border: rgba(0, 0, 0, 0.3) 1px solid;\n  box-shadow: 6px 7px 5px -2px rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 6px 7px 5px -2px rgba(0, 0, 0, 0.5);\n  -moz-box-shadow: 6px 7px 5px -2px rgba(0, 0, 0, 0.5);\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsdURBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHSTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQ0FBQTtFQUNBLHVEQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtBQURSIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMSkgMXB4IHNvbGlkO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDZweCA3cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNnB4IDdweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiA2cHggN3B4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtOmhvdmVyIHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogcmdiYSgwLCAwLCAwLCAwLjMpIDFweCBzb2xpZDtcclxuICAgICAgICBib3gtc2hhZG93OiA2cHggN3B4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDZweCA3cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogNnB4IDdweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 2477:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Items\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Items</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of itemsList\" align=\"center\">\n      <ion-thumbnail slot=\"start\" [routerLink]=\"['/additems', { mode: 2, id: item.id }]\">\n        <img [src]=\"item.image\">\n      </ion-thumbnail>\n      <div style=\"flex-direction: columm; width: 100%;\" [routerLink]=\"['/additems', { mode: 2, id: item.items_id }]\">\n        <h6>Name: {{item.name}}</h6>\n        <span>Price: {{item.price}} <br/>Stock: {{item.stock}}</span>\n      </div>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"item_delete(item.items_id)\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addItems()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map