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

/***/ 3234:
/*!*******************************************************************************!*\
  !*** ./node_modules/@hmscore/ionic-native-hms-site/__ivy_ngcc__/ngx/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HMSSite": () => (/* binding */ HMSSite),
/* harmony export */   "SearchServiceFactory": () => (/* binding */ SearchServiceFactory),
/* harmony export */   "LocationType": () => (/* binding */ LocationType),
/* harmony export */   "HwLocationType": () => (/* binding */ HwLocationType)
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





var HMSSite = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(HMSSite, _super);
    function HMSSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSSite.prototype.enableLogger = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSSite.prototype.disableLogger = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSSite.prototype.gotoSearchActivity = function (apiKey, searchFilter, hint) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "gotoSearchActivity", { "otherPromise": true }, arguments); };
    HMSSite.pluginName = "HMSSite";
    HMSSite.plugin = "cordova-plugin-hms-site";
    HMSSite.pluginRef = "HMSSite";
    HMSSite.repo = "";
    HMSSite.install = "";
    HMSSite.installVariables = [];
    HMSSite.platforms = ["Android"];
HMSSite.ɵfac = /*@__PURE__*/ function () { var ɵHMSSite_BaseFactory; return function HMSSite_Factory(t) { return (ɵHMSSite_BaseFactory || (ɵHMSSite_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](HMSSite)))(t || HMSSite); }; }();
HMSSite.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HMSSite, factory: function (t) { return HMSSite.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HMSSite, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return HMSSite;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));

var SearchServiceFactory = /** @class */ (function () {
    function SearchServiceFactory() {
    }
    SearchServiceFactory.create = function (apiKey) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, window.HMSSite.SearchServiceFactory.create(apiKey)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SearchServiceFactory;
}());

// ENUM
var LocationType;
(function (LocationType) {
    LocationType["ACCOUNTING"] = "ACCOUNTING";
    LocationType["ADDRESS"] = "ADDRESS";
    LocationType["ADMINISTRATIVE_AREA_LEVEL_1"] = "ADMINISTRATIVE_AREA_LEVEL_1";
    LocationType["ADMINISTRATIVE_AREA_LEVEL_2"] = "ADMINISTRATIVE_AREA_LEVEL_2";
    LocationType["ADMINISTRATIVE_AREA_LEVEL_3"] = "ADMINISTRATIVE_AREA_LEVEL_3";
    LocationType["ADMINISTRATIVE_AREA_LEVEL_4"] = "ADMINISTRATIVE_AREA_LEVEL_4";
    LocationType["ADMINISTRATIVE_AREA_LEVEL_5"] = "ADMINISTRATIVE_AREA_LEVEL_5";
    LocationType["AIRPORT"] = "AIRPORT";
    LocationType["AMUSEMENT_PARK"] = "AMUSEMENT_PARK";
    LocationType["AQUARIUM"] = "AQUARIUM";
    LocationType["ARCHIPELAGO"] = "ARCHIPELAGO";
    LocationType["ART_GALLERY"] = "ART_GALLERY";
    LocationType["ATM"] = "ATM";
    LocationType["BAKERY"] = "BAKERY";
    LocationType["BANK"] = "BANK";
    LocationType["BAR"] = "BAR";
    LocationType["BEAUTY_SALON"] = "BEAUTY_SALON";
    LocationType["BICYCLE_STORE"] = "BICYCLE_STORE";
    LocationType["BOOK_STORE"] = "BOOK_STORE";
    LocationType["BOWLING_ALLEY"] = "BOWLING_ALLEY";
    LocationType["BUS_STATION"] = "BUS_STATION";
    LocationType["CAFE"] = "CAFE";
    LocationType["CAMPGROUND"] = "CAMPGROUND";
    LocationType["CAPITAL"] = "CAPITAL";
    LocationType["CAPITAL_CITY"] = "CAPITAL_CITY";
    LocationType["CAR_DEALER"] = "CAR_DEALER";
    LocationType["CAR_RENTAL"] = "CAR_RENTAL";
    LocationType["CAR_REPAIR"] = "CAR_REPAIR";
    LocationType["CAR_WASH"] = "CAR_WASH";
    LocationType["CASINO"] = "CASINO";
    LocationType["CEMETERY"] = "CEMETERY";
    LocationType["CHURCH"] = "CHURCH";
    LocationType["CITIES"] = "CITIES";
    LocationType["CITY_HALL"] = "CITY_HALL";
    LocationType["CLOTHING_STORE"] = "CLOTHING_STORE";
    LocationType["COLLOQUIAL_AREA"] = "COLLOQUIAL_AREA";
    LocationType["CONTINENT"] = "CONTINENT";
    LocationType["CONVENIENCE_STORE"] = "CONVENIENCE_STORE";
    LocationType["COUNTRY"] = "COUNTRY";
    LocationType["COURTHOUSE"] = "COURTHOUSE";
    LocationType["DENTIST"] = "DENTIST";
    LocationType["DEPARTMENT_STORE"] = "DEPARTMENT_STORE";
    LocationType["DOCTOR"] = "DOCTOR";
    LocationType["DRUGSTORE"] = "DRUGSTORE";
    LocationType["ELECTRICIAN"] = "ELECTRICIAN";
    LocationType["ELECTRONICS_STORE"] = "ELECTRONICS_STORE";
    LocationType["EMBASSY"] = "EMBASSY";
    LocationType["ESTABLISHMENT"] = "ESTABLISHMENT";
    LocationType["FINANCE"] = "FINANCE";
    LocationType["FIRE_STATION"] = "FIRE_STATION";
    LocationType["FLOOR"] = "FLOOR";
    LocationType["FLORIST"] = "FLORIST";
    LocationType["FOOD"] = "FOOD";
    LocationType["FUNERAL_HOME"] = "FUNERAL_HOME";
    LocationType["FURNITURE_STORE"] = "FURNITURE_STORE";
    LocationType["GAS_STATION"] = "GAS_STATION";
    LocationType["GENERAL_CITY"] = "GENERAL_CITY";
    LocationType["GENERAL_CONTRACTOR"] = "GENERAL_CONTRACTOR";
    LocationType["GEOCODE"] = "GEOCODE";
    LocationType["GROCERY_OR_SUPERMARKET"] = "GROCERY_OR_SUPERMARKET";
    LocationType["GYM"] = "GYM";
    LocationType["HAIR_CARE"] = "HAIR_CARE";
    LocationType["HAMLET"] = "HAMLET";
    LocationType["HARDWARE_STORE"] = "HARDWARE_STORE";
    LocationType["HEALTH"] = "HEALTH";
    LocationType["HINDU_TEMPLE"] = "HINDU_TEMPLE";
    LocationType["HOME_GOODS_STORE"] = "HOME_GOODS_STORE";
    LocationType["HOSPITAL"] = "HOSPITAL";
    LocationType["INSURANCE_AGENCY"] = "INSURANCE_AGENCY";
    LocationType["INTERSECTION"] = "INTERSECTION";
    LocationType["JEWELRY_STORE"] = "JEWELRY_STORE";
    LocationType["LAUNDRY"] = "LAUNDRY";
    LocationType["LAWYER"] = "LAWYER";
    LocationType["LIBRARY"] = "LIBRARY";
    LocationType["LIGHT_RAIL_STATION"] = "LIGHT_RAIL_STATION";
    LocationType["LIQUOR_STORE"] = "LIQUOR_STORE";
    LocationType["LOCALITY"] = "LOCALITY";
    LocationType["LOCAL_GOVERNMENT_OFFICE"] = "LOCAL_GOVERNMENT_OFFICE";
    LocationType["LOCKSMITH"] = "LOCKSMITH";
    LocationType["LODGING"] = "LODGING";
    LocationType["MEAL_DELIVERY"] = "MEAL_DELIVERY";
    LocationType["MEAL_TAKEAWAY"] = "MEAL_TAKEAWAY";
    LocationType["MOSQUE"] = "MOSQUE";
    LocationType["MOVIE_RENTAL"] = "MOVIE_RENTAL";
    LocationType["MOVIE_THEATER"] = "MOVIE_THEATER";
    LocationType["MOVING_COMPANY"] = "MOVING_COMPANY";
    LocationType["MUSEUM"] = "MUSEUM";
    LocationType["NATURAL_FEATURE"] = "NATURAL_FEATURE";
    LocationType["NEIGHBORHOOD"] = "NEIGHBORHOOD";
    LocationType["NIGHT_CLUB"] = "NIGHT_CLUB";
    LocationType["OTHER"] = "OTHER";
    LocationType["PAINTER"] = "PAINTER";
    LocationType["PARK"] = "PARK";
    LocationType["PARKING"] = "PARKING";
    LocationType["PET_STORE"] = "PET_STORE";
    LocationType["PHARMACY"] = "PHARMACY";
    LocationType["PHYSIOTHERAPIST"] = "PHYSIOTHERAPIST";
    LocationType["PLACE_OF_WORSHIP"] = "PLACE_OF_WORSHIP";
    LocationType["PLUMBER"] = "PLUMBER";
    LocationType["POINT_OF_INTEREST"] = "POINT_OF_INTEREST";
    LocationType["POLICE"] = "POLICE";
    LocationType["POLITICAL"] = "POLITICAL";
    LocationType["POSTAL_CODE"] = "POSTAL_CODE";
    LocationType["POSTAL_CODE_PREFIX"] = "POSTAL_CODE_PREFIX";
    LocationType["POSTAL_CODE_SUFFIX"] = "POSTAL_CODE_SUFFIX";
    LocationType["POSTAL_TOWN"] = "POSTAL_TOWN";
    LocationType["POST_BOX"] = "POST_BOX";
    LocationType["POST_OFFICE"] = "POST_OFFICE";
    LocationType["PREMISE"] = "PREMISE";
    LocationType["PRIMARY_SCHOOL"] = "PRIMARY_SCHOOL";
    LocationType["REAL_ESTATE_AGENCY"] = "REAL_ESTATE_AGENCY";
    LocationType["REGION"] = "REGION";
    LocationType["REGIONS"] = "REGIONS";
    LocationType["RESTAURANT"] = "RESTAURANT";
    LocationType["ROOFING_CONTRACTOR"] = "ROOFING_CONTRACTOR";
    LocationType["ROOM"] = "ROOM";
    LocationType["ROUTE"] = "ROUTE";
    LocationType["RV_PARK"] = "RV_PARK";
    LocationType["SCHOOL"] = "SCHOOL";
    LocationType["SECONDARY_SCHOOL"] = "SECONDARY_SCHOOL";
    LocationType["SHOE_STORE"] = "SHOE_STORE";
    LocationType["SHOPPING_MALL"] = "SHOPPING_MALL";
    LocationType["SPA"] = "SPA";
    LocationType["STADIUM"] = "STADIUM";
    LocationType["STORAGE"] = "STORAGE";
    LocationType["STORE"] = "STORE";
    LocationType["STREET_ADDRESS"] = "STREET_ADDRESS";
    LocationType["STREET_NUMBER"] = "STREET_NUMBER";
    LocationType["SUBLOCALITY"] = "SUBLOCALITY";
    LocationType["SUBLOCALITY_LEVEL_1"] = "SUBLOCALITY_LEVEL_1";
    LocationType["SUBLOCALITY_LEVEL_2"] = "SUBLOCALITY_LEVEL_2";
    LocationType["SUBLOCALITY_LEVEL_3"] = "SUBLOCALITY_LEVEL_3";
    LocationType["SUBLOCALITY_LEVEL_4"] = "SUBLOCALITY_LEVEL_4";
    LocationType["SUBLOCALITY_LEVEL_5"] = "SUBLOCALITY_LEVEL_5";
    LocationType["SUBPREMISE"] = "SUBPREMISE";
    LocationType["SUBWAY_STATION"] = "SUBWAY_STATION";
    LocationType["SUPERMARKET"] = "SUPERMARKET";
    LocationType["SYNAGOGUE"] = "SYNAGOGUE";
    LocationType["TAXI_STAND"] = "TAXI_STAND";
    LocationType["TOURIST_ATTRACTION"] = "TOURIST_ATTRACTION";
    LocationType["TOWN"] = "TOWN";
    LocationType["TOWN_SQUARE"] = "TOWN_SQUARE";
    LocationType["TRAIN_STATION"] = "TRAIN_STATION";
    LocationType["TRANSIT_STATION"] = "TRANSIT_STATION";
    LocationType["TRAVEL_AGENCY"] = "TRAVEL_AGENCY";
    LocationType["UNIVERSITY"] = "UNIVERSITY";
    LocationType["VETERINARY_CARE"] = "VETERINARY_CARE";
    LocationType["ZOO"] = "ZOO";
})(LocationType || (LocationType = {}));
var HwLocationType;
(function (HwLocationType) {
    HwLocationType["ACCESS_GATEWAY"] = "ACCESS_GATEWAY";
    HwLocationType["ADDRESS"] = "ADDRESS";
    HwLocationType["ADMINISTRATIVE_AREA_LEVEL_1"] = "ADMINISTRATIVE_AREA_LEVEL_1";
    HwLocationType["ADMINISTRATIVE_AREA_LEVEL_2"] = "ADMINISTRATIVE_AREA_LEVEL_2";
    HwLocationType["ADMINISTRATIVE_AREA_LEVEL_3"] = "ADMINISTRATIVE_AREA_LEVEL_3";
    HwLocationType["ADMINISTRATIVE_AREA_LEVEL_4"] = "ADMINISTRATIVE_AREA_LEVEL_4";
    HwLocationType["ADMIN_FEATURE"] = "ADMIN_FEATURE";
    HwLocationType["ADVENTURE_SPORTS_VENUE"] = "ADVENTURE_SPORTS_VENUE";
    HwLocationType["ADVENTURE_VEHICLE_TRAIL"] = "ADVENTURE_VEHICLE_TRAIL";
    HwLocationType["ADVERTISING_AND_MARKETING_COMPANY"] = "ADVERTISING_AND_MARKETING_COMPANY";
    HwLocationType["AFGHAN_RESTAURANT"] = "AFGHAN_RESTAURANT";
    HwLocationType["AFRICAN_RESTAURANT"] = "AFRICAN_RESTAURANT";
    HwLocationType["AGRICULTURAL_SUPPLY_STORE"] = "AGRICULTURAL_SUPPLY_STORE";
    HwLocationType["AGRICULTURAL_TECHNOLOGY_COMPANY"] = "AGRICULTURAL_TECHNOLOGY_COMPANY";
    HwLocationType["AGRICULTURE_BUSINESS"] = "AGRICULTURE_BUSINESS";
    HwLocationType["AIRFIELD"] = "AIRFIELD";
    HwLocationType["AIRLINE"] = "AIRLINE";
    HwLocationType["AIRLINE_ACCESS"] = "AIRLINE_ACCESS";
    HwLocationType["AIRPORT"] = "AIRPORT";
    HwLocationType["ALGERIAN_RESTAURANT"] = "ALGERIAN_RESTAURANT";
    HwLocationType["AMBULANCE_UNIT"] = "AMBULANCE_UNIT";
    HwLocationType["AMERICAN_RESTAURANT"] = "AMERICAN_RESTAURANT";
    HwLocationType["AMPHITHEATER"] = "AMPHITHEATER";
    HwLocationType["AMUSEMENT_ARCADE"] = "AMUSEMENT_ARCADE";
    HwLocationType["AMUSEMENT_PARK"] = "AMUSEMENT_PARK";
    HwLocationType["AMUSEMENT_PLACE"] = "AMUSEMENT_PLACE";
    HwLocationType["ANIMAL_SERVICE_STORE"] = "ANIMAL_SERVICE_STORE";
    HwLocationType["ANIMAL_SHELTER"] = "ANIMAL_SHELTER";
    HwLocationType["ANTIQUE_ART_STORE"] = "ANTIQUE_ART_STORE";
    HwLocationType["APARTMENT"] = "APARTMENT";
    HwLocationType["AQUATIC_ZOO_MARINE_PARK"] = "AQUATIC_ZOO_MARINE_PARK";
    HwLocationType["ARABIAN_RESTAURANT"] = "ARABIAN_RESTAURANT";
    HwLocationType["ARBORETA_BOTANICAL_GARDENS"] = "ARBORETA_BOTANICAL_GARDENS";
    HwLocationType["ARCH"] = "ARCH";
    HwLocationType["ARGENTINEAN_RESTAURANT"] = "ARGENTINEAN_RESTAURANT";
    HwLocationType["ARMENIAN_RESTAURANT"] = "ARMENIAN_RESTAURANT";
    HwLocationType["ART_MUSEUM"] = "ART_MUSEUM";
    HwLocationType["ART_SCHOOL"] = "ART_SCHOOL";
    HwLocationType["ASHRAM"] = "ASHRAM";
    HwLocationType["ASIAN_RESTAURANT"] = "ASIAN_RESTAURANT";
    HwLocationType["ATHLETIC_STADIUM"] = "ATHLETIC_STADIUM";
    HwLocationType["ATV_SNOWMOBILE_DEALER"] = "ATV_SNOWMOBILE_DEALER";
    HwLocationType["AUSTRALIAN_RESTAURANT"] = "AUSTRALIAN_RESTAURANT";
    HwLocationType["AUSTRIAN_RESTAURANT"] = "AUSTRIAN_RESTAURANT";
    HwLocationType["AUTOMATIC_TELLER_MACHINE"] = "AUTOMATIC_TELLER_MACHINE";
    HwLocationType["AUTOMOBILE_ACCESSORIES_SHOP"] = "AUTOMOBILE_ACCESSORIES_SHOP";
    HwLocationType["AUTOMOBILE_COMPANY"] = "AUTOMOBILE_COMPANY";
    HwLocationType["AUTOMOBILE_MANUFACTURING_COMPANY"] = "AUTOMOBILE_MANUFACTURING_COMPANY";
    HwLocationType["AUTOMOTIVE"] = "AUTOMOTIVE";
    HwLocationType["AUTOMOTIVE_DEALER"] = "AUTOMOTIVE_DEALER";
    HwLocationType["AUTOMOTIVE_GLASS_REPLACEMENT_SHOP"] = "AUTOMOTIVE_GLASS_REPLACEMENT_SHOP";
    HwLocationType["AUTOMOTIVE_REPAIR_SHOP"] = "AUTOMOTIVE REPAIR_SHOP";
    HwLocationType["BADMINTON_COURT"] = "BADMINTON_COURT";
    HwLocationType["BAGS_LEATHERWEAR_SHOP"] = "BAGS_LEATHERWEAR_SHOP";
    HwLocationType["BAKERY"] = "BAKERY";
    HwLocationType["BANK"] = "BANK";
    HwLocationType["BANQUET_ROOM"] = "BANQUET_ROOM";
    HwLocationType["BAR"] = "BAR";
    HwLocationType["BARBECUE_RESTAURANT"] = "BARBECUE_RESTAURANT";
    HwLocationType["BASEBALL_FIELD"] = "BASEBALL_FIELD";
    HwLocationType["BASKETBALL_COURT"] = "BASKETBALL_COURT";
    HwLocationType["BASQUE_RESTAURANT"] = "BASQUE_RESTAURANT";
    HwLocationType["BATTLEFIELD"] = "BATTLEFIELD";
    HwLocationType["BAY"] = "BAY";
    HwLocationType["BEACH"] = "BEACH";
    HwLocationType["BEACH_CLUB"] = "BEACH_CLUB";
    HwLocationType["BEAUTY_SALON"] = "BEAUTY_SALON";
    HwLocationType["BEAUTY_SUPPLY_SHOP"] = "BEAUTY_SUPPLY_SHOP";
    HwLocationType["BED_BREAKFAST_GUEST_HOUSES"] = "BED_BREAKFAST_GUEST_HOUSES";
    HwLocationType["BELGIAN_RESTAURANT"] = "BELGIAN_RESTAURANT";
    HwLocationType["BETTING_STATION"] = "BETTING_STATION";
    HwLocationType["BICYCLE_PARKING_PLACE"] = "BICYCLE_PARKING_PLACE";
    HwLocationType["BICYCLE_SHARING_LOCATION"] = "BICYCLE_SHARING_LOCATION";
    HwLocationType["BILLIARDS_POOL_HALL"] = "BILLIARDS_POOL_HALL";
    HwLocationType["BISTRO"] = "BISTRO";
    HwLocationType["BLOOD_BANK"] = "BLOOD_BANK";
    HwLocationType["BOATING_EQUIPMENT_ACCESSORIES_STORE"] = "BOATING_EQUIPMENT_ACCESSORIES_STORE";
    HwLocationType["BOAT_DEALER"] = "BOAT_DEALER";
    HwLocationType["BOAT_FERRY"] = "BOAT_FERRY";
    HwLocationType["BOAT_LAUNCHING_RAMP"] = "BOAT_LAUNCHING_RAMP";
    HwLocationType["BODYSHOPS"] = "BODYSHOPS";
    HwLocationType["BOLIVIAN_RESTAURANT"] = "BOLIVIAN_RESTAURANT";
    HwLocationType["BOOKSTORE"] = "BOOKSTORE";
    HwLocationType["BORDER_POST"] = "BORDER_POST";
    HwLocationType["BOSNIAN_RESTAURANT"] = "BOSNIAN_RESTAURANT";
    HwLocationType["BOWLING_FIELD"] = "BOWLING_FIELD";
    HwLocationType["BRAZILIAN_RESTAURANT"] = "BRAZILIAN_RESTAURANT";
    HwLocationType["BRIDGE"] = "BRIDGE";
    HwLocationType["BRIDGE_TUNNEL_ENGINEERING_COMPANY"] = "BRIDGE_TUNNEL_ENGINEERING_COMPANY";
    HwLocationType["BRITISH_RESTAURANT"] = "BRITISH_RESTAURANT";
    HwLocationType["BUDDHIST_TEMPLE"] = "BUDDHIST_TEMPLE";
    HwLocationType["BUFFET"] = "BUFFET";
    HwLocationType["BUILDING"] = "BUILDING";
    HwLocationType["BULGARIAN_RESTAURANT"] = "BULGARIAN_RESTAURANT";
    HwLocationType["BUNGALOW"] = "BUNGALOW";
    HwLocationType["BURMESE_RESTAURANT"] = "BURMESE_RESTAURANT";
    HwLocationType["BUSINESS"] = "BUSINESS";
    HwLocationType["BUSINESS_PARK"] = "BUSINESS_PARK";
    HwLocationType["BUSINESS_SERVICES_COMPANY"] = "BUSINESS_SERVICES_COMPANY";
    HwLocationType["BUS_CHARTER_RENTAL_COMPANY"] = "BUS_CHARTER_RENTAL_COMPANY";
    HwLocationType["BUS_COMPANY"] = "BUS_COMPANY";
    HwLocationType["BUS_DEALER"] = "BUS_DEALER";
    HwLocationType["BUS_STOP"] = "BUS_STOP";
    HwLocationType["CABARET"] = "CABARET";
    HwLocationType["CABINS_LODGES"] = "CABINS_LODGES";
    HwLocationType["CABLE_TELEPHONE_COMPANY"] = "CABLE_TELEPHONE_COMPANY";
    HwLocationType["CAFE"] = "CAFE";
    HwLocationType["CAFETERIA"] = "CAFETERIA";
    HwLocationType["CAFE_PUB"] = "CAFE_PUB";
    HwLocationType["CALIFORNIAN_RESTAURANT"] = "CALIFORNIAN_RESTAURANT";
    HwLocationType["CAMBODIAN_RESTAURANT"] = "CAMBODIAN_RESTAURANT";
    HwLocationType["CAMPING_GROUND"] = "CAMPING_GROUND";
    HwLocationType["CANADIAN_RESTAURANT"] = "CANADIAN_RESTAURANT";
    HwLocationType["CAPE"] = "CAPE";
    HwLocationType["CAPITAL"] = "CAPITAL";
    HwLocationType["CAPITAL_CITY"] = "CAPITAL_CITY";
    HwLocationType["CARAVAN_SITE"] = "CARAVAN_SITE";
    HwLocationType["CARGO_CENTER"] = "CARGO_CENTER";
    HwLocationType["CARIBBEAN_RESTAURANT"] = "CARIBBEAN_RESTAURANT";
    HwLocationType["CARPET_FLOOR_COVERING_STORE"] = "CARPET_FLOOR_COVERING_STORE";
    HwLocationType["CAR_CLUB"] = "CAR_CLUB";
    HwLocationType["CAR_DEALER"] = "CAR_DEALER";
    HwLocationType["CAR_RENTAL"] = "CAR_RENTAL";
    HwLocationType["CAR_RENTAL_COMPANY"] = "CAR_RENTAL_COMPANY";
    HwLocationType["CAR_WASH"] = "CAR_WASH";
    HwLocationType["CAR_WASH_SUB"] = "CAR_WASH_SUB";
    HwLocationType["CASINO"] = "CASINO";
    HwLocationType["CATERING_COMPANY"] = "CATERING_COMPANY";
    HwLocationType["CAVE"] = "CAVE";
    HwLocationType["CD_DVD_VIDEO_RENTAL_STORE"] = "CD_DVD_VIDEO_RENTAL_STORE";
    HwLocationType["CD_DVD_VIDEO_STORE"] = "CD_DVD_VIDEO_STORE";
    HwLocationType["CD_DVD_VIDEO_STORE_SUB"] = "CD_DVD_VIDEO_STORE_SUB";
    HwLocationType["CEMETERY"] = "CEMETERY";
    HwLocationType["CHALET"] = "CHALET";
    HwLocationType["CHEMICAL_COMPANY"] = "CHEMICAL_COMPANY";
    HwLocationType["CHICKEN_RESTAURANT"] = "CHICKEN_RESTAURANT";
    HwLocationType["CHILDRENS_MUSEUM"] = "CHILDRENS_MUSEUM";
    HwLocationType["CHILD_CARE_FACILITY"] = "CHILD_CARE_FACILITY";
    HwLocationType["CHILEAN_RESTAURANT"] = "CHILEAN_RESTAURANT";
    HwLocationType["CHINESE_MEDICINE_HOSPITAL"] = "CHINESE_MEDICINE_HOSPITAL";
    HwLocationType["CHINESE_RESTAURANT"] = "CHINESE_RESTAURANT";
    HwLocationType["CHRISTMAS_HOLIDAY_STORE"] = "CHRISTMAS_HOLIDAY_STORE";
    HwLocationType["CHURCH"] = "CHURCH";
    HwLocationType["CINEMA"] = "CINEMA";
    HwLocationType["CINEMA_SUB"] = "CINEMA_SUB";
    HwLocationType["CITIES"] = "CITIES";
    HwLocationType["CITY_CENTER"] = "CITY_CENTER";
    HwLocationType["CITY_HALL"] = "CITY_HALL";
    HwLocationType["CIVIC_COMMUNITY_CENTER"] = "CIVIC_COMMUNITY_CENTER";
    HwLocationType["CLEANING_SERVICE_COMPANY"] = "CLEANING_SERVICE_COMPANY";
    HwLocationType["CLOTHING_ACCESSORIES_STORE"] = "CLOTHING_ACCESSORIES_STORE";
    HwLocationType["CLUB_ASSOCIATION"] = "CLUB_ASSOCIATION";
    HwLocationType["COACH_PARKING_AREA"] = "COACH_PARKING_AREA";
    HwLocationType["COACH_STATION"] = "COACH_STATION";
    HwLocationType["COCKTAIL_BAR"] = "COCKTAIL_BAR";
    HwLocationType["COFFEE_SHOP"] = "COFFEE_SHOP";
    HwLocationType["COLLEGE_UNIVERSITY"] = "COLLEGE_UNIVERSITY";
    HwLocationType["COLOMBIAN_RESTAURANT"] = "COLOMBIAN_RESTAURANT";
    HwLocationType["COMEDY_CLUB"] = "COMEDY_CLUB";
    HwLocationType["COMMERCIAL_BUILDING"] = "COMMERCIAL_BUILDING";
    HwLocationType["COMMUNITY_CENTER"] = "COMMUNITY_CENTER";
    HwLocationType["COMPANY"] = "COMPANY";
    HwLocationType["COMPUTER_AND_DATA_SERVICES_CORPORATION"] = "COMPUTER_AND_DATA_SERVICES_CORPORATION";
    HwLocationType["COMPUTER_SOFTWARE_COMPANY"] = "COMPUTER_SOFTWARE_COMPANY";
    HwLocationType["COMPUTER_STORE"] = "COMPUTER_STORE";
    HwLocationType["CONCERT_HALL"] = "CONCERT_HALL";
    HwLocationType["CONDOMINIUM_COMPLEX"] = "CONDOMINIUM_COMPLEX";
    HwLocationType["CONSTRUCTION_COMPANY"] = "CONSTRUCTION_COMPANY";
    HwLocationType["CONSTRUCTION_MATERIAL_EQUIPMENT_SHOP"] = "CONSTRUCTION_MATERIAL_EQUIPMENT_SHOP";
    HwLocationType["CONSUMER_ELECTRONICS_STORE"] = "CONSUMER_ELECTRONICS_STORE";
    HwLocationType["CONTINENT"] = "CONTINENT";
    HwLocationType["CONVENIENCE_STORE"] = "CONVENIENCE_STORE";
    HwLocationType["CORSICAN_RESTAURANT"] = "CORSICAN_RESTAURANT";
    HwLocationType["COTTAGE"] = "COTTAGE";
    HwLocationType["COUNTRY"] = "COUNTRY";
    HwLocationType["COUNTY"] = "COUNTY";
    HwLocationType["COUNTY_COUNCIL"] = "COUNTY_COUNCIL";
    HwLocationType["COURIER_DROP_BOX"] = "COURIER_DROP_BOX";
    HwLocationType["COURTHOUSE"] = "COURTHOUSE";
    HwLocationType["COVE"] = "COVE";
    HwLocationType["CREOLE_CAJUN_RESTAURANT"] = "CREOLE_CAJUN_RESTAURANT";
    HwLocationType["CREPERIE"] = "CREPERIE";
    HwLocationType["CRICKET_GROUND"] = "CRICKET_GROUND";
    HwLocationType["CUBAN_RESTAURANT"] = "CUBAN_RESTAURANT";
    HwLocationType["CULINARY_SCHOOL"] = "CULINARY_SCHOOL";
    HwLocationType["CULTURAL_CENTER"] = "CULTURAL_CENTER";
    HwLocationType["CURRENCY_EXCHANGE"] = "CURRENCY_EXCHANGE";
    HwLocationType["CURTAIN_TEXTILE_STORE"] = "CURTAIN_TEXTILE_STORE";
    HwLocationType["CYPRIOT_RESTAURANT"] = "CYPRIOT_RESTAURANT";
    HwLocationType["CZECH_RESTAURANT"] = "CZECH_RESTAURANT";
    HwLocationType["DAM"] = "DAM";
    HwLocationType["DANCE_STUDIO_SCHOOL"] = "DANCE_STUDIO_SCHOOL";
    HwLocationType["DANCING_CLUB"] = "DANCING_CLUB";
    HwLocationType["DANISH_RESTAURANT"] = "DANISH_RESTAURANT";
    HwLocationType["DELICATESSEN_STORE"] = "DELICATESSEN_STORE";
    HwLocationType["DELIVERY_ENTRANCE"] = "DELIVERY_ENTRANCE";
    HwLocationType["DENTAL_CLINIC"] = "DENTAL_CLINIC";
    HwLocationType["DEPARTMENT_STORE"] = "DEPARTMENT_STORE";
    HwLocationType["DHARMA_TEMPLE"] = "DHARMA_TEMPLE";
    HwLocationType["DINNER_THEATER"] = "DINNER_THEATER";
    HwLocationType["DISCOTHEQUE"] = "DISCOTHEQUE";
    HwLocationType["DIVERSIFIED_FINANCIAL_SERVICE_COMPANY"] = "DIVERSIFIED_FINANCIAL_SERVICE_COMPANY";
    HwLocationType["DIVING_CENTER"] = "DIVING_CENTER";
    HwLocationType["DOCK"] = "DOCK";
    HwLocationType["DOMINICAN_RESTAURANT"] = "DOMINICAN_RESTAURANT";
    HwLocationType["DONGBEI_RESTAURANT"] = "DONGBEI_RESTAURANT";
    HwLocationType["DOUGHNUT_SHOP"] = "DOUGHNUT_SHOP";
    HwLocationType["DO_IT_YOURSELF_CENTERS"] = "DO_IT_YOURSELF_CENTERS";
    HwLocationType["DRIVE_IN_CINEMA"] = "DRIVE_IN_CINEMA";
    HwLocationType["DRIVE_THROUGH_BOTTLE_SHOP"] = "DRIVE_THROUGH_BOTTLE_SHOP";
    HwLocationType["DRIVING_SCHOOL"] = "DRIVING_SCHOOL";
    HwLocationType["DRUGSTORE"] = "DRUGSTORE";
    HwLocationType["DRY_CLEANERS"] = "DRY_CLEANERS";
    HwLocationType["DUNE"] = "DUNE";
    HwLocationType["DUTCH_RESTAURANT"] = "DUTCH_RESTAURANT";
    HwLocationType["EARTHQUAKE_ASSEMBLY_POINT_"] = "EARTHQUAKE_ASSEMBLY_POINT_";
    HwLocationType["EATING_DRINKING"] = "EATING_DRINKING";
    HwLocationType["EDUCATION_INSTITUTION"] = "EDUCATION_INSTITUTION";
    HwLocationType["EGYPTIAN_RESTAURANT"] = "EGYPTIAN_RESTAURANT";
    HwLocationType["ELECTRICAL_APPLIANCE_STORE"] = "ELECTRICAL_APPLIANCE_STORE";
    HwLocationType["ELECTRICAL_APPLIANCE_STORE_SUB"] = "ELECTRICAL_APPLIANCE_STORE_SUB";
    HwLocationType["ELECTRIC_VEHICLE_CHARGING_STATION"] = "ELECTRIC_VEHICLE_CHARGING_STATION";
    HwLocationType["ELECTRONICS_COMPANY"] = "ELECTRONICS_COMPANY";
    HwLocationType["ELECTRONICS_STORE"] = "ELECTRONICS_STORE";
    HwLocationType["EMBASSY"] = "EMBASSY";
    HwLocationType["EMERGENCY_ASSEMBLY_POINT"] = "EMERGENCY_ASSEMBLY_POINT";
    HwLocationType["EMERGENCY_MEDICAL_SERVICE_CENTER"] = "EMERGENCY_MEDICAL_SERVICE_CENTER";
    HwLocationType["EMERGENCY_ROOM"] = "EMERGENCY_ROOM";
    HwLocationType["ENGLISH_RESTAURANT"] = "ENGLISH_RESTAURANT";
    HwLocationType["ENTERTAINMENT_CABARET_LIVE"] = "ENTERTAINMENT_CABARET_LIVE";
    HwLocationType["ENTERTAINMENT_PLACE"] = "ENTERTAINMENT_PLACE";
    HwLocationType["EQUIPMENT_RENTAL_COMPANY"] = "EQUIPMENT_RENTAL_COMPANY";
    HwLocationType["EROTIC_RESTAURANT"] = "EROTIC_RESTAURANT";
    HwLocationType["ESTABLISHMENT"] = "ESTABLISHMENT";
    HwLocationType["ETHIOPIAN_RESTAURANT"] = "ETHIOPIAN_RESTAURANT";
    HwLocationType["EXCHANGE"] = "EXCHANGE";
    HwLocationType["EXHIBITION_CONVENTION_CENTER"] = "EXHIBITION_CONVENTION_CENTER";
    HwLocationType["EXOTIC_RESTAURANT"] = "EXOTIC_RESTAURANT";
    HwLocationType["FACTORY_OUTLETS"] = "FACTORY_OUTLETS";
    HwLocationType["FAIRGROUND"] = "FAIRGROUND";
    HwLocationType["FARM"] = "FARM";
    HwLocationType["FARMER_MARKET"] = "FARMER_MARKET";
    HwLocationType["FAST_FOOD_RESTAURANT"] = "FAST_FOOD_RESTAURANT";
    HwLocationType["FERRY_TERMINAL"] = "FERRY_TERMINAL";
    HwLocationType["FILIPINO_RESTAURANT"] = "FILIPINO_RESTAURANT";
    HwLocationType["FINNISH_RESTAURANT"] = "FINNISH_RESTAURANT";
    HwLocationType["FIRE_ASSEMBLY_POINT"] = "FIRE_ASSEMBLY_POINT";
    HwLocationType["FIRE_STATION_BRIGADE"] = "FIRE_STATION_BRIGADE";
    HwLocationType["FISHING_HUNTING_AREA"] = "FISHING_HUNTING_AREA";
    HwLocationType["FISH_STORE"] = "FISH_STORE";
    HwLocationType["FITNESS_CLUB_CENTER"] = "FITNESS_CLUB_CENTER";
    HwLocationType["FIVE_STAR_HOTEL"] = "FIVE_STAR_HOTEL";
    HwLocationType["FLATS_APARTMENT_COMPLEX"] = "FLATS_APARTMENT_COMPLEX";
    HwLocationType["FLOOD_ASSEMBLY_POINT"] = "FLOOD_ASSEMBLY_POINT";
    HwLocationType["FLORISTS"] = "FLORISTS";
    HwLocationType["FLYING_CLUB"] = "FLYING_CLUB";
    HwLocationType["FONDUE_RESTAURANT"] = "FONDUE_RESTAURANT";
    HwLocationType["FOOD_DRINK_SHOP"] = "FOOD_DRINK_SHOP";
    HwLocationType["FOOD_MARKET"] = "FOOD_MARKET";
    HwLocationType["FOOTBALL_FIELD"] = "FOOTBALL_FIELD";
    HwLocationType["FOREST_AREA"] = "FOREST_AREA";
    HwLocationType["FOUR_STAR_HOTEL"] = "FOUR_STAR_HOTEL";
    HwLocationType["FRENCH_RESTAURANT"] = "FRENCH_RESTAURANT";
    HwLocationType["FUNERAL_SERVICE_COMPANY"] = "FUNERAL_SERVICE_COMPANY";
    HwLocationType["FURNITURE_ACCESSORIES_STORE"] = "FURNITURE_ACCESSORIES_STORE";
    HwLocationType["FURNITURE_STORE"] = "FURNITURE_STORE";
    HwLocationType["FUSION_RESTAURANT"] = "FUSION_RESTAURANT";
    HwLocationType["GALLERY"] = "GALLERY";
    HwLocationType["GARDENING_CERVICE_CENTER"] = "GARDENING_CERVICE_CENTER";
    HwLocationType["GENERAL_AUTO_REPAIR_SERVICE_CENTER"] = "GENERAL_AUTO_REPAIR_SERVICE_CENTER";
    HwLocationType["GENERAL_CITY"] = "GENERAL_CITY";
    HwLocationType["GENERAL_CLINIC"] = "GENERAL_CLINIC";
    HwLocationType["GENERAL_HOSPITAL"] = "GENERAL_HOSPITAL";
    HwLocationType["GENERAL_POST_OFFICE"] = "GENERAL_POST_OFFICE";
    HwLocationType["GEOCODE"] = "GEOCODE";
    HwLocationType["GEOGRAPHIC_FEATURE"] = "GEOGRAPHIC_FEATURE";
    HwLocationType["GERMAN_RESTAURANT"] = "GERMAN_RESTAURANT";
    HwLocationType["GIFT_STORE"] = "GIFT_STORE";
    HwLocationType["GLASSWARE_CERAMIC_SHOP"] = "GLASSWARE_CERAMIC_SHOP";
    HwLocationType["GLASS_WINDOW_STORE"] = "GLASS_WINDOW_STORE";
    HwLocationType["GOLD_EXCHANGE"] = "GOLD_EXCHANGE";
    HwLocationType["GOLF_COURSE"] = "GOLF_COURSE";
    HwLocationType["GOVERNMENT_OFFICE"] = "GOVERNMENT_OFFICE";
    HwLocationType["GOVERNMENT_PUBLIC_SERVICE"] = "GOVERNMENT_PUBLIC_SERVICE";
    HwLocationType["GREEK_RESTAURANT"] = "GREEK_RESTAURANT";
    HwLocationType["GREENGROCERY"] = "GREENGROCERY";
    HwLocationType["GRILL"] = "GRILL";
    HwLocationType["GROCERY"] = "GROCERY";
    HwLocationType["GUANGDONG_RESTAURANT"] = "GUANGDONG_RESTAURANT";
    HwLocationType["GURUDWARA"] = "GURUDWARA";
    HwLocationType["HAIR_SALON_BARBERSHOP"] = "HAIR_SALON_BARBERSHOP";
    HwLocationType["HAMBURGER_RESTAURANT"] = "HAMBURGER_RESTAURANT";
    HwLocationType["HAMLET"] = "HAMLET";
    HwLocationType["HARBOR"] = "HARBOR";
    HwLocationType["HARDWARE_STORE"] = "HARDWARE_STORE";
    HwLocationType["HEALTHCARE_SERVICE_CENTER"] = "HEALTHCARE_SERVICE_CENTER";
    HwLocationType["HEALTH_CARE"] = "HEALTH_CARE";
    HwLocationType["HELIPAD_HELICOPTER_LANDING"] = "HELIPAD_HELICOPTER_LANDING";
    HwLocationType["HIGHWAY_EXIT"] = "HIGHWAY_EXIT";
    HwLocationType["HIGHWAY__ENTRANCE"] = "HIGHWAY__ENTRANCE";
    HwLocationType["HIGH_SCHOOL"] = "HIGH_SCHOOL";
    HwLocationType["HIKING_TRAIL"] = "HIKING_TRAIL";
    HwLocationType["HILL"] = "HILL";
    HwLocationType["HINDU_TEMPLE"] = "HINDU_TEMPLE";
    HwLocationType["HISTORICAL_PARK"] = "HISTORICAL_PARK";
    HwLocationType["HISTORIC_SITE"] = "HISTORIC_SITE";
    HwLocationType["HISTORY_MUSEUM"] = "HISTORY_MUSEUM";
    HwLocationType["HOBBY_SHOP"] = "HOBBY_SHOP";
    HwLocationType["HOCKEY_CLUB"] = "HOCKEY_CLUB";
    HwLocationType["HOCKEY_FIELD"] = "HOCKEY_FIELD";
    HwLocationType["HOLIDAY_HOUSE_RENTAL"] = "HOLIDAY_HOUSE_RENTAL";
    HwLocationType["HOME_APPLIANCE_REPAIR_COMPANY"] = "HOME_APPLIANCE_REPAIR_COMPANY";
    HwLocationType["HOME_GOODS_STORE"] = "HOME_GOODS_STORE";
    HwLocationType["HORSE_RACING_TRACK"] = "HORSE_RACING_TRACK";
    HwLocationType["HORSE_RIDING_FIELD"] = "HORSE_RIDING_FIELD";
    HwLocationType["HORSE_RIDING_TRAIL"] = "HORSE_RIDING_TRAIL";
    HwLocationType["HORTICULTURE_COMPANY"] = "HORTICULTURE_COMPANY";
    HwLocationType["HOSPITAL_FOR_WOMEN_AND_CHILDREN"] = "HOSPITAL_FOR_WOMEN_AND_CHILDREN";
    HwLocationType["HOSPITAL_POLYCLINIC"] = "HOSPITAL_POLYCLINIC";
    HwLocationType["HOSTEL"] = "HOSTEL";
    HwLocationType["HOTEL"] = "HOTEL";
    HwLocationType["HOTELS_WITH_LESS_THAN_TWO_STARS"] = "HOTELS_WITH_LESS_THAN_TWO_STARS";
    HwLocationType["HOTEL_MOTEL"] = "HOTEL_MOTEL";
    HwLocationType["HOT_POT_RESTAURANT"] = "HOT_POT_RESTAURANT";
    HwLocationType["HOUSEHOLD_APPLIANCE_STORE"] = "HOUSEHOLD_APPLIANCE_STORE";
    HwLocationType["HUNAN_RESTAURANT"] = "HUNAN_RESTAURANT";
    HwLocationType["HUNGARIAN_RESTAURANT"] = "HUNGARIAN_RESTAURANT";
    HwLocationType["ICE_CREAM_PARLOR"] = "ICE_CREAM_PARLOR";
    HwLocationType["ICE_HOCKEY_RINK"] = "ICE_HOCKEY_RINK";
    HwLocationType["ICE_SKATING_RINK"] = "ICE_SKATING_RINK";
    HwLocationType["IMPORTANT_TOURIST_ATTRACTION"] = "IMPORTANT_TOURIST_ATTRACTION";
    HwLocationType["IMPORT_AND_EXPORT_DISTRIBUTION_COMPANY"] = "IMPORT_AND_EXPORT_DISTRIBUTION_COMPANY";
    HwLocationType["INDIAN_RESTAURANT"] = "INDIAN_RESTAURANT";
    HwLocationType["INDONESIAN_RESTAURANT"] = "INDONESIAN_RESTAURANT";
    HwLocationType["INDUSTRIAL_BUILDING"] = "INDUSTRIAL_BUILDING";
    HwLocationType["INFORMAL_MARKET"] = "INFORMAL_MARKET";
    HwLocationType["INSURANCE_COMPANY"] = "INSURANCE_COMPANY";
    HwLocationType["INTERCITY_RAILWAY_STATION"] = "INTERCITY_RAILWAY_STATION";
    HwLocationType["INTERNATIONAL_ORGANIZATION"] = "INTERNATIONAL_ORGANIZATION";
    HwLocationType["INTERNATIONAL_RAILWAY_STATION"] = "INTERNATIONAL_RAILWAY_STATION";
    HwLocationType["INTERNATIONAL_RESTAURANT"] = "INTERNATIONAL_RESTAURANT";
    HwLocationType["INTERNET_CAFE"] = "INTERNET_CAFE";
    HwLocationType["INVESTMENT_CONSULTING_FIRM"] = "INVESTMENT_CONSULTING_FIRM";
    HwLocationType["IRANIAN_RESTAURANT"] = "IRANIAN_RESTAURANT";
    HwLocationType["IRISH_RESTAURANT"] = "IRISH_RESTAURANT";
    HwLocationType["ISLAND"] = "ISLAND";
    HwLocationType["ISRAELI_RESTAURANT"] = "ISRAELI_RESTAURANT";
    HwLocationType["ITALIAN_RESTAURANT"] = "ITALIAN_RESTAURANT";
    HwLocationType["JAIN_TEMPLE"] = "JAIN_TEMPLE";
    HwLocationType["JAMAICAN_RESTAURANT"] = "JAMAICAN_RESTAURANT";
    HwLocationType["JAPANESE_RESTAURANT"] = "JAPANESE_RESTAURANT";
    HwLocationType["JAZZ_CLUB"] = "JAZZ_CLUB";
    HwLocationType["JEWELRY_CLOCK_AND_WATCH_SHOP"] = "JEWELRY_CLOCK_AND_WATCH_SHOP";
    HwLocationType["JEWISH_RESTAURANT"] = "JEWISH_RESTAURANT";
    HwLocationType["JUNIOR_COLLEGE_COMMUNITY_COLLEGE"] = "JUNIOR_COLLEGE_COMMUNITY_COLLEGE";
    HwLocationType["KARAOKE_CLUB"] = "KARAOKE_CLUB";
    HwLocationType["KITCHEN_AND_SANITATION_STORE"] = "KITCHEN_AND_SANITATION_STORE";
    HwLocationType["KOREAN_RESTAURANT"] = "KOREAN_RESTAURANT";
    HwLocationType["KOSHER_RESTAURANT"] = "KOSHER_RESTAURANT";
    HwLocationType["LAGOON"] = "LAGOON";
    HwLocationType["LAKESHORE"] = "LAKESHORE";
    HwLocationType["LANGUAGE_SCHOOL"] = "LANGUAGE_SCHOOL";
    HwLocationType["LATIN_AMERICAN_RESTAURANT"] = "LATIN_AMERICAN_RESTAURANT";
    HwLocationType["LAUNDRY"] = "LAUNDRY";
    HwLocationType["LEBANESE_RESTAURANT"] = "LEBANESE_RESTAURANT";
    HwLocationType["LEGAL_SERVICE_COMPANY"] = "LEGAL_SERVICE_COMPANY";
    HwLocationType["LEISURE"] = "LEISURE";
    HwLocationType["LEISURE_CENTER"] = "LEISURE_CENTER";
    HwLocationType["LIBRARY"] = "LIBRARY";
    HwLocationType["LIGHTING_STORE"] = "LIGHTING_STORE";
    HwLocationType["LOADING_ZONE"] = "LOADING_ZONE";
    HwLocationType["LOCAL_POST_OFFICE"] = "LOCAL_POST_OFFICE";
    HwLocationType["LOCAL_SPECIALTY_STORE"] = "LOCAL_SPECIALTY_STORE";
    HwLocationType["LODGING_LIVING_ACCOMMODATION"] = "LODGING_LIVING_ACCOMMODATION";
    HwLocationType["LOTTERY_SHOP"] = "LOTTERY_SHOP";
    HwLocationType["LUXEMBOURGIAN_RESTAURANT"] = "LUXEMBOURGIAN_RESTAURANT";
    HwLocationType["MACROBIOTIC_RESTAURANT"] = "MACROBIOTIC_RESTAURANT";
    HwLocationType["MAGHRIB_RESTAURANT"] = "MAGHRIB_RESTAURANT";
    HwLocationType["MAIL_PACKAGE_FREIGHT_DELIVERY_COMPANY"] = "MAIL_PACKAGE_FREIGHT_DELIVERY_COMPANY";
    HwLocationType["MALTESE_RESTAURANT"] = "MALTESE_RESTAURANT";
    HwLocationType["MANUFACTURING_COMPANY"] = "MANUFACTURING_COMPANY";
    HwLocationType["MANUFACTURING_FACTORY"] = "MANUFACTURING_FACTORY";
    HwLocationType["MARINA"] = "MARINA";
    HwLocationType["MARINA_SUB"] = "MARINA_SUB";
    HwLocationType["MARINE_ELECTRONIC_EQUIPMENT_STORE"] = "MARINE_ELECTRONIC_EQUIPMENT_STORE";
    HwLocationType["MARKET"] = "MARKET";
    HwLocationType["MARSH_SWAMP_VLEI"] = "MARSH_SWAMP_VLEI";
    HwLocationType["MAURITIAN_RESTAURANT"] = "MAURITIAN_RESTAURANT";
    HwLocationType["MAUSOLEUM_GRAVE"] = "MAUSOLEUM_GRAVE";
    HwLocationType["MEAT_STORE"] = "MEAT_STORE";
    HwLocationType["MECHANICAL_ENGINEERING_COMPANY"] = "MECHANICAL_ENGINEERING_COMPANY";
    HwLocationType["MEDIA_COMPANY"] = "MEDIA_COMPANY";
    HwLocationType["MEDICAL_CLINIC"] = "MEDICAL_CLINIC";
    HwLocationType["MEDICAL_SUPPLIES_EQUIPMENT_STORE"] = "MEDICAL_SUPPLIES_EQUIPMENT_STORE";
    HwLocationType["MEDITERRANEAN_RESTAURANT"] = "MEDITERRANEAN_RESTAURANT";
    HwLocationType["MEMORIAL"] = "MEMORIAL";
    HwLocationType["MEMORIAL_PLACE"] = "MEMORIAL_PLACE";
    HwLocationType["METRO"] = "METRO";
    HwLocationType["MEXICAN_RESTAURANT"] = "MEXICAN_RESTAURANT";
    HwLocationType["MICROBREWERY_BEER_GARDEN"] = "MICROBREWERY_BEER_GARDEN";
    HwLocationType["MIDDLE_EASTERN_RESTAURANT"] = "MIDDLE_EASTERN_RESTAURANT";
    HwLocationType["MIDDLE_SCHOOL"] = "MIDDLE_SCHOOL";
    HwLocationType["MILITARY_AUTHORITY"] = "MILITARY_AUTHORITY";
    HwLocationType["MILITARY_BASE"] = "MILITARY_BASE";
    HwLocationType["MINERAL_COMPANY"] = "MINERAL_COMPANY";
    HwLocationType["MINERAL_HOT_SPRINGS"] = "MINERAL_HOT_SPRINGS";
    HwLocationType["MISCELLANEOUS"] = "MISCELLANEOUS";
    HwLocationType["MOBILE_PHONE_STORE"] = "MOBILE_PHONE_STORE";
    HwLocationType["MONGOLIAN_RESTAURANT"] = "MONGOLIAN_RESTAURANT";
    HwLocationType["MONUMENT"] = "MONUMENT";
    HwLocationType["MORMON_CHURCH"] = "MORMON_CHURCH";
    HwLocationType["MOROCCAN_RESTAURANT"] = "MOROCCAN_RESTAURANT";
    HwLocationType["MOSQUE"] = "MOSQUE";
    HwLocationType["MOTEL"] = "MOTEL";
    HwLocationType["MOTORCYCLE_DEALER"] = "MOTORCYCLE_DEALER";
    HwLocationType["MOTORCYCLE_REPAIR_SHOP"] = "MOTORCYCLE_REPAIR_SHOP";
    HwLocationType["MOTORING_ORGANIZATION_OFFICE"] = "MOTORING_ORGANIZATION_OFFICE";
    HwLocationType["MOTORSPORT_VENUE"] = "MOTORSPORT_VENUE";
    HwLocationType["MOUNTAIN_BIKE_TRAIL"] = "MOUNTAIN_BIKE_TRAIL";
    HwLocationType["MOUNTAIN_PASS"] = "MOUNTAIN_PASS";
    HwLocationType["MOUNTAIN_PEAK"] = "MOUNTAIN_PEAK";
    HwLocationType["MOVING_STORAGE_COMPANY"] = "MOVING_STORAGE_COMPANY";
    HwLocationType["MULTIPURPOSE_STADIUM"] = "MULTIPURPOSE_STADIUM";
    HwLocationType["MUSEUM"] = "MUSEUM";
    HwLocationType["MUSICAL_INSTRUMENT_STORE"] = "MUSICAL_INSTRUMENT_STORE";
    HwLocationType["MUSIC_CENTER"] = "MUSIC_CENTER";
    HwLocationType["MUSSEL_RESTAURANT"] = "MUSSEL_RESTAURANT";
    HwLocationType["NAIL_SALON"] = "NAIL_SALON";
    HwLocationType["NAMED_INTERSECTION"] = "NAMED_INTERSECTION";
    HwLocationType["NATIONAL_ORGANIZATION"] = "NATIONAL_ORGANIZATION";
    HwLocationType["NATIONAL_RAILWAY_STATION"] = "NATIONAL_RAILWAY_STATION";
    HwLocationType["NATIVE_RESERVATION"] = "NATIVE_RESERVATION";
    HwLocationType["NATURAL_ATTRACTION"] = "NATURAL_ATTRACTION";
    HwLocationType["NATURAL_ATTRACTION_TOURIST"] = "NATURAL_ATTRACTION_TOURIST";
    HwLocationType["NEIGHBORHOOD"] = "NEIGHBORHOOD";
    HwLocationType["NEPALESE_RESTAURANT"] = "NEPALESE_RESTAURANT";
    HwLocationType["NETBALL_COURT"] = "NETBALL_COURT";
    HwLocationType["NEWSAGENTS_AND_TOBACCONISTS"] = "NEWSAGENTS_AND_TOBACCONISTS";
    HwLocationType["NIGHTLIFE"] = "NIGHTLIFE";
    HwLocationType["NIGHT_CLUB"] = "NIGHT_CLUB";
    HwLocationType["NON_GOVERNMENTAL_ORGANIZATION"] = "NON_GOVERNMENTAL_ORGANIZATION";
    HwLocationType["NORWEGIAN_RESTAURANT"] = "NORWEGIAN_RESTAURANT";
    HwLocationType["NURSING_HOME"] = "NURSING_HOME";
    HwLocationType["OASIS"] = "OASIS";
    HwLocationType["OBSERVATION_DECK"] = "OBSERVATION_DECK";
    HwLocationType["OBSERVATORY"] = "OBSERVATORY";
    HwLocationType["OEM"] = "OEM";
    HwLocationType["OFFICE_EQUIPMENT_STORE"] = "OFFICE_EQUIPMENT_STORE";
    HwLocationType["OFFICE_SUPPLY_SERVICES_STORE"] = "OFFICE_SUPPLY_SERVICES_STORE";
    HwLocationType["OIL_NATURAL_GAS_COMPANY"] = "OIL_NATURAL_GAS_COMPANY";
    HwLocationType["OPERA"] = "OPERA";
    HwLocationType["OPTICIANS"] = "OPTICIANS";
    HwLocationType["ORDER_1_AREA_GOVERNMENT_OFFICE"] = "ORDER_1_AREA_GOVERNMENT_OFFICE";
    HwLocationType["ORDER_1_AREA_POLICE_STATION"] = "ORDER_1_AREA_POLICE_STATION";
    HwLocationType["ORDER_2_AREA_GOVERNMENT_OFFICE"] = "ORDER_2_AREA_GOVERNMENT_OFFICE";
    HwLocationType["ORDER_3_AREA_GOVERNMENT_OFFICE"] = "ORDER_3_AREA_GOVERNMENT_OFFICE";
    HwLocationType["ORDER_4_AREA_GOVERNMENT_OFFICE"] = "ORDER_4_AREA_GOVERNMENT_OFFICE";
    HwLocationType["ORDER_5_AREA_GOVERNMENT_OFFICE"] = "ORDER_5_AREA_GOVERNMENT_OFFICE";
    HwLocationType["ORDER_6_AREA_GOVERNMENT_OFFICE"] = "ORDER_6_AREA_GOVERNMENT_OFFICE";
    HwLocationType["ORDER_7_AREA_GOVERNMENT_OFFICE"] = "ORDER_7_AREA_GOVERNMENT_OFFICE";
    HwLocationType["ORDER_8_AREA_GOVERNMENT_OFFICE"] = "ORDER_8_AREA_GOVERNMENT_OFFICE";
    HwLocationType["ORDER_8_AREA_POLICE_STATION"] = "ORDER_8_AREA_POLICE_STATION";
    HwLocationType["ORDER_9_AREA_GOVERNMENT_OFFICE"] = "ORDER_9_AREA_GOVERNMENT_OFFICE";
    HwLocationType["ORDER_9_AREA_POLICE_STATION"] = "ORDER_9_AREA_POLICE_STATION";
    HwLocationType["ORGANIC_RESTAURANT"] = "ORGANIC_RESTAURANT";
    HwLocationType["ORGANIZATION"] = "ORGANIZATION";
    HwLocationType["ORIENTAL_RESTAURANT"] = "ORIENTAL_RESTAURANT";
    HwLocationType["OUTLETS"] = "OUTLETS";
    HwLocationType["PAGODA"] = "PAGODA";
    HwLocationType["PAINTING_DECORATING_STORE"] = "PAINTING_DECORATING_STORE";
    HwLocationType["PAKISTANI_RESTAURANT"] = "PAKISTANI_RESTAURANT";
    HwLocationType["PAN"] = "PAN";
    HwLocationType["PARK"] = "PARK";
    HwLocationType["PARKING_GARAGE"] = "PARKING_GARAGE";
    HwLocationType["PARKING_LOT"] = "PARKING_LOT";
    HwLocationType["PARKING_LOT_SUB"] = "PARKING_LOT_SUB";
    HwLocationType["PARKWAY"] = "PARKWAY";
    HwLocationType["PARK_AND_RECREATION_AREA"] = "PARK_AND_RECREATION_AREA";
    HwLocationType["PARK_RIDE"] = "PARK_RIDE";
    HwLocationType["PASSENGER_TRANSPORT_TICKET_OFFICE"] = "PASSENGER_TRANSPORT_TICKET_OFFICE";
    HwLocationType["PAWN_SHOP"] = "PAWN_SHOP";
    HwLocationType["PEDESTRIAN_SUBWAY"] = "PEDESTRIAN_SUBWAY";
    HwLocationType["PERSONAL_CARE_INSTITUTION"] = "PERSONAL_CARE_INSTITUTION";
    HwLocationType["PERSONAL_SERVICE_CENTER"] = "PERSONAL_SERVICE_CENTER";
    HwLocationType["PERUVIAN_RESTAURANT"] = "PERUVIAN_RESTAURANT";
    HwLocationType["PETROL_STATION"] = "PETROL_STATION";
    HwLocationType["PET_STORE"] = "PET_STORE";
    HwLocationType["PET_SUPPLY_STORE"] = "PET_SUPPLY_STORE";
    HwLocationType["PHARMACEUTICAL_COMPANY"] = "PHARMACEUTICAL_COMPANY";
    HwLocationType["PHARMACY"] = "PHARMACY";
    HwLocationType["PHOTOCOPY_SHOP"] = "PHOTOCOPY_SHOP";
    HwLocationType["PHOTOGRAPHIC_EQUIPMENT_STORE"] = "PHOTOGRAPHIC_EQUIPMENT_STORE";
    HwLocationType["PHOTO_SHOP"] = "PHOTO_SHOP";
    HwLocationType["PHYSIOTHERAPY_CLINIC"] = "PHYSIOTHERAPY_CLINIC";
    HwLocationType["PICK_UP_AND_RETURN_POINT"] = "PICK_UP_AND_RETURN_POINT";
    HwLocationType["PICNIC_AREA"] = "PICNIC_AREA";
    HwLocationType["PIZZA_RESTAURANT"] = "PIZZA_RESTAURANT";
    HwLocationType["PLACE_OF_WORSHIP"] = "PLACE_OF_WORSHIP";
    HwLocationType["PLAIN_FLAT"] = "PLAIN_FLAT";
    HwLocationType["PLANETARIUM"] = "PLANETARIUM";
    HwLocationType["PLATEAU"] = "PLATEAU";
    HwLocationType["POLICE_STATION"] = "POLICE_STATION";
    HwLocationType["POLISH_RESTAURANT"] = "POLISH_RESTAURANT";
    HwLocationType["POLYNESIAN_RESTAURANT"] = "POLYNESIAN_RESTAURANT";
    HwLocationType["PORTUGUESE_RESTAURANT"] = "PORTUGUESE_RESTAURANT";
    HwLocationType["PORT_WAREHOUSE"] = "PORT_WAREHOUSE";
    HwLocationType["POSTAL_CODE"] = "POSTAL_CODE";
    HwLocationType["POST_OFFICE"] = "POST_OFFICE";
    HwLocationType["PRESCHOOL"] = "PRESCHOOL";
    HwLocationType["PRESERVED_AREA"] = "PRESERVED_AREA";
    HwLocationType["PRIMARY_SCHOOL"] = "PRIMARY_SCHOOL";
    HwLocationType["PRISON"] = "PRISON";
    HwLocationType["PRIVATE_AUTHORITY"] = "PRIVATE_AUTHORITY";
    HwLocationType["PRIVATE_CLUB"] = "PRIVATE_CLUB";
    HwLocationType["PRODUCER_COMPANY"] = "PRODUCER_COMPANY";
    HwLocationType["PROTECTED_AREA"] = "PROTECTED_AREA";
    HwLocationType["PROVEN\u00C7AL_RESTAURANT"] = "PROVEN\u00C7AL_RESTAURANT";
    HwLocationType["PUB"] = "PUB";
    HwLocationType["PUBLIC_AMENITY"] = "PUBLIC_AMENITY";
    HwLocationType["PUBLIC_AUTHORITY"] = "PUBLIC_AUTHORITY";
    HwLocationType["PUBLIC_CALL_BOX"] = "PUBLIC_CALL_BOX";
    HwLocationType["PUBLIC_HEALTH_TECHNOLOGY_COMPANY"] = "PUBLIC_HEALTH_TECHNOLOGY_COMPANY";
    HwLocationType["PUBLIC_MARKET"] = "PUBLIC_MARKET";
    HwLocationType["PUBLIC_RESTROOM"] = "PUBLIC_RESTROOM";
    HwLocationType["PUBLIC_TRANSPORT_STOP"] = "PUBLIC_TRANSPORT_STOP";
    HwLocationType["PUBLISHING_TECHNOLOGY_COMPANY"] = "PUBLISHING_TECHNOLOGY_COMPANY";
    HwLocationType["PUB_FOOD"] = "PUB_FOOD";
    HwLocationType["QUARRY"] = "QUARRY";
    HwLocationType["RACE_TRACK"] = "RACE_TRACK";
    HwLocationType["RAILWAY_SIDING"] = "RAILWAY_SIDING";
    HwLocationType["RAILWAY_STATION"] = "RAILWAY_STATION";
    HwLocationType["RAIL_FERRY"] = "RAIL_FERRY";
    HwLocationType["RAPIDS"] = "RAPIDS";
    HwLocationType["REAL_ESTATE_AGENCY_COMPANY"] = "REAL_ESTATE_AGENCY_COMPANY";
    HwLocationType["REAL_ESTATE_AGENCY_SHOP"] = "REAL_ESTATE_AGENCY_SHOP";
    HwLocationType["RECREATIONAL_SITE"] = "RECREATIONAL_SITE";
    HwLocationType["RECREATIONAL_VEHICLE_DEALER"] = "RECREATIONAL_VEHICLE_DEALER";
    HwLocationType["RECREATION_AREA"] = "RECREATION_AREA";
    HwLocationType["RECYCLING_SHOP"] = "RECYCLING_SHOP";
    HwLocationType["REEF"] = "REEF";
    HwLocationType["REGIONS"] = "REGIONS";
    HwLocationType["REPAIR_SHOP"] = "REPAIR_SHOP";
    HwLocationType["RESEARCH_INSTITUTE"] = "RESEARCH_INSTITUTE";
    HwLocationType["RESERVOIR"] = "RESERVOIR";
    HwLocationType["RESIDENTIAL_ACCOMMODATION"] = "RESIDENTIAL_ACCOMMODATION";
    HwLocationType["RESIDENTIAL_ESTATE"] = "RESIDENTIAL_ESTATE";
    HwLocationType["RESORT"] = "RESORT";
    HwLocationType["RESTAURANT"] = "RESTAURANT";
    HwLocationType["RESTAURANT_AREA"] = "RESTAURANT_AREA";
    HwLocationType["REST_AREA"] = "REST_AREA";
    HwLocationType["REST_CAMPS"] = "REST_CAMPS";
    HwLocationType["RETAIL_OUTLETS"] = "RETAIL_OUTLETS";
    HwLocationType["RETIREMENT_COMMUNITY"] = "RETIREMENT_COMMUNITY";
    HwLocationType["RIDGE"] = "RIDGE";
    HwLocationType["RIVER_CROSSING"] = "RIVER_CROSSING";
    HwLocationType["ROADSIDE"] = "ROADSIDE";
    HwLocationType["ROAD_RESCUE_POINT"] = "ROAD_RESCUE_POINT";
    HwLocationType["ROCKS"] = "ROCKS";
    HwLocationType["ROCK_CLIMBING_TRAIL"] = "ROCK_CLIMBING_TRAIL";
    HwLocationType["ROMANIAN_RESTAURANT"] = "ROMANIAN_RESTAURANT";
    HwLocationType["ROUTE"] = "ROUTE";
    HwLocationType["RUGBY_GROUND"] = "RUGBY_GROUND";
    HwLocationType["RUSSIAN_RESTAURANT"] = "RUSSIAN_RESTAURANT";
    HwLocationType["SALAD_BAR"] = "SALAD_BAR";
    HwLocationType["SANDWICH_RESTAURANT"] = "SANDWICH_RESTAURANT";
    HwLocationType["SAUNA_SOLARIUM_MASSAGE_CENTER"] = "SAUNA_SOLARIUM_MASSAGE_CENTER";
    HwLocationType["SAVINGS_INSTITUTION"] = "SAVINGS_INSTITUTION";
    HwLocationType["SAVOYAN_RESTAURANT"] = "SAVOYAN_RESTAURANT";
    HwLocationType["SCANDINAVIAN_RESTAURANT"] = "SCANDINAVIAN_RESTAURANT";
    HwLocationType["SCENIC_RIVER_AREA"] = "SCENIC_RIVER_AREA";
    HwLocationType["SCHOOL"] = "SCHOOL";
    HwLocationType["SCHOOL_BUS_SERVICE_COMPANY"] = "SCHOOL_BUS_SERVICE_COMPANY";
    HwLocationType["SCIENCE_MUSEUM"] = "SCIENCE_MUSEUM";
    HwLocationType["SCOTTISH_RESTAURANT"] = "SCOTTISH_RESTAURANT";
    HwLocationType["SEAFOOD_RESTAURANT"] = "SEAFOOD_RESTAURANT";
    HwLocationType["SEASHORE"] = "SEASHORE";
    HwLocationType["SECURITY_GATE"] = "SECURITY_GATE";
    HwLocationType["SECURITY_STORE"] = "SECURITY_STORE";
    HwLocationType["SENIOR_HIGH_SCHOOL"] = "SENIOR_HIGH_SCHOOL";
    HwLocationType["SERVICE_COMPANY"] = "SERVICE_COMPANY";
    HwLocationType["SHANDONG_RESTAURANT"] = "SHANDONG_RESTAURANT";
    HwLocationType["SHANGHAI_RESTAURANT"] = "SHANGHAI_RESTAURANT";
    HwLocationType["SHINTO_SHRINE"] = "SHINTO_SHRINE";
    HwLocationType["SHOOTING_RANGE"] = "SHOOTING_RANGE";
    HwLocationType["SHOP"] = "SHOP";
    HwLocationType["SHOPPING"] = "SHOPPING";
    HwLocationType["SHOPPING_CENTER"] = "SHOPPING_CENTER";
    HwLocationType["SHOPPING_SERVICE_CENTER"] = "SHOPPING_SERVICE_CENTER";
    HwLocationType["SICHUAN_RESTAURANT"] = "SICHUAN_RESTAURANT";
    HwLocationType["SICILIAN_RESTAURANT"] = "SICILIAN_RESTAURANT";
    HwLocationType["SKI_LIFT"] = "SKI_LIFT";
    HwLocationType["SKI_RESORT"] = "SKI_RESORT";
    HwLocationType["SLAVIC_RESTAURANT"] = "SLAVIC_RESTAURANT";
    HwLocationType["SLOVAK_RESTAURANT"] = "SLOVAK_RESTAURANT";
    HwLocationType["SNACKS"] = "SNACKS";
    HwLocationType["SNOOKER_POOL_BILLIARD_HALL"] = "SNOOKER_POOL_BILLIARD_HALL";
    HwLocationType["SOCCER_FIELD"] = "SOCCER_FIELD";
    HwLocationType["SOUL_FOOD_RESTAURANT"] = "SOUL_FOOD_RESTAURANT";
    HwLocationType["SOUP_RESTAURANT"] = "SOUP_RESTAURANT";
    HwLocationType["SPA"] = "SPA";
    HwLocationType["SPANISH_RESTAURANT"] = "SPANISH_RESTAURANT";
    HwLocationType["SPECIALIST_CLINIC"] = "SPECIALIST_CLINIC";
    HwLocationType["SPECIALIZED_HOSPITAL"] = "SPECIALIZED_HOSPITAL";
    HwLocationType["SPECIALTY_FOOD_STORE"] = "SPECIALTY_FOOD_STORE";
    HwLocationType["SPECIALTY_STORE"] = "SPECIALTY_STORE";
    HwLocationType["SPECIAL_SCHOOL"] = "SPECIAL_SCHOOL";
    HwLocationType["SPORT"] = "SPORT";
    HwLocationType["SPORTS_CENTER"] = "SPORTS_CENTER";
    HwLocationType["SPORTS_CENTER_SUB"] = "SPORTS_CENTER_SUB";
    HwLocationType["SPORTS_SCHOOL"] = "SPORTS_SCHOOL";
    HwLocationType["SPORTS_STORE"] = "SPORTS_STORE";
    HwLocationType["SQUASH_COURT"] = "SQUASH_COURT";
    HwLocationType["STADIUM"] = "STADIUM";
    HwLocationType["STAMP_SHOP"] = "STAMP_SHOP";
    HwLocationType["STATION_ACCESS"] = "STATION_ACCESS";
    HwLocationType["STATUE"] = "STATUE";
    HwLocationType["STEAK_HOUSE"] = "STEAK_HOUSE";
    HwLocationType["STOCK_EXCHANGE"] = "STOCK_EXCHANGE";
    HwLocationType["STORE"] = "STORE";
    HwLocationType["STREET_ADDRESS"] = "STREET_ADDRESS";
    HwLocationType["SUDANESE_RESTAURANT"] = "SUDANESE_RESTAURANT";
    HwLocationType["SUPERMARKET_HYPERMARKET"] = "SUPERMARKET_HYPERMARKET";
    HwLocationType["SURINAMESE_RESTAURANT"] = "SURINAMESE_RESTAURANT";
    HwLocationType["SUSHI_RESTAURANT"] = "SUSHI_RESTAURANT";
    HwLocationType["SWEDISH_RESTAURANT"] = "SWEDISH_RESTAURANT";
    HwLocationType["SWIMMING_POOL"] = "SWIMMING_POOL";
    HwLocationType["SWISS_RESTAURANT"] = "SWISS_RESTAURANT";
    HwLocationType["SYNAGOGUE"] = "SYNAGOGUE";
    HwLocationType["SYRIAN_RESTAURANT"] = "SYRIAN_RESTAURANT";
    HwLocationType["TABLE_TENNIS_HALL"] = "TABLE_TENNIS_HALL";
    HwLocationType["TAILOR_SHOP"] = "TAILOR_SHOP";
    HwLocationType["TAIWANESE_RESTAURANT"] = "TAIWANESE_RESTAURANT";
    HwLocationType["TAKE_AWAY_RESTAURANT"] = "TAKE_AWAY_RESTAURANT";
    HwLocationType["TAPAS_RESTAURANT"] = "TAPAS_RESTAURANT";
    HwLocationType["TAXI_LIMOUSINE_SHUTTLE_SERVICE_COMPANY"] = "TAXI_LIMOUSINE_SHUTTLE_SERVICE_COMPANY";
    HwLocationType["TAXI_STAND"] = "TAXI_STAND";
    HwLocationType["TAX_SERVICE_COMPANY"] = "TAX_SERVICE_COMPANY";
    HwLocationType["TEA_HOUSE"] = "TEA_HOUSE";
    HwLocationType["TECHNICAL_SCHOOL"] = "TECHNICAL_SCHOOL";
    HwLocationType["TELECOMMUNICATIONS_COMPANY"] = "TELECOMMUNICATIONS_COMPANY";
    HwLocationType["TEMPLE"] = "TEMPLE";
    HwLocationType["TENNIS_COURT"] = "TENNIS_COURT";
    HwLocationType["TEPPANYAKKI_RESTAURANT"] = "TEPPANYAKKI_RESTAURANT";
    HwLocationType["TERMINAL"] = "TERMINAL";
    HwLocationType["THAI_RESTAURANT"] = "THAI_RESTAURANT";
    HwLocationType["THEATER"] = "THEATER";
    HwLocationType["THEATER_SUB"] = "THEATER_SUB";
    HwLocationType["THEMED_SPORTS_HALL"] = "THEMED_SPORTS_HALL";
    HwLocationType["THREE_STAR_HOTEL"] = "THREE_STAR_HOTEL";
    HwLocationType["TIBETAN_RESTAURANT"] = "TIBETAN_RESTAURANT";
    HwLocationType["TIRE_REPAIR_SHOP"] = "TIRE_REPAIR_SHOP";
    HwLocationType["TOILET"] = "TOILET";
    HwLocationType["TOLL_GATE"] = "TOLL_GATE";
    HwLocationType["TOURISM"] = "TOURISM";
    HwLocationType["TOURIST_INFORMATION_OFFICE"] = "TOURIST_INFORMATION_OFFICE";
    HwLocationType["TOWER"] = "TOWER";
    HwLocationType["TOWN"] = "TOWN";
    HwLocationType["TOWNHOUSE_COMPLEX"] = "TOWNHOUSE_COMPLEX";
    HwLocationType["TOWN_GOVERNMENT"] = "TOWN_GOVERNMENT";
    HwLocationType["TOYS_AND_GAMES_STORE"] = "TOYS_AND_GAMES_STORE";
    HwLocationType["TRAFFIC"] = "TRAFFIC";
    HwLocationType["TRAFFIC_CONTROL_DEPARTMENT"] = "TRAFFIC_CONTROL_DEPARTMENT";
    HwLocationType["TRAFFIC_LIGHT"] = "TRAFFIC_LIGHT";
    HwLocationType["TRAFFIC_MANAGEMENT_BUREAU"] = "TRAFFIC_MANAGEMENT_BUREAU";
    HwLocationType["TRAFFIC_SIGN"] = "TRAFFIC_SIGN";
    HwLocationType["TRAFFIC_SIGNAL"] = "TRAFFIC_SIGNAL";
    HwLocationType["TRAILHEAD"] = "TRAILHEAD";
    HwLocationType["TRAIL_SYSTEM"] = "TRAIL_SYSTEM";
    HwLocationType["TRAM_STOP"] = "TRAM_STOP";
    HwLocationType["TRANSPORT"] = "TRANSPORT";
    HwLocationType["TRANSPORTATION_COMPANY"] = "TRANSPORTATION_COMPANY";
    HwLocationType["TRANSPORT__CENTER"] = "TRANSPORT__CENTER";
    HwLocationType["TRAVEL_AGENCY"] = "TRAVEL_AGENCY";
    HwLocationType["TRUCK_DEALER"] = "TRUCK_DEALER";
    HwLocationType["TRUCK_PARKING_AREA"] = "TRUCK_PARKING_AREA";
    HwLocationType["TRUCK_REPAIR_SHOP"] = "TRUCK_REPAIR_SHOP";
    HwLocationType["TRUCK_STOP"] = "TRUCK_STOP";
    HwLocationType["TRUCK_WASH"] = "TRUCK_WASH";
    HwLocationType["TSUNAMI_ASSEMBLY_POINT"] = "TSUNAMI_ASSEMBLY_POINT";
    HwLocationType["TUNISIAN_RESTAURANT"] = "TUNISIAN_RESTAURANT";
    HwLocationType["TUNNEL"] = "TUNNEL";
    HwLocationType["TURKISH_RESTAURANT"] = "TURKISH_RESTAURANT";
    HwLocationType["UNRATED_HOTEL"] = "UNRATED_HOTEL";
    HwLocationType["URUGUAYAN_RESTAURANT"] = "URUGUAYAN_RESTAURANT";
    HwLocationType["USED_CAR_DEALER"] = "USED_CAR_DEALER";
    HwLocationType["VALLEY"] = "VALLEY";
    HwLocationType["VAN_DEALER"] = "VAN_DEALER";
    HwLocationType["VARIETY_STORE"] = "VARIETY_STORE";
    HwLocationType["VEGETARIAN_RESTAURANT"] = "VEGETARIAN_RESTAURANT";
    HwLocationType["VENEZUELAN_RESTAURANT"] = "VENEZUELAN_RESTAURANT";
    HwLocationType["VETERINARY_CLINIC"] = "VETERINARY_CLINIC";
    HwLocationType["VIDEO_ARCADE_GAMING_ROOM"] = "VIDEO_ARCADE_GAMING_ROOM";
    HwLocationType["VIETNAMESE_RESTAURANT"] = "VIETNAMESE_RESTAURANT";
    HwLocationType["VILLA"] = "VILLA";
    HwLocationType["VOCATIONAL_TRAINING_SCHOOL"] = "VOCATIONAL_TRAINING_SCHOOL";
    HwLocationType["VOLCANIC_ERUPTION_ASSEMBLY_POINT"] = "VOLCANIC_ERUPTION_ASSEMBLY_POINT";
    HwLocationType["WAREHOUSE_SUPERMARKET"] = "WAREHOUSE_SUPERMARKET";
    HwLocationType["WATER_HOLE"] = "WATER_HOLE";
    HwLocationType["WATER_SPORTS_CENTER"] = "WATER_SPORTS_CENTER";
    HwLocationType["WEDDING_SERVICE_COMPANY"] = "WEDDING_SERVICE_COMPANY";
    HwLocationType["WEIGH_SCALES"] = "WEIGH_SCALES";
    HwLocationType["WEIGH_STATION"] = "WEIGH_STATION";
    HwLocationType["WEIGH_STATION_SUB"] = "WEIGH_STATION_SUB";
    HwLocationType["WELFARE_ORGANIZATION"] = "WELFARE_ORGANIZATION";
    HwLocationType["WELL"] = "WELL";
    HwLocationType["WELSH_RESTAURANT"] = "WELSH_RESTAURANT";
    HwLocationType["WESTERN_RESTAURANT"] = "WESTERN_RESTAURANT";
    HwLocationType["WILDERNESS_AREA"] = "WILDERNESS_AREA";
    HwLocationType["WILDLIFE_PARK"] = "WILDLIFE_PARK";
    HwLocationType["WINERY"] = "WINERY";
    HwLocationType["WINERY_TOURIST"] = "WINERY_TOURIST";
    HwLocationType["WINE_BAR"] = "WINE_BAR";
    HwLocationType["WINE_SPIRITS_STORE"] = "WINE_SPIRITS_STORE";
    HwLocationType["WINTER_SPORT_AREA"] = "WINTER_SPORT_AREA";
    HwLocationType["YACHT_BASIN"] = "YACHT_BASIN";
    HwLocationType["YOGURT_JUICE_BAR"] = "YOGURT_JUICE_BAR";
    HwLocationType["ZOO"] = "ZOO";
    HwLocationType["ZOO_ARBORETA_BOTANICAL_GARDEN"] = "ZOO_ARBORETA_BOTANICAL_GARDEN";
})(HwLocationType || (HwLocationType = {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvaG1zLXNpdGUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUc7QUFHRjtBQUFDO0FBQ0Q7QUFDRDtBQUE0QztBQUM1QztBQUNrRDtBQUFDO0FBRWlCO0FBQ0g7QUFDTTtBQUNOO0FBQ3RDLEVBQ3pCO0FBQUM7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU07QUFBQyxtQkFBbUIsQ0FBQzs7QUFJdEUsSUFRMkIsMkJBQWlCO0FBRWxDO0FBQ047QUFBeUI7QUFLNUIsSUFMQztBQUFFLDRCQUFVLHhCQUtaLCtCQUFhO0FBS1IsSUFBTCxvQ0FBa0IsYUFBQyxNQUFjLEVBQUUsWUFBMEIsRUFBRSxJQUFhO0FBSzdFO0FBRStEO0FBSXpEO0FBQ2M7QUFBbUM7QUFBdUI7QUFDOUQ7QUFBbUMsSUExQnpDLE9BQU87UUFEbkIsVUFBVSxFQUFFLGNBQ0EsT0FBTzs7OzswQkFBdUI7QUFBQyxDQTdCNUMsQ0E2QjZCLGlCQUFpQjtBQUFDLFNBQWxDLE9BQU87QUFBTztBQUFvQjtBQUdsQztBQUNDLElBZUc7QUFBRSx5QkFBSSxHQUFuQixVQUFvQixNQUFjO0FBQVU7QUFDTjtBQUl4Qyw0QkFKYTtBQUFRLGFBQUksTUFBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUEsckNBQXRFLHNCQUFPLFNBQStELEVBQUM7QUFJcEQ7QUFDNEI7QUFBa0I7QUFDeEUsS0FMSTtBQUdMO0FBQU8sd0JBckRQO0FBQ0s7QUE2TkwsT0FBTztBQUNQLE1BQU0sQ0FBTjtBQUFDLEdBQVcsWUFxSlgsZkFySkQsV0FBWSxZQUFZO0FBQUUsSUFDdEI7QUFBdUIsa0JBQUUsQ0FBQSxmQUN6QixtQ0FBbUIsQ0FBQTtBQUNuQixJQUFBO0FBQXFDLHND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QUFzQixDQUFBLHJDQUN6RDtBQUNDLFVBRG9FLENBQUEsUEFDckUsaUVBQStDLENBQUE7QUFDL0IsSUFBaEIsMkNBQXlCLENBQUE7QUFDVCxJQUFoQjtBQUE2QyxnQkFBRixDQUFBLGJBQzNDO0FBQ0ssTUFEOEMsQ0FBQSxIQUNuRCwrQ0FBNkIsQ0FBQTtBQUNiLElBQWhCO0FBQStCLENBQUEsR0FDL0I7QUFDSyxNQURrQyxDQUFBLEhBQ3ZDO0FBQ08sSUFEc0MsQ0FBQSxEQUM3QywrQkFBYSxDQUFBO0FBQ2EsSUFBMUI7QUFBaUMsc0JBQUksQ0FBQSxuQkFDckM7QUFDUyxFQURnQyxDQUFBLENBQ3pDLHFEQUFtQyxDQUFBO0FBQ25DLElBQUEsaURBQStCLENBQUE7QUFDakMsSUFBRSxtQ0FBaUIsQ0FBQTtBQUNULElBQVI7QUFDSCxjQURvQyxDQUFBLFhBQ2pDLHVDQUFxQixDQUFBO0FBQ2YsSUFBTjtBQUF5QyxrQkFBQSxDQUFBLGZBQ3pDLHlEQUF1QyxDQUFBO0FBQzNDLElBQUksNkNBQTJCLENBQUE7QUFDckIsSUFBTjtBQUNHLFFBRGtDLENBQUEsTEFDckMsNkJBQVcsQ0FBQTtBQUNTLElBQXBCO0FBQStCLGtEQUFnQyxDQUFBLG5EQUNuRSxDQUFDLEVBL3NCVyxjQUFjLEtBQWQsY0FBYyxRQStzQnpCO0FBRXNDO0FBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6ICdITVNTaXRlJyxcclxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1zaXRlJyxcclxuICAgIHBsdWdpblJlZjogJ0hNU1NpdGUnLFxyXG4gICAgcmVwbzogJycsXHJcbiAgICBpbnN0YWxsOiAnJyxcclxuICAgIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNTaXRlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZ290b1NlYXJjaEFjdGl2aXR5KGFwaUtleTogc3RyaW5nLCBzZWFyY2hGaWx0ZXI6IFNlYXJjaEZpbHRlciwgaGludD86IHN0cmluZyk6IFByb21pc2U8U2l0ZT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2VGYWN0b3J5IHtcclxuICAgIHN0YXRpYyBhc3luYyBjcmVhdGUoYXBpS2V5OiBzdHJpbmcpOiBQcm9taXNlPFNlYXJjaFNlcnZpY2U+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgKDxhbnk+d2luZG93KS5ITVNTaXRlLlNlYXJjaFNlcnZpY2VGYWN0b3J5LmNyZWF0ZShhcGlLZXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFNlcnZpY2Uge1xyXG4gICAgZGV0YWlsU2VhcmNoKGRldGFpbFNlYXJjaFJlcTogRGV0YWlsU2VhcmNoUmVxdWVzdCk6IFByb21pc2U8RGV0YWlsU2VhcmNoUmVzcG9uc2U+O1xyXG4gICAgbmVhcmJ5U2VhcmNoKG5lYXJieVNlYXJjaFJlcTogTmVhcmJ5U2VhcmNoUmVxdWVzdCk6IFByb21pc2U8TmVhcmJ5U2VhcmNoUmVzcG9uc2U+O1xyXG4gICAgcXVlcnlBdXRvY29tcGxldGUoYXV0b2NvbXBsZXRlUmVxOiBRdWVyeUF1dG9jb21wbGV0ZVJlcXVlc3QpOiBQcm9taXNlPFF1ZXJ5QXV0b2NvbXBsZXRlUmVzcG9uc2U+O1xyXG4gICAgcXVlcnlTdWdnZXN0aW9uKHF1ZXJ5U3VnZ2VzdGlvblJlcTogUXVlcnlTdWdnZXN0aW9uUmVxdWVzdCk6IFByb21pc2U8UXVlcnlTdWdnZXN0aW9uUmVzcG9uc2U+O1xyXG4gICAgdGV4dFNlYXJjaCh0ZXh0U2VhcmNoUmVxOiBUZXh0U2VhcmNoUmVxdWVzdCk6IFByb21pc2U8VGV4dFNlYXJjaFJlc3BvbnNlPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzRGV0YWlsIHtcclxuICAgIGFkbWluQXJlYT86IHN0cmluZztcclxuICAgIGNvdW50cnk/OiBzdHJpbmc7XHJcbiAgICBjb3VudHJ5Q29kZT86IHN0cmluZztcclxuICAgIGxvY2FsaXR5Pzogc3RyaW5nO1xyXG4gICAgcG9zdGFsQ29kZT86IHN0cmluZztcclxuICAgIHN0cmVldE51bWJlcj86IHN0cmluZztcclxuICAgIHN1YkFkbWluQXJlYT86IHN0cmluZztcclxuICAgIHN1YkxvY2FsaXR5Pzogc3RyaW5nO1xyXG4gICAgdGVydGlhcnlBZG1pbkFyZWE/OiBzdHJpbmc7XHJcbiAgICB0aG9yb3VnaGZhcmU/OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvY29tcGxldGVQcmVkaWN0aW9uIHtcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAgbWF0Y2hlZEtleXdvcmRzPzogV29yZFtdO1xyXG4gICAgbWF0Y2hlZFdvcmRzPzogV29yZFtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hpbGRyZW5Ob2RlIHtcclxuICAgIGRlcEFuZEFycj86IHN0cmluZztcclxuICAgIGRvbWVBbmRJbnQ/OiBzdHJpbmc7XHJcbiAgICBmb3JtYXRBZGRyZXNzPzogc3RyaW5nO1xyXG4gICAgaHdQb2lUeXBlcz86IHN0cmluZ1tdO1xyXG4gICAgbG9jYXRpb24/OiBDb29yZGluYXRlO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIHNpdGVJZD86IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGUge1xyXG4gICAgbGF0OiBudW1iZXI7XHJcbiAgICBsbmc6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGVCb3VuZHMge1xyXG4gICAgbm9ydGhlYXN0OiBDb29yZGluYXRlO1xyXG4gICAgc291dGh3ZXN0OiBDb29yZGluYXRlO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGV0YWlsU2VhcmNoUmVxdWVzdCB7XHJcbiAgICBsYW5ndWFnZT86IHN0cmluZztcclxuICAgIHBvbGl0aWNhbFZpZXc/OiBzdHJpbmdcclxuICAgIHNpdGVJZDogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW4/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGV0YWlsU2VhcmNoUmVzcG9uc2Uge1xyXG4gICAgc2l0ZTogU2l0ZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE5lYXJieVNlYXJjaFJlcXVlc3Qge1xyXG4gICAgaHdQb2lUeXBlPzogSHdMb2NhdGlvblR5cGU7XHJcbiAgICBsYW5ndWFnZT86IHN0cmluZztcclxuICAgIGxvY2F0aW9uOiBDb29yZGluYXRlO1xyXG4gICAgcGFnZUluZGV4PzogbnVtYmVyO1xyXG4gICAgcGFnZVNpemU/OiBudW1iZXI7XHJcbiAgICBwb2lUeXBlPzogTG9jYXRpb25UeXBlO1xyXG4gICAgcG9saXRpY2FsVmlldz86IHN0cmluZztcclxuICAgIHF1ZXJ5Pzogc3RyaW5nO1xyXG4gICAgcmFkaXVzPzogbnVtYmVyO1xyXG4gICAgc3RyaWN0Qm91bmRzPzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE5lYXJieVNlYXJjaFJlc3BvbnNlIHtcclxuICAgIHNpdGVzOiBTaXRlW107XHJcbiAgICB0b3RhbENvdW50OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuaW5nSG91cnMge1xyXG4gICAgcGVyaW9kcz86IFBlcmlvZFtdO1xyXG4gICAgdGV4dHM/OiBzdHJpbmdbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZCB7XHJcbiAgICBjbG9zZT86IFRpbWVPZldlZWs7XHJcbiAgICBvcGVuPzogVGltZU9mV2VlaztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaSB7XHJcbiAgICBidXNpbmVzc1N0YXR1cz86IHN0cmluZztcclxuICAgIGNoaWxkcmVuTm9kZXM/OiBDaGlsZHJlbk5vZGVbXTtcclxuICAgIGludGVybmF0aW9uYWxQaG9uZT86IHN0cmluZztcclxuICAgIG9wZW5pbmdIb3Vycz86IE9wZW5pbmdIb3VycztcclxuICAgIHBob25lPzogc3RyaW5nO1xyXG4gICAgcGhvdG9VcmxzPzogc3RyaW5nW107XHJcbiAgICBwb2lUeXBlcz86IExvY2F0aW9uVHlwZVtdO1xyXG4gICAgcHJpY2VMZXZlbDogbnVtYmVyO1xyXG4gICAgaHdQb2lUeXBlcz86IHN0cmluZ1tdO1xyXG4gICAgcmF0aW5nPzogbnVtYmVyO1xyXG4gICAgd2Vic2l0ZVVybD86IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QXV0b2NvbXBsZXRlUmVxdWVzdCB7XHJcbiAgICBsYW5ndWFnZT86IHN0cmluZztcclxuICAgIGxvY2F0aW9uPzogQ29vcmRpbmF0ZTtcclxuICAgIHBvbGl0aWNhbFZpZXc/OiBzdHJpbmc7XHJcbiAgICBxdWVyeTogc3RyaW5nO1xyXG4gICAgcmFkaXVzPzogbnVtYmVyO1xyXG4gICAgY2hpbGRyZW4/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlBdXRvY29tcGxldGVSZXNwb25zZSB7XHJcbiAgICBzaXRlczogU2l0ZVtdO1xyXG4gICAgcHJlZGljdGlvbnM6IEF1dG9jb21wbGV0ZVByZWRpY3Rpb25bXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5U3VnZ2VzdGlvblJlcXVlc3Qge1xyXG4gICAgYm91bmRzPzogQ29vcmRpbmF0ZUJvdW5kcztcclxuICAgIGNvdW50cnlDb2RlPzogc3RyaW5nO1xyXG4gICAgbGFuZ3VhZ2U/OiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbj86IENvb3JkaW5hdGU7XHJcbiAgICBwb2lUeXBlcz86IExvY2F0aW9uVHlwZVtdO1xyXG4gICAgcG9saXRpY2FsVmlldz86IHN0cmluZztcclxuICAgIHF1ZXJ5OiBzdHJpbmc7XHJcbiAgICByYWRpdXM/OiBudW1iZXI7XHJcbiAgICBjaGlsZHJlbj86IGJvb2xlYW47XHJcbiAgICBzdHJpY3RCb3VuZHM/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlTdWdnZXN0aW9uUmVzcG9uc2Uge1xyXG4gICAgc2l0ZXM6IFNpdGVbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFN0YXR1cyB7XHJcbiAgICBlcnJvckNvZGU6IHN0cmluZztcclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2l0ZSB7XHJcbiAgICBhZGRyZXNzPzogQWRkcmVzc0RldGFpbDtcclxuICAgIGRpc3RhbmNlPzogbnVtYmVyO1xyXG4gICAgZm9ybWF0QWRkcmVzcz86IHN0cmluZztcclxuICAgIGxvY2F0aW9uPzogQ29vcmRpbmF0ZTtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBwb2k/OiBQb2k7XHJcbiAgICBwcmVkaWN0aW9uPzogQXV0b2NvbXBsZXRlUHJlZGljdGlvbjtcclxuICAgIHNpdGVJZD86IHN0cmluZztcclxuICAgIHV0Y09mZnNldD86IG51bWJlcjtcclxuICAgIHZpZXdwb3J0PzogQ29vcmRpbmF0ZUJvdW5kcztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRTZWFyY2hSZXF1ZXN0IHtcclxuICAgIGNvdW50cnlDb2RlPzogc3RyaW5nO1xyXG4gICAgaHdQb2lUeXBlPzogSHdMb2NhdGlvblR5cGU7XHJcbiAgICBsYW5ndWFnZT86IHN0cmluZztcclxuICAgIGxvY2F0aW9uPzogQ29vcmRpbmF0ZTtcclxuICAgIHBhZ2VJbmRleD86IG51bWJlcjtcclxuICAgIHBhZ2VTaXplPzogbnVtYmVyO1xyXG4gICAgcG9pVHlwZT86IExvY2F0aW9uVHlwZTtcclxuICAgIHBvbGl0aWNhbFZpZXc/OiBzdHJpbmc7XHJcbiAgICBxdWVyeTogc3RyaW5nO1xyXG4gICAgcmFkaXVzPzogbnVtYmVyO1xyXG4gICAgY2hpbGRyZW46IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0U2VhcmNoUmVzcG9uc2Uge1xyXG4gICAgc2l0ZXM6IFNpdGVbXTtcclxuICAgIHRvdGFsQ291bnQ6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVPZldlZWsge1xyXG4gICAgZGF5PzogbnVtYmVyO1xyXG4gICAgdGltZT86IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFdvcmQge1xyXG4gICAgb2Zmc2V0OiBudW1iZXI7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoRmlsdGVyIHtcclxuICAgIGJvdW5kcz86IENvb3JkaW5hdGVCb3VuZHM7XHJcbiAgICBjb3VudHJ5Q29kZT86IHN0cmluZztcclxuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xyXG4gICAgbG9jYXRpb24/OiBDb29yZGluYXRlO1xyXG4gICAgcG9pVHlwZT86IExvY2F0aW9uVHlwZVtdO1xyXG4gICAgcG9saXRpY2FsVmlldz86IHN0cmluZztcclxuICAgIHF1ZXJ5Pzogc3RyaW5nO1xyXG4gICAgcmFkaXVzPzogbnVtYmVyO1xyXG4gICAgc3RyaWN0Qm91bmRzPzogYm9vbGVhbjtcclxuICAgIGNoaWxkcmVuPzogYm9vbGVhbjtcclxufVxyXG5cclxuLy8gRU5VTVxyXG5leHBvcnQgZW51bSBMb2NhdGlvblR5cGUge1xyXG4gICAgQUNDT1VOVElORyA9IFwiQUNDT1VOVElOR1wiLFxyXG4gICAgQUREUkVTUyA9IFwiQUREUkVTU1wiLFxyXG4gICAgQURNSU5JU1RSQVRJVkVfQVJFQV9MRVZFTF8xID0gXCJBRE1JTklTVFJBVElWRV9BUkVBX0xFVkVMXzFcIixcclxuICAgIEFETUlOSVNUUkFUSVZFX0FSRUFfTEVWRUxfMiA9IFwiQURNSU5JU1RSQVRJVkVfQVJFQV9MRVZFTF8yXCIsXHJcbiAgICBBRE1JTklTVFJBVElWRV9BUkVBX0xFVkVMXzMgPSBcIkFETUlOSVNUUkFUSVZFX0FSRUFfTEVWRUxfM1wiLFxyXG4gICAgQURNSU5JU1RSQVRJVkVfQVJFQV9MRVZFTF80ID0gXCJBRE1JTklTVFJBVElWRV9BUkVBX0xFVkVMXzRcIixcclxuICAgIEFETUlOSVNUUkFUSVZFX0FSRUFfTEVWRUxfNSA9IFwiQURNSU5JU1RSQVRJVkVfQVJFQV9MRVZFTF81XCIsXHJcbiAgICBBSVJQT1JUID0gXCJBSVJQT1JUXCIsXHJcbiAgICBBTVVTRU1FTlRfUEFSSyA9IFwiQU1VU0VNRU5UX1BBUktcIixcclxuICAgIEFRVUFSSVVNID0gXCJBUVVBUklVTVwiLFxyXG4gICAgQVJDSElQRUxBR08gPSBcIkFSQ0hJUEVMQUdPXCIsXHJcbiAgICBBUlRfR0FMTEVSWSA9IFwiQVJUX0dBTExFUllcIixcclxuICAgIEFUTSA9IFwiQVRNXCIsXHJcbiAgICBCQUtFUlkgPSBcIkJBS0VSWVwiLFxyXG4gICAgQkFOSyA9IFwiQkFOS1wiLFxyXG4gICAgQkFSID0gXCJCQVJcIixcclxuICAgIEJFQVVUWV9TQUxPTiA9IFwiQkVBVVRZX1NBTE9OXCIsXHJcbiAgICBCSUNZQ0xFX1NUT1JFID0gXCJCSUNZQ0xFX1NUT1JFXCIsXHJcbiAgICBCT09LX1NUT1JFID0gXCJCT09LX1NUT1JFXCIsXHJcbiAgICBCT1dMSU5HX0FMTEVZID0gXCJCT1dMSU5HX0FMTEVZXCIsXHJcbiAgICBCVVNfU1RBVElPTiA9IFwiQlVTX1NUQVRJT05cIixcclxuICAgIENBRkUgPSBcIkNBRkVcIixcclxuICAgIENBTVBHUk9VTkQgPSBcIkNBTVBHUk9VTkRcIixcclxuICAgIENBUElUQUwgPSBcIkNBUElUQUxcIixcclxuICAgIENBUElUQUxfQ0lUWSA9IFwiQ0FQSVRBTF9DSVRZXCIsXHJcbiAgICBDQVJfREVBTEVSID0gXCJDQVJfREVBTEVSXCIsXHJcbiAgICBDQVJfUkVOVEFMID0gXCJDQVJfUkVOVEFMXCIsXHJcbiAgICBDQVJfUkVQQUlSID0gXCJDQVJfUkVQQUlSXCIsXHJcbiAgICBDQVJfV0FTSCA9IFwiQ0FSX1dBU0hcIixcclxuICAgIENBU0lOTyA9IFwiQ0FTSU5PXCIsXHJcbiAgICBDRU1FVEVSWSA9IFwiQ0VNRVRFUllcIixcclxuICAgIENIVVJDSCA9IFwiQ0hVUkNIXCIsXHJcbiAgICBDSVRJRVMgPSBcIkNJVElFU1wiLFxyXG4gICAgQ0lUWV9IQUxMID0gXCJDSVRZX0hBTExcIixcclxuICAgIENMT1RISU5HX1NUT1JFID0gXCJDTE9USElOR19TVE9SRVwiLFxyXG4gICAgQ09MTE9RVUlBTF9BUkVBID0gXCJDT0xMT1FVSUFMX0FSRUFcIixcclxuICAgIENPTlRJTkVOVCA9IFwiQ09OVElORU5UXCIsXHJcbiAgICBDT05WRU5JRU5DRV9TVE9SRSA9IFwiQ09OVkVOSUVOQ0VfU1RPUkVcIixcclxuICAgIENPVU5UUlkgPSBcIkNPVU5UUllcIixcclxuICAgIENPVVJUSE9VU0UgPSBcIkNPVVJUSE9VU0VcIixcclxuICAgIERFTlRJU1QgPSBcIkRFTlRJU1RcIixcclxuICAgIERFUEFSVE1FTlRfU1RPUkUgPSBcIkRFUEFSVE1FTlRfU1RPUkVcIixcclxuICAgIERPQ1RPUiA9IFwiRE9DVE9SXCIsXHJcbiAgICBEUlVHU1RPUkUgPSBcIkRSVUdTVE9SRVwiLFxyXG4gICAgRUxFQ1RSSUNJQU4gPSBcIkVMRUNUUklDSUFOXCIsXHJcbiAgICBFTEVDVFJPTklDU19TVE9SRSA9IFwiRUxFQ1RST05JQ1NfU1RPUkVcIixcclxuICAgIEVNQkFTU1kgPSBcIkVNQkFTU1lcIixcclxuICAgIEVTVEFCTElTSE1FTlQgPSBcIkVTVEFCTElTSE1FTlRcIixcclxuICAgIEZJTkFOQ0UgPSBcIkZJTkFOQ0VcIixcclxuICAgIEZJUkVfU1RBVElPTiA9IFwiRklSRV9TVEFUSU9OXCIsXHJcbiAgICBGTE9PUiA9IFwiRkxPT1JcIixcclxuICAgIEZMT1JJU1QgPSBcIkZMT1JJU1RcIixcclxuICAgIEZPT0QgPSBcIkZPT0RcIixcclxuICAgIEZVTkVSQUxfSE9NRSA9IFwiRlVORVJBTF9IT01FXCIsXHJcbiAgICBGVVJOSVRVUkVfU1RPUkUgPSBcIkZVUk5JVFVSRV9TVE9SRVwiLFxyXG4gICAgR0FTX1NUQVRJT04gPSBcIkdBU19TVEFUSU9OXCIsXHJcbiAgICBHRU5FUkFMX0NJVFkgPSBcIkdFTkVSQUxfQ0lUWVwiLFxyXG4gICAgR0VORVJBTF9DT05UUkFDVE9SID0gXCJHRU5FUkFMX0NPTlRSQUNUT1JcIixcclxuICAgIEdFT0NPREUgPSBcIkdFT0NPREVcIixcclxuICAgIEdST0NFUllfT1JfU1VQRVJNQVJLRVQgPSBcIkdST0NFUllfT1JfU1VQRVJNQVJLRVRcIixcclxuICAgIEdZTSA9IFwiR1lNXCIsXHJcbiAgICBIQUlSX0NBUkUgPSBcIkhBSVJfQ0FSRVwiLFxyXG4gICAgSEFNTEVUID0gXCJIQU1MRVRcIixcclxuICAgIEhBUkRXQVJFX1NUT1JFID0gXCJIQVJEV0FSRV9TVE9SRVwiLFxyXG4gICAgSEVBTFRIID0gXCJIRUFMVEhcIixcclxuICAgIEhJTkRVX1RFTVBMRSA9IFwiSElORFVfVEVNUExFXCIsXHJcbiAgICBIT01FX0dPT0RTX1NUT1JFID0gXCJIT01FX0dPT0RTX1NUT1JFXCIsXHJcbiAgICBIT1NQSVRBTCA9IFwiSE9TUElUQUxcIixcclxuICAgIElOU1VSQU5DRV9BR0VOQ1kgPSBcIklOU1VSQU5DRV9BR0VOQ1lcIixcclxuICAgIElOVEVSU0VDVElPTiA9IFwiSU5URVJTRUNUSU9OXCIsXHJcbiAgICBKRVdFTFJZX1NUT1JFID0gXCJKRVdFTFJZX1NUT1JFXCIsXHJcbiAgICBMQVVORFJZID0gXCJMQVVORFJZXCIsXHJcbiAgICBMQVdZRVIgPSBcIkxBV1lFUlwiLFxyXG4gICAgTElCUkFSWSA9IFwiTElCUkFSWVwiLFxyXG4gICAgTElHSFRfUkFJTF9TVEFUSU9OID0gXCJMSUdIVF9SQUlMX1NUQVRJT05cIixcclxuICAgIExJUVVPUl9TVE9SRSA9IFwiTElRVU9SX1NUT1JFXCIsXHJcbiAgICBMT0NBTElUWSA9IFwiTE9DQUxJVFlcIixcclxuICAgIExPQ0FMX0dPVkVSTk1FTlRfT0ZGSUNFID0gXCJMT0NBTF9HT1ZFUk5NRU5UX09GRklDRVwiLFxyXG4gICAgTE9DS1NNSVRIID0gXCJMT0NLU01JVEhcIixcclxuICAgIExPREdJTkcgPSBcIkxPREdJTkdcIixcclxuICAgIE1FQUxfREVMSVZFUlkgPSBcIk1FQUxfREVMSVZFUllcIixcclxuICAgIE1FQUxfVEFLRUFXQVkgPSBcIk1FQUxfVEFLRUFXQVlcIixcclxuICAgIE1PU1FVRSA9IFwiTU9TUVVFXCIsXHJcbiAgICBNT1ZJRV9SRU5UQUwgPSBcIk1PVklFX1JFTlRBTFwiLFxyXG4gICAgTU9WSUVfVEhFQVRFUiA9IFwiTU9WSUVfVEhFQVRFUlwiLFxyXG4gICAgTU9WSU5HX0NPTVBBTlkgPSBcIk1PVklOR19DT01QQU5ZXCIsXHJcbiAgICBNVVNFVU0gPSBcIk1VU0VVTVwiLFxyXG4gICAgTkFUVVJBTF9GRUFUVVJFID0gXCJOQVRVUkFMX0ZFQVRVUkVcIixcclxuICAgIE5FSUdIQk9SSE9PRCA9IFwiTkVJR0hCT1JIT09EXCIsXHJcbiAgICBOSUdIVF9DTFVCID0gXCJOSUdIVF9DTFVCXCIsXHJcbiAgICBPVEhFUiA9IFwiT1RIRVJcIixcclxuICAgIFBBSU5URVIgPSBcIlBBSU5URVJcIixcclxuICAgIFBBUksgPSBcIlBBUktcIixcclxuICAgIFBBUktJTkcgPSBcIlBBUktJTkdcIixcclxuICAgIFBFVF9TVE9SRSA9IFwiUEVUX1NUT1JFXCIsXHJcbiAgICBQSEFSTUFDWSA9IFwiUEhBUk1BQ1lcIixcclxuICAgIFBIWVNJT1RIRVJBUElTVCA9IFwiUEhZU0lPVEhFUkFQSVNUXCIsXHJcbiAgICBQTEFDRV9PRl9XT1JTSElQID0gXCJQTEFDRV9PRl9XT1JTSElQXCIsXHJcbiAgICBQTFVNQkVSID0gXCJQTFVNQkVSXCIsXHJcbiAgICBQT0lOVF9PRl9JTlRFUkVTVCA9IFwiUE9JTlRfT0ZfSU5URVJFU1RcIixcclxuICAgIFBPTElDRSA9IFwiUE9MSUNFXCIsXHJcbiAgICBQT0xJVElDQUwgPSBcIlBPTElUSUNBTFwiLFxyXG4gICAgUE9TVEFMX0NPREUgPSBcIlBPU1RBTF9DT0RFXCIsXHJcbiAgICBQT1NUQUxfQ09ERV9QUkVGSVggPSBcIlBPU1RBTF9DT0RFX1BSRUZJWFwiLFxyXG4gICAgUE9TVEFMX0NPREVfU1VGRklYID0gXCJQT1NUQUxfQ09ERV9TVUZGSVhcIixcclxuICAgIFBPU1RBTF9UT1dOID0gXCJQT1NUQUxfVE9XTlwiLFxyXG4gICAgUE9TVF9CT1ggPSBcIlBPU1RfQk9YXCIsXHJcbiAgICBQT1NUX09GRklDRSA9IFwiUE9TVF9PRkZJQ0VcIixcclxuICAgIFBSRU1JU0UgPSBcIlBSRU1JU0VcIixcclxuICAgIFBSSU1BUllfU0NIT09MID0gXCJQUklNQVJZX1NDSE9PTFwiLFxyXG4gICAgUkVBTF9FU1RBVEVfQUdFTkNZID0gXCJSRUFMX0VTVEFURV9BR0VOQ1lcIixcclxuICAgIFJFR0lPTiA9IFwiUkVHSU9OXCIsXHJcbiAgICBSRUdJT05TID0gXCJSRUdJT05TXCIsXHJcbiAgICBSRVNUQVVSQU5UID0gXCJSRVNUQVVSQU5UXCIsXHJcbiAgICBST09GSU5HX0NPTlRSQUNUT1IgPSBcIlJPT0ZJTkdfQ09OVFJBQ1RPUlwiLFxyXG4gICAgUk9PTSA9IFwiUk9PTVwiLFxyXG4gICAgUk9VVEUgPSBcIlJPVVRFXCIsXHJcbiAgICBSVl9QQVJLID0gXCJSVl9QQVJLXCIsXHJcbiAgICBTQ0hPT0wgPSBcIlNDSE9PTFwiLFxyXG4gICAgU0VDT05EQVJZX1NDSE9PTCA9IFwiU0VDT05EQVJZX1NDSE9PTFwiLFxyXG4gICAgU0hPRV9TVE9SRSA9IFwiU0hPRV9TVE9SRVwiLFxyXG4gICAgU0hPUFBJTkdfTUFMTCA9IFwiU0hPUFBJTkdfTUFMTFwiLFxyXG4gICAgU1BBID0gXCJTUEFcIixcclxuICAgIFNUQURJVU0gPSBcIlNUQURJVU1cIixcclxuICAgIFNUT1JBR0UgPSBcIlNUT1JBR0VcIixcclxuICAgIFNUT1JFID0gXCJTVE9SRVwiLFxyXG4gICAgU1RSRUVUX0FERFJFU1MgPSBcIlNUUkVFVF9BRERSRVNTXCIsXHJcbiAgICBTVFJFRVRfTlVNQkVSID0gXCJTVFJFRVRfTlVNQkVSXCIsXHJcbiAgICBTVUJMT0NBTElUWSA9IFwiU1VCTE9DQUxJVFlcIixcclxuICAgIFNVQkxPQ0FMSVRZX0xFVkVMXzEgPSBcIlNVQkxPQ0FMSVRZX0xFVkVMXzFcIixcclxuICAgIFNVQkxPQ0FMSVRZX0xFVkVMXzIgPSBcIlNVQkxPQ0FMSVRZX0xFVkVMXzJcIixcclxuICAgIFNVQkxPQ0FMSVRZX0xFVkVMXzMgPSBcIlNVQkxPQ0FMSVRZX0xFVkVMXzNcIixcclxuICAgIFNVQkxPQ0FMSVRZX0xFVkVMXzQgPSBcIlNVQkxPQ0FMSVRZX0xFVkVMXzRcIixcclxuICAgIFNVQkxPQ0FMSVRZX0xFVkVMXzUgPSBcIlNVQkxPQ0FMSVRZX0xFVkVMXzVcIixcclxuICAgIFNVQlBSRU1JU0UgPSBcIlNVQlBSRU1JU0VcIixcclxuICAgIFNVQldBWV9TVEFUSU9OID0gXCJTVUJXQVlfU1RBVElPTlwiLFxyXG4gICAgU1VQRVJNQVJLRVQgPSBcIlNVUEVSTUFSS0VUXCIsXHJcbiAgICBTWU5BR09HVUUgPSBcIlNZTkFHT0dVRVwiLFxyXG4gICAgVEFYSV9TVEFORCA9IFwiVEFYSV9TVEFORFwiLFxyXG4gICAgVE9VUklTVF9BVFRSQUNUSU9OID0gXCJUT1VSSVNUX0FUVFJBQ1RJT05cIixcclxuICAgIFRPV04gPSBcIlRPV05cIixcclxuICAgIFRPV05fU1FVQVJFID0gXCJUT1dOX1NRVUFSRVwiLFxyXG4gICAgVFJBSU5fU1RBVElPTiA9IFwiVFJBSU5fU1RBVElPTlwiLFxyXG4gICAgVFJBTlNJVF9TVEFUSU9OID0gXCJUUkFOU0lUX1NUQVRJT05cIixcclxuICAgIFRSQVZFTF9BR0VOQ1kgPSBcIlRSQVZFTF9BR0VOQ1lcIixcclxuICAgIFVOSVZFUlNJVFkgPSBcIlVOSVZFUlNJVFlcIixcclxuICAgIFZFVEVSSU5BUllfQ0FSRSA9IFwiVkVURVJJTkFSWV9DQVJFXCIsXHJcbiAgICBaT08gPSBcIlpPT1wiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEh3TG9jYXRpb25UeXBlIHtcclxuICAgIEFDQ0VTU19HQVRFV0FZID0gXCJBQ0NFU1NfR0FURVdBWVwiLFxyXG4gICAgQUREUkVTUyA9IFwiQUREUkVTU1wiLFxyXG4gICAgQURNSU5JU1RSQVRJVkVfQVJFQV9MRVZFTF8xID0gXCJBRE1JTklTVFJBVElWRV9BUkVBX0xFVkVMXzFcIixcclxuICAgIEFETUlOSVNUUkFUSVZFX0FSRUFfTEVWRUxfMiA9IFwiQURNSU5JU1RSQVRJVkVfQVJFQV9MRVZFTF8yXCIsXHJcbiAgICBBRE1JTklTVFJBVElWRV9BUkVBX0xFVkVMXzMgPSBcIkFETUlOSVNUUkFUSVZFX0FSRUFfTEVWRUxfM1wiLFxyXG4gICAgQURNSU5JU1RSQVRJVkVfQVJFQV9MRVZFTF80ID0gXCJBRE1JTklTVFJBVElWRV9BUkVBX0xFVkVMXzRcIixcclxuICAgIEFETUlOX0ZFQVRVUkUgPSBcIkFETUlOX0ZFQVRVUkVcIixcclxuICAgIEFEVkVOVFVSRV9TUE9SVFNfVkVOVUUgPSBcIkFEVkVOVFVSRV9TUE9SVFNfVkVOVUVcIixcclxuICAgIEFEVkVOVFVSRV9WRUhJQ0xFX1RSQUlMID0gXCJBRFZFTlRVUkVfVkVISUNMRV9UUkFJTFwiLFxyXG4gICAgQURWRVJUSVNJTkdfQU5EX01BUktFVElOR19DT01QQU5ZID0gXCJBRFZFUlRJU0lOR19BTkRfTUFSS0VUSU5HX0NPTVBBTllcIixcclxuICAgIEFGR0hBTl9SRVNUQVVSQU5UID0gXCJBRkdIQU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgQUZSSUNBTl9SRVNUQVVSQU5UID0gXCJBRlJJQ0FOX1JFU1RBVVJBTlRcIixcclxuICAgIEFHUklDVUxUVVJBTF9TVVBQTFlfU1RPUkUgPSBcIkFHUklDVUxUVVJBTF9TVVBQTFlfU1RPUkVcIixcclxuICAgIEFHUklDVUxUVVJBTF9URUNITk9MT0dZX0NPTVBBTlkgPSBcIkFHUklDVUxUVVJBTF9URUNITk9MT0dZX0NPTVBBTllcIixcclxuICAgIEFHUklDVUxUVVJFX0JVU0lORVNTID0gXCJBR1JJQ1VMVFVSRV9CVVNJTkVTU1wiLFxyXG4gICAgQUlSRklFTEQgPSBcIkFJUkZJRUxEXCIsXHJcbiAgICBBSVJMSU5FID0gXCJBSVJMSU5FXCIsXHJcbiAgICBBSVJMSU5FX0FDQ0VTUyA9IFwiQUlSTElORV9BQ0NFU1NcIixcclxuICAgIEFJUlBPUlQgPSBcIkFJUlBPUlRcIixcclxuICAgIEFMR0VSSUFOX1JFU1RBVVJBTlQgPSBcIkFMR0VSSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIEFNQlVMQU5DRV9VTklUID0gXCJBTUJVTEFOQ0VfVU5JVFwiLFxyXG4gICAgQU1FUklDQU5fUkVTVEFVUkFOVCA9IFwiQU1FUklDQU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgQU1QSElUSEVBVEVSID0gXCJBTVBISVRIRUFURVJcIixcclxuICAgIEFNVVNFTUVOVF9BUkNBREUgPSBcIkFNVVNFTUVOVF9BUkNBREVcIixcclxuICAgIEFNVVNFTUVOVF9QQVJLID0gXCJBTVVTRU1FTlRfUEFSS1wiLFxyXG4gICAgQU1VU0VNRU5UX1BMQUNFID0gXCJBTVVTRU1FTlRfUExBQ0VcIixcclxuICAgIEFOSU1BTF9TRVJWSUNFX1NUT1JFID0gXCJBTklNQUxfU0VSVklDRV9TVE9SRVwiLFxyXG4gICAgQU5JTUFMX1NIRUxURVIgPSBcIkFOSU1BTF9TSEVMVEVSXCIsXHJcbiAgICBBTlRJUVVFX0FSVF9TVE9SRSA9IFwiQU5USVFVRV9BUlRfU1RPUkVcIixcclxuICAgIEFQQVJUTUVOVCA9IFwiQVBBUlRNRU5UXCIsXHJcbiAgICBBUVVBVElDX1pPT19NQVJJTkVfUEFSSyA9IFwiQVFVQVRJQ19aT09fTUFSSU5FX1BBUktcIixcclxuICAgIEFSQUJJQU5fUkVTVEFVUkFOVCA9IFwiQVJBQklBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBBUkJPUkVUQV9CT1RBTklDQUxfR0FSREVOUyA9IFwiQVJCT1JFVEFfQk9UQU5JQ0FMX0dBUkRFTlNcIixcclxuICAgIEFSQ0ggPSBcIkFSQ0hcIixcclxuICAgIEFSR0VOVElORUFOX1JFU1RBVVJBTlQgPSBcIkFSR0VOVElORUFOX1JFU1RBVVJBTlRcIixcclxuICAgIEFSTUVOSUFOX1JFU1RBVVJBTlQgPSBcIkFSTUVOSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIEFSVF9NVVNFVU0gPSBcIkFSVF9NVVNFVU1cIixcclxuICAgIEFSVF9TQ0hPT0wgPSBcIkFSVF9TQ0hPT0xcIixcclxuICAgIEFTSFJBTSA9IFwiQVNIUkFNXCIsXHJcbiAgICBBU0lBTl9SRVNUQVVSQU5UID0gXCJBU0lBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBBVEhMRVRJQ19TVEFESVVNID0gXCJBVEhMRVRJQ19TVEFESVVNXCIsXHJcbiAgICBBVFZfU05PV01PQklMRV9ERUFMRVIgPSBcIkFUVl9TTk9XTU9CSUxFX0RFQUxFUlwiLFxyXG4gICAgQVVTVFJBTElBTl9SRVNUQVVSQU5UID0gXCJBVVNUUkFMSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIEFVU1RSSUFOX1JFU1RBVVJBTlQgPSBcIkFVU1RSSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIEFVVE9NQVRJQ19URUxMRVJfTUFDSElORSA9IFwiQVVUT01BVElDX1RFTExFUl9NQUNISU5FXCIsXHJcbiAgICBBVVRPTU9CSUxFX0FDQ0VTU09SSUVTX1NIT1AgPSBcIkFVVE9NT0JJTEVfQUNDRVNTT1JJRVNfU0hPUFwiLFxyXG4gICAgQVVUT01PQklMRV9DT01QQU5ZID0gXCJBVVRPTU9CSUxFX0NPTVBBTllcIixcclxuICAgIEFVVE9NT0JJTEVfTUFOVUZBQ1RVUklOR19DT01QQU5ZID0gXCJBVVRPTU9CSUxFX01BTlVGQUNUVVJJTkdfQ09NUEFOWVwiLFxyXG4gICAgQVVUT01PVElWRSA9IFwiQVVUT01PVElWRVwiLFxyXG4gICAgQVVUT01PVElWRV9ERUFMRVIgPSBcIkFVVE9NT1RJVkVfREVBTEVSXCIsXHJcbiAgICBBVVRPTU9USVZFX0dMQVNTX1JFUExBQ0VNRU5UX1NIT1AgPSBcIkFVVE9NT1RJVkVfR0xBU1NfUkVQTEFDRU1FTlRfU0hPUFwiLFxyXG4gICAgQVVUT01PVElWRV9SRVBBSVJfU0hPUCA9IFwiQVVUT01PVElWRSBSRVBBSVJfU0hPUFwiLFxyXG4gICAgQkFETUlOVE9OX0NPVVJUID0gXCJCQURNSU5UT05fQ09VUlRcIixcclxuICAgIEJBR1NfTEVBVEhFUldFQVJfU0hPUCA9IFwiQkFHU19MRUFUSEVSV0VBUl9TSE9QXCIsXHJcbiAgICBCQUtFUlkgPSBcIkJBS0VSWVwiLFxyXG4gICAgQkFOSyA9IFwiQkFOS1wiLFxyXG4gICAgQkFOUVVFVF9ST09NID0gXCJCQU5RVUVUX1JPT01cIixcclxuICAgIEJBUiA9IFwiQkFSXCIsXHJcbiAgICBCQVJCRUNVRV9SRVNUQVVSQU5UID0gXCJCQVJCRUNVRV9SRVNUQVVSQU5UXCIsXHJcbiAgICBCQVNFQkFMTF9GSUVMRCA9IFwiQkFTRUJBTExfRklFTERcIixcclxuICAgIEJBU0tFVEJBTExfQ09VUlQgPSBcIkJBU0tFVEJBTExfQ09VUlRcIixcclxuICAgIEJBU1FVRV9SRVNUQVVSQU5UID0gXCJCQVNRVUVfUkVTVEFVUkFOVFwiLFxyXG4gICAgQkFUVExFRklFTEQgPSBcIkJBVFRMRUZJRUxEXCIsXHJcbiAgICBCQVkgPSBcIkJBWVwiLFxyXG4gICAgQkVBQ0ggPSBcIkJFQUNIXCIsXHJcbiAgICBCRUFDSF9DTFVCID0gXCJCRUFDSF9DTFVCXCIsXHJcbiAgICBCRUFVVFlfU0FMT04gPSBcIkJFQVVUWV9TQUxPTlwiLFxyXG4gICAgQkVBVVRZX1NVUFBMWV9TSE9QID0gXCJCRUFVVFlfU1VQUExZX1NIT1BcIixcclxuICAgIEJFRF9CUkVBS0ZBU1RfR1VFU1RfSE9VU0VTID0gXCJCRURfQlJFQUtGQVNUX0dVRVNUX0hPVVNFU1wiLFxyXG4gICAgQkVMR0lBTl9SRVNUQVVSQU5UID0gXCJCRUxHSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIEJFVFRJTkdfU1RBVElPTiA9IFwiQkVUVElOR19TVEFUSU9OXCIsXHJcbiAgICBCSUNZQ0xFX1BBUktJTkdfUExBQ0UgPSBcIkJJQ1lDTEVfUEFSS0lOR19QTEFDRVwiLFxyXG4gICAgQklDWUNMRV9TSEFSSU5HX0xPQ0FUSU9OID0gXCJCSUNZQ0xFX1NIQVJJTkdfTE9DQVRJT05cIixcclxuICAgIEJJTExJQVJEU19QT09MX0hBTEwgPSBcIkJJTExJQVJEU19QT09MX0hBTExcIixcclxuICAgIEJJU1RSTyA9IFwiQklTVFJPXCIsXHJcbiAgICBCTE9PRF9CQU5LID0gXCJCTE9PRF9CQU5LXCIsXHJcbiAgICBCT0FUSU5HX0VRVUlQTUVOVF9BQ0NFU1NPUklFU19TVE9SRSA9IFwiQk9BVElOR19FUVVJUE1FTlRfQUNDRVNTT1JJRVNfU1RPUkVcIixcclxuICAgIEJPQVRfREVBTEVSID0gXCJCT0FUX0RFQUxFUlwiLFxyXG4gICAgQk9BVF9GRVJSWSA9IFwiQk9BVF9GRVJSWVwiLFxyXG4gICAgQk9BVF9MQVVOQ0hJTkdfUkFNUCA9IFwiQk9BVF9MQVVOQ0hJTkdfUkFNUFwiLFxyXG4gICAgQk9EWVNIT1BTID0gXCJCT0RZU0hPUFNcIixcclxuICAgIEJPTElWSUFOX1JFU1RBVVJBTlQgPSBcIkJPTElWSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIEJPT0tTVE9SRSA9IFwiQk9PS1NUT1JFXCIsXHJcbiAgICBCT1JERVJfUE9TVCA9IFwiQk9SREVSX1BPU1RcIixcclxuICAgIEJPU05JQU5fUkVTVEFVUkFOVCA9IFwiQk9TTklBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBCT1dMSU5HX0ZJRUxEID0gXCJCT1dMSU5HX0ZJRUxEXCIsXHJcbiAgICBCUkFaSUxJQU5fUkVTVEFVUkFOVCA9IFwiQlJBWklMSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIEJSSURHRSA9IFwiQlJJREdFXCIsXHJcbiAgICBCUklER0VfVFVOTkVMX0VOR0lORUVSSU5HX0NPTVBBTlkgPSBcIkJSSURHRV9UVU5ORUxfRU5HSU5FRVJJTkdfQ09NUEFOWVwiLFxyXG4gICAgQlJJVElTSF9SRVNUQVVSQU5UID0gXCJCUklUSVNIX1JFU1RBVVJBTlRcIixcclxuICAgIEJVRERISVNUX1RFTVBMRSA9IFwiQlVEREhJU1RfVEVNUExFXCIsXHJcbiAgICBCVUZGRVQgPSBcIkJVRkZFVFwiLFxyXG4gICAgQlVJTERJTkcgPSBcIkJVSUxESU5HXCIsXHJcbiAgICBCVUxHQVJJQU5fUkVTVEFVUkFOVCA9IFwiQlVMR0FSSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIEJVTkdBTE9XID0gXCJCVU5HQUxPV1wiLFxyXG4gICAgQlVSTUVTRV9SRVNUQVVSQU5UID0gXCJCVVJNRVNFX1JFU1RBVVJBTlRcIixcclxuICAgIEJVU0lORVNTID0gXCJCVVNJTkVTU1wiLFxyXG4gICAgQlVTSU5FU1NfUEFSSyA9IFwiQlVTSU5FU1NfUEFSS1wiLFxyXG4gICAgQlVTSU5FU1NfU0VSVklDRVNfQ09NUEFOWSA9IFwiQlVTSU5FU1NfU0VSVklDRVNfQ09NUEFOWVwiLFxyXG4gICAgQlVTX0NIQVJURVJfUkVOVEFMX0NPTVBBTlkgPSBcIkJVU19DSEFSVEVSX1JFTlRBTF9DT01QQU5ZXCIsXHJcbiAgICBCVVNfQ09NUEFOWSA9IFwiQlVTX0NPTVBBTllcIixcclxuICAgIEJVU19ERUFMRVIgPSBcIkJVU19ERUFMRVJcIixcclxuICAgIEJVU19TVE9QID0gXCJCVVNfU1RPUFwiLFxyXG4gICAgQ0FCQVJFVCA9IFwiQ0FCQVJFVFwiLFxyXG4gICAgQ0FCSU5TX0xPREdFUyA9IFwiQ0FCSU5TX0xPREdFU1wiLFxyXG4gICAgQ0FCTEVfVEVMRVBIT05FX0NPTVBBTlkgPSBcIkNBQkxFX1RFTEVQSE9ORV9DT01QQU5ZXCIsXHJcbiAgICBDQUZFID0gXCJDQUZFXCIsXHJcbiAgICBDQUZFVEVSSUEgPSBcIkNBRkVURVJJQVwiLFxyXG4gICAgQ0FGRV9QVUIgPSBcIkNBRkVfUFVCXCIsXHJcbiAgICBDQUxJRk9STklBTl9SRVNUQVVSQU5UID0gXCJDQUxJRk9STklBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBDQU1CT0RJQU5fUkVTVEFVUkFOVCA9IFwiQ0FNQk9ESUFOX1JFU1RBVVJBTlRcIixcclxuICAgIENBTVBJTkdfR1JPVU5EID0gXCJDQU1QSU5HX0dST1VORFwiLFxyXG4gICAgQ0FOQURJQU5fUkVTVEFVUkFOVCA9IFwiQ0FOQURJQU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgQ0FQRSA9IFwiQ0FQRVwiLFxyXG4gICAgQ0FQSVRBTCA9IFwiQ0FQSVRBTFwiLFxyXG4gICAgQ0FQSVRBTF9DSVRZID0gXCJDQVBJVEFMX0NJVFlcIixcclxuICAgIENBUkFWQU5fU0lURSA9IFwiQ0FSQVZBTl9TSVRFXCIsXHJcbiAgICBDQVJHT19DRU5URVIgPSBcIkNBUkdPX0NFTlRFUlwiLFxyXG4gICAgQ0FSSUJCRUFOX1JFU1RBVVJBTlQgPSBcIkNBUklCQkVBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBDQVJQRVRfRkxPT1JfQ09WRVJJTkdfU1RPUkUgPSBcIkNBUlBFVF9GTE9PUl9DT1ZFUklOR19TVE9SRVwiLFxyXG4gICAgQ0FSX0NMVUIgPSBcIkNBUl9DTFVCXCIsXHJcbiAgICBDQVJfREVBTEVSID0gXCJDQVJfREVBTEVSXCIsXHJcbiAgICBDQVJfUkVOVEFMID0gXCJDQVJfUkVOVEFMXCIsXHJcbiAgICBDQVJfUkVOVEFMX0NPTVBBTlkgPSBcIkNBUl9SRU5UQUxfQ09NUEFOWVwiLFxyXG4gICAgQ0FSX1dBU0ggPSBcIkNBUl9XQVNIXCIsXHJcbiAgICBDQVJfV0FTSF9TVUIgPSBcIkNBUl9XQVNIX1NVQlwiLFxyXG4gICAgQ0FTSU5PID0gXCJDQVNJTk9cIixcclxuICAgIENBVEVSSU5HX0NPTVBBTlkgPSBcIkNBVEVSSU5HX0NPTVBBTllcIixcclxuICAgIENBVkUgPSBcIkNBVkVcIixcclxuICAgIENEX0RWRF9WSURFT19SRU5UQUxfU1RPUkUgPSBcIkNEX0RWRF9WSURFT19SRU5UQUxfU1RPUkVcIixcclxuICAgIENEX0RWRF9WSURFT19TVE9SRSA9IFwiQ0RfRFZEX1ZJREVPX1NUT1JFXCIsXHJcbiAgICBDRF9EVkRfVklERU9fU1RPUkVfU1VCID0gXCJDRF9EVkRfVklERU9fU1RPUkVfU1VCXCIsXHJcbiAgICBDRU1FVEVSWSA9IFwiQ0VNRVRFUllcIixcclxuICAgIENIQUxFVCA9IFwiQ0hBTEVUXCIsXHJcbiAgICBDSEVNSUNBTF9DT01QQU5ZID0gXCJDSEVNSUNBTF9DT01QQU5ZXCIsXHJcbiAgICBDSElDS0VOX1JFU1RBVVJBTlQgPSBcIkNISUNLRU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgQ0hJTERSRU5TX01VU0VVTSA9IFwiQ0hJTERSRU5TX01VU0VVTVwiLFxyXG4gICAgQ0hJTERfQ0FSRV9GQUNJTElUWSA9IFwiQ0hJTERfQ0FSRV9GQUNJTElUWVwiLFxyXG4gICAgQ0hJTEVBTl9SRVNUQVVSQU5UID0gXCJDSElMRUFOX1JFU1RBVVJBTlRcIixcclxuICAgIENISU5FU0VfTUVESUNJTkVfSE9TUElUQUwgPSBcIkNISU5FU0VfTUVESUNJTkVfSE9TUElUQUxcIixcclxuICAgIENISU5FU0VfUkVTVEFVUkFOVCA9IFwiQ0hJTkVTRV9SRVNUQVVSQU5UXCIsXHJcbiAgICBDSFJJU1RNQVNfSE9MSURBWV9TVE9SRSA9IFwiQ0hSSVNUTUFTX0hPTElEQVlfU1RPUkVcIixcclxuICAgIENIVVJDSCA9IFwiQ0hVUkNIXCIsXHJcbiAgICBDSU5FTUEgPSBcIkNJTkVNQVwiLFxyXG4gICAgQ0lORU1BX1NVQiA9IFwiQ0lORU1BX1NVQlwiLFxyXG4gICAgQ0lUSUVTID0gXCJDSVRJRVNcIixcclxuICAgIENJVFlfQ0VOVEVSID0gXCJDSVRZX0NFTlRFUlwiLFxyXG4gICAgQ0lUWV9IQUxMID0gXCJDSVRZX0hBTExcIixcclxuICAgIENJVklDX0NPTU1VTklUWV9DRU5URVIgPSBcIkNJVklDX0NPTU1VTklUWV9DRU5URVJcIixcclxuICAgIENMRUFOSU5HX1NFUlZJQ0VfQ09NUEFOWSA9IFwiQ0xFQU5JTkdfU0VSVklDRV9DT01QQU5ZXCIsXHJcbiAgICBDTE9USElOR19BQ0NFU1NPUklFU19TVE9SRSA9IFwiQ0xPVEhJTkdfQUNDRVNTT1JJRVNfU1RPUkVcIixcclxuICAgIENMVUJfQVNTT0NJQVRJT04gPSBcIkNMVUJfQVNTT0NJQVRJT05cIixcclxuICAgIENPQUNIX1BBUktJTkdfQVJFQSA9IFwiQ09BQ0hfUEFSS0lOR19BUkVBXCIsXHJcbiAgICBDT0FDSF9TVEFUSU9OID0gXCJDT0FDSF9TVEFUSU9OXCIsXHJcbiAgICBDT0NLVEFJTF9CQVIgPSBcIkNPQ0tUQUlMX0JBUlwiLFxyXG4gICAgQ09GRkVFX1NIT1AgPSBcIkNPRkZFRV9TSE9QXCIsXHJcbiAgICBDT0xMRUdFX1VOSVZFUlNJVFkgPSBcIkNPTExFR0VfVU5JVkVSU0lUWVwiLFxyXG4gICAgQ09MT01CSUFOX1JFU1RBVVJBTlQgPSBcIkNPTE9NQklBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBDT01FRFlfQ0xVQiA9IFwiQ09NRURZX0NMVUJcIixcclxuICAgIENPTU1FUkNJQUxfQlVJTERJTkcgPSBcIkNPTU1FUkNJQUxfQlVJTERJTkdcIixcclxuICAgIENPTU1VTklUWV9DRU5URVIgPSBcIkNPTU1VTklUWV9DRU5URVJcIixcclxuICAgIENPTVBBTlkgPSBcIkNPTVBBTllcIixcclxuICAgIENPTVBVVEVSX0FORF9EQVRBX1NFUlZJQ0VTX0NPUlBPUkFUSU9OID0gXCJDT01QVVRFUl9BTkRfREFUQV9TRVJWSUNFU19DT1JQT1JBVElPTlwiLFxyXG4gICAgQ09NUFVURVJfU09GVFdBUkVfQ09NUEFOWSA9IFwiQ09NUFVURVJfU09GVFdBUkVfQ09NUEFOWVwiLFxyXG4gICAgQ09NUFVURVJfU1RPUkUgPSBcIkNPTVBVVEVSX1NUT1JFXCIsXHJcbiAgICBDT05DRVJUX0hBTEwgPSBcIkNPTkNFUlRfSEFMTFwiLFxyXG4gICAgQ09ORE9NSU5JVU1fQ09NUExFWCA9IFwiQ09ORE9NSU5JVU1fQ09NUExFWFwiLFxyXG4gICAgQ09OU1RSVUNUSU9OX0NPTVBBTlkgPSBcIkNPTlNUUlVDVElPTl9DT01QQU5ZXCIsXHJcbiAgICBDT05TVFJVQ1RJT05fTUFURVJJQUxfRVFVSVBNRU5UX1NIT1AgPSBcIkNPTlNUUlVDVElPTl9NQVRFUklBTF9FUVVJUE1FTlRfU0hPUFwiLFxyXG4gICAgQ09OU1VNRVJfRUxFQ1RST05JQ1NfU1RPUkUgPSBcIkNPTlNVTUVSX0VMRUNUUk9OSUNTX1NUT1JFXCIsXHJcbiAgICBDT05USU5FTlQgPSBcIkNPTlRJTkVOVFwiLFxyXG4gICAgQ09OVkVOSUVOQ0VfU1RPUkUgPSBcIkNPTlZFTklFTkNFX1NUT1JFXCIsXHJcbiAgICBDT1JTSUNBTl9SRVNUQVVSQU5UID0gXCJDT1JTSUNBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBDT1RUQUdFID0gXCJDT1RUQUdFXCIsXHJcbiAgICBDT1VOVFJZID0gXCJDT1VOVFJZXCIsXHJcbiAgICBDT1VOVFkgPSBcIkNPVU5UWVwiLFxyXG4gICAgQ09VTlRZX0NPVU5DSUwgPSBcIkNPVU5UWV9DT1VOQ0lMXCIsXHJcbiAgICBDT1VSSUVSX0RST1BfQk9YID0gXCJDT1VSSUVSX0RST1BfQk9YXCIsXHJcbiAgICBDT1VSVEhPVVNFID0gXCJDT1VSVEhPVVNFXCIsXHJcbiAgICBDT1ZFID0gXCJDT1ZFXCIsXHJcbiAgICBDUkVPTEVfQ0FKVU5fUkVTVEFVUkFOVCA9IFwiQ1JFT0xFX0NBSlVOX1JFU1RBVVJBTlRcIixcclxuICAgIENSRVBFUklFID0gXCJDUkVQRVJJRVwiLFxyXG4gICAgQ1JJQ0tFVF9HUk9VTkQgPSBcIkNSSUNLRVRfR1JPVU5EXCIsXHJcbiAgICBDVUJBTl9SRVNUQVVSQU5UID0gXCJDVUJBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBDVUxJTkFSWV9TQ0hPT0wgPSBcIkNVTElOQVJZX1NDSE9PTFwiLFxyXG4gICAgQ1VMVFVSQUxfQ0VOVEVSID0gXCJDVUxUVVJBTF9DRU5URVJcIixcclxuICAgIENVUlJFTkNZX0VYQ0hBTkdFID0gXCJDVVJSRU5DWV9FWENIQU5HRVwiLFxyXG4gICAgQ1VSVEFJTl9URVhUSUxFX1NUT1JFID0gXCJDVVJUQUlOX1RFWFRJTEVfU1RPUkVcIixcclxuICAgIENZUFJJT1RfUkVTVEFVUkFOVCA9IFwiQ1lQUklPVF9SRVNUQVVSQU5UXCIsXHJcbiAgICBDWkVDSF9SRVNUQVVSQU5UID0gXCJDWkVDSF9SRVNUQVVSQU5UXCIsXHJcbiAgICBEQU0gPSBcIkRBTVwiLFxyXG4gICAgREFOQ0VfU1RVRElPX1NDSE9PTCA9IFwiREFOQ0VfU1RVRElPX1NDSE9PTFwiLFxyXG4gICAgREFOQ0lOR19DTFVCID0gXCJEQU5DSU5HX0NMVUJcIixcclxuICAgIERBTklTSF9SRVNUQVVSQU5UID0gXCJEQU5JU0hfUkVTVEFVUkFOVFwiLFxyXG4gICAgREVMSUNBVEVTU0VOX1NUT1JFID0gXCJERUxJQ0FURVNTRU5fU1RPUkVcIixcclxuICAgIERFTElWRVJZX0VOVFJBTkNFID0gXCJERUxJVkVSWV9FTlRSQU5DRVwiLFxyXG4gICAgREVOVEFMX0NMSU5JQyA9IFwiREVOVEFMX0NMSU5JQ1wiLFxyXG4gICAgREVQQVJUTUVOVF9TVE9SRSA9IFwiREVQQVJUTUVOVF9TVE9SRVwiLFxyXG4gICAgREhBUk1BX1RFTVBMRSA9IFwiREhBUk1BX1RFTVBMRVwiLFxyXG4gICAgRElOTkVSX1RIRUFURVIgPSBcIkRJTk5FUl9USEVBVEVSXCIsXHJcbiAgICBESVNDT1RIRVFVRSA9IFwiRElTQ09USEVRVUVcIixcclxuICAgIERJVkVSU0lGSUVEX0ZJTkFOQ0lBTF9TRVJWSUNFX0NPTVBBTlkgPSBcIkRJVkVSU0lGSUVEX0ZJTkFOQ0lBTF9TRVJWSUNFX0NPTVBBTllcIixcclxuICAgIERJVklOR19DRU5URVIgPSBcIkRJVklOR19DRU5URVJcIixcclxuICAgIERPQ0sgPSBcIkRPQ0tcIixcclxuICAgIERPTUlOSUNBTl9SRVNUQVVSQU5UID0gXCJET01JTklDQU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgRE9OR0JFSV9SRVNUQVVSQU5UID0gXCJET05HQkVJX1JFU1RBVVJBTlRcIixcclxuICAgIERPVUdITlVUX1NIT1AgPSBcIkRPVUdITlVUX1NIT1BcIixcclxuICAgIERPX0lUX1lPVVJTRUxGX0NFTlRFUlMgPSBcIkRPX0lUX1lPVVJTRUxGX0NFTlRFUlNcIixcclxuICAgIERSSVZFX0lOX0NJTkVNQSA9IFwiRFJJVkVfSU5fQ0lORU1BXCIsXHJcbiAgICBEUklWRV9USFJPVUdIX0JPVFRMRV9TSE9QID0gXCJEUklWRV9USFJPVUdIX0JPVFRMRV9TSE9QXCIsXHJcbiAgICBEUklWSU5HX1NDSE9PTCA9IFwiRFJJVklOR19TQ0hPT0xcIixcclxuICAgIERSVUdTVE9SRSA9IFwiRFJVR1NUT1JFXCIsXHJcbiAgICBEUllfQ0xFQU5FUlMgPSBcIkRSWV9DTEVBTkVSU1wiLFxyXG4gICAgRFVORSA9IFwiRFVORVwiLFxyXG4gICAgRFVUQ0hfUkVTVEFVUkFOVCA9IFwiRFVUQ0hfUkVTVEFVUkFOVFwiLFxyXG4gICAgRUFSVEhRVUFLRV9BU1NFTUJMWV9QT0lOVF8gPSBcIkVBUlRIUVVBS0VfQVNTRU1CTFlfUE9JTlRfXCIsXHJcbiAgICBFQVRJTkdfRFJJTktJTkcgPSBcIkVBVElOR19EUklOS0lOR1wiLFxyXG4gICAgRURVQ0FUSU9OX0lOU1RJVFVUSU9OID0gXCJFRFVDQVRJT05fSU5TVElUVVRJT05cIixcclxuICAgIEVHWVBUSUFOX1JFU1RBVVJBTlQgPSBcIkVHWVBUSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIEVMRUNUUklDQUxfQVBQTElBTkNFX1NUT1JFID0gXCJFTEVDVFJJQ0FMX0FQUExJQU5DRV9TVE9SRVwiLFxyXG4gICAgRUxFQ1RSSUNBTF9BUFBMSUFOQ0VfU1RPUkVfU1VCID0gXCJFTEVDVFJJQ0FMX0FQUExJQU5DRV9TVE9SRV9TVUJcIixcclxuICAgIEVMRUNUUklDX1ZFSElDTEVfQ0hBUkdJTkdfU1RBVElPTiA9IFwiRUxFQ1RSSUNfVkVISUNMRV9DSEFSR0lOR19TVEFUSU9OXCIsXHJcbiAgICBFTEVDVFJPTklDU19DT01QQU5ZID0gXCJFTEVDVFJPTklDU19DT01QQU5ZXCIsXHJcbiAgICBFTEVDVFJPTklDU19TVE9SRSA9IFwiRUxFQ1RST05JQ1NfU1RPUkVcIixcclxuICAgIEVNQkFTU1kgPSBcIkVNQkFTU1lcIixcclxuICAgIEVNRVJHRU5DWV9BU1NFTUJMWV9QT0lOVCA9IFwiRU1FUkdFTkNZX0FTU0VNQkxZX1BPSU5UXCIsXHJcbiAgICBFTUVSR0VOQ1lfTUVESUNBTF9TRVJWSUNFX0NFTlRFUiA9IFwiRU1FUkdFTkNZX01FRElDQUxfU0VSVklDRV9DRU5URVJcIixcclxuICAgIEVNRVJHRU5DWV9ST09NID0gXCJFTUVSR0VOQ1lfUk9PTVwiLFxyXG4gICAgRU5HTElTSF9SRVNUQVVSQU5UID0gXCJFTkdMSVNIX1JFU1RBVVJBTlRcIixcclxuICAgIEVOVEVSVEFJTk1FTlRfQ0FCQVJFVF9MSVZFID0gXCJFTlRFUlRBSU5NRU5UX0NBQkFSRVRfTElWRVwiLFxyXG4gICAgRU5URVJUQUlOTUVOVF9QTEFDRSA9IFwiRU5URVJUQUlOTUVOVF9QTEFDRVwiLFxyXG4gICAgRVFVSVBNRU5UX1JFTlRBTF9DT01QQU5ZID0gXCJFUVVJUE1FTlRfUkVOVEFMX0NPTVBBTllcIixcclxuICAgIEVST1RJQ19SRVNUQVVSQU5UID0gXCJFUk9USUNfUkVTVEFVUkFOVFwiLFxyXG4gICAgRVNUQUJMSVNITUVOVCA9IFwiRVNUQUJMSVNITUVOVFwiLFxyXG4gICAgRVRISU9QSUFOX1JFU1RBVVJBTlQgPSBcIkVUSElPUElBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBFWENIQU5HRSA9IFwiRVhDSEFOR0VcIixcclxuICAgIEVYSElCSVRJT05fQ09OVkVOVElPTl9DRU5URVIgPSBcIkVYSElCSVRJT05fQ09OVkVOVElPTl9DRU5URVJcIixcclxuICAgIEVYT1RJQ19SRVNUQVVSQU5UID0gXCJFWE9USUNfUkVTVEFVUkFOVFwiLFxyXG4gICAgRkFDVE9SWV9PVVRMRVRTID0gXCJGQUNUT1JZX09VVExFVFNcIixcclxuICAgIEZBSVJHUk9VTkQgPSBcIkZBSVJHUk9VTkRcIixcclxuICAgIEZBUk0gPSBcIkZBUk1cIixcclxuICAgIEZBUk1FUl9NQVJLRVQgPSBcIkZBUk1FUl9NQVJLRVRcIixcclxuICAgIEZBU1RfRk9PRF9SRVNUQVVSQU5UID0gXCJGQVNUX0ZPT0RfUkVTVEFVUkFOVFwiLFxyXG4gICAgRkVSUllfVEVSTUlOQUwgPSBcIkZFUlJZX1RFUk1JTkFMXCIsXHJcbiAgICBGSUxJUElOT19SRVNUQVVSQU5UID0gXCJGSUxJUElOT19SRVNUQVVSQU5UXCIsXHJcbiAgICBGSU5OSVNIX1JFU1RBVVJBTlQgPSBcIkZJTk5JU0hfUkVTVEFVUkFOVFwiLFxyXG4gICAgRklSRV9BU1NFTUJMWV9QT0lOVCA9IFwiRklSRV9BU1NFTUJMWV9QT0lOVFwiLFxyXG4gICAgRklSRV9TVEFUSU9OX0JSSUdBREUgPSBcIkZJUkVfU1RBVElPTl9CUklHQURFXCIsXHJcbiAgICBGSVNISU5HX0hVTlRJTkdfQVJFQSA9IFwiRklTSElOR19IVU5USU5HX0FSRUFcIixcclxuICAgIEZJU0hfU1RPUkUgPSBcIkZJU0hfU1RPUkVcIixcclxuICAgIEZJVE5FU1NfQ0xVQl9DRU5URVIgPSBcIkZJVE5FU1NfQ0xVQl9DRU5URVJcIixcclxuICAgIEZJVkVfU1RBUl9IT1RFTCA9IFwiRklWRV9TVEFSX0hPVEVMXCIsXHJcbiAgICBGTEFUU19BUEFSVE1FTlRfQ09NUExFWCA9IFwiRkxBVFNfQVBBUlRNRU5UX0NPTVBMRVhcIixcclxuICAgIEZMT09EX0FTU0VNQkxZX1BPSU5UID0gXCJGTE9PRF9BU1NFTUJMWV9QT0lOVFwiLFxyXG4gICAgRkxPUklTVFMgPSBcIkZMT1JJU1RTXCIsXHJcbiAgICBGTFlJTkdfQ0xVQiA9IFwiRkxZSU5HX0NMVUJcIixcclxuICAgIEZPTkRVRV9SRVNUQVVSQU5UID0gXCJGT05EVUVfUkVTVEFVUkFOVFwiLFxyXG4gICAgRk9PRF9EUklOS19TSE9QID0gXCJGT09EX0RSSU5LX1NIT1BcIixcclxuICAgIEZPT0RfTUFSS0VUID0gXCJGT09EX01BUktFVFwiLFxyXG4gICAgRk9PVEJBTExfRklFTEQgPSBcIkZPT1RCQUxMX0ZJRUxEXCIsXHJcbiAgICBGT1JFU1RfQVJFQSA9IFwiRk9SRVNUX0FSRUFcIixcclxuICAgIEZPVVJfU1RBUl9IT1RFTCA9IFwiRk9VUl9TVEFSX0hPVEVMXCIsXHJcbiAgICBGUkVOQ0hfUkVTVEFVUkFOVCA9IFwiRlJFTkNIX1JFU1RBVVJBTlRcIixcclxuICAgIEZVTkVSQUxfU0VSVklDRV9DT01QQU5ZID0gXCJGVU5FUkFMX1NFUlZJQ0VfQ09NUEFOWVwiLFxyXG4gICAgRlVSTklUVVJFX0FDQ0VTU09SSUVTX1NUT1JFID0gXCJGVVJOSVRVUkVfQUNDRVNTT1JJRVNfU1RPUkVcIixcclxuICAgIEZVUk5JVFVSRV9TVE9SRSA9IFwiRlVSTklUVVJFX1NUT1JFXCIsXHJcbiAgICBGVVNJT05fUkVTVEFVUkFOVCA9IFwiRlVTSU9OX1JFU1RBVVJBTlRcIixcclxuICAgIEdBTExFUlkgPSBcIkdBTExFUllcIixcclxuICAgIEdBUkRFTklOR19DRVJWSUNFX0NFTlRFUiA9IFwiR0FSREVOSU5HX0NFUlZJQ0VfQ0VOVEVSXCIsXHJcbiAgICBHRU5FUkFMX0FVVE9fUkVQQUlSX1NFUlZJQ0VfQ0VOVEVSID0gXCJHRU5FUkFMX0FVVE9fUkVQQUlSX1NFUlZJQ0VfQ0VOVEVSXCIsXHJcbiAgICBHRU5FUkFMX0NJVFkgPSBcIkdFTkVSQUxfQ0lUWVwiLFxyXG4gICAgR0VORVJBTF9DTElOSUMgPSBcIkdFTkVSQUxfQ0xJTklDXCIsXHJcbiAgICBHRU5FUkFMX0hPU1BJVEFMID0gXCJHRU5FUkFMX0hPU1BJVEFMXCIsXHJcbiAgICBHRU5FUkFMX1BPU1RfT0ZGSUNFID0gXCJHRU5FUkFMX1BPU1RfT0ZGSUNFXCIsXHJcbiAgICBHRU9DT0RFID0gXCJHRU9DT0RFXCIsXHJcbiAgICBHRU9HUkFQSElDX0ZFQVRVUkUgPSBcIkdFT0dSQVBISUNfRkVBVFVSRVwiLFxyXG4gICAgR0VSTUFOX1JFU1RBVVJBTlQgPSBcIkdFUk1BTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBHSUZUX1NUT1JFID0gXCJHSUZUX1NUT1JFXCIsXHJcbiAgICBHTEFTU1dBUkVfQ0VSQU1JQ19TSE9QID0gXCJHTEFTU1dBUkVfQ0VSQU1JQ19TSE9QXCIsXHJcbiAgICBHTEFTU19XSU5ET1dfU1RPUkUgPSBcIkdMQVNTX1dJTkRPV19TVE9SRVwiLFxyXG4gICAgR09MRF9FWENIQU5HRSA9IFwiR09MRF9FWENIQU5HRVwiLFxyXG4gICAgR09MRl9DT1VSU0UgPSBcIkdPTEZfQ09VUlNFXCIsXHJcbiAgICBHT1ZFUk5NRU5UX09GRklDRSA9IFwiR09WRVJOTUVOVF9PRkZJQ0VcIixcclxuICAgIEdPVkVSTk1FTlRfUFVCTElDX1NFUlZJQ0UgPSBcIkdPVkVSTk1FTlRfUFVCTElDX1NFUlZJQ0VcIixcclxuICAgIEdSRUVLX1JFU1RBVVJBTlQgPSBcIkdSRUVLX1JFU1RBVVJBTlRcIixcclxuICAgIEdSRUVOR1JPQ0VSWSA9IFwiR1JFRU5HUk9DRVJZXCIsXHJcbiAgICBHUklMTCA9IFwiR1JJTExcIixcclxuICAgIEdST0NFUlkgPSBcIkdST0NFUllcIixcclxuICAgIEdVQU5HRE9OR19SRVNUQVVSQU5UID0gXCJHVUFOR0RPTkdfUkVTVEFVUkFOVFwiLFxyXG4gICAgR1VSVURXQVJBID0gXCJHVVJVRFdBUkFcIixcclxuICAgIEhBSVJfU0FMT05fQkFSQkVSU0hPUCA9IFwiSEFJUl9TQUxPTl9CQVJCRVJTSE9QXCIsXHJcbiAgICBIQU1CVVJHRVJfUkVTVEFVUkFOVCA9IFwiSEFNQlVSR0VSX1JFU1RBVVJBTlRcIixcclxuICAgIEhBTUxFVCA9IFwiSEFNTEVUXCIsXHJcbiAgICBIQVJCT1IgPSBcIkhBUkJPUlwiLFxyXG4gICAgSEFSRFdBUkVfU1RPUkUgPSBcIkhBUkRXQVJFX1NUT1JFXCIsXHJcbiAgICBIRUFMVEhDQVJFX1NFUlZJQ0VfQ0VOVEVSID0gXCJIRUFMVEhDQVJFX1NFUlZJQ0VfQ0VOVEVSXCIsXHJcbiAgICBIRUFMVEhfQ0FSRSA9IFwiSEVBTFRIX0NBUkVcIixcclxuICAgIEhFTElQQURfSEVMSUNPUFRFUl9MQU5ESU5HID0gXCJIRUxJUEFEX0hFTElDT1BURVJfTEFORElOR1wiLFxyXG4gICAgSElHSFdBWV9FWElUID0gXCJISUdIV0FZX0VYSVRcIixcclxuICAgIEhJR0hXQVlfX0VOVFJBTkNFID0gXCJISUdIV0FZX19FTlRSQU5DRVwiLFxyXG4gICAgSElHSF9TQ0hPT0wgPSBcIkhJR0hfU0NIT09MXCIsXHJcbiAgICBISUtJTkdfVFJBSUwgPSBcIkhJS0lOR19UUkFJTFwiLFxyXG4gICAgSElMTCA9IFwiSElMTFwiLFxyXG4gICAgSElORFVfVEVNUExFID0gXCJISU5EVV9URU1QTEVcIixcclxuICAgIEhJU1RPUklDQUxfUEFSSyA9IFwiSElTVE9SSUNBTF9QQVJLXCIsXHJcbiAgICBISVNUT1JJQ19TSVRFID0gXCJISVNUT1JJQ19TSVRFXCIsXHJcbiAgICBISVNUT1JZX01VU0VVTSA9IFwiSElTVE9SWV9NVVNFVU1cIixcclxuICAgIEhPQkJZX1NIT1AgPSBcIkhPQkJZX1NIT1BcIixcclxuICAgIEhPQ0tFWV9DTFVCID0gXCJIT0NLRVlfQ0xVQlwiLFxyXG4gICAgSE9DS0VZX0ZJRUxEID0gXCJIT0NLRVlfRklFTERcIixcclxuICAgIEhPTElEQVlfSE9VU0VfUkVOVEFMID0gXCJIT0xJREFZX0hPVVNFX1JFTlRBTFwiLFxyXG4gICAgSE9NRV9BUFBMSUFOQ0VfUkVQQUlSX0NPTVBBTlkgPSBcIkhPTUVfQVBQTElBTkNFX1JFUEFJUl9DT01QQU5ZXCIsXHJcbiAgICBIT01FX0dPT0RTX1NUT1JFID0gXCJIT01FX0dPT0RTX1NUT1JFXCIsXHJcbiAgICBIT1JTRV9SQUNJTkdfVFJBQ0sgPSBcIkhPUlNFX1JBQ0lOR19UUkFDS1wiLFxyXG4gICAgSE9SU0VfUklESU5HX0ZJRUxEID0gXCJIT1JTRV9SSURJTkdfRklFTERcIixcclxuICAgIEhPUlNFX1JJRElOR19UUkFJTCA9IFwiSE9SU0VfUklESU5HX1RSQUlMXCIsXHJcbiAgICBIT1JUSUNVTFRVUkVfQ09NUEFOWSA9IFwiSE9SVElDVUxUVVJFX0NPTVBBTllcIixcclxuICAgIEhPU1BJVEFMX0ZPUl9XT01FTl9BTkRfQ0hJTERSRU4gPSBcIkhPU1BJVEFMX0ZPUl9XT01FTl9BTkRfQ0hJTERSRU5cIixcclxuICAgIEhPU1BJVEFMX1BPTFlDTElOSUMgPSBcIkhPU1BJVEFMX1BPTFlDTElOSUNcIixcclxuICAgIEhPU1RFTCA9IFwiSE9TVEVMXCIsXHJcbiAgICBIT1RFTCA9IFwiSE9URUxcIixcclxuICAgIEhPVEVMU19XSVRIX0xFU1NfVEhBTl9UV09fU1RBUlMgPSBcIkhPVEVMU19XSVRIX0xFU1NfVEhBTl9UV09fU1RBUlNcIixcclxuICAgIEhPVEVMX01PVEVMID0gXCJIT1RFTF9NT1RFTFwiLFxyXG4gICAgSE9UX1BPVF9SRVNUQVVSQU5UID0gXCJIT1RfUE9UX1JFU1RBVVJBTlRcIixcclxuICAgIEhPVVNFSE9MRF9BUFBMSUFOQ0VfU1RPUkUgPSBcIkhPVVNFSE9MRF9BUFBMSUFOQ0VfU1RPUkVcIixcclxuICAgIEhVTkFOX1JFU1RBVVJBTlQgPSBcIkhVTkFOX1JFU1RBVVJBTlRcIixcclxuICAgIEhVTkdBUklBTl9SRVNUQVVSQU5UID0gXCJIVU5HQVJJQU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgSUNFX0NSRUFNX1BBUkxPUiA9IFwiSUNFX0NSRUFNX1BBUkxPUlwiLFxyXG4gICAgSUNFX0hPQ0tFWV9SSU5LID0gXCJJQ0VfSE9DS0VZX1JJTktcIixcclxuICAgIElDRV9TS0FUSU5HX1JJTksgPSBcIklDRV9TS0FUSU5HX1JJTktcIixcclxuICAgIElNUE9SVEFOVF9UT1VSSVNUX0FUVFJBQ1RJT04gPSBcIklNUE9SVEFOVF9UT1VSSVNUX0FUVFJBQ1RJT05cIixcclxuICAgIElNUE9SVF9BTkRfRVhQT1JUX0RJU1RSSUJVVElPTl9DT01QQU5ZID0gXCJJTVBPUlRfQU5EX0VYUE9SVF9ESVNUUklCVVRJT05fQ09NUEFOWVwiLFxyXG4gICAgSU5ESUFOX1JFU1RBVVJBTlQgPSBcIklORElBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBJTkRPTkVTSUFOX1JFU1RBVVJBTlQgPSBcIklORE9ORVNJQU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgSU5EVVNUUklBTF9CVUlMRElORyA9IFwiSU5EVVNUUklBTF9CVUlMRElOR1wiLFxyXG4gICAgSU5GT1JNQUxfTUFSS0VUID0gXCJJTkZPUk1BTF9NQVJLRVRcIixcclxuICAgIElOU1VSQU5DRV9DT01QQU5ZID0gXCJJTlNVUkFOQ0VfQ09NUEFOWVwiLFxyXG4gICAgSU5URVJDSVRZX1JBSUxXQVlfU1RBVElPTiA9IFwiSU5URVJDSVRZX1JBSUxXQVlfU1RBVElPTlwiLFxyXG4gICAgSU5URVJOQVRJT05BTF9PUkdBTklaQVRJT04gPSBcIklOVEVSTkFUSU9OQUxfT1JHQU5JWkFUSU9OXCIsXHJcbiAgICBJTlRFUk5BVElPTkFMX1JBSUxXQVlfU1RBVElPTiA9IFwiSU5URVJOQVRJT05BTF9SQUlMV0FZX1NUQVRJT05cIixcclxuICAgIElOVEVSTkFUSU9OQUxfUkVTVEFVUkFOVCA9IFwiSU5URVJOQVRJT05BTF9SRVNUQVVSQU5UXCIsXHJcbiAgICBJTlRFUk5FVF9DQUZFID0gXCJJTlRFUk5FVF9DQUZFXCIsXHJcbiAgICBJTlZFU1RNRU5UX0NPTlNVTFRJTkdfRklSTSA9IFwiSU5WRVNUTUVOVF9DT05TVUxUSU5HX0ZJUk1cIixcclxuICAgIElSQU5JQU5fUkVTVEFVUkFOVCA9IFwiSVJBTklBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBJUklTSF9SRVNUQVVSQU5UID0gXCJJUklTSF9SRVNUQVVSQU5UXCIsXHJcbiAgICBJU0xBTkQgPSBcIklTTEFORFwiLFxyXG4gICAgSVNSQUVMSV9SRVNUQVVSQU5UID0gXCJJU1JBRUxJX1JFU1RBVVJBTlRcIixcclxuICAgIElUQUxJQU5fUkVTVEFVUkFOVCA9IFwiSVRBTElBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBKQUlOX1RFTVBMRSA9IFwiSkFJTl9URU1QTEVcIixcclxuICAgIEpBTUFJQ0FOX1JFU1RBVVJBTlQgPSBcIkpBTUFJQ0FOX1JFU1RBVVJBTlRcIixcclxuICAgIEpBUEFORVNFX1JFU1RBVVJBTlQgPSBcIkpBUEFORVNFX1JFU1RBVVJBTlRcIixcclxuICAgIEpBWlpfQ0xVQiA9IFwiSkFaWl9DTFVCXCIsXHJcbiAgICBKRVdFTFJZX0NMT0NLX0FORF9XQVRDSF9TSE9QID0gXCJKRVdFTFJZX0NMT0NLX0FORF9XQVRDSF9TSE9QXCIsXHJcbiAgICBKRVdJU0hfUkVTVEFVUkFOVCA9IFwiSkVXSVNIX1JFU1RBVVJBTlRcIixcclxuICAgIEpVTklPUl9DT0xMRUdFX0NPTU1VTklUWV9DT0xMRUdFID0gXCJKVU5JT1JfQ09MTEVHRV9DT01NVU5JVFlfQ09MTEVHRVwiLFxyXG4gICAgS0FSQU9LRV9DTFVCID0gXCJLQVJBT0tFX0NMVUJcIixcclxuICAgIEtJVENIRU5fQU5EX1NBTklUQVRJT05fU1RPUkUgPSBcIktJVENIRU5fQU5EX1NBTklUQVRJT05fU1RPUkVcIixcclxuICAgIEtPUkVBTl9SRVNUQVVSQU5UID0gXCJLT1JFQU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgS09TSEVSX1JFU1RBVVJBTlQgPSBcIktPU0hFUl9SRVNUQVVSQU5UXCIsXHJcbiAgICBMQUdPT04gPSBcIkxBR09PTlwiLFxyXG4gICAgTEFLRVNIT1JFID0gXCJMQUtFU0hPUkVcIixcclxuICAgIExBTkdVQUdFX1NDSE9PTCA9IFwiTEFOR1VBR0VfU0NIT09MXCIsXHJcbiAgICBMQVRJTl9BTUVSSUNBTl9SRVNUQVVSQU5UID0gXCJMQVRJTl9BTUVSSUNBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBMQVVORFJZID0gXCJMQVVORFJZXCIsXHJcbiAgICBMRUJBTkVTRV9SRVNUQVVSQU5UID0gXCJMRUJBTkVTRV9SRVNUQVVSQU5UXCIsXHJcbiAgICBMRUdBTF9TRVJWSUNFX0NPTVBBTlkgPSBcIkxFR0FMX1NFUlZJQ0VfQ09NUEFOWVwiLFxyXG4gICAgTEVJU1VSRSA9IFwiTEVJU1VSRVwiLFxyXG4gICAgTEVJU1VSRV9DRU5URVIgPSBcIkxFSVNVUkVfQ0VOVEVSXCIsXHJcbiAgICBMSUJSQVJZID0gXCJMSUJSQVJZXCIsXHJcbiAgICBMSUdIVElOR19TVE9SRSA9IFwiTElHSFRJTkdfU1RPUkVcIixcclxuICAgIExPQURJTkdfWk9ORSA9IFwiTE9BRElOR19aT05FXCIsXHJcbiAgICBMT0NBTF9QT1NUX09GRklDRSA9IFwiTE9DQUxfUE9TVF9PRkZJQ0VcIixcclxuICAgIExPQ0FMX1NQRUNJQUxUWV9TVE9SRSA9IFwiTE9DQUxfU1BFQ0lBTFRZX1NUT1JFXCIsXHJcbiAgICBMT0RHSU5HX0xJVklOR19BQ0NPTU1PREFUSU9OID0gXCJMT0RHSU5HX0xJVklOR19BQ0NPTU1PREFUSU9OXCIsXHJcbiAgICBMT1RURVJZX1NIT1AgPSBcIkxPVFRFUllfU0hPUFwiLFxyXG4gICAgTFVYRU1CT1VSR0lBTl9SRVNUQVVSQU5UID0gXCJMVVhFTUJPVVJHSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIE1BQ1JPQklPVElDX1JFU1RBVVJBTlQgPSBcIk1BQ1JPQklPVElDX1JFU1RBVVJBTlRcIixcclxuICAgIE1BR0hSSUJfUkVTVEFVUkFOVCA9IFwiTUFHSFJJQl9SRVNUQVVSQU5UXCIsXHJcbiAgICBNQUlMX1BBQ0tBR0VfRlJFSUdIVF9ERUxJVkVSWV9DT01QQU5ZID0gXCJNQUlMX1BBQ0tBR0VfRlJFSUdIVF9ERUxJVkVSWV9DT01QQU5ZXCIsXHJcbiAgICBNQUxURVNFX1JFU1RBVVJBTlQgPSBcIk1BTFRFU0VfUkVTVEFVUkFOVFwiLFxyXG4gICAgTUFOVUZBQ1RVUklOR19DT01QQU5ZID0gXCJNQU5VRkFDVFVSSU5HX0NPTVBBTllcIixcclxuICAgIE1BTlVGQUNUVVJJTkdfRkFDVE9SWSA9IFwiTUFOVUZBQ1RVUklOR19GQUNUT1JZXCIsXHJcbiAgICBNQVJJTkEgPSBcIk1BUklOQVwiLFxyXG4gICAgTUFSSU5BX1NVQiA9IFwiTUFSSU5BX1NVQlwiLFxyXG4gICAgTUFSSU5FX0VMRUNUUk9OSUNfRVFVSVBNRU5UX1NUT1JFID0gXCJNQVJJTkVfRUxFQ1RST05JQ19FUVVJUE1FTlRfU1RPUkVcIixcclxuICAgIE1BUktFVCA9IFwiTUFSS0VUXCIsXHJcbiAgICBNQVJTSF9TV0FNUF9WTEVJID0gXCJNQVJTSF9TV0FNUF9WTEVJXCIsXHJcbiAgICBNQVVSSVRJQU5fUkVTVEFVUkFOVCA9IFwiTUFVUklUSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIE1BVVNPTEVVTV9HUkFWRSA9IFwiTUFVU09MRVVNX0dSQVZFXCIsXHJcbiAgICBNRUFUX1NUT1JFID0gXCJNRUFUX1NUT1JFXCIsXHJcbiAgICBNRUNIQU5JQ0FMX0VOR0lORUVSSU5HX0NPTVBBTlkgPSBcIk1FQ0hBTklDQUxfRU5HSU5FRVJJTkdfQ09NUEFOWVwiLFxyXG4gICAgTUVESUFfQ09NUEFOWSA9IFwiTUVESUFfQ09NUEFOWVwiLFxyXG4gICAgTUVESUNBTF9DTElOSUMgPSBcIk1FRElDQUxfQ0xJTklDXCIsXHJcbiAgICBNRURJQ0FMX1NVUFBMSUVTX0VRVUlQTUVOVF9TVE9SRSA9IFwiTUVESUNBTF9TVVBQTElFU19FUVVJUE1FTlRfU1RPUkVcIixcclxuICAgIE1FRElURVJSQU5FQU5fUkVTVEFVUkFOVCA9IFwiTUVESVRFUlJBTkVBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBNRU1PUklBTCA9IFwiTUVNT1JJQUxcIixcclxuICAgIE1FTU9SSUFMX1BMQUNFID0gXCJNRU1PUklBTF9QTEFDRVwiLFxyXG4gICAgTUVUUk8gPSBcIk1FVFJPXCIsXHJcbiAgICBNRVhJQ0FOX1JFU1RBVVJBTlQgPSBcIk1FWElDQU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgTUlDUk9CUkVXRVJZX0JFRVJfR0FSREVOID0gXCJNSUNST0JSRVdFUllfQkVFUl9HQVJERU5cIixcclxuICAgIE1JRERMRV9FQVNURVJOX1JFU1RBVVJBTlQgPSBcIk1JRERMRV9FQVNURVJOX1JFU1RBVVJBTlRcIixcclxuICAgIE1JRERMRV9TQ0hPT0wgPSBcIk1JRERMRV9TQ0hPT0xcIixcclxuICAgIE1JTElUQVJZX0FVVEhPUklUWSA9IFwiTUlMSVRBUllfQVVUSE9SSVRZXCIsXHJcbiAgICBNSUxJVEFSWV9CQVNFID0gXCJNSUxJVEFSWV9CQVNFXCIsXHJcbiAgICBNSU5FUkFMX0NPTVBBTlkgPSBcIk1JTkVSQUxfQ09NUEFOWVwiLFxyXG4gICAgTUlORVJBTF9IT1RfU1BSSU5HUyA9IFwiTUlORVJBTF9IT1RfU1BSSU5HU1wiLFxyXG4gICAgTUlTQ0VMTEFORU9VUyA9IFwiTUlTQ0VMTEFORU9VU1wiLFxyXG4gICAgTU9CSUxFX1BIT05FX1NUT1JFID0gXCJNT0JJTEVfUEhPTkVfU1RPUkVcIixcclxuICAgIE1PTkdPTElBTl9SRVNUQVVSQU5UID0gXCJNT05HT0xJQU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgTU9OVU1FTlQgPSBcIk1PTlVNRU5UXCIsXHJcbiAgICBNT1JNT05fQ0hVUkNIID0gXCJNT1JNT05fQ0hVUkNIXCIsXHJcbiAgICBNT1JPQ0NBTl9SRVNUQVVSQU5UID0gXCJNT1JPQ0NBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBNT1NRVUUgPSBcIk1PU1FVRVwiLFxyXG4gICAgTU9URUwgPSBcIk1PVEVMXCIsXHJcbiAgICBNT1RPUkNZQ0xFX0RFQUxFUiA9IFwiTU9UT1JDWUNMRV9ERUFMRVJcIixcclxuICAgIE1PVE9SQ1lDTEVfUkVQQUlSX1NIT1AgPSBcIk1PVE9SQ1lDTEVfUkVQQUlSX1NIT1BcIixcclxuICAgIE1PVE9SSU5HX09SR0FOSVpBVElPTl9PRkZJQ0UgPSBcIk1PVE9SSU5HX09SR0FOSVpBVElPTl9PRkZJQ0VcIixcclxuICAgIE1PVE9SU1BPUlRfVkVOVUUgPSBcIk1PVE9SU1BPUlRfVkVOVUVcIixcclxuICAgIE1PVU5UQUlOX0JJS0VfVFJBSUwgPSBcIk1PVU5UQUlOX0JJS0VfVFJBSUxcIixcclxuICAgIE1PVU5UQUlOX1BBU1MgPSBcIk1PVU5UQUlOX1BBU1NcIixcclxuICAgIE1PVU5UQUlOX1BFQUsgPSBcIk1PVU5UQUlOX1BFQUtcIixcclxuICAgIE1PVklOR19TVE9SQUdFX0NPTVBBTlkgPSBcIk1PVklOR19TVE9SQUdFX0NPTVBBTllcIixcclxuICAgIE1VTFRJUFVSUE9TRV9TVEFESVVNID0gXCJNVUxUSVBVUlBPU0VfU1RBRElVTVwiLFxyXG4gICAgTVVTRVVNID0gXCJNVVNFVU1cIixcclxuICAgIE1VU0lDQUxfSU5TVFJVTUVOVF9TVE9SRSA9IFwiTVVTSUNBTF9JTlNUUlVNRU5UX1NUT1JFXCIsXHJcbiAgICBNVVNJQ19DRU5URVIgPSBcIk1VU0lDX0NFTlRFUlwiLFxyXG4gICAgTVVTU0VMX1JFU1RBVVJBTlQgPSBcIk1VU1NFTF9SRVNUQVVSQU5UXCIsXHJcbiAgICBOQUlMX1NBTE9OID0gXCJOQUlMX1NBTE9OXCIsXHJcbiAgICBOQU1FRF9JTlRFUlNFQ1RJT04gPSBcIk5BTUVEX0lOVEVSU0VDVElPTlwiLFxyXG4gICAgTkFUSU9OQUxfT1JHQU5JWkFUSU9OID0gXCJOQVRJT05BTF9PUkdBTklaQVRJT05cIixcclxuICAgIE5BVElPTkFMX1JBSUxXQVlfU1RBVElPTiA9IFwiTkFUSU9OQUxfUkFJTFdBWV9TVEFUSU9OXCIsXHJcbiAgICBOQVRJVkVfUkVTRVJWQVRJT04gPSBcIk5BVElWRV9SRVNFUlZBVElPTlwiLFxyXG4gICAgTkFUVVJBTF9BVFRSQUNUSU9OID0gXCJOQVRVUkFMX0FUVFJBQ1RJT05cIixcclxuICAgIE5BVFVSQUxfQVRUUkFDVElPTl9UT1VSSVNUID0gXCJOQVRVUkFMX0FUVFJBQ1RJT05fVE9VUklTVFwiLFxyXG4gICAgTkVJR0hCT1JIT09EID0gXCJORUlHSEJPUkhPT0RcIixcclxuICAgIE5FUEFMRVNFX1JFU1RBVVJBTlQgPSBcIk5FUEFMRVNFX1JFU1RBVVJBTlRcIixcclxuICAgIE5FVEJBTExfQ09VUlQgPSBcIk5FVEJBTExfQ09VUlRcIixcclxuICAgIE5FV1NBR0VOVFNfQU5EX1RPQkFDQ09OSVNUUyA9IFwiTkVXU0FHRU5UU19BTkRfVE9CQUNDT05JU1RTXCIsXHJcbiAgICBOSUdIVExJRkUgPSBcIk5JR0hUTElGRVwiLFxyXG4gICAgTklHSFRfQ0xVQiA9IFwiTklHSFRfQ0xVQlwiLFxyXG4gICAgTk9OX0dPVkVSTk1FTlRBTF9PUkdBTklaQVRJT04gPSBcIk5PTl9HT1ZFUk5NRU5UQUxfT1JHQU5JWkFUSU9OXCIsXHJcbiAgICBOT1JXRUdJQU5fUkVTVEFVUkFOVCA9IFwiTk9SV0VHSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIE5VUlNJTkdfSE9NRSA9IFwiTlVSU0lOR19IT01FXCIsXHJcbiAgICBPQVNJUyA9IFwiT0FTSVNcIixcclxuICAgIE9CU0VSVkFUSU9OX0RFQ0sgPSBcIk9CU0VSVkFUSU9OX0RFQ0tcIixcclxuICAgIE9CU0VSVkFUT1JZID0gXCJPQlNFUlZBVE9SWVwiLFxyXG4gICAgT0VNID0gXCJPRU1cIixcclxuICAgIE9GRklDRV9FUVVJUE1FTlRfU1RPUkUgPSBcIk9GRklDRV9FUVVJUE1FTlRfU1RPUkVcIixcclxuICAgIE9GRklDRV9TVVBQTFlfU0VSVklDRVNfU1RPUkUgPSBcIk9GRklDRV9TVVBQTFlfU0VSVklDRVNfU1RPUkVcIixcclxuICAgIE9JTF9OQVRVUkFMX0dBU19DT01QQU5ZID0gXCJPSUxfTkFUVVJBTF9HQVNfQ09NUEFOWVwiLFxyXG4gICAgT1BFUkEgPSBcIk9QRVJBXCIsXHJcbiAgICBPUFRJQ0lBTlMgPSBcIk9QVElDSUFOU1wiLFxyXG4gICAgT1JERVJfMV9BUkVBX0dPVkVSTk1FTlRfT0ZGSUNFID0gXCJPUkRFUl8xX0FSRUFfR09WRVJOTUVOVF9PRkZJQ0VcIixcclxuICAgIE9SREVSXzFfQVJFQV9QT0xJQ0VfU1RBVElPTiA9IFwiT1JERVJfMV9BUkVBX1BPTElDRV9TVEFUSU9OXCIsXHJcbiAgICBPUkRFUl8yX0FSRUFfR09WRVJOTUVOVF9PRkZJQ0UgPSBcIk9SREVSXzJfQVJFQV9HT1ZFUk5NRU5UX09GRklDRVwiLFxyXG4gICAgT1JERVJfM19BUkVBX0dPVkVSTk1FTlRfT0ZGSUNFID0gXCJPUkRFUl8zX0FSRUFfR09WRVJOTUVOVF9PRkZJQ0VcIixcclxuICAgIE9SREVSXzRfQVJFQV9HT1ZFUk5NRU5UX09GRklDRSA9IFwiT1JERVJfNF9BUkVBX0dPVkVSTk1FTlRfT0ZGSUNFXCIsXHJcbiAgICBPUkRFUl81X0FSRUFfR09WRVJOTUVOVF9PRkZJQ0UgPSBcIk9SREVSXzVfQVJFQV9HT1ZFUk5NRU5UX09GRklDRVwiLFxyXG4gICAgT1JERVJfNl9BUkVBX0dPVkVSTk1FTlRfT0ZGSUNFID0gXCJPUkRFUl82X0FSRUFfR09WRVJOTUVOVF9PRkZJQ0VcIixcclxuICAgIE9SREVSXzdfQVJFQV9HT1ZFUk5NRU5UX09GRklDRSA9IFwiT1JERVJfN19BUkVBX0dPVkVSTk1FTlRfT0ZGSUNFXCIsXHJcbiAgICBPUkRFUl84X0FSRUFfR09WRVJOTUVOVF9PRkZJQ0UgPSBcIk9SREVSXzhfQVJFQV9HT1ZFUk5NRU5UX09GRklDRVwiLFxyXG4gICAgT1JERVJfOF9BUkVBX1BPTElDRV9TVEFUSU9OID0gXCJPUkRFUl84X0FSRUFfUE9MSUNFX1NUQVRJT05cIixcclxuICAgIE9SREVSXzlfQVJFQV9HT1ZFUk5NRU5UX09GRklDRSA9IFwiT1JERVJfOV9BUkVBX0dPVkVSTk1FTlRfT0ZGSUNFXCIsXHJcbiAgICBPUkRFUl85X0FSRUFfUE9MSUNFX1NUQVRJT04gPSBcIk9SREVSXzlfQVJFQV9QT0xJQ0VfU1RBVElPTlwiLFxyXG4gICAgT1JHQU5JQ19SRVNUQVVSQU5UID0gXCJPUkdBTklDX1JFU1RBVVJBTlRcIixcclxuICAgIE9SR0FOSVpBVElPTiA9IFwiT1JHQU5JWkFUSU9OXCIsXHJcbiAgICBPUklFTlRBTF9SRVNUQVVSQU5UID0gXCJPUklFTlRBTF9SRVNUQVVSQU5UXCIsXHJcbiAgICBPVVRMRVRTID0gXCJPVVRMRVRTXCIsXHJcbiAgICBQQUdPREEgPSBcIlBBR09EQVwiLFxyXG4gICAgUEFJTlRJTkdfREVDT1JBVElOR19TVE9SRSA9IFwiUEFJTlRJTkdfREVDT1JBVElOR19TVE9SRVwiLFxyXG4gICAgUEFLSVNUQU5JX1JFU1RBVVJBTlQgPSBcIlBBS0lTVEFOSV9SRVNUQVVSQU5UXCIsXHJcbiAgICBQQU4gPSBcIlBBTlwiLFxyXG4gICAgUEFSSyA9IFwiUEFSS1wiLFxyXG4gICAgUEFSS0lOR19HQVJBR0UgPSBcIlBBUktJTkdfR0FSQUdFXCIsXHJcbiAgICBQQVJLSU5HX0xPVCA9IFwiUEFSS0lOR19MT1RcIixcclxuICAgIFBBUktJTkdfTE9UX1NVQiA9IFwiUEFSS0lOR19MT1RfU1VCXCIsXHJcbiAgICBQQVJLV0FZID0gXCJQQVJLV0FZXCIsXHJcbiAgICBQQVJLX0FORF9SRUNSRUFUSU9OX0FSRUEgPSBcIlBBUktfQU5EX1JFQ1JFQVRJT05fQVJFQVwiLFxyXG4gICAgUEFSS19SSURFID0gXCJQQVJLX1JJREVcIixcclxuICAgIFBBU1NFTkdFUl9UUkFOU1BPUlRfVElDS0VUX09GRklDRSA9IFwiUEFTU0VOR0VSX1RSQU5TUE9SVF9USUNLRVRfT0ZGSUNFXCIsXHJcbiAgICBQQVdOX1NIT1AgPSBcIlBBV05fU0hPUFwiLFxyXG4gICAgUEVERVNUUklBTl9TVUJXQVkgPSBcIlBFREVTVFJJQU5fU1VCV0FZXCIsXHJcbiAgICBQRVJTT05BTF9DQVJFX0lOU1RJVFVUSU9OID0gXCJQRVJTT05BTF9DQVJFX0lOU1RJVFVUSU9OXCIsXHJcbiAgICBQRVJTT05BTF9TRVJWSUNFX0NFTlRFUiA9IFwiUEVSU09OQUxfU0VSVklDRV9DRU5URVJcIixcclxuICAgIFBFUlVWSUFOX1JFU1RBVVJBTlQgPSBcIlBFUlVWSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIFBFVFJPTF9TVEFUSU9OID0gXCJQRVRST0xfU1RBVElPTlwiLFxyXG4gICAgUEVUX1NUT1JFID0gXCJQRVRfU1RPUkVcIixcclxuICAgIFBFVF9TVVBQTFlfU1RPUkUgPSBcIlBFVF9TVVBQTFlfU1RPUkVcIixcclxuICAgIFBIQVJNQUNFVVRJQ0FMX0NPTVBBTlkgPSBcIlBIQVJNQUNFVVRJQ0FMX0NPTVBBTllcIixcclxuICAgIFBIQVJNQUNZID0gXCJQSEFSTUFDWVwiLFxyXG4gICAgUEhPVE9DT1BZX1NIT1AgPSBcIlBIT1RPQ09QWV9TSE9QXCIsXHJcbiAgICBQSE9UT0dSQVBISUNfRVFVSVBNRU5UX1NUT1JFID0gXCJQSE9UT0dSQVBISUNfRVFVSVBNRU5UX1NUT1JFXCIsXHJcbiAgICBQSE9UT19TSE9QID0gXCJQSE9UT19TSE9QXCIsXHJcbiAgICBQSFlTSU9USEVSQVBZX0NMSU5JQyA9IFwiUEhZU0lPVEhFUkFQWV9DTElOSUNcIixcclxuICAgIFBJQ0tfVVBfQU5EX1JFVFVSTl9QT0lOVCA9IFwiUElDS19VUF9BTkRfUkVUVVJOX1BPSU5UXCIsXHJcbiAgICBQSUNOSUNfQVJFQSA9IFwiUElDTklDX0FSRUFcIixcclxuICAgIFBJWlpBX1JFU1RBVVJBTlQgPSBcIlBJWlpBX1JFU1RBVVJBTlRcIixcclxuICAgIFBMQUNFX09GX1dPUlNISVAgPSBcIlBMQUNFX09GX1dPUlNISVBcIixcclxuICAgIFBMQUlOX0ZMQVQgPSBcIlBMQUlOX0ZMQVRcIixcclxuICAgIFBMQU5FVEFSSVVNID0gXCJQTEFORVRBUklVTVwiLFxyXG4gICAgUExBVEVBVSA9IFwiUExBVEVBVVwiLFxyXG4gICAgUE9MSUNFX1NUQVRJT04gPSBcIlBPTElDRV9TVEFUSU9OXCIsXHJcbiAgICBQT0xJU0hfUkVTVEFVUkFOVCA9IFwiUE9MSVNIX1JFU1RBVVJBTlRcIixcclxuICAgIFBPTFlORVNJQU5fUkVTVEFVUkFOVCA9IFwiUE9MWU5FU0lBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBQT1JUVUdVRVNFX1JFU1RBVVJBTlQgPSBcIlBPUlRVR1VFU0VfUkVTVEFVUkFOVFwiLFxyXG4gICAgUE9SVF9XQVJFSE9VU0UgPSBcIlBPUlRfV0FSRUhPVVNFXCIsXHJcbiAgICBQT1NUQUxfQ09ERSA9IFwiUE9TVEFMX0NPREVcIixcclxuICAgIFBPU1RfT0ZGSUNFID0gXCJQT1NUX09GRklDRVwiLFxyXG4gICAgUFJFU0NIT09MID0gXCJQUkVTQ0hPT0xcIixcclxuICAgIFBSRVNFUlZFRF9BUkVBID0gXCJQUkVTRVJWRURfQVJFQVwiLFxyXG4gICAgUFJJTUFSWV9TQ0hPT0wgPSBcIlBSSU1BUllfU0NIT09MXCIsXHJcbiAgICBQUklTT04gPSBcIlBSSVNPTlwiLFxyXG4gICAgUFJJVkFURV9BVVRIT1JJVFkgPSBcIlBSSVZBVEVfQVVUSE9SSVRZXCIsXHJcbiAgICBQUklWQVRFX0NMVUIgPSBcIlBSSVZBVEVfQ0xVQlwiLFxyXG4gICAgUFJPRFVDRVJfQ09NUEFOWSA9IFwiUFJPRFVDRVJfQ09NUEFOWVwiLFxyXG4gICAgUFJPVEVDVEVEX0FSRUEgPSBcIlBST1RFQ1RFRF9BUkVBXCIsXHJcbiAgICBQUk9WRU7Dh0FMX1JFU1RBVVJBTlQgPSBcIlBST1ZFTsOHQUxfUkVTVEFVUkFOVFwiLFxyXG4gICAgUFVCID0gXCJQVUJcIixcclxuICAgIFBVQkxJQ19BTUVOSVRZID0gXCJQVUJMSUNfQU1FTklUWVwiLFxyXG4gICAgUFVCTElDX0FVVEhPUklUWSA9IFwiUFVCTElDX0FVVEhPUklUWVwiLFxyXG4gICAgUFVCTElDX0NBTExfQk9YID0gXCJQVUJMSUNfQ0FMTF9CT1hcIixcclxuICAgIFBVQkxJQ19IRUFMVEhfVEVDSE5PTE9HWV9DT01QQU5ZID0gXCJQVUJMSUNfSEVBTFRIX1RFQ0hOT0xPR1lfQ09NUEFOWVwiLFxyXG4gICAgUFVCTElDX01BUktFVCA9IFwiUFVCTElDX01BUktFVFwiLFxyXG4gICAgUFVCTElDX1JFU1RST09NID0gXCJQVUJMSUNfUkVTVFJPT01cIixcclxuICAgIFBVQkxJQ19UUkFOU1BPUlRfU1RPUCA9IFwiUFVCTElDX1RSQU5TUE9SVF9TVE9QXCIsXHJcbiAgICBQVUJMSVNISU5HX1RFQ0hOT0xPR1lfQ09NUEFOWSA9IFwiUFVCTElTSElOR19URUNITk9MT0dZX0NPTVBBTllcIixcclxuICAgIFBVQl9GT09EID0gXCJQVUJfRk9PRFwiLFxyXG4gICAgUVVBUlJZID0gXCJRVUFSUllcIixcclxuICAgIFJBQ0VfVFJBQ0sgPSBcIlJBQ0VfVFJBQ0tcIixcclxuICAgIFJBSUxXQVlfU0lESU5HID0gXCJSQUlMV0FZX1NJRElOR1wiLFxyXG4gICAgUkFJTFdBWV9TVEFUSU9OID0gXCJSQUlMV0FZX1NUQVRJT05cIixcclxuICAgIFJBSUxfRkVSUlkgPSBcIlJBSUxfRkVSUllcIixcclxuICAgIFJBUElEUyA9IFwiUkFQSURTXCIsXHJcbiAgICBSRUFMX0VTVEFURV9BR0VOQ1lfQ09NUEFOWSA9IFwiUkVBTF9FU1RBVEVfQUdFTkNZX0NPTVBBTllcIixcclxuICAgIFJFQUxfRVNUQVRFX0FHRU5DWV9TSE9QID0gXCJSRUFMX0VTVEFURV9BR0VOQ1lfU0hPUFwiLFxyXG4gICAgUkVDUkVBVElPTkFMX1NJVEUgPSBcIlJFQ1JFQVRJT05BTF9TSVRFXCIsXHJcbiAgICBSRUNSRUFUSU9OQUxfVkVISUNMRV9ERUFMRVIgPSBcIlJFQ1JFQVRJT05BTF9WRUhJQ0xFX0RFQUxFUlwiLFxyXG4gICAgUkVDUkVBVElPTl9BUkVBID0gXCJSRUNSRUFUSU9OX0FSRUFcIixcclxuICAgIFJFQ1lDTElOR19TSE9QID0gXCJSRUNZQ0xJTkdfU0hPUFwiLFxyXG4gICAgUkVFRiA9IFwiUkVFRlwiLFxyXG4gICAgUkVHSU9OUyA9IFwiUkVHSU9OU1wiLFxyXG4gICAgUkVQQUlSX1NIT1AgPSBcIlJFUEFJUl9TSE9QXCIsXHJcbiAgICBSRVNFQVJDSF9JTlNUSVRVVEUgPSBcIlJFU0VBUkNIX0lOU1RJVFVURVwiLFxyXG4gICAgUkVTRVJWT0lSID0gXCJSRVNFUlZPSVJcIixcclxuICAgIFJFU0lERU5USUFMX0FDQ09NTU9EQVRJT04gPSBcIlJFU0lERU5USUFMX0FDQ09NTU9EQVRJT05cIixcclxuICAgIFJFU0lERU5USUFMX0VTVEFURSA9IFwiUkVTSURFTlRJQUxfRVNUQVRFXCIsXHJcbiAgICBSRVNPUlQgPSBcIlJFU09SVFwiLFxyXG4gICAgUkVTVEFVUkFOVCA9IFwiUkVTVEFVUkFOVFwiLFxyXG4gICAgUkVTVEFVUkFOVF9BUkVBID0gXCJSRVNUQVVSQU5UX0FSRUFcIixcclxuICAgIFJFU1RfQVJFQSA9IFwiUkVTVF9BUkVBXCIsXHJcbiAgICBSRVNUX0NBTVBTID0gXCJSRVNUX0NBTVBTXCIsXHJcbiAgICBSRVRBSUxfT1VUTEVUUyA9IFwiUkVUQUlMX09VVExFVFNcIixcclxuICAgIFJFVElSRU1FTlRfQ09NTVVOSVRZID0gXCJSRVRJUkVNRU5UX0NPTU1VTklUWVwiLFxyXG4gICAgUklER0UgPSBcIlJJREdFXCIsXHJcbiAgICBSSVZFUl9DUk9TU0lORyA9IFwiUklWRVJfQ1JPU1NJTkdcIixcclxuICAgIFJPQURTSURFID0gXCJST0FEU0lERVwiLFxyXG4gICAgUk9BRF9SRVNDVUVfUE9JTlQgPSBcIlJPQURfUkVTQ1VFX1BPSU5UXCIsXHJcbiAgICBST0NLUyA9IFwiUk9DS1NcIixcclxuICAgIFJPQ0tfQ0xJTUJJTkdfVFJBSUwgPSBcIlJPQ0tfQ0xJTUJJTkdfVFJBSUxcIixcclxuICAgIFJPTUFOSUFOX1JFU1RBVVJBTlQgPSBcIlJPTUFOSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIFJPVVRFID0gXCJST1VURVwiLFxyXG4gICAgUlVHQllfR1JPVU5EID0gXCJSVUdCWV9HUk9VTkRcIixcclxuICAgIFJVU1NJQU5fUkVTVEFVUkFOVCA9IFwiUlVTU0lBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBTQUxBRF9CQVIgPSBcIlNBTEFEX0JBUlwiLFxyXG4gICAgU0FORFdJQ0hfUkVTVEFVUkFOVCA9IFwiU0FORFdJQ0hfUkVTVEFVUkFOVFwiLFxyXG4gICAgU0FVTkFfU09MQVJJVU1fTUFTU0FHRV9DRU5URVIgPSBcIlNBVU5BX1NPTEFSSVVNX01BU1NBR0VfQ0VOVEVSXCIsXHJcbiAgICBTQVZJTkdTX0lOU1RJVFVUSU9OID0gXCJTQVZJTkdTX0lOU1RJVFVUSU9OXCIsXHJcbiAgICBTQVZPWUFOX1JFU1RBVVJBTlQgPSBcIlNBVk9ZQU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgU0NBTkRJTkFWSUFOX1JFU1RBVVJBTlQgPSBcIlNDQU5ESU5BVklBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBTQ0VOSUNfUklWRVJfQVJFQSA9IFwiU0NFTklDX1JJVkVSX0FSRUFcIixcclxuICAgIFNDSE9PTCA9IFwiU0NIT09MXCIsXHJcbiAgICBTQ0hPT0xfQlVTX1NFUlZJQ0VfQ09NUEFOWSA9IFwiU0NIT09MX0JVU19TRVJWSUNFX0NPTVBBTllcIixcclxuICAgIFNDSUVOQ0VfTVVTRVVNID0gXCJTQ0lFTkNFX01VU0VVTVwiLFxyXG4gICAgU0NPVFRJU0hfUkVTVEFVUkFOVCA9IFwiU0NPVFRJU0hfUkVTVEFVUkFOVFwiLFxyXG4gICAgU0VBRk9PRF9SRVNUQVVSQU5UID0gXCJTRUFGT09EX1JFU1RBVVJBTlRcIixcclxuICAgIFNFQVNIT1JFID0gXCJTRUFTSE9SRVwiLFxyXG4gICAgU0VDVVJJVFlfR0FURSA9IFwiU0VDVVJJVFlfR0FURVwiLFxyXG4gICAgU0VDVVJJVFlfU1RPUkUgPSBcIlNFQ1VSSVRZX1NUT1JFXCIsXHJcbiAgICBTRU5JT1JfSElHSF9TQ0hPT0wgPSBcIlNFTklPUl9ISUdIX1NDSE9PTFwiLFxyXG4gICAgU0VSVklDRV9DT01QQU5ZID0gXCJTRVJWSUNFX0NPTVBBTllcIixcclxuICAgIFNIQU5ET05HX1JFU1RBVVJBTlQgPSBcIlNIQU5ET05HX1JFU1RBVVJBTlRcIixcclxuICAgIFNIQU5HSEFJX1JFU1RBVVJBTlQgPSBcIlNIQU5HSEFJX1JFU1RBVVJBTlRcIixcclxuICAgIFNISU5UT19TSFJJTkUgPSBcIlNISU5UT19TSFJJTkVcIixcclxuICAgIFNIT09USU5HX1JBTkdFID0gXCJTSE9PVElOR19SQU5HRVwiLFxyXG4gICAgU0hPUCA9IFwiU0hPUFwiLFxyXG4gICAgU0hPUFBJTkcgPSBcIlNIT1BQSU5HXCIsXHJcbiAgICBTSE9QUElOR19DRU5URVIgPSBcIlNIT1BQSU5HX0NFTlRFUlwiLFxyXG4gICAgU0hPUFBJTkdfU0VSVklDRV9DRU5URVIgPSBcIlNIT1BQSU5HX1NFUlZJQ0VfQ0VOVEVSXCIsXHJcbiAgICBTSUNIVUFOX1JFU1RBVVJBTlQgPSBcIlNJQ0hVQU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgU0lDSUxJQU5fUkVTVEFVUkFOVCA9IFwiU0lDSUxJQU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgU0tJX0xJRlQgPSBcIlNLSV9MSUZUXCIsXHJcbiAgICBTS0lfUkVTT1JUID0gXCJTS0lfUkVTT1JUXCIsXHJcbiAgICBTTEFWSUNfUkVTVEFVUkFOVCA9IFwiU0xBVklDX1JFU1RBVVJBTlRcIixcclxuICAgIFNMT1ZBS19SRVNUQVVSQU5UID0gXCJTTE9WQUtfUkVTVEFVUkFOVFwiLFxyXG4gICAgU05BQ0tTID0gXCJTTkFDS1NcIixcclxuICAgIFNOT09LRVJfUE9PTF9CSUxMSUFSRF9IQUxMID0gXCJTTk9PS0VSX1BPT0xfQklMTElBUkRfSEFMTFwiLFxyXG4gICAgU09DQ0VSX0ZJRUxEID0gXCJTT0NDRVJfRklFTERcIixcclxuICAgIFNPVUxfRk9PRF9SRVNUQVVSQU5UID0gXCJTT1VMX0ZPT0RfUkVTVEFVUkFOVFwiLFxyXG4gICAgU09VUF9SRVNUQVVSQU5UID0gXCJTT1VQX1JFU1RBVVJBTlRcIixcclxuICAgIFNQQSA9IFwiU1BBXCIsXHJcbiAgICBTUEFOSVNIX1JFU1RBVVJBTlQgPSBcIlNQQU5JU0hfUkVTVEFVUkFOVFwiLFxyXG4gICAgU1BFQ0lBTElTVF9DTElOSUMgPSBcIlNQRUNJQUxJU1RfQ0xJTklDXCIsXHJcbiAgICBTUEVDSUFMSVpFRF9IT1NQSVRBTCA9IFwiU1BFQ0lBTElaRURfSE9TUElUQUxcIixcclxuICAgIFNQRUNJQUxUWV9GT09EX1NUT1JFID0gXCJTUEVDSUFMVFlfRk9PRF9TVE9SRVwiLFxyXG4gICAgU1BFQ0lBTFRZX1NUT1JFID0gXCJTUEVDSUFMVFlfU1RPUkVcIixcclxuICAgIFNQRUNJQUxfU0NIT09MID0gXCJTUEVDSUFMX1NDSE9PTFwiLFxyXG4gICAgU1BPUlQgPSBcIlNQT1JUXCIsXHJcbiAgICBTUE9SVFNfQ0VOVEVSID0gXCJTUE9SVFNfQ0VOVEVSXCIsXHJcbiAgICBTUE9SVFNfQ0VOVEVSX1NVQiA9IFwiU1BPUlRTX0NFTlRFUl9TVUJcIixcclxuICAgIFNQT1JUU19TQ0hPT0wgPSBcIlNQT1JUU19TQ0hPT0xcIixcclxuICAgIFNQT1JUU19TVE9SRSA9IFwiU1BPUlRTX1NUT1JFXCIsXHJcbiAgICBTUVVBU0hfQ09VUlQgPSBcIlNRVUFTSF9DT1VSVFwiLFxyXG4gICAgU1RBRElVTSA9IFwiU1RBRElVTVwiLFxyXG4gICAgU1RBTVBfU0hPUCA9IFwiU1RBTVBfU0hPUFwiLFxyXG4gICAgU1RBVElPTl9BQ0NFU1MgPSBcIlNUQVRJT05fQUNDRVNTXCIsXHJcbiAgICBTVEFUVUUgPSBcIlNUQVRVRVwiLFxyXG4gICAgU1RFQUtfSE9VU0UgPSBcIlNURUFLX0hPVVNFXCIsXHJcbiAgICBTVE9DS19FWENIQU5HRSA9IFwiU1RPQ0tfRVhDSEFOR0VcIixcclxuICAgIFNUT1JFID0gXCJTVE9SRVwiLFxyXG4gICAgU1RSRUVUX0FERFJFU1MgPSBcIlNUUkVFVF9BRERSRVNTXCIsXHJcbiAgICBTVURBTkVTRV9SRVNUQVVSQU5UID0gXCJTVURBTkVTRV9SRVNUQVVSQU5UXCIsXHJcbiAgICBTVVBFUk1BUktFVF9IWVBFUk1BUktFVCA9IFwiU1VQRVJNQVJLRVRfSFlQRVJNQVJLRVRcIixcclxuICAgIFNVUklOQU1FU0VfUkVTVEFVUkFOVCA9IFwiU1VSSU5BTUVTRV9SRVNUQVVSQU5UXCIsXHJcbiAgICBTVVNISV9SRVNUQVVSQU5UID0gXCJTVVNISV9SRVNUQVVSQU5UXCIsXHJcbiAgICBTV0VESVNIX1JFU1RBVVJBTlQgPSBcIlNXRURJU0hfUkVTVEFVUkFOVFwiLFxyXG4gICAgU1dJTU1JTkdfUE9PTCA9IFwiU1dJTU1JTkdfUE9PTFwiLFxyXG4gICAgU1dJU1NfUkVTVEFVUkFOVCA9IFwiU1dJU1NfUkVTVEFVUkFOVFwiLFxyXG4gICAgU1lOQUdPR1VFID0gXCJTWU5BR09HVUVcIixcclxuICAgIFNZUklBTl9SRVNUQVVSQU5UID0gXCJTWVJJQU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgVEFCTEVfVEVOTklTX0hBTEwgPSBcIlRBQkxFX1RFTk5JU19IQUxMXCIsXHJcbiAgICBUQUlMT1JfU0hPUCA9IFwiVEFJTE9SX1NIT1BcIixcclxuICAgIFRBSVdBTkVTRV9SRVNUQVVSQU5UID0gXCJUQUlXQU5FU0VfUkVTVEFVUkFOVFwiLFxyXG4gICAgVEFLRV9BV0FZX1JFU1RBVVJBTlQgPSBcIlRBS0VfQVdBWV9SRVNUQVVSQU5UXCIsXHJcbiAgICBUQVBBU19SRVNUQVVSQU5UID0gXCJUQVBBU19SRVNUQVVSQU5UXCIsXHJcbiAgICBUQVhJX0xJTU9VU0lORV9TSFVUVExFX1NFUlZJQ0VfQ09NUEFOWSA9IFwiVEFYSV9MSU1PVVNJTkVfU0hVVFRMRV9TRVJWSUNFX0NPTVBBTllcIixcclxuICAgIFRBWElfU1RBTkQgPSBcIlRBWElfU1RBTkRcIixcclxuICAgIFRBWF9TRVJWSUNFX0NPTVBBTlkgPSBcIlRBWF9TRVJWSUNFX0NPTVBBTllcIixcclxuICAgIFRFQV9IT1VTRSA9IFwiVEVBX0hPVVNFXCIsXHJcbiAgICBURUNITklDQUxfU0NIT09MID0gXCJURUNITklDQUxfU0NIT09MXCIsXHJcbiAgICBURUxFQ09NTVVOSUNBVElPTlNfQ09NUEFOWSA9IFwiVEVMRUNPTU1VTklDQVRJT05TX0NPTVBBTllcIixcclxuICAgIFRFTVBMRSA9IFwiVEVNUExFXCIsXHJcbiAgICBURU5OSVNfQ09VUlQgPSBcIlRFTk5JU19DT1VSVFwiLFxyXG4gICAgVEVQUEFOWUFLS0lfUkVTVEFVUkFOVCA9IFwiVEVQUEFOWUFLS0lfUkVTVEFVUkFOVFwiLFxyXG4gICAgVEVSTUlOQUwgPSBcIlRFUk1JTkFMXCIsXHJcbiAgICBUSEFJX1JFU1RBVVJBTlQgPSBcIlRIQUlfUkVTVEFVUkFOVFwiLFxyXG4gICAgVEhFQVRFUiA9IFwiVEhFQVRFUlwiLFxyXG4gICAgVEhFQVRFUl9TVUIgPSBcIlRIRUFURVJfU1VCXCIsXHJcbiAgICBUSEVNRURfU1BPUlRTX0hBTEwgPSBcIlRIRU1FRF9TUE9SVFNfSEFMTFwiLFxyXG4gICAgVEhSRUVfU1RBUl9IT1RFTCA9IFwiVEhSRUVfU1RBUl9IT1RFTFwiLFxyXG4gICAgVElCRVRBTl9SRVNUQVVSQU5UID0gXCJUSUJFVEFOX1JFU1RBVVJBTlRcIixcclxuICAgIFRJUkVfUkVQQUlSX1NIT1AgPSBcIlRJUkVfUkVQQUlSX1NIT1BcIixcclxuICAgIFRPSUxFVCA9IFwiVE9JTEVUXCIsXHJcbiAgICBUT0xMX0dBVEUgPSBcIlRPTExfR0FURVwiLFxyXG4gICAgVE9VUklTTSA9IFwiVE9VUklTTVwiLFxyXG4gICAgVE9VUklTVF9JTkZPUk1BVElPTl9PRkZJQ0UgPSBcIlRPVVJJU1RfSU5GT1JNQVRJT05fT0ZGSUNFXCIsXHJcbiAgICBUT1dFUiA9IFwiVE9XRVJcIixcclxuICAgIFRPV04gPSBcIlRPV05cIixcclxuICAgIFRPV05IT1VTRV9DT01QTEVYID0gXCJUT1dOSE9VU0VfQ09NUExFWFwiLFxyXG4gICAgVE9XTl9HT1ZFUk5NRU5UID0gXCJUT1dOX0dPVkVSTk1FTlRcIixcclxuICAgIFRPWVNfQU5EX0dBTUVTX1NUT1JFID0gXCJUT1lTX0FORF9HQU1FU19TVE9SRVwiLFxyXG4gICAgVFJBRkZJQyA9IFwiVFJBRkZJQ1wiLFxyXG4gICAgVFJBRkZJQ19DT05UUk9MX0RFUEFSVE1FTlQgPSBcIlRSQUZGSUNfQ09OVFJPTF9ERVBBUlRNRU5UXCIsXHJcbiAgICBUUkFGRklDX0xJR0hUID0gXCJUUkFGRklDX0xJR0hUXCIsXHJcbiAgICBUUkFGRklDX01BTkFHRU1FTlRfQlVSRUFVID0gXCJUUkFGRklDX01BTkFHRU1FTlRfQlVSRUFVXCIsXHJcbiAgICBUUkFGRklDX1NJR04gPSBcIlRSQUZGSUNfU0lHTlwiLFxyXG4gICAgVFJBRkZJQ19TSUdOQUwgPSBcIlRSQUZGSUNfU0lHTkFMXCIsXHJcbiAgICBUUkFJTEhFQUQgPSBcIlRSQUlMSEVBRFwiLFxyXG4gICAgVFJBSUxfU1lTVEVNID0gXCJUUkFJTF9TWVNURU1cIixcclxuICAgIFRSQU1fU1RPUCA9IFwiVFJBTV9TVE9QXCIsXHJcbiAgICBUUkFOU1BPUlQgPSBcIlRSQU5TUE9SVFwiLFxyXG4gICAgVFJBTlNQT1JUQVRJT05fQ09NUEFOWSA9IFwiVFJBTlNQT1JUQVRJT05fQ09NUEFOWVwiLFxyXG4gICAgVFJBTlNQT1JUX19DRU5URVIgPSBcIlRSQU5TUE9SVF9fQ0VOVEVSXCIsXHJcbiAgICBUUkFWRUxfQUdFTkNZID0gXCJUUkFWRUxfQUdFTkNZXCIsXHJcbiAgICBUUlVDS19ERUFMRVIgPSBcIlRSVUNLX0RFQUxFUlwiLFxyXG4gICAgVFJVQ0tfUEFSS0lOR19BUkVBID0gXCJUUlVDS19QQVJLSU5HX0FSRUFcIixcclxuICAgIFRSVUNLX1JFUEFJUl9TSE9QID0gXCJUUlVDS19SRVBBSVJfU0hPUFwiLFxyXG4gICAgVFJVQ0tfU1RPUCA9IFwiVFJVQ0tfU1RPUFwiLFxyXG4gICAgVFJVQ0tfV0FTSCA9IFwiVFJVQ0tfV0FTSFwiLFxyXG4gICAgVFNVTkFNSV9BU1NFTUJMWV9QT0lOVCA9IFwiVFNVTkFNSV9BU1NFTUJMWV9QT0lOVFwiLFxyXG4gICAgVFVOSVNJQU5fUkVTVEFVUkFOVCA9IFwiVFVOSVNJQU5fUkVTVEFVUkFOVFwiLFxyXG4gICAgVFVOTkVMID0gXCJUVU5ORUxcIixcclxuICAgIFRVUktJU0hfUkVTVEFVUkFOVCA9IFwiVFVSS0lTSF9SRVNUQVVSQU5UXCIsXHJcbiAgICBVTlJBVEVEX0hPVEVMID0gXCJVTlJBVEVEX0hPVEVMXCIsXHJcbiAgICBVUlVHVUFZQU5fUkVTVEFVUkFOVCA9IFwiVVJVR1VBWUFOX1JFU1RBVVJBTlRcIixcclxuICAgIFVTRURfQ0FSX0RFQUxFUiA9IFwiVVNFRF9DQVJfREVBTEVSXCIsXHJcbiAgICBWQUxMRVkgPSBcIlZBTExFWVwiLFxyXG4gICAgVkFOX0RFQUxFUiA9IFwiVkFOX0RFQUxFUlwiLFxyXG4gICAgVkFSSUVUWV9TVE9SRSA9IFwiVkFSSUVUWV9TVE9SRVwiLFxyXG4gICAgVkVHRVRBUklBTl9SRVNUQVVSQU5UID0gXCJWRUdFVEFSSUFOX1JFU1RBVVJBTlRcIixcclxuICAgIFZFTkVaVUVMQU5fUkVTVEFVUkFOVCA9IFwiVkVORVpVRUxBTl9SRVNUQVVSQU5UXCIsXHJcbiAgICBWRVRFUklOQVJZX0NMSU5JQyA9IFwiVkVURVJJTkFSWV9DTElOSUNcIixcclxuICAgIFZJREVPX0FSQ0FERV9HQU1JTkdfUk9PTSA9IFwiVklERU9fQVJDQURFX0dBTUlOR19ST09NXCIsXHJcbiAgICBWSUVUTkFNRVNFX1JFU1RBVVJBTlQgPSBcIlZJRVROQU1FU0VfUkVTVEFVUkFOVFwiLFxyXG4gICAgVklMTEEgPSBcIlZJTExBXCIsXHJcbiAgICBWT0NBVElPTkFMX1RSQUlOSU5HX1NDSE9PTCA9IFwiVk9DQVRJT05BTF9UUkFJTklOR19TQ0hPT0xcIixcclxuICAgIFZPTENBTklDX0VSVVBUSU9OX0FTU0VNQkxZX1BPSU5UID0gXCJWT0xDQU5JQ19FUlVQVElPTl9BU1NFTUJMWV9QT0lOVFwiLFxyXG4gICAgV0FSRUhPVVNFX1NVUEVSTUFSS0VUID0gXCJXQVJFSE9VU0VfU1VQRVJNQVJLRVRcIixcclxuICAgIFdBVEVSX0hPTEUgPSBcIldBVEVSX0hPTEVcIixcclxuICAgIFdBVEVSX1NQT1JUU19DRU5URVIgPSBcIldBVEVSX1NQT1JUU19DRU5URVJcIixcclxuICAgIFdFRERJTkdfU0VSVklDRV9DT01QQU5ZID0gXCJXRURESU5HX1NFUlZJQ0VfQ09NUEFOWVwiLFxyXG4gICAgV0VJR0hfU0NBTEVTID0gXCJXRUlHSF9TQ0FMRVNcIixcclxuICAgIFdFSUdIX1NUQVRJT04gPSBcIldFSUdIX1NUQVRJT05cIixcclxuICAgIFdFSUdIX1NUQVRJT05fU1VCID0gXCJXRUlHSF9TVEFUSU9OX1NVQlwiLFxyXG4gICAgV0VMRkFSRV9PUkdBTklaQVRJT04gPSBcIldFTEZBUkVfT1JHQU5JWkFUSU9OXCIsXHJcbiAgICBXRUxMID0gXCJXRUxMXCIsXHJcbiAgICBXRUxTSF9SRVNUQVVSQU5UID0gXCJXRUxTSF9SRVNUQVVSQU5UXCIsXHJcbiAgICBXRVNURVJOX1JFU1RBVVJBTlQgPSBcIldFU1RFUk5fUkVTVEFVUkFOVFwiLFxyXG4gICAgV0lMREVSTkVTU19BUkVBID0gXCJXSUxERVJORVNTX0FSRUFcIixcclxuICAgIFdJTERMSUZFX1BBUksgPSBcIldJTERMSUZFX1BBUktcIixcclxuICAgIFdJTkVSWSA9IFwiV0lORVJZXCIsXHJcbiAgICBXSU5FUllfVE9VUklTVCA9IFwiV0lORVJZX1RPVVJJU1RcIixcclxuICAgIFdJTkVfQkFSID0gXCJXSU5FX0JBUlwiLFxyXG4gICAgV0lORV9TUElSSVRTX1NUT1JFID0gXCJXSU5FX1NQSVJJVFNfU1RPUkVcIixcclxuICAgIFdJTlRFUl9TUE9SVF9BUkVBID0gXCJXSU5URVJfU1BPUlRfQVJFQVwiLFxyXG4gICAgWUFDSFRfQkFTSU4gPSBcIllBQ0hUX0JBU0lOXCIsXHJcbiAgICBZT0dVUlRfSlVJQ0VfQkFSID0gXCJZT0dVUlRfSlVJQ0VfQkFSXCIsXHJcbiAgICBaT08gPSBcIlpPT1wiLFxyXG4gICAgWk9PX0FSQk9SRVRBX0JPVEFOSUNBTF9HQVJERU4gPSBcIlpPT19BUkJPUkVUQV9CT1RBTklDQUxfR0FSREVOXCIsXHJcbn1cclxuXHJcbiJdfQ==

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
        this.createMap();
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
            // this.locationSearch();
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
    createMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.mapInstance = yield this.hmsMap.getMap('map-view', {
                zoomGesturesEnabled: true,
                zoomControlsEnabled: true,
                cameraPosition: {
                    target: { lat: this.iniLat, lng: this.iniLng },
                    zoom: 7
                }
            });
        });
    }
    locationSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("text");
            const textSearchReq = {
                children: false,
                query: this.cus_address,
                location: {
                    lat: this.iniLat,
                    lng: this.iniLng,
                },
                radius: 50000,
                poiType: _hmscore_ionic_native_hms_site_ngx__WEBPACK_IMPORTED_MODULE_4__.LocationType.ADDRESS,
                hwPoiType: _hmscore_ionic_native_hms_site_ngx__WEBPACK_IMPORTED_MODULE_4__.HwLocationType.ADDRESS,
                countryCode: "MY",
                language: "en",
                pageIndex: 1,
                pageSize: 5
            };
            try {
                const response = yield this.searchService.textSearch(textSearchReq);
                let sites = JSON.stringify(JSON.parse(JSON.stringify(response)).sites);
                if (Object.keys(sites).length != 0) {
                    let cameraLocation = JSON.parse(sites)[0].location;
                    yield this.mapInstance.moveCamera(_hmscore_ionic_native_hms_map_ngx__WEBPACK_IMPORTED_MODULE_5__.CameraUpdateFactory.newCameraPosition({
                        target: { lat: cameraLocation.lat, lng: cameraLocation.lng }, zoom: 20
                    }));
                    let location = JSON.parse(sites)[0].location;
                    yield this.mapInstance.addMarker({ position: { lat: location.lat, lng: location.lng } });
                }
            }
            catch (e) {
                console.error('error : ' + JSON.stringify(e));
            }
        });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".item-img ion-img {\n  border-radius: 20px !important;\n  overflow: hidden;\n  width: 80px;\n  height: 80px;\n  min-width: 40px !important;\n  max-width: 40px !important;\n  max-width: 80px !important;\n  max-height: 80px !important;\n  margin: 40% 5%;\n  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n.input-border ion-textarea {\n  border: #d4d4d4 2px solid;\n  border-radius: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 15px;\n}\n\n.input-border ion-input {\n  border: #d4d4d4 2px solid;\n  border-radius: 15px;\n  margin-top: 2%;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  font-size: 15px;\n}\n\n.input-border ion-label {\n  font-size: 22px;\n}\n\nion-select, ion-datetime {\n  width: 100%;\n  height: 37px;\n  border: #d4d4d4 2px solid;\n  border-radius: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 15px;\n  margin-top: 3%;\n}\n\n.input-border:hover ion-input, .input-border:hover ion-textarea, .input-border:hover ion-datetime, .input-border:hover ion-select {\n  border-color: #494949;\n}\n\n.input-border:hover ion-label {\n  color: #3880ff;\n}\n\n.scan-btn {\n  margin-top: 10%;\n  padding-left: 0%;\n  padding-right: 2%;\n}\n\n.scan-btn ion-image {\n  width: 5px;\n  height: 5px;\n  min-width: 2px;\n  max-width: 2px;\n  max-width: 5px;\n  max-height: 5px;\n}\n\nion-content {\n  background-color: transparent;\n  --ion-background-color: transparent;\n}\n\n#map-view {\n  width: 80%;\n  height: 500px;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZG9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0VBQ0Esc0RBQUE7RUFDQSxtREFBQTtBQUFSOztBQUtJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRlI7O0FBS0k7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSFI7O0FBTUk7RUFDSSxlQUFBO0FBSlI7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFMSjs7QUFTSTtFQUNJLHFCQUFBO0FBTlI7O0FBU0k7RUFDSSxjQUFBO0FBUFI7O0FBV0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVlBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBVEo7O0FBYUE7RUFDSSw2QkFBQTtFQUNBLG1DQUFBO0FBVko7O0FBYUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFWSiIsImZpbGUiOiJhZGRvcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1pbWcge1xyXG4gICAgaW9uLWltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDQwJSA1JTtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnB1dC1ib3JkZXIge1xyXG4gICAgaW9uLXRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXI6IHJnYigyMTIsIDIxMiwgMjEyKSAycHggc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgICBib3JkZXI6IHJnYigyMTIsIDIxMiwgMjEyKSAycHggc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tc2VsZWN0LCBpb24tZGF0ZXRpbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBib3JkZXI6IHJnYigyMTIsIDIxMiwgMjEyKSAycHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG4uaW5wdXQtYm9yZGVyOmhvdmVyIHtcclxuICAgIGlvbi1pbnB1dCwgaW9uLXRleHRhcmVhLCBpb24tZGF0ZXRpbWUsIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDczLCA3MywgNzMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHJnYig1NiwgMTI4LCAyNTUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2Nhbi1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG59XHJcblxyXG4uc2Nhbi1idG4ge1xyXG5pb24taW1hZ2Uge1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgbWluLXdpZHRoOiAycHg7XHJcbiAgICBtYXgtd2lkdGg6IDJweDtcclxuICAgIG1heC13aWR0aDogNXB4O1xyXG4gICAgbWF4LWhlaWdodDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jbWFwLXZpZXcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" mode=\"ios\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"mode == '2'\" (click)=\"order_edit()\"><ion-icon name=\"create\"></ion-icon></ion-button>\n      <ion-button *ngIf=\"mode == '1' || mode == '3'\" (click)=\"order_save()\"><ion-icon name=\"save\"></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-title>{{page_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <div class=\"item-img\">\n          <ion-img [src]=\"item_image\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-list>\n          <ion-item lines=\"none\" class=\"input-border\">\n            <ion-label position=\"stacked\">Item*</ion-label>\n            <ion-select value=\"{{item_id}}\"\n              interface=\"action-sheet\"\n              (ionChange)=\"selectItem($event)\"\n              #itemSelection\n              [disabled]=\"mode == '2' || mode == '4'\">\n              <ion-select-option value=\"{{item.items_id}}\" *ngFor=\"let item of itemsList\">{{item.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n        \n        <ion-row>\n          <ion-item lines=\"none\" class=\"input-border\">\n            <ion-label position=\"stacked\">Stock</ion-label>\n            <ion-input readonly [(ngModel)]=\"item_stock\" type=\"number\"></ion-input>\n          </ion-item>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Price</ion-label>\n          <ion-input readonly [(ngModel)]=\"item_price\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Qty*</ion-label>\n          <ion-input [readonly]=\"mode == '2' || mode == '4'\" \n            [(ngModel)]=\"qty\" \n            type=\"number\" \n            (click)=\"calculate()\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Order Date</ion-label>\n          <ion-datetime displayFormat=\"YYYY-MM-DD\" \n          min=\"2020-01-01\" \n          max=\"2100-01-01\" \n          [(ngModel)]=\"order_date\"\n          (click)=\"calculate()\"\n          [readonly]=\"mode == '2' || mode == '4'\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Amount</ion-label>\n          <ion-input readonly [(ngModel)]=\"amount\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Customer Name*</ion-label>\n          <ion-input [readonly]=\"mode == '2' || mode == '4'\" [(ngModel)]=\"cus_name\" (click)=\"calculate()\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Tel.*</ion-label>\n          <ion-input [readonly]=\"mode == '2' || mode == '4'\" [(ngModel)]=\"cus_tel\" type=\"number\" (click)=\"calculate()\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Address</ion-label>\n          <ion-textarea rows=\"3\" [readonly]=\"mode == '2' || mode == '4'\" [(ngModel)]=\"cus_address\" (click)=\"calculate()\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Shipping No.</ion-label>\n          <ion-input [readonly]=\"mode == '2' || mode == '4'\" [(ngModel)]=\"shipping_no\" (click)=\"calculate()\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1\" class=\"scan-btn\" [hidden]=\"mode == '2' || mode == '4'\">\n        <ion-img [src]=\"'./assets/svg/scan.svg'\" (click)=\"scanBarCode()\"></ion-img>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <div id=\"map-view\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_addorder_addorder_module_ts.js.map