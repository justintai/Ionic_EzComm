cordova.define("cordova-plugin-hms-account.HMSAccountAuthService", function(require, exports, module) {
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
exports.getChannel = exports.silentSignIn = exports.cancelAuthorization = exports.signOut = exports.signIn = void 0;
const utils_1 = require("./utils");
function signIn(signInData) {
    return utils_1.asyncExec('HMSAccountAuthService', 'signIn', [signInData ? signInData : []]);
}
exports.signIn = signIn;
function signOut() {
    return utils_1.asyncExec('HMSAccountAuthService', 'signOut', []);
}
exports.signOut = signOut;
function cancelAuthorization() {
    return utils_1.asyncExec('HMSAccountAuthService', 'cancelAuthorization', []);
}
exports.cancelAuthorization = cancelAuthorization;
function silentSignIn(authParams) {
    return utils_1.asyncExec('HMSAccountAuthService', 'silentSignIn', [authParams]);
}
exports.silentSignIn = silentSignIn;
function getChannel() {
    return utils_1.asyncExec('HMSAccountAuthService', 'getChannel', []);
}
exports.getChannel = getChannel;
//# sourceMappingURL=HMSAccountAuthService.js.map
});