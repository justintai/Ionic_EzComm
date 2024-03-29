cordova.define("cordova-plugin-hms-account.HMSAccountAuthManager", function(require, exports, module) {
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAuthScopes = exports.containScopes = exports.getAuthResultWithScope = exports.getAuthResult = void 0;
const utils_1 = require("./utils");
function getAuthResult() {
    return utils_1.asyncExec('HMSAccountAuthManager', 'getAuthResult', []);
}
exports.getAuthResult = getAuthResult;
function getAuthResultWithScope(authScopeList) {
    return utils_1.asyncExec('HMSAccountAuthManager', 'getAuthResultWithScope', [authScopeList]);
}
exports.getAuthResultWithScope = getAuthResultWithScope;
function containScopes(authAccount, authScopeList) {
    return utils_1.asyncExec('HMSAccountAuthManager', 'containScopes', [authAccount, authScopeList]);
}
exports.containScopes = containScopes;
function addAuthScopes(requestCode, authScopeList) {
    return utils_1.asyncExec('HMSAccountAuthManager', 'addAuthScopes', [requestCode, authScopeList]);
}
exports.addAuthScopes = addAuthScopes;
//# sourceMappingURL=HMSAccountAuthManager.js.map
});
