(self["webpackChunkjustin"] = self["webpackChunkjustin"] || []).push([["src_app_about_about_module_ts"],{

/***/ 8057:
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 4518);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 6985:
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 8057);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 4518);







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage],
    })
], AboutPageModule);



/***/ }),

/***/ 4518:
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./about.page.html */ 866);
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss */ 7629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




// import { AppVersion } from '@ionic-native/app-version';
let AboutPage = class AboutPage {
    constructor() {
        // version: any = this.appVerison.getVersionNumber();
        this.versionNumber = "1.0.0";
    }
    ngOnInit() {
    }
};
AboutPage.ctorParameters = () => [];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutPage);



/***/ }),

/***/ 7629:
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-img {\n  border-radius: 25px !important;\n  overflow: hidden;\n  width: 120px;\n  height: 120px;\n  min-width: 80px !important;\n  max-width: 80px !important;\n  max-width: 120px !important;\n  max-height: 120px !important;\n  margin: 5px auto;\n  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtFQUNBLHNEQUFBO0VBQ0EsbURBQUE7QUFDSiIsImZpbGUiOiJhYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufSJdfQ== */");

/***/ }),

/***/ 866:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" mode=\"ios\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div align=\"center\">\n          <ion-img [src]=\"'./assets/icon/ezcomm-icon.png'\">\n          </ion-img>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div align=\"center\">\n          Version:&nbsp;{{versionNumber}}\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_about_about_module_ts.js.map