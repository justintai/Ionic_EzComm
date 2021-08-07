(self["webpackChunkjustin"] = self["webpackChunkjustin"] || []).push([["src_app_vieworder_vieworder_module_ts"],{

/***/ 9025:
/*!*******************************************************!*\
  !*** ./src/app/vieworder/vieworder-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VieworderPageRoutingModule": () => (/* binding */ VieworderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _vieworder_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vieworder.page */ 5896);




const routes = [
    {
        path: '',
        component: _vieworder_page__WEBPACK_IMPORTED_MODULE_0__.VieworderPage
    }
];
let VieworderPageRoutingModule = class VieworderPageRoutingModule {
};
VieworderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VieworderPageRoutingModule);



/***/ }),

/***/ 93:
/*!***********************************************!*\
  !*** ./src/app/vieworder/vieworder.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VieworderPageModule": () => (/* binding */ VieworderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _vieworder_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vieworder-routing.module */ 9025);
/* harmony import */ var _vieworder_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vieworder.page */ 5896);







let VieworderPageModule = class VieworderPageModule {
};
VieworderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vieworder_routing_module__WEBPACK_IMPORTED_MODULE_0__.VieworderPageRoutingModule
        ],
        declarations: [_vieworder_page__WEBPACK_IMPORTED_MODULE_1__.VieworderPage]
    })
], VieworderPageModule);



/***/ }),

/***/ 5896:
/*!*********************************************!*\
  !*** ./src/app/vieworder/vieworder.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VieworderPage": () => (/* binding */ VieworderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_vieworder_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vieworder.page.html */ 1531);
/* harmony import */ var _vieworder_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vieworder.page.scss */ 1387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let VieworderPage = class VieworderPage {
    constructor() {
    }
    ngOnInit() {
    }
    order_save() {
        console.log(this.order_date);
    }
    order_undo() {
    }
};
VieworderPage.ctorParameters = () => [];
VieworderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-vieworder',
        template: _raw_loader_vieworder_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vieworder_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VieworderPage);



/***/ }),

/***/ 1387:
/*!***********************************************!*\
  !*** ./src/app/vieworder/vieworder.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".item-img ion-img {\n  border-radius: 20px !important;\n  overflow: hidden;\n  width: 80px;\n  height: 80px;\n  min-width: 40px !important;\n  max-width: 40px !important;\n  max-width: 80px !important;\n  max-height: 80px !important;\n  margin: 40% 5%;\n  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n.input-border ion-textarea {\n  border: #d4d4d4 2px solid;\n  border-radius: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 15px;\n}\n\n.input-border ion-label {\n  font-size: 22px;\n}\n\nion-select, ion-datetime {\n  width: 100%;\n  height: 37px;\n  border: #d4d4d4 2px solid;\n  border-radius: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 15px;\n  margin-top: 3%;\n}\n\n.input-border:hover ion-textarea, .input-border:hover ion-datetime, .input-border:hover ion-select {\n  border-color: #494949;\n}\n\n.input-border:hover ion-label {\n  color: #3880ff;\n}\n\n.scan-btn {\n  margin-top: 10%;\n  padding-left: 0%;\n  padding-right: 2%;\n}\n\n.scan-btn ion-image {\n  width: 5px;\n  height: 5px;\n  min-width: 2px;\n  max-width: 2px;\n  max-width: 5px;\n  max-height: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdvcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSw4Q0FBQTtFQUNBLHNEQUFBO0VBQ0EsbURBQUE7QUFBUjs7QUFLSTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZSOztBQUtJO0VBQ0ksZUFBQTtBQUhSOztBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSko7O0FBUUk7RUFDSSxxQkFBQTtBQUxSOztBQVFJO0VBQ0ksY0FBQTtBQU5SOztBQVVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFQSjs7QUFXQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVJKIiwiZmlsZSI6InZpZXdvcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1pbWcge1xyXG4gICAgaW9uLWltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDQwJSA1JTtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnB1dC1ib3JkZXIge1xyXG4gICAgaW9uLXRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXI6IHJnYigyMTIsIDIxMiwgMjEyKSAycHggc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tc2VsZWN0LCBpb24tZGF0ZXRpbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBib3JkZXI6IHJnYigyMTIsIDIxMiwgMjEyKSAycHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG4uaW5wdXQtYm9yZGVyOmhvdmVyIHtcclxuICAgIGlvbi10ZXh0YXJlYSwgaW9uLWRhdGV0aW1lLCBpb24tc2VsZWN0IHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYig3MywgNzMsIDczKTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNTYsIDEyOCwgMjU1KTtcclxuICAgIH1cclxufVxyXG5cclxuLnNjYW4tYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxufVxyXG5cclxuLnNjYW4tYnRuIHtcclxuaW9uLWltYWdlIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIG1pbi13aWR0aDogMnB4O1xyXG4gICAgbWF4LXdpZHRoOiAycHg7XHJcbiAgICBtYXgtd2lkdGg6IDVweDtcclxuICAgIG1heC1oZWlnaHQ6IDVweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 1531:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vieworder/vieworder.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=false (click)=\"order_save()\"><ion-icon name=\"save\"></ion-icon></ion-button>\n      <ion-button (click)=\"order_undo()\"><ion-icon name=\"arrow-undo\"></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-title>Order</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <div class=\"item-img\">\n          <ion-img [src]=\"'./assets/svg/add_photo.svg'\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-list>\n          <ion-item lines=\"none\" class=\"input-border\">\n            <ion-label position=\"stacked\">Item Name*</ion-label>\n            <ion-select value=\"item\" interface=\"action-sheet\">\n              <ion-select-option value=\"enable\">Enable</ion-select-option>\n              <ion-select-option value=\"mute\">Mute</ion-select-option>\n              <ion-select-option value=\"mute_week\">Mute for a week</ion-select-option>\n              <ion-select-option value=\"mute_year\">Mute for a year</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n        \n        <ion-row>\n          <ion-item lines=\"none\" class=\"input-border\">\n            <ion-label position=\"stacked\">Stock</ion-label>\n            <ion-textarea rows=\"1\" cols=\"30\" readonly></ion-textarea>\n          </ion-item>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Price</ion-label>\n          <ion-textarea rows=\"1\" readonly></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Qty*</ion-label>\n          <ion-textarea rows=\"1\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Order Date</ion-label>\n          <ion-datetime displayFormat=\"YYYY-MM-DD\" min=\"2020-01-01\" [(ngModel)]=\"order_date\" ></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Amount</ion-label>\n          <ion-textarea rows=\"1\" readonly></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Customer Name*</ion-label>\n          <ion-textarea rows=\"1\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Tel.*</ion-label>\n          <ion-textarea rows=\"1\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Address*</ion-label>\n          <ion-textarea rows=\"3\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"1\" class=\"scan-btn\">\n        <ion-img [src]=\"'./assets/svg/scan.svg'\"></ion-img>\n      </ion-col>\n\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Shipping No.</ion-label>\n          <ion-textarea rows=\"1\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"1\" class=\"scan-btn\">\n        <ion-img [src]=\"'./assets/svg/scan.svg'\"></ion-img>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_vieworder_vieworder_module_ts.js.map