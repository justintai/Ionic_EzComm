(self["webpackChunkjustin"] = self["webpackChunkjustin"] || []).push([["src_app_maps_maps_module_ts"],{

/***/ 1488:
/*!*********************************************!*\
  !*** ./src/app/maps/maps-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsPageRoutingModule": () => (/* binding */ MapsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _maps_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps.page */ 9024);




const routes = [
    {
        path: '',
        component: _maps_page__WEBPACK_IMPORTED_MODULE_0__.MapsPage
    }
];
let MapsPageRoutingModule = class MapsPageRoutingModule {
};
MapsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapsPageRoutingModule);



/***/ }),

/***/ 3842:
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsPageModule": () => (/* binding */ MapsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps-routing.module */ 1488);
/* harmony import */ var _maps_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.page */ 9024);







let MapsPageModule = class MapsPageModule {
};
MapsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _maps_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapsPageRoutingModule
        ],
        declarations: [_maps_page__WEBPACK_IMPORTED_MODULE_1__.MapsPage]
    })
], MapsPageModule);



/***/ }),

/***/ 9024:
/*!***********************************!*\
  !*** ./src/app/maps/maps.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsPage": () => (/* binding */ MapsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_maps_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./maps.page.html */ 8653);
/* harmony import */ var _maps_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.page.scss */ 3974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let MapsPage = class MapsPage {
    constructor() { }
    ngOnInit() {
    }
};
MapsPage.ctorParameters = () => [];
MapsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-maps',
        template: _raw_loader_maps_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_maps_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapsPage);



/***/ }),

/***/ 3974:
/*!*************************************!*\
  !*** ./src/app/maps/maps.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  background-color: transparent;\n  --ion-background-color: transparent;\n}\n\n#map-view {\n  width: 80%;\n  height: 500px;\n  padding: 15px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxtQ0FBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6Im1hcHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI21hcC12aWV3IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ 8653:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/maps.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Maps</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"map-view\"></div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_maps_maps_module_ts.js.map