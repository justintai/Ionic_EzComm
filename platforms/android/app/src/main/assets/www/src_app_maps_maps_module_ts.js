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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps-routing.module */ 1488);
/* harmony import */ var _maps_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.page */ 9024);
/* harmony import */ var _hmscore_ionic_native_hms_site_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hmscore/ionic-native-hms-site/ngx */ 3234);
/* harmony import */ var _hmscore_ionic_native_hms_map_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hmscore/ionic-native-hms-map/ngx */ 1733);









let MapsPageModule = class MapsPageModule {
};
MapsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _maps_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapsPageRoutingModule
        ],
        declarations: [_maps_page__WEBPACK_IMPORTED_MODULE_1__.MapsPage],
        providers: [_hmscore_ionic_native_hms_site_ngx__WEBPACK_IMPORTED_MODULE_2__.HMSSite, _hmscore_ionic_native_hms_map_ngx__WEBPACK_IMPORTED_MODULE_3__.HMSMap]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_maps_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./maps.page.html */ 8653);
/* harmony import */ var _maps_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.page.scss */ 3974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _hmscore_ionic_native_hms_site_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hmscore/ionic-native-hms-site/ngx */ 3234);
/* harmony import */ var _hmscore_ionic_native_hms_map_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hmscore/ionic-native-hms-map/ngx */ 1733);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);







let MapsPage = class MapsPage {
    constructor(route, hmsSite, hmsMap) {
        this.route = route;
        this.hmsSite = hmsSite;
        this.hmsMap = hmsMap;
        this.address = this.route.snapshot.paramMap.get("id");
        this.searchService = null;
        this.apiKey = "CgB6e3x991tj6QIY2ZM0aWY9crhqEPGLCnMwH4t9LNVXgmMSQQEDTKJNGH2woZCd10QSp1425eSqpfmK3QMpOLL1";
        this.iniLat = 1.7327292;
        this.iniLng = 103.7006713;
        _hmscore_ionic_native_hms_site_ngx__WEBPACK_IMPORTED_MODULE_2__.SearchServiceFactory.create(this.apiKey)
            .then(service => this.searchService = service)
            .catch(err => console.log('An error occurred.'));
    }
    ngOnInit() {
    }
    ionViewWillLeave() {
        if (this.map)
            this.map.hideMap();
    }
    ngOnDestroy() {
        if (this.map)
            this.map.destroyMap();
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const mapOptions = {
                cameraPosition: {
                    target: { lat: this.iniLat, lng: this.iniLng },
                    zoom: 2
                }
            };
            this.map = yield this.hmsMap.getMap('map-view', mapOptions);
            // await this.map.setMyLocationEnabled(true);
            yield this.map.getUiSettings().setGestureScaleByMapCenter(true);
            yield this.locationSearch();
        });
    }
    initMap() {
        this.hmsMap.requestPermission();
        const mapOptions = {
            cameraPosition: {
                target: {
                    lat: this.iniLat,
                    lng: this.iniLng
                },
                zoom: 7
            }
        };
        this.hmsMap.getMap('map-view', mapOptions).then((map) => {
            this.map = map;
            console.log('Map Initialized!');
        }).catch(e => console.log('Map Initialize error: ' + JSON.stringify(e)));
    }
    // scrollStart(event) {
    //   console.log('logScrollStart : When Scroll Starts', event);
    // }
    // async scrolling(event) {
    //     console.log('logScrolling : When Scrolling', event);
    //     await this.map.scroll();
    // }
    // scrollEnd(event) {
    //     console.log('logScrollEnd : When Scroll Ends', event);
    // }
    locationSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const textSearchReq = {
                children: false,
                query: this.address,
                location: {
                    lat: this.iniLat,
                    lng: this.iniLng,
                },
                radius: 50000,
                poiType: _hmscore_ionic_native_hms_site_ngx__WEBPACK_IMPORTED_MODULE_2__.LocationType.ADDRESS,
                hwPoiType: _hmscore_ionic_native_hms_site_ngx__WEBPACK_IMPORTED_MODULE_2__.HwLocationType.ADDRESS,
                countryCode: "MY",
                language: "en",
                pageIndex: 1,
                pageSize: 5
            };
            const response = yield this.searchService.textSearch(textSearchReq);
            let obj = JSON.parse(response);
            let cameraLocation;
            if (obj.length != 0) {
                cameraLocation = obj.sites[0].location;
                try {
                    yield this.map.moveCamera(_hmscore_ionic_native_hms_map_ngx__WEBPACK_IMPORTED_MODULE_3__.CameraUpdateFactory.newCameraPosition({
                        target: {
                            lat: cameraLocation.lat,
                            lng: cameraLocation.lng
                        },
                        zoom: 15
                    }));
                    yield this.map.addMarker({
                        position: {
                            lat: cameraLocation.lat,
                            lng: cameraLocation.lng
                        }
                    });
                }
                catch (e) {
                    console.error('error : ', e);
                }
            }
        });
    }
};
MapsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _hmscore_ionic_native_hms_site_ngx__WEBPACK_IMPORTED_MODULE_2__.HMSSite },
    { type: _hmscore_ionic_native_hms_map_ngx__WEBPACK_IMPORTED_MODULE_3__.HMSMap }
];
MapsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUNBQUE7QUFBSiIsImZpbGUiOiJtYXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8vICNtYXBzIHtcclxuLy8gICAgIHdpZHRoOiA4MCU7XHJcbi8vICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4vLyAgICAgcGFkZGluZzogMTVweDtcclxuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyB9Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" mode=\"ios\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Maps</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div id=\"map-view\" style=\"width:100%;height:100%;\"></div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_maps_maps_module_ts.js.map