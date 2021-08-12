(self["webpackChunkjustin"] = self["webpackChunkjustin"] || []).push([["src_app_addorder_addorder_module_ts"],{

/***/ 9469:
/*!*******************************************************************************!*\
  !*** ./node_modules/@hmscore/ionic-native-hms-scan/__ivy_ngcc__/ngx/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HMSScan": () => (/* binding */ HMSScan),
/* harmony export */   "MultiProcessor": () => (/* binding */ MultiProcessor),
/* harmony export */   "CustomView": () => (/* binding */ CustomView),
/* harmony export */   "HMSPermission": () => (/* binding */ HMSPermission),
/* harmony export */   "ErrorCorrectionLevel": () => (/* binding */ ErrorCorrectionLevel),
/* harmony export */   "Colors": () => (/* binding */ Colors),
/* harmony export */   "ScanTypes": () => (/* binding */ ScanTypes),
/* harmony export */   "RectStyle": () => (/* binding */ RectStyle)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 399);
/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/




var HMSScan = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(HMSScan, _super);
    function HMSScan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks whether necessary permissions are granted to use the services.
     * @param  {Permission} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSScan.prototype.hasPermission = function (permission) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hasPermission", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains a permission to use the services.
     * @param  {Permission} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSScan.prototype.requestPermission = function (permission) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "requestPermission", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains a permissions to use the services.
     * @param  {Permission[]} permissions Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSScan.prototype.requestPermissions = function (permissions) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "requestPermissions", { "otherPromise": true }, arguments); };
    ;
    /**
     * Enables the HMSLogger capability which is used for sending usage analytics of Scan SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    HMSScan.prototype.enableLogger = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * Disables the HMSLogger capability which is used for sending usage analytics of Scan SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    HMSScan.prototype.disableLogger = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "disableLogger", { "otherPromise": true }, arguments); };
    /**
     * In Default View mode, Scan Kit scans barcodes using the camera or from images in the album, and also provides activities that can be directly used.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format..
     * @returns Promise<any>
     */
    HMSScan.prototype.defaultViewMode = function (scanTypes) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "defaultViewMode", { "otherPromise": true }, arguments); };
    /**
     * This service works asynchronously, defines the bitmap given as a parameter, and returns the Scan results.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    HMSScan.prototype.analyzInAsyn = function (filePath, scanTypes) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "analyzInAsyn", { "otherPromise": true }, arguments); };
    /**
     * This service works synchronously, defines the bitmap given as a parameter, and returns the Scan results.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    HMSScan.prototype.analyseFrame = function (filePath, scanTypes) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "analyseFrame", { "otherPromise": true }, arguments); };
    /**
     * The service recognition scanning barcodes from images in Bitmap mode.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    HMSScan.prototype.decodeWithBitmap = function (filePath, scanTypes) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "decodeWithBitmap", { "otherPromise": true }, arguments); };
    /**
     * Scan Kit can convert character strings into 1D or 2D barcodes in 13 formats, including EAN-8, EAN-13, UPC-A, UPC-E, Codabar, Code 39, Code 93, Code 128, ITF, QR code, Data Matrix, PDF417, and Aztec. Besides a character string, you still need to specify the format and size for generating a barcode.
     * @param  {BuildBitmapRequest} buildBitmapRequest Contains the settings of the barcode generation service.
     * @returns Promise<any>
     */
    HMSScan.prototype.buildBitmap = function (buildBitmapRequest) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "buildBitmap", { "otherPromise": true }, arguments); };
    /**
     * Obtains the bitmap from the corresponding file path, performs sampling rate compression, and returns the bitmap that meets the size requirements.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    HMSScan.prototype.detectForHmsDector = function (filePath, scanTypes) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "detectForHmsDector", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSScan.prototype, "Colors", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "Colors"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "Colors", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSScan.prototype, "ScanTypes", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "ScanTypes"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "ScanTypes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSScan.prototype, "RectStyle", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "RectStyle"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSScan.prototype, "Permission", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "Permission"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "Permission", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSScan.prototype, "ErrorCorrectionLevel", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "ErrorCorrectionLevel"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "ErrorCorrectionLevel", value); },
        enumerable: true,
        configurable: true
    });
    HMSScan.pluginName = "HMSScan";
    HMSScan.plugin = "cordova-plugin-hms-scan";
    HMSScan.pluginRef = "HMSScan";
    HMSScan.platforms = ["Android"];
HMSScan.ɵfac = /*@__PURE__*/ function () { var ɵHMSScan_BaseFactory; return function HMSScan_Factory(t) { return (ɵHMSScan_BaseFactory || (ɵHMSScan_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](HMSScan)))(t || HMSScan); }; }();
HMSScan.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HMSScan, factory: function (t) { return HMSScan.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HMSScan, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return HMSScan;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));

var MultiProcessor = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MultiProcessor, _super);
    function MultiProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
      * The service process of using the MultiProcessor mode in synchronous mode.
      * @param  {string} divId ScanArea
      * @param  {MultiProcessorSynModeRequest} multiProcessorSynModeRequest Contains the settings of the multiProcessorSynMode service.
      * @returns Promise<any>
     */
    MultiProcessor.prototype.multiProcessorSynMode = function (divId, multiProcessorSynModeRequest) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "multiProcessorSynMode", { "otherPromise": true }, arguments); };
    /**
     * The service process of using the MultiProcessor mode in asynchronous mode
      * @param  {string} divId ScanArea
      * @param  {MultiProcessorSynModeRequest} multiProcessorSynModeRequest Contains the settings of the multiProcessorSynMode service.
      * @returns Promise<any>
     */
    MultiProcessor.prototype.multiProcessorAsynMode = function (divId, multiProcessorAsynModeRequest) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "multiProcessorAsynMode", { "otherPromise": true }, arguments); };
    /**
     * It recognizes barcodes using the camera in Bitmap mode.
     * @param  {string} divId ScanArea
     * @param  {BitmapModeRequest} bitmapModeRequest Contains the settings of the BitmapMode service.
     * @returns Promise<any>
     */
    MultiProcessor.prototype.bitmapMode = function (divId, bitmapModeRequest) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "bitmapMode", { "otherPromise": true }, arguments); };
    /**
     * The service process of using the MultiProcessor and bitmap mode
      * @param  {string} eventName Event name.
      * @param  {(value: any) => void} call Method.
      * @returns void
     */
    MultiProcessor.prototype.on = function (eventName, call) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "on", {}, arguments); };
    /**
     * It stops the custom view mode service.
     * @returns Promise<any>
     */
    MultiProcessor.prototype.stopViewService = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stopViewService", { "otherPromise": true }, arguments); };
    Object.defineProperty(MultiProcessor.prototype, "Colors", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "Colors"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "Colors", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiProcessor.prototype, "ScanTypes", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "ScanTypes"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "ScanTypes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiProcessor.prototype, "RectStyle", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "RectStyle"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiProcessor.prototype, "Permission", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "Permission"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "Permission", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiProcessor.prototype, "ErrorCorrectionLevel", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "ErrorCorrectionLevel"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "ErrorCorrectionLevel", value); },
        enumerable: true,
        configurable: true
    });
    MultiProcessor.pluginName = "MultiProcessor";
    MultiProcessor.plugin = "cordova-plugin-hms-scan";
    MultiProcessor.pluginRef = "MultiProcessor";
    MultiProcessor.platforms = ["Android"];
MultiProcessor.ɵfac = /*@__PURE__*/ function () { var ɵMultiProcessor_BaseFactory; return function MultiProcessor_Factory(t) { return (ɵMultiProcessor_BaseFactory || (ɵMultiProcessor_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MultiProcessor)))(t || MultiProcessor); }; }();
MultiProcessor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MultiProcessor, factory: function (t) { return MultiProcessor.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MultiProcessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return MultiProcessor;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));

var CustomView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(CustomView, _super);
    function CustomView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * In Customized View mode, you do not need to worry about developing the scanning process or camera control.
     * @param  {string} divId ScanArea
     * @param  {CustomViewModeRequest} customViewModeRequest Contains the settings of the customViewMode service.
     * @returns Promise<any>
     */
    CustomView.prototype.customViewMode = function (divId, customViewModeRequest) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "customViewMode", { "otherPromise": true }, arguments); };
    /**
     * It opens flush light.
     * @returns Promise<any>
     */
    CustomView.prototype.openFlushLight = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "openFlushLight", { "otherPromise": true }, arguments); };
    /**
     * It pause the continuously scan.
     * @returns Promise<any>
     */
    CustomView.prototype.pauseContinuouslyScan = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "pauseContinuouslyScan", { "otherPromise": true }, arguments); };
    /**
     * The service process of using the MultiProcessor and bitmap mode
      * @param  {string} eventName Event name.
      * @param  {(value: any) => void} call Method.
      * @returns void
     */
    CustomView.prototype.on = function (eventName, call) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "on", {}, arguments); };
    /**
     * It resume the continuously scan.
     * @returns Promise<any>
     */
    CustomView.prototype.resumeContinuouslyScan = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "resumeContinuouslyScan", { "otherPromise": true }, arguments); };
    /**
     * It stops the custom view mode service.
     * @returns Promise<any>
     */
    CustomView.prototype.stopViewService = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stopViewService", { "otherPromise": true }, arguments); };
    Object.defineProperty(CustomView.prototype, "Colors", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "Colors"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "Colors", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomView.prototype, "ScanTypes", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "ScanTypes"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "ScanTypes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomView.prototype, "RectStyle", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "RectStyle"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomView.prototype, "Permission", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "Permission"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "Permission", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomView.prototype, "ErrorCorrectionLevel", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "ErrorCorrectionLevel"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "ErrorCorrectionLevel", value); },
        enumerable: true,
        configurable: true
    });
    CustomView.pluginName = "CustomView";
    CustomView.plugin = "cordova-plugin-hms-scan";
    CustomView.pluginRef = "CustomView";
    CustomView.platforms = ["Android"];
CustomView.ɵfac = /*@__PURE__*/ function () { var ɵCustomView_BaseFactory; return function CustomView_Factory(t) { return (ɵCustomView_BaseFactory || (ɵCustomView_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](CustomView)))(t || CustomView); }; }();
CustomView.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CustomView, factory: function (t) { return CustomView.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CustomView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return CustomView;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));

var HMSPermission;
(function (HMSPermission) {
    HMSPermission["CAMERA"] = "android.permission.CAMERA";
    HMSPermission["READ_EXTERNAL_STORAGE"] = "android.permission.READ_EXTERNAL_STORAGE";
})(HMSPermission || (HMSPermission = {}));
var ErrorCorrectionLevel;
(function (ErrorCorrectionLevel) {
    ErrorCorrectionLevel["L"] = "L";
    ErrorCorrectionLevel["M"] = "M";
    ErrorCorrectionLevel["Q"] = "Q";
    ErrorCorrectionLevel["H"] = "H";
})(ErrorCorrectionLevel || (ErrorCorrectionLevel = {}));
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = -65536] = "RED";
    Colors[Colors["DKGRAY"] = -12303292] = "DKGRAY";
    Colors[Colors["GRAY"] = -7829368] = "GRAY";
    Colors[Colors["WHITE"] = -1] = "WHITE";
    Colors[Colors["BLUE"] = -16776961] = "BLUE";
    Colors[Colors["BLACK"] = -16777216] = "BLACK";
    Colors[Colors["LTGRAY"] = -3355444] = "LTGRAY";
    Colors[Colors["MAGENTA"] = -65281] = "MAGENTA";
    Colors[Colors["YELLOW"] = -256] = "YELLOW";
    Colors[Colors["CYAN"] = -16711681] = "CYAN";
    Colors[Colors["GREEN"] = -16711936] = "GREEN";
    Colors[Colors["TRANSPARENT"] = 0] = "TRANSPARENT";
})(Colors || (Colors = {}));
var ScanTypes;
(function (ScanTypes) {
    ScanTypes[ScanTypes["OTHER_SCAN_TYPE"] = -1] = "OTHER_SCAN_TYPE";
    ScanTypes[ScanTypes["ALL_SCAN_TYPE"] = 0] = "ALL_SCAN_TYPE";
    ScanTypes[ScanTypes["CODE128_SCAN_TYPE"] = 64] = "CODE128_SCAN_TYPE";
    ScanTypes[ScanTypes["CODE39_SCAN_TYPE"] = 16] = "CODE39_SCAN_TYPE";
    ScanTypes[ScanTypes["CODE93_SCAN_TYPE"] = 32] = "CODE93_SCAN_TYPE";
    ScanTypes[ScanTypes["CODABAR_SCAN_TYPE"] = 4096] = "CODABAR_SCAN_TYPE";
    ScanTypes[ScanTypes["DATAMATRIX_SCAN_TYPE"] = 4] = "DATAMATRIX_SCAN_TYPE";
    ScanTypes[ScanTypes["EAN13_SCAN_TYPE"] = 128] = "EAN13_SCAN_TYPE";
    ScanTypes[ScanTypes["EAN8_SCAN_TYPE"] = 256] = "EAN8_SCAN_TYPE";
    ScanTypes[ScanTypes["ITF14_SCAN_TYPE"] = 512] = "ITF14_SCAN_TYPE";
    ScanTypes[ScanTypes["QRCODE_SCAN_TYPE"] = 1] = "QRCODE_SCAN_TYPE";
    ScanTypes[ScanTypes["UPCCODE_A_SCAN_TYPE"] = 1024] = "UPCCODE_A_SCAN_TYPE";
    ScanTypes[ScanTypes["UPCCODE_E_SCAN_TYPE"] = 2048] = "UPCCODE_E_SCAN_TYPE";
    ScanTypes[ScanTypes["PDF417_SCAN_TYPE"] = 8] = "PDF417_SCAN_TYPE";
    ScanTypes[ScanTypes["AZTEC_SCAN_TYPE"] = 2] = "AZTEC_SCAN_TYPE";
})(ScanTypes || (ScanTypes = {}));
var RectStyle;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 0] = "STROKE";
    RectStyle[RectStyle["FILL"] = 1] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 2] = "FILL_AND_STROKE";
})(RectStyle || (RectStyle = {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvaG1zLXNjYW4vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUc7QUFHRTtBQUFDO0FBQ0Q7QUFDQTtBQUVGO0FBQUM7QUFFQztBQUFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTixFQUZFO0FBQUM7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7O0FBQUM7QUFJbEYsSUEyQnFCLDJCQUFpQjtBQUFDO0FBRTNCO0FBSWpCO0FBQU0sSUFTUDtBQUFJO0FBRU47QUFDQztBQUNBLE9BQUk7QUFBQyxJQUNKLCtCQUFhLGFBQUMsVUFBeUI7QUFLdkMsSUFIQyxDQUFDO0FBQUMsSUFFSDtBQUFJO0FBRU47QUFDQztBQUNDLE9BQUc7QUFBQyxJQUNKLG1DQUFpQixhQUFDLFVBQXlCO0FBS3ZDLElBSEgsQ0FBQztBQUFDLElBRUg7QUFBSTtBQUVOO0FBQ0M7QUFDQyxPQUFHO0FBQUMsSUFDSixvQ0FBa0IsYUFBQyxXQUE0QjtBQUsxQyxJQUhKLENBQUM7QUFBQyxJQUVIO0FBQUk7QUFFTjtBQUNDLE9BQUk7QUFBQyxJQUNKLDhCQUFZO0FBS0EsSUFEWjtBQUFJO0FBRU47QUFDQyxPQUFJO0FBQUMsSUFDSiwrQkFBYTtBQU1GLElBRFg7QUFBSTtBQUVOO0FBQ0M7QUFDQyxPQUFHO0FBQUMsSUFDSixpQ0FBZSxhQUFDLFNBQXNCO0FBS25DLElBREg7QUFBSTtBQUVOO0FBQ0M7QUFDQztBQUNDLE9BQUU7QUFBQyxJQUNKLDhCQUFZLGFBQUMsUUFBZ0IsRUFBRSxTQUFzQjtBQU12RCxJQURFO0FBQUk7QUFFTjtBQUNDO0FBQ0M7QUFDQyxPQUFFO0FBQUMsSUFDSiw4QkFBWSxhQUFDLFFBQWdCLEVBQUUsU0FBc0I7QUFNdkQsSUFERTtBQUFJO0FB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V0FBWSxTQUFTO0FBQ3JCLElBQUUsZ0VBQW9CLENBQUE7QUFBQyxJQUNyQiwyREFBaUIsQ0FBQTtBQUFDLElBQ2xCLG9FQUFzQixDQUFBO0FBQUMsSUFDdkIsa0VBQXFCLENBQUE7QUFBQyxJQUN0QixrRUFBcUIsQ0FBQTtBQUFDLElBQ3RCLHNFQUF3QixDQUFBO0FBQUMsSUFDekIseUVBQXdCLENBQUE7QUFBQyxJQUN6QixpRUFBcUIsQ0FBQTtBQUFDLElBQ3RCLCtEQUFvQixDQUFBO0FBQUMsSUFDckIsaUVBQXFCLENBQUE7QUFBQyxJQUN0QixpRUFBb0IsQ0FBQTtBQUFDLElBQ3JCLDBFQUEwQixDQUFBO0FBQUMsSUFDM0IsMEVBQTBCLENBQUE7QUFBQyxJQUMzQixpRUFBb0IsQ0FBQTtBQUFDLElBQ3JCLCtEQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFoQlcsU0FBUyxLQUFULFNBQVMsUUFnQnBCO0FBQ0QsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztBQUNyQixJQUFFLDZDQUFVLENBQUE7QUFBQyxJQUNYLHlDQUFRLENBQUE7QUFBQyxJQUNULCtEQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFKVyxTQUFTLEtBQVQsU0FBUyxRQUlwQjtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuQ29weXJpZ2h0IDIwMjAuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuLyoqXHJcbiAqIEBuYW1lIEhNU1NjYW5cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvcmRvdmEgU2NhbiBQbHVnaW4gZW5hYmxlcyBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhlIEhNUyBDb3JlIFNjYW4gU0RLIGFuZCBDb3Jkb3ZhIHBsYXRmb3JtLiBUaGlzIHBsdWdpbiBkZW1vbnN0cmF0ZXMgd2lkZS1yYW5naW5nIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIEhNUyBDb3JlIFNjYW4gU0RLLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBITVNTY2FuIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9obXMtc2Nhbic7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaG1zU2NhbjogSE1TU2NhbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmhtc1NjYW4uZGVmYXVsdFZpZXdNb2RlKFJlcXVlc3QpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TU2NhbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLXNjYW4nLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdITVNTY2FuJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNTY2FuIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBDb2xvcnMgPSBDb2xvcnM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgU2NhblR5cGVzID0gU2NhblR5cGVzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBQZXJtaXNzaW9uID0gSE1TUGVybWlzc2lvbjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFcnJvckNvcnJlY3Rpb25MZXZlbCA9IEVycm9yQ29ycmVjdGlvbkxldmVsO1xyXG5cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBDaGVja3Mgd2hldGhlciBuZWNlc3NhcnkgcGVybWlzc2lvbnMgYXJlIGdyYW50ZWQgdG8gdXNlIHRoZSBzZXJ2aWNlcy5cclxuICAgKiBAcGFyYW0gIHtQZXJtaXNzaW9ufSBwZXJtaXNzaW9uIFJlcHJlc2VudHMgdGhlIGxpc3QgaW4gd2hpY2ggcGVybWlzc2lvbiBuYW1lcyBhcmUga2VwdC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICovXHJcbiAgaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uOiBITVNQZXJtaXNzaW9uKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogT2J0YWlucyBhIHBlcm1pc3Npb24gdG8gdXNlIHRoZSBzZXJ2aWNlcy5cclxuICAgKiBAcGFyYW0gIHtQZXJtaXNzaW9ufSBwZXJtaXNzaW9uIFJlcHJlc2VudHMgdGhlIGxpc3QgaW4gd2hpY2ggcGVybWlzc2lvbiBuYW1lcyBhcmUga2VwdC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICByZXF1ZXN0UGVybWlzc2lvbihwZXJtaXNzaW9uOiBITVNQZXJtaXNzaW9uKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogT2J0YWlucyBhIHBlcm1pc3Npb25zIHRvIHVzZSB0aGUgc2VydmljZXMuXHJcbiAgICogQHBhcmFtICB7UGVybWlzc2lvbltdfSBwZXJtaXNzaW9ucyBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgcmVxdWVzdFBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBITVNQZXJtaXNzaW9uW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBFbmFibGVzIHRoZSBITVNMb2dnZXIgY2FwYWJpbGl0eSB3aGljaCBpcyB1c2VkIGZvciBzZW5kaW5nIHVzYWdlIGFuYWx5dGljcyBvZiBTY2FuIFNESydzIG1ldGhvZHMgdG8gaW1wcm92ZSB0aGUgc2VydmljZSBxdWFsaXR5LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIERpc2FibGVzIHRoZSBITVNMb2dnZXIgY2FwYWJpbGl0eSB3aGljaCBpcyB1c2VkIGZvciBzZW5kaW5nIHVzYWdlIGFuYWx5dGljcyBvZiBTY2FuIFNESydzIG1ldGhvZHMgdG8gaW1wcm92ZSB0aGUgc2VydmljZSBxdWFsaXR5LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSW4gRGVmYXVsdCBWaWV3IG1vZGUsIFNjYW4gS2l0IHNjYW5zIGJhcmNvZGVzIHVzaW5nIHRoZSBjYW1lcmEgb3IgZnJvbSBpbWFnZXMgaW4gdGhlIGFsYnVtLCBhbmQgYWxzbyBwcm92aWRlcyBhY3Rpdml0aWVzIHRoYXQgY2FuIGJlIGRpcmVjdGx5IHVzZWQuXHJcbiAgICogQHBhcmFtICB7U2NhblR5cGVzW119IHNjYW5UeXBlcyBTZXRzIHRoZSBiYXJjb2RlIHNjYW5uaW5nIGZvcm1hdC4uXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZGVmYXVsdFZpZXdNb2RlKHNjYW5UeXBlczogU2NhblR5cGVzW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgc2VydmljZSB3b3JrcyBhc3luY2hyb25vdXNseSwgZGVmaW5lcyB0aGUgYml0bWFwIGdpdmVuIGFzIGEgcGFyYW1ldGVyLCBhbmQgcmV0dXJucyB0aGUgU2NhbiByZXN1bHRzLlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZmlsZVBhdGggVGhlIFVSSSBvZiB0aGUgcGhvdG8gcmVxdWVzdGVkIHRvIGJlIHNjYW5uZWQgYnkgdGhlIHNlcnZpY2UuXHJcbiAgICogQHBhcmFtICB7U2NhblR5cGVzW119IHNjYW5UeXBlcyBTZXRzIHRoZSBiYXJjb2RlIHNjYW5uaW5nIGZvcm1hdC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBhbmFseXpJbkFzeW4oZmlsZVBhdGg6IHN0cmluZywgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgc2VydmljZSB3b3JrcyBzeW5jaHJvbm91c2x5LCBkZWZpbmVzIHRoZSBiaXRtYXAgZ2l2ZW4gYXMgYSBwYXJhbWV0ZXIsIGFuZCByZXR1cm5zIHRoZSBTY2FuIHJlc3VsdHMuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBmaWxlUGF0aCBUaGUgVVJJIG9mIHRoZSBwaG90byByZXF1ZXN0ZWQgdG8gYmUgc2Nhbm5lZCBieSB0aGUgc2VydmljZS5cclxuICAgKiBAcGFyYW0gIHtTY2FuVHlwZXNbXX0gc2NhblR5cGVzIFNldHMgdGhlIGJhcmNvZGUgc2Nhbm5pbmcgZm9ybWF0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGFuYWx5c2VGcmFtZShmaWxlUGF0aDogc3RyaW5nLCBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhlIHNlcnZpY2UgcmVjb2duaXRpb24gc2Nhbm5pbmcgYmFyY29kZXMgZnJvbSBpbWFnZXMgaW4gQml0bWFwIG1vZGUuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBmaWxlUGF0aCBUaGUgVVJJIG9mIHRoZSBwaG90byByZXF1ZXN0ZWQgdG8gYmUgc2Nhbm5lZCBieSB0aGUgc2VydmljZS5cclxuICAgKiBAcGFyYW0gIHtTY2FuVHlwZXNbXX0gc2NhblR5cGVzIFNldHMgdGhlIGJhcmNvZGUgc2Nhbm5pbmcgZm9ybWF0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGRlY29kZVdpdGhCaXRtYXAoZmlsZVBhdGg6IHN0cmluZywgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFNjYW4gS2l0IGNhbiBjb252ZXJ0IGNoYXJhY3RlciBzdHJpbmdzIGludG8gMUQgb3IgMkQgYmFyY29kZXMgaW4gMTMgZm9ybWF0cywgaW5jbHVkaW5nIEVBTi04LCBFQU4tMTMsIFVQQy1BLCBVUEMtRSwgQ29kYWJhciwgQ29kZSAzOSwgQ29kZSA5MywgQ29kZSAxMjgsIElURiwgUVIgY29kZSwgRGF0YSBNYXRyaXgsIFBERjQxNywgYW5kIEF6dGVjLiBCZXNpZGVzIGEgY2hhcmFjdGVyIHN0cmluZywgeW91IHN0aWxsIG5lZWQgdG8gc3BlY2lmeSB0aGUgZm9ybWF0IGFuZCBzaXplIGZvciBnZW5lcmF0aW5nIGEgYmFyY29kZS5cclxuICAgKiBAcGFyYW0gIHtCdWlsZEJpdG1hcFJlcXVlc3R9IGJ1aWxkQml0bWFwUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIGJhcmNvZGUgZ2VuZXJhdGlvbiBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGJ1aWxkQml0bWFwKGJ1aWxkQml0bWFwUmVxdWVzdDogQnVpbGRCaXRtYXBSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogT2J0YWlucyB0aGUgYml0bWFwIGZyb20gdGhlIGNvcnJlc3BvbmRpbmcgZmlsZSBwYXRoLCBwZXJmb3JtcyBzYW1wbGluZyByYXRlIGNvbXByZXNzaW9uLCBhbmQgcmV0dXJucyB0aGUgYml0bWFwIHRoYXQgbWVldHMgdGhlIHNpemUgcmVxdWlyZW1lbnRzLlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZmlsZVBhdGggVGhlIFVSSSBvZiB0aGUgcGhvdG8gcmVxdWVzdGVkIHRvIGJlIHNjYW5uZWQgYnkgdGhlIHNlcnZpY2UuXHJcbiAgICogQHBhcmFtICB7U2NhblR5cGVzW119IHNjYW5UeXBlcyBTZXRzIHRoZSBiYXJjb2RlIHNjYW5uaW5nIGZvcm1hdC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBkZXRlY3RGb3JIbXNEZWN0b3IoZmlsZVBhdGg6IHN0cmluZywgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTXVsdGlQcm9jZXNzb3InLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1zY2FuJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnTXVsdGlQcm9jZXNzb3InLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXVsdGlQcm9jZXNzb3IgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIENvbG9ycyA9IENvbG9ycztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBTY2FuVHlwZXMgPSBTY2FuVHlwZXM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFBlcm1pc3Npb24gPSBITVNQZXJtaXNzaW9uO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVycm9yQ29ycmVjdGlvbkxldmVsID0gRXJyb3JDb3JyZWN0aW9uTGV2ZWw7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICAqIFRoZSBzZXJ2aWNlIHByb2Nlc3Mgb2YgdXNpbmcgdGhlIE11bHRpUHJvY2Vzc29yIG1vZGUgaW4gc3luY2hyb25vdXMgbW9kZS5cclxuICAgICogQHBhcmFtICB7c3RyaW5nfSBkaXZJZCBTY2FuQXJlYSBcclxuICAgICogQHBhcmFtICB7TXVsdGlQcm9jZXNzb3JTeW5Nb2RlUmVxdWVzdH0gbXVsdGlQcm9jZXNzb3JTeW5Nb2RlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIG11bHRpUHJvY2Vzc29yU3luTW9kZSBzZXJ2aWNlLlxyXG4gICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBtdWx0aVByb2Nlc3NvclN5bk1vZGUoZGl2SWQ6IHN0cmluZywgbXVsdGlQcm9jZXNzb3JTeW5Nb2RlUmVxdWVzdDogTXVsdGlQcm9jZXNzb3JNb2RlUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2aWNlIHByb2Nlc3Mgb2YgdXNpbmcgdGhlIE11bHRpUHJvY2Vzc29yIG1vZGUgaW4gYXN5bmNocm9ub3VzIG1vZGVcclxuICAgICogQHBhcmFtICB7c3RyaW5nfSBkaXZJZCBTY2FuQXJlYSBcclxuICAgICogQHBhcmFtICB7TXVsdGlQcm9jZXNzb3JTeW5Nb2RlUmVxdWVzdH0gbXVsdGlQcm9jZXNzb3JTeW5Nb2RlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIG11bHRpUHJvY2Vzc29yU3luTW9kZSBzZXJ2aWNlLlxyXG4gICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBtdWx0aVByb2Nlc3NvckFzeW5Nb2RlKGRpdklkOiBzdHJpbmcsIG11bHRpUHJvY2Vzc29yQXN5bk1vZGVSZXF1ZXN0OiBNdWx0aVByb2Nlc3Nvck1vZGVSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSXQgcmVjb2duaXplcyBiYXJjb2RlcyB1c2luZyB0aGUgY2FtZXJhIGluIEJpdG1hcCBtb2RlLlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZGl2SWQgU2NhbkFyZWEgXHJcbiAgICogQHBhcmFtICB7Qml0bWFwTW9kZVJlcXVlc3R9IGJpdG1hcE1vZGVSZXF1ZXN0IENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgQml0bWFwTW9kZSBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGJpdG1hcE1vZGUoZGl2SWQ6IHN0cmluZywgYml0bWFwTW9kZVJlcXVlc3Q6IEJpdG1hcE1vZGVSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICAvKipcclxuICAgKiBUaGUgc2VydmljZSBwcm9jZXNzIG9mIHVzaW5nIHRoZSBNdWx0aVByb2Nlc3NvciBhbmQgYml0bWFwIG1vZGVcclxuICAgICogQHBhcmFtICB7c3RyaW5nfSBldmVudE5hbWUgRXZlbnQgbmFtZS4gXHJcbiAgICAqIEBwYXJhbSAgeyh2YWx1ZTogYW55KSA9PiB2b2lkfSBjYWxsIE1ldGhvZC5cclxuICAgICogQHJldHVybnMgdm9pZFxyXG4gICAqL1xyXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJdCBzdG9wcyB0aGUgY3VzdG9tIHZpZXcgbW9kZSBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHN0b3BWaWV3U2VydmljZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdDdXN0b21WaWV3JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtc2NhbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ0N1c3RvbVZpZXcnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tVmlldyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQ29sb3JzID0gQ29sb3JzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFNjYW5UeXBlcyA9IFNjYW5UeXBlcztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUGVybWlzc2lvbiA9IEhNU1Blcm1pc3Npb247XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSBFcnJvckNvcnJlY3Rpb25MZXZlbDtcclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJbiBDdXN0b21pemVkIFZpZXcgbW9kZSwgeW91IGRvIG5vdCBuZWVkIHRvIHdvcnJ5IGFib3V0IGRldmVsb3BpbmcgdGhlIHNjYW5uaW5nIHByb2Nlc3Mgb3IgY2FtZXJhIGNvbnRyb2wuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBkaXZJZCBTY2FuQXJlYSBcclxuICAgKiBAcGFyYW0gIHtDdXN0b21WaWV3TW9kZVJlcXVlc3R9IGN1c3RvbVZpZXdNb2RlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIGN1c3RvbVZpZXdNb2RlIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgY3VzdG9tVmlld01vZGUoZGl2SWQ6IHN0cmluZywgY3VzdG9tVmlld01vZGVSZXF1ZXN0OiBDdXN0b21WaWV3TW9kZVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJdCBvcGVucyBmbHVzaCBsaWdodC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBvcGVuRmx1c2hMaWdodCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJdCBwYXVzZSB0aGUgY29udGludW91c2x5IHNjYW4uXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgcGF1c2VDb250aW51b3VzbHlTY2FuKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgLyoqXHJcbiAgICogVGhlIHNlcnZpY2UgcHJvY2VzcyBvZiB1c2luZyB0aGUgTXVsdGlQcm9jZXNzb3IgYW5kIGJpdG1hcCBtb2RlXHJcbiAgICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIEV2ZW50IG5hbWUuIFxyXG4gICAgKiBAcGFyYW0gIHsodmFsdWU6IGFueSkgPT4gdm9pZH0gY2FsbCBNZXRob2QuXHJcbiAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgKi9cclxuICBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbDogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSXQgcmVzdW1lIHRoZSBjb250aW51b3VzbHkgc2Nhbi5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICByZXN1bWVDb250aW51b3VzbHlTY2FuKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEl0IHN0b3BzIHRoZSBjdXN0b20gdmlldyBtb2RlIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgc3RvcFZpZXdTZXJ2aWNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbVZpZXdNb2RlUmVxdWVzdCB7XHJcbiAgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSB8IFNjYW5UeXBlcztcclxuICBpc0NvbnRpbnVvdXNseVNjYW4/OiBib29sZWFuO1xyXG4gIGVuYWJsZVJldHVybkJpdG1hcD86IGJvb2xlYW47XHJcbiAgZW5hYmxlU2NhbkFyZWFCb3g/OiBib29sZWFuO1xyXG4gIHNjYW5GcmFtZVNpemU/OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNdWx0aVByb2Nlc3Nvck1vZGVSZXF1ZXN0IHtcclxuICBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdIHwgU2NhblR5cGVzO1xyXG4gIHNjYW5GcmFtZVNpemU/OiBudW1iZXI7XHJcbiAgZW5hYmxlU2NhbkFyZWFCb3g/OiBib29sZWFuO1xyXG4gIGVuYWJsZURyYXdTY2FuUmVzdWx0PzogYm9vbGVhbjtcclxuICB2aWV3QXR0cmlidXRlcz86IFZpZXdBdHRyaWJ1dGVzO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlld0F0dHJpYnV0ZXMge1xyXG4gIHRleHRDb2xvcj86IENvbG9ycztcclxuICB0ZXh0U2l6ZT86IG51bWJlcjtcclxuICBzdHJva2VXaXRkaD86IG51bWJlcjtcclxuICByZWN0Q29sb3I/OiBDb2xvcnM7XHJcbiAgcmVjdFN0eWxlPzogUmVjdFN0eWxlO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQnVpbGRCaXRtYXBSZXF1ZXN0IHtcclxuICBpbnB1dENvbnRlbnQ6IHN0cmluZztcclxuICBiYXJjb2RlRm9ybWF0OiBTY2FuVHlwZXM7XHJcbiAgYmFyY29kZVdpZHRoPzogbnVtYmVyO1xyXG4gIGJhcmNvZGVIZWlnaHQ/OiBudW1iZXI7XHJcbiAgaG1zQnVpbGRCaXRtYXBPcHRpb25zPzogSE1TQnVpbGRCaXRtYXBPcHRpb25zO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSE1TQnVpbGRCaXRtYXBPcHRpb25zIHtcclxuICBiaXRtYXBNYXJnaW4/OiBudW1iZXI7XHJcbiAgYml0bWFwQ29sb3I/OiBDb2xvcnM7XHJcbiAgYml0bWFwQmFja2dyb3VuZENvbG9yPzogQ29sb3JzO1xyXG4gIHFyRXJyb3JDb3JyZWN0aW9uTGV2ZWw/OiBFcnJvckNvcnJlY3Rpb25MZXZlbCxcclxuICBxckxvZ29CaXRtYXA/OiBzdHJpbmdcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJpdG1hcE1vZGVSZXF1ZXN0IHtcclxuICBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdO1xyXG4gIHNjYW5GcmFtZVNpemU/OiBudW1iZXI7XHJcbiAgZW5hYmxlU2NhbkFyZWFCb3g/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2NhbkJvdW5kcyB7XHJcbiAgbWFyZ2luVG9wPzogbnVtYmVyLFxyXG4gIG1hcmdpbkJvdHRvbT86IG51bWJlclxyXG59XHJcbmV4cG9ydCBlbnVtIEhNU1Blcm1pc3Npb24ge1xyXG4gIENBTUVSQSA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQVwiLFxyXG4gIFJFQURfRVhURVJOQUxfU1RPUkFHRSA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfRVhURVJOQUxfU1RPUkFHRVwiXHJcbn1cclxuZXhwb3J0IGVudW0gRXJyb3JDb3JyZWN0aW9uTGV2ZWwge1xyXG4gIEwgPSBcIkxcIixcclxuICBNID0gXCJNXCIsXHJcbiAgUSA9IFwiUVwiLFxyXG4gIEggPSBcIkhcIlxyXG59XHJcbmV4cG9ydCBlbnVtIENvbG9ycyB7XHJcbiAgUkVEID0gLTY1NTM2LFxyXG4gIERLR1JBWSA9IC0xMjMwMzI5MixcclxuICBHUkFZID0gLTc4MjkzNjgsXHJcbiAgV0hJVEUgPSAtMSxcclxuICBCTFVFID0gLTE2Nzc2OTYxLFxyXG4gIEJMQUNLID0gLTE2Nzc3MjE2LFxyXG4gIExUR1JBWSA9IC0zMzU1NDQ0LFxyXG4gIE1BR0VOVEEgPSAtNjUyODEsXHJcbiAgWUVMTE9XID0gLTI1NixcclxuICBDWUFOID0gLTE2NzExNjgxLFxyXG4gIEdSRUVOID0gLTE2NzExOTM2LFxyXG4gIFRSQU5TUEFSRU5UID0gMFxyXG59XHJcbmV4cG9ydCBlbnVtIFNjYW5UeXBlcyB7XHJcbiAgT1RIRVJfU0NBTl9UWVBFID0gLTEsXHJcbiAgQUxMX1NDQU5fVFlQRSA9IDAsXHJcbiAgQ09ERTEyOF9TQ0FOX1RZUEUgPSA2NCxcclxuICBDT0RFMzlfU0NBTl9UWVBFID0gMTYsXHJcbiAgQ09ERTkzX1NDQU5fVFlQRSA9IDMyLFxyXG4gIENPREFCQVJfU0NBTl9UWVBFID0gNDA5NixcclxuICBEQVRBTUFUUklYX1NDQU5fVFlQRSA9IDQsXHJcbiAgRUFOMTNfU0NBTl9UWVBFID0gMTI4LFxyXG4gIEVBTjhfU0NBTl9UWVBFID0gMjU2LFxyXG4gIElURjE0X1NDQU5fVFlQRSA9IDUxMixcclxuICBRUkNPREVfU0NBTl9UWVBFID0gMSxcclxuICBVUENDT0RFX0FfU0NBTl9UWVBFID0gMTAyNCxcclxuICBVUENDT0RFX0VfU0NBTl9UWVBFID0gMjA0OCxcclxuICBQREY0MTdfU0NBTl9UWVBFID0gOCxcclxuICBBWlRFQ19TQ0FOX1RZUEUgPSAyLFxyXG59XHJcbmV4cG9ydCBlbnVtIFJlY3RTdHlsZSB7XHJcbiAgU1RST0tFID0gMCxcclxuICBGSUxMID0gMSxcclxuICBGSUxMX0FORF9TVFJPS0UgPSAyLFxyXG59XHJcblxyXG4vL0xheW91dFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRCb3VuZHMge1xyXG4gIG1hcmdpbkxlZnQ/OiBudW1iZXIsXHJcbiAgbWFyZ2luUmlnaHQ/OiBudW1iZXIsXHJcbiAgbWFyZ2luVG9wPzogbnVtYmVyLFxyXG4gIG1hcmdpbkJvdHRvbT86IG51bWJlclxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIHg6IG51bWJlcixcclxuICB5OiBudW1iZXIsXHJcbiAgd2lkdGg6IG51bWJlcixcclxuICBoZWlnaHQ6IG51bWJlcixcclxuICBtYXJnaW5MZWZ0PzogbnVtYmVyLFxyXG4gIG1hcmdpblJpZ2h0PzogbnVtYmVyLFxyXG4gIG1hcmdpblRvcD86IG51bWJlcixcclxuICBtYXJnaW5Cb3R0b20/OiBudW1iZXIsXHJcbiAgcGFnZVhPZmZzZXQ/OiBudW1iZXIsXHJcbiAgcGFnZVlPZmZzZXQ/OiBudW1iZXJcclxufVxyXG4iXX0=

/***/ }),

/***/ 1953:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileChooser": () => (/* binding */ FileChooser)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 399);




var FileChooser = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(FileChooser, _super);
    function FileChooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileChooser.prototype.open = function (options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "open", {}, arguments); };
    FileChooser.pluginName = "FileChooser";
    FileChooser.plugin = "cordova-plugin-filechooser";
    FileChooser.pluginRef = "fileChooser";
    FileChooser.repo = "https://github.com/ihadeed/cordova-filechooser";
    FileChooser.platforms = ["Android"];
FileChooser.ɵfac = /*@__PURE__*/ function () { var ɵFileChooser_BaseFactory; return function FileChooser_Factory(t) { return (ɵFileChooser_BaseFactory || (ɵFileChooser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FileChooser)))(t || FileChooser); }; }();
FileChooser.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FileChooser, factory: function (t) { return FileChooser.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FileChooser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return FileChooser;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmlsZS1jaG9vc2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtBQUdRLElBbUN5QiwrQkFBaUI7QUFBQztBQUcvQztBQUF5RTtBQUFNLElBSWpGLDBCQUFJLGFBQUMsT0FBNEI7QUFJdEI7QUFBNEM7QUFBdUQ7QUFBMkM7QUFBeUU7K0NBWm5PLFVBQVU7Ozs7MEJBQ0w7QUFBQyxzQkF4Q1A7QUFBRSxFQXdDK0IsaUJBQWlCO0FBQ2pELFNBRFksV0FBVztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZUNob29zZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIGNvbW1hIHNlcGVyYXRlZCBtaW1lIHR5cGVzIHRvIGZpbHRlciBmaWxlcy5cbiAgICovXG4gIG1pbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBGaWxlIENob29zZXJcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIE9wZW5zIHRoZSBmaWxlIHBpY2tlciBvbiBBbmRyb2lkIGZvciB0aGUgdXNlciB0byBzZWxlY3QgYSBmaWxlLCByZXR1cm5zIGEgZmlsZSBVUkkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaWxlQ2hvb3NlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZS1jaG9vc2VyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlQ2hvb3NlcjogRmlsZUNob29zZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmlsZUNob29zZXIub3BlbigpXG4gKiAgIC50aGVuKHVyaSA9PiBjb25zb2xlLmxvZyh1cmkpKVxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogRmlsZUNob29zZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlsZUNob29zZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlY2hvb3NlcicsXG4gIHBsdWdpblJlZjogJ2ZpbGVDaG9vc2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9paGFkZWVkL2NvcmRvdmEtZmlsZWNob29zZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlQ2hvb3NlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW4gYSBmaWxlXG4gICAqIEBwYXJhbSB7RmlsZUNob29zZXJPcHRpb25zfSBbb3B0aW9uc10gIE9wdGlvbmFsIHBhcmFtZXRlciwgZGVmYXVsdHMgdG8gJycuIEZpbHRlcnMgdGhlIGZpbGUgc2VsZWN0aW9uIGxpc3QgYWNjb3JkaW5nIHRvIG1pbWUgdHlwZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3BlbihvcHRpb25zPzogRmlsZUNob29zZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _addorder_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addorder-routing.module */ 6620);
/* harmony import */ var _addorder_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addorder.page */ 9940);
/* harmony import */ var _hmscore_ionic_native_hms_scan_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hmscore/ionic-native-hms-scan/ngx */ 9469);
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ 1953);
/* harmony import */ var _hmscore_ionic_native_hms_site_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hmscore/ionic-native-hms-site/ngx */ 3234);
/* harmony import */ var _hmscore_ionic_native_hms_map_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hmscore/ionic-native-hms-map/ngx */ 1733);











let AddorderPageModule = class AddorderPageModule {
};
AddorderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _addorder_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddorderPageRoutingModule
        ],
        declarations: [_addorder_page__WEBPACK_IMPORTED_MODULE_1__.AddorderPage],
        providers: [_hmscore_ionic_native_hms_scan_ngx__WEBPACK_IMPORTED_MODULE_2__.HMSScan, _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__.FileChooser, _hmscore_ionic_native_hms_site_ngx__WEBPACK_IMPORTED_MODULE_4__.HMSSite, _hmscore_ionic_native_hms_map_ngx__WEBPACK_IMPORTED_MODULE_5__.HMSMap]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_addorder_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addorder.page.html */ 7511);
/* harmony import */ var _addorder_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addorder.page.scss */ 1432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _hmscore_ionic_native_hms_scan_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hmscore/ionic-native-hms-scan/ngx */ 9469);
/* harmony import */ var _hmscore_ionic_native_hms_site_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hmscore/ionic-native-hms-site/ngx */ 3234);
/* harmony import */ var _hmscore_ionic_native_hms_map_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hmscore/ionic-native-hms-map/ngx */ 1733);










let AddorderPage = class AddorderPage {
    constructor(db, route, actionSheetController, toastController, platform, router, hmsScanKit, hmsSite, hmsMap) {
        this.db = db;
        this.route = route;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.platform = platform;
        this.router = router;
        this.hmsScanKit = hmsScanKit;
        this.hmsSite = hmsSite;
        this.hmsMap = hmsMap;
        this.mode = this.route.snapshot.paramMap.get("mode");
        this.id = this.route.snapshot.paramMap.get("id");
        this.title = {
            "1": "Add Order",
            "2": "Order Details",
            "3": "Edit Order",
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
        this.shipping_no = null;
        this.order_date = this.db.getDate();
        this.status = 2;
        this.itemsList = [];
        this.dumpdata = [];
        this.cameraPerm = false;
        this.storagePerm = false;
        this.searchService = null;
        this.apiKey = "CgB6e3x991tj6QIY2ZM0aWY9crhqEPGLCnMwH4t9LNVXgmMSQQEDTKJNGH2woZCd10QSp1425eSqpfmK3QMpOLL1";
        this.iniLat = 1.7327292;
        this.iniLng = 103.7006713;
        this.page_title = this.title[this.mode];
        _hmscore_ionic_native_hms_site_ngx__WEBPACK_IMPORTED_MODULE_4__.SearchServiceFactory.create(this.apiKey)
            .then(service => this.searchService = service)
            .catch(err => console.log('An error occurred.'));
    }
    ngOnInit() {
        this.db.getDatabaseState().subscribe(rdy => {
            if (rdy) {
                this.items = this.db.getItems();
                this.orders = this.db.getOrders();
            }
        });
        this.loadData();
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
    //#region
    loadData() {
        this.db.getItems().subscribe((data) => {
            this.itemsList = data;
        });
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
        });
    }
    calculate() {
        if (this.qty != null) {
            let price = 0;
            if (this.item_min != null) {
                if (this.qty >= this.item_min) {
                    price = this.item_promo;
                }
                else {
                    price = this.item_price;
                }
            }
            else {
                price = this.item_price;
            }
            this.amount = this.qty * price;
        }
    }
    order_save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
            if (this.shipping_no == null || this.shipping_no == '') {
                this.newstatus = 2;
            }
            else {
                this.newstatus = 1;
            }
            if (this.qty != null) {
                if (this.item_stock < this.qty) {
                    let toast = yield this.toastController.create({
                        mode: "ios",
                        message: "Purchase quantity cannot more than stock.",
                        duration: 1000,
                    });
                    yield toast.present();
                    return false;
                }
            }
            if (this.mode == '1') {
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
        };
        this.db.updateStatus(orderObj.id, orderObj.status, orderObj.items_id, orderObj.stock).then((data) => {
            this.router.navigate(["/tabs/tab1"], { replaceUrl: true });
        })
            .catch((e) => {
            return "Error" + JSON.stringify(e);
        });
    }
    //#endregion
    // #region Scan Barcode
    scanBarCode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const permit = yield this.checkScanPermission(0);
            if (permit) {
                this.defaultViewMode();
            }
        });
    }
    checkScanPermission(times) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const camRes = yield this.hmsScanKit.hasPermission(_hmscore_ionic_native_hms_scan_ngx__WEBPACK_IMPORTED_MODULE_3__.HMSPermission.CAMERA);
                const stoRes = yield this.hmsScanKit.hasPermission(_hmscore_ionic_native_hms_scan_ngx__WEBPACK_IMPORTED_MODULE_3__.HMSPermission.READ_EXTERNAL_STORAGE);
                let count = 0;
                if (times == 0) {
                    if (!camRes) {
                        this.hmsScanKit.requestPermission(_hmscore_ionic_native_hms_scan_ngx__WEBPACK_IMPORTED_MODULE_3__.HMSPermission.CAMERA);
                    }
                    if (!stoRes) {
                        this.hmsScanKit.requestPermission(_hmscore_ionic_native_hms_scan_ngx__WEBPACK_IMPORTED_MODULE_3__.HMSPermission.READ_EXTERNAL_STORAGE);
                    }
                }
                if (camRes && stoRes) {
                    count = 2;
                    times = 1;
                }
                else if ((camRes && !stoRes) || (!camRes && stoRes)) {
                    count = 1;
                }
                else {
                    count = 0;
                }
                if (times == 0 && count == 0) {
                    return new Promise((resolve) => {
                        setTimeout(() => resolve(true), 3000);
                    });
                }
                else if (times == 0 && count == 1) {
                    return new Promise((resolve) => {
                        setTimeout(() => resolve(true), 1500);
                    });
                }
                else {
                    return new Promise((resolve) => {
                        setTimeout(() => resolve(true), 50);
                    });
                }
            }
            catch (e) {
                console.error(JSON.stringify(e));
                return false;
            }
        });
    }
    defaultViewMode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const permit = yield this.checkScanPermission(1);
            if (permit) {
                const scanTypes = [_hmscore_ionic_native_hms_scan_ngx__WEBPACK_IMPORTED_MODULE_3__.ScanTypes.ALL_SCAN_TYPE];
                this.hmsScanKit
                    .defaultViewMode(scanTypes)
                    .then((res) => {
                    this.shipping_no = res.originalValue;
                })
                    .catch((err) => {
                    console.log('Scan Code Error: ', err);
                });
            }
        });
    }
    // #endregion scan barcode
    mapsView() {
        this.router.navigate(["/maps", { id: this.cus_address }]);
    }
};
AddorderPage.ctorParameters = () => [
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _hmscore_ionic_native_hms_scan_ngx__WEBPACK_IMPORTED_MODULE_3__.HMSScan },
    { type: _hmscore_ionic_native_hms_site_ngx__WEBPACK_IMPORTED_MODULE_4__.HMSSite },
    { type: _hmscore_ionic_native_hms_map_ngx__WEBPACK_IMPORTED_MODULE_5__.HMSMap }
];
AddorderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".item-img ion-img {\n  border-radius: 20px !important;\n  overflow: hidden;\n  width: 80px;\n  height: 80px;\n  min-width: 40px !important;\n  max-width: 40px !important;\n  max-width: 80px !important;\n  max-height: 80px !important;\n  margin: 40% 5%;\n  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n.input-border ion-textarea {\n  border: #d4d4d4 2px solid;\n  border-radius: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 15px;\n}\n\n.input-border ion-input {\n  border: #d4d4d4 2px solid;\n  border-radius: 15px;\n  margin-top: 2%;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  font-size: 15px;\n}\n\n.input-border ion-label {\n  font-size: 22px;\n}\n\nion-select, ion-datetime {\n  width: 100%;\n  height: 37px;\n  border: #d4d4d4 2px solid;\n  border-radius: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 15px;\n  margin-top: 3%;\n}\n\n.input-border:hover ion-input, .input-border:hover ion-textarea, .input-border:hover ion-datetime, .input-border:hover ion-select {\n  border-color: #494949;\n}\n\n.input-border:hover ion-label {\n  color: #3880ff;\n}\n\n.scan-btn {\n  margin-top: 10%;\n  padding-left: 0%;\n  padding-right: 2%;\n}\n\n.scan-btn ion-image {\n  width: 5px;\n  height: 5px;\n  min-width: 2px;\n  max-width: 2px;\n  max-width: 5px;\n  max-height: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZG9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0VBQ0Esc0RBQUE7RUFDQSxtREFBQTtBQUFSOztBQUtJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRlI7O0FBS0k7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSFI7O0FBTUk7RUFDSSxlQUFBO0FBSlI7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFMSjs7QUFTSTtFQUNJLHFCQUFBO0FBTlI7O0FBU0k7RUFDSSxjQUFBO0FBUFI7O0FBV0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVlJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBVFIiLCJmaWxlIjoiYWRkb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0taW1nIHtcclxuICAgIGlvbi1pbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiA0MCUgNSU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5wdXQtYm9yZGVyIHtcclxuICAgIGlvbi10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyOiByZ2IoMjEyLCAyMTIsIDIxMikgMnB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiByZ2IoMjEyLCAyMTIsIDIxMikgMnB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXNlbGVjdCwgaW9uLWRhdGV0aW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgYm9yZGVyOiByZ2IoMjEyLCAyMTIsIDIxMikgMnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG5cclxuLmlucHV0LWJvcmRlcjpob3ZlciB7XHJcbiAgICBpb24taW5wdXQsIGlvbi10ZXh0YXJlYSwgaW9uLWRhdGV0aW1lLCBpb24tc2VsZWN0IHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYig3MywgNzMsIDczKTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNTYsIDEyOCwgMjU1KTtcclxuICAgIH1cclxufVxyXG5cclxuLnNjYW4tYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxufVxyXG5cclxuLnNjYW4tYnRuIHtcclxuICAgIGlvbi1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICBtaW4td2lkdGg6IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDVweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" mode=\"ios\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"mode == '2'\" (click)=\"order_edit()\"><ion-icon name=\"create\"></ion-icon></ion-button>\n      <ion-button *ngIf=\"mode == '1' || mode == '3'\" (click)=\"order_save()\"><ion-icon name=\"save\"></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-title>{{page_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <div class=\"item-img\">\n          <ion-img [src]=\"item_image\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-list>\n          <ion-item lines=\"none\" class=\"input-border\">\n            <ion-label position=\"stacked\">Item*</ion-label>\n            <ion-select value=\"{{item_id}}\"\n              interface=\"action-sheet\"\n              (ionChange)=\"selectItem($event)\"\n              #itemSelection\n              [disabled]=\"mode == '2' || mode == '4'\">\n              <ion-select-option value=\"{{item.items_id}}\" *ngFor=\"let item of itemsList\">{{item.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n        \n        <ion-row>\n          <ion-item lines=\"none\" class=\"input-border\">\n            <ion-label position=\"stacked\">Stock</ion-label>\n            <ion-input readonly [(ngModel)]=\"item_stock\" type=\"number\"></ion-input>\n          </ion-item>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Price</ion-label>\n          <ion-input readonly [(ngModel)]=\"item_price\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Qty*</ion-label>\n          <ion-input [readonly]=\"mode == '2' || mode == '4'\" \n            [(ngModel)]=\"qty\" \n            type=\"number\" \n            (click)=\"calculate()\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Order Date</ion-label>\n          <ion-datetime displayFormat=\"YYYY-MM-DD\" \n          min=\"2020-01-01\" \n          max=\"2100-01-01\" \n          [(ngModel)]=\"order_date\"\n          (click)=\"calculate()\"\n          [readonly]=\"mode == '2' || mode == '4'\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Amount</ion-label>\n          <ion-input readonly [(ngModel)]=\"amount\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Customer Name*</ion-label>\n          <ion-input [readonly]=\"mode == '2' || mode == '4'\" [(ngModel)]=\"cus_name\" (click)=\"calculate()\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Tel.*</ion-label>\n          <ion-input [readonly]=\"mode == '2' || mode == '4'\" [(ngModel)]=\"cus_tel\" type=\"number\" (click)=\"calculate()\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" *ngIf=\"mode == '1' || mode == '3' || mode == '4' || cus_address == null\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Address</ion-label>\n          <ion-textarea rows=\"3\" [readonly]=\"mode == '4'\" [(ngModel)]=\"cus_address\" (click)=\"calculate()\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"11\" *ngIf=\"mode == '2' && cus_address != null\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Address</ion-label>\n          <ion-textarea rows=\"3\" [readonly]=\"mode == '2'\" [(ngModel)]=\"cus_address\" (click)=\"calculate()\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1\" class=\"scan-btn\" [hidden]=\"mode == '1' || mode == '3' || mode == '4' || cus_address == null\">\n        <ion-img [src]=\"'./assets/svg/maps.svg'\" (click)=\"mapsView()\"></ion-img>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" *ngIf=\"mode == '2' || mode == '4'\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Shipping No.</ion-label>\n          <ion-input [readonly]=\"mode == '2' || mode == '4'\" [(ngModel)]=\"shipping_no\" (click)=\"calculate()\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"11\" *ngIf=\"mode == '3' || mode == '1'\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Shipping No.</ion-label>\n          <ion-input [(ngModel)]=\"shipping_no\" (click)=\"calculate()\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1\" class=\"scan-btn\" [hidden]=\"mode == '2' || mode == '4'\">\n        <ion-img [src]=\"'./assets/svg/scan.svg'\" (click)=\"scanBarCode()\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_addorder_addorder_module_ts.js.map