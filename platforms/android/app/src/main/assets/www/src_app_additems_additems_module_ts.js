(self["webpackChunkjustin"] = self["webpackChunkjustin"] || []).push([["src_app_additems_additems_module_ts"],{

/***/ 4267:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DestinationType": () => (/* binding */ DestinationType),
/* harmony export */   "EncodingType": () => (/* binding */ EncodingType),
/* harmony export */   "MediaType": () => (/* binding */ MediaType),
/* harmony export */   "PictureSourceType": () => (/* binding */ PictureSourceType),
/* harmony export */   "PopoverArrowDirection": () => (/* binding */ PopoverArrowDirection),
/* harmony export */   "Direction": () => (/* binding */ Direction),
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 399);




var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var Camera = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2,
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1,
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2,
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2,
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15,
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1,
        };
        return _this;
    }
    Camera.prototype.getPicture = function (options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    Camera.prototype.cleanup = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    Camera.pluginName = "Camera";
    Camera.plugin = "cordova-plugin-camera";
    Camera.pluginRef = "navigator.camera";
    Camera.repo = "https://github.com/apache/cordova-plugin-camera";
    Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
Camera.ɵfac = /*@__PURE__*/ function () { var ɵCamera_BaseFactory; return function Camera_Factory(t) { return (ɵCamera_BaseFactory || (ɵCamera_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](Camera)))(t || Camera); }; }();
Camera.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Camera, factory: function (t) { return Camera.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Camera, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return Camera;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY2FtZXJhL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtBQUMxQixJQUFDLDZEQUFZLENBQUE7QUFBQyxJQUNiLDZEQUFRLENBQUE7QUFBQyxJQUNULGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0FBQ3ZCLElBQUMsK0NBQVEsQ0FBQTtBQUFDLElBQ1QsNkNBQUcsQ0FBQTtBQUNMLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUVELE1BQU0sQ0FBTixJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7QUFDcEIsSUFBQywrQ0FBVyxDQUFBO0FBQUMsSUFDWiwyQ0FBSyxDQUFBO0FBQUMsSUFDTixpREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUpXLFNBQVMsS0FBVCxTQUFTLFFBSXBCO0FBRUQsTUFBTSxDQUFOLElBQVksaUJBSVg7QUFKRCxXQUFZLGlCQUFpQjtBQUM1QixJQUFDLHlFQUFnQixDQUFBO0FBQUMsSUFDakIsNkRBQU0sQ0FBQTtBQUFDLElBQ1AsK0VBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUk1QjtBQUVELE1BQU0sQ0FBTixJQUFZLHFCQU1YO0FBTkQsV0FBWSxxQkFBcUI7QUFDaEMsSUFBQyx5RUFBWSxDQUFBO0FBQUMsSUFDYiw2RUFBVSxDQUFBO0FBQUMsSUFDWCw2RUFBVSxDQUFBO0FBQUMsSUFDWCwrRUFBVyxDQUFBO0FBQUMsSUFDWiwyRUFBUyxDQUFBO0FBQ1gsQ0FBQyxFQU5XLHFCQUFxQixLQUFyQixxQkFBcUIsUUFNaEM7QUFFRCxNQUFNLENBQU4sSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0FBQ3BCLElBQUMseUNBQVEsQ0FBQTtBQUFDLElBQ1QsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjtBQUNEO0FBSVEsSUFpRG9CLDBCQUFpQjtBQUFDO0FBRTlCO0FBR0ssUUFKbkI7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLHFCQUFlLEdBQUc7QUFDcEIsWUFBSSxnS0FBZ0s7QUFDcEssWUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNmLFlBQUksNEVBQTRFO0FBQ2hGLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixZQUFJLDBEQUEwRDtBQUM5RCxZQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLGtCQUFZLEdBQUc7QUFDakIsWUFBSSxnQ0FBZ0M7QUFDcEMsWUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLFlBQUksK0JBQStCO0FBQ25DLFlBQUksR0FBRyxFQUFFLENBQUM7QUFDVixTQUFHLENBQUM7QUFDSixRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBRSxlQUFTLEdBQUc7QUFDZCxZQUFJLHdHQUF3RztBQUM1RyxZQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsWUFBSSxzREFBc0Q7QUFDMUQsWUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLFlBQUksMkNBQTJDO0FBQy9DLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixTQUFHLENBQUM7QUFDSixRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBRSx1QkFBaUIsR0FBRztBQUN0QixZQUFJLDJFQUEyRTtBQUMvRSxZQUFJLFlBQVksRUFBRSxDQUFDO0FBQ25CLFlBQUksK0JBQStCO0FBQ25DLFlBQUksTUFBTSxFQUFFLENBQUM7QUFDYixZQUFJLDhFQUE4RTtBQUNsRixZQUFJLGVBQWUsRUFBRSxDQUFDO0FBQ3RCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLDJCQUFxQixHQUFHO0FBQzFCLFlBQUksUUFBUSxFQUFFLENBQUM7QUFDZixZQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLFlBQUksVUFBVSxFQUFFLENBQUM7QUFDakIsWUFBSSxXQUFXLEVBQUUsQ0FBQztBQUNsQixZQUFJLFNBQVMsRUFBRSxFQUFFO0FBQ2pCLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLGVBQVMsR0FBRztBQUNkLFlBQUksaUNBQWlDO0FBQ3JDLFlBQUksSUFBSSxFQUFFLENBQUM7QUFDWCxZQUFJLGtDQUFrQztBQUN0QyxZQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osU0FBRyxDQUFDO0FBQ0o7QUFFZTtBQUFNLElBT25CLDJCQUFVLGFBQUMsT0FBdUI7QUFLUyxJQU8zQyx3QkFBTztBQUk0QztBQUFrQztBQUE2QztBQUEyQztBQUFxRTswQ0E3Rm5QLFVBQVU7Ozs7MEJBQ0w7QUFBQyxpQkEvS1A7QUFBRSxFQStLMEIsaUJBQWlCO0FBQzVDLFNBRFksTUFBTTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhT3B0aW9ucyB7XG4gIC8qKiBQaWN0dXJlIHF1YWxpdHkgaW4gcmFuZ2UgMC0xMDAuIERlZmF1bHQgaXMgNTAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS4gRGVmYXVsdCBpcyBGSUxFX1VSSS5cbiAgICogICAgICBEQVRBX1VSTCA6IDAsICAgUmV0dXJuIGltYWdlIGFzIGJhc2U2NC1lbmNvZGVkIHN0cmluZyAoREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlKSxcbiAgICogICAgICBGSUxFX1VSSSA6IDEsICAgUmV0dXJuIGltYWdlIGZpbGUgVVJJLFxuICAgKiAgICAgIE5BVElWRV9VUkkgOiAyICBSZXR1cm4gaW1hZ2UgbmF0aXZlIFVSSVxuICAgKiAgICAgICAgICAoZS5nLiwgYXNzZXRzLWxpYnJhcnk6Ly8gb24gaU9TIG9yIGNvbnRlbnQ6Ly8gb24gQW5kcm9pZClcbiAgICovXG4gIGRlc3RpbmF0aW9uVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNldCB0aGUgc291cmNlIG9mIHRoZSBwaWN0dXJlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS4gRGVmYXVsdCBpcyBDQU1FUkEuXG4gICAqICAgICAgUEhPVE9MSUJSQVJZIDogMCxcbiAgICogICAgICBDQU1FUkEgOiAxLFxuICAgKiAgICAgIFNBVkVEUEhPVE9BTEJVTSA6IDJcbiAgICovXG4gIHNvdXJjZVR5cGU/OiBudW1iZXI7XG4gIC8qKiBBbGxvdyBzaW1wbGUgZWRpdGluZyBvZiBpbWFnZSBiZWZvcmUgc2VsZWN0aW9uLiAqL1xuICBhbGxvd0VkaXQ/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSByZXR1cm5lZCBpbWFnZSBmaWxlJ3MgZW5jb2RpbmcuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkVuY29kaW5nVHlwZS4gRGVmYXVsdCBpcyBKUEVHXG4gICAqICAgICAgSlBFRyA6IDAgICAgUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZVxuICAgKiAgICAgIFBORyA6IDEgICAgIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZVxuICAgKi9cbiAgZW5jb2RpbmdUeXBlPzogbnVtYmVyO1xuICAvKipcbiAgICogV2lkdGggaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRIZWlnaHQuXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBIZWlnaHQgaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRXaWR0aC5cbiAgICogQXNwZWN0IHJhdGlvIHJlbWFpbnMgY29uc3RhbnQuXG4gICAqL1xuICB0YXJnZXRIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHR5cGUgb2YgbWVkaWEgdG8gc2VsZWN0IGZyb20uIE9ubHkgd29ya3Mgd2hlbiBQaWN0dXJlU291cmNlVHlwZVxuICAgKiBpcyBQSE9UT0xJQlJBUlkgb3IgU0FWRURQSE9UT0FMQlVNLiBEZWZpbmVkIGluIENhbWVyYS5NZWRpYVR5cGVcbiAgICogICAgICBQSUNUVVJFOiAwICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuXG4gICAqICAgICAgICAgIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZVxuICAgKiAgICAgIFZJREVPOiAxICAgICAgICBhbGxvdyBzZWxlY3Rpb24gb2YgdmlkZW8gb25seSwgV0lMTCBBTFdBWVMgUkVUVVJOIEZJTEVfVVJJXG4gICAqICAgICAgQUxMTUVESUEgOiAyICAgIGFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlc1xuICAgKi9cbiAgbWVkaWFUeXBlPzogbnVtYmVyO1xuICAvKiogUm90YXRlIHRoZSBpbWFnZSB0byBjb3JyZWN0IGZvciB0aGUgb3JpZW50YXRpb24gb2YgdGhlIGRldmljZSBkdXJpbmcgY2FwdHVyZS4gKi9cbiAgY29ycmVjdE9yaWVudGF0aW9uPzogYm9vbGVhbjtcbiAgLyoqIFNhdmUgdGhlIGltYWdlIHRvIHRoZSBwaG90byBhbGJ1bSBvbiB0aGUgZGV2aWNlIGFmdGVyIGNhcHR1cmUuICovXG4gIHNhdmVUb1Bob3RvQWxidW0/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSBjYW1lcmEgdG8gdXNlIChmcm9udC0gb3IgYmFjay1mYWNpbmcpLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EaXJlY3Rpb24uIERlZmF1bHQgaXMgQkFDSy5cbiAgICogICAgICBCQUNLOiAwXG4gICAqICAgICAgRlJPTlQ6IDFcbiAgICovXG4gIGNhbWVyYURpcmVjdGlvbj86IG51bWJlcjtcbiAgLyoqIGlPUy1vbmx5IG9wdGlvbnMgdGhhdCBzcGVjaWZ5IHBvcG92ZXIgbG9jYXRpb24gaW4gaVBhZC4gRGVmaW5lZCBpbiBDYW1lcmFQb3BvdmVyT3B0aW9ucy4gKi9cbiAgcG9wb3Zlck9wdGlvbnM/OiBDYW1lcmFQb3BvdmVyT3B0aW9ucztcbn1cblxuLyoqXG4gKiBpT1Mtb25seSBwYXJhbWV0ZXJzIHRoYXQgc3BlY2lmeSB0aGUgYW5jaG9yIGVsZW1lbnQgbG9jYXRpb24gYW5kIGFycm93IGRpcmVjdGlvblxuICogb2YgdGhlIHBvcG92ZXIgd2hlbiBzZWxlY3RpbmcgaW1hZ2VzIGZyb20gYW4gaVBhZCdzIGxpYnJhcnkgb3IgYWxidW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUG9wb3Zlck9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBEaXJlY3Rpb24gdGhlIGFycm93IG9uIHRoZSBwb3BvdmVyIHNob3VsZCBwb2ludC4gRGVmaW5lZCBpbiBDYW1lcmEuUG9wb3ZlckFycm93RGlyZWN0aW9uXG4gICAqIE1hdGNoZXMgaU9TIFVJUG9wb3ZlckFycm93RGlyZWN0aW9uIGNvbnN0YW50cy5cbiAgICogICAgICBBUlJPV19VUCA6IDEsXG4gICAqICAgICAgQVJST1dfRE9XTiA6IDIsXG4gICAqICAgICAgQVJST1dfTEVGVCA6IDQsXG4gICAqICAgICAgQVJST1dfUklHSFQgOiA4LFxuICAgKiAgICAgIEFSUk9XX0FOWSA6IDE1XG4gICAqL1xuICBhcnJvd0RpcjogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBEZXN0aW5hdGlvblR5cGUge1xuICBEQVRBX1VSTCA9IDAsXG4gIEZJTEVfVVJMLFxuICBOQVRJVkVfVVJJLFxufVxuXG5leHBvcnQgZW51bSBFbmNvZGluZ1R5cGUge1xuICBKUEVHID0gMCxcbiAgUE5HLFxufVxuXG5leHBvcnQgZW51bSBNZWRpYVR5cGUge1xuICBQSUNUVVJFID0gMCxcbiAgVklERU8sXG4gIEFMTE1FRElBLFxufVxuXG5leHBvcnQgZW51bSBQaWN0dXJlU291cmNlVHlwZSB7XG4gIFBIT1RPTElCUkFSWSA9IDAsXG4gIENBTUVSQSxcbiAgU0FWRURQSE9UT0FMQlVNLFxufVxuXG5leHBvcnQgZW51bSBQb3BvdmVyQXJyb3dEaXJlY3Rpb24ge1xuICBBUlJPV19VUCA9IDEsXG4gIEFSUk9XX0RPV04sXG4gIEFSUk9XX0xFRlQsXG4gIEFSUk9XX1JJR0hULFxuICBBUlJPV19BTlksXG59XG5cbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XG4gIEJBQ0sgPSAwLFxuICBGUk9OVCxcbn1cblxuLyoqXG4gKiBAbmFtZSBDYW1lcmFcbiAqIEBwcmVtaWVyIGNhbWVyYVxuICogQGRlc2NyaXB0aW9uXG4gKiBUYWtlIGEgcGhvdG8gb3IgY2FwdHVyZSB2aWRlby5cbiAqXG4gKiBSZXF1aXJlcyB0aGUgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQ29yZG92YSBDYW1lcmEgUGx1Z2luIERvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhKS5cbiAqXG4gKiBbV2FybmluZ10gU2luY2UgSU9TIDEwIHRoZSBjYW1lcmEgcmVxdWlyZXMgcGVybWlzc2lvbnMgdG8gYmUgcGxhY2VkIGluIHlvdXIgY29uZmlnLnhtbCBhZGRcbiAqIGBgYHhtbFxuICogPGNvbmZpZy1maWxlIHBhcmVudD1cIk5TQ2FtZXJhVXNhZ2VEZXNjcmlwdGlvblwiIHBsYXRmb3JtPVwiaW9zXCIgdGFyZ2V0PVwiKi1JbmZvLnBsaXN0XCI+XG4gKiAgPHN0cmluZz5Zb3UgY2FuIHRha2UgcGhvdG9zPC9zdHJpbmc+XG4gKiA8L2NvbmZpZy1maWxlPlxuICogYGBgXG4gKiBpbnNpZGUgb2YgdGhlIDxwbGF0Zm9ybSBuYW1lPSdpb3M+IHNlY3Rpb25cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbWVyYSwgQ2FtZXJhT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2FtZXJhL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYW1lcmE6IENhbWVyYSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGNvbnN0IG9wdGlvbnM6IENhbWVyYU9wdGlvbnMgPSB7XG4gKiAgIHF1YWxpdHk6IDEwMCxcbiAqICAgZGVzdGluYXRpb25UeXBlOiB0aGlzLmNhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUkksXG4gKiAgIGVuY29kaW5nVHlwZTogdGhpcy5jYW1lcmEuRW5jb2RpbmdUeXBlLkpQRUcsXG4gKiAgIG1lZGlhVHlwZTogdGhpcy5jYW1lcmEuTWVkaWFUeXBlLlBJQ1RVUkVcbiAqIH1cbiAqXG4gKiB0aGlzLmNhbWVyYS5nZXRQaWN0dXJlKG9wdGlvbnMpLnRoZW4oKGltYWdlRGF0YSkgPT4ge1xuICogIC8vIGltYWdlRGF0YSBpcyBlaXRoZXIgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgb3IgYSBmaWxlIFVSSVxuICogIC8vIElmIGl0J3MgYmFzZTY0IChEQVRBX1VSTCk6XG4gKiAgbGV0IGJhc2U2NEltYWdlID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsJyArIGltYWdlRGF0YTtcbiAqIH0sIChlcnIpID0+IHtcbiAqICAvLyBIYW5kbGUgZXJyb3JcbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQ2FtZXJhT3B0aW9uc1xuICogQ2FtZXJhUG9wb3Zlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDYW1lcmEnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jYW1lcmEnLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuY2FtZXJhJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgZGVzdGluYXRpb24gdHlwZXNcbiAgICovXG4gIERlc3RpbmF0aW9uVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlICovXG4gICAgREFUQV9VUkw6IDAsXG4gICAgLyoqIFJldHVybiBmaWxlIHVyaSAoY29udGVudDovL21lZGlhL2V4dGVybmFsL2ltYWdlcy9tZWRpYS8yIGZvciBBbmRyb2lkKSAqL1xuICAgIEZJTEVfVVJJOiAxLFxuICAgIC8qKiBSZXR1cm4gbmF0aXZlIHVyaSAoZWcuIGFzc2V0LWxpYnJhcnk6Ly8uLi4gZm9yIGlPUykgKi9cbiAgICBOQVRJVkVfVVJJOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRW5jb2RpbmdUeXBlID0ge1xuICAgIC8qKiBSZXR1cm4gSlBFRyBlbmNvZGVkIGltYWdlICovXG4gICAgSlBFRzogMCxcbiAgICAvKiogUmV0dXJuIFBORyBlbmNvZGVkIGltYWdlICovXG4gICAgUE5HOiAxLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgTWVkaWFUeXBlID0ge1xuICAgIC8qKiBBbGxvdyBzZWxlY3Rpb24gb2Ygc3RpbGwgcGljdHVyZXMgb25seS4gREVGQVVMVC4gV2lsbCByZXR1cm4gZm9ybWF0IHNwZWNpZmllZCB2aWEgRGVzdGluYXRpb25UeXBlICovXG4gICAgUElDVFVSRTogMCxcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIE9OTFkgUkVUVVJOUyBVUkwgKi9cbiAgICBWSURFTzogMSxcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIGZyb20gYWxsIG1lZGlhIHR5cGVzICovXG4gICAgQUxMTUVESUE6IDIsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQaWN0dXJlU291cmNlVHlwZSA9IHtcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFBIT1RPTElCUkFSWSBmb3IgQW5kcm9pZCkgKi9cbiAgICBQSE9UT0xJQlJBUlk6IDAsXG4gICAgLyoqIFRha2UgcGljdHVyZSBmcm9tIGNhbWVyYSAqL1xuICAgIENBTUVSQTogMSxcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFNBVkVEUEhPVE9BTEJVTSBmb3IgQW5kcm9pZCkgKi9cbiAgICBTQVZFRFBIT1RPQUxCVU06IDIsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQb3BvdmVyQXJyb3dEaXJlY3Rpb24gPSB7XG4gICAgQVJST1dfVVA6IDEsXG4gICAgQVJST1dfRE9XTjogMixcbiAgICBBUlJPV19MRUZUOiA0LFxuICAgIEFSUk9XX1JJR0hUOiA4LFxuICAgIEFSUk9XX0FOWTogMTUsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBEaXJlY3Rpb24gPSB7XG4gICAgLyoqIFVzZSB0aGUgYmFjay1mYWNpbmcgY2FtZXJhICovXG4gICAgQkFDSzogMCxcbiAgICAvKiogVXNlIHRoZSBmcm9udC1mYWNpbmcgY2FtZXJhICovXG4gICAgRlJPTlQ6IDEsXG4gIH07XG5cbiAgLyoqXG4gICAqIFRha2UgYSBwaWN0dXJlIG9yIHZpZGVvLCBvciBsb2FkIG9uZSBmcm9tIHRoZSBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge0NhbWVyYU9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIHRoYXQgeW91IHdhbnQgdG8gcGFzcyB0byB0aGUgY2FtZXJhLiBFbmNvZGluZyB0eXBlLCBxdWFsaXR5LCBldGMuIFBsYXRmb3JtLXNwZWNpZmljIHF1aXJrcyBhcmUgZGVzY3JpYmVkIGluIHRoZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEjY2FtZXJhb3B0aW9ucy1lcnJhdGEtKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSwgb3IgdGhlIGltYWdlIGZpbGUgVVJJLCBkZXBlbmRpbmcgb24gY2FtZXJhT3B0aW9ucywgb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGdldFBpY3R1cmUob3B0aW9ucz86IENhbWVyYU9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgaW50ZXJtZWRpYXRlIGltYWdlIGZpbGVzIHRoYXQgYXJlIGtlcHQgaW4gdGVtcG9yYXJ5IHN0b3JhZ2UgYWZ0ZXIgY2FsbGluZyBjYW1lcmEuZ2V0UGljdHVyZS5cbiAgICogQXBwbGllcyBvbmx5IHdoZW4gdGhlIHZhbHVlIG9mIENhbWVyYS5zb3VyY2VUeXBlIGVxdWFscyBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuQ0FNRVJBIGFuZCB0aGUgQ2FtZXJhLmRlc3RpbmF0aW9uVHlwZSBlcXVhbHMgQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIGNsZWFudXAoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 9863:
/*!*****************************************************!*\
  !*** ./src/app/additems/additems-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditemsPageRoutingModule": () => (/* binding */ AdditemsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _additems_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./additems.page */ 6347);




const routes = [
    {
        path: '',
        component: _additems_page__WEBPACK_IMPORTED_MODULE_0__.AdditemsPage
    }
];
let AdditemsPageRoutingModule = class AdditemsPageRoutingModule {
};
AdditemsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdditemsPageRoutingModule);



/***/ }),

/***/ 6941:
/*!*********************************************!*\
  !*** ./src/app/additems/additems.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditemsPageModule": () => (/* binding */ AdditemsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _additems_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./additems-routing.module */ 9863);
/* harmony import */ var _additems_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./additems.page */ 6347);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);








let AdditemsPageModule = class AdditemsPageModule {
};
AdditemsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _additems_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdditemsPageRoutingModule
        ],
        declarations: [_additems_page__WEBPACK_IMPORTED_MODULE_1__.AdditemsPage],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera]
    })
], AdditemsPageModule);



/***/ }),

/***/ 6347:
/*!*******************************************!*\
  !*** ./src/app/additems/additems.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditemsPage": () => (/* binding */ AdditemsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_additems_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./additems.page.html */ 3412);
/* harmony import */ var _additems_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./additems.page.scss */ 5964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);








let AdditemsPage = class AdditemsPage {
    constructor(db, route, actionSheetController, toastController, platform, router, camera) {
        this.db = db;
        this.route = route;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.platform = platform;
        this.router = router;
        this.camera = camera;
        this.mode = this.route.snapshot.paramMap.get("mode");
        this.id = this.route.snapshot.paramMap.get("id");
        this.title = {
            "1": "Add Item",
            "2": "Item Details",
            "3": "Edit Item",
        };
        this.item = {};
        this.item_image = "./assets/svg/add_photo.svg";
        this.item_price = null;
        this.item_stock = null;
        this.item_min = null;
        this.item_promo = null;
        this.page_title = this.title[this.mode];
    }
    ngOnInit() {
        this.db.getDatabaseState().subscribe(rdy => {
            if (rdy) {
                this.items = this.db.getItems();
            }
        });
        if (this.mode == '2' || this.mode == '3') {
            this.db.getItem(this.id).then((data) => {
                this.item_name = data["name"];
                this.item_stock = data["stock"];
                this.item_price = data["price"];
                this.item_min = data["min_purc"];
                this.item_promo = data["promo_price"];
                this.item_image = data["image"];
            });
        }
    }
    takePhoto() {
        const options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = "data:image/jpeg;base64," + imageData;
            this.item_image = base64Image;
        }, (err) => {
            console.log(err);
        });
    }
    choosePhoto() {
        const gelleryOptions = {
            quality: 50,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
        };
        this.camera.getPicture(gelleryOptions).then((imgData) => {
            // console.log("image data =>  ", imgData);
            let base64Image = "data:image/jpeg;base64," + imgData;
            this.item_image = base64Image;
        }, (err) => {
            console.log(err);
        });
    }
    changeImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Option",
                buttons: [
                    {
                        text: "Take Picture",
                        icon: "camera",
                        handler: () => {
                            this.takePhoto();
                        },
                    },
                    {
                        text: "Choose from Gallery",
                        icon: "albums",
                        handler: () => {
                            this.choosePhoto();
                        },
                    },
                    {
                        text: "Cancel",
                        icon: "close",
                        role: "cancel",
                        handler: () => {
                            console.log("Cancelled");
                        },
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
    item_edit() {
        this.router.navigate(["/additems", { mode: 3, id: this.id }]);
    }
    item_save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.item_name == null) {
                let toast = yield this.toastController.create({
                    mode: "ios",
                    message: "Name cannot be empty!",
                    duration: 1000,
                });
                yield toast.present();
                return false;
            }
            if (this.item_price == null) {
                let toast = yield this.toastController.create({
                    mode: "ios",
                    message: "Price cannot be empty!",
                    duration: 1000,
                });
                yield toast.present();
                return false;
            }
            if (this.item_stock == null || this.item_stock == 0) {
                let toast = yield this.toastController.create({
                    mode: "ios",
                    message: "Stock cannot be empty!",
                    duration: 1000,
                });
                yield toast.present();
                return false;
            }
            if (this.item_stock % 1 > 0) {
                let toast = yield this.toastController.create({
                    mode: "ios",
                    message: "Stock cannot be decimal!",
                    duration: 1000,
                });
                yield toast.present();
                return false;
            }
            if ((this.item_min == null || this.item_min == 0) && this.item_promo != null) {
                let toast = yield this.toastController.create({
                    mode: "ios",
                    message: "Please enter Min. purchase for promotion price!",
                    duration: 1000,
                });
                yield toast.present();
                return false;
            }
            if ((this.item_min != null && this.item_min != 0) && this.item_promo == null) {
                let toast = yield this.toastController.create({
                    mode: "ios",
                    message: "Promotion price cannot be empty!",
                    duration: 1000,
                });
                yield toast.present();
                return false;
            }
            if (this.item_min != null || this.item_min != 0) {
                if (this.item_min % 1 > 0 || this.item_min == 0) {
                    let toast = yield this.toastController.create({
                        mode: "ios",
                        message: "Min. pruchase cannot be decimal or 0!",
                        duration: 1000,
                    });
                    yield toast.present();
                    return false;
                }
            }
            if (this.mode === '1') {
                let itemObj = {
                    name: this.item_name,
                    price: this.item_price,
                    stock: this.item_stock,
                    min_purc: this.item_min,
                    promo: this.item_promo,
                    img: this.item_image,
                    date: this.db.getDate()
                };
                this.db.addItems(itemObj).then((data) => {
                    if (data["insertId"]) {
                        this.router.navigate(["/tabs/tab2"], { replaceUrl: true });
                    }
                });
            }
            else if (this.mode === '3') {
                let itemObj = {
                    id: this.id,
                    name: this.item_name,
                    price: this.item_price,
                    stock: this.item_stock,
                    min_purc: this.item_min,
                    promo: this.item_promo,
                    img: this.item_image
                };
                this.db.updateItems(itemObj).then((data) => {
                    this.router.navigate(["/tabs/tab2"], { replaceUrl: true });
                })
                    .catch((e) => {
                    return "Error" + JSON.stringify(e);
                });
            }
        });
    }
};
AdditemsPage.ctorParameters = () => [
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera }
];
AdditemsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-additems',
        template: _raw_loader_additems_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_additems_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdditemsPage);



/***/ }),

/***/ 5964:
/*!*********************************************!*\
  !*** ./src/app/additems/additems.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-img {\n  border-radius: 20px !important;\n  overflow: hidden;\n  width: 120px;\n  height: 120px;\n  min-width: 80px !important;\n  max-width: 80px !important;\n  max-width: 120px !important;\n  max-height: 120px !important;\n  margin: 5px auto;\n  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n.input-border ion-input {\n  border: #d4d4d4 2px solid;\n  border-radius: 15px;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  margin-top: 2%;\n}\n\n.input-border ion-label {\n  font-size: 20px;\n}\n\n.input-border div {\n  font-size: 12px;\n}\n\n.input-border:hover ion-input {\n  border-color: #494949;\n}\n\n.img_container:hover ion-input {\n  border-color: #494949;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGl0ZW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtFQUNBLHNEQUFBO0VBQ0EsbURBQUE7QUFDSjs7QUFHSTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUFSOztBQUdJO0VBQ0ksZUFBQTtBQURSOztBQUlJO0VBQ0ksZUFBQTtBQUZSOztBQU9JO0VBQ0kscUJBQUE7QUFKUjs7QUFTSTtFQUNJLHFCQUFBO0FBTlIiLCJmaWxlIjoiYWRkaXRlbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1pbi13aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5pbnB1dC1ib3JkZXIge1xyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgICBib3JkZXI6IHJnYigyMTIsIDIxMiwgMjEyKSAycHggc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnB1dC1ib3JkZXI6aG92ZXIge1xyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYig3MywgNzMsIDczKTtcclxuICAgIH1cclxufVxyXG5cclxuLmltZ19jb250YWluZXI6aG92ZXIge1xyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYig3MywgNzMsIDczKTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 3412:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/additems/additems.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" mode=\"ios\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"mode == '2'\" (click)=\"item_edit()\"><ion-icon name=\"create\"></ion-icon></ion-button>\n      <ion-button *ngIf=\"mode == '1' || mode == '3'\" (click)=\"item_save()\"><ion-icon name=\"save\"></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-title>{{page_title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div align=\"center\" class=\"pic-position\">\n          <ion-img \n            [src]=\"item_image\"\n            (click)=\"changeImage()\">\n          </ion-img>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Item Name*</ion-label>\n          <ion-input rows=\"1\" [readonly]=\"mode == '2'\" [(ngModel)]=\"item_name\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Price*</ion-label>\n          <ion-input rows=\"1\" [readonly]=\"mode == '2'\" [(ngModel)]=\"item_price\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Stock*</ion-label>\n          <ion-input rows=\"1\" [readonly]=\"mode == '2'\" [(ngModel)]=\"item_stock\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Min. Purchase for Promotion</ion-label>\n          <ion-input rows=\"1\" [readonly]=\"mode == '2'\" [(ngModel)]=\"item_min\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\" class=\"input-border\">\n          <ion-label position=\"stacked\">Promotion Price</ion-label>\n          <ion-input rows=\"1\" [readonly]=\"mode == '2'\" [(ngModel)]=\"item_promo\" type=\"number\"></ion-input>\n          <div>**Min. Purchase not in 0 or empty</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_additems_additems_module_ts.js.map