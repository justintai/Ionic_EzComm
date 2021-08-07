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
    "uk.co.workingedge.cordova.plugin.sqliteporter": "1.1.1"
  };
});