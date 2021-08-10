cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-hms-account.utils",
      "file": "plugins/cordova-plugin-hms-account/www/utils.js",
      "pluginId": "cordova-plugin-hms-account"
    },
    {
      "id": "cordova-plugin-hms-account.HMSCommonTypes",
      "file": "plugins/cordova-plugin-hms-account/www/HMSCommonTypes.js",
      "pluginId": "cordova-plugin-hms-account",
      "clobbers": [
        "HMSCommonTypes"
      ]
    },
    {
      "id": "cordova-plugin-hms-account.HMSAccount",
      "file": "plugins/cordova-plugin-hms-account/www/HMSAccount.js",
      "pluginId": "cordova-plugin-hms-account",
      "clobbers": [
        "HMSAccount"
      ]
    },
    {
      "id": "cordova-plugin-hms-account.HMSHuaweiIdAuthButton",
      "file": "plugins/cordova-plugin-hms-account/www/HMSHuaweiIdAuthButton.js",
      "pluginId": "cordova-plugin-hms-account",
      "clobbers": [
        "HMSHuaweiIdAuthButton"
      ]
    },
    {
      "id": "cordova-plugin-hms-account.HMSHuaweiIdAuthManager",
      "file": "plugins/cordova-plugin-hms-account/www/HMSHuaweiIdAuthManager.js",
      "pluginId": "cordova-plugin-hms-account",
      "clobbers": [
        "HMSHuaweiIdAuthManager"
      ]
    },
    {
      "id": "cordova-plugin-hms-account.HMSHuaweiIdAuthTool",
      "file": "plugins/cordova-plugin-hms-account/www/HMSHuaweiIdAuthTool.js",
      "pluginId": "cordova-plugin-hms-account",
      "clobbers": [
        "HMSHuaweiIdAuthTool"
      ]
    },
    {
      "id": "cordova-plugin-hms-account.HMSNetworkTool",
      "file": "plugins/cordova-plugin-hms-account/www/HMSNetworkTool.js",
      "pluginId": "cordova-plugin-hms-account",
      "clobbers": [
        "HMSNetworkTool"
      ]
    },
    {
      "id": "cordova-plugin-hms-account.HMSReadSMSManager",
      "file": "plugins/cordova-plugin-hms-account/www/HMSReadSMSManager.js",
      "pluginId": "cordova-plugin-hms-account",
      "clobbers": [
        "HMSReadSMSManager"
      ]
    },
    {
      "id": "cordova-plugin-hms-account.HMSAccountAuthService",
      "file": "plugins/cordova-plugin-hms-account/www/HMSAccountAuthService.js",
      "pluginId": "cordova-plugin-hms-account",
      "clobbers": [
        "HMSAccountAuthService"
      ]
    },
    {
      "id": "cordova-plugin-hms-account.HMSAccountAuthManager",
      "file": "plugins/cordova-plugin-hms-account/www/HMSAccountAuthManager.js",
      "pluginId": "cordova-plugin-hms-account",
      "clobbers": [
        "HMSAccountAuthManager"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-sqlite-storage.SQLitePlugin",
      "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-storage",
      "clobbers": [
        "SQLitePlugin"
      ]
    },
    {
      "id": "uk.co.workingedge.cordova.plugin.sqliteporter.sqlitePorter",
      "file": "plugins/uk.co.workingedge.cordova.plugin.sqliteporter/www/sqlitePorter.js",
      "pluginId": "uk.co.workingedge.cordova.plugin.sqliteporter",
      "clobbers": [
        "cordova.plugins.sqlitePorter"
      ]
    },
    {
      "id": "cordova-plugin-app-version.AppVersionPlugin",
      "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
      "pluginId": "cordova-plugin-app-version",
      "clobbers": [
        "cordova.getAppVersion"
      ]
    },
    {
      "id": "cordova-plugin-hms-scan.HMSScan",
      "file": "plugins/cordova-plugin-hms-scan/www/HMSScan.js",
      "pluginId": "cordova-plugin-hms-scan",
      "clobbers": [
        "HMSScan"
      ]
    },
    {
      "id": "cordova-plugin-hms-scan.CustomView",
      "file": "plugins/cordova-plugin-hms-scan/www/CustomView.js",
      "pluginId": "cordova-plugin-hms-scan",
      "clobbers": [
        "CustomView"
      ]
    },
    {
      "id": "cordova-plugin-hms-scan.MultiProcessor",
      "file": "plugins/cordova-plugin-hms-scan/www/MultiProcessor.js",
      "pluginId": "cordova-plugin-hms-scan",
      "clobbers": [
        "MultiProcessor"
      ]
    },
    {
      "id": "cordova-plugin-hms-scan.interfaces",
      "file": "plugins/cordova-plugin-hms-scan/www/interfaces.js",
      "pluginId": "cordova-plugin-hms-scan"
    },
    {
      "id": "cordova-plugin-hms-scan.index",
      "file": "plugins/cordova-plugin-hms-scan/www/index.js",
      "pluginId": "cordova-plugin-hms-scan"
    },
    {
      "id": "cordova-plugin-hms-scan.util",
      "file": "plugins/cordova-plugin-hms-scan/www/util.js",
      "pluginId": "cordova-plugin-hms-scan"
    },
    {
      "id": "cordova-plugin-hms-ml.HMSMLKit",
      "file": "plugins/cordova-plugin-hms-ml/www/HMSMLKit.js",
      "pluginId": "cordova-plugin-hms-ml",
      "clobbers": [
        "HMSMLKit"
      ]
    },
    {
      "id": "cordova-plugin-hms-ml.HMSFaceBodyProvider",
      "file": "plugins/cordova-plugin-hms-ml/www/HMSFaceBodyProvider.js",
      "pluginId": "cordova-plugin-hms-ml",
      "clobbers": [
        "HMSFaceBodyProvider"
      ]
    },
    {
      "id": "cordova-plugin-hms-ml.HMSImageServiceProvider",
      "file": "plugins/cordova-plugin-hms-ml/www/HMSImageServiceProvider.js",
      "pluginId": "cordova-plugin-hms-ml",
      "clobbers": [
        "HMSImageServiceProvider"
      ]
    },
    {
      "id": "cordova-plugin-hms-ml.HMSLanguageServiceProvider",
      "file": "plugins/cordova-plugin-hms-ml/www/HMSLanguageServiceProvider.js",
      "pluginId": "cordova-plugin-hms-ml",
      "clobbers": [
        "HMSLanguageServiceProvider"
      ]
    },
    {
      "id": "cordova-plugin-hms-ml.HMSTextServiceProvider",
      "file": "plugins/cordova-plugin-hms-ml/www/HMSTextServiceProvider.js",
      "pluginId": "cordova-plugin-hms-ml",
      "clobbers": [
        "HMSTextServiceProvider"
      ]
    },
    {
      "id": "cordova-plugin-hms-ml.HMSVoiceServiceProvider",
      "file": "plugins/cordova-plugin-hms-ml/www/HMSVoiceServiceProvider.js",
      "pluginId": "cordova-plugin-hms-ml",
      "clobbers": [
        "HMSVoiceServiceProvider"
      ]
    },
    {
      "id": "cordova-plugin-hms-ml.util",
      "file": "plugins/cordova-plugin-hms-ml/www/util.js",
      "pluginId": "cordova-plugin-hms-ml"
    },
    {
      "id": "cordova-plugin-hms-ml.Interfaces",
      "file": "plugins/cordova-plugin-hms-ml/www/Interfaces.js",
      "pluginId": "cordova-plugin-hms-ml"
    },
    {
      "id": "cordova-plugin-hms-ml.index",
      "file": "plugins/cordova-plugin-hms-ml/www/index.js",
      "pluginId": "cordova-plugin-hms-ml"
    },
    {
      "id": "cordova-plugin-hms-map.HMSMap",
      "file": "plugins/cordova-plugin-hms-map/www/HMSMap.js",
      "pluginId": "cordova-plugin-hms-map",
      "clobbers": [
        "HMSMap"
      ]
    },
    {
      "id": "cordova-plugin-hms-map.circle",
      "file": "plugins/cordova-plugin-hms-map/www/circle.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-map.groundOverlay",
      "file": "plugins/cordova-plugin-hms-map/www/groundOverlay.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-map.interfaces",
      "file": "plugins/cordova-plugin-hms-map/www/interfaces.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-map.marker",
      "file": "plugins/cordova-plugin-hms-map/www/marker.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-map.polygon",
      "file": "plugins/cordova-plugin-hms-map/www/polygon.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-map.polyline",
      "file": "plugins/cordova-plugin-hms-map/www/polyline.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-map.tileOverlay",
      "file": "plugins/cordova-plugin-hms-map/www/tileOverlay.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-map.utils",
      "file": "plugins/cordova-plugin-hms-map/www/utils.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-site.HMSSite",
      "file": "plugins/cordova-plugin-hms-site/www/HMSSite.js",
      "pluginId": "cordova-plugin-hms-site",
      "clobbers": [
        "HMSSite"
      ]
    },
    {
      "id": "cordova-plugin-hms-site.interfaces",
      "file": "plugins/cordova-plugin-hms-site/www/interfaces.js",
      "pluginId": "cordova-plugin-hms-site"
    },
    {
      "id": "cordova-plugin-hms-site.utils",
      "file": "plugins/cordova-plugin-hms-site/www/utils.js",
      "pluginId": "cordova-plugin-hms-site"
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-ionic-webview": "4.2.1",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-hms-account": "5.2.0-300",
    "cordova-plugin-camera": "5.0.2",
    "cordova-sqlite-storage": "6.0.0",
    "uk.co.workingedge.cordova.plugin.sqliteporter": "1.1.1",
    "cordova-plugin-app-version": "0.1.12",
    "cordova-plugin-hms-scan": "1.3.1-301",
    "cordova-plugin-hms-ml": "2.0.5-301",
    "cordova-plugin-hms-map": "5.2.0-302",
    "cordova-plugin-hms-site": "5.2.0-300"
  };
});