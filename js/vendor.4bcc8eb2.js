(globalThis["webpackChunkfirebaseaut"]=globalThis["webpackChunkfirebaseaut"]||[]).push([[736],{202:(e,t,n)=>{"use strict";n.d(t,{hJ:()=>nt,Xb:()=>pt,v0:()=>Tr,Aj:()=>yt,e5:()=>mt,rh:()=>yn,w7:()=>bt});var r=n(5505),i=n(8897),s=n(9795);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(3513);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new r.LL("auth","Firebase",l()),h=new s.Yd("@firebase/auth");function d(e,...t){h.logLevel<=s["in"].ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw v(e,...t)}function p(e,...t){return v(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},c()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function g(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&f(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function y(e,t,...n){if(!e)throw v(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function w(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function E(e){w(e instanceof Function,"Expected a class definition");let t=_.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function k(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(E);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===x()||"https:"===x()}function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function F(e,t,n,i,s={}){return M(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),N.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))}))}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},L),t);try{const t=new V(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw j(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw j(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(s){if(s instanceof r.ZR)throw s;f(e,"network-request-failed")}}async function q(e,t,n,r,i={}){const s=await F(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?O(e.config,i):`${e.config.apiScheme}://${i}`}class V{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),P.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return F(e,"POST","/v1/accounts:delete",t)}async function $(e,t){return F(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=W(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:z(K(s.auth_time)),issuedAtTime:z(K(s.iat)),expirationTime:z(K(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function K(e){return 1e3*Number(e)}function W(e){var t;const[n,i,s]=e.split(".");if(void 0===n||void 0===i||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(i);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===(t=o)||void 0===t?void 0:t.toString()),null}}function G(e){const t=W(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&Q(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Q({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){var t;const n=e.auth,r=await e.getIdToken(),i=await J(e,$(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ne(s.providerUserInfo):[],a=te(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!l&&c,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new X(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function ee(e){const t=(0,r.m9)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function te(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ne(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=U(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await re(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ie;return n&&(y("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ie,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await J(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:T}=t;y(b&&T,e,"internal-error");const k=ie.fromJSON(this.name,T);y("string"===typeof b,e,"internal-error"),se(u,e.name),se(h,e.name),y("boolean"===typeof w,e,"internal-error"),y("boolean"===typeof _,e,"internal-error"),se(d,e.name),se(f,e.name),se(p,e.name),se(m,e.name),se(g,e.name),se(v,e.name);const S=new oe({uid:b,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ie;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Z(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ae.type="NONE";const le=ae;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(E(le),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||E(le);const s=ce(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){const n=oe._fromJSON(e,t);c!==i&&(o=n),i=c;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(me(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ve(t))return"Blackberry";if(ye(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||pe(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,r.z$)()){return/firefox\//i.test(e)}function fe(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pe(e=(0,r.z$)()){return/crios\//i.test(e)}function me(e=(0,r.z$)()){return/iemobile/i.test(e)}function ge(e=(0,r.z$)()){return/android/i.test(e)}function ve(e=(0,r.z$)()){return/blackberry/i.test(e)}function ye(e=(0,r.z$)()){return/webos/i.test(e)}function be(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function we(e=(0,r.z$)()){var t;return be(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return(0,r.w1)()&&10===document.documentMode}function Ee(e=(0,r.z$)()){return be(e)||ge(e)||ye(e)||ve(e)||/windows phone/i.test(e)||me(e)}function Te(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e,t=[]){let n;switch(e){case"Browser":n=he((0,r.z$)());break;case"Worker":n=`${he((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ce(this),this.idTokenSubscription=new Ce(this),this.beforeStateQueue=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=E(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Z(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(E(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&E(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[E(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ke(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function xe(e){return(0,r.m9)(e)}class Ce{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ae(e,t,n){const r=xe(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Re(t),{host:o,port:a}=Oe(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Le()}function Re(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Oe(e){const t=Re(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ne(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ne(t)}}}function Ne(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Le(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return F(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Fe(e,t){return q(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function qe(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Pe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ue(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ue(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Fe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Me(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return De(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t){return q(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="http://localhost";class Be extends Pe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Be(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Be(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ve(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ve(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ve(e,t)}buildRequest(){const e={requestUri:je,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return F(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function ze(e,t){return q(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function He(e,t){const n=await q(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const Ke={["USER_NOT_FOUND"]:"user-not-found"};async function We(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return q(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),Ke)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends Pe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ge({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ge({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ze(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return He(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return We(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ge({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qe(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class Ye{constructor(e){var t,n,i,s,o,a;const l=(0,r.zd)((0,r.pd)(e)),c=null!==(t=l["apiKey"])&&void 0!==t?t:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=Je(null!==(i=l["mode"])&&void 0!==i?i:null);y(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(s=l["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Qe(e);try{return new Ye(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(){this.providerId=Xe.PROVIDER_ID}static credential(e,t){return Ue._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ye.parseLink(t);return y(n,"argument-error"),Ue._fromEmailAndCode(e,n.code,n.tenantId)}}Xe.PROVIDER_ID="password",Xe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Ze{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends et{constructor(){super("facebook.com")}static credential(e){return Be._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch(t){return null}}}tt.FACEBOOK_SIGN_IN_METHOD="facebook.com",tt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends et{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Be._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return nt.credential(t,n)}catch(r){return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com",nt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends et{constructor(){super("github.com")}static credential(e){return Be._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch(t){return null}}}rt.GITHUB_SIGN_IN_METHOD="github.com",rt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it extends et{constructor(){super("twitter.com")}static credential(e,t){return Be._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return it.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function st(e,t){return q(e,"POST","/v1/accounts:signUp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it.TWITTER_SIGN_IN_METHOD="twitter.com",it.PROVIDER_ID="twitter.com";class ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),s=at(n),o=new ot({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=at(n);return new ot({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function at(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,lt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new lt(e,t,n,r)}}function ct(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw lt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ot._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ht(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await J(e,ct(i,s,t,e),n);y(r.idToken,i,"internal-error");const o=W(r.idToken);y(o,i,"internal-error");const{sub:a}=o;return y(e.uid===a,i,"user-mismatch"),ot._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t,n=!1){const r="signIn",i=await ct(e,r,t),s=await ot._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function ft(e,t){return dt(xe(e),t)}async function pt(e,t,n){const r=xe(e),i=await st(r,{returnSecureToken:!0,email:t,password:n}),s=await ot._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function mt(e,t,n){return ft((0,r.m9)(e),Xe.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function vt(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function yt(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}function bt(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wt(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function _t(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}new WeakMap;const Et="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Et,"1"),this.storage.removeItem(Et),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){const e=(0,r.z$)();return fe(e)||be(e)}const St=1e3,It=10;class xt extends Tt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kt()&&Te(),this.fallbackToPolling=Ee(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);_e()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,It):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),St)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xt.type="LOCAL";const Ct=xt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Tt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}At.type="SESSION";const Rt=At;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Nt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Ot(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.receivers=[];class Pt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=Lt("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function Ft(e){Dt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return"undefined"!==typeof Dt()["WorkerGlobalScope"]&&"function"===typeof Dt()["importScripts"]}async function qt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Ut(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Vt(){return Mt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="firebaseLocalStorageDb",Bt=1,$t="firebaseLocalStorage",zt="fbase_key";class Ht{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Kt(e,t){return e.transaction([$t],t?"readwrite":"readonly").objectStore($t)}function Wt(){const e=indexedDB.deleteDatabase(jt);return new Ht(e).toPromise()}function Gt(){const e=indexedDB.open(jt,Bt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore($t,{keyPath:zt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains($t)?t(n):(n.close(),await Wt(),t(await Gt()))}))}))}async function Jt(e,t,n){const r=Kt(e,!0).put({[zt]:t,value:n});return new Ht(r).toPromise()}async function Qt(e,t){const n=Kt(e,!1).get(t),r=await new Ht(n).toPromise();return void 0===r?null:r.value}function Yt(e,t){const n=Kt(e,!0).delete(t);return new Ht(n).toPromise()}const Xt=800,Zt=3;class en{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Gt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Zt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nt._getInstance(Vt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await qt(),!this.activeServiceWorker)return;this.sender=new Pt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Ut()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gt();return await Jt(e,Et,"1"),await Yt(e,Et),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Jt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Qt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Yt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Kt(e,!1).getAll();return new Ht(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Xt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}en.type="LOCAL";const tn=en;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e,t){return F(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function rn(e,t){return F(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function on(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",sn().appendChild(r)}))}function an(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
an("rcb"),new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ln="recaptcha";async function cn(e,t,n){var r;const i=await n.verify();try{let s;if(y("string"===typeof i,e,"argument-error"),y(n.type===ln,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){y("enroll"===t.type,e,"internal-error");const n=await wt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;y(n,e,"missing-multi-factor-info");const o=await nn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await $e(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class un{constructor(e){this.providerId=un.PROVIDER_ID,this.auth=xe(e)}verifyPhoneNumber(e,t){return cn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Ge._fromVerification(e,t)}static credentialFromResult(e){const t=e;return un.credentialFromTaggedObject(t)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ge._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hn(e,t){return t?E(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un.PROVIDER_ID="phone",un.PHONE_SIGN_IN_METHOD="phone";class dn extends Pe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ve(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ve(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fn(e){return dt(e.auth,new dn(e),e.bypassAuthState)}function pn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),ht(n,new dn(e),e.bypassAuthState)}async function mn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),ut(n,new dn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fn;case"linkViaPopup":case"linkViaRedirect":return mn;case"reauthViaPopup":case"reauthViaRedirect":return pn;default:f(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new R(2e3,1e4);async function yn(e,t,n){const r=xe(e);g(e,t,Ze);const i=hn(r,n),s=new bn(r,"signInViaPopup",t,i);return s.executeNotNull()}class bn extends gn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=Lt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,vn.get())};e()}}bn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wn="pendingRedirect",_n=new Map;class En extends gn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=_n.get(this.auth._key());if(!e){try{const t=await Tn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}_n.set(this.auth._key(),e)}return this.bypassAuthState||_n.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Tn(e,t){const n=In(t),r=Sn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function kn(e,t){_n.set(e._key(),t)}function Sn(e){return E(e._redirectPersistence)}function In(e){return ce(wn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(e,t,n=!1){const r=xe(e),i=hn(r,t),s=new En(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cn=6e5;class An{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Nn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!On(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rn(e))}saveEventToCache(e){this.cachedEventUids.add(Rn(e)),this.lastProcessedEventTime=Date.now()}}function Rn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function On({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Nn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return On(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(e,t={}){return F(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dn=/^https?/;async function Fn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ln(e);for(const r of t)try{if(Mn(r))return}catch(n){}f(e,"unauthorized-domain")}function Mn(e){const t=S(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Dn.test(n))return!1;if(Pn.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new R(3e4,6e4);function Un(){const e=Dt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Vn(e){return new Promise(((t,n)=>{var r,i,s;function o(){Un(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Un(),n(p(e,"network-request-failed"))},timeout:qn.get()})}if(null===(i=null===(r=Dt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Dt().gapi)||void 0===s?void 0:s.load)){const t=an("iframefcb");return Dt()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},on(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw jn=null,e}))}let jn=null;function Bn(e){return jn=jn||Vn(e),jn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new R(5e3,15e3),zn="__/auth/iframe",Hn="emulator/auth/iframe",Kn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gn(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,Hn):`https://${e.config.authDomain}/${zn}`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=Wn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function Jn(e){const t=await Bn(e),n=Dt().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:Gn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=Dt().setTimeout((()=>{r(i)}),$n.get());function o(){Dt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yn=500,Xn=600,Zn="_blank",er="http://localhost";class tr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function nr(e,t,n,i=Yn,s=Xn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Qn),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,r.z$)().toLowerCase();n&&(l=pe(u)?Zn:n),de(u)&&(t=t||er,c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(we(u)&&"_self"!==l)return rr(t||"",l),new tr(null);const d=window.open(t||"",l,h);y(d,e,"popup-blocked");try{d.focus()}catch(f){}return new tr(d)}function rr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="__/auth/handler",sr="emulator/auth/handler";function or(e,t,n,s,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(t instanceof Ze){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof et){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];return`${ar(e)}?${(0,r.xO)(c).slice(1)}`}function ar({config:e}){return e.emulator?O(e,sr):`https://${e.authDomain}/${ir}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="webStorageSupport";class cr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rt,this._completeRedirectFn=xn,this._overrideRedirectResult=kn}async _openPopup(e,t,n,r){var i;w(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=or(e,t,n,S(),r);return nr(e,s,Lt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Ft(or(e,t,n,S(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Jn(e),n=new An(e);return t.register("authEvent",(t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(lr,{type:lr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[lr];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Fn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ee()||fe()||be()}}const ur=cr;class hr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class dr extends hr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new dr(e)}_finalizeEnroll(e,t,n){return _t(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return rn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class fr{constructor(){}static assertion(e){return dr._fromCredential(e)}}fr.FACTOR_ID="phone";var pr="@firebase/auth",mr="0.20.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{y(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),y(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ke(e)},a=new Ie(t,r,i);return k(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=xe(e.getProvider("auth").getImmediate());return(e=>new gr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(pr,mr,vr(e)),(0,i.KN)(pr,mr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=300,wr=(0,r.Pz)("authIdTokenMaxAge")||br;let _r=null;const Er=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wr)return;const i=null===n||void 0===n?void 0:n.token;_r!==i&&(_r=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=T(e,{popupRedirectResolver:ur,persistence:[tn,Ct,Rt]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const e=Er(s);vt(n,e,(()=>e(n.currentUser))),gt(n,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&Ae(n,`http://${o}`),n}yr("Browser")},2079:(e,t,n)=>{"use strict";n.d(t,{Jt:()=>mt,KV:()=>dt,aF:()=>pt,cF:()=>vt,iH:()=>gt,sd:()=>ft});var r=n(8897),i=n(5505),s=n(3513);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",l=12e4,c=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u extends i.ZR{constructor(e,t,n=0){super(h(e),`Firebase Storage: ${t} (${h(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(e){return"storage/"+e}function d(){const e="An unknown error occurred, please check the error payload for server response.";return new u("unknown",e)}function f(e){return new u("object-not-found","Object '"+e+"' does not exist.")}function p(e){return new u("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new u("unauthenticated",e)}function g(){return new u("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(e){return new u("unauthorized","User does not have permission to access '"+e+"'.")}function y(){return new u("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b(){return new u("canceled","User canceled the upload/download.")}function w(e){return new u("invalid-url","Invalid URL '"+e+"'.")}function _(e){return new u("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function E(){return new u("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function T(){return new u("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function k(){return new u("no-download-url","The given file does not have any download URLs.")}function S(e){return new u("unsupported-environment",`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function I(e){return new u("invalid-argument",e)}function x(){return new u("app-deleted","The Firebase app was deleted.")}function C(e){return new u("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function A(e,t){return new u("invalid-format","String does not match format '"+e+"': "+t)}function R(e){throw new u("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=O.makeFromUrl(e,t)}catch(r){return new O(e,"")}if(""===n.path)return n;throw _(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),l={bucket:1,path:3};function c(e){e.path_=decodeURIComponent(e.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=t===o?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",v=new RegExp(`^https?://${m}/${r}/${g}`,"i"),y={bucket:1,path:2},b=[{regex:a,indices:l,postModify:i},{regex:f,indices:p,postModify:c},{regex:v,indices:y,postModify:c}];for(let o=0;o<b.length;o++){const t=b[o],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new O(e,i),t.postModify(n);break}}if(null==n)throw w(e);return n}}class N{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,l())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(c)return void d();if(e)return d(),void u.call(null,e,...t);const n=l()||o;if(n)return d(),void u.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(e){p||(p=!0,d(),c||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function P(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return void 0!==e}function F(e){return"object"===typeof e&&!Array.isArray(e)}function M(e){return"string"===typeof e||e instanceof String}function q(e){return U()&&e instanceof Blob}function U(){return"undefined"!==typeof Blob&&!(0,i.UG)()}function V(e,t,n,r){if(r<t)throw I(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw I(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function B(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e,t){const n=e>=500&&e<600,r=[408,429],i=-1!==r.indexOf(e),s=-1!==t.indexOf(e);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})($||($={}));class H{constructor(e,t,n,r,i,s,o,a,l,c,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new K(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===$.NO_ERROR,i=n.getStatus();if((!t||z(i,this.additionalRetryCodes_))&&this.retry){const t=n.getErrorCode()===$.ABORT;return void e(!1,new K(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new K(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());D(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=d();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?x():b();r(e)}else{const e=y();r(e)}};this.canceled_?t(!1,new K(!1,null,!0)):this.backoffId_=L(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&P(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class K{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function W(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function G(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function J(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Q(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function Y(e,t,n,r,i,s,o=!0){const a=B(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return J(c,t),W(c,n),G(c,s),Q(c,r),new H(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Z(...e){const t=X();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(U())return new Blob(e);throw new u("unsupported-environment","This browser doesn't seem to support creating Blobs")}function ee(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){if("undefined"===typeof atob)throw S("base-64");return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class re{constructor(e,t){this.data=e,this.contentType=t||null}}function ie(e,t){switch(e){case ne.RAW:return new re(se(t));case ne.BASE64:case ne.BASE64URL:return new re(ae(e,t));case ne.DATA_URL:return new re(ce(t),ue(t))}throw d()}function se(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,s=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function oe(e){let t;try{t=decodeURIComponent(e)}catch(n){throw A(ne.DATA_URL,"Malformed data URL.")}return se(t)}function ae(e,t){switch(e){case ne.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw A(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case ne.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw A(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=te(t)}catch(i){if(i.message.includes("polyfill"))throw i;throw A(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class le{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw A(ne.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=he(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function ce(e){const t=new le(e);return t.base64?ae(ne.BASE64,t.rest):oe(t.rest)}function ue(e){const t=new le(e);return t.contentType}function he(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){let n=0,r="";q(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(q(this.data_)){const n=this.data_,r=ee(n,e,t);return null===r?null:new de(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new de(n,!0)}}static getBlob(...e){if(U()){const t=e.map((e=>e instanceof de?e.data_:e));return new de(Z.apply(null,t))}{const t=e.map((e=>M(e)?ie(ne.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new de(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){let t;try{t=JSON.parse(e)}catch(n){return null}return F(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function me(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function ge(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e,t){return t}class ye{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||ve}}let be=null;function we(e){return!M(e)||e.length<2?e:ge(e)}function _e(){if(be)return be;const e=[];function t(e,t){return we(t)}e.push(new ye("bucket")),e.push(new ye("generation")),e.push(new ye("metageneration")),e.push(new ye("name","fullPath",!0));const n=new ye("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new ye("size");return i.xform=r,e.push(i),e.push(new ye("timeCreated")),e.push(new ye("updated")),e.push(new ye("md5Hash",null,!0)),e.push(new ye("cacheControl",null,!0)),e.push(new ye("contentDisposition",null,!0)),e.push(new ye("contentEncoding",null,!0)),e.push(new ye("contentLanguage",null,!0)),e.push(new ye("contentType",null,!0)),e.push(new ye("metadata","customMetadata",!0)),be=e,be}function Ee(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new O(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Te(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return Ee(r,e),r}function ke(e,t,n){const r=fe(t);if(null===r)return null;const i=r;return Te(e,i,n)}function Se(e,t,n,r){const i=fe(t);if(null===i)return null;if(!M(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),l=a.map((t=>{const i=e["bucket"],s=e["fullPath"],a="/b/"+o(i)+"/o/"+o(s),l=j(a,n,r),c=B({alt:"media",token:t});return l+c}));return l[0]}function Ie(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="prefixes",Ce="items";function Ae(e,t,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[xe])for(const i of n[xe]){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new O(t,n));r.prefixes.push(s)}if(n[Ce])for(const i of n[Ce]){const n=e._makeStorageReference(new O(t,i["name"]));r.items.push(n)}return r}function Re(e,t,n){const r=fe(n);if(null===r)return null;const i=r;return Ae(e,t,i)}class Oe{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){if(!e)throw d()}function Le(e,t){function n(n,r){const i=ke(e,r,t);return Ne(null!==i),i}return n}function Pe(e,t){function n(n,r){const i=Re(e,t,r);return Ne(null!==i),i}return n}function De(e,t){function n(n,r){const i=ke(e,r,t);return Ne(null!==i),Se(i,r,e.host,e._protocol)}return n}function Fe(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?g():m():402===t.getStatus()?p(e.bucket):403===t.getStatus()?v(e.path):n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}return t}function Me(e){const t=Fe(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=f(e.path)),i.serverResponse=r.serverResponse,i}return n}function qe(e,t,n){const r=t.fullServerUrl(),i=j(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Oe(i,s,Le(e,n),o);return a.errorHandler=Me(t),a}function Ue(e,t,n,r,i){const s={};t.isRoot?s["prefix"]="":s["prefix"]=t.path+"/",n&&n.length>0&&(s["delimiter"]=n),r&&(s["pageToken"]=r),i&&(s["maxResults"]=i);const o=t.bucketOnlyServerUrl(),a=j(o,e.host,e._protocol),l="GET",c=e.maxOperationRetryTime,u=new Oe(a,l,Pe(e,t.bucket),c);return u.urlParams=s,u.errorHandler=Fe(t),u}function Ve(e,t,n){const r=t.fullServerUrl(),i=j(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Oe(i,s,De(e,n),o);return a.errorHandler=Me(t),a}function je(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Be(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=je(null,t)),r}function $e(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Be(t,r,i),u=Ie(c,n),h="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+l+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",d="\r\n--"+l+"--",f=de.getBlob(h,r,d);if(null===f)throw T();const p={name:c["fullPath"]},m=j(s,e.host,e._protocol),g="POST",v=e.maxUploadRetryTime,y=new Oe(m,g,Le(e,n),v);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=Fe(t),y}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ze=null;class He{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=$.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=$.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw R("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw R("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw R("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw R("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw R("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Ke extends He{initXhr(){this.xhr_.responseType="text"}}function We(){return ze?ze():new Ke}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(e,t){this._service=e,this._location=t instanceof O?t:O.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ge(e,t)}get root(){const e=new O(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ge(this._location.path)}get storage(){return this._service}get parent(){const e=pe(this._location.path);if(null===e)return null;const t=new O(this._location.bucket,e);return new Ge(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw C(e)}}function Je(e,t,n){e._throwIfRoot("uploadBytes");const r=$e(e.storage,e._location,_e(),new de(t,!0),n);return e.storage.makeRequestWithTokens(r,We).then((t=>({metadata:t,ref:e})))}function Qe(e){const t={prefixes:[],items:[]};return Ye(e,t).then((()=>t))}async function Ye(e,t,n){const r={pageToken:n},i=await Xe(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await Ye(e,t,i.nextPageToken)}function Xe(e,t){null!=t&&"number"===typeof t.maxResults&&V("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=Ue(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,We)}function Ze(e){e._throwIfRoot("getMetadata");const t=qe(e.storage,e._location,_e());return e.storage.makeRequestWithTokens(t,We)}function et(e){e._throwIfRoot("getDownloadURL");const t=Ve(e.storage,e._location,_e());return e.storage.makeRequestWithTokens(t,We).then((e=>{if(null===e)throw k();return e}))}function tt(e,t){const n=me(e._location.path,t),r=new O(e._location.bucket,n);return new Ge(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e){return/^[A-Za-z]+:\/\//.test(e)}function rt(e,t){return new Ge(e,t)}function it(e,t){if(e instanceof lt){const n=e;if(null==n._bucket)throw E();const r=new Ge(n,n._bucket);return null!=t?it(r,t):r}return void 0!==t?tt(e,t):e}function st(e,t){if(t&&nt(t)){if(e instanceof lt)return rt(e,t);throw I("To use ref(service, url), the first argument must be a Storage instance.")}return it(e,t)}function ot(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:O.makeFromBucketSpec(n,e)}function at(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"===typeof s?s:(0,i.Sg)(s,e.app.options.projectId))}class lt{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=c,this._requests=new Set,this._bucket=null!=r?O.makeFromBucketSpec(r,this._host):ot(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,e):this._bucket=ot(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){V("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){V("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ge(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new N(x());{const s=Y(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const ct="@firebase/storage",ut="0.9.14",ht="storage";function dt(e,t,n){return e=(0,i.m9)(e),Je(e,t,n)}function ft(e){return e=(0,i.m9)(e),Ze(e)}function pt(e){return e=(0,i.m9)(e),Qe(e)}function mt(e){return e=(0,i.m9)(e),et(e)}function gt(e,t){return e=(0,i.m9)(e),st(e,t)}function vt(e=(0,r.Mq)(),t){e=(0,i.m9)(e);const n=(0,r.qX)(e,ht),s=n.getImmediate({identifier:t}),o=(0,i.P0)("storage");return o&&yt(s,...o),s}function yt(e,t,n,r={}){at(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new lt(n,i,s,t,r.Jn)}function wt(){(0,r.Xd)(new s.wA(ht,bt,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(ct,ut,""),(0,r.KN)(ct,ut,"esm2017")}wt()},5505:(e,t,n)=>{"use strict";n.d(t,{BH:()=>I,L:()=>a,LL:()=>R,P0:()=>T,Pz:()=>S,Sg:()=>x,UG:()=>h,ZR:()=>A,aH:()=>k,b$:()=>f,eu:()=>g,hl:()=>m,m9:()=>$,ne:()=>U,pd:()=>q,q4:()=>E,ru:()=>d,tV:()=>l,uI:()=>u,vZ:()=>P,w1:()=>p,xO:()=>F,xb:()=>L,z$:()=>c,zd:()=>M});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,l=a?n[e.charAt(i)]:64;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==l||null==u)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==l){const e=o<<4&240|l>>2;if(r.push(e),64!==u){const e=l<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},l=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function h(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function d(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const e=c();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m(){return"object"===typeof indexedDB}function g(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function v(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=()=>v().__FIREBASE_DEFAULTS__,b=()=>{if("undefined"===typeof process||"undefined"===typeof process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},w=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},_=()=>{try{return y()||b()||w()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},E=e=>{var t,n;return null===(n=null===(t=_())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},T=e=>{const t=E(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},k=()=>{var e;return null===(e=_())||void 0===e?void 0:e.config},S=e=>{var t;return null===(t=_())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),l].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="FirebaseError";class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=C,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?O(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new A(r,o,n);return a}}function O(e,t){return e.replace(N,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function P(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(D(n)&&D(s)){if(!P(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function D(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function M(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function q(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=j(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function j(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){return e&&e._delegate?e._delegate:e}},9984:e=>{e.exports=function(e,t,n){const r=void 0!==e.__vccOpts?e.__vccOpts:e,i=r[t];if(void 0===i)r[t]=n;else for(const s in n)void 0===i[s]&&(i[s]=n[s])}},499:(e,t,n)=>{"use strict";n.d(t,{Bj:()=>s,Fl:()=>ze,IU:()=>Ce,Jd:()=>T,PG:()=>ke,SU:()=>Ue,Um:()=>_e,WL:()=>je,X$:()=>x,X3:()=>xe,XI:()=>Fe,Xl:()=>Ae,dq:()=>Pe,iH:()=>De,j:()=>S,lk:()=>k,qj:()=>we,qq:()=>b,yT:()=>Ie});var r=n(6970);let i;class s{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&p)>0,c=e=>(e.n&p)>0,u=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];l(i)&&!c(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const v=Symbol(""),y=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=g,t=_;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,_=!0,p=1<<++f,f<=m?u(this):w(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,_=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _=!0;const E=[];function T(){E.push(_),_=!1}function k(){const e=E.pop();_=void 0===e||e}function S(e,t,n){if(_&&g){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;I(r,i)}}function I(e,t){let n=!1;f<=m?c(e)||(e.n|=p,n=!l(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function x(e,t,n,i,s,o){const l=d.get(e);if(!l)return;let c=[];if("clear"===t)c=[...l.values()];else if("length"===n&&(0,r.kJ)(e)){const e=(0,r.He)(i);l.forEach(((t,n)=>{("length"===n||n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(l.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&c.push(l.get("length")):(c.push(l.get(v)),(0,r._N)(e)&&c.push(l.get(y)));break;case"delete":(0,r.kJ)(e)||(c.push(l.get(v)),(0,r._N)(e)&&c.push(l.get(y)));break;case"set":(0,r._N)(e)&&c.push(l.get(v));break}if(1===c.length)c[0]&&C(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);C(a(e))}}function C(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&A(r,t);for(const r of n)r.computed||A(r,t)}function A(e,t){(e!==g||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const R=(0,r.fY)("__proto__,__v_isRef,__isVue"),O=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),N=M(),L=M(!1,!0),P=M(!0),D=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ce(this);for(let t=0,i=this.length;t<i;t++)S(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ce)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){T();const n=Ce(this)[t].apply(this,e);return k(),n}})),e}function M(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?ve:ge:t?me:pe).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(D,i))return Reflect.get(D,i,s);const a=Reflect.get(n,i,s);return((0,r.yk)(i)?O.has(i):R(i))?a:(e||S(n,"get",i),t?a:Pe(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ee(a):we(a):a)}}const q=V(),U=V(!0);function V(e=!1){return function(t,n,i,s){let o=t[n];if(Se(o)&&Pe(o)&&!Pe(i))return!1;if(!e&&(Ie(i)||Se(i)||(o=Ce(o),i=Ce(i)),!(0,r.kJ)(t)&&Pe(o)&&!Pe(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),l=Reflect.set(t,n,i,s);return t===Ce(s)&&(a?(0,r.aU)(i,o)&&x(t,"set",n,i,o):x(t,"add",n,i)),l}}function j(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&x(e,"delete",t,void 0,i),s}function B(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&O.has(t)||S(e,"has",t),n}function $(e){return S(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const z={get:N,set:q,deleteProperty:j,has:B,ownKeys:$},H={get:P,set(e,t){return!0},deleteProperty(e,t){return!0}},K=(0,r.l7)({},z,{get:L,set:U}),W=e=>e,G=e=>Reflect.getPrototypeOf(e);function J(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ce(e),s=Ce(t);n||(t!==s&&S(i,"get",t),S(i,"get",s));const{has:o}=G(i),a=r?W:n?Oe:Re;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Q(e,t=!1){const n=this["__v_raw"],r=Ce(n),i=Ce(e);return t||(e!==i&&S(r,"has",e),S(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Y(e,t=!1){return e=e["__v_raw"],!t&&S(Ce(e),"iterate",v),Reflect.get(e,"size",e)}function X(e){e=Ce(e);const t=Ce(this),n=G(t),r=n.has.call(t,e);return r||(t.add(e),x(t,"add",e,e)),this}function Z(e,t){t=Ce(t);const n=Ce(this),{has:i,get:s}=G(n);let o=i.call(n,e);o||(e=Ce(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&x(n,"set",e,t,a):x(n,"add",e,t),this}function ee(e){const t=Ce(this),{has:n,get:r}=G(t);let i=n.call(t,e);i||(e=Ce(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&x(t,"delete",e,void 0,s),o}function te(){const e=Ce(this),t=0!==e.size,n=void 0,r=e.clear();return t&&x(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ce(s),a=t?W:e?Oe:Re;return!e&&S(o,"iterate",v),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function re(e,t,n){return function(...i){const s=this["__v_raw"],o=Ce(s),a=(0,r._N)(o),l="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,u=s[e](...i),h=n?W:t?Oe:Re;return!t&&S(o,"iterate",c?y:v),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function se(){const e={get(e){return J(this,e)},get size(){return Y(this)},has:Q,add:X,set:Z,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return J(this,e,!1,!0)},get size(){return Y(this)},has:Q,add:X,set:Z,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return J(this,e,!0)},get size(){return Y(this,!0)},has(e){return Q.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return J(this,e,!0,!0)},get size(){return Y(this,!0)},has(e){return Q.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)})),[e,n,t,r]}const[oe,ae,le,ce]=se();function ue(e,t){const n=t?e?ce:le:e?ae:oe;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const he={get:ue(!1,!1)},de={get:ue(!1,!0)},fe={get:ue(!0,!1)};const pe=new WeakMap,me=new WeakMap,ge=new WeakMap,ve=new WeakMap;function ye(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ye((0,r.W7)(e))}function we(e){return Se(e)?e:Te(e,!1,z,he,pe)}function _e(e){return Te(e,!1,K,de,me)}function Ee(e){return Te(e,!0,H,fe,ge)}function Te(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=be(e);if(0===a)return e;const l=new Proxy(e,2===a?i:n);return s.set(e,l),l}function ke(e){return Se(e)?ke(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Se(e){return!(!e||!e["__v_isReadonly"])}function Ie(e){return!(!e||!e["__v_isShallow"])}function xe(e){return ke(e)||Se(e)}function Ce(e){const t=e&&e["__v_raw"];return t?Ce(t):e}function Ae(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Re=e=>(0,r.Kn)(e)?we(e):e,Oe=e=>(0,r.Kn)(e)?Ee(e):e;function Ne(e){_&&g&&(e=Ce(e),I(e.dep||(e.dep=a())))}function Le(e,t){e=Ce(e),e.dep&&C(e.dep)}function Pe(e){return!(!e||!0!==e.__v_isRef)}function De(e){return Me(e,!1)}function Fe(e){return Me(e,!0)}function Me(e,t){return Pe(e)?e:new qe(e,t)}class qe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ce(e),this._value=t?e:Re(e)}get value(){return Ne(this),this._value}set value(e){const t=this.__v_isShallow||Ie(e)||Se(e);e=t?e:Ce(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Re(e),Le(this,e))}}function Ue(e){return Pe(e)?e.value:e}const Ve={get:(e,t,n)=>Ue(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function je(e){return ke(e)?e:new Proxy(e,Ve)}var Be;class $e{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Be]=!1,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ce(this);return Ne(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ze(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new $e(i,s,o||!s,n);return a}Be="__v_isReadonly"},9835:(e,t,n)=>{"use strict";n.d(t,{$d:()=>o,Ah:()=>Se,FN:()=>_n,Fl:()=>Mn,HY:()=>Vt,JJ:()=>z,Jd:()=>ke,Ko:()=>Ue,P$:()=>te,Q2:()=>Fe,Q6:()=>ae,U2:()=>re,Uk:()=>un,Us:()=>It,Wm:()=>on,Xn:()=>Ee,Y3:()=>y,Y8:()=>X,YP:()=>W,_:()=>sn,aZ:()=>le,bv:()=>_e,dG:()=>mn,dl:()=>de,f3:()=>H,h:()=>qn,iD:()=>Yt,ic:()=>Te,j4:()=>Xt,kq:()=>hn,lR:()=>qt,nK:()=>oe,se:()=>fe,up:()=>Pe,vl:()=>Ie,w5:()=>D,wg:()=>Kt,wy:()=>Re});var r=n(499),i=n(6970);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const l=[];for(let i=0;i<e.length;i++)l.push(o(e[i],t,n,r));return l}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}l(e,n,i,r)}function l(e,t,n,r=!0){console.error(e)}let c=!1,u=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let v=null;function y(e){const t=v||g;return e?t.then(this?e.bind(this):e):t}function b(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=I(h[r]);i<e?t=r+1:n=r}return t}function w(e){h.length&&h.includes(e,c&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(b(e.id),0,e),_())}function _(){c||u||(u=!0,v=g.then(C))}function E(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function T(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||f.push(e),_()}function k(e,t=(c?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function S(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>I(e)-I(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const I=e=>null==e.id?1/0:e.id,x=(e,t)=>{const n=I(e)-I(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function C(e){u=!1,c=!0,h.sort(x);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,S(e),c=!1,v=null,(h.length||f.length)&&C(e)}}new Set;new Map;function A(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),l=a&&t.slice(7);if(l&&l in r){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(s=n.map(i.He))}let c;let u=r[c=(0,i.hR)(t)]||r[c=(0,i.hR)((0,i._A)(t))];!u&&a&&(u=r[c=(0,i.hR)((0,i.rs)(t))]),u&&o(u,e,6,s);const h=r[c+"Once"];if(h){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,o(h,e,6,s)}}function R(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},l=!1;if(!(0,i.mf)(e)){const r=e=>{const n=R(e,t,!0);n&&(l=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||l?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function O(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let N=null,L=null;function P(e){const t=N;return N=e,L=e&&e.type.__scopeId||null,t}function D(e,t=N,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Jt(-1);const i=P(t);let s;try{s=e(...n)}finally{P(i),r._d&&Jt(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function F(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[l],slots:c,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:v}=e;let y,b;const w=P(e);try{if(4&n.shapeFlag){const e=s||r;y=dn(d.call(e,e,f,o,m,p,g)),b=u}else{const e=t;0,y=dn(e.length>1?e(o,{attrs:u,slots:c,emit:h}):e(o,null)),b=t.props?u:M(u)}}catch(E){zt.length=0,a(E,e,1),y=on(Bt)}let _=y;if(b&&!1!==v){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(l&&e.some(i.tR)&&(b=q(b,l)),_=cn(_,b))}return n.dirs&&(_=cn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),y=_,P(w),y}const M=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},q=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function U(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||V(r,o,c):!!o);if(1024&l)return!0;if(16&l)return r?V(r,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!O(c,n))return!0}}return!1}function V(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!O(n,s))return!0}return!1}function j({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const B=e=>e.__isSuspense;function $(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):T(e)}function z(e,t){if(wn){let n=wn.provides;const r=wn.parent&&wn.parent.provides;r===n&&(n=wn.provides=Object.create(r)),n[e]=t}else 0}function H(e,t,n=!1){const r=wn||N;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const K={};function W(e,t,n){return G(e,t,n)}function G(e,t,{immediate:n,deep:a,flush:l,onTrack:c,onTrigger:u}=i.kT){const h=wn;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Y(e):(0,i.mf)(e)?s(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[v])}:i.dG,t&&a){const e=d;d=()=>Y(e())}let g,v=e=>{f=E.onStop=()=>{s(e,h,4)}};if(xn){if(v=i.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,v]):d(),"sync"!==l)return i.dG;{const e=Vn();g=e.__watcherHandles||(e.__watcherHandles=[])}}let y=m?new Array(e.length).fill(K):K;const b=()=>{if(E.active)if(t){const e=E.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(f&&f(),o(t,h,3,[e,y===K?void 0:m&&y[0]===K?[]:y,v]),y=e)}else E.run()};let _;b.allowRecurse=!!t,"sync"===l?_=b:"post"===l?_=()=>St(b,h&&h.suspense):(b.pre=!0,h&&(b.id=h.uid),_=()=>w(b));const E=new r.qq(d,_);t?n?b():y=E.run():"post"===l?St(E.run.bind(E),h&&h.suspense):E.run();const T=()=>{E.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,E)};return g&&g.push(T),T}function J(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?Q(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=wn;En(this);const l=G(s,o.bind(r),n);return a?En(a):Tn(),l}function Q(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Y(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Y(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Y(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Y(e,t)}));else if((0,i.PO)(e))for(const n in e)Y(e[n],t);return e}function X(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _e((()=>{e.isMounted=!0})),ke((()=>{e.isUnmounting=!0})),e}const Z=[Function,Array],ee={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Z,onEnter:Z,onAfterEnter:Z,onEnterCancelled:Z,onBeforeLeave:Z,onLeave:Z,onAfterLeave:Z,onLeaveCancelled:Z,onBeforeAppear:Z,onAppear:Z,onAfterAppear:Z,onAppearCancelled:Z},setup(e,{slots:t}){const n=_n(),i=X();let s;return()=>{const o=t.default&&ae(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Bt){0,a=t,e=!0;break}}const l=(0,r.IU)(e),{mode:c}=l;if(i.isLeaving)return ie(a);const u=se(a);if(!u)return ie(a);const h=re(u,l,i,n);oe(u,h);const d=n.subTree,f=d&&se(d);let p=!1;const{getTransitionKey:m}=u.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Bt&&(!en(u,f)||p)){const e=re(f,l,i,n);if(oe(f,e),"out-in"===c)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},ie(a);"in-out"===c&&u.type!==Bt&&(e.delayLeave=(e,t,n)=>{const r=ne(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},te=ee;function ne(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function re(e,t,n,r){const{appear:s,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:b,onAppearCancelled:w}=t,_=String(e.key),E=ne(n,e),T=(e,t)=>{e&&o(e,r,9,t)},k=(e,t)=>{const n=t[1];T(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:a,persisted:l,beforeEnter(t){let r=c;if(!n.isMounted){if(!s)return;r=v||c}t._leaveCb&&t._leaveCb(!0);const i=E[_];i&&en(e,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[t])},enter(e){let t=u,r=h,i=d;if(!n.isMounted){if(!s)return;t=y||u,r=b||h,i=w||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,T(t?i:r,[e]),S.delayedLeave&&S.delayedLeave(),e._enterCb=void 0)};t?k(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();T(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),T(n?g:m,[t]),t._leaveCb=void 0,E[i]===e&&delete E[i])};E[i]=e,p?k(p,[t,o]):o()},clone(e){return re(e,t,n,r)}};return S}function ie(e){if(ue(e))return e=cn(e),e.children=null,e}function se(e){return ue(e)?e.children?e.children[0]:void 0:e}function oe(e,t){6&e.shapeFlag&&e.component?oe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ae(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Vt?(128&o.patchFlag&&i++,r=r.concat(ae(o.children,t,a))):(t||o.type!==Bt)&&r.push(null!=a?cn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function le(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const ce=e=>!!e.type.__asyncLoader;const ue=e=>e.type.__isKeepAlive;RegExp,RegExp;function he(e,t){return(0,i.kJ)(e)?e.some((e=>he(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function de(e,t){pe(e,"a",t)}function fe(e,t){pe(e,"da",t)}function pe(e,t,n=wn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ye(t,r,n),n){let e=n.parent;while(e&&e.parent)ue(e.parent.vnode)&&me(r,t,n,e),e=e.parent}}function me(e,t,n,r){const s=ye(t,e,r,!0);Se((()=>{(0,i.Od)(r[t],s)}),n)}function ge(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ve(e){return 128&e.shapeFlag?e.ssContent:e}function ye(e,t,n=wn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),En(n);const s=o(t,n,e,i);return Tn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const be=e=>(t,n=wn)=>(!xn||"sp"===e)&&ye(e,((...e)=>t(...e)),n),we=be("bm"),_e=be("m"),Ee=be("bu"),Te=be("u"),ke=be("bum"),Se=be("um"),Ie=be("sp"),xe=be("rtg"),Ce=be("rtc");function Ae(e,t=wn){ye("ec",e,t)}function Re(e,t){const n=N;if(null===n)return e;const r=Pn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,l=i.kT]=t[o];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Y(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:l}))}return e}function Oe(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let l=0;l<s.length;l++){const c=s[l];a&&(c.oldValue=a[l].value);let u=c.dir[i];u&&((0,r.Jd)(),o(u,n,8,[e.el,c,e,t]),(0,r.lk)())}}const Ne="components",Le="directives";function Pe(e,t){return Me(Ne,e,!0,t)||e}const De=Symbol();function Fe(e){return Me(Le,e)}function Me(e,t,n=!0,r=!1){const s=N||wn;if(s){const n=s.type;if(e===Ne){const e=Dn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=qe(s[e]||n[e],t)||qe(s.appContext[e],t);return!o&&r?n:o}}function qe(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Ue(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const Ve=e=>e?kn(e)?Pn(e)||e.proxy:Ve(e.parent):null,je=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ve(e.parent),$root:e=>Ve(e.root),$emit:e=>e.emit,$options:e=>Je(e),$forceUpdate:e=>e.f||(e.f=()=>w(e.update)),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>J.bind(e)}),Be=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),$e={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:l,type:c,appContext:u}=e;let h;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Be(s,t))return l[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return l[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return l[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return l[t]=4,n[t];ze&&(l[t]=0)}}const d=je[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=c.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(l[t]=4,n[t]):(p=u.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Be(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let l;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||Be(t,a)||(l=o[0])&&(0,i.RI)(l,a)||(0,i.RI)(r,a)||(0,i.RI)(je,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ze=!0;function He(e){const t=Je(e),n=e.proxy,s=e.ctx;ze=!1,t.beforeCreate&&We(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:l,watch:c,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:E,render:T,renderTracked:k,renderTriggered:S,errorCaptured:I,serverPrefetch:x,expose:C,inheritAttrs:A,components:R,directives:O,filters:N}=t,L=null;if(h&&Ke(h,s,L,e.appContext.config.unwrapInjectedRef),l)for(const r in l){const e=l[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(ze=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,l=Mn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(c)for(const r in c)Ge(c[r],s,n,r);if(u){const e=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{z(t,e[t])}))}function P(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&We(d,e,"c"),P(we,f),P(_e,p),P(Ee,m),P(Te,g),P(de,v),P(fe,y),P(Ae,I),P(Ce,k),P(xe,S),P(ke,w),P(Se,E),P(Ie,x),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.dG&&(e.render=T),null!=A&&(e.inheritAttrs=A),R&&(e.components=R),O&&(e.directives=O)}function Ke(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=et(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?H(n.from||o,n.default,!0):H(n.from||o):H(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function We(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ge(e,t,n,r){const s=r.includes(".")?Q(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&W(s,n)}else if((0,i.mf)(e))W(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ge(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&W(s,r,e)}else 0}function Je(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,l=o.get(t);let c;return l?c=l:s.length||n||r?(c={},s.length&&s.forEach((e=>Qe(c,e,a,!0))),Qe(c,t,a)):c=t,(0,i.Kn)(t)&&o.set(t,c),c}function Qe(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Qe(e,s,n,!0),i&&i.forEach((t=>Qe(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Ye[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Ye={data:Xe,props:nt,emits:nt,methods:nt,computed:nt,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:nt,directives:nt,watch:rt,provide:Xe,inject:Ze};function Xe(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Ze(e,t){return nt(et(e),et(t))}function et(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function rt(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function it(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,tn,1),e.propsDefaults=Object.create(null),ot(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function st(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:l}}=e,c=(0,r.IU)(o),[u]=e.propsOptions;let h=!1;if(!(s||l>0)||16&l){let r;ot(e,t,o,a)&&(h=!0);for(const s in c)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=at(u,c,s,void 0,e,!0)):delete o[s]);if(a!==c)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(O(e.emitsOptions,s))continue;const l=t[s];if(u)if((0,i.RI)(a,s))l!==a[s]&&(a[s]=l,h=!0);else{const t=(0,i._A)(s);o[t]=at(u,c,t,l,e,!1)}else l!==a[s]&&(a[s]=l,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function ot(e,t,n,s){const[o,a]=e.propsOptions;let l,c=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const u=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(l||(l={}))[h]=u:n[h]=u:O(e.emitsOptions,r)||r in s&&u===s[r]||(s[r]=u,c=!0)}if(a){const t=(0,r.IU)(n),s=l||i.kT;for(let r=0;r<a.length;r++){const l=a[r];n[l]=at(o,t,l,s[l],e,!(0,i.RI)(s,l))}}return c}function at(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(En(s),r=i[n]=e.call(null,t),Tn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function lt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},l=[];let c=!1;if(!(0,i.mf)(e)){const r=e=>{c=!0;const[n,r]=lt(e,t,!0);(0,i.l7)(a,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!c)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);ct(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(ct(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=dt(Boolean,r.type),n=dt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&l.push(t)}}}}const u=[a,l];return(0,i.Kn)(e)&&r.set(e,u),u}function ct(e){return"$"!==e[0]}function ut(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function ht(e,t){return ut(e)===ut(t)}function dt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>ht(t,e))):(0,i.mf)(t)&&ht(t,e)?0:-1}const ft=e=>"_"===e[0]||"$stable"===e,pt=e=>(0,i.kJ)(e)?e.map(dn):[dn(e)],mt=(e,t,n)=>{if(t._n)return t;const r=D(((...e)=>pt(t(...e))),n);return r._c=!1,r},gt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ft(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=mt(s,n,r);else if(null!=n){0;const e=pt(n);t[s]=()=>e}}},vt=(e,t)=>{const n=pt(t);e.slots.default=()=>n},yt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):gt(t,e.slots={})}else e.slots={},t&&vt(e,t);(0,i.Nj)(e.slots,tn,1)},bt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,gt(t,s)),a=t}else t&&(vt(e,t),a={default:1});if(o)for(const i in s)ft(i)||i in a||delete s[i]};function wt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _t=0;function Et(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=wt(),o=new Set;let a=!1;const l=s.app={_uid:_t++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:jn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(l,...t)):(0,i.mf)(e)&&(o.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(i,o,c){if(!a){0;const u=on(n,r);return u.appContext=s,o&&t?t(u,i):e(u,i,c),a=!0,l._container=i,i.__vue_app__=l,Pn(u.component)||u.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l}};return l}}function Tt(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Tt(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(ce(o)&&!a)return;const l=4&o.shapeFlag?Pn(o.component)||o.component.proxy:o.el,c=a?null:l,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===i.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,u,12,[c,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,l):(0,i.kJ)(n)?n.includes(l)||n.push(l):t?(f[h]=[l],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[l],e.k&&(f[e.k]=h.value))}else t?(f[h]=c,(0,i.RI)(p,h)&&(p[h]=c)):s&&(h.value=c,e.k&&(f[e.k]=c))};c?(r.id=-1,St(r,n)):r()}else 0}}function kt(){}const St=$;function It(e){return xt(e)}function xt(e,t){kt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!en(e,t)&&(r=X(e),W(e,i,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case jt:y(e,t,n,r);break;case Bt:b(e,t,n,r);break;case $t:null==e&&_(t,n,r,o);break;case Vt:P(e,t,n,r,i,s,o,a,l);break;default:1&h?x(e,t,n,r,i,s,o,a,l):6&h?D(e,t,n,r,i,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,r,i,s,o,a,l,ee)}null!=u&&i&&Tt(u,e&&e.ref,s,t||e,!t)},y=(e,t,n,r)=>{if(null==e)s(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},x=(e,t,n,r,i,s,o,a,l)=>{o=o||"svg"===t.type,null==e?C(t,n,r,i,s,o,a,l):O(e,t,i,s,o,a,l)},C=(e,t,n,r,o,c,u,h)=>{let f,p;const{type:m,props:g,shapeFlag:v,transition:y,dirs:b}=e;if(f=e.el=l(e.type,c,g&&g.is,g),8&v?d(f,e.children):16&v&&R(e.children,f,null,r,o,c&&"foreignObject"!==m,u,h),b&&Oe(e,null,r,"created"),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],c,e.children,r,o,Y);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&gn(p,r,e)}A(f,e,e.scopeId,u,r),b&&Oe(e,null,r,"beforeMount");const w=(!o||o&&!o.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||w||b)&&St((()=>{p&&gn(p,r,e),w&&y.enter(f),b&&Oe(e,null,r,"mounted")}),o)},A=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},R=(e,t,n,r,i,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?fn(e[c]):dn(e[c]);v(null,l,t,n,r,i,s,o,a)}},O=(e,t,n,r,s,o,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&Ct(n,!1),(g=m.onVnodeBeforeUpdate)&&gn(g,n,t,e),f&&Oe(t,e,n,"beforeUpdate"),n&&Ct(n,!0);const v=s&&"foreignObject"!==t.type;if(h?N(e.dynamicChildren,h,c,n,r,v,o):l||$(e,t,c,null,n,r,v,o,!1),u>0){if(16&u)L(c,t,p,m,n,r,s);else if(2&u&&p.class!==m.class&&a(c,"class",null,m.class,s),4&u&&a(c,"style",p.style,m.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],l=p[o],u=m[o];u===l&&"value"!==o||a(c,o,l,u,s,e.children,n,r,Y)}}1&u&&e.children!==t.children&&d(c,t.children)}else l||null!=h||L(c,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&St((()=>{g&&gn(g,n,t,e),f&&Oe(t,e,n,"updated")}),r)},N=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Vt||!en(l,c)||70&l.shapeFlag)?f(l.el):n;v(l,c,u,null,r,i,s,o,!0)}},L=(e,t,n,r,s,o,l)=>{if(n!==r){if(n!==i.kT)for(const c in n)(0,i.Gg)(c)||c in r||a(e,c,n[c],null,l,t.children,s,o,Y);for(const c in r){if((0,i.Gg)(c))continue;const u=r[c],h=n[c];u!==h&&"value"!==c&&a(e,c,h,u,l,t.children,s,o,Y)}"value"in r&&a(e,"value",n.value,r.value)}},P=(e,t,n,r,i,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(s(h,n,r),s(d,n,r),R(t.children,n,d,i,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,i,o,a,l),(null!=t.key||i&&t===i.subTree)&&At(e,t,!0)):$(e,t,n,d,i,o,a,l,u)},D=(e,t,n,r,i,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,l):M(t,n,r,i,s,o,l):q(e,t,l)},M=(e,t,n,r,i,s,o)=>{const a=e.component=bn(e,r,i);if(ue(e)&&(a.ctx.renderer=ee),Cn(a),a.asyncDep){if(i&&i.registerDep(a,V),!e.el){const e=a.subTree=on(Bt);b(null,e,t,n)}}else V(a,e,t,n,i,s,o)},q=(e,t,n)=>{const r=t.component=e.component;if(U(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,E(r.update),r.update()}else t.el=e.el,r.vnode=t},V=(e,t,n,s,o,a,l)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:c,vnode:u}=e,h=n;0,Ct(e,!1),n?(n.el=u.el,B(e,n,l)):n=u,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&gn(t,c,n,u),Ct(e,!0);const d=F(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),X(p),e,o,a),n.el=d.el,null===h&&j(e,d.el),s&&St(s,o),(t=n.props&&n.props.onVnodeUpdated)&&St((()=>gn(t,c,n,u)),o)}else{let r;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,f=ce(t);if(Ct(e,!1),u&&(0,i.ir)(u),!f&&(r=c&&c.onVnodeBeforeMount)&&gn(r,d,t),Ct(e,!0),l&&ne){const n=()=>{e.subTree=F(e),ne(l,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=F(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&St(h,o),!f&&(r=c&&c.onVnodeMounted)){const e=t;St((()=>gn(r,d,e)),o)}(256&t.shapeFlag||d&&ce(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&St(e.a,o),e.isMounted=!0,t=n=s=null}},u=e.effect=new r.qq(c,(()=>w(h)),e.scope),h=e.update=()=>u.run();h.id=e.uid,Ct(e,!0),h()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,st(e,t.props,i,n),bt(e,t.children,n),(0,r.Jd)(),k(),(0,r.lk)()},$=(e,t,n,r,i,s,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void H(c,h,n,r,i,s,o,a,l);if(256&f)return void z(c,h,n,r,i,s,o,a,l)}8&p?(16&u&&Y(c,i,s),h!==c&&d(n,h)):16&u?16&p?H(c,h,n,r,i,s,o,a,l):Y(c,i,s,!0):(8&u&&d(n,""),16&p&&R(h,n,r,i,s,o,a,l))},z=(e,t,n,r,s,o,a,l,c)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=c?fn(t[f]):dn(t[f]);v(e[f],r,n,null,s,o,a,l,c)}u>h?Y(e,s,o,!0,!1,d):R(t,n,r,s,o,a,l,c,d)},H=(e,t,n,r,s,o,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=c?fn(t[u]):dn(t[u]);if(!en(r,i))break;v(r,i,n,null,s,o,a,l,c),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=c?fn(t[f]):dn(t[f]);if(!en(r,i))break;v(r,i,n,null,s,o,a,l,c),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)v(null,t[u]=c?fn(t[u]):dn(t[u]),n,i,s,o,a,l,c),u++}}else if(u>f)while(u<=d)W(e[u],s,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=c?fn(t[u]):dn(t[u]);null!=e.key&&g.set(e.key,u)}let y,b=0;const w=f-m+1;let _=!1,E=0;const T=new Array(w);for(u=0;u<w;u++)T[u]=0;for(u=p;u<=d;u++){const r=e[u];if(b>=w){W(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=f;y++)if(0===T[y-m]&&en(r,t[y])){i=y;break}void 0===i?W(r,s,o,!0):(T[i-m]=u+1,i>=E?E=i:_=!0,v(r,t[i],n,null,s,o,a,l,c),b++)}const k=_?Rt(T):i.Z6;for(y=k.length-1,u=w-1;u>=0;u--){const e=m+u,i=t[e],d=e+1<h?t[e+1].el:r;0===T[u]?v(null,i,n,d,s,o,a,l,c):_&&(y<0||u!==k[y]?K(i,n,d,2):y--)}}},K=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void K(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,ee);if(a===Vt){s(o,t,n);for(let e=0;e<c.length;e++)K(c[e],t,n,r);return void s(e.anchor,t,n)}if(a===$t)return void T(e,t,n);const h=2!==r&&1&u&&l;if(h)if(0===r)l.beforeEnter(o),s(o,t,n),St((()=>l.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=l,a=()=>s(o,t,n),c=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,c):c()}else s(o,t,n)},W=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Tt(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!ce(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&gn(m,t,e),6&u)Q(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&Oe(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,ee,r):c&&(s!==Vt||h>0&&64&h)?Y(c,t,n,!1,!0):(s===Vt&&384&h||!i&&16&u)&&Y(l,t,n),r&&G(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&St((()=>{m&&gn(m,t,e),f&&Oe(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Vt)return void J(n,r);if(t===$t)return void I(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},J=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:l}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,W(a,e,t,n)),l&&St(l,t),St((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Y=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)W(e[o],t,n,r,i)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),k(),S(),t._vnode=e},ee={p:v,um:W,m:K,r:G,mt:M,mc:R,pc:$,pbc:N,n:X,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:Et(Z,te)}}function Ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function At(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=fn(s[i]),t.el=e.el),n||At(e,t)),t.type===jt&&(t.el=e.el)}}function Rt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Ot=e=>e.__isTeleport,Nt=e=>e&&(e.disabled||""===e.disabled),Lt=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,Pt=(e,t)=>{const n=e&&e.to;if((0,i.HD)(n)){if(t){const e=t(n);return e}return null}return n},Dt={__isTeleport:!0,process(e,t,n,r,i,s,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:g}}=c,v=Nt(t.props);let{shapeFlag:y,children:b,dynamicChildren:w}=t;if(null==e){const e=t.el=m(""),c=t.anchor=m("");f(e,n,r),f(c,n,r);const h=t.target=Pt(t.props,p),d=t.targetAnchor=m("");h&&(f(d,h),o=o||Lt(h));const g=(e,t)=>{16&y&&u(b,e,t,i,s,o,a,l)};v?g(n,c):h&&g(h,d)}else{t.el=e.el;const r=t.anchor=e.anchor,u=t.target=e.target,f=t.targetAnchor=e.targetAnchor,m=Nt(e.props),g=m?n:u,y=m?r:f;if(o=o||Lt(u),w?(d(e.dynamicChildren,w,g,i,s,o,a),At(e,t,!0)):l||h(e,t,g,y,i,s,o,a,!1),v)m||Ft(t,n,r,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Pt(t.props,p);e&&Ft(t,e,null,c,0)}else m&&Ft(t,u,f,c,1)}Ut(t)},remove(e,t,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=e;if(h&&s(u),(o||!Nt(d))&&(s(c),16&a))for(let f=0;f<l.length;f++){const e=l[f];i(e,t,n,!0,!!e.dynamicChildren)}},move:Ft,hydrate:Mt};function Ft(e,t,n,{o:{insert:r},m:i},s=2){0===s&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=e,h=2===s;if(h&&r(o,t,n),(!h||Nt(u))&&16&l)for(let d=0;d<c.length;d++)i(c[d],t,n,2);h&&r(a,t,n)}function Mt(e,t,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=t.target=Pt(t.props,l);if(u){const l=u._lpa||u.firstChild;if(16&t.shapeFlag)if(Nt(t.props))t.anchor=c(o(e),t,a(e),n,r,i,s),t.targetAnchor=l;else{t.anchor=o(e);let a=l;while(a)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}c(l,t,u,n,r,i,s)}Ut(t)}return t.anchor&&o(t.anchor)}const qt=Dt;function Ut(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;while(n!==e.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Vt=Symbol(void 0),jt=Symbol(void 0),Bt=Symbol(void 0),$t=Symbol(void 0),zt=[];let Ht=null;function Kt(e=!1){zt.push(Ht=e?null:[])}function Wt(){zt.pop(),Ht=zt[zt.length-1]||null}let Gt=1;function Jt(e){Gt+=e}function Qt(e){return e.dynamicChildren=Gt>0?Ht||i.Z6:null,Wt(),Gt>0&&Ht&&Ht.push(e),e}function Yt(e,t,n,r,i,s){return Qt(sn(e,t,n,r,i,s,!0))}function Xt(e,t,n,r,i){return Qt(on(e,t,n,r,i,!0))}function Zt(e){return!!e&&!0===e.__v_isVNode}function en(e,t){return e.type===t.type&&e.key===t.key}const tn="__vInternal",nn=({key:e})=>null!=e?e:null,rn=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:N,r:e,k:t,f:!!n}:e:null;function sn(e,t=null,n=null,r=0,s=null,o=(e===Vt?0:1),a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&nn(t),ref:t&&rn(t),scopeId:L,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:N};return l?(pn(c,n),128&o&&e.normalize(c)):n&&(c.shapeFlag|=(0,i.HD)(n)?8:16),Gt>0&&!a&&Ht&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&Ht.push(c),c}const on=an;function an(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==De||(e=Bt),Zt(e)){const r=cn(e,t,!0);return n&&pn(r,n),Gt>0&&!a&&Ht&&(6&r.shapeFlag?Ht[Ht.indexOf(e)]=r:Ht.push(r)),r.patchFlag|=-2,r}if(Fn(e)&&(e=e.__vccOpts),t){t=ln(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const l=(0,i.HD)(e)?1:B(e)?128:Ot(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return sn(e,t,n,s,o,l,a,!0)}function ln(e){return e?(0,r.X3)(e)||tn in e?(0,i.l7)({},e):e:null}function cn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,l=t?mn(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&nn(l),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(rn(t)):[s,rn(t)]:rn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Vt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&cn(e.ssContent),ssFallback:e.ssFallback&&cn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx};return c}function un(e=" ",t=0){return on(jt,null,e,t)}function hn(e="",t=!1){return t?(Kt(),Xt(Bt,null,e)):on(Bt,null,e)}function dn(e){return null==e||"boolean"===typeof e?on(Bt):(0,i.kJ)(e)?on(Vt,null,e.slice()):"object"===typeof e?fn(e):on(jt,null,String(e))}function fn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:cn(e)}function pn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),pn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||tn in t?3===r&&N&&(1===N.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=N}}else(0,i.mf)(t)?(t={default:t,_ctx:N},n=32):(t=String(t),64&r?(n=16,t=[un(t)]):n=8);e.children=t,e.shapeFlag|=n}function mn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function gn(e,t,n,r=null){o(e,t,7,[n,r])}const vn=wt();let yn=0;function bn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||vn,a={uid:yn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lt(s,o),emitsOptions:R(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=A.bind(null,a),e.ce&&e.ce(a),a}let wn=null;const _n=()=>wn||N,En=e=>{wn=e,e.scope.on()},Tn=()=>{wn&&wn.scope.off(),wn=null};function kn(e){return 4&e.vnode.shapeFlag}let Sn,In,xn=!1;function Cn(e,t=!1){xn=t;const{props:n,children:r}=e.vnode,i=kn(e);it(e,n,i,t),yt(e,r);const s=i?An(e,t):void 0;return xn=!1,s}function An(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,$e));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Ln(e):null;En(e),(0,r.Jd)();const l=s(o,e,0,[e.props,n]);if((0,r.lk)(),Tn(),(0,i.tI)(l)){if(l.then(Tn,Tn),t)return l.then((n=>{Rn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else Rn(e,l,t)}else On(e,t)}function Rn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),On(e,n)}function On(e,t,n){const s=e.type;if(!e.render){if(!t&&Sn&&!s.render){const t=s.template||Je(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,l=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Sn(t,l)}}e.render=s.render||i.dG,In&&In(e)}En(e),(0,r.Jd)(),He(e),(0,r.lk)(),Tn()}function Nn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Ln(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Nn(e))},slots:e.slots,emit:e.emit,expose:t}}function Pn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in je?je[n](e):void 0},has(e,t){return t in e||t in je}}))}function Dn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Fn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Mn=(e,t)=>(0,r.Fl)(e,t,xn);function qn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Zt(t)?on(e,null,[t]):on(e,t):on(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Zt(n)&&(n=[n]),on(e,t,n))}const Un=Symbol(""),Vn=()=>{{const e=H(Un);return e}};const jn="3.2.45"},1957:(e,t,n)=>{"use strict";n.d(t,{iM:()=>X,ri:()=>ne,uT:()=>P});var r=n(6970),i=n(9835);n(499);const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?o.createElementNS(s,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const i=a.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function c(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function u(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)d(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);h.test(n)?e.setProperty((0,r.rs)(i),n.replace(h,""),"important"):e[i]=n}}const f=["Webkit","Moz","ms"],p={};function m(e,t){const n=p[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return p[t]=i;i=(0,r.kC)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in e)return p[t]=n}return t}const g="http://www.w3.org/1999/xlink";function v(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function y(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",l=!0):"number"===i&&(n=0,l=!0)}try{e[t]=n}catch(c){0}l&&e.removeAttribute(t)}function b(e,t,n,r){e.addEventListener(t,n,r)}function w(e,t,n,r){e.removeEventListener(t,n,r)}function _(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=T(t);if(r){const o=s[t]=x(r,i);b(e,n,o,a)}else o&&(w(e,n,o,a),s[t]=void 0)}}const E=/(?:Once|Passive|Capture)$/;function T(e){let t;if(E.test(e)){let n;t={};while(n=e.match(E))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let k=0;const S=Promise.resolve(),I=()=>k||(S.then((()=>k=0)),k=Date.now());function x(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(C(e,n.value),t,5,[e])};return n.value=e,n.attached=I(),n}function C(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const A=/^on[a-z]/,R=(e,t,n,i,s=!1,o,a,l,h)=>{"class"===t?c(e,i,s):"style"===t?u(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||_(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):O(e,t,i,s))?y(e,t,i,o,a,l,h):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),v(e,t,i,s))};function O(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&A.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!A.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const N="transition",L="animation",P=(e,{slots:t})=>(0,i.h)(i.P$,q(e),t);P.displayName="Transition";const D={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=(P.props=(0,r.l7)({},i.P$.props,D),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),M=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function q(e){const t={};for(const r in e)r in D||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=a,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=U(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:E,onBeforeAppear:T=y,onAppear:k=b,onAppearCancelled:S=w}=t,I=(e,t,n)=>{B(e,t?h:l),B(e,t?u:a),n&&n()},x=(e,t)=>{e._isLeaving=!1,B(e,d),B(e,p),B(e,f),t&&t()},C=e=>(t,n)=>{const r=e?k:b,s=()=>I(t,e,n);F(r,[t,s]),$((()=>{B(t,e?c:o),j(t,e?h:l),M(r)||H(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){F(y,[e]),j(e,o),j(e,a)},onBeforeAppear(e){F(T,[e]),j(e,c),j(e,u)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>x(e,t);j(e,d),J(),j(e,f),$((()=>{e._isLeaving&&(B(e,d),j(e,p),M(_)||H(e,i,v,n))})),F(_,[e,n])},onEnterCancelled(e){I(e,!1),F(w,[e])},onAppearCancelled(e){I(e,!0),F(S,[e])},onLeaveCancelled(e){x(e),F(E,[e])}})}function U(e){if(null==e)return null;if((0,r.Kn)(e))return[V(e.enter),V(e.leave)];{const t=V(e);return[t,t]}}function V(e){const t=(0,r.He)(e);return t}function j(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function B(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function $(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let z=0;function H(e,t,n,r){const i=e._endId=++z,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=K(e,t);if(!o)return r();const c=o+"end";let u=0;const h=()=>{e.removeEventListener(c,d),s()},d=t=>{t.target===e&&++u>=l&&h()};setTimeout((()=>{u<l&&h()}),a+1),e.addEventListener(c,d)}function K(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${N}Delay`),s=r(`${N}Duration`),o=W(i,s),a=r(`${L}Delay`),l=r(`${L}Duration`),c=W(a,l);let u=null,h=0,d=0;t===N?o>0&&(u=N,h=o,d=s.length):t===L?c>0&&(u=L,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?N:L:null,d=u?u===N?s.length:l.length:0);const f=u===N&&/\b(transform|all)(,|$)/.test(r(`${N}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function W(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>G(t)+G(e[n]))))}function G(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function J(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Q=["ctrl","shift","alt","meta"],Y={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Q.some((n=>e[`${n}Key`]&&!t.includes(n)))},X=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Y[t[e]];if(r&&r(n,t))return}return e(n,...r)};const Z=(0,r.l7)({patchProp:R},l);let ee;function te(){return ee||(ee=(0,i.Us)(Z))}const ne=(...e)=>{const t=te().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=re(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function re(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},6970:(e,t,n)=>{"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:()=>h,DM:()=>L,E9:()=>ie,F7:()=>S,Gg:()=>H,HD:()=>F,He:()=>ne,Kn:()=>q,NO:()=>T,Nj:()=>te,Od:()=>C,PO:()=>$,Pq:()=>f,RI:()=>R,S0:()=>z,W7:()=>B,WV:()=>g,Z6:()=>_,_A:()=>G,_N:()=>N,aU:()=>Z,dG:()=>E,e1:()=>s,fY:()=>r,hR:()=>X,hq:()=>v,ir:()=>ee,j5:()=>o,kC:()=>Y,kJ:()=>O,kT:()=>w,l7:()=>x,mf:()=>D,rs:()=>Q,tI:()=>U,tR:()=>I,yA:()=>p,yk:()=>M,zw:()=>y});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);function o(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=F(r)?u(r):o(r);if(i)for(const e in i)t[e]=i[e]}return t}return F(e)||q(e)?e:void 0}const a=/;(?![^(]*\))/g,l=/:([^]+)/,c=/\/\*.*?\*\//gs;function u(e){const t={};return e.replace(c,"").split(a).forEach((e=>{if(e){const n=e.split(l);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function h(e){let t="";if(F(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const r=h(e[n]);r&&(t+=r+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f=r(d);function p(e){return!!e||""===e}function m(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=g(e[r],t[r]);return n}function g(e,t){if(e===t)return!0;let n=P(e),r=P(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=M(e),r=M(t),n||r)return e===t;if(n=O(e),r=O(t),n||r)return!(!n||!r)&&m(e,t);if(n=q(e),r=q(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!g(e[n],t[n]))return!1}}return String(e)===String(t)}function v(e,t){return e.findIndex((e=>g(e,t)))}const y=e=>F(e)?e:null==e?"":O(e)||q(e)&&(e.toString===V||!D(e.toString))?JSON.stringify(e,b,2):String(e),b=(e,t)=>t&&t.__v_isRef?b(e,t.value):N(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:L(t)?{[`Set(${t.size})`]:[...t.values()]}:!q(t)||O(t)||$(t)?t:String(t),w={},_=[],E=()=>{},T=()=>!1,k=/^on[^a-z]/,S=e=>k.test(e),I=e=>e.startsWith("onUpdate:"),x=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,R=(e,t)=>A.call(e,t),O=Array.isArray,N=e=>"[object Map]"===j(e),L=e=>"[object Set]"===j(e),P=e=>"[object Date]"===j(e),D=e=>"function"===typeof e,F=e=>"string"===typeof e,M=e=>"symbol"===typeof e,q=e=>null!==e&&"object"===typeof e,U=e=>q(e)&&D(e.then)&&D(e.catch),V=Object.prototype.toString,j=e=>V.call(e),B=e=>j(e).slice(8,-1),$=e=>"[object Object]"===j(e),z=e=>F(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},W=/-(\w)/g,G=K((e=>e.replace(W,((e,t)=>t?t.toUpperCase():"")))),J=/\B([A-Z])/g,Q=K((e=>e.replace(J,"-$1").toLowerCase())),Y=K((e=>e.charAt(0).toUpperCase()+e.slice(1))),X=K((e=>e?`on${Y(e)}`:"")),Z=(e,t)=>!Object.is(e,t),ee=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},te=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ne=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let re;const ie=()=>re||(re="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},9981:(e,t,n)=>{e.exports=n(6148)},6857:(e,t,n)=>{"use strict";var r=n(6031),i=n(8117),s=n(6139),o=n(9395),a=n(7187),l=n(7758),c=n(4908),u=n(7381);e.exports=function(e){return new Promise((function(t,n){var h=e.data,d=e.headers,f=e.responseType;r.isFormData(h)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(m+":"+g)}var v=a(e.baseURL,e.url);function y(){if(p){var r="getAllResponseHeaders"in p?l(p.getAllResponseHeaders()):null,s=f&&"text"!==f&&"json"!==f?p.response:p.responseText,o={data:s,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};i(t,n,o),p=null}}if(p.open(e.method.toUpperCase(),o(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,"onloadend"in p?p.onloadend=y:p.onreadystatechange=function(){p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))&&setTimeout(y)},p.onabort=function(){p&&(n(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(u(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var b=(e.withCredentials||c(v))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}"setRequestHeader"in p&&r.forEach(d,(function(e,t){"undefined"===typeof h&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),f&&"json"!==f&&(p.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),h||(h=null),p.send(h)}))}},6148:(e,t,n)=>{"use strict";var r=n(6031),i=n(4009),s=n(7237),o=n(8342),a=n(9860);function l(e){var t=new s(e),n=i(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var c=l(a);c.Axios=s,c.create=function(e){return l(o(c.defaults,e))},c.Cancel=n(5838),c.CancelToken=n(5e3),c.isCancel=n(2649),c.all=function(e){return Promise.all(e)},c.spread=n(7615),c.isAxiosError=n(6794),e.exports=c,e.exports["default"]=c},5838:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},5e3:(e,t,n)=>{"use strict";var r=n(5838);function i(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e,t=new i((function(t){e=t}));return{token:t,cancel:e}},e.exports=i},2649:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},7237:(e,t,n)=>{"use strict";var r=n(6031),i=n(9395),s=n(7332),o=n(1014),a=n(8342),l=n(9206),c=l.validators;function u(e){this.defaults=e,this.interceptors={request:new s,response:new s}}u.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&l.assertOptions(t,{silentJSONParsing:c.transitional(c.boolean,"1.0.0"),forcedJSONParsing:c.transitional(c.boolean,"1.0.0"),clarifyTimeoutError:c.transitional(c.boolean,"1.0.0")},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var i,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!r){var u=[o,void 0];Array.prototype.unshift.apply(u,n),u=u.concat(s),i=Promise.resolve(e);while(u.length)i=i.then(u.shift(),u.shift());return i}var h=e;while(n.length){var d=n.shift(),f=n.shift();try{h=d(h)}catch(p){f(p);break}}try{i=o(h)}catch(p){return Promise.reject(p)}while(s.length)i=i.then(s.shift(),s.shift());return i},u.prototype.getUri=function(e){return e=a(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=u},7332:(e,t,n)=>{"use strict";var r=n(6031);function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},7187:(e,t,n)=>{"use strict";var r=n(6847),i=n(6560);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},7381:(e,t,n)=>{"use strict";var r=n(4918);e.exports=function(e,t,n,i,s){var o=new Error(e);return r(o,t,n,i,s)}},1014:(e,t,n)=>{"use strict";var r=n(6031),i=n(2297),s=n(2649),o=n(9860);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){a(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||o.adapter;return t(e).then((function(t){return a(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},4918:e=>{"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},8342:(e,t,n)=>{"use strict";var r=n(6031);e.exports=function(e,t){t=t||{};var n={},i=["url","method","data"],s=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function l(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function c(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=l(void 0,e[i])):n[i]=l(e[i],t[i])}r.forEach(i,(function(e){r.isUndefined(t[e])||(n[e]=l(void 0,t[e]))})),r.forEach(s,c),r.forEach(o,(function(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=l(void 0,e[i])):n[i]=l(void 0,t[i])})),r.forEach(a,(function(r){r in t?n[r]=l(e[r],t[r]):r in e&&(n[r]=l(void 0,e[r]))}));var u=i.concat(s).concat(o).concat(a),h=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return r.forEach(h,c),n}},8117:(e,t,n)=>{"use strict";var r=n(7381);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},2297:(e,t,n)=>{"use strict";var r=n(6031),i=n(9860);e.exports=function(e,t,n){var s=this||i;return r.forEach(n,(function(n){e=n.call(s,e,t)})),e}},9860:(e,t,n)=>{"use strict";var r=n(6031),i=n(4129),s=n(4918),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function l(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=n(6857)),e}function c(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(e)}var u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:l(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),c(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(o){if("SyntaxError"===a.name)throw s(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(o)})),e.exports=u},4009:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},9395:(e,t,n)=>{"use strict";var r=n(6031);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))})))})),s=o.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},6560:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},6139:(e,t,n)=>{"use strict";var r=n(6031);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,i,s,o){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},6847:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},6794:e=>{"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},4908:(e,t,n)=>{"use strict";var r=n(6031);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},4129:(e,t,n)=>{"use strict";var r=n(6031);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},7758:(e,t,n)=>{"use strict";var r=n(6031),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,o={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(o[t]&&i.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},7615:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},9206:(e,t,n)=>{"use strict";var r=n(8593),i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={},o=r.version.split(".");function a(e,t){for(var n=t?t.split("."):o,r=e.split("."),i=0;i<3;i++){if(n[i]>r[i])return!0;if(n[i]<r[i])return!1}return!1}function l(e,t,n){if("object"!==typeof e)throw new TypeError("options must be an object");var r=Object.keys(e),i=r.length;while(i-- >0){var s=r[i],o=t[s];if(o){var a=e[s],l=void 0===a||o(a,s,e);if(!0!==l)throw new TypeError("option "+s+" must be "+l)}else if(!0!==n)throw Error("Unknown option "+s)}}i.transitional=function(e,t,n){var i=t&&a(t);function o(e,t){return"[Axios v"+r.version+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new Error(o(r," has been removed in "+t));return i&&!s[r]&&(s[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={isOlderVersion:a,assertOptions:l,validators:i}},6031:(e,t,n)=>{"use strict";var r=n(4009),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function o(e){return"undefined"===typeof e}function a(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function l(e){return"[object ArrayBuffer]"===i.call(e)}function c(e){return"undefined"!==typeof FormData&&e instanceof FormData}function u(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function h(e){return"string"===typeof e}function d(e){return"number"===typeof e}function f(e){return null!==e&&"object"===typeof e}function p(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===i.call(e)}function g(e){return"[object File]"===i.call(e)}function v(e){return"[object Blob]"===i.call(e)}function y(e){return"[object Function]"===i.call(e)}function b(e){return f(e)&&y(e.pipe)}function w(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function _(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function E(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function T(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function k(){var e={};function t(t,n){p(e[n])&&p(t)?e[n]=k(e[n],t):p(t)?e[n]=k({},t):s(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)T(arguments[n],t);return e}function S(e,t,n){return T(t,(function(t,i){e[i]=n&&"function"===typeof t?r(t,n):t})),e}function I(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:s,isArrayBuffer:l,isBuffer:a,isFormData:c,isArrayBufferView:u,isString:h,isNumber:d,isObject:f,isPlainObject:p,isUndefined:o,isDate:m,isFile:g,isBlob:v,isFunction:y,isStream:b,isURLSearchParams:w,isStandardBrowserEnv:E,forEach:T,merge:k,extend:S,trim:_,stripBOM:I}},4455:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});n(9665);var r=n(9835),i=n(499),s=n(1957),o=n(2857),a=n(3940),l=n(1136),c=(n(6727),n(5065)),u=n(244),h=n(945);const d={none:0,xs:4,sm:8,md:16,lg:24,xl:32},f={xs:8,sm:10,md:14,lg:20,xl:24},p=["button","submit","reset"],m=/[^\s]\/[^\s]/,g=["flat","outline","push","unelevated"],v=(e,t)=>!0===e.flat?"flat":!0===e.outline?"outline":!0===e.push?"push":!0===e.unelevated?"unelevated":t,y={...u.LU,...h.$,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...g.reduce(((e,t)=>(e[t]=Boolean)&&e),{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...c.jO.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function b(e){const t=(0,u.ZP)(e,f),n=(0,c.ZP)(e),{hasRouterLink:i,hasLink:s,linkTag:o,linkAttrs:a,navigateOnClick:l}=(0,h.Z)({fallbackTag:"button"}),g=(0,r.Fl)((()=>{const n=!1===e.fab&&!1===e.fabMini?t.value:{};return void 0!==e.padding?Object.assign({},n,{padding:e.padding.split(/\s+/).map((e=>e in d?d[e]+"px":e)).join(" "),minWidth:"0",minHeight:"0"}):n})),y=(0,r.Fl)((()=>!0===e.rounded||!0===e.fab||!0===e.fabMini)),b=(0,r.Fl)((()=>!0!==e.disable&&!0!==e.loading)),w=(0,r.Fl)((()=>!0===b.value?e.tabindex||0:-1)),_=(0,r.Fl)((()=>v(e,"standard"))),E=(0,r.Fl)((()=>{const t={tabindex:w.value};return!0===s.value?Object.assign(t,a.value):!0===p.includes(e.type)&&(t.type=e.type),"a"===o.value?(!0===e.disable?t["aria-disabled"]="true":void 0===t.href&&(t.role="button"),!0!==i.value&&!0===m.test(e.type)&&(t.type=e.type)):!0===e.disable&&(t.disabled="",t["aria-disabled"]="true"),!0===e.loading&&void 0!==e.percentage&&Object.assign(t,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),t})),T=(0,r.Fl)((()=>{let t;void 0!==e.color?t=!0===e.flat||!0===e.outline?`text-${e.textColor||e.color}`:`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(t=`text-${e.textColor}`);const n=!0===e.round?"round":"rectangle"+(!0===y.value?" q-btn--rounded":!0===e.square?" q-btn--square":"");return`q-btn--${_.value} q-btn--${n}`+(void 0!==t?" "+t:"")+(!0===b.value?" q-btn--actionable q-focusable q-hoverable":!0===e.disable?" disabled":"")+(!0===e.fab?" q-btn--fab":!0===e.fabMini?" q-btn--fab-mini":"")+(!0===e.noCaps?" q-btn--no-uppercase":"")+(!0===e.dense?" q-btn--dense":"")+(!0===e.stretch?" no-border-radius self-stretch":"")+(!0===e.glossy?" glossy":"")+(e.square?" q-btn--square":"")})),k=(0,r.Fl)((()=>n.value+(!0===e.stack?" column":" row")+(!0===e.noWrap?" no-wrap text-no-wrap":"")+(!0===e.loading?" q-btn__content--hidden":"")));return{classes:T,style:g,innerClasses:k,attributes:E,hasLink:s,linkTag:o,navigateOnClick:l,isActionable:b}}var w=n(5987),_=n(2026),E=n(1384),T=n(1705);const{passiveCapture:k}=E.rU;let S=null,I=null,x=null;const C=(0,w.L)({name:"QBtn",props:{...y,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:c}=(0,r.FN)(),{classes:u,style:h,innerClasses:d,attributes:f,hasLink:p,linkTag:m,navigateOnClick:g,isActionable:v}=b(e),y=(0,i.iH)(null),w=(0,i.iH)(null);let C,A,R=null;const O=(0,r.Fl)((()=>void 0!==e.label&&null!==e.label&&""!==e.label)),N=(0,r.Fl)((()=>!0!==e.disable&&!1!==e.ripple&&{keyCodes:!0===p.value?[13,32]:[13],...!0===e.ripple?{}:e.ripple})),L=(0,r.Fl)((()=>({center:e.round}))),P=(0,r.Fl)((()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}})),D=(0,r.Fl)((()=>{if(!0===e.loading)return{onMousedown:$,onTouchstart:$,onClick:$,onKeydown:$,onKeyup:$};if(!0===v.value){const t={onClick:M,onKeydown:q,onMousedown:V};if(!0===c.$q.platform.has.touch){const n=void 0!==e.onTouchstart?"":"Passive";t[`onTouchstart${n}`]=U}return t}return{onClick:E.NS}})),F=(0,r.Fl)((()=>({ref:y,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:h.value,...f.value,...D.value})));function M(t){if(null!==y.value){if(void 0!==t){if(!0===t.defaultPrevented)return;const n=document.activeElement;if("submit"===e.type&&n!==document.body&&!1===y.value.contains(n)&&!1===n.contains(y.value)){y.value.focus();const e=()=>{document.removeEventListener("keydown",E.NS,!0),document.removeEventListener("keyup",e,k),null!==y.value&&y.value.removeEventListener("blur",e,k)};document.addEventListener("keydown",E.NS,!0),document.addEventListener("keyup",e,k),y.value.addEventListener("blur",e,k)}}g(t)}}function q(e){null!==y.value&&(n("keydown",e),!0===(0,T.So)(e,[13,32])&&I!==y.value&&(null!==I&&B(),!0!==e.defaultPrevented&&(y.value.focus(),I=y.value,y.value.classList.add("q-btn--active"),document.addEventListener("keyup",j,!0),y.value.addEventListener("blur",j,k)),(0,E.NS)(e)))}function U(e){null!==y.value&&(n("touchstart",e),!0!==e.defaultPrevented&&(S!==y.value&&(null!==S&&B(),S=y.value,R=e.target,R.addEventListener("touchcancel",j,k),R.addEventListener("touchend",j,k)),C=!0,clearTimeout(A),A=setTimeout((()=>{C=!1}),200)))}function V(e){null!==y.value&&(e.qSkipRipple=!0===C,n("mousedown",e),!0!==e.defaultPrevented&&x!==y.value&&(null!==x&&B(),x=y.value,y.value.classList.add("q-btn--active"),document.addEventListener("mouseup",j,k)))}function j(e){if(null!==y.value&&(void 0===e||"blur"!==e.type||document.activeElement!==y.value)){if(void 0!==e&&"keyup"===e.type){if(I===y.value&&!0===(0,T.So)(e,[13,32])){const t=new MouseEvent("click",e);t.qKeyEvent=!0,!0===e.defaultPrevented&&(0,E.X$)(t),!0===e.cancelBubble&&(0,E.sT)(t),y.value.dispatchEvent(t),(0,E.NS)(e),e.qKeyEvent=!0}n("keyup",e)}B()}}function B(e){const t=w.value;!0===e||S!==y.value&&x!==y.value||null===t||t===document.activeElement||(t.setAttribute("tabindex",-1),t.focus()),S===y.value&&(null!==R&&(R.removeEventListener("touchcancel",j,k),R.removeEventListener("touchend",j,k)),S=R=null),x===y.value&&(document.removeEventListener("mouseup",j,k),x=null),I===y.value&&(document.removeEventListener("keyup",j,!0),null!==y.value&&y.value.removeEventListener("blur",j,k),I=null),null!==y.value&&y.value.classList.remove("q-btn--active")}function $(e){(0,E.NS)(e),e.qSkipRipple=!0}return(0,r.Jd)((()=>{B(!0)})),Object.assign(c,{click:M}),()=>{let n=[];void 0!==e.icon&&n.push((0,r.h)(o.Z,{name:e.icon,left:!1===e.stack&&!0===O.value,role:"img","aria-hidden":"true"})),!0===O.value&&n.push((0,r.h)("span",{class:"block"},[e.label])),n=(0,_.vs)(t.default,n),void 0!==e.iconRight&&!1===e.round&&n.push((0,r.h)(o.Z,{name:e.iconRight,right:!1===e.stack&&!0===O.value,role:"img","aria-hidden":"true"}));const i=[(0,r.h)("span",{class:"q-focus-helper",ref:w})];return!0===e.loading&&void 0!==e.percentage&&i.push((0,r.h)("span",{class:"q-btn__progress absolute-full overflow-hidden"+(!0===e.darkPercentage?" q-btn__progress--dark":"")},[(0,r.h)("span",{class:"q-btn__progress-indicator fit block",style:P.value})])),i.push((0,r.h)("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+d.value},n)),null!==e.loading&&i.push((0,r.h)(s.uT,{name:"q-transition--fade"},(()=>!0===e.loading?[(0,r.h)("span",{key:"loading",class:"absolute-full flex flex-center"},void 0!==t.loading?t.loading():[(0,r.h)(a.Z)])]:null))),(0,r.wy)((0,r.h)(m.value,F.value,i),[[l.Z,N.value,void 0,L.value]])}}})},4458:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(9835),i=n(8234),s=n(5987),o=n(2026);const a=(0,s.L)({name:"QCard",props:{...i.S,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),s=(0,i.Z)(e,n),a=(0,r.Fl)((()=>"q-card"+(!0===s.value?" q-card--dark q-dark":"")+(!0===e.bordered?" q-card--bordered":"")+(!0===e.square?" q-card--square no-border-radius":"")+(!0===e.flat?" q-card--flat no-shadow":"")));return()=>(0,r.h)(e.tag,{class:a.value},(0,o.KR)(t.default))}})},1821:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(9835),i=n(5065),s=n(5987),o=n(2026);const a=(0,s.L)({name:"QCardActions",props:{...i.jO,vertical:Boolean},setup(e,{slots:t}){const n=(0,i.ZP)(e),s=(0,r.Fl)((()=>`q-card__actions ${n.value} q-card__actions--`+(!0===e.vertical?"vert column":"horiz row")));return()=>(0,r.h)("div",{class:s.value},(0,o.KR)(t.default))}})},3190:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9835),i=n(5987),s=n(2026);const o=(0,i.L)({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-card__section q-card__section--"+(!0===e.horizontal?"horiz row no-wrap":"vert")));return()=>(0,r.h)(e.tag,{class:n.value},(0,s.KR)(t.default))}})},7691:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});n(9665);var r=n(9835),i=n(2857),s=n(1136),o=n(8234),a=n(244),l=n(5987),c=n(1384),u=n(2026);const h={xs:8,sm:10,md:14,lg:20,xl:24},d=(0,l.L)({name:"QChip",props:{...o.S,...a.LU,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=(0,r.FN)(),d=(0,o.Z)(e,l),f=(0,a.ZP)(e,h),p=(0,r.Fl)((()=>!0===e.selected||void 0!==e.icon)),m=(0,r.Fl)((()=>!0===e.selected?e.iconSelected||l.iconSet.chip.selected:e.icon)),g=(0,r.Fl)((()=>e.iconRemove||l.iconSet.chip.remove)),v=(0,r.Fl)((()=>!1===e.disable&&(!0===e.clickable||null!==e.selected))),y=(0,r.Fl)((()=>{const t=!0===e.outline&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(!1===e.outline&&void 0!==e.color?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(!0===e.disable?" disabled":"")+(!0===e.dense?" q-chip--dense":"")+(!0===e.outline?" q-chip--outline":"")+(!0===e.selected?" q-chip--selected":"")+(!0===v.value?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(!0===e.square?" q-chip--square":"")+(!0===d.value?" q-chip--dark q-dark":"")})),b=(0,r.Fl)((()=>{const t=!0===e.disable?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},n={...t,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||l.lang.label.remove};return{chip:t,remove:n}}));function w(e){13===e.keyCode&&_(e)}function _(t){e.disable||(n("update:selected",!e.selected),n("click",t))}function E(t){void 0!==t.keyCode&&13!==t.keyCode||((0,c.NS)(t),!1===e.disable&&(n("update:modelValue",!1),n("remove")))}function T(){const n=[];!0===v.value&&n.push((0,r.h)("div",{class:"q-focus-helper"})),!0===p.value&&n.push((0,r.h)(i.Z,{class:"q-chip__icon q-chip__icon--left",name:m.value}));const s=void 0!==e.label?[(0,r.h)("div",{class:"ellipsis"},[e.label])]:void 0;return n.push((0,r.h)("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},(0,u.pf)(t.default,s))),e.iconRight&&n.push((0,r.h)(i.Z,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),!0===e.removable&&n.push((0,r.h)(i.Z,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...b.value.remove,onClick:E,onKeyup:E})),n}return()=>{if(!1===e.modelValue)return;const t={class:y.value,style:f.value};return!0===v.value&&Object.assign(t,b.value.chip,{onClick:_,onKeyup:w}),(0,u.Jl)("div",t,T(),"ripple",!1!==e.ripple&&!0!==e.disable,(()=>[[s.Z,e.ripple]]))}}})},4870:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});n(6727);var r=n(9835),i=n(499),s=n(1957),o=n(4953),a=n(2695),l=n(2046);function c(){let e;const t=(0,r.FN)();function n(){e=void 0}return(0,r.se)(n),(0,r.Jd)(n),{removeTick:n,registerTick(n){e=n,(0,r.Y3)((()=>{e===n&&(!1===(0,l.$D)(t)&&e(),e=void 0)}))}}}var u=n(3842);const h={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function d(e,t=(()=>{}),n=(()=>{})){return{transitionProps:(0,r.Fl)((()=>{const r=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${r}-enter-from`,enterActiveClass:`${r}-enter-active`,enterToClass:`${r}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}})),transitionStyle:(0,r.Fl)((()=>`--q-transition-duration: ${e.transitionDuration}ms`))}}n(9665),n(1384);var f=n(7026),p=n(7495);const m=[];let g=document.body;function v(e){const t=document.createElement("div");if(void 0!==e&&(t.id=e),void 0!==p.w6.globalNodes){const e=p.w6.globalNodes["class"];void 0!==e&&(t.className=e)}return g.appendChild(t),m.push(t),t}function y(e){m.splice(m.indexOf(e),1),e.remove()}var b=n(2909),w=n(3251);function _(e){e=e.parent;while(void 0!==e&&null!==e){if("QGlobalDialog"===e.type.name)return!0;if("QDialog"===e.type.name||"QMenu"===e.type.name)return!1;e=e.parent}return!1}function E(e,t,n,s){const o=(0,i.iH)(!1),a=(0,i.iH)(!1);let l=null;const c={},u=!0===s&&_(e);function h(t){if(!0===t)return(0,f.xF)(c),void(a.value=!0);a.value=!1,!1===o.value&&(!1===u&&null===l&&(l=v()),o.value=!0,b.Q$.push(e.proxy),(0,f.YX)(c))}function d(t){if(a.value=!1,!0!==t)return;(0,f.xF)(c),o.value=!1;const n=b.Q$.indexOf(e.proxy);-1!==n&&b.Q$.splice(n,1),null!==l&&(y(l),l=null)}return(0,r.Ah)((()=>{d(!0)})),e.proxy.__qPortal=!0,(0,w.g)(e.proxy,"contentEl",(()=>t.value)),{showPortal:h,hidePortal:d,portalIsActive:o,portalIsAccessible:a,renderPortal:()=>!0===u?n():!0===o.value?[(0,r.h)(r.lR,{to:l},n())]:void 0}}var T=n(9754),k=n(5987),S=n(223),I=n(2026),x=n(7506),C=n(1705);const A=[];let R;function O(e){R=27===e.keyCode}function N(){!0===R&&(R=!1)}function L(e){!0===R&&(R=!1,!0===(0,C.So)(e,27)&&A[A.length-1](e))}function P(e){window[e]("keydown",O),window[e]("blur",N),window[e]("keyup",L),R=!1}function D(e){!0===x.Lp.is.desktop&&(A.push(e),1===A.length&&P("addEventListener"))}function F(e){const t=A.indexOf(e);t>-1&&(A.splice(t,1),0===A.length&&P("removeEventListener"))}const M=[];function q(e){M[M.length-1](e)}function U(e){!0===x.Lp.is.desktop&&(M.push(e),1===M.length&&document.body.addEventListener("focusin",q))}function V(e){const t=M.indexOf(e);t>-1&&(M.splice(t,1),0===M.length&&document.body.removeEventListener("focusin",q))}let j=0;const B={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},$={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},z=(0,k.L)({name:"QDialog",inheritAttrs:!1,props:{...u.vr,...h,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>"standard"===e||["top","bottom","left","right"].includes(e)}},emits:[...u.gH,"shake","click","escapeKey"],setup(e,{slots:t,emit:n,attrs:l}){const h=(0,r.FN)(),p=(0,i.iH)(null),m=(0,i.iH)(!1),g=(0,i.iH)(!1);let v,y,b,w=null;const _=(0,r.Fl)((()=>!0!==e.persistent&&!0!==e.noRouteDismiss&&!0!==e.seamless)),{preventBodyScroll:k}=(0,T.Z)(),{registerTimeout:x}=(0,a.Z)(),{registerTick:C,removeTick:A}=c(),{transitionProps:R,transitionStyle:O}=d(e,(()=>$[e.position][0]),(()=>$[e.position][1])),{showPortal:N,hidePortal:L,portalIsAccessible:P,renderPortal:M}=E(h,p,oe,!0),{hide:q}=(0,u.ZP)({showing:m,hideOnRouteChange:_,handleShow:Q,handleHide:Y,processOnMount:!0}),{addToHistory:z,removeFromHistory:H}=(0,o.Z)(m,q,_),K=(0,r.Fl)((()=>"q-dialog__inner flex no-pointer-events q-dialog__inner--"+(!0===e.maximized?"maximized":"minimized")+` q-dialog__inner--${e.position} ${B[e.position]}`+(!0===g.value?" q-dialog__inner--animating":"")+(!0===e.fullWidth?" q-dialog__inner--fullwidth":"")+(!0===e.fullHeight?" q-dialog__inner--fullheight":"")+(!0===e.square?" q-dialog__inner--square":""))),W=(0,r.Fl)((()=>!0===m.value&&!0!==e.seamless)),G=(0,r.Fl)((()=>!0===e.autoClose?{onClick:re}:{})),J=(0,r.Fl)((()=>["q-dialog fullscreen no-pointer-events q-dialog--"+(!0===W.value?"modal":"seamless"),l.class]));function Q(t){z(),w=!1===e.noRefocus&&null!==document.activeElement?document.activeElement:null,ne(e.maximized),N(),g.value=!0,!0!==e.noFocus?(null!==document.activeElement&&document.activeElement.blur(),C(X)):A(),x((()=>{if(!0===h.proxy.$q.platform.is.ios){if(!0!==e.seamless&&document.activeElement){const{top:e,bottom:t}=document.activeElement.getBoundingClientRect(),{innerHeight:n}=window,r=void 0!==window.visualViewport?window.visualViewport.height:n;e>0&&t>r/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-r,t>=n?1/0:Math.ceil(document.scrollingElement.scrollTop+t-r/2))),document.activeElement.scrollIntoView()}b=!0,p.value.click(),b=!1}N(!0),g.value=!1,n("show",t)}),e.transitionDuration)}function Y(t){A(),H(),te(!0),g.value=!0,L(),null!==w&&(((t&&0===t.type.indexOf("key")?w.closest('[tabindex]:not([tabindex^="-"])'):void 0)||w).focus(),w=null),x((()=>{L(!0),g.value=!1,n("hide",t)}),e.transitionDuration)}function X(e){(0,f.jd)((()=>{let t=p.value;null!==t&&!0!==t.contains(document.activeElement)&&(t=(""!==e?t.querySelector(e):null)||t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))}))}function Z(e){e&&"function"===typeof e.focus?e.focus({preventScroll:!0}):X(),n("shake");const t=p.value;null!==t&&(t.classList.remove("q-animate--scale"),t.classList.add("q-animate--scale"),clearTimeout(v),v=setTimeout((()=>{null!==p.value&&(t.classList.remove("q-animate--scale"),X())}),170))}function ee(){!0!==e.seamless&&(!0===e.persistent||!0===e.noEscDismiss?!0!==e.maximized&&!0!==e.noShake&&Z():(n("escapeKey"),q()))}function te(t){clearTimeout(v),!0!==t&&!0!==m.value||(ne(!1),!0!==e.seamless&&(k(!1),V(se),F(ee))),!0!==t&&(w=null)}function ne(e){!0===e?!0!==y&&(j<1&&document.body.classList.add("q-body--dialog"),j++,y=!0):!0===y&&(j<2&&document.body.classList.remove("q-body--dialog"),j--,y=!1)}function re(e){!0!==b&&(q(e),n("click",e))}function ie(t){!0!==e.persistent&&!0!==e.noBackdropDismiss?q(t):!0!==e.noShake&&Z(t.relatedTarget)}function se(t){!0!==e.allowFocusOutside&&!0===P.value&&!0!==(0,S.mY)(p.value,t.target)&&X('[tabindex]:not([tabindex="-1"])')}function oe(){return(0,r.h)("div",{role:"dialog","aria-modal":!0===W.value?"true":"false",...l,class:J.value},[(0,r.h)(s.uT,{name:"q-transition--fade",appear:!0},(()=>!0===W.value?(0,r.h)("div",{class:"q-dialog__backdrop fixed-full",style:O.value,"aria-hidden":"true",tabindex:-1,onFocusin:ie}):null)),(0,r.h)(s.uT,R.value,(()=>!0===m.value?(0,r.h)("div",{ref:p,class:K.value,style:O.value,tabindex:-1,...G.value},(0,I.KR)(t.default)):null))])}return(0,r.YP)((()=>e.maximized),(e=>{!0===m.value&&ne(e)})),(0,r.YP)(W,(e=>{k(e),!0===e?(U(se),D(ee)):(V(se),F(ee))})),Object.assign(h.proxy,{focus:X,shake:Z,__updateRefocusTarget(e){w=e||null}}),(0,r.Jd)(te),M}})},5879:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});n(6727),n(9665);var r=n(9835),i=n(499),s=n(4953),o=n(3842),a=n(9754),l=n(2695),c=n(8234),u=n(7506),h=n(5987);const d={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},f=Object.keys(d);function p(e){const t={};for(const n of f)!0===e[n]&&(t[n]=!0);return 0===Object.keys(t).length?d:(!0===t.horizontal?t.left=t.right=!0:!0===t.left&&!0===t.right&&(t.horizontal=!0),!0===t.vertical?t.up=t.down=!0:!0===t.up&&!0===t.down&&(t.vertical=!0),!0===t.horizontal&&!0===t.vertical&&(t.all=!0),t)}function m(e,t){return void 0===t.event&&void 0!==e.target&&!0!==e.target.draggable&&"function"===typeof t.handler&&"INPUT"!==e.target.nodeName.toUpperCase()&&(void 0===e.qClonedBy||-1===e.qClonedBy.indexOf(t.uid))}d.all=!0;var g=n(1384);function v(){if(void 0!==window.getSelection){const e=window.getSelection();void 0!==e.empty?e.empty():void 0!==e.removeAllRanges&&(e.removeAllRanges(),!0!==u.ZP.is.mobile&&e.addRange(document.createRange()))}else void 0!==document.selection&&document.selection.empty()}function y(e,t,n){const r=(0,g.FK)(e);let i,s=r.left-t.event.x,o=r.top-t.event.y,a=Math.abs(s),l=Math.abs(o);const c=t.direction;!0===c.horizontal&&!0!==c.vertical?i=s<0?"left":"right":!0!==c.horizontal&&!0===c.vertical?i=o<0?"up":"down":!0===c.up&&o<0?(i="up",a>l&&(!0===c.left&&s<0?i="left":!0===c.right&&s>0&&(i="right"))):!0===c.down&&o>0?(i="down",a>l&&(!0===c.left&&s<0?i="left":!0===c.right&&s>0&&(i="right"))):!0===c.left&&s<0?(i="left",a<l&&(!0===c.up&&o<0?i="up":!0===c.down&&o>0&&(i="down"))):!0===c.right&&s>0&&(i="right",a<l&&(!0===c.up&&o<0?i="up":!0===c.down&&o>0&&(i="down")));let u=!1;if(void 0===i&&!1===n){if(!0===t.event.isFirst||void 0===t.event.lastDir)return{};i=t.event.lastDir,u=!0,"left"===i||"right"===i?(r.left-=s,a=0,s=0):(r.top-=o,l=0,o=0)}return{synthetic:u,payload:{evt:e,touch:!0!==t.event.mouse,mouse:!0===t.event.mouse,position:r,direction:i,isFirst:t.event.isFirst,isFinal:!0===n,duration:Date.now()-t.event.time,distance:{x:a,y:l},offset:{x:s,y:o},delta:{x:r.left-t.event.lastX,y:r.top-t.event.lastY}}}}let b=0;const w=(0,h.f)({name:"touch-pan",beforeMount(e,{value:t,modifiers:n}){if(!0!==n.mouse&&!0!==u.Lp.has.touch)return;function r(e,t){!0===n.mouse&&!0===t?(0,g.NS)(e):(!0===n.stop&&(0,g.sT)(e),!0===n.prevent&&(0,g.X$)(e))}const i={uid:"qvtp_"+b++,handler:t,modifiers:n,direction:p(n),noop:g.ZT,mouseStart(e){m(e,i)&&(0,g.du)(e)&&((0,g.M0)(i,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),i.start(e,!0))},touchStart(e){if(m(e,i)){const t=e.target;(0,g.M0)(i,"temp",[[t,"touchmove","move","notPassiveCapture"],[t,"touchcancel","end","passiveCapture"],[t,"touchend","end","passiveCapture"]]),i.start(e)}},start(t,r){if(!0===u.Lp.is.firefox&&(0,g.Jf)(e,!0),i.lastEvt=t,!0===r||!0===n.stop){if(!0!==i.direction.all&&(!0!==r||!0!==i.modifiers.mouseAllDir&&!0!==i.modifiers.mousealldir)){const e=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);!0===t.defaultPrevented&&(0,g.X$)(e),!0===t.cancelBubble&&(0,g.sT)(e),Object.assign(e,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:void 0===t.qClonedBy?[i.uid]:t.qClonedBy.concat(i.uid)}),i.initialEvent={target:t.target,event:e}}(0,g.sT)(t)}const{left:s,top:o}=(0,g.FK)(t);i.event={x:s,y:o,time:Date.now(),mouse:!0===r,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:o}},move(e){if(void 0===i.event)return;const t=(0,g.FK)(e),s=t.left-i.event.x,o=t.top-i.event.y;if(0===s&&0===o)return;i.lastEvt=e;const a=!0===i.event.mouse,l=()=>{let t;r(e,a),!0!==n.preserveCursor&&!0!==n.preservecursor&&(t=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),!0===a&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),v(),i.styleCleanup=e=>{if(i.styleCleanup=void 0,void 0!==t&&(document.documentElement.style.cursor=t),document.body.classList.remove("non-selectable"),!0===a){const t=()=>{document.body.classList.remove("no-pointer-events--children")};void 0!==e?setTimeout((()=>{t(),e()}),50):t()}else void 0!==e&&e()}};if(!0===i.event.detected){!0!==i.event.isFirst&&r(e,i.event.mouse);const{payload:t,synthetic:n}=y(e,i,!1);return void(void 0!==t&&(!1===i.handler(t)?i.end(e):(void 0===i.styleCleanup&&!0===i.event.isFirst&&l(),i.event.lastX=t.position.left,i.event.lastY=t.position.top,i.event.lastDir=!0===n?void 0:t.direction,i.event.isFirst=!1)))}if(!0===i.direction.all||!0===a&&(!0===i.modifiers.mouseAllDir||!0===i.modifiers.mousealldir))return l(),i.event.detected=!0,void i.move(e);const c=Math.abs(s),u=Math.abs(o);c!==u&&(!0===i.direction.horizontal&&c>u||!0===i.direction.vertical&&c<u||!0===i.direction.up&&c<u&&o<0||!0===i.direction.down&&c<u&&o>0||!0===i.direction.left&&c>u&&s<0||!0===i.direction.right&&c>u&&s>0?(i.event.detected=!0,i.move(e)):i.end(e,!0))},end(t,n){if(void 0!==i.event){if((0,g.ul)(i,"temp"),!0===u.Lp.is.firefox&&(0,g.Jf)(e,!1),!0===n)void 0!==i.styleCleanup&&i.styleCleanup(),!0!==i.event.detected&&void 0!==i.initialEvent&&i.initialEvent.target.dispatchEvent(i.initialEvent.event);else if(!0===i.event.detected){!0===i.event.isFirst&&i.handler(y(void 0===t?i.lastEvt:t,i).payload);const{payload:e}=y(void 0===t?i.lastEvt:t,i,!0),n=()=>{i.handler(e)};void 0!==i.styleCleanup?i.styleCleanup(n):n()}i.event=void 0,i.initialEvent=void 0,i.lastEvt=void 0}}};if(e.__qtouchpan=i,!0===n.mouse){const t=!0===n.mouseCapture||!0===n.mousecapture?"Capture":"";(0,g.M0)(i,"main",[[e,"mousedown","mouseStart",`passive${t}`]])}!0===u.Lp.has.touch&&(0,g.M0)(i,"main",[[e,"touchstart","touchStart","passive"+(!0===n.capture?"Capture":"")],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchpan;void 0!==n&&(t.oldValue!==t.value&&("function"!==typeof value&&n.end(),n.handler=t.value),n.direction=p(t.modifiers))},beforeUnmount(e){const t=e.__qtouchpan;void 0!==t&&(void 0!==t.event&&t.end(),(0,g.ul)(t,"main"),(0,g.ul)(t,"temp"),!0===u.Lp.is.firefox&&(0,g.Jf)(e,!1),void 0!==t.styleCleanup&&t.styleCleanup(),delete e.__qtouchpan)}});var _=n(321),E=n(2026),T=n(5439);const k=150,S=(0,h.L)({name:"QDrawer",inheritAttrs:!1,props:{...o.vr,...c.S,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...o.gH,"onLayout","miniState"],setup(e,{slots:t,emit:n,attrs:u}){const h=(0,r.FN)(),{proxy:{$q:d}}=h,f=(0,c.Z)(e,d),{preventBodyScroll:p}=(0,a.Z)(),{registerTimeout:m,removeTimeout:g}=(0,l.Z)(),v=(0,r.f3)(T.YE,T.qO);if(v===T.qO)return console.error("QDrawer needs to be child of QLayout"),T.qO;let y,b,S;const I=(0,i.iH)("mobile"===e.behavior||"desktop"!==e.behavior&&v.totalWidth.value<=e.breakpoint),x=(0,r.Fl)((()=>!0===e.mini&&!0!==I.value)),C=(0,r.Fl)((()=>!0===x.value?e.miniWidth:e.width)),A=(0,i.iH)(!0===e.showIfAbove&&!1===I.value||!0===e.modelValue),R=(0,r.Fl)((()=>!0!==e.persistent&&(!0===I.value||!0===G.value)));function O(e,t){if(D(),!1!==e&&v.animate(),ae(0),!0===I.value){const e=v.instances[z.value];void 0!==e&&!0===e.belowBreakpoint&&e.hide(!1),le(1),!0!==v.isContainer.value&&p(!0)}else le(0),!1!==e&&ce(!1);m((()=>{!1!==e&&ce(!0),!0!==t&&n("show",e)}),k)}function N(e,t){F(),!1!==e&&v.animate(),le(0),ae(U.value*C.value),fe(),!0!==t?m((()=>{n("hide",e)}),k):g()}const{show:L,hide:P}=(0,o.ZP)({showing:A,hideOnRouteChange:R,handleShow:O,handleHide:N}),{addToHistory:D,removeFromHistory:F}=(0,s.Z)(A,P,R),M={belowBreakpoint:I,hide:P},q=(0,r.Fl)((()=>"right"===e.side)),U=(0,r.Fl)((()=>(!0===d.lang.rtl?-1:1)*(!0===q.value?1:-1))),V=(0,i.iH)(0),j=(0,i.iH)(!1),B=(0,i.iH)(!1),$=(0,i.iH)(C.value*U.value),z=(0,r.Fl)((()=>!0===q.value?"left":"right")),H=(0,r.Fl)((()=>!0===A.value&&!1===I.value&&!1===e.overlay?!0===e.miniToOverlay?e.miniWidth:C.value:0)),K=(0,r.Fl)((()=>!0===e.overlay||!0===e.miniToOverlay||v.view.value.indexOf(q.value?"R":"L")>-1||!0===d.platform.is.ios&&!0===v.isContainer.value)),W=(0,r.Fl)((()=>!1===e.overlay&&!0===A.value&&!1===I.value)),G=(0,r.Fl)((()=>!0===e.overlay&&!0===A.value&&!1===I.value)),J=(0,r.Fl)((()=>"fullscreen q-drawer__backdrop"+(!1===A.value&&!1===j.value?" hidden":""))),Q=(0,r.Fl)((()=>({backgroundColor:`rgba(0,0,0,${.4*V.value})`}))),Y=(0,r.Fl)((()=>!0===q.value?"r"===v.rows.value.top[2]:"l"===v.rows.value.top[0])),X=(0,r.Fl)((()=>!0===q.value?"r"===v.rows.value.bottom[2]:"l"===v.rows.value.bottom[0])),Z=(0,r.Fl)((()=>{const e={};return!0===v.header.space&&!1===Y.value&&(!0===K.value?e.top=`${v.header.offset}px`:!0===v.header.space&&(e.top=`${v.header.size}px`)),!0===v.footer.space&&!1===X.value&&(!0===K.value?e.bottom=`${v.footer.offset}px`:!0===v.footer.space&&(e.bottom=`${v.footer.size}px`)),e})),ee=(0,r.Fl)((()=>{const e={width:`${C.value}px`,transform:`translateX(${$.value}px)`};return!0===I.value?e:Object.assign(e,Z.value)})),te=(0,r.Fl)((()=>"q-drawer__content fit "+(!0!==v.isContainer.value?"scroll":"overflow-auto"))),ne=(0,r.Fl)((()=>`q-drawer q-drawer--${e.side}`+(!0===B.value?" q-drawer--mini-animate":"")+(!0===e.bordered?" q-drawer--bordered":"")+(!0===f.value?" q-drawer--dark q-dark":"")+(!0===j.value?" no-transition":!0===A.value?"":" q-layout--prevent-focus")+(!0===I.value?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":" q-drawer--"+(!0===x.value?"mini":"standard")+(!0===K.value||!0!==W.value?" fixed":"")+(!0===e.overlay||!0===e.miniToOverlay?" q-drawer--on-top":"")+(!0===Y.value?" q-drawer--top-padding":"")))),re=(0,r.Fl)((()=>{const t=!0===d.lang.rtl?e.side:z.value;return[[w,he,void 0,{[t]:!0,mouse:!0}]]})),ie=(0,r.Fl)((()=>{const t=!0===d.lang.rtl?z.value:e.side;return[[w,de,void 0,{[t]:!0,mouse:!0}]]})),se=(0,r.Fl)((()=>{const t=!0===d.lang.rtl?z.value:e.side;return[[w,de,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]}));function oe(){me(I,"mobile"===e.behavior||"desktop"!==e.behavior&&v.totalWidth.value<=e.breakpoint)}function ae(e){void 0===e?(0,r.Y3)((()=>{e=!0===A.value?0:C.value,ae(U.value*e)})):(!0!==v.isContainer.value||!0!==q.value||!0!==I.value&&Math.abs(e)!==C.value||(e+=U.value*v.scrollbarWidth.value),$.value=e)}function le(e){V.value=e}function ce(e){const t=!0===e?"remove":!0!==v.isContainer.value?"add":"";""!==t&&document.body.classList[t]("q-body--drawer-toggle")}function ue(){clearTimeout(b),h.proxy&&h.proxy.$el&&h.proxy.$el.classList.add("q-drawer--mini-animate"),B.value=!0,b=setTimeout((()=>{B.value=!1,h&&h.proxy&&h.proxy.$el&&h.proxy.$el.classList.remove("q-drawer--mini-animate")}),150)}function he(e){if(!1!==A.value)return;const t=C.value,n=(0,_.vX)(e.distance.x,0,t);if(!0===e.isFinal){const e=n>=Math.min(75,t);return!0===e?L():(v.animate(),le(0),ae(U.value*t)),void(j.value=!1)}ae((!0===d.lang.rtl?!0!==q.value:q.value)?Math.max(t-n,0):Math.min(0,n-t)),le((0,_.vX)(n/t,0,1)),!0===e.isFirst&&(j.value=!0)}function de(t){if(!0!==A.value)return;const n=C.value,r=t.direction===e.side,i=(!0===d.lang.rtl?!0!==r:r)?(0,_.vX)(t.distance.x,0,n):0;if(!0===t.isFinal){const e=Math.abs(i)<Math.min(75,n);return!0===e?(v.animate(),le(1),ae(0)):P(),void(j.value=!1)}ae(U.value*i),le((0,_.vX)(1-i/n,0,1)),!0===t.isFirst&&(j.value=!0)}function fe(){p(!1),ce(!0)}function pe(t,n){v.update(e.side,t,n)}function me(e,t){e.value!==t&&(e.value=t)}function ge(t,n){pe("size",!0===t?e.miniWidth:n)}return(0,r.YP)(I,(t=>{!0===t?(y=A.value,!0===A.value&&P(!1)):!1===e.overlay&&"mobile"!==e.behavior&&!1!==y&&(!0===A.value?(ae(0),le(0),fe()):L(!1))})),(0,r.YP)((()=>e.side),((e,t)=>{v.instances[t]===M&&(v.instances[t]=void 0,v[t].space=!1,v[t].offset=0),v.instances[e]=M,v[e].size=C.value,v[e].space=W.value,v[e].offset=H.value})),(0,r.YP)(v.totalWidth,(()=>{!0!==v.isContainer.value&&!0===document.qScrollPrevented||oe()})),(0,r.YP)((()=>e.behavior+e.breakpoint),oe),(0,r.YP)(v.isContainer,(e=>{!0===A.value&&p(!0!==e),!0===e&&oe()})),(0,r.YP)(v.scrollbarWidth,(()=>{ae(!0===A.value?0:void 0)})),(0,r.YP)(H,(e=>{pe("offset",e)})),(0,r.YP)(W,(e=>{n("onLayout",e),pe("space",e)})),(0,r.YP)(q,(()=>{ae()})),(0,r.YP)(C,(t=>{ae(),ge(e.miniToOverlay,t)})),(0,r.YP)((()=>e.miniToOverlay),(e=>{ge(e,C.value)})),(0,r.YP)((()=>d.lang.rtl),(()=>{ae()})),(0,r.YP)((()=>e.mini),(()=>{!0===e.modelValue&&(ue(),v.animate())})),(0,r.YP)(x,(e=>{n("miniState",e)})),v.instances[e.side]=M,ge(e.miniToOverlay,C.value),pe("space",W.value),pe("offset",H.value),!0===e.showIfAbove&&!0!==e.modelValue&&!0===A.value&&void 0!==e["onUpdate:modelValue"]&&n("update:modelValue",!0),(0,r.bv)((()=>{n("onLayout",W.value),n("miniState",x.value),y=!0===e.showIfAbove;const t=()=>{const e=!0===A.value?O:N;e(!1,!0)};0===v.totalWidth.value?S=(0,r.YP)(v.totalWidth,(()=>{S(),S=void 0,!1===A.value&&!0===e.showIfAbove&&!1===I.value?L(!1):t()})):(0,r.Y3)(t)})),(0,r.Jd)((()=>{void 0!==S&&S(),clearTimeout(b),!0===A.value&&fe(),v.instances[e.side]===M&&(v.instances[e.side]=void 0,pe("size",0),pe("offset",0),pe("space",!1))})),()=>{const n=[];!0===I.value&&(!1===e.noSwipeOpen&&n.push((0,r.wy)((0,r.h)("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),re.value)),n.push((0,E.Jl)("div",{ref:"backdrop",class:J.value,style:Q.value,"aria-hidden":"true",onClick:P},void 0,"backdrop",!0!==e.noSwipeBackdrop&&!0===A.value,(()=>se.value))));const i=!0===x.value&&void 0!==t.mini,s=[(0,r.h)("div",{...u,key:""+i,class:[te.value,u.class]},!0===i?t.mini():(0,E.KR)(t.default))];return!0===e.elevated&&!0===A.value&&s.push((0,r.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push((0,E.Jl)("aside",{ref:"content",class:ne.value,style:ee.value},s,"contentclose",!0!==e.noSwipeClose&&!0===I.value,(()=>ie.value))),(0,r.h)("div",{class:"q-drawer-container"},n)}}})},9420:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});n(6727);var r=n(9835),i=n(499),s=n(7691),o=n(3167),a=n(9256),l=(n(9665),n(7506)),c=n(1384);function u(e,t,n,r){const i=[];return e.forEach((e=>{!0===r(e)?i.push(e):t.push({failedPropValidation:n,file:e})})),i}function h(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),(0,c.NS)(e)}const d={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},f=["rejected"];function p({editable:e,dnd:t,getFileInput:n,addFilesToQueue:s}){const{props:o,emit:a,proxy:d}=(0,r.FN)(),f=(0,i.iH)(null),p=(0,r.Fl)((()=>void 0!==o.accept?o.accept.split(",").map((e=>(e=e.trim(),"*"===e?"*/":(e.endsWith("/*")&&(e=e.slice(0,e.length-1)),e.toUpperCase())))):null)),m=(0,r.Fl)((()=>parseInt(o.maxFiles,10))),g=(0,r.Fl)((()=>parseInt(o.maxTotalSize,10)));function v(t){if(e.value)if(t!==Object(t)&&(t={target:null}),null!==t.target&&!0===t.target.matches('input[type="file"]'))0===t.clientX&&0===t.clientY&&(0,c.sT)(t);else{const e=n();e&&e!==t.target&&e.click(t)}}function y(t){e.value&&t&&s(null,t)}function b(e,t,n,r){let i=Array.from(t||e.target.files);const s=[],l=()=>{s.length>0&&a("rejected",s)};if(void 0!==o.accept&&-1===p.value.indexOf("*/")&&(i=u(i,s,"accept",(e=>p.value.some((t=>e.type.toUpperCase().startsWith(t)||e.name.toUpperCase().endsWith(t))))),0===i.length))return l();if(void 0!==o.maxFileSize){const e=parseInt(o.maxFileSize,10);if(i=u(i,s,"max-file-size",(t=>t.size<=e)),0===i.length)return l()}if(!0!==o.multiple&&i.length>0&&(i=[i[0]]),i.forEach((e=>{e.__key=e.webkitRelativePath+e.lastModified+e.name+e.size})),!0===r){const e=n.map((e=>e.__key));i=u(i,s,"duplicate",(t=>!1===e.includes(t.__key)))}if(0===i.length)return l();if(void 0!==o.maxTotalSize){let e=!0===r?n.reduce(((e,t)=>e+t.size),0):0;if(i=u(i,s,"max-total-size",(t=>(e+=t.size,e<=g.value))),0===i.length)return l()}if("function"===typeof o.filter){const e=o.filter(i);i=u(i,s,"filter",(t=>e.includes(t)))}if(void 0!==o.maxFiles){let e=!0===r?n.length:0;if(i=u(i,s,"max-files",(()=>(e++,e<=m.value))),0===i.length)return l()}return l(),i.length>0?i:void 0}function w(e){h(e),!0!==t.value&&(t.value=!0)}function _(e){(0,c.NS)(e);const n=null!==e.relatedTarget||!0!==l.Lp.is.safari?e.relatedTarget!==f.value:!1===document.elementsFromPoint(e.clientX,e.clientY).includes(f.value);!0===n&&(t.value=!1)}function E(e){h(e);const n=e.dataTransfer.files;n.length>0&&s(null,n),t.value=!1}function T(e){if(!0===t.value)return(0,r.h)("div",{ref:f,class:`q-${e}__dnd absolute-full`,onDragenter:h,onDragover:h,onDragleave:_,onDrop:E})}return Object.assign(d,{pickFiles:v,addFiles:y}),{pickFiles:v,addFiles:y,onDragover:w,onDragleave:_,processFiles:b,getDndNode:T,maxFilesNumber:m,maxTotalSizeNumber:g}}var m=n(7915),g=n(5987),v=n(321),y=n(3251);const b=(0,g.L)({name:"QFile",inheritAttrs:!1,props:{...o.Cl,...a.Fz,...d,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...o.HJ,...f],setup(e,{slots:t,emit:n,attrs:l}){const{proxy:u}=(0,r.FN)(),h=(0,o.tL)(),d=(0,i.iH)(null),f=(0,i.iH)(!1),g=(0,a.Do)(e),{pickFiles:b,onDragover:w,onDragleave:_,processFiles:E,getDndNode:T}=p({editable:h.editable,dnd:f,getFileInput:q,addFilesToQueue:U}),k=(0,m.Z)(e),S=(0,r.Fl)((()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[])),I=(0,r.Fl)((()=>(0,o.yV)(S.value))),x=(0,r.Fl)((()=>S.value.map((e=>e.name)).join(", "))),C=(0,r.Fl)((()=>(0,v.rB)(S.value.reduce(((e,t)=>e+t.size),0)))),A=(0,r.Fl)((()=>({totalSize:C.value,filesNumber:S.value.length,maxFiles:e.maxFiles}))),R=(0,r.Fl)((()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:g.value,...l,id:h.targetUid.value,disabled:!0!==h.editable.value}))),O=(0,r.Fl)((()=>"q-file q-field--auto-height"+(!0===f.value?" q-file--dnd":""))),N=(0,r.Fl)((()=>!0===e.multiple&&!0===e.append));function L(e){const t=S.value.slice();t.splice(e,1),D(t)}function P(e){const t=S.value.findIndex(e);t>-1&&L(t)}function D(t){n("update:modelValue",!0===e.multiple?t:t[0])}function F(e){13===e.keyCode&&(0,c.X$)(e)}function M(e){13!==e.keyCode&&32!==e.keyCode||b(e)}function q(){return d.value}function U(t,n){const r=E(t,n,S.value,N.value),i=q();void 0!==i&&null!==i&&(i.value=""),void 0!==r&&((!0===e.multiple?e.modelValue&&r.every((e=>S.value.includes(e))):e.modelValue===r[0])||D(!0===N.value?S.value.concat(r):r))}function V(){return[(0,r.h)("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function j(){if(void 0!==t.file)return 0===S.value.length?V():S.value.map(((e,n)=>t.file({index:n,file:e,ref:this})));if(void 0!==t.selected)return 0===S.value.length?V():t.selected({files:S.value,ref:this});if(!0===e.useChips)return 0===S.value.length?V():S.value.map(((t,n)=>(0,r.h)(s.Z,{key:"file-"+n,removable:h.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{L(n)}},(()=>(0,r.h)("span",{class:"ellipsis",textContent:t.name})))));const n=void 0!==e.displayValue?e.displayValue:x.value;return n.length>0?[(0,r.h)("div",{class:e.inputClass,style:e.inputStyle,textContent:n})]:V()}function B(){const t={ref:d,...R.value,...k.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:U};return!0===e.multiple&&(t.multiple=!0),(0,r.h)("input",t)}return Object.assign(h,{fieldClass:O,emitValue:D,hasValue:I,inputRef:d,innerValue:S,floatingLabel:(0,r.Fl)((()=>!0===I.value||(0,o.yV)(e.displayValue))),computedCounter:(0,r.Fl)((()=>{if(void 0!==e.counterLabel)return e.counterLabel(A.value);const t=e.maxFiles;return`${S.value.length}${void 0!==t?" / "+t:""} (${C.value})`})),getControlChild:()=>T("file"),getControl:()=>{const t={ref:h.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return!0===h.editable.value&&Object.assign(t,{onDragover:w,onDragleave:_,onKeydown:F,onKeyup:M}),(0,r.h)("div",t,[B()].concat(j()))}}),Object.assign(u,{removeAtIndex:L,removeFile:P,getNativeElement:()=>d.value}),(0,y.g)(u,"nativeEl",(()=>d.value)),(0,o.ZP)(h)}})},8326:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});n(9665);var r=n(9835),i=n(499),s=n(5987),o=n(1384),a=n(7026),l=n(2026),c=n(5439),u=n(2046);const h=(0,s.L)({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:n}){const s=(0,r.FN)(),h=(0,i.iH)(null);let d=0;const f=[];function p(t){const r="boolean"===typeof t?t:!0!==e.noErrorFocus,i=++d,s=(e,t)=>{n("validation"+(!0===e?"Success":"Error"),t)},o=e=>{const t=e.validate();return"function"===typeof t.then?t.then((t=>({valid:t,comp:e})),(t=>({valid:!1,comp:e,err:t}))):Promise.resolve({valid:t,comp:e})},a=!0===e.greedy?Promise.all(f.map(o)).then((e=>e.filter((e=>!0!==e.valid)))):f.reduce(((e,t)=>e.then((()=>o(t).then((e=>{if(!1===e.valid)return Promise.reject(e)}))))),Promise.resolve()).catch((e=>[e]));return a.then((e=>{if(void 0===e||0===e.length)return i===d&&s(!0),!0;if(i===d){const{comp:t,err:n}=e[0];if(void 0!==n&&console.error(n),s(!1,t),!0===r){const t=e.find((({comp:e})=>"function"===typeof e.focus&&!1===(0,u.$D)(e.$)));void 0!==t&&t.comp.focus()}}return!1}))}function m(){d++,f.forEach((e=>{"function"===typeof e.resetValidation&&e.resetValidation()}))}function g(t){void 0!==t&&(0,o.NS)(t);const r=d+1;p().then((i=>{r===d&&!0===i&&(void 0!==e.onSubmit?n("submit",t):void 0!==t&&void 0!==t.target&&"function"===typeof t.target.submit&&t.target.submit())}))}function v(t){void 0!==t&&(0,o.NS)(t),n("reset"),(0,r.Y3)((()=>{m(),!0===e.autofocus&&!0!==e.noResetFocus&&y()}))}function y(){(0,a.jd)((()=>{if(null===h.value)return;const e=h.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||h.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||h.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(h.value.querySelectorAll("[tabindex]"),(e=>e.tabIndex>-1));null!==e&&void 0!==e&&e.focus({preventScroll:!0})}))}(0,r.JJ)(c.vh,{bindComponent(e){f.push(e)},unbindComponent(e){const t=f.indexOf(e);t>-1&&f.splice(t,1)}});let b=!1;return(0,r.se)((()=>{b=!0})),(0,r.dl)((()=>{!0===b&&!0===e.autofocus&&y()})),(0,r.bv)((()=>{!0===e.autofocus&&y()})),Object.assign(s.proxy,{validate:p,resetValidation:m,submit:g,reset:v,focus:y,getValidationComponents:()=>f}),()=>(0,r.h)("form",{class:"q-form",ref:h,onSubmit:g,onReset:v},(0,l.KR)(t.default))}})},6602:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(9665);var r=n(9835),i=n(499),s=n(883),o=n(5987),a=n(2026),l=n(5439);const c=(0,o.L)({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=(0,r.FN)(),c=(0,r.f3)(l.YE,l.qO);if(c===l.qO)return console.error("QHeader needs to be child of QLayout"),l.qO;const u=(0,i.iH)(parseInt(e.heightHint,10)),h=(0,i.iH)(!0),d=(0,r.Fl)((()=>!0===e.reveal||c.view.value.indexOf("H")>-1||o.platform.is.ios&&!0===c.isContainer.value)),f=(0,r.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===d.value)return!0===h.value?u.value:0;const t=u.value-c.scroll.value.position;return t>0?t:0})),p=(0,r.Fl)((()=>!0!==e.modelValue||!0===d.value&&!0!==h.value)),m=(0,r.Fl)((()=>!0===e.modelValue&&!0===p.value&&!0===e.reveal)),g=(0,r.Fl)((()=>"q-header q-layout__section--marginal "+(!0===d.value?"fixed":"absolute")+"-top"+(!0===e.bordered?" q-header--bordered":"")+(!0===p.value?" q-header--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus":""))),v=(0,r.Fl)((()=>{const e=c.rows.value.top,t={};return"l"===e[0]&&!0===c.left.space&&(t[!0===o.lang.rtl?"right":"left"]=`${c.left.size}px`),"r"===e[2]&&!0===c.right.space&&(t[!0===o.lang.rtl?"left":"right"]=`${c.right.size}px`),t}));function y(e,t){c.update("header",e,t)}function b(e,t){e.value!==t&&(e.value=t)}function w({height:e}){b(u,e),y("size",e)}function _(e){!0===m.value&&b(h,!0),n("focusin",e)}(0,r.YP)((()=>e.modelValue),(e=>{y("space",e),b(h,!0),c.animate()})),(0,r.YP)(f,(e=>{y("offset",e)})),(0,r.YP)((()=>e.reveal),(t=>{!1===t&&b(h,e.modelValue)})),(0,r.YP)(h,(e=>{c.animate(),n("reveal",e)})),(0,r.YP)(c.scroll,(t=>{!0===e.reveal&&b(h,"up"===t.direction||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)}));const E={};return c.instances.header=E,!0===e.modelValue&&y("size",u.value),y("space",e.modelValue),y("offset",f.value),(0,r.Jd)((()=>{c.instances.header===E&&(c.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))})),()=>{const n=(0,a.Bl)(t.default,[]);return!0===e.elevated&&n.push((0,r.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push((0,r.h)(s.Z,{debounce:0,onResize:w})),(0,r.h)("header",{class:g.value,style:v.value,onFocusin:_},n)}}})},2857:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(9835),i=n(244),s=n(5987),o=n(2026);const a="0 0 24 24",l=e=>e,c=e=>`ionicons ${e}`,u={"mdi-":e=>`mdi ${e}`,"icon-":l,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":c,"ion-ios":c,"ion-logo":c,"iconfont ":l,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},h={o_:"-outlined",r_:"-round",s_:"-sharp"},d={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},f=new RegExp("^("+Object.keys(u).join("|")+")"),p=new RegExp("^("+Object.keys(h).join("|")+")"),m=new RegExp("^("+Object.keys(d).join("|")+")"),g=/^[Mm]\s?[-+]?\.?\d/,v=/^img:/,y=/^svguse:/,b=/^ion-/,w=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,_=(0,s.L)({name:"QIcon",props:{...i.LU,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),s=(0,i.ZP)(e),l=(0,r.Fl)((()=>"q-icon"+(!0===e.left?" on-left":"")+(!0===e.right?" on-right":"")+(void 0!==e.color?` text-${e.color}`:""))),c=(0,r.Fl)((()=>{let t,i=e.name;if("none"===i||!i)return{none:!0};if(null!==n.iconMapFn){const e=n.iconMapFn(i);if(void 0!==e){if(void 0===e.icon)return{cls:e.cls,content:void 0!==e.content?e.content:" "};if(i=e.icon,"none"===i||!i)return{none:!0}}}if(!0===g.test(i)){const[e,t=a]=i.split("|");return{svg:!0,viewBox:t,nodes:e.split("&&").map((e=>{const[t,n,i]=e.split("@@");return(0,r.h)("path",{style:n,d:t,transform:i})}))}}if(!0===v.test(i))return{img:!0,src:i.substring(4)};if(!0===y.test(i)){const[e,t=a]=i.split("|");return{svguse:!0,src:e.substring(7),viewBox:t}}let s=" ";const o=i.match(f);if(null!==o)t=u[o[1]](i);else if(!0===w.test(i))t=i;else if(!0===b.test(i))t=`ionicons ion-${!0===n.platform.is.ios?"ios":"md"}${i.substring(3)}`;else if(!0===m.test(i)){t="notranslate material-symbols";const e=i.match(m);null!==e&&(i=i.substring(6),t+=d[e[1]]),s=i}else{t="notranslate material-icons";const e=i.match(p);null!==e&&(i=i.substring(2),t+=h[e[1]]),s=i}return{cls:t,content:s}}));return()=>{const n={class:l.value,style:s.value,"aria-hidden":"true",role:"presentation"};return!0===c.value.none?(0,r.h)(e.tag,n,(0,o.KR)(t.default)):!0===c.value.img?(0,r.h)("span",n,(0,o.vs)(t.default,[(0,r.h)("img",{src:c.value.src})])):!0===c.value.svg?(0,r.h)("span",n,(0,o.vs)(t.default,[(0,r.h)("svg",{viewBox:c.value.viewBox||"0 0 24 24"},c.value.nodes)])):!0===c.value.svguse?(0,r.h)("span",n,(0,o.vs)(t.default,[(0,r.h)("svg",{viewBox:c.value.viewBox},[(0,r.h)("use",{"xlink:href":c.value.src})])])):(void 0!==c.value.cls&&(n.class+=" "+c.value.cls),(0,r.h)(e.tag,n,(0,o.vs)(t.default,[c.value.content])))}}})},335:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});n(9665);var r=n(499),i=n(9835),s=n(1957),o=n(3940);const a={ratio:[String,Number]};function l(e,t){return(0,i.Fl)((()=>{const n=Number(e.ratio||(void 0!==t?t.value:void 0));return!0!==isNaN(n)&&n>0?{paddingBottom:100/n+"%"}:null}))}var c=n(5987),u=n(2026);const h=16/9,d=(0,c.L)({name:"QImg",props:{...a,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:h},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:n}){const a=(0,r.iH)(e.initialRatio),c=l(e,a);let h;const d=[(0,r.iH)(null),(0,r.iH)(_())],f=(0,r.iH)(0),p=(0,r.iH)(!1),m=(0,r.iH)(!1),g=(0,i.Fl)((()=>`q-img q-img--${!0===e.noNativeMenu?"no-":""}menu`)),v=(0,i.Fl)((()=>({width:e.width,height:e.height}))),y=(0,i.Fl)((()=>"q-img__image "+(void 0!==e.imgClass?e.imgClass+" ":"")+`q-img__image--with${!0===e.noTransition?"out":""}-transition`)),b=(0,i.Fl)((()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position})));function w(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function _(){return void 0!==e.placeholderSrc?{src:e.placeholderSrc}:null}function E(e){clearTimeout(h),m.value=!1,null===e?(p.value=!1,d[1^f.value].value=_()):p.value=!0,d[f.value].value=e}function T({target:e}){null!==h&&(clearTimeout(h),a.value=0===e.naturalHeight?.5:e.naturalWidth/e.naturalHeight,k(e,1))}function k(e,t){null!==h&&1e3!==t&&(!0===e.complete?S(e):h=setTimeout((()=>{k(e,t+1)}),50))}function S(e){null!==h&&(f.value=1^f.value,d[f.value].value=null,p.value=!1,m.value=!1,n("load",e.currentSrc||e.src))}function I(e){clearTimeout(h),p.value=!1,m.value=!0,d[f.value].value=null,d[1^f.value].value=_(),n("error",e)}function x(t){const n=d[t].value,r={key:"img_"+t,class:y.value,style:b.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...n};return f.value===t?(r.class+=" q-img__image--waiting",Object.assign(r,{onLoad:T,onError:I})):r.class+=" q-img__image--loaded",(0,i.h)("div",{class:"q-img__container absolute-full",key:"img"+t},(0,i.h)("img",r))}function C(){return!0!==p.value?(0,i.h)("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},(0,u.KR)(t[!0===m.value?"error":"default"])):(0,i.h)("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},void 0!==t.loading?t.loading():!0===e.noSpinner?void 0:[(0,i.h)(o.Z,{color:e.spinnerColor,size:e.spinnerSize})])}return(0,i.YP)((()=>w()),E),E(w()),(0,i.Jd)((()=>{clearTimeout(h),h=null})),()=>{const t=[];return null!==c.value&&t.push((0,i.h)("div",{key:"filler",style:c.value})),!0!==m.value&&(null!==d[0].value&&t.push(x(0)),null!==d[1].value&&t.push(x(1))),t.push((0,i.h)(s.uT,{name:"q-transition--fade"},C)),(0,i.h)("div",{class:g.value,style:v.value,role:"img","aria-label":e.alt},t)}}})},4152:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});n(6727);var r=n(9835),i=n(499),s=n(3167),o=(n(8964),n(9665),n(1705));const a={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},l={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},c=Object.keys(l);c.forEach((e=>{l[e].regex=new RegExp(l[e].pattern)}));const u=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+c.join("")+"])|(.)","g"),h=/[.*+?^${}()|[\]\\]/g,d=String.fromCharCode(1),f={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function p(e,t,n,s){let c,f,p,m;const g=(0,i.iH)(null),v=(0,i.iH)(b());function y(){return!0===e.autogrow||["textarea","text","search","url","tel","password"].includes(e.type)}function b(){if(_(),!0===g.value){const t=I(C(e.modelValue));return!1!==e.fillMask?A(t):t}return e.modelValue}function w(e){if(e<c.length)return c.slice(-e);let t="",n=c;const r=n.indexOf(d);if(r>-1){for(let r=e-n.length;r>0;r--)t+=d;n=n.slice(0,r)+t+n.slice(r)}return n}function _(){if(g.value=void 0!==e.mask&&e.mask.length>0&&y(),!1===g.value)return m=void 0,c="",void(f="");const t=void 0===a[e.mask]?e.mask:a[e.mask],n="string"===typeof e.fillMask&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=n.replace(h,"\\$&"),i=[],s=[],o=[];let v=!0===e.reverseFillMask,b="",w="";t.replace(u,((e,t,n,r,a)=>{if(void 0!==r){const e=l[r];o.push(e),w=e.negate,!0===v&&(s.push("(?:"+w+"+)?("+e.pattern+"+)?(?:"+w+"+)?("+e.pattern+"+)?"),v=!1),s.push("(?:"+w+"+)?("+e.pattern+")?")}else if(void 0!==n)b="\\"+("\\"===n?"":n),o.push(n),i.push("([^"+b+"]+)?"+b+"?");else{const e=void 0!==t?t:a;b="\\"===e?"\\\\\\\\":e.replace(h,"\\\\$&"),o.push(e),i.push("([^"+b+"]+)?"+b+"?")}}));const _=new RegExp("^"+i.join("")+"("+(""===b?".":"[^"+b+"]")+"+)?"+(""===b?"":"["+b+"]*")+"$"),E=s.length-1,T=s.map(((t,n)=>0===n&&!0===e.reverseFillMask?new RegExp("^"+r+"*"+t):n===E?new RegExp("^"+t+"("+(""===w?".":w)+"+)?"+(!0===e.reverseFillMask?"$":r+"*")):new RegExp("^"+t)));p=o,m=t=>{const n=_.exec(!0===e.reverseFillMask?t:t.slice(0,o.length));null!==n&&(t=n.slice(1).join(""));const r=[],i=T.length;for(let e=0,s=t;e<i;e++){const t=T[e].exec(s);if(null===t)break;s=s.slice(t.shift().length),r.push(...t)}return r.length>0?r.join(""):t},c=o.map((e=>"string"===typeof e?e:d)).join(""),f=c.split(d).join(n)}function E(t,i,o){const a=s.value,l=a.selectionEnd,u=a.value.length-l,h=C(t);!0===i&&_();const p=I(h),m=!1!==e.fillMask?A(p):p,g=v.value!==m;a.value!==m&&(a.value=m),!0===g&&(v.value=m),document.activeElement===a&&(0,r.Y3)((()=>{if(m!==f)if("insertFromPaste"!==o||!0===e.reverseFillMask)if(["deleteContentBackward","deleteContentForward"].indexOf(o)>-1){const t=!0===e.reverseFillMask?0===l?m.length>p.length?1:0:Math.max(0,m.length-(m===f?0:Math.min(p.length,u)+1))+1:l;a.setSelectionRange(t,t,"forward")}else if(!0===e.reverseFillMask)if(!0===g){const e=Math.max(0,m.length-(m===f?0:Math.min(p.length,u+1)));1===e&&1===l?a.setSelectionRange(e,e,"forward"):k.rightReverse(a,e,e)}else{const e=m.length-u;a.setSelectionRange(e,e,"backward")}else if(!0===g){const e=Math.max(0,c.indexOf(d),Math.min(p.length,l)-1);k.right(a,e,e)}else{const e=l-1;k.right(a,e,e)}else{const e=l-1;k.right(a,e,e)}else{const t=!0===e.reverseFillMask?f.length:0;a.setSelectionRange(t,t,"forward")}}));const y=!0===e.unmaskedValue?C(m):m;String(e.modelValue)!==y&&n(y,!0)}function T(e,t,n){const r=I(C(e.value));t=Math.max(0,c.indexOf(d),Math.min(r.length,t)),e.setSelectionRange(t,n,"forward")}(0,r.YP)((()=>e.type+e.autogrow),_),(0,r.YP)((()=>e.mask),(n=>{if(void 0!==n)E(v.value,!0);else{const n=C(v.value);_(),e.modelValue!==n&&t("update:modelValue",n)}})),(0,r.YP)((()=>e.fillMask+e.reverseFillMask),(()=>{!0===g.value&&E(v.value,!0)})),(0,r.YP)((()=>e.unmaskedValue),(()=>{!0===g.value&&E(v.value)}));const k={left(e,t,n,r){const i=-1===c.slice(t-1).indexOf(d);let s=Math.max(0,t-1);for(;s>=0;s--)if(c[s]===d){t=s,!0===i&&t++;break}if(s<0&&void 0!==c[t]&&c[t]!==d)return k.right(e,0,0);t>=0&&e.setSelectionRange(t,!0===r?n:t,"backward")},right(e,t,n,r){const i=e.value.length;let s=Math.min(i,n+1);for(;s<=i;s++){if(c[s]===d){n=s;break}c[s-1]===d&&(n=s)}if(s>i&&void 0!==c[n-1]&&c[n-1]!==d)return k.left(e,i,i);e.setSelectionRange(r?t:n,n,"forward")},leftReverse(e,t,n,r){const i=w(e.value.length);let s=Math.max(0,t-1);for(;s>=0;s--){if(i[s-1]===d){t=s;break}if(i[s]===d&&(t=s,0===s))break}if(s<0&&void 0!==i[t]&&i[t]!==d)return k.rightReverse(e,0,0);t>=0&&e.setSelectionRange(t,!0===r?n:t,"backward")},rightReverse(e,t,n,r){const i=e.value.length,s=w(i),o=-1===s.slice(0,n+1).indexOf(d);let a=Math.min(i,n+1);for(;a<=i;a++)if(s[a-1]===d){n=a,n>0&&!0===o&&n--;break}if(a>i&&void 0!==s[n-1]&&s[n-1]!==d)return k.leftReverse(e,i,i);e.setSelectionRange(!0===r?t:n,n,"forward")}};function S(n){if(t("keydown",n),!0===(0,o.Wm)(n))return;const r=s.value,i=r.selectionStart,a=r.selectionEnd;if(37===n.keyCode||39===n.keyCode){const t=k[(39===n.keyCode?"right":"left")+(!0===e.reverseFillMask?"Reverse":"")];n.preventDefault(),t(r,i,a,n.shiftKey)}else 8===n.keyCode&&!0!==e.reverseFillMask&&i===a?k.left(r,i,a,!0):46===n.keyCode&&!0===e.reverseFillMask&&i===a&&k.rightReverse(r,i,a,!0)}function I(t){if(void 0===t||null===t||""===t)return"";if(!0===e.reverseFillMask)return x(t);const n=p;let r=0,i="";for(let e=0;e<n.length;e++){const s=t[r],o=n[e];if("string"===typeof o)i+=o,s===o&&r++;else{if(void 0===s||!o.regex.test(s))return i;i+=void 0!==o.transform?o.transform(s):s,r++}}return i}function x(e){const t=p,n=c.indexOf(d);let r=e.length-1,i="";for(let s=t.length-1;s>=0&&r>-1;s--){const o=t[s];let a=e[r];if("string"===typeof o)i=o+i,a===o&&r--;else{if(void 0===a||!o.regex.test(a))return i;do{i=(void 0!==o.transform?o.transform(a):a)+i,r--,a=e[r]}while(n===s&&void 0!==a&&o.regex.test(a))}}return i}function C(e){return"string"!==typeof e||void 0===m?"number"===typeof e?m(""+e):e:m(e)}function A(t){return f.length-t.length<=0?t:!0===e.reverseFillMask&&t.length>0?f.slice(0,-t.length)+t:t+f.slice(t.length)}return{innerValue:v,hasMask:g,moveCursorForPaste:T,updateMaskValue:E,onMaskedKeydown:S}}var m=n(9256),g=n(7915),v=n(7506);const y=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,b=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,w=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,_=/[a-z0-9_ -]$/i;function E(e){return function(t){if("compositionend"===t.type||"change"===t.type){if(!0!==t.target.qComposing)return;t.target.qComposing=!1,e(t)}else if("compositionupdate"===t.type&&!0!==t.target.qComposing&&"string"===typeof t.data){const e=!0===v.Lp.is.firefox?!1===_.test(t.data):!0===y.test(t.data)||!0===b.test(t.data)||!0===w.test(t.data);!0===e&&(t.target.qComposing=!0)}}}var T=n(5987),k=n(1384),S=n(7026),I=n(3251);const x=(0,T.L)({name:"QInput",inheritAttrs:!1,props:{...s.Cl,...f,...m.Fz,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...s.HJ,"paste","change","keydown","animationend"],setup(e,{emit:t,attrs:n}){const{proxy:o}=(0,r.FN)(),{$q:a}=o,l={};let c,u,h,d,f=NaN;const v=(0,i.iH)(null),y=(0,m.Do)(e),{innerValue:b,hasMask:w,moveCursorForPaste:_,updateMaskValue:T,onMaskedKeydown:x}=p(e,t,j,v),C=(0,g.Z)(e,!0),A=(0,r.Fl)((()=>(0,s.yV)(b.value))),R=E(U),O=(0,s.tL)(),N=(0,r.Fl)((()=>"textarea"===e.type||!0===e.autogrow)),L=(0,r.Fl)((()=>!0===N.value||["text","search","url","tel","password"].includes(e.type))),P=(0,r.Fl)((()=>{const t={...O.splitAttrs.listeners.value,onInput:U,onPaste:q,onChange:$,onBlur:z,onFocus:k.sT};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=R,!0===w.value&&(t.onKeydown=x),!0===e.autogrow&&(t.onAnimationend=V),t})),D=(0,r.Fl)((()=>{const t={tabindex:0,"data-autofocus":!0===e.autofocus||void 0,rows:"textarea"===e.type?6:void 0,"aria-label":e.label,name:y.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:!0===e.disable,readonly:!0===e.readonly};return!1===N.value&&(t.type=e.type),!0===e.autogrow&&(t.rows=1),t}));function F(){(0,S.jd)((()=>{const e=document.activeElement;null===v.value||v.value===e||null!==e&&e.id===O.targetUid.value||v.value.focus({preventScroll:!0})}))}function M(){null!==v.value&&v.value.select()}function q(n){if(!0===w.value&&!0!==e.reverseFillMask){const e=n.target;_(e,e.selectionStart,e.selectionEnd)}t("paste",n)}function U(n){if(!n||!n.target)return;if("file"===e.type)return void t("update:modelValue",n.target.files);const i=n.target.value;if(!0!==n.target.qComposing){if(!0===w.value)T(i,!1,n.inputType);else if(j(i),!0===L.value&&n.target===document.activeElement){const{selectionStart:e,selectionEnd:t}=n.target;void 0!==e&&void 0!==t&&(0,r.Y3)((()=>{n.target===document.activeElement&&0===i.indexOf(n.target.value)&&n.target.setSelectionRange(e,t)}))}!0===e.autogrow&&B()}else l.value=i}function V(e){t("animationend",e),B()}function j(n,i){d=()=>{"number"!==e.type&&!0===l.hasOwnProperty("value")&&delete l.value,e.modelValue!==n&&f!==n&&(f=n,!0===i&&(u=!0),t("update:modelValue",n),(0,r.Y3)((()=>{f===n&&(f=NaN)}))),d=void 0},"number"===e.type&&(c=!0,l.value=n),void 0!==e.debounce?(clearTimeout(h),l.value=n,h=setTimeout(d,e.debounce)):d()}function B(){requestAnimationFrame((()=>{const e=v.value;if(null!==e){const t=e.parentNode.style,{overflow:n}=e.style;!0!==a.platform.is.firefox&&(e.style.overflow="hidden"),e.style.height="1px",t.marginBottom=e.scrollHeight-1+"px",e.style.height=e.scrollHeight+"px",e.style.overflow=n,t.marginBottom=""}}))}function $(e){R(e),clearTimeout(h),void 0!==d&&d(),t("change",e.target.value)}function z(t){void 0!==t&&(0,k.sT)(t),clearTimeout(h),void 0!==d&&d(),c=!1,u=!1,delete l.value,"file"!==e.type&&setTimeout((()=>{null!==v.value&&(v.value.value=void 0!==b.value?b.value:"")}))}function H(){return!0===l.hasOwnProperty("value")?l.value:void 0!==b.value?b.value:""}(0,r.YP)((()=>e.type),(()=>{v.value&&(v.value.value=e.modelValue)})),(0,r.YP)((()=>e.modelValue),(t=>{if(!0===w.value){if(!0===u&&(u=!1,String(t)===f))return;T(t)}else b.value!==t&&(b.value=t,"number"===e.type&&!0===l.hasOwnProperty("value")&&(!0===c?c=!1:delete l.value));!0===e.autogrow&&(0,r.Y3)(B)})),(0,r.YP)((()=>e.autogrow),(e=>{!0===e?(0,r.Y3)(B):null!==v.value&&n.rows>0&&(v.value.style.height="auto")})),(0,r.YP)((()=>e.dense),(()=>{!0===e.autogrow&&(0,r.Y3)(B)})),(0,r.Jd)((()=>{z()})),(0,r.bv)((()=>{!0===e.autogrow&&B()})),Object.assign(O,{innerValue:b,fieldClass:(0,r.Fl)((()=>"q-"+(!0===N.value?"textarea":"input")+(!0===e.autogrow?" q-textarea--autogrow":""))),hasShadow:(0,r.Fl)((()=>"file"!==e.type&&"string"===typeof e.shadowText&&e.shadowText.length>0)),inputRef:v,emitValue:j,hasValue:A,floatingLabel:(0,r.Fl)((()=>!0===A.value||(0,s.yV)(e.displayValue))),getControl:()=>(0,r.h)(!0===N.value?"textarea":"input",{ref:v,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...D.value,...P.value,..."file"!==e.type?{value:H()}:C.value}),getShadowControl:()=>(0,r.h)("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(!0===N.value?"":" text-no-wrap")},[(0,r.h)("span",{class:"invisible"},H()),(0,r.h)("span",e.shadowText)])});const K=(0,s.ZP)(O);return Object.assign(o,{focus:F,select:M,getNativeElement:()=>v.value}),(0,I.g)(o,"nativeEl",(()=>v.value)),K}})},490:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});n(6890);var r=n(9835),i=n(499),s=n(8234),o=n(945),a=n(5987),l=n(2026),c=n(1384),u=n(1705);const h=(0,a.L)({name:"QItem",props:{...s.S,...o.$,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=(0,r.FN)(),h=(0,s.Z)(e,a),{hasLink:d,linkAttrs:f,linkClass:p,linkTag:m,navigateOnClick:g}=(0,o.Z)(),v=(0,i.iH)(null),y=(0,i.iH)(null),b=(0,r.Fl)((()=>!0===e.clickable||!0===d.value||"label"===e.tag)),w=(0,r.Fl)((()=>!0!==e.disable&&!0===b.value)),_=(0,r.Fl)((()=>"q-item q-item-type row no-wrap"+(!0===e.dense?" q-item--dense":"")+(!0===h.value?" q-item--dark":"")+(!0===d.value&&null===e.active?p.value:!0===e.active?" q-item--active"+(void 0!==e.activeClass?` ${e.activeClass}`:""):"")+(!0===e.disable?" disabled":"")+(!0===w.value?" q-item--clickable q-link cursor-pointer "+(!0===e.manualFocus?"q-manual-focusable":"q-focusable q-hoverable")+(!0===e.focused?" q-manual-focusable--focused":""):""))),E=(0,r.Fl)((()=>{if(void 0===e.insetLevel)return null;const t=!0===a.lang.rtl?"Right":"Left";return{["padding"+t]:16+56*e.insetLevel+"px"}}));function T(e){!0===w.value&&(null!==y.value&&(!0!==e.qKeyEvent&&document.activeElement===v.value?y.value.focus():document.activeElement===y.value&&v.value.focus()),g(e))}function k(e){if(!0===w.value&&!0===(0,u.So)(e,13)){(0,c.NS)(e),e.qKeyEvent=!0;const t=new MouseEvent("click",e);t.qKeyEvent=!0,v.value.dispatchEvent(t)}n("keyup",e)}function S(){const e=(0,l.Bl)(t.default,[]);return!0===w.value&&e.unshift((0,r.h)("div",{class:"q-focus-helper",tabindex:-1,ref:y})),e}return()=>{const t={ref:v,class:_.value,style:E.value,role:"listitem",onClick:T,onKeyup:k};return!0===w.value?(t.tabindex=e.tabindex||"0",Object.assign(t,f.value)):!0===b.value&&(t["aria-disabled"]="true"),(0,r.h)(m.value,t,S())}}})},3115:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9835),i=n(5987),s=n(2026);const o=(0,i.L)({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=(0,r.Fl)((()=>parseInt(e.lines,10))),i=(0,r.Fl)((()=>"q-item__label"+(!0===e.overline?" q-item__label--overline text-overline":"")+(!0===e.caption?" q-item__label--caption text-caption":"")+(!0===e.header?" q-item__label--header":"")+(1===n.value?" ellipsis":""))),o=(0,r.Fl)((()=>void 0!==e.lines&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null));return()=>(0,r.h)("div",{style:o.value,class:i.value},(0,s.KR)(t.default))}})},1233:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9835),i=n(5987),s=n(2026);const o=(0,i.L)({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-item__section column q-item__section--"+(!0===e.avatar||!0===e.side||!0===e.thumbnail?"side":"main")+(!0===e.top?" q-item__section--top justify-start":" justify-center")+(!0===e.avatar?" q-item__section--avatar":"")+(!0===e.thumbnail?" q-item__section--thumbnail":"")+(!0===e.noWrap?" q-item__section--nowrap":"")));return()=>(0,r.h)("div",{class:n.value},(0,s.KR)(t.default))}})},3246:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(9835),i=n(5987),s=n(8234),o=n(2026);const a=(0,i.L)({name:"QList",props:{...s.S,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=(0,r.FN)(),i=(0,s.Z)(e,n.proxy.$q),a=(0,r.Fl)((()=>"q-list"+(!0===e.bordered?" q-list--bordered":"")+(!0===e.dense?" q-list--dense":"")+(!0===e.separator?" q-list--separator":"")+(!0===i.value?" q-list--dark":"")+(!0===e.padding?" q-list--padding":"")));return()=>(0,r.h)(e.tag,{class:a.value},(0,o.KR)(t.default))}})},7605:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(9835),i=n(499),s=n(7506),o=(n(6727),n(5987)),a=n(3701),l=n(1384);const{passive:c}=l.rU,u=["both","horizontal","vertical"],h=(0,o.L)({name:"QScrollObserver",props:{axis:{type:String,validator:e=>u.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i,s,o=null;function u(){null!==o&&o();const r=Math.max(0,(0,a.u3)(i)),s=(0,a.OI)(i),l={top:r-n.position.top,left:s-n.position.left};if("vertical"===e.axis&&0===l.top||"horizontal"===e.axis&&0===l.left)return;const c=Math.abs(l.top)>=Math.abs(l.left)?l.top<0?"up":"down":l.left<0?"left":"right";n.position={top:r,left:s},n.directionChanged=n.direction!==c,n.delta=l,!0===n.directionChanged&&(n.direction=c,n.inflectionPoint=n.position),t("scroll",{...n})}function h(){i=(0,a.b0)(s,e.scrollTarget),i.addEventListener("scroll",f,c),f(!0)}function d(){void 0!==i&&(i.removeEventListener("scroll",f,c),i=void 0)}function f(t){if(!0===t||0===e.debounce||"0"===e.debounce)u();else if(null===o){const[t,n]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];o=()=>{n(t),o=null}}}(0,r.YP)((()=>e.scrollTarget),(()=>{d(),h()}));const{proxy:p}=(0,r.FN)();return(0,r.YP)((()=>p.$q.lang.rtl),u),(0,r.bv)((()=>{s=p.$el.parentNode,h()})),(0,r.Jd)((()=>{null!==o&&o(),d()})),Object.assign(p,{trigger:f,getPosition:()=>n}),l.ZT}});var d=n(883),f=n(2026),p=n(5439);const m=(0,o.L)({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=(0,r.FN)(),l=(0,i.iH)(null),c=(0,i.iH)(o.screen.height),u=(0,i.iH)(!0===e.container?0:o.screen.width),m=(0,i.iH)({position:0,direction:"down",inflectionPoint:0}),g=(0,i.iH)(0),v=(0,i.iH)(!0===s.uX.value?0:(0,a.np)()),y=(0,r.Fl)((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),b=(0,r.Fl)((()=>!1===e.container?{minHeight:o.screen.height+"px"}:null)),w=(0,r.Fl)((()=>0!==v.value?{[!0===o.lang.rtl?"left":"right"]:`${v.value}px`}:null)),_=(0,r.Fl)((()=>0!==v.value?{[!0===o.lang.rtl?"right":"left"]:0,[!0===o.lang.rtl?"left":"right"]:`-${v.value}px`,width:`calc(100% + ${v.value}px)`}:null));function E(t){if(!0===e.container||!0!==document.qScrollPrevented){const r={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};m.value=r,void 0!==e.onScroll&&n("scroll",r)}}function T(t){const{height:r,width:i}=t;let s=!1;c.value!==r&&(s=!0,c.value=r,void 0!==e.onScrollHeight&&n("scrollHeight",r),S()),u.value!==i&&(s=!0,u.value=i),!0===s&&void 0!==e.onResize&&n("resize",t)}function k({height:e}){g.value!==e&&(g.value=e,S())}function S(){if(!0===e.container){const e=c.value>g.value?(0,a.np)():0;v.value!==e&&(v.value=e)}}let I;const x={instances:{},view:(0,r.Fl)((()=>e.view)),isContainer:(0,r.Fl)((()=>e.container)),rootRef:l,height:c,containerHeight:g,scrollbarWidth:v,totalWidth:(0,r.Fl)((()=>u.value+v.value)),rows:(0,r.Fl)((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:(0,i.qj)({size:0,offset:0,space:!1}),right:(0,i.qj)({size:300,offset:0,space:!1}),footer:(0,i.qj)({size:0,offset:0,space:!1}),left:(0,i.qj)({size:300,offset:0,space:!1}),scroll:m,animate(){void 0!==I?clearTimeout(I):document.body.classList.add("q-body--layout-animate"),I=setTimeout((()=>{document.body.classList.remove("q-body--layout-animate"),I=void 0}),155)},update(e,t,n){x[e][t]=n}};if((0,r.JJ)(p.YE,x),(0,a.np)()>0){let C=null;const A=document.body;function R(){C=null,A.classList.remove("hide-scrollbar")}function O(){if(null===C){if(A.scrollHeight>o.screen.height)return;A.classList.add("hide-scrollbar")}else clearTimeout(C);C=setTimeout(R,300)}function N(e){null!==C&&"remove"===e&&(clearTimeout(C),R()),window[`${e}EventListener`]("resize",O)}(0,r.YP)((()=>!0!==e.container?"add":"remove"),N),!0!==e.container&&N("add"),(0,r.Ah)((()=>{N("remove")}))}return()=>{const n=(0,f.vs)(t.default,[(0,r.h)(h,{onScroll:E}),(0,r.h)(d.Z,{onResize:T})]),i=(0,r.h)("div",{class:y.value,style:b.value,ref:!0===e.container?void 0:l,tabindex:-1},n);return!0===e.container?(0,r.h)("div",{class:"q-layout-container overflow-hidden",ref:l},[(0,r.h)(d.Z,{onResize:k}),(0,r.h)("div",{class:"absolute-full",style:w.value},[(0,r.h)("div",{class:"scroll",style:_.value},[i])])]):i}}})},9885:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(9835),i=n(5987),s=n(2026),o=n(5439);const a=(0,i.L)({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),i=(0,r.f3)(o.YE,o.qO);if(i===o.qO)return console.error("QPage needs to be a deep child of QLayout"),o.qO;const a=(0,r.f3)(o.Mw,o.qO);if(a===o.qO)return console.error("QPage needs to be child of QPageContainer"),o.qO;const l=(0,r.Fl)((()=>{const t=(!0===i.header.space?i.header.size:0)+(!0===i.footer.space?i.footer.size:0);if("function"===typeof e.styleFn){const r=!0===i.isContainer.value?i.containerHeight.value:n.screen.height;return e.styleFn(t,r)}return{minHeight:!0===i.isContainer.value?i.containerHeight.value-t+"px":0===n.screen.height?0!==t?`calc(100vh - ${t}px)`:"100vh":n.screen.height-t+"px"}})),c=(0,r.Fl)((()=>"q-page"+(!0===e.padding?" q-layout-padding":"")));return()=>(0,r.h)("main",{class:c.value,style:l.value},(0,s.KR)(t.default))}})},2133:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(9835),i=n(5987),s=n(2026),o=n(5439);const a=(0,i.L)({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),i=(0,r.f3)(o.YE,o.qO);if(i===o.qO)return console.error("QPageContainer needs to be child of QLayout"),o.qO;(0,r.JJ)(o.Mw,!0);const a=(0,r.Fl)((()=>{const e={};return!0===i.header.space&&(e.paddingTop=`${i.header.size}px`),!0===i.right.space&&(e["padding"+(!0===n.lang.rtl?"Left":"Right")]=`${i.right.size}px`),!0===i.footer.space&&(e.paddingBottom=`${i.footer.size}px`),!0===i.left.space&&(e["padding"+(!0===n.lang.rtl?"Right":"Left")]=`${i.left.size}px`),e}));return()=>(0,r.h)("div",{class:"q-page-container",style:a.value},(0,s.KR)(t.default))}})},1570:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});n(9665);var r=n(9835),i=n(499),s=n(2857),o=n(244),a=n(9256),l=n(5987),c=n(1384),u=n(321),h=n(2026);const d=(0,l.L)({name:"QRating",props:{...o.LU,...a.Fz,modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],iconAriaLabel:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=(0,r.FN)(),d=(0,o.ZP)(e),f=(0,a.Vt)(e),p=(0,a.eX)(f),m=(0,i.iH)(0);let g={};const v=(0,r.Fl)((()=>!0!==e.readonly&&!0!==e.disable)),y=(0,r.Fl)((()=>`q-rating row inline items-center q-rating--${!0===v.value?"":"non-"}editable`+(!0===e.noDimming?" q-rating--no-dimming":"")+(!0===e.disable?" disabled":"")+(void 0!==e.color&&!1===Array.isArray(e.color)?` text-${e.color}`:""))),b=(0,r.Fl)((()=>{const t=!0===Array.isArray(e.icon)?e.icon.length:0,n=!0===Array.isArray(e.iconSelected)?e.iconSelected.length:0,r=!0===Array.isArray(e.iconHalf)?e.iconHalf.length:0,i=!0===Array.isArray(e.color)?e.color.length:0,s=!0===Array.isArray(e.colorSelected)?e.colorSelected.length:0,o=!0===Array.isArray(e.colorHalf)?e.colorHalf.length:0;return{iconLen:t,icon:t>0?e.icon[t-1]:e.icon,selIconLen:n,selIcon:n>0?e.iconSelected[n-1]:e.iconSelected,halfIconLen:r,halfIcon:r>0?e.iconHalf[n-1]:e.iconHalf,colorLen:i,color:i>0?e.color[i-1]:e.color,selColorLen:s,selColor:s>0?e.colorSelected[s-1]:e.colorSelected,halfColorLen:o,halfColor:o>0?e.colorHalf[o-1]:e.colorHalf}})),w=(0,r.Fl)((()=>{if("string"===typeof e.iconAriaLabel){const t=e.iconAriaLabel.length>0?`${e.iconAriaLabel} `:"";return e=>`${t}${e}`}if(!0===Array.isArray(e.iconAriaLabel)){const t=e.iconAriaLabel.length;if(t>0)return n=>e.iconAriaLabel[Math.min(n,t)-1]}return(e,t)=>`${t} ${e}`})),_=(0,r.Fl)((()=>{const t=[],n=b.value,r=Math.ceil(e.modelValue),i=!0===v.value?0:null,s=void 0===e.iconHalf||r===e.modelValue?-1:r;for(let o=1;o<=e.max;o++){const a=0===m.value&&e.modelValue>=o||m.value>0&&m.value>=o,c=s===o&&m.value<o,u=m.value>0&&(!0===c?r:e.modelValue)>=o&&m.value<o,h=!0===c?o<=n.halfColorLen?e.colorHalf[o-1]:n.halfColor:void 0!==n.selColor&&!0===a?o<=n.selColorLen?e.colorSelected[o-1]:n.selColor:o<=n.colorLen?e.color[o-1]:n.color,d=(!0===c?o<=n.halfIconLen?e.iconHalf[o-1]:n.halfIcon:void 0===n.selIcon||!0!==a&&!0!==u?o<=n.iconLen?e.icon[o-1]:n.icon:o<=n.selIconLen?e.iconSelected[o-1]:n.selIcon)||l.iconSet.rating.icon;t.push({name:(!0===c?o<=n.halfIconLen?e.iconHalf[o-1]:n.halfIcon:void 0===n.selIcon||!0!==a&&!0!==u?o<=n.iconLen?e.icon[o-1]:n.icon:o<=n.selIconLen?e.iconSelected[o-1]:n.selIcon)||l.iconSet.rating.icon,attrs:{tabindex:i,role:"radio","aria-checked":e.modelValue===o?"true":"false","aria-label":w.value(o,d)},iconClass:"q-rating__icon"+(!0===a||!0===c?" q-rating__icon--active":"")+(!0===u?" q-rating__icon--exselected":"")+(m.value===o?" q-rating__icon--hovered":"")+(void 0!==h?` text-${h}`:"")})}return t})),E=(0,r.Fl)((()=>{const t={role:"radiogroup"};return!0===e.disable&&(t["aria-disabled"]="true"),!0===e.readonly&&(t["aria-readonly"]="true"),t}));function T(t){if(!0===v.value){const r=(0,u.vX)(parseInt(t,10),1,parseInt(e.max,10)),i=!0!==e.noReset&&e.modelValue===r?0:r;i!==e.modelValue&&n("update:modelValue",i),m.value=0}}function k(e){!0===v.value&&(m.value=e)}function S(e,t){switch(e.keyCode){case 13:case 32:return T(t),(0,c.NS)(e);case 37:case 40:return g["rt"+(t-1)]&&g["rt"+(t-1)].$el.focus(),(0,c.NS)(e);case 39:case 38:return g[`rt${t+1}`]&&g[`rt${t+1}`].$el.focus(),(0,c.NS)(e)}}function I(){m.value=0}return(0,r.Xn)((()=>{g={}})),()=>{const n=[];return _.value.forEach((({iconClass:e,name:i,attrs:o},a)=>{const l=a+1;n.push((0,r.h)("div",{key:l,ref:e=>{g[`rt${l}`]=e},class:"q-rating__icon-container flex flex-center",...o,onClick(){T(l)},onMouseover(){k(l)},onMouseout:I,onFocus(){k(l)},onBlur:I,onKeyup(e){S(e,l)}},(0,h.vs)(t[`tip-${l}`],[(0,r.h)(s.Z,{class:e,name:i})])))})),void 0!==e.name&&!0!==e.disable&&p(n,"push"),(0,r.h)("div",{class:y.value,style:d.value,...E.value},n)}}})},883:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(9835),i=n(499),s=n(7506);function o(){const e=(0,i.iH)(!s.uX.value);return!1===e.value&&(0,r.bv)((()=>{e.value=!0})),e}var a=n(5987),l=n(1384);const c="undefined"!==typeof ResizeObserver,u=!0===c?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},h=(0,a.L)({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n,i=null,s={width:-1,height:-1};function a(t){!0===t||0===e.debounce||"0"===e.debounce?h():null===i&&(i=setTimeout(h,e.debounce))}function h(){if(clearTimeout(i),i=null,n){const{offsetWidth:e,offsetHeight:r}=n;e===s.width&&r===s.height||(s={width:e,height:r},t("resize",s))}}const{proxy:d}=(0,r.FN)();if(!0===c){let f;const p=e=>{n=d.$el.parentNode,n?(f=new ResizeObserver(a),f.observe(n),h()):!0!==e&&(0,r.Y3)((()=>{p(!0)}))};return(0,r.bv)((()=>{p()})),(0,r.Jd)((()=>{clearTimeout(i),void 0!==f&&(void 0!==f.disconnect?f.disconnect():n&&f.unobserve(n))})),l.ZT}{const m=o();let g;function v(){clearTimeout(i),void 0!==g&&(void 0!==g.removeEventListener&&g.removeEventListener("resize",a,l.rU.passive),g=void 0)}function y(){v(),n&&n.contentDocument&&(g=n.contentDocument.defaultView,g.addEventListener("resize",a,l.rU.passive),h())}return(0,r.bv)((()=>{(0,r.Y3)((()=>{n=d.$el,n&&y()}))})),(0,r.Jd)(v),d.trigger=a,()=>{if(!0===m.value)return(0,r.h)("object",{style:u.style,tabindex:-1,type:"text/html",data:u.url,"aria-hidden":"true",onLoad:y})}}}})},926:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(9835),i=n(8234),s=n(5987);const o={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},a={xs:2,sm:4,md:8,lg:16,xl:24},l=(0,s.L)({name:"QSeparator",props:{...i.S,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=(0,r.FN)(),n=(0,i.Z)(e,t.proxy.$q),s=(0,r.Fl)((()=>!0===e.vertical?"vertical":"horizontal")),l=(0,r.Fl)((()=>` q-separator--${s.value}`)),c=(0,r.Fl)((()=>!1!==e.inset?`${l.value}-${o[e.inset]}`:"")),u=(0,r.Fl)((()=>`q-separator${l.value}${c.value}`+(void 0!==e.color?` bg-${e.color}`:"")+(!0===n.value?" q-separator--dark":""))),h=(0,r.Fl)((()=>{const t={};if(void 0!==e.size&&(t[!0===e.vertical?"width":"height"]=e.size),!1!==e.spaced){const n=!0===e.spaced?`${a.md}px`:e.spaced in a?`${a[e.spaced]}px`:e.spaced,r=!0===e.vertical?["Left","Right"]:["Top","Bottom"];t[`margin${r[0]}`]=t[`margin${r[1]}`]=n}return t}));return()=>(0,r.h)("hr",{class:u.value,style:h.value,"aria-orientation":s.value})}})},3940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(9835),i=n(244);const s={size:{type:[Number,String],default:"1em"},color:String};function o(e){return{cSize:(0,r.Fl)((()=>e.size in i.Ok?`${i.Ok[e.size]}px`:e.size)),classes:(0,r.Fl)((()=>"q-spinner"+(e.color?` text-${e.color}`:"")))}}var a=n(5987);const l=(0,a.L)({name:"QSpinner",props:{...s,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=o(e);return()=>(0,r.h)("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[(0,r.h)("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}})},1663:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9835),i=n(5987),s=n(2026);const o=(0,i.L)({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-toolbar row no-wrap items-center"+(!0===e.inset?" q-toolbar--inset":"")));return()=>(0,r.h)("div",{class:n.value,role:"toolbar"},(0,s.KR)(t.default))}})},1973:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9835),i=n(5987),s=n(2026);const o=(0,i.L)({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-toolbar__title ellipsis"+(!0===e.shrink?" col-shrink":"")));return()=>(0,r.h)("div",{class:n.value},(0,s.KR)(t.default))}})},5065:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a,jO:()=>o});n(6727);var r=n(9835);const i={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},s=Object.keys(i),o={align:{type:String,validator:e=>s.includes(e)}};function a(e){return(0,r.Fl)((()=>{const t=void 0===e.align?!0===e.vertical?"stretch":"left":e.align;return`${!0===e.vertical?"items":"justify"}-${i[t]}`}))}},8234:(e,t,n)=>{"use strict";n.d(t,{S:()=>i,Z:()=>s});var r=n(9835);const i={dark:{type:Boolean,default:null}};function s(e,t){return(0,r.Fl)((()=>null===e.dark?t.dark.isActive:e.dark))}},3167:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>U,yV:()=>D,HJ:()=>M,Cl:()=>F,tL:()=>q});n(9665);var r=n(9835),i=n(499),s=n(1957),o=n(7506),a=n(2857),l=n(3940),c=n(8234),u=(n(6727),n(5439));function h({validate:e,resetValidation:t,requiresQForm:n}){const i=(0,r.f3)(u.vh,!1);if(!1!==i){const{props:n,proxy:s}=(0,r.FN)();Object.assign(s,{validate:e,resetValidation:t}),(0,r.YP)((()=>n.disable),(e=>{!0===e?("function"===typeof t&&t(),i.unbindComponent(s)):i.bindComponent(s)})),(0,r.bv)((()=>{!0!==n.disable&&i.bindComponent(s)})),(0,r.Jd)((()=>{!0!==n.disable&&i.unbindComponent(s)}))}else!0===n&&console.error("Parent QForm not found on useFormChild()!")}const d=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,f=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,p=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,m=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,g=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,v={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>d.test(e),hexaColor:e=>f.test(e),hexOrHexaColor:e=>p.test(e),rgbColor:e=>m.test(e),rgbaColor:e=>g.test(e),rgbOrRgbaColor:e=>m.test(e)||g.test(e),hexOrRgbColor:e=>d.test(e)||m.test(e),hexaOrRgbaColor:e=>f.test(e)||g.test(e),anyColor:e=>p.test(e)||m.test(e)||g.test(e)};var y=n(899),b=n(3251);const w=[!0,!1,"ondemand"],_={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>w.includes(e)}};function E(e,t){const{props:n,proxy:s}=(0,r.FN)(),o=(0,i.iH)(!1),a=(0,i.iH)(null),l=(0,i.iH)(null);h({validate:w,resetValidation:g});let c,u=0;const d=(0,r.Fl)((()=>void 0!==n.rules&&null!==n.rules&&n.rules.length>0)),f=(0,r.Fl)((()=>!0!==n.disable&&!0===d.value)),p=(0,r.Fl)((()=>!0===n.error||!0===o.value)),m=(0,r.Fl)((()=>"string"===typeof n.errorMessage&&n.errorMessage.length>0?n.errorMessage:a.value));function g(){u++,t.value=!1,l.value=null,o.value=!1,a.value=null,E.cancel()}function w(e=n.modelValue){if(!0!==f.value)return!0;const r=++u,i=!0!==t.value?()=>{l.value=!0}:()=>{},s=(e,n)=>{!0===e&&i(),o.value=e,a.value=n||null,t.value=!1},c=[];for(let t=0;t<n.rules.length;t++){const r=n.rules[t];let i;if("function"===typeof r?i=r(e,v):"string"===typeof r&&void 0!==v[r]&&(i=v[r](e)),!1===i||"string"===typeof i)return s(!0,i),!1;!0!==i&&void 0!==i&&c.push(i)}return 0===c.length?(s(!1),!0):(t.value=!0,Promise.all(c).then((e=>{if(void 0===e||!1===Array.isArray(e)||0===e.length)return r===u&&s(!1),!0;const t=e.find((e=>!1===e||"string"===typeof e));return r===u&&s(void 0!==t,t),void 0===t}),(e=>(r===u&&(console.error(e),s(!0)),!1))))}function _(e){!0===f.value&&"ondemand"!==n.lazyRules&&(!0===l.value||!0!==n.lazyRules&&!0!==e)&&E()}(0,r.YP)((()=>n.modelValue),(()=>{_()})),(0,r.YP)((()=>n.reactiveRules),(e=>{!0===e?void 0===c&&(c=(0,r.YP)((()=>n.rules),(()=>{_(!0)}))):void 0!==c&&(c(),c=void 0)}),{immediate:!0}),(0,r.YP)(e,(e=>{!0===e?null===l.value&&(l.value=!1):!1===l.value&&(l.value=!0,!0===f.value&&"ondemand"!==n.lazyRules&&!1===t.value&&E())}));const E=(0,y.Z)(w,0);return(0,r.Jd)((()=>{void 0!==c&&c(),E.cancel()})),Object.assign(s,{resetValidation:g,validate:w}),(0,b.g)(s,"hasError",(()=>p.value)),{isDirtyModel:l,hasRules:d,hasError:p,errorMessage:m,validate:w,resetValidation:g}}const T=/^on[A-Z]/;function k(e,t){const n={listeners:(0,i.iH)({}),attributes:(0,i.iH)({})};function s(){const r={},i={};for(const t in e)"class"!==t&&"style"!==t&&!1===T.test(t)&&(r[t]=e[t]);for(const e in t.props)!0===T.test(e)&&(i[e]=t.props[e]);n.attributes.value=r,n.listeners.value=i}return(0,r.Xn)(s),s(),n}var S=n(2026);n(8170),n(5231),n(7725),n(9212),n(548),n(9359),n(6408);let I,x=0;const C=new Array(256);for(let V=0;V<256;V++)C[V]=(V+256).toString(16).substring(1);const A=(()=>{const e="undefined"!==typeof crypto?crypto:"undefined"!==typeof window?window.crypto||window.msCrypto:void 0;if(void 0!==e){if(void 0!==e.randomBytes)return e.randomBytes;if(void 0!==e.getRandomValues)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return e=>{const t=[];for(let n=e;n>0;n--)t.push(Math.floor(256*Math.random()));return t}})(),R=4096;function O(){(void 0===I||x+16>R)&&(x=0,I=A(R));const e=Array.prototype.slice.call(I,x,x+=16);return e[6]=15&e[6]|64,e[8]=63&e[8]|128,C[e[0]]+C[e[1]]+C[e[2]]+C[e[3]]+"-"+C[e[4]]+C[e[5]]+"-"+C[e[6]]+C[e[7]]+"-"+C[e[8]]+C[e[9]]+"-"+C[e[10]]+C[e[11]]+C[e[12]]+C[e[13]]+C[e[14]]+C[e[15]]}var N=n(1384),L=n(7026);function P(e){return void 0===e?`f_${O()}`:e}function D(e){return void 0!==e&&null!==e&&(""+e).length>0}const F={...c.S,..._,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},M=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function q(){const{props:e,attrs:t,proxy:n,vnode:s}=(0,r.FN)(),o=(0,c.Z)(e,n.$q);return{isDark:o,editable:(0,r.Fl)((()=>!0!==e.disable&&!0!==e.readonly)),innerLoading:(0,i.iH)(!1),focused:(0,i.iH)(!1),hasPopupOpen:!1,splitAttrs:k(t,s),targetUid:(0,i.iH)(P(e.for)),rootRef:(0,i.iH)(null),targetRef:(0,i.iH)(null),controlRef:(0,i.iH)(null)}}function U(e){const{props:t,emit:n,slots:i,attrs:c,proxy:u}=(0,r.FN)(),{$q:h}=u;let d;void 0===e.hasValue&&(e.hasValue=(0,r.Fl)((()=>D(t.modelValue)))),void 0===e.emitValue&&(e.emitValue=e=>{n("update:modelValue",e)}),void 0===e.controlEvents&&(e.controlEvents={onFocusin:F,onFocusout:M}),Object.assign(e,{clearValue:q,onControlFocusin:F,onControlFocusout:M,focus:R}),void 0===e.computedCounter&&(e.computedCounter=(0,r.Fl)((()=>{if(!1!==t.counter){const e="string"===typeof t.modelValue||"number"===typeof t.modelValue?(""+t.modelValue).length:!0===Array.isArray(t.modelValue)?t.modelValue.length:0,n=void 0!==t.maxlength?t.maxlength:t.maxValues;return e+(void 0!==n?" / "+n:"")}})));const{isDirtyModel:f,hasRules:p,hasError:m,errorMessage:g,resetValidation:v}=E(e.focused,e.innerLoading),y=void 0!==e.floatingLabel?(0,r.Fl)((()=>!0===t.stackLabel||!0===e.focused.value||!0===e.floatingLabel.value)):(0,r.Fl)((()=>!0===t.stackLabel||!0===e.focused.value||!0===e.hasValue.value)),b=(0,r.Fl)((()=>!0===t.bottomSlots||void 0!==t.hint||!0===p.value||!0===t.counter||null!==t.error)),w=(0,r.Fl)((()=>!0===t.filled?"filled":!0===t.outlined?"outlined":!0===t.borderless?"borderless":t.standout?"standout":"standard")),_=(0,r.Fl)((()=>`q-field row no-wrap items-start q-field--${w.value}`+(void 0!==e.fieldClass?` ${e.fieldClass.value}`:"")+(!0===t.rounded?" q-field--rounded":"")+(!0===t.square?" q-field--square":"")+(!0===y.value?" q-field--float":"")+(!0===k.value?" q-field--labeled":"")+(!0===t.dense?" q-field--dense":"")+(!0===t.itemAligned?" q-field--item-aligned q-item-type":"")+(!0===e.isDark.value?" q-field--dark":"")+(void 0===e.getControl?" q-field--auto-height":"")+(!0===e.focused.value?" q-field--focused":"")+(!0===m.value?" q-field--error":"")+(!0===m.value||!0===e.focused.value?" q-field--highlighted":"")+(!0!==t.hideBottomSpace&&!0===b.value?" q-field--with-bottom":"")+(!0===t.disable?" q-field--disabled":!0===t.readonly?" q-field--readonly":""))),T=(0,r.Fl)((()=>"q-field__control relative-position row no-wrap"+(void 0!==t.bgColor?` bg-${t.bgColor}`:"")+(!0===m.value?" text-negative":"string"===typeof t.standout&&t.standout.length>0&&!0===e.focused.value?` ${t.standout}`:void 0!==t.color?` text-${t.color}`:""))),k=(0,r.Fl)((()=>!0===t.labelSlot||void 0!==t.label)),I=(0,r.Fl)((()=>"q-field__label no-pointer-events absolute ellipsis"+(void 0!==t.labelColor&&!0!==m.value?` text-${t.labelColor}`:""))),x=(0,r.Fl)((()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:y.value,modelValue:t.modelValue,emitValue:e.emitValue}))),C=(0,r.Fl)((()=>{const n={for:e.targetUid.value};return!0===t.disable?n["aria-disabled"]="true":!0===t.readonly&&(n["aria-readonly"]="true"),n}));function A(){const t=document.activeElement;let n=void 0!==e.targetRef&&e.targetRef.value;!n||null!==t&&t.id===e.targetUid.value||(!0===n.hasAttribute("tabindex")||(n=n.querySelector("[tabindex]")),n&&n!==t&&n.focus({preventScroll:!0}))}function R(){(0,L.jd)(A)}function O(){(0,L.fP)(A);const t=document.activeElement;null!==t&&e.rootRef.value.contains(t)&&t.blur()}function F(t){clearTimeout(d),!0===e.editable.value&&!1===e.focused.value&&(e.focused.value=!0,n("focus",t))}function M(t,r){clearTimeout(d),d=setTimeout((()=>{(!0!==document.hasFocus()||!0!==e.hasPopupOpen&&void 0!==e.controlRef&&null!==e.controlRef.value&&!1===e.controlRef.value.contains(document.activeElement))&&(!0===e.focused.value&&(e.focused.value=!1,n("blur",t)),void 0!==r&&r())}))}function q(i){if((0,N.NS)(i),!0!==h.platform.is.mobile){const t=void 0!==e.targetRef&&e.targetRef.value||e.rootRef.value;t.focus()}else!0===e.rootRef.value.contains(document.activeElement)&&document.activeElement.blur();"file"===t.type&&(e.inputRef.value.value=null),n("update:modelValue",null),n("clear",t.modelValue),(0,r.Y3)((()=>{v(),!0!==h.platform.is.mobile&&(f.value=!1)}))}function U(){const n=[];return void 0!==i.prepend&&n.push((0,r.h)("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:N.X$},i.prepend())),n.push((0,r.h)("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},V())),!0===m.value&&!1===t.noErrorIcon&&n.push(B("error",[(0,r.h)(a.Z,{name:h.iconSet.field.error,color:"negative"})])),!0===t.loading||!0===e.innerLoading.value?n.push(B("inner-loading-append",void 0!==i.loading?i.loading():[(0,r.h)(l.Z,{color:t.color})])):!0===t.clearable&&!0===e.hasValue.value&&!0===e.editable.value&&n.push(B("inner-clearable-append",[(0,r.h)(a.Z,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||h.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:q})])),void 0!==i.append&&n.push((0,r.h)("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:N.X$},i.append())),void 0!==e.getInnerAppend&&n.push(B("inner-append",e.getInnerAppend())),void 0!==e.getControlChild&&n.push(e.getControlChild()),n}function V(){const n=[];return void 0!==t.prefix&&null!==t.prefix&&n.push((0,r.h)("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),void 0!==e.getShadowControl&&!0===e.hasShadow.value&&n.push(e.getShadowControl()),void 0!==e.getControl?n.push(e.getControl()):void 0!==i.rawControl?n.push(i.rawControl()):void 0!==i.control&&n.push((0,r.h)("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":!0===t.autofocus||void 0},i.control(x.value))),!0===k.value&&n.push((0,r.h)("div",{class:I.value},(0,S.KR)(i.label,t.label))),void 0!==t.suffix&&null!==t.suffix&&n.push((0,r.h)("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat((0,S.KR)(i.default))}function j(){let n,o;!0===m.value?null!==g.value?(n=[(0,r.h)("div",{role:"alert"},g.value)],o=`q--slot-error-${g.value}`):(n=(0,S.KR)(i.error),o="q--slot-error"):!0===t.hideHint&&!0!==e.focused.value||(void 0!==t.hint?(n=[(0,r.h)("div",t.hint)],o=`q--slot-hint-${t.hint}`):(n=(0,S.KR)(i.hint),o="q--slot-hint"));const a=!0===t.counter||void 0!==i.counter;if(!0===t.hideBottomSpace&&!1===a&&void 0===n)return;const l=(0,r.h)("div",{key:o,class:"q-field__messages col"},n);return(0,r.h)("div",{class:"q-field__bottom row items-start q-field__bottom--"+(!0!==t.hideBottomSpace?"animated":"stale"),onClick:N.X$},[!0===t.hideBottomSpace?l:(0,r.h)(s.uT,{name:"q-transition--field-message"},(()=>l)),!0===a?(0,r.h)("div",{class:"q-field__counter"},void 0!==i.counter?i.counter():e.computedCounter.value):null])}function B(e,t){return null===t?null:(0,r.h)("div",{key:e,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},t)}(0,r.YP)((()=>t.for),(t=>{e.targetUid.value=P(t)}));let $=!1;return(0,r.se)((()=>{$=!0})),(0,r.dl)((()=>{!0===$&&!0===t.autofocus&&u.focus()})),(0,r.bv)((()=>{!0===o.uX.value&&void 0===t.for&&(e.targetUid.value=P()),!0===t.autofocus&&u.focus()})),(0,r.Jd)((()=>{clearTimeout(d)})),Object.assign(u,{focus:R,blur:O}),function(){const n=void 0===e.getControl&&void 0===i.control?{...e.splitAttrs.attributes.value,"data-autofocus":!0===t.autofocus||void 0,...C.value}:C.value;return(0,r.h)("label",{ref:e.rootRef,class:[_.value,c.class],style:c.style,...n},[void 0!==i.before?(0,r.h)("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:N.X$},i.before()):null,(0,r.h)("div",{class:"q-field__inner relative-position col self-stretch"},[(0,r.h)("div",{ref:e.controlRef,class:T.value,tabindex:-1,...e.controlEvents},U()),!0===b.value?j():null]),void 0!==i.after?(0,r.h)("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:N.X$},i.after()):null])}}},7915:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(9835);function i(e,t){function n(){const t=e.modelValue;try{const e="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(t)===t&&("length"in t?Array.from(t):[t]).forEach((t=>{e.items.add(t)})),{files:e.files}}catch(n){return{files:void 0}}}return!0===t?(0,r.Fl)((()=>{if("file"===e.type)return n()})):(0,r.Fl)(n)}},9256:(e,t,n)=>{"use strict";n.d(t,{Do:()=>a,Fz:()=>i,Vt:()=>s,eX:()=>o});var r=n(9835);const i={name:String};function s(e){return(0,r.Fl)((()=>({type:"hidden",name:e.name,value:e.modelValue})))}function o(e={}){return(t,n,i)=>{t[n]((0,r.h)("input",{class:"hidden"+(i||""),...e.value}))}}function a(e){return(0,r.Fl)((()=>e.name||e.for))}},4953:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9835),i=n(5310);function s(e,t,n){let s;function o(){void 0!==s&&(i.Z.remove(s),s=void 0)}return(0,r.Jd)((()=>{!0===e.value&&o()})),{removeFromHistory:o,addToHistory(){s={condition:()=>!0===n.value,handler:t},i.Z.add(s)}}}},3842:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a,gH:()=>o,vr:()=>s});var r=n(9835),i=n(2046);const s={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},o=["beforeShow","show","beforeHide","hide"];function a({showing:e,canShow:t,hideOnRouteChange:n,handleShow:s,handleHide:o,processOnMount:a}){const l=(0,r.FN)(),{props:c,emit:u,proxy:h}=l;let d;function f(t){!0===e.value?g(t):p(t)}function p(e){if(!0===c.disable||void 0!==e&&!0===e.qAnchorHandled||void 0!==t&&!0!==t(e))return;const n=void 0!==c["onUpdate:modelValue"];!0===n&&(u("update:modelValue",!0),d=e,(0,r.Y3)((()=>{d===e&&(d=void 0)}))),null!==c.modelValue&&!1!==n||m(e)}function m(t){!0!==e.value&&(e.value=!0,u("beforeShow",t),void 0!==s?s(t):u("show",t))}function g(e){if(!0===c.disable)return;const t=void 0!==c["onUpdate:modelValue"];!0===t&&(u("update:modelValue",!1),d=e,(0,r.Y3)((()=>{d===e&&(d=void 0)}))),null!==c.modelValue&&!1!==t||v(e)}function v(t){!1!==e.value&&(e.value=!1,u("beforeHide",t),void 0!==o?o(t):u("hide",t))}function y(t){if(!0===c.disable&&!0===t)void 0!==c["onUpdate:modelValue"]&&u("update:modelValue",!1);else if(!0===t!==e.value){const e=!0===t?m:v;e(d)}}(0,r.YP)((()=>c.modelValue),y),void 0!==n&&!0===(0,i.Rb)(l)&&(0,r.YP)((()=>h.$route.fullPath),(()=>{!0===n.value&&!0===e.value&&g()})),!0===a&&(0,r.bv)((()=>{y(c.modelValue)}));const b={show:p,hide:g,toggle:f};return Object.assign(h,b),b}},9754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(1384),i=n(3701),s=n(7506);let o,a,l,c,u,h,d=0,f=!1;function p(e){m(e)&&(0,r.NS)(e)}function m(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=(0,r.AZ)(e),n=e.shiftKey&&!e.deltaX,s=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),o=n||s?e.deltaY:e.deltaX;for(let r=0;r<t.length;r++){const e=t[r];if((0,i.QA)(e,s))return s?o<0&&0===e.scrollTop||o>0&&e.scrollTop+e.clientHeight===e.scrollHeight:o<0&&0===e.scrollLeft||o>0&&e.scrollLeft+e.clientWidth===e.scrollWidth}return!0}function g(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function v(e){!0!==f&&(f=!0,requestAnimationFrame((()=>{f=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;void 0!==l&&t===window.innerHeight||(l=n-t,document.scrollingElement.scrollTop=r),r>l&&(document.scrollingElement.scrollTop-=Math.ceil((r-l)/8))})))}function y(e){const t=document.body,n=void 0!==window.visualViewport;if("add"===e){const{overflowY:e,overflowX:l}=window.getComputedStyle(t);o=(0,i.OI)(window),a=(0,i.u3)(window),c=t.style.left,u=t.style.top,t.style.left=`-${o}px`,t.style.top=`-${a}px`,"hidden"!==l&&("scroll"===l||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),"hidden"!==e&&("scroll"===e||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,!0===s.Lp.is.ios&&(!0===n?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",v,r.rU.passiveCapture),window.visualViewport.addEventListener("scroll",v,r.rU.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",g,r.rU.passiveCapture))}!0===s.Lp.is.desktop&&!0===s.Lp.is.mac&&window[`${e}EventListener`]("wheel",p,r.rU.notPassive),"remove"===e&&(!0===s.Lp.is.ios&&(!0===n?(window.visualViewport.removeEventListener("resize",v,r.rU.passiveCapture),window.visualViewport.removeEventListener("scroll",v,r.rU.passiveCapture)):window.removeEventListener("scroll",g,r.rU.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=c,t.style.top=u,window.scrollTo(o,a),l=void 0)}function b(e){let t="add";if(!0===e){if(d++,void 0!==h)return clearTimeout(h),void(h=void 0);if(d>1)return}else{if(0===d)return;if(d--,d>0)return;if(t="remove",!0===s.Lp.is.ios&&!0===s.Lp.is.nativeMobile)return clearTimeout(h),void(h=setTimeout((()=>{y(t),h=void 0}),100))}y(t)}function w(){let e;return{preventBodyScroll(t){t===e||void 0===e&&!0!==t||(e=t,b(t))}}}},945:(e,t,n)=>{"use strict";n.d(t,{$:()=>h,Z:()=>d});n(8964);var r=n(9835),i=n(2046);function s(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function o(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function a(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!1===Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function l(e,t){return!0===Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function c(e,t){return!0===Array.isArray(e)?l(e,t):!0===Array.isArray(t)?l(t,e):e===t}function u(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!1===c(e[n],t[n]))return!1;return!0}const h={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function d({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=(0,r.FN)(),{props:l,proxy:c,emit:h}=n,d=(0,i.Rb)(n),f=(0,r.Fl)((()=>!0!==l.disable&&void 0!==l.href)),p=!0===t?(0,r.Fl)((()=>!0===d&&!0!==l.disable&&!0!==f.value&&void 0!==l.to&&null!==l.to&&""!==l.to)):(0,r.Fl)((()=>!0===d&&!0!==f.value&&void 0!==l.to&&null!==l.to&&""!==l.to)),m=(0,r.Fl)((()=>!0===p.value?k(l.to):null)),g=(0,r.Fl)((()=>null!==m.value)),v=(0,r.Fl)((()=>!0===f.value||!0===g.value)),y=(0,r.Fl)((()=>"a"===l.type||!0===v.value?"a":l.tag||e||"div")),b=(0,r.Fl)((()=>!0===f.value?{href:l.href,target:l.target}:!0===g.value?{href:m.value.href,target:l.target}:{})),w=(0,r.Fl)((()=>{if(!1===g.value)return-1;const{matched:e}=m.value,{length:t}=e,n=e[t-1];if(void 0===n)return-1;const r=c.$route.matched;if(0===r.length)return-1;const i=r.findIndex(o.bind(null,n));if(i>-1)return i;const a=s(e[t-2]);return t>1&&s(n)===a&&r[r.length-1].path!==a?r.findIndex(o.bind(null,e[t-2])):i})),_=(0,r.Fl)((()=>!0===g.value&&-1!==w.value&&a(c.$route.params,m.value.params))),E=(0,r.Fl)((()=>!0===_.value&&w.value===c.$route.matched.length-1&&u(c.$route.params,m.value.params))),T=(0,r.Fl)((()=>!0===g.value?!0===E.value?` ${l.exactActiveClass} ${l.activeClass}`:!0===l.exact?"":!0===_.value?` ${l.activeClass}`:"":""));function k(e){try{return c.$router.resolve(e)}catch(t){}return null}function S(e,{returnRouterError:t,to:n=l.to,replace:r=l.replace}={}){if(!0===l.disable)return e.preventDefault(),Promise.resolve(!1);if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||void 0!==e.button&&0!==e.button||"_blank"===l.target)return Promise.resolve(!1);e.preventDefault();const i=c.$router[!0===r?"replace":"push"](n);return!0===t?i:i.then((()=>{})).catch((()=>{}))}function I(e){if(!0===g.value){const t=t=>S(e,t);h("click",e,t),!0!==e.defaultPrevented&&t()}else h("click",e)}return{hasRouterLink:g,hasHrefLink:f,hasLink:v,linkTag:y,resolvedLink:m,linkIsActive:_,linkIsExactActive:E,linkClass:T,linkAttrs:b,getLink:k,navigateToRouterLink:S,navigateOnClick:I}}},244:(e,t,n)=>{"use strict";n.d(t,{LU:()=>s,Ok:()=>i,ZP:()=>o});var r=n(9835);const i={xs:18,sm:24,md:32,lg:38,xl:46},s={size:String};function o(e,t=i){return(0,r.Fl)((()=>void 0!==e.size?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null))}},2695:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9835),i=n(2046);function s(){let e;const t=(0,r.FN)();function n(){clearTimeout(e)}return(0,r.se)(n),(0,r.Jd)(n),{removeTimeout:n,registerTimeout(n,r){clearTimeout(e),!1===(0,i.$D)(t)&&(e=setTimeout(n,r))}}}},2146:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(5987),i=n(2909),s=n(1705);function o(e){if(!1===e)return 0;if(!0===e||void 0===e)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const a=(0,r.f)({name:"close-popup",beforeMount(e,{value:t}){const n={depth:o(t),handler(t){0!==n.depth&&setTimeout((()=>{const r=(0,i.je)(e);void 0!==r&&(0,i.S7)(r,t,n.depth)}))},handlerKey(e){!0===(0,s.So)(e,13)&&n.handler(e)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=o(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}})},1136:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});n(9665);var r=n(5987),i=n(223),s=n(1384),o=n(1705);function a(e,t=250){let n,r=!1;return function(){return!1===r&&(r=!0,setTimeout((()=>{r=!1}),t),n=e.apply(this,arguments)),n}}function l(e,t,n,r){!0===n.modifiers.stop&&(0,s.sT)(e);const o=n.modifiers.color;let a=n.modifiers.center;a=!0===a||!0===r;const l=document.createElement("span"),c=document.createElement("span"),u=(0,s.FK)(e),{left:h,top:d,width:f,height:p}=t.getBoundingClientRect(),m=Math.sqrt(f*f+p*p),g=m/2,v=(f-m)/2+"px",y=a?v:u.left-h-g+"px",b=(p-m)/2+"px",w=a?b:u.top-d-g+"px";c.className="q-ripple__inner",(0,i.iv)(c,{height:`${m}px`,width:`${m}px`,transform:`translate3d(${y},${w},0) scale3d(.2,.2,1)`,opacity:0}),l.className="q-ripple"+(o?" text-"+o:""),l.setAttribute("dir","ltr"),l.appendChild(c),t.appendChild(l);const _=()=>{l.remove(),clearTimeout(E)};n.abort.push(_);let E=setTimeout((()=>{c.classList.add("q-ripple__inner--enter"),c.style.transform=`translate3d(${v},${b},0) scale3d(1,1,1)`,c.style.opacity=.2,E=setTimeout((()=>{c.classList.remove("q-ripple__inner--enter"),c.classList.add("q-ripple__inner--leave"),c.style.opacity=0,E=setTimeout((()=>{l.remove(),n.abort.splice(n.abort.indexOf(_),1)}),275)}),250)}),50)}function c(e,{modifiers:t,value:n,arg:r}){const i=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:!0===i.early,stop:!0===i.stop,center:!0===i.center,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}const u=(0,r.f)({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(!1===n.ripple)return;const r={cfg:n,enabled:!1!==t.value,modifiers:{},abort:[],start(t){!0===r.enabled&&!0!==t.qSkipRipple&&t.type===(!0===r.modifiers.early?"pointerdown":"click")&&l(t,e,r,!0===t.qKeyEvent)},keystart:a((t=>{!0===r.enabled&&!0!==t.qSkipRipple&&!0===(0,o.So)(t,r.modifiers.keyCodes)&&t.type==="key"+(!0===r.modifiers.early?"down":"up")&&l(t,e,r,!0)}),300)};c(r,t),e.__qripple=r,(0,s.M0)(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;void 0!==n&&(n.enabled=!1!==t.value,!0===n.enabled&&Object(t.value)===t.value&&c(n,t))}},beforeUnmount(e){const t=e.__qripple;void 0!==t&&(t.abort.forEach((e=>{e()})),(0,s.ul)(t,"main"),delete e._qripple)}})},5310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(9665),n(6727);var r=n(7506),i=n(1384);const s=()=>!0;function o(e){return"string"===typeof e&&""!==e&&"/"!==e&&"#/"!==e}function a(e){return!0===e.startsWith("#")&&(e=e.substring(1)),!1===e.startsWith("/")&&(e="/"+e),!0===e.endsWith("/")&&(e=e.substring(0,e.length-1)),"#"+e}function l(e){if(!1===e.backButtonExit)return()=>!1;if("*"===e.backButtonExit)return s;const t=["#/"];return!0===Array.isArray(e.backButtonExit)&&t.push(...e.backButtonExit.filter(o).map(a)),()=>t.includes(window.location.hash)}const c={__history:[],add:i.ZT,remove:i.ZT,install({$q:e}){if(!0===this.__installed)return;const{cordova:t,capacitor:n}=r.Lp.is;if(!0!==t&&!0!==n)return;const i=e.config[!0===t?"cordova":"capacitor"];if(void 0!==i&&!1===i.backButton)return;if(!0===n&&(void 0===window.Capacitor||void 0===window.Capacitor.Plugins.App))return;this.add=e=>{void 0===e.condition&&(e.condition=s),this.__history.push(e)},this.remove=e=>{const t=this.__history.indexOf(e);t>=0&&this.__history.splice(t,1)};const o=l(Object.assign({backButtonExit:!0},i)),a=()=>{if(this.__history.length){const e=this.__history[this.__history.length-1];!0===e.condition()&&(this.__history.pop(),e.handler())}else!0===o()?navigator.app.exitApp():window.history.back()};!0===t?document.addEventListener("deviceready",(()=>{document.addEventListener("backbutton",a,!1)})):window.Capacitor.Plugins.App.addListener("backButton",a)}}},7506:(e,t,n)=>{"use strict";n.d(t,{Lp:()=>m,ZP:()=>v,aG:()=>o,uX:()=>s});n(9665);var r=n(499),i=n(3251);const s=(0,r.iH)(!1);let o,a=!1;function l(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:t[0]||""}}function c(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const u="ontouchstart"in window||window.navigator.maxTouchPoints>0;function h(e){o={is:{...e}},delete e.mac,delete e.desktop;const t=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,{mobile:!0,ios:!0,platform:t,[t]:!0})}function d(e){const t=e.toLowerCase(),n=c(t),r=l(t,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return!0===s||t.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||!0===i.mobile&&!0!==i.ios&&!0!==s)&&(i.webkit=!0),i.edg&&(r.browser="edgechromium",i.edgeChromium=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,t.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(void 0!==window.Capacitor?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):void 0===window._cordovaNative&&void 0===window.cordova||(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),!0===u&&!0===i.mac&&(!0===i.desktop&&!0===i.safari||!0===i.nativeMobile&&!0!==i.android&&!0!==i.ios&&!0!==i.ipad)&&h(i)),i}const f=navigator.userAgent||navigator.vendor||window.opera,p={has:{touch:!1,webStorage:!1},within:{iframe:!1}},m={userAgent:f,is:d(f),has:{touch:u},within:{iframe:window.self!==window.top}},g={install(e){const{$q:t}=e;!0===s.value?(e.onSSRHydrated.push((()=>{s.value=!1,Object.assign(t.platform,m),o=void 0})),t.platform=(0,r.qj)(this)):t.platform=this}};{let e;(0,i.g)(m.has,"webStorage",(()=>{if(void 0!==e)return e;try{if(window.localStorage)return e=!0,!0}catch(t){}return e=!1,!1})),a=!0===m.is.ios&&-1===window.navigator.vendor.toLowerCase().indexOf("apple"),!0===s.value?Object.assign(g,m,o,p):Object.assign(g,m)}const v=g},899:(e,t,n)=>{"use strict";function r(e,t=250,n){let r;function i(){const i=arguments,s=()=>{r=void 0,!0!==n&&e.apply(this,i)};clearTimeout(r),!0===n&&void 0===r&&e.apply(this,i),r=setTimeout(s,t)}return i.cancel=()=>{clearTimeout(r)},i}n.d(t,{Z:()=>r})},223:(e,t,n)=>{"use strict";n.d(t,{iv:()=>i,mY:()=>o,sb:()=>s});var r=n(499);function i(e,t){const n=e.style;for(const r in t)n[r]=t[r]}function s(e){if(void 0===e||null===e)return;if("string"===typeof e)try{return document.querySelector(e)||void 0}catch(n){return}const t=(0,r.SU)(e);return t?t.$el||t:void 0}function o(e,t){if(void 0===e||null===e||!0===e.contains(t))return!0;for(let n=e.nextElementSibling;null!==n;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}},1384:(e,t,n)=>{"use strict";n.d(t,{AZ:()=>a,FK:()=>o,Jf:()=>h,M0:()=>d,NS:()=>u,X$:()=>c,ZT:()=>i,du:()=>s,rU:()=>r,sT:()=>l,ul:()=>f});n(9665);const r={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(r,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch(p){}function i(){}function s(e){return 0===e.button}function o(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function a(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}}function l(e){e.stopPropagation()}function c(e){!1!==e.cancelable&&e.preventDefault()}function u(e){!1!==e.cancelable&&e.preventDefault(),e.stopPropagation()}function h(e,t){if(void 0===e||!0===t&&!0===e.__dragPrevented)return;const n=!0===t?e=>{e.__dragPrevented=!0,e.addEventListener("dragstart",c,r.notPassiveCapture)}:e=>{delete e.__dragPrevented,e.removeEventListener("dragstart",c,r.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function d(e,t,n){const i=`__q_${t}_evt`;e[i]=void 0!==e[i]?e[i].concat(n):n,n.forEach((t=>{t[0].addEventListener(t[1],e[t[2]],r[t[3]])}))}function f(e,t){const n=`__q_${t}_evt`;void 0!==e[n]&&(e[n].forEach((t=>{t[0].removeEventListener(t[1],e[t[2]],r[t[3]])})),e[n]=void 0)}},321:(e,t,n)=>{"use strict";n.d(t,{rB:()=>i,vX:()=>s});const r=["B","KB","MB","GB","TB","PB"];function i(e){let t=0;while(parseInt(e,10)>=1024&&t<r.length-1)e/=1024,++t;return`${e.toFixed(1)}${r[t]}`}function s(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}},5987:(e,t,n)=>{"use strict";n.d(t,{L:()=>s,f:()=>o});var r=n(499),i=n(9835);const s=e=>(0,r.Xl)((0,i.aZ)(e)),o=e=>(0,r.Xl)(e)},7026:(e,t,n)=>{"use strict";n.d(t,{YX:()=>o,fP:()=>c,jd:()=>l,xF:()=>a});n(9665);let r=[],i=[];function s(e){i=i.filter((t=>t!==e))}function o(e){s(e),i.push(e)}function a(e){s(e),0===i.length&&r.length>0&&(r[r.length-1](),r=[])}function l(e){0===i.length?e():r.push(e)}function c(e){r=r.filter((t=>t!==e))}},7495:(e,t,n)=>{"use strict";n.d(t,{Uf:()=>i,tP:()=>s,w6:()=>r});const r={};let i=!1;function s(){i=!0}},3251:(e,t,n)=>{"use strict";function r(e,t,n,r){return Object.defineProperty(e,t,{get:n,set:r,enumerable:!0}),e}n.d(t,{g:()=>r})},1705:(e,t,n)=>{"use strict";n.d(t,{So:()=>o,Wm:()=>s,ZK:()=>i});n(6727);let r=!1;function i(e){r=!0===e.isComposing}function s(e){return!0===r||e!==Object(e)||!0===e.isComposing||!0===e.qKeyEvent}function o(e,t){return!0!==s(e)&&[].concat(t).includes(e.keyCode)}},2909:(e,t,n)=>{"use strict";n.d(t,{Q$:()=>i,S7:()=>a,je:()=>s});var r=n(2046);const i=[];function s(e){return i.find((t=>null!==t.contentEl&&t.contentEl.contains(e)))}function o(e,t){do{if("QMenu"===e.$options.name){if(e.hide(t),!0===e.$props.separateClosePopup)return(0,r.O2)(e)}else if(!0===e.__qPortal){const n=(0,r.O2)(e);return void 0!==n&&"QPopupProxy"===n.$options.name?(e.hide(t),n):e}e=(0,r.O2)(e)}while(void 0!==e&&null!==e)}function a(e,t,n){while(0!==n&&void 0!==e&&null!==e){if(!0===e.__qPortal){if(n--,"QMenu"===e.$options.name){e=o(e,t);continue}e.hide(t)}e=(0,r.O2)(e)}}},2026:(e,t,n)=>{"use strict";n.d(t,{Bl:()=>s,Jl:()=>l,KR:()=>i,pf:()=>a,vs:()=>o});var r=n(9835);function i(e,t){return void 0!==e&&e()||t}function s(e,t){if(void 0!==e){const t=e();if(void 0!==t&&null!==t)return t.slice()}return t}function o(e,t){return void 0!==e?t.concat(e()):t}function a(e,t){return void 0===e?t:void 0!==t?t.concat(e()):e()}function l(e,t,n,i,s,o){t.key=i+s;const a=(0,r.h)(e,t,n);return!0===s?(0,r.wy)(a,o()):a}},5439:(e,t,n)=>{"use strict";n.d(t,{Mw:()=>s,Ng:()=>r,YE:()=>i,qO:()=>a,vh:()=>o});const r="_q_",i="_q_l_",s="_q_pc_",o="_q_fo_",a=()=>{}},2046:(e,t,n)=>{"use strict";function r(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;while(Object(t)===t){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function i(e){return void 0!==e.appContext.config.globalProperties.$router}function s(e){return!0===e.isUnmounted||!0===e.isDeactivated}n.d(t,{$D:()=>s,O2:()=>r,Rb:()=>i})},3701:(e,t,n)=>{"use strict";n.d(t,{OI:()=>a,QA:()=>u,b0:()=>s,np:()=>c,u3:()=>o});n(6727);var r=n(223);const i=[null,document,document.body,document.scrollingElement,document.documentElement];function s(e,t){let n=(0,r.sb)(t);if(void 0===n){if(void 0===e||null===e)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return i.includes(n)?window:n}function o(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function a(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let l;function c(){if(void 0!==l)return l;const e=document.createElement("p"),t=document.createElement("div");(0,r.iv)(e,{width:"100%",height:"200px"}),(0,r.iv)(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let i=e.offsetWidth;return n===i&&(i=t.clientWidth),t.remove(),l=n-i,l}function u(e,t=!0){return!(!e||e.nodeType!==Node.ELEMENT_NODE)&&(t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"])))}},7198:(e,t,n)=>{"use strict";n.d(t,{Z:()=>F});n(6727);var r=n(7506),i=(n(9665),n(499)),s=n(3251);const o=(e,t)=>{const n=(0,i.qj)(e);for(const r in e)(0,s.g)(t,r,(()=>n[r]),(e=>{n[r]=e}));return t};var a=n(1384),l=n(899);const c=["sm","md","lg","xl"],{passive:u}=a.rU,h=o({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:a.ZT,setDebounce:a.ZT,install({$q:e,onSSRHydrated:t}){if(e.screen=this,!0===this.__installed)return void(void 0!==e.config.screen&&(!1===e.config.screen.bodyClasses?document.body.classList.remove(`screen--${this.name}`):this.__update(!0)));const{visualViewport:n}=window,i=n||window,s=document.scrollingElement||document.documentElement,o=void 0===n||!0===r.Lp.is.mobile?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],a=void 0!==e.config.screen&&!0===e.config.screen.bodyClasses;this.__update=e=>{const[t,n]=o();if(n!==this.height&&(this.height=n),t!==this.width)this.width=t;else if(!0!==e)return;let r=this.sizes;this.gt.xs=t>=r.sm,this.gt.sm=t>=r.md,this.gt.md=t>=r.lg,this.gt.lg=t>=r.xl,this.lt.sm=t<r.sm,this.lt.md=t<r.md,this.lt.lg=t<r.lg,this.lt.xl=t<r.xl,this.xs=this.lt.sm,this.sm=!0===this.gt.xs&&!0===this.lt.md,this.md=!0===this.gt.sm&&!0===this.lt.lg,this.lg=!0===this.gt.md&&!0===this.lt.xl,this.xl=this.gt.lg,r=(!0===this.xs?"xs":!0===this.sm&&"sm")||!0===this.md&&"md"||!0===this.lg&&"lg"||"xl",r!==this.name&&(!0===a&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${r}`)),this.name=r)};let h,d={},f=16;this.setSizes=e=>{c.forEach((t=>{void 0!==e[t]&&(d[t]=e[t])}))},this.setDebounce=e=>{f=e};const p=()=>{const e=getComputedStyle(document.body);e.getPropertyValue("--q-size-sm")&&c.forEach((t=>{this.sizes[t]=parseInt(e.getPropertyValue(`--q-size-${t}`),10)})),this.setSizes=e=>{c.forEach((t=>{e[t]&&(this.sizes[t]=e[t])})),this.__update(!0)},this.setDebounce=e=>{void 0!==h&&i.removeEventListener("resize",h,u),h=e>0?(0,l.Z)(this.__update,e):this.__update,i.addEventListener("resize",h,u)},this.setDebounce(f),Object.keys(d).length>0?(this.setSizes(d),d=void 0):this.__update(),!0===a&&"xs"===this.name&&document.body.classList.add("screen--xs")};!0===r.uX.value?t.push(p):p()}});n(8964);const d=o({isActive:!1,mode:!1},{__media:void 0,set(e){d.mode=e,"auto"===e?(void 0===d.__media&&(d.__media=window.matchMedia("(prefers-color-scheme: dark)"),d.__updateMedia=()=>{d.set("auto")},d.__media.addListener(d.__updateMedia)),e=d.__media.matches):void 0!==d.__media&&(d.__media.removeListener(d.__updateMedia),d.__media=void 0),d.isActive=!0===e,document.body.classList.remove("body--"+(!0===e?"light":"dark")),document.body.classList.add("body--"+(!0===e?"dark":"light"))},toggle(){d.set(!1===d.isActive)},install({$q:e,onSSRHydrated:t,ssrContext:n}){const{dark:i}=e.config;if(e.dark=this,!0===this.__installed&&void 0===i)return;this.isActive=!0===i;const s=void 0!==i&&i;if(!0===r.uX.value){const e=e=>{this.__fromSSR=e},n=this.set;this.set=e,e(s),t.push((()=>{this.set=n,this.set(this.__fromSSR)}))}else this.set(s)}}),f=d;var p=n(5310);const m={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>1===e?"1 record selected.":(0===e?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function g(){const e=!0===Array.isArray(navigator.languages)&&navigator.languages.length>0?navigator.languages[0]:navigator.language;if("string"===typeof e)return e.split(/[-_]/).map(((e,t)=>0===t?e.toLowerCase():t>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase())).join("-")}const v=o({__langPack:{}},{getLocale:g,set(e=m,t){const n={...e,rtl:!0===e.rtl,getLocale:g};{const e=document.documentElement;e.setAttribute("dir",!0===n.rtl?"rtl":"ltr"),e.setAttribute("lang",n.isoName),n.set=v.set,Object.assign(v.__langPack,n),v.props=n,v.isoName=n.isoName,v.nativeName=n.nativeName}},install({$q:e,lang:t,ssrContext:n}){e.lang=v.__langPack,!0===this.__installed?void 0!==t&&this.set(t):this.set(t||m)}}),y=v;n(6822);function b(e,t,n=document.body){if("string"!==typeof e)throw new TypeError("Expected a string as propName");if("string"!==typeof t)throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}var w=n(1705);function _(e){return!0===e.ios?"ios":!0===e.android?"android":void 0}function E({is:e,has:t,within:n},r){const i=[!0===e.desktop?"desktop":"mobile",(!1===t.touch?"no-":"")+"touch"];if(!0===e.mobile){const t=_(e);void 0!==t&&i.push("platform-"+t)}if(!0===e.nativeMobile){const t=e.nativeMobileWrapper;i.push(t),i.push("native-mobile"),!0!==e.ios||void 0!==r[t]&&!1===r[t].iosStatusBarPadding||i.push("q-ios-padding")}else!0===e.electron?i.push("electron"):!0===e.bex&&i.push("bex");return!0===n.iframe&&i.push("within-iframe"),i}function T(){const e=document.body.className;let t=e;void 0!==r.aG&&(t=t.replace("desktop","platform-ios mobile")),!0===r.Lp.has.touch&&(t=t.replace("no-touch","touch")),!0===r.Lp.within.iframe&&(t+=" within-iframe"),e!==t&&(document.body.className=t)}function k(e){for(const t in e)b(t,e[t])}const S={install(e){if(!0!==this.__installed){if(!0===r.uX.value)T();else{const{$q:t}=e;void 0!==t.config.brand&&k(t.config.brand);const n=E(r.Lp,t.config);document.body.classList.add.apply(document.body.classList,n)}!0===r.Lp.is.ios&&document.body.addEventListener("touchstart",a.ZT),window.addEventListener("keydown",w.ZK,!0)}}},I={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},x=o({iconMapFn:null,__icons:{}},{set(e,t){const n={...e,rtl:!0===e.rtl};n.set=x.set,Object.assign(x.__icons,n)},install({$q:e,iconSet:t,ssrContext:n}){void 0!==e.config.iconMapFn&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__icons,(0,s.g)(e,"iconMapFn",(()=>this.iconMapFn),(e=>{this.iconMapFn=e})),!0===this.__installed?void 0!==t&&this.set(t):this.set(t||I)}}),C=x;var A=n(5439),R=n(7495);n(3122);function O(e){return null!==e&&"object"===typeof e&&!0!==Array.isArray(e)}const N=[r.ZP,S,f,h,p.Z,y,C];function L(e,t){t.forEach((t=>{t.install(e),t.__installed=!0}))}function P(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(A.Ng,n.$q),L(n,N),void 0!==t.components&&Object.values(t.components).forEach((t=>{!0===O(t)&&void 0!==t.name&&e.component(t.name,t)})),void 0!==t.directives&&Object.values(t.directives).forEach((t=>{!0===O(t)&&void 0!==t.name&&e.directive(t.name,t)})),void 0!==t.plugins&&L(n,Object.values(t.plugins).filter((e=>"function"===typeof e.install&&!1===N.includes(e)))),!0===r.uX.value&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach((e=>{e()})),n.$q.onSSRHydrated=()=>{}})}const D=function(e,t={}){const n={version:"2.10.2"};!1===R.Uf?(void 0!==t.config&&Object.assign(R.w6,t.config),n.config={...R.w6},(0,R.tP)()):n.config=t.config||{},P(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},F={version:"2.10.2",install:D,lang:y,iconSet:C}},8762:(e,t,n)=>{var r=n(6107),i=n(7545),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},9667:(e,t,n)=>{var r=n(9627),i=n(7545),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a constructor")}},9220:(e,t,n)=>{var r=n(6107),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},5323:(e,t,n)=>{var r=n(4103),i=n(5267),s=n(1012).f,o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},3366:(e,t,n)=>{"use strict";var r=n(6823).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},8406:(e,t,n)=>{var r=n(6123),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},616:(e,t,n)=>{var r=n(1419),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},8389:e=>{e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},8086:(e,t,n)=>{"use strict";var r,i,s,o=n(8389),a=n(4133),l=n(3834),c=n(6107),u=n(1419),h=n(2924),d=n(4239),f=n(7545),p=n(4722),m=n(4076),g=n(1012).f,v=n(6123),y=n(7886),b=n(6534),w=n(4103),_=n(3965),E=n(780),T=E.enforce,k=E.get,S=l.Int8Array,I=S&&S.prototype,x=l.Uint8ClampedArray,C=x&&x.prototype,A=S&&y(S),R=I&&y(I),O=Object.prototype,N=l.TypeError,L=w("toStringTag"),P=_("TYPED_ARRAY_TAG"),D="TypedArrayConstructor",F=o&&!!b&&"Opera"!==d(l.opera),M=!1,q={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},V=function(e){if(!u(e))return!1;var t=d(e);return"DataView"===t||h(q,t)||h(U,t)},j=function(e){var t=y(e);if(u(t)){var n=k(t);return n&&h(n,D)?n[D]:j(t)}},B=function(e){if(!u(e))return!1;var t=d(e);return h(q,t)||h(U,t)},$=function(e){if(B(e))return e;throw N("Target is not a typed array")},z=function(e){if(c(e)&&(!b||v(A,e)))return e;throw N(f(e)+" is not a typed array constructor")},H=function(e,t,n,r){if(a){if(n)for(var i in q){var s=l[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(c){}}}R[e]&&!n||m(R,e,n?t:F&&I[e]||t,r)}},K=function(e,t,n){var r,i;if(a){if(b){if(n)for(r in q)if(i=l[r],i&&h(i,e))try{delete i[e]}catch(s){}if(A[e]&&!n)return;try{return m(A,e,n?t:F&&A[e]||t)}catch(s){}}for(r in q)i=l[r],!i||i[e]&&!n||m(i,e,t)}};for(r in q)i=l[r],s=i&&i.prototype,s?T(s)[D]=i:F=!1;for(r in U)i=l[r],s=i&&i.prototype,s&&(T(s)[D]=i);if((!F||!c(A)||A===Function.prototype)&&(A=function(){throw N("Incorrect invocation")},F))for(r in q)l[r]&&b(l[r],A);if((!F||!R||R===O)&&(R=A.prototype,F))for(r in q)l[r]&&b(l[r].prototype,R);if(F&&y(C)!==R&&b(C,R),a&&!h(R,L))for(r in M=!0,g(R,L,{get:function(){return u(this)?this[P]:void 0}}),q)l[r]&&p(l[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:F,TYPED_ARRAY_TAG:M&&P,aTypedArray:$,aTypedArrayConstructor:z,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:j,isView:V,isTypedArray:B,TypedArray:A,TypedArrayPrototype:R}},2248:(e,t,n)=>{"use strict";var r=n(3834),i=n(1636),s=n(4133),o=n(8389),a=n(9104),l=n(4722),c=n(2714),u=n(8814),h=n(8406),d=n(6675),f=n(7302),p=n(4686),m=n(9798),g=n(7886),v=n(6534),y=n(3450).f,b=n(1012).f,w=n(5408),_=n(6378),E=n(2365),T=n(780),k=a.PROPER,S=a.CONFIGURABLE,I=T.get,x=T.set,C="ArrayBuffer",A="DataView",R="prototype",O="Wrong length",N="Wrong index",L=r[C],P=L,D=P&&P[R],F=r[A],M=F&&F[R],q=Object.prototype,U=r.Array,V=r.RangeError,j=i(w),B=i([].reverse),$=m.pack,z=m.unpack,H=function(e){return[255&e]},K=function(e){return[255&e,e>>8&255]},W=function(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]},G=function(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]},J=function(e){return $(e,23,4)},Q=function(e){return $(e,52,8)},Y=function(e,t){b(e[R],t,{get:function(){return I(this)[t]}})},X=function(e,t,n,r){var i=p(n),s=I(e);if(i+t>s.byteLength)throw V(N);var o=I(s.buffer).bytes,a=i+s.byteOffset,l=_(o,a,a+t);return r?l:B(l)},Z=function(e,t,n,r,i,s){var o=p(n),a=I(e);if(o+t>a.byteLength)throw V(N);for(var l=I(a.buffer).bytes,c=o+a.byteOffset,u=r(+i),h=0;h<t;h++)l[c+h]=u[s?h:t-h-1]};if(o){var ee=k&&L.name!==C;if(u((function(){L(1)}))&&u((function(){new L(-1)}))&&!u((function(){return new L,new L(1.5),new L(NaN),1!=L.length||ee&&!S})))ee&&S&&l(L,"name",C);else{P=function(e){return h(this,D),new L(p(e))},P[R]=D;for(var te,ne=y(L),re=0;ne.length>re;)(te=ne[re++])in P||l(P,te,L[te]);D.constructor=P}v&&g(M)!==q&&v(M,q);var ie=new F(new P(2)),se=i(M.setInt8);ie.setInt8(0,2147483648),ie.setInt8(1,2147483649),!ie.getInt8(0)&&ie.getInt8(1)||c(M,{setInt8:function(e,t){se(this,e,t<<24>>24)},setUint8:function(e,t){se(this,e,t<<24>>24)}},{unsafe:!0})}else P=function(e){h(this,D);var t=p(e);x(this,{bytes:j(U(t),0),byteLength:t}),s||(this.byteLength=t)},D=P[R],F=function(e,t,n){h(this,M),h(e,D);var r=I(e).byteLength,i=d(t);if(i<0||i>r)throw V("Wrong offset");if(n=void 0===n?r-i:f(n),i+n>r)throw V(O);x(this,{buffer:e,byteLength:n,byteOffset:i}),s||(this.buffer=e,this.byteLength=n,this.byteOffset=i)},M=F[R],s&&(Y(P,"byteLength"),Y(F,"buffer"),Y(F,"byteLength"),Y(F,"byteOffset")),c(M,{getInt8:function(e){return X(this,1,e)[0]<<24>>24},getUint8:function(e){return X(this,1,e)[0]},getInt16:function(e){var t=X(this,2,e,arguments.length>1?arguments[1]:void 0);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=X(this,2,e,arguments.length>1?arguments[1]:void 0);return t[1]<<8|t[0]},getInt32:function(e){return G(X(this,4,e,arguments.length>1?arguments[1]:void 0))},getUint32:function(e){return G(X(this,4,e,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(e){return z(X(this,4,e,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(e){return z(X(this,8,e,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(e,t){Z(this,1,e,H,t)},setUint8:function(e,t){Z(this,1,e,H,t)},setInt16:function(e,t){Z(this,2,e,K,t,arguments.length>2?arguments[2]:void 0)},setUint16:function(e,t){Z(this,2,e,K,t,arguments.length>2?arguments[2]:void 0)},setInt32:function(e,t){Z(this,4,e,W,t,arguments.length>2?arguments[2]:void 0)},setUint32:function(e,t){Z(this,4,e,W,t,arguments.length>2?arguments[2]:void 0)},setFloat32:function(e,t){Z(this,4,e,J,t,arguments.length>2?arguments[2]:void 0)},setFloat64:function(e,t){Z(this,8,e,Q,t,arguments.length>2?arguments[2]:void 0)}});E(P,C),E(F,A),e.exports={ArrayBuffer:P,DataView:F}},5408:(e,t,n)=>{"use strict";var r=n(8332),i=n(2661),s=n(8600);e.exports=function(e){var t=r(this),n=s(t),o=arguments.length,a=i(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,c=void 0===l?n:i(l,n);while(c>a)t[a++]=e;return t}},7714:(e,t,n)=>{var r=n(7447),i=n(2661),s=n(8600),o=function(e){return function(t,n,o){var a,l=r(t),c=s(l),u=i(o,c);if(e&&n!=n){while(c>u)if(a=l[u++],a!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},9275:(e,t,n)=>{var r=n(6158),i=n(3972),s=n(8332),o=n(8600),a=function(e){var t=1==e;return function(n,a,l){var c,u,h=s(n),d=i(h),f=r(a,l),p=o(d);while(p-- >0)if(c=d[p],u=f(c,p,h),u)switch(e){case 0:return c;case 1:return p}return t?-1:void 0}};e.exports={findLast:a(0),findLastIndex:a(1)}},9226:(e,t,n)=>{var r=n(6158),i=n(1636),s=n(3972),o=n(8332),a=n(8600),l=n(4837),c=i([].push),u=function(e){var t=1==e,n=2==e,i=3==e,u=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,m,g,v){for(var y,b,w=o(p),_=s(w),E=r(m,g),T=a(_),k=0,S=v||l,I=t?S(p,T):n||d?S(p,0):void 0;T>k;k++)if((f||k in _)&&(y=_[k],b=E(y,k,w),e))if(t)I[k]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return k;case 2:c(I,y)}else switch(e){case 4:return!1;case 7:c(I,y)}return h?-1:i||u?u:I}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},3614:(e,t,n)=>{"use strict";var r=n(4133),i=n(6555),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},6378:(e,t,n)=>{var r=n(2661),i=n(8600),s=n(5976),o=Array,a=Math.max;e.exports=function(e,t,n){for(var l=i(e),c=r(t,l),u=r(void 0===n?l:n,l),h=o(a(u-c,0)),d=0;c<u;c++,d++)s(h,d,e[c]);return h.length=d,h}},7085:(e,t,n)=>{var r=n(6378),i=Math.floor,s=function(e,t){var n=e.length,l=i(n/2);return n<8?o(e,t):a(e,s(r(e,0,l),t),s(r(e,l),t),t)},o=function(e,t){var n,r,i=e.length,s=1;while(s<i){r=s,n=e[s];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==s++&&(e[r]=n)}return e},a=function(e,t,n,r){var i=t.length,s=n.length,o=0,a=0;while(o<i||a<s)e[o+a]=o<i&&a<s?r(t[o],n[a])<=0?t[o++]:n[a++]:o<i?t[o++]:n[a++];return e};e.exports=s},4622:(e,t,n)=>{var r=n(6555),i=n(9627),s=n(1419),o=n(4103),a=o("species"),l=Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,i(t)&&(t===l||r(t.prototype))?t=void 0:s(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?l:t}},4837:(e,t,n)=>{var r=n(4622);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},8272:(e,t,n)=>{var r=n(4103),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(l){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(l){}return n}},6749:(e,t,n)=>{var r=n(1636),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},4239:(e,t,n)=>{var r=n(4130),i=n(6107),s=n(6749),o=n(4103),a=o("toStringTag"),l=Object,c="Arguments"==s(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=l(e),a))?n:c?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},7366:(e,t,n)=>{var r=n(2924),i=n(1240),s=n(863),o=n(1012);e.exports=function(e,t,n){for(var a=i(t),l=o.f,c=s.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||l(e,h,c(t,h))}}},911:(e,t,n)=>{var r=n(8814);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},4722:(e,t,n)=>{var r=n(4133),i=n(1012),s=n(3386);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},3386:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},5976:(e,t,n)=>{"use strict";var r=n(1017),i=n(1012),s=n(3386);e.exports=function(e,t,n){var o=r(t);o in e?i.f(e,o,s(0,n)):e[o]=n}},9570:(e,t,n)=>{var r=n(2358),i=n(1012);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},4076:(e,t,n)=>{var r=n(6107),i=n(1012),s=n(2358),o=n(5437);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:t;if(r(n)&&s(n,c,a),a.global)l?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(u){}l?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},2714:(e,t,n)=>{var r=n(4076);e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},5437:(e,t,n)=>{var r=n(3834),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6405:(e,t,n)=>{"use strict";var r=n(7545),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},4133:(e,t,n)=>{var r=n(8814);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},948:e=>{var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},1657:(e,t,n)=>{var r=n(3834),i=n(1419),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},6689:e=>{var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},259:(e,t,n)=>{var r=n(322),i=r.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},1280:(e,t,n)=>{var r=n(322);e.exports=/MSIE|Trident/.test(r)},322:(e,t,n)=>{var r=n(7859);e.exports=r("navigator","userAgent")||""},1418:(e,t,n)=>{var r,i,s=n(3834),o=n(322),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},7433:(e,t,n)=>{var r=n(322),i=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},203:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7940:(e,t,n)=>{var r=n(1636),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(o);e.exports=function(e,t){if(l&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},9277:(e,t,n)=>{var r=n(8814),i=n(3386);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},6943:(e,t,n)=>{var r=n(3834),i=n(863).f,s=n(4722),o=n(4076),a=n(5437),l=n(7366),c=n(2764);e.exports=function(e,t){var n,u,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(u=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,u)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(u,h),d=p&&p.value):d=u[h],n=c(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},8814:e=>{e.exports=function(e){try{return!!e()}catch(t){return!0}}},3218:(e,t,n)=>{"use strict";n(1476);var r=n(9287),i=n(4076),s=n(738),o=n(8814),a=n(4103),l=n(4722),c=a("species"),u=RegExp.prototype;e.exports=function(e,t,n,h){var d=a(e),f=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!p||n){var m=r(/./[d]),g=t(d,""[e],(function(e,t,n,i,o){var a=r(e),l=t.exec;return l===s||l===u.exec?f&&!o?{done:!0,value:m(t,n,i)}:{done:!0,value:a(n,t,i)}:{done:!1}}));i(String.prototype,e,g[0]),i(u,d,g[1])}h&&l(u[d],"sham",!0)}},6112:(e,t,n)=>{var r=n(9793),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},6158:(e,t,n)=>{var r=n(9287),i=n(8762),s=n(9793),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},9793:(e,t,n)=>{var r=n(8814);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6654:(e,t,n)=>{var r=n(9793),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},9104:(e,t,n)=>{var r=n(4133),i=n(2924),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),l=a&&"something"===function(){}.name,c=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},9287:(e,t,n)=>{var r=n(6749),i=n(1636);e.exports=function(e){if("Function"===r(e))return i(e)}},1636:(e,t,n)=>{var r=n(9793),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},7859:(e,t,n)=>{var r=n(3834),i=n(6107),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},3395:(e,t,n)=>{var r=n(4239),i=n(7689),s=n(3873),o=n(1366),a=n(4103),l=a("iterator");e.exports=function(e){if(!s(e))return i(e,l)||i(e,"@@iterator")||o[r(e)]}},4021:(e,t,n)=>{var r=n(6654),i=n(8762),s=n(616),o=n(7545),a=n(3395),l=TypeError;e.exports=function(e,t){var n=arguments.length<2?a(e):t;if(i(n))return s(r(n,e));throw l(o(e)+" is not iterable")}},7689:(e,t,n)=>{var r=n(8762),i=n(3873);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},3075:(e,t,n)=>{var r=n(1636),i=n(8332),s=Math.floor,o=r("".charAt),a=r("".replace),l=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,h,d){var f=n+e.length,p=r.length,m=u;return void 0!==h&&(h=i(h),m=c),a(d,m,(function(i,a){var c;switch(o(a,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,n);case"'":return l(t,f);case"<":c=h[l(a,1,-1)];break;default:var u=+a;if(0===u)return i;if(u>p){var d=s(u/10);return 0===d?i:d<=p?void 0===r[d-1]?o(a,1):r[d-1]+o(a,1):i}c=r[u-1]}return void 0===c?"":c}))}},3834:(e,t,n)=>{var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2924:(e,t,n)=>{var r=n(1636),i=n(8332),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},1999:e=>{e.exports={}},6052:(e,t,n)=>{var r=n(7859);e.exports=r("document","documentElement")},6335:(e,t,n)=>{var r=n(4133),i=n(8814),s=n(1657);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},9798:e=>{var t=Array,n=Math.abs,r=Math.pow,i=Math.floor,s=Math.log,o=Math.LN2,a=function(e,a,l){var c,u,h,d=t(l),f=8*l-a-1,p=(1<<f)-1,m=p>>1,g=23===a?r(2,-24)-r(2,-77):0,v=e<0||0===e&&1/e<0?1:0,y=0;e=n(e),e!=e||e===1/0?(u=e!=e?1:0,c=p):(c=i(s(e)/o),h=r(2,-c),e*h<1&&(c--,h*=2),e+=c+m>=1?g/h:g*r(2,1-m),e*h>=2&&(c++,h/=2),c+m>=p?(u=0,c=p):c+m>=1?(u=(e*h-1)*r(2,a),c+=m):(u=e*r(2,m-1)*r(2,a),c=0));while(a>=8)d[y++]=255&u,u/=256,a-=8;c=c<<a|u,f+=a;while(f>0)d[y++]=255&c,c/=256,f-=8;return d[--y]|=128*v,d},l=function(e,t){var n,i=e.length,s=8*i-t-1,o=(1<<s)-1,a=o>>1,l=s-7,c=i-1,u=e[c--],h=127&u;u>>=7;while(l>0)h=256*h+e[c--],l-=8;n=h&(1<<-l)-1,h>>=-l,l+=t;while(l>0)n=256*n+e[c--],l-=8;if(0===h)h=1-a;else{if(h===o)return n?NaN:u?-1/0:1/0;n+=r(2,t),h-=a}return(u?-1:1)*n*r(2,h-t)};e.exports={pack:a,unpack:l}},3972:(e,t,n)=>{var r=n(1636),i=n(8814),s=n(6749),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},2511:(e,t,n)=>{var r=n(6107),i=n(1419),s=n(6534);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},6461:(e,t,n)=>{var r=n(1636),i=n(6107),s=n(6081),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},6270:(e,t,n)=>{var r=n(1419),i=n(4722);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},780:(e,t,n)=>{var r,i,s,o=n(5779),a=n(3834),l=n(1419),c=n(4722),u=n(2924),h=n(6081),d=n(5315),f=n(1999),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var b=h.state||(h.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw m(p);return t.facade=e,b.set(e,t),t},i=function(e){return b.get(e)||{}},s=function(e){return b.has(e)}}else{var w=d("state");f[w]=!0,r=function(e,t){if(u(e,w))throw m(p);return t.facade=e,c(e,w,t),t},i=function(e){return u(e,w)?e[w]:{}},s=function(e){return u(e,w)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},5712:(e,t,n)=>{var r=n(4103),i=n(1366),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},6555:(e,t,n)=>{var r=n(6749);e.exports=Array.isArray||function(e){return"Array"==r(e)}},354:(e,t,n)=>{var r=n(4239),i=n(1636),s=i("".slice);e.exports=function(e){return"Big"===s(r(e),0,3)}},6107:(e,t,n)=>{var r=n(948),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},9627:(e,t,n)=>{var r=n(1636),i=n(8814),s=n(6107),o=n(4239),a=n(7859),l=n(6461),c=function(){},u=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(c),m=function(e){if(!s(e))return!1;try{return h(c,u,e),!0}catch(t){return!1}},g=function(e){if(!s(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,l(e))}catch(t){return!0}};g.sham=!0,e.exports=!h||i((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?g:m},2764:(e,t,n)=>{var r=n(8814),i=n(6107),s=/#|\.prototype\./,o=function(e,t){var n=l[a(e)];return n==u||n!=c&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},3903:(e,t,n)=>{var r=n(1419),i=Math.floor;e.exports=Number.isInteger||function(e){return!r(e)&&isFinite(e)&&i(e)===e}},3873:e=>{e.exports=function(e){return null===e||void 0===e}},1419:(e,t,n)=>{var r=n(6107),i=n(948),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},200:e=>{e.exports=!1},1637:(e,t,n)=>{var r=n(7859),i=n(6107),s=n(6123),o=n(49),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},1366:e=>{e.exports={}},8600:(e,t,n)=>{var r=n(7302);e.exports=function(e){return r(e.length)}},2358:(e,t,n)=>{var r=n(8814),i=n(6107),s=n(2924),o=n(4133),a=n(9104).CONFIGURABLE,l=n(6461),c=n(780),u=c.enforce,h=c.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||a&&e.name!==t)&&(o?d(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&s(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=u(e);return s(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&h(this).source||l(this)}),"toString")},7233:e=>{var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},1356:(e,t,n)=>{var r=n(6975);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},5267:(e,t,n)=>{var r,i=n(616),s=n(6029),o=n(203),a=n(1999),l=n(6052),c=n(1657),u=n(5315),h=">",d="<",f="prototype",p="script",m=u("IE_PROTO"),g=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=c("iframe"),n="java"+p+":";return t.style.display="none",l.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=o.length;while(e--)delete w[f][o[e]];return w()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=w(),void 0===t?n:s.f(n,t)}},6029:(e,t,n)=>{var r=n(4133),i=n(64),s=n(1012),o=n(616),a=n(7447),l=n(4315);t.f=r&&!i?Object.defineProperties:function(e,t){o(e);var n,r=a(t),i=l(t),c=i.length,u=0;while(c>u)s.f(e,n=i[u++],r[n]);return e}},1012:(e,t,n)=>{var r=n(4133),i=n(6335),s=n(64),o=n(616),a=n(1017),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=u(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return c(e,t,n)}:c:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return c(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},863:(e,t,n)=>{var r=n(4133),i=n(6654),s=n(8068),o=n(3386),a=n(7447),l=n(1017),c=n(2924),u=n(6335),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=l(t),u)try{return h(e,t)}catch(n){}if(c(e,t))return o(!i(s.f,e,t),e[t])}},3450:(e,t,n)=>{var r=n(6682),i=n(203),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},1996:(e,t)=>{t.f=Object.getOwnPropertySymbols},7886:(e,t,n)=>{var r=n(2924),i=n(6107),s=n(8332),o=n(5315),a=n(911),l=o("IE_PROTO"),c=Object,u=c.prototype;e.exports=a?c.getPrototypeOf:function(e){var t=s(e);if(r(t,l))return t[l];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof c?u:null}},6123:(e,t,n)=>{var r=n(1636);e.exports=r({}.isPrototypeOf)},6682:(e,t,n)=>{var r=n(1636),i=n(2924),s=n(7447),o=n(7714).indexOf,a=n(1999),l=r([].push);e.exports=function(e,t){var n,r=s(e),c=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&l(u,n);while(t.length>c)i(r,n=t[c++])&&(~o(u,n)||l(u,n));return u}},4315:(e,t,n)=>{var r=n(6682),i=n(203);e.exports=Object.keys||function(e){return r(e,i)}},8068:(e,t)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},6534:(e,t,n)=>{var r=n(1636),i=n(616),s=n(9220);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},9370:(e,t,n)=>{var r=n(6654),i=n(6107),s=n(1419),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},1240:(e,t,n)=>{var r=n(7859),i=n(1636),s=n(3450),o=n(1996),a=n(616),l=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},4569:(e,t,n)=>{var r=n(1012).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},3808:(e,t,n)=>{var r=n(6654),i=n(616),s=n(6107),o=n(6749),a=n(738),l=TypeError;e.exports=function(e,t){var n=e.exec;if(s(n)){var c=r(n,e,t);return null!==c&&i(c),c}if("RegExp"===o(e))return r(a,e,t);throw l("RegExp#exec called on incompatible receiver")}},738:(e,t,n)=>{"use strict";var r=n(6654),i=n(1636),s=n(6975),o=n(9592),a=n(9165),l=n(8850),c=n(5267),u=n(780).get,h=n(3425),d=n(10),f=l("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,m=p,g=i("".charAt),v=i("".indexOf),y=i("".replace),b=i("".slice),w=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),_=a.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],T=w||E||_||h||d;T&&(m=function(e){var t,n,i,a,l,h,d,T=this,k=u(T),S=s(e),I=k.raw;if(I)return I.lastIndex=T.lastIndex,t=r(m,I,S),T.lastIndex=I.lastIndex,t;var x=k.groups,C=_&&T.sticky,A=r(o,T),R=T.source,O=0,N=S;if(C&&(A=y(A,"y",""),-1===v(A,"g")&&(A+="g"),N=b(S,T.lastIndex),T.lastIndex>0&&(!T.multiline||T.multiline&&"\n"!==g(S,T.lastIndex-1))&&(R="(?: "+R+")",N=" "+N,O++),n=new RegExp("^(?:"+R+")",A)),E&&(n=new RegExp("^"+R+"$(?!\\s)",A)),w&&(i=T.lastIndex),a=r(p,C?n:T,N),C?a?(a.input=b(a.input,O),a[0]=b(a[0],O),a.index=T.lastIndex,T.lastIndex+=a[0].length):T.lastIndex=0:w&&a&&(T.lastIndex=T.global?a.index+a[0].length:i),E&&a&&a.length>1&&r(f,a[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a&&x)for(a.groups=h=c(null),l=0;l<x.length;l++)d=x[l],h[d[0]]=a[d[1]];return a}),e.exports=m},9592:(e,t,n)=>{"use strict";var r=n(616);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},9165:(e,t,n)=>{var r=n(8814),i=n(3834),s=i.RegExp,o=r((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=o||r((function(){return!s("a","y").sticky})),l=o||r((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:l,MISSED_STICKY:a,UNSUPPORTED_Y:o}},3425:(e,t,n)=>{var r=n(8814),i=n(3834),s=i.RegExp;e.exports=r((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},10:(e,t,n)=>{var r=n(8814),i=n(3834),s=i.RegExp;e.exports=r((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},5177:(e,t,n)=>{var r=n(3873),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},7104:(e,t,n)=>{"use strict";var r=n(7859),i=n(1012),s=n(4103),o=n(4133),a=s("species");e.exports=function(e){var t=r(e),n=i.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},2365:(e,t,n)=>{var r=n(1012).f,i=n(2924),s=n(4103),o=s("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,o)&&r(e,o,{configurable:!0,value:t})}},5315:(e,t,n)=>{var r=n(8850),i=n(3965),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},6081:(e,t,n)=>{var r=n(3834),i=n(5437),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},8850:(e,t,n)=>{var r=n(200),i=n(6081);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6823:(e,t,n)=>{var r=n(1636),i=n(6675),s=n(6975),o=n(5177),a=r("".charAt),l=r("".charCodeAt),c=r("".slice),u=function(e){return function(t,n){var r,u,h=s(o(t)),d=i(n),f=h.length;return d<0||d>=f?e?"":void 0:(r=l(h,d),r<55296||r>56319||d+1===f||(u=l(h,d+1))<56320||u>57343?e?a(h,d):r:e?c(h,d,d+2):u-56320+(r-55296<<10)+65536)}};e.exports={codeAt:u(!1),charAt:u(!0)}},4651:(e,t,n)=>{var r=n(1418),i=n(8814);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},2661:(e,t,n)=>{var r=n(6675),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},7385:(e,t,n)=>{var r=n(4384),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw i("Can't convert number to bigint");return BigInt(t)}},4686:(e,t,n)=>{var r=n(6675),i=n(7302),s=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw s("Wrong length or index");return n}},7447:(e,t,n)=>{var r=n(3972),i=n(5177);e.exports=function(e){return r(i(e))}},6675:(e,t,n)=>{var r=n(7233);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7302:(e,t,n)=>{var r=n(6675),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},8332:(e,t,n)=>{var r=n(5177),i=Object;e.exports=function(e){return i(r(e))}},4084:(e,t,n)=>{var r=n(859),i=RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw i("Wrong offset");return n}},859:(e,t,n)=>{var r=n(6675),i=RangeError;e.exports=function(e){var t=r(e);if(t<0)throw i("The argument can't be less than 0");return t}},4384:(e,t,n)=>{var r=n(6654),i=n(1419),s=n(1637),o=n(7689),a=n(9370),l=n(4103),c=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,l=o(e,u);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!i(n)||s(n))return n;throw c("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},1017:(e,t,n)=>{var r=n(4384),i=n(1637);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},4130:(e,t,n)=>{var r=n(4103),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},6975:(e,t,n)=>{var r=n(4239),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},7545:e=>{var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},8532:(e,t,n)=>{"use strict";var r=n(6943),i=n(3834),s=n(6654),o=n(4133),a=n(5136),l=n(8086),c=n(2248),u=n(8406),h=n(3386),d=n(4722),f=n(3903),p=n(7302),m=n(4686),g=n(4084),v=n(1017),y=n(2924),b=n(4239),w=n(1419),_=n(1637),E=n(5267),T=n(6123),k=n(6534),S=n(3450).f,I=n(1157),x=n(9226).forEach,C=n(7104),A=n(1012),R=n(863),O=n(780),N=n(2511),L=O.get,P=O.set,D=O.enforce,F=A.f,M=R.f,q=Math.round,U=i.RangeError,V=c.ArrayBuffer,j=V.prototype,B=c.DataView,$=l.NATIVE_ARRAY_BUFFER_VIEWS,z=l.TYPED_ARRAY_TAG,H=l.TypedArray,K=l.TypedArrayPrototype,W=l.aTypedArrayConstructor,G=l.isTypedArray,J="BYTES_PER_ELEMENT",Q="Wrong length",Y=function(e,t){W(e);var n=0,r=t.length,i=new e(r);while(r>n)i[n]=t[n++];return i},X=function(e,t){F(e,t,{get:function(){return L(this)[t]}})},Z=function(e){var t;return T(j,e)||"ArrayBuffer"==(t=b(e))||"SharedArrayBuffer"==t},ee=function(e,t){return G(e)&&!_(t)&&t in e&&f(+t)&&t>=0},te=function(e,t){return t=v(t),ee(e,t)?h(2,e[t]):M(e,t)},ne=function(e,t,n){return t=v(t),!(ee(e,t)&&w(n)&&y(n,"value"))||y(n,"get")||y(n,"set")||n.configurable||y(n,"writable")&&!n.writable||y(n,"enumerable")&&!n.enumerable?F(e,t,n):(e[t]=n.value,e)};o?($||(R.f=te,A.f=ne,X(K,"buffer"),X(K,"byteOffset"),X(K,"byteLength"),X(K,"length")),r({target:"Object",stat:!0,forced:!$},{getOwnPropertyDescriptor:te,defineProperty:ne}),e.exports=function(e,t,n){var o=e.match(/\d+$/)[0]/8,l=e+(n?"Clamped":"")+"Array",c="get"+e,h="set"+e,f=i[l],v=f,y=v&&v.prototype,b={},_=function(e,t){var n=L(e);return n.view[c](t*o+n.byteOffset,!0)},T=function(e,t,r){var i=L(e);n&&(r=(r=q(r))<0?0:r>255?255:255&r),i.view[h](t*o+i.byteOffset,r,!0)},A=function(e,t){F(e,t,{get:function(){return _(this,t)},set:function(e){return T(this,t,e)},enumerable:!0})};$?a&&(v=t((function(e,t,n,r){return u(e,y),N(function(){return w(t)?Z(t)?void 0!==r?new f(t,g(n,o),r):void 0!==n?new f(t,g(n,o)):new f(t):G(t)?Y(v,t):s(I,v,t):new f(m(t))}(),e,v)})),k&&k(v,H),x(S(f),(function(e){e in v||d(v,e,f[e])})),v.prototype=y):(v=t((function(e,t,n,r){u(e,y);var i,a,l,c=0,h=0;if(w(t)){if(!Z(t))return G(t)?Y(v,t):s(I,v,t);i=t,h=g(n,o);var d=t.byteLength;if(void 0===r){if(d%o)throw U(Q);if(a=d-h,a<0)throw U(Q)}else if(a=p(r)*o,a+h>d)throw U(Q);l=a/o}else l=m(t),a=l*o,i=new V(a);P(e,{buffer:i,byteOffset:h,byteLength:a,length:l,view:new B(i)});while(c<l)A(e,c++)})),k&&k(v,H),y=v.prototype=E(K)),y.constructor!==v&&d(y,"constructor",v),D(y).TypedArrayConstructor=v,z&&d(y,z,l);var R=v!=f;b[l]=v,r({global:!0,constructor:!0,forced:R,sham:!$},b),J in v||d(v,J,o),J in y||d(y,J,o),C(l)}):e.exports=function(){}},5136:(e,t,n)=>{var r=n(3834),i=n(8814),s=n(8272),o=n(8086).NATIVE_ARRAY_BUFFER_VIEWS,a=r.ArrayBuffer,l=r.Int8Array;e.exports=!o||!i((function(){l(1)}))||!i((function(){new l(-1)}))||!s((function(e){new l,new l(null),new l(1.5),new l(e)}),!0)||i((function(){return 1!==new l(new a(2),1,void 0).length}))},1157:(e,t,n)=>{var r=n(6158),i=n(6654),s=n(9667),o=n(8332),a=n(8600),l=n(4021),c=n(3395),u=n(5712),h=n(354),d=n(8086).aTypedArrayConstructor,f=n(7385);e.exports=function(e){var t,n,p,m,g,v,y,b,w=s(this),_=o(e),E=arguments.length,T=E>1?arguments[1]:void 0,k=void 0!==T,S=c(_);if(S&&!u(S)){y=l(_,S),b=y.next,_=[];while(!(v=i(b,y)).done)_.push(v.value)}for(k&&E>2&&(T=r(T,arguments[2])),n=a(_),p=new(d(w))(n),m=h(p),t=0;n>t;t++)g=k?T(_[t],t):_[t],p[t]=m?f(g):+g;return p}},3965:(e,t,n)=>{var r=n(1636),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},49:(e,t,n)=>{var r=n(4651);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},64:(e,t,n)=>{var r=n(4133),i=n(8814);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5779:(e,t,n)=>{var r=n(3834),i=n(6107),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},4103:(e,t,n)=>{var r=n(3834),i=n(8850),s=n(2924),o=n(3965),a=n(4651),l=n(49),c=i("wks"),u=r.Symbol,h=u&&u["for"],d=l?u:u&&u.withoutSetter||o;e.exports=function(e){if(!s(c,e)||!a&&"string"!=typeof c[e]){var t="Symbol."+e;a&&s(u,e)?c[e]=u[e]:c[e]=l&&h?h(t):d(t)}return c[e]}},8376:(e,t,n)=>{"use strict";var r=n(7859),i=n(2924),s=n(4722),o=n(6123),a=n(6534),l=n(7366),c=n(4569),u=n(2511),h=n(1356),d=n(6270),f=n(7940),p=n(9277),m=n(4133),g=n(200);e.exports=function(e,t,n,v){var y="stackTraceLimit",b=v?2:1,w=e.split("."),_=w[w.length-1],E=r.apply(null,w);if(E){var T=E.prototype;if(!g&&i(T,"cause")&&delete T.cause,!n)return E;var k=r("Error"),S=t((function(e,t){var n=h(v?t:e,void 0),r=v?new E(e):new E;return void 0!==n&&s(r,"message",n),p&&s(r,"stack",f(r.stack,2)),this&&o(T,this)&&u(r,this,S),arguments.length>b&&d(r,arguments[b]),r}));if(S.prototype=T,"Error"!==_?a?a(S,k):l(S,k,{name:!0}):m&&y in E&&(c(S,E,y),c(S,E,"prepareStackTrace")),l(S,E),!g)try{T.name!==_&&s(T,"name",_),T.constructor=S}catch(I){}return S}}},6727:(e,t,n)=>{"use strict";var r=n(6943),i=n(7714).includes,s=n(8814),o=n(5323),a=s((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},9665:(e,t,n)=>{"use strict";var r=n(6943),i=n(8332),s=n(8600),o=n(3614),a=n(6689),l=n(8814),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:c||u},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var l=0;l<r;l++)t[n]=arguments[l],n++;return o(t,n),n}})},6890:(e,t,n)=>{"use strict";var r=n(6943),i=n(8332),s=n(8600),o=n(3614),a=n(6405),l=n(6689),c=1!==[].unshift(0),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:c||u},{unshift:function(e){var t=i(this),n=s(t),r=arguments.length;if(r){l(n+r);var c=n;while(c--){var u=c+r;c in t?t[u]=t[c]:a(t,u)}for(var h=0;h<r;h++)t[h]=arguments[h]}return o(t,n+r)}})},6822:(e,t,n)=>{var r=n(6943),i=n(3834),s=n(6112),o=n(8376),a="WebAssembly",l=i[a],c=7!==Error("e",{cause:7}).cause,u=function(e,t){var n={};n[e]=o(e,t,c),r({global:!0,constructor:!0,arity:1,forced:c},n)},h=function(e,t){if(l&&l[e]){var n={};n[e]=o(a+"."+e,t,c),r({target:a,stat:!0,constructor:!0,arity:1,forced:c},n)}};u("Error",(function(e){return function(t){return s(e,this,arguments)}})),u("EvalError",(function(e){return function(t){return s(e,this,arguments)}})),u("RangeError",(function(e){return function(t){return s(e,this,arguments)}})),u("ReferenceError",(function(e){return function(t){return s(e,this,arguments)}})),u("SyntaxError",(function(e){return function(t){return s(e,this,arguments)}})),u("TypeError",(function(e){return function(t){return s(e,this,arguments)}})),u("URIError",(function(e){return function(t){return s(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return s(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return s(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return s(e,this,arguments)}}))},1476:(e,t,n)=>{"use strict";var r=n(6943),i=n(738);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},3122:(e,t,n)=>{var r=n(3834),i=n(4133),s=n(9570),o=n(9592),a=n(8814),l=r.RegExp,c=l.prototype,u=i&&a((function(){var e=!0;try{l(".","d")}catch(u){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},s={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in e&&(s.hasIndices="d"),s)i(o,s[o]);var a=Object.getOwnPropertyDescriptor(c,"flags").get.call(t);return a!==r||n!==r}));u&&s(c,"flags",{configurable:!0,get:o})},8964:(e,t,n)=>{"use strict";var r=n(6112),i=n(6654),s=n(1636),o=n(3218),a=n(8814),l=n(616),c=n(6107),u=n(3873),h=n(6675),d=n(7302),f=n(6975),p=n(5177),m=n(3366),g=n(7689),v=n(3075),y=n(3808),b=n(4103),w=b("replace"),_=Math.max,E=Math.min,T=s([].concat),k=s([].push),S=s("".indexOf),I=s("".slice),x=function(e){return void 0===e?e:String(e)},C=function(){return"$0"==="a".replace(/./,"$0")}(),A=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),R=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,n){var s=A?"$":"$0";return[function(e,n){var r=p(this),s=u(e)?void 0:g(e,w);return s?i(s,e,r,n):i(t,f(r),e,n)},function(e,i){var o=l(this),a=f(e);if("string"==typeof i&&-1===S(i,s)&&-1===S(i,"$<")){var u=n(t,o,a,i);if(u.done)return u.value}var p=c(i);p||(i=f(i));var g=o.global;if(g){var b=o.unicode;o.lastIndex=0}var w=[];while(1){var C=y(o,a);if(null===C)break;if(k(w,C),!g)break;var A=f(C[0]);""===A&&(o.lastIndex=m(a,d(o.lastIndex),b))}for(var R="",O=0,N=0;N<w.length;N++){C=w[N];for(var L=f(C[0]),P=_(E(h(C.index),a.length),0),D=[],F=1;F<C.length;F++)k(D,x(C[F]));var M=C.groups;if(p){var q=T([L],D,P,a);void 0!==M&&k(q,M);var U=f(r(i,void 0,q))}else U=v(L,a,P,D,M,i);P>=O&&(R+=I(a,O,P)+U,O=P+L.length)}return R+I(a,O)}]}),!R||!C||A)},5231:(e,t,n)=>{"use strict";var r=n(8086),i=n(8600),s=n(6675),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(e){var t=o(this),n=i(t),r=s(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}))},7725:(e,t,n)=>{"use strict";var r=n(8086),i=n(5408),s=n(7385),o=n(4239),a=n(6654),l=n(1636),c=n(8814),u=r.aTypedArray,h=r.exportTypedArrayMethod,d=l("".slice),f=c((function(){var e=0;return new Int8Array(2).fill({valueOf:function(){return e++}}),1!==e}));h("fill",(function(e){var t=arguments.length;u(this);var n="Big"===d(o(this),0,3)?s(e):+e;return a(i,this,n,t>1?arguments[1]:void 0,t>2?arguments[2]:void 0)}),f)},548:(e,t,n)=>{"use strict";var r=n(8086),i=n(9275).findLastIndex,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},9212:(e,t,n)=>{"use strict";var r=n(8086),i=n(9275).findLast,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},9359:(e,t,n)=>{"use strict";var r=n(3834),i=n(6654),s=n(8086),o=n(8600),a=n(4084),l=n(8332),c=n(8814),u=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,p=s.aTypedArray,m=s.exportTypedArrayMethod,g=!c((function(){var e=new Uint8ClampedArray(2);return i(f,e,{length:1,0:3},1),3!==e[1]})),v=g&&s.NATIVE_ARRAY_BUFFER_VIEWS&&c((function(){var e=new h(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));m("set",(function(e){p(this);var t=a(arguments.length>1?arguments[1]:void 0,1),n=l(e);if(g)return i(f,this,n,t);var r=this.length,s=o(n),c=0;if(s+t>r)throw u("Wrong length");while(c<s)this[t+c]=n[c++]}),!g||v)},6408:(e,t,n)=>{"use strict";var r=n(3834),i=n(9287),s=n(8814),o=n(8762),a=n(7085),l=n(8086),c=n(259),u=n(1280),h=n(1418),d=n(7433),f=l.aTypedArray,p=l.exportTypedArrayMethod,m=r.Uint16Array,g=m&&i(m.prototype.sort),v=!!g&&!(s((function(){g(new m(2),null)}))&&s((function(){g(new m(2),{})}))),y=!!g&&!s((function(){if(h)return h<74;if(c)return c<67;if(u)return!0;if(d)return d<602;var e,t,n=new m(516),r=Array(516);for(e=0;e<516;e++)t=e%4,n[e]=515-e,r[e]=e-2*t+3;for(g(n,(function(e,t){return(e/4|0)-(t/4|0)})),e=0;e<516;e++)if(n[e]!==r[e])return!0})),b=function(e){return function(t,n){return void 0!==e?+e(t,n)||0:n!==n?-1:t!==t?1:0===t&&0===n?1/t>0&&1/n<0?1:-1:t>n}};p("sort",(function(e){return void 0!==e&&o(e),y?g(this,e):a(f(this),b(e))}),!y||v)},8170:(e,t,n)=>{var r=n(8532);r("Uint8",(function(e){return function(t,n,r){return e(this,t,n,r)}}))},222:(e,t,n)=>{"use strict";n.d(t,{ZF:()=>r.ZF});var r=n(8897),i="firebase",s="9.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},6605:(e,t,n)=>{"use strict";n.d(t,{Xb:()=>r.Xb,e5:()=>r.e5,hJ:()=>r.hJ,rh:()=>r.rh,v0:()=>r.v0});var r=n(202)},9017:(e,t,n)=>{"use strict";n.d(t,{ET:()=>ch,hJ:()=>ou,oe:()=>lh,JU:()=>au,ad:()=>bu,cf:()=>uh,IO:()=>Gu,ar:()=>Qu});var r,i=n(8897),s=n(3513),o=n(9795),a=n(5505),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},c={},u=u||{},h=l||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function b(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function w(e,t,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:b,w.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function T(){this.s=this.s,this.o=this.o}var k=0;T.prototype.s=!1,T.prototype.na=function(){this.s||(this.s=!0,this.M(),0==k)||m(this)},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function I(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function x(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function C(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function R(e){return/^[\s\xa0]*$/.test(e)}var O=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function N(e,t){return e<t?-1:e>t?1:0}function L(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function P(e){return-1!=L().indexOf(e)}function D(e){return D[" "](e),e}function F(e){var t=J;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}D[" "]=d;var M,q=P("Opera"),U=P("Trident")||P("MSIE"),V=P("Edge"),j=V||U,B=P("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),$=-1!=L().toLowerCase().indexOf("webkit")&&!P("Edge");function z(){var e=h.document;return e?e.documentMode:void 0}e:{var H="",K=function(){var e=L();return B?/rv:([^\);]+)(\)|;)/.exec(e):V?/Edge\/([\d\.]+)/.exec(e):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):$?/WebKit\/(\S+)/.exec(e):q?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(K&&(H=K?K[1]:""),U){var W=z();if(null!=W&&W>parseFloat(H)){M=String(W);break e}}M=H}var G,J={};function Q(){return F((function(){let e=0;const t=O(String(M)).split("."),n=O("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=N(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||N(0==i[2].length,0==s[2].length)||N(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(h.document&&U){var Y=z();G=Y||(parseInt(M,10)||void 0)}else G=void 0;var X=G;function Z(e,t){if(C.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(B){e:{try{D(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.X.h.call(this)}}E(Z,C);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ne,this.ba=this.ea=!1}function ie(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function se(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function oe(e){const t={};for(const n in e)t[n]=e[n];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function le(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ae.length;t++)n=ae[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ce(e){this.src=e,this.g={},this.h=0}function ue(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=S(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}ce.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=he(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new re(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};var de="closure_lm_"+(1e6*Math.random()|0),fe={};function pe(e,t,n,r,i){if(r&&r.once)return ve(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);return null}return n=ke(n),e&&e[te]?e.N(t,n,p(r)?!!r.capture:!!r,i):me(e,t,n,!1,r,i)}function me(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Ee(e);if(a||(e[de]=a=new ce(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ge(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)A||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(we(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ge(){function e(n){return t.call(e.src,e.listener,n)}const t=_e;return e}function ve(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ve(e,t[s],n,r,i);return null}return n=ke(n),e&&e[te]?e.O(t,n,p(r)?!!r.capture:!!r,i):me(e,t,n,!0,r,i)}function ye(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=ke(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=he(s,n,r,i),-1<n&&(ie(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,i)),(n=-1<e?t[e]:null)&&be(n))}function be(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])ue(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(we(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ee(t))?(ue(n,e),0==n.h&&(n.src=null,t[de]=null)):ie(e)}}}function we(e){return e in fe?fe[e]:fe[e]="on"+e}function _e(e,t){if(e.ba)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&be(e),e=n.call(r,t)}return e}function Ee(e){return e=e[de],e instanceof ce?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ke(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(t){return e.handleEvent(t)}),e[Te])}function Se(){T.call(this),this.i=new ce(this),this.P=this,this.I=null}function Ie(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new C(t,e);else if(t instanceof C)t.target=t.target||e;else{var i=t;t=new C(r,e),le(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=xe(o,r,!0,t)&&i}if(o=t.g=e,i=xe(o,r,!0,t)&&i,i=xe(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=xe(o,r,!1,t)&&i}function xe(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&ue(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}E(Se,T),Se.prototype[te]=!0,Se.prototype.removeEventListener=function(e,t,n,r){ye(this,e,t,n,r)},Se.prototype.M=function(){if(Se.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.I=null},Se.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Se.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ce=h.JSON.stringify;function Ae(){var e=qe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Re{constructor(){this.h=this.g=null}add(e,t){const n=Ne.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Oe,Ne=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Le),(e=>e.reset()));class Le{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Pe(e){h.setTimeout((()=>{throw e}),0)}function De(e,t){Oe||Fe(),Me||(Oe(),Me=!0),qe.add(e,t)}function Fe(){var e=h.Promise.resolve(void 0);Oe=function(){e.then(Ue)}}var Me=!1,qe=new Re;function Ue(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(n){Pe(n)}var t=Ne;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Me=!1}function Ve(e,t){Se.call(this),this.h=e||1,this.g=t||h,this.j=w(this.lb,this),this.l=Date.now()}function je(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Be(e,t,n){if("function"===typeof e)n&&(e=w(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=w(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function $e(e){e.g=Be((()=>{e.g=null,e.i&&(e.i=!1,$e(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}E(Ve,Se),r=Ve.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ie(this,"tick"),this.ca&&(je(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ve.X.M.call(this),je(this),delete this.g};class ze extends T{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$e(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(e){T.call(this),this.h=e,this.g={}}E(He,T);var Ke=[];function We(e,t,n,r){Array.isArray(n)||(n&&(Ke[0]=n.toString()),n=Ke);for(var i=0;i<n.length;i++){var s=pe(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ge(e){se(e.g,(function(e,t){this.g.hasOwnProperty(t)&&be(e)}),e),e.g={}}function Je(){this.g=!0}function Qe(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Ye(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Xe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(r?" "+r:"")}))}function Ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ce(n)}catch(a){return t}}He.prototype.M=function(){He.X.M.call(this),Ge(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Je.prototype.Aa=function(){this.g=!1},Je.prototype.info=function(){};var tt={},nt=null;function rt(){return nt=nt||new Se}function it(e){C.call(this,tt.Pa,e)}function st(e){const t=rt();Ie(t,new it(t))}function ot(e,t){C.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=rt();Ie(t,new ot(t,e))}function lt(e,t){C.call(this,tt.Qa,e),this.size=t}function ct(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",E(it,C),tt.STAT_EVENT="statevent",E(ot,C),tt.Qa="timingevent",E(lt,C);var ut={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ht={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function dt(){}function ft(e){return e.h||(e.h=e.i())}function pt(){}dt.prototype.h=null;var mt,gt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vt(){C.call(this,"d")}function yt(){C.call(this,"c")}function bt(){}function wt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new He(this),this.O=Et,e=j?125:void 0,this.T=new Ve(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _t}function _t(){this.i=null,this.g="",this.h=!1}E(vt,C),E(yt,C),E(bt,dt),bt.prototype.g=function(){return new XMLHttpRequest},bt.prototype.i=function(){return{}},mt=new bt;var Et=45e3,Tt={},kt={};function St(e,t,n){e.K=1,e.v=Wt(Bt(t)),e.s=n,e.P=!0,It(e,null)}function It(e,t){e.F=Date.now(),Rt(e),e.A=Bt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),e.C=0,n=e.l.H,e.h=new _t,e.g=hr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new ze(w(e.La,e,e.g),e.N)),We(e.S,e.g,"readystatechange",e.ib),t=e.H?oe(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),st(),Qe(e.j,e.u,e.A,e.m,e.U,e.s)}function xt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function Ct(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=At(e,n),r==kt){4==t&&(e.o=4,at(14),i=!1),Xe(e.j,e.m,null,"[Incomplete Response]");break}if(r==Tt){e.o=4,at(15),Xe(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Xe(e.j,e.m,r,null),Dt(e,r)}xt(e)&&r!=kt&&r!=Tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,at(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.K=!0,at(11))):(Xe(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),Lt(e))}function At(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?kt:(n=Number(t.substring(n,r)),isNaN(n)?Tt:(r+=1,r+n>t.length?kt:(t=t.substr(r,n),e.C=r+n,t)))}function Rt(e){e.V=Date.now()+e.O,Ot(e,e.O)}function Ot(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ct(w(e.gb,e),t)}function Nt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Lt(e){0==e.l.G||e.I||or(e.l,e)}function Pt(e){Nt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,je(e.T),Ge(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Dt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||mn(n.h,e)))if(!e.J&&mn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;sr(n),Gn(n)}nr(n),at(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ct(w(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(c){}n.ja=void 0}}else lr(n,11)}else if((e.J||n.g==e)&&sr(n),!R(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const t=c[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=c[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(gn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Kt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=ur(r,r.H?r.ka:null,r.V),o.J){vn(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Nt(a),Rt(a)),r.g=o}else tr(r);0<n.i.length&&Qn(n)}else"stop"!=c[0]&&"close"!=c[0]||lr(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?lr(n,7):Wn(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}st(4)}catch(c){}}function Ft(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Mt(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function qt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Mt(e),r=Ft(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=wt.prototype,r.setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==jn(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const u=jn(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(3!=u||j||this.g&&(this.h.h||this.g.fa()||Bn(this.g)))){this.I||4!=u||7==t||st(8==t||0>=d?3:2),Nt(this);var n=this.g.aa();this.Y=n;t:if(xt(this)){var r=Bn(this.g);e="";var i=r.length,s=4==jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pt(this),Lt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Ye(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,at(12),Pt(this),Lt(this);break e}Xe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Dt(this,n)}this.P?(Ct(this,u,o),j&&this.i&&3==u&&(We(this.S,this.T,"tick",this.hb),this.T.start())):(Xe(this.j,this.m,o,null),Dt(this,o)),4==u&&Pt(this),this.i&&!this.I&&(4==u?or(this.l,this):(this.i=!1,Rt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Pt(this),Lt(this)}}}catch(u){}},r.hb=function(){if(this.g){var e=jn(this.g),t=this.g.fa();this.C<t.length&&(Nt(this),Ct(this,e,t),this.i&&4!=e&&Rt(this))}},r.cancel=function(){this.I=!0,Pt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ze(this.j,this.A),2!=this.K&&(st(),at(17)),Pt(this),this.o=2,Lt(this)):Ot(this,this.V-e)};var Ut=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function jt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof jt){this.h=void 0!==t?t:e.h,$t(this,e.j),this.s=e.s,this.g=e.g,zt(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ht(this,n),this.o=e.o}else e&&(n=String(e).match(Ut))?(this.h=!!t,$t(this,n[1]||"",!0),this.s=Gt(n[2]||""),this.g=Gt(n[3]||"",!0),zt(this,n[4]),this.l=Gt(n[5]||"",!0),Ht(this,n[6]||"",!0),this.o=Gt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function Bt(e){return new jt(e)}function $t(e,t,n){e.j=n?Gt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function zt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ht(e,t,n){t instanceof nn?(e.i=t,cn(e.i,e.h)):(n||(t=Jt(t,en)),e.i=new nn(t,e.h))}function Kt(e,t,n){e.i.set(t,n)}function Wt(e){return Kt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Gt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Jt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Qt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Qt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Jt(t,Yt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Jt(t,Yt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Jt(n,"/"==n.charAt(0)?Zt:Xt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Jt(n,tn)),e.join("")};var Yt=/[#\/\?@]/g,Xt=/[#\?:]/g,Zt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&Vt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function sn(e,t){rn(e),t=ln(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function on(e,t){return rn(e),t=ln(e,t),e.g.has(t)}function an(e,t,n){sn(e,t),0<n.length&&(e.i=null,e.g.set(ln(e,t),I(n)),e.h+=n.length)}function ln(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function cn(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(sn(this,t),an(this,n,e))}),e)),e.j=t}r=nn.prototype,r.add=function(e,t){rn(this),this.i=null,e=ln(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.W=function(e){rn(this);let t=[];if("string"===typeof e)on(this,e)&&(t=t.concat(this.g.get(ln(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return rn(this),this.i=null,e=ln(this,e),on(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var un=class{constructor(e,t){this.h=e,this.g=t}};function hn(e){this.l=e||dn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function pn(e){return e.h?1:e.g?e.g.size:0}function mn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function gn(e,t){e.g?e.g.add(t):e.h=t}function vn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function yn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return I(e.i)}function bn(){}function wn(){this.g=new bn}function _n(e,t,n){const r=n||"";try{qt(e,(function(e,n){let i=e;p(e)&&(i=Ce(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function En(e,t){const n=new Je;if(h.Image){const r=new Image;r.onload=_(Tn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(Tn,n,r,"TestLoadImage: error",!1,t),r.onabort=_(Tn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(Tn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Tn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function kn(e){this.l=e.ac||null,this.j=e.jb||!1}function Sn(e,t){Se.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=In,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},bn.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},bn.prototype.parse=function(e){return h.JSON.parse(e,void 0)},E(kn,dt),kn.prototype.g=function(){return new Sn(this.l,this.j)},kn.prototype.i=function(e){return function(){return e}}({}),E(Sn,Se);var In=0;function xn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Cn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,An(e)}function An(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Sn.prototype,r.open=function(e,t){if(this.readyState!=In)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,An(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Cn(this)),this.readyState=In},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Cn(this):An(this),3==this.readyState&&xn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,Cn(this))},r.Ua=function(e){this.g&&(this.response=e,Cn(this))},r.ga=function(){this.g&&Cn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Rn=h.JSON.parse;function On(e){Se.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nn,this.K=this.L=!1}E(On,Se);var Nn="",Ln=/^https?$/i,Pn=["POST","PUT"];function Dn(e){return U&&Q()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Fn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Mn(e),Un(e)}function Mn(e){e.D||(e.D=!0,Ie(e,"complete"),Ie(e,"error"))}function qn(e){if(e.h&&"undefined"!=typeof u&&(!e.C[1]||4!=jn(e)||2!=e.aa()))if(e.v&&4==jn(e))Be(e.Ha,0,e);else if(Ie(e,"readystatechange"),4==jn(e)){e.h=!1;try{const l=e.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===l){var i=String(e.H).match(Ut)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!Ln.test(i?i.toLowerCase():"")}n=r}if(n)Ie(e,"complete"),Ie(e,"success");else{e.m=6;try{var o=2<jn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",Mn(e)}}finally{Un(e)}}}function Un(e,t){if(e.g){Vn(e);const r=e.g,i=e.C[0]?d:null;e.g=null,e.C=null,t||Ie(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Vn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function jn(e){return e.g?e.g.readyState:0}function Bn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Nn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(xr){return null}}function $n(e){let t="";return se(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function zn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$n(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Kt(e,t,n))}function Hn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kn(e){this.Ca=0,this.i=[],this.j=new Je,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Hn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Hn("baseRetryDelayMs",5e3,e),this.bb=Hn("retryDelaySeedMs",1e4,e),this.$a=Hn("forwardChannelMaxRetries",2,e),this.ta=Hn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(e&&e.concurrentRequestLimit),this.Fa=new wn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Wn(e){if(Jn(e),3==e.G){var t=e.U++,n=Bt(e.F);Kt(n,"SID",e.I),Kt(n,"RID",t),Kt(n,"TYPE","terminate"),Zn(e,n),t=new wt(e,e.j,t,void 0),t.K=2,t.v=Wt(Bt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=hr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Rt(t)}cr(e)}function Gn(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Jn(e){Gn(e),e.u&&(h.clearTimeout(e.u),e.u=null),sr(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Qn(e){fn(e.h)||e.m||(e.m=!0,De(e.Ja,e),e.C=0)}function Yn(e,t){return!(pn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=ct(w(e.Ja,e,t),ar(e,e.C)),e.C++,!0))}function Xn(e,t){var n;n=t?t.m:e.U++;const r=Bt(e.F);Kt(r,"SID",e.I),Kt(r,"RID",n),Kt(r,"AID",e.T),Zn(e,r),e.o&&e.s&&zn(r,e.o,e.s),n=new wt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=er(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),gn(e.h,n),St(n,r,t)}function Zn(e,t){e.ia&&se(e.ia,(function(e,n){Kt(t,n,e)})),e.l&&qt({},(function(e,n){Kt(t,n,e)}))}function er(e,t,n){n=Math.min(e.i.length,n);var r=e.l?w(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const l=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),o=!1;else try{_n(l,e,"req"+n+"_")}catch(s){r&&r(l)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tr(e){e.g||e.u||(e.Z=1,De(e.Ia,e),e.A=0)}function nr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ct(w(e.Ia,e),ar(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function ir(e){e.g=new wt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Bt(e.sa);Kt(t,"RID","rpc"),Kt(t,"SID",e.I),Kt(t,"CI",e.L?"0":"1"),Kt(t,"AID",e.T),Kt(t,"TYPE","xmlhttp"),Zn(e,t),e.o&&e.s&&zn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Wt(Bt(t)),n.s=null,n.P=!0,It(n,e)}function sr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function or(e,t){var n=null;if(e.g==t){sr(e),rr(e),e.g=null;var r=2}else{if(!mn(e.h,t))return;n=t.D,vn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=rt(),Ie(r,new lt(r,n)),Qn(e)}else tr(e);else if(i=t.o,3==i||0==i&&0<e.pa||!(1==r&&Yn(e,t)||2==r&&nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:lr(e,5);break;case 4:lr(e,10);break;case 3:lr(e,6);break;default:lr(e,2)}}function ar(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function lr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=w(e.kb,e);n||(n=new jt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||$t(n,"https"),Wt(n)),En(n.toString(),r)}else at(2);e.G=0,e.l&&e.l.va(t),cr(e),Jn(e)}function cr(e){if(e.G=0,e.la=[],e.l){const t=yn(e.h);0==t.length&&0==e.i.length||(x(e.la,t),x(e.la,e.i),e.h.i.length=0,I(e.i),e.i.length=0),e.l.ua()}}function ur(e,t,n){var r=n instanceof jt?Bt(n):new jt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),zt(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new jt(null,void 0);r&&$t(s,r),t&&(s.g=t),i&&zt(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&Kt(r,n,t),Kt(r,"VER",e.ma),Zn(e,r),r}function hr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new On(new kn({jb:!0})):new On(e.ra),t.Ka(e.H),t}function dr(){}function fr(){if(U&&!(10<=Number(X)))throw Error("Environmental error: no available transport.")}function pr(e,t){Se.call(this),this.g=new Kn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!R(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new vr(this)}function mr(e){vt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gr(){yt.call(this),this.status=1}function vr(e){this.g=e}r=On.prototype,r.Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?ft(this.u):ft(mt),this.g.onreadystatechange=w(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Fn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=S(Pn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vn(this),0<this.B&&((this.K=Dn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.qa,this)):this.A=Be(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Fn(this,s)}},r.qa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ie(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ie(this,"complete"),Ie(this,"abort"),Un(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Un(this,!0)),On.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?qn(this):this.fb())},r.fb=function(){qn(this)},r.aa=function(){try{return 2<jn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Rn(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Kn.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new wt(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=oe(s),le(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=er(this,i,t),n=Bt(this.F),Kt(n,"RID",e),Kt(n,"CVER",22),this.D&&Kt(n,"X-HTTP-Session-Id",this.D),Zn(this,n),s&&(this.N?t="headers="+encodeURIComponent(String($n(s)))+"&"+t:this.o&&zn(n,this.o,s)),gn(this.h,i),this.Ya&&Kt(n,"TYPE","init"),this.O?(Kt(n,"$req",t),Kt(n,"SID","null"),i.Z=!0,St(i,n,null)):St(i,n,t),this.G=2}}else 3==this.G&&(e?Xn(this,e):0==this.i.length||fn(this.h)||Xn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ct(w(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Gn(this),ir(this))},r.cb=function(){null!=this.v&&(this.v=null,Gn(this),nr(this),at(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},r=dr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},fr.prototype.g=function(e,t){return new pr(e,t)},E(pr,Se),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=ur(e,null,e.V),Qn(e)},pr.prototype.close=function(){Wn(this.g)},pr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ce(e),e=n);t.i.push(new un(t.ab++,e)),3==t.G&&Qn(t)},pr.prototype.M=function(){this.g.l=null,delete this.j,Wn(this.g),delete this.g,pr.X.M.call(this)},E(mr,vt),E(gr,yt),E(vr,dr),vr.prototype.xa=function(){Ie(this.g,"a")},vr.prototype.wa=function(e){Ie(this.g,new mr(e))},vr.prototype.va=function(e){Ie(this.g,new gr)},vr.prototype.ua=function(){Ie(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,ut.NO_ERROR=0,ut.TIMEOUT=8,ut.HTTP_ERROR=6,ht.COMPLETE="complete",pt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",Se.prototype.listen=Se.prototype.N,On.prototype.listenOnce=On.prototype.O,On.prototype.getLastError=On.prototype.Oa,On.prototype.getLastErrorCode=On.prototype.Ea,On.prototype.getStatus=On.prototype.aa,On.prototype.getResponseJson=On.prototype.Sa,On.prototype.getResponseText=On.prototype.fa,On.prototype.send=On.prototype.da,On.prototype.setWithCredentials=On.prototype.Ka;var yr=c.createWebChannelTransport=function(){return new fr},br=c.getStatEventTarget=function(){return rt()},wr=c.ErrorCode=ut,_r=c.EventType=ht,Er=c.Event=tt,Tr=c.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},kr=c.FetchXmlHttpFactory=kn,Sr=c.WebChannel=pt,Ir=c.XhrIo=On;const xr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Cr.UNAUTHENTICATED=new Cr(null),Cr.GOOGLE_CREDENTIALS=new Cr("google-credentials-uid"),Cr.FIRST_PARTY=new Cr("first-party-uid"),Cr.MOCK_USER=new Cr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ar="9.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new o.Yd("@firebase/firestore");function Or(){return Rr.logLevel}function Nr(e,...t){if(Rr.logLevel<=o["in"].DEBUG){const n=t.map(Dr);Rr.debug(`Firestore (${Ar}): ${e}`,...n)}}function Lr(e,...t){if(Rr.logLevel<=o["in"].ERROR){const n=t.map(Dr);Rr.error(`Firestore (${Ar}): ${e}`,...n)}}function Pr(e,...t){if(Rr.logLevel<=o["in"].WARN){const n=t.map(Dr);Rr.warn(`Firestore (${Ar}): ${e}`,...n)}}function Dr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e="Unexpected state"){const t=`FIRESTORE (${Ar}) INTERNAL ASSERTION FAILED: `+e;throw Lr(t),new Error(t)}function Mr(e,t){e||Fr()}function qr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Vr extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $r{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Cr.UNAUTHENTICATED)))}shutdown(){}}class zr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Hr{constructor(e){this.t=e,this.currentUser=Cr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jr,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Nr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Nr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jr)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Nr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Mr("string"==typeof t.accessToken),new Br(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Mr(null===e||"string"==typeof e),new Cr(e)}}class Kr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=Cr.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Mr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Wr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new Kr(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Cr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jr{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Nr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Nr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Nr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Nr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Mr("string"==typeof e.token),this.A=e.token,new Gr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Qr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Xr(e,t){return e<t?-1:e>t?1:0}function Zr(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Vr(Ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Vr(Ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Vr(Ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Vr(Ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ei.fromMillis(Date.now())}static fromDate(e){return ei.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ei(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Xr(this.nanoseconds,e.nanoseconds):Xr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ti(e)}static min(){return new ti(new ei(0,0))}static max(){return new ti(new ei(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n){void 0===t?t=0:t>e.length&&Fr(),void 0===n?n=e.length-t:n>e.length-t&&Fr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ni.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ni?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ri extends ni{construct(e,t,n){return new ri(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Vr(Ur.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ri(t)}static emptyPath(){return new ri([])}}const ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class si extends ni{construct(e,t,n){return new si(e,t,n)}static isValidIdentifier(e){return ii.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),si.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new si(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Vr(Ur.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Vr(Ur.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Vr(Ur.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Vr(Ur.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new si(t)}static emptyPath(){return new si([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.path=e}static fromPath(e){return new oi(ri.fromString(e))}static fromName(e){return new oi(ri.fromString(e).popFirst(5))}static empty(){return new oi(ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ri.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ri.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oi(new ri(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}ai.UNKNOWN_ID=-1;function li(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ti.fromTimestamp(1e9===r?new ei(n+1,0):new ei(n,r));return new ui(i,oi.empty(),t)}function ci(e){return new ui(e.readTime,e.key,-1)}class ui{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ui(ti.min(),oi.empty(),-1)}static max(){return new ui(ti.max(),oi.empty(),-1)}}function hi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=oi.comparator(e.documentKey,t.documentKey),0!==n?n:Xr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(e){if(e.code!==Ur.FAILED_PRECONDITION||e.message!==di)throw e;Nr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Fr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new mi(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof mi?t:mi.resolve(t)}catch(e){return mi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):mi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):mi.reject(t)}static resolve(e){return new mi(((t,n)=>{t(e)}))}static reject(e){return new mi(((t,n)=>{n(e)}))}static waitFor(e){return new mi(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=mi.resolve(!1);for(const n of e)t=t.next((e=>e?mi.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new mi(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next((e=>{s[l]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new mi(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function bi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function wi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi.at=-1;class _i{constructor(e,t){this.comparator=e,this.root=t||Ti.EMPTY}insert(e,t){return new _i(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ti.BLACK,null,null))}remove(e){return new _i(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ti.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ei(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ei(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ei(this.root,e,this.comparator,!0)}}class Ei{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ti{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ti.RED,this.left=null!=r?r:Ti.EMPTY,this.right=null!=i?i:Ti.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ti(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ti.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ti.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ti.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ti.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Fr();if(this.right.isRed())throw Fr();const e=this.left.check();if(e!==this.right.check())throw Fr();return e+(this.isRed()?0:1)}}Ti.EMPTY=null,Ti.RED=!0,Ti.BLACK=!1,Ti.EMPTY=new class{constructor(){this.size=0}get key(){throw Fr()}get value(){throw Fr()}get color(){throw Fr()}get left(){throw Fr()}get right(){throw Fr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ti(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki{constructor(e){this.comparator=e,this.data=new _i(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Si(this.data.getIterator())}getIteratorFrom(e){return new Si(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof ki))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ki(this.comparator);return t.data=e,t}}class Si{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{constructor(e){this.fields=e,e.sort(si.comparator)}static empty(){return new Ii([])}unionWith(e){let t=new ki(si.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ii(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new xi(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new xi(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Xr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xi.EMPTY_BYTE_STRING=new xi("");const Ci=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(e){if(Mr(!!e),"string"==typeof e){let t=0;const n=Ci.exec(e);if(Mr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ri(e.seconds),nanos:Ri(e.nanos)}}function Ri(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Oi(e){return"string"==typeof e?xi.fromBase64String(e):xi.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Li(e){const t=e.mapValue.fields.__previous_value__;return Ni(t)?Li(t):t}function Pi(e){const t=Ai(e.mapValue.fields.__local_write_time__.timestampValue);return new ei(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Fi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Fi&&e.projectId===this.projectId&&e.database===this.database}}function Mi(e){return null==e}function qi(e){return 0===e&&1/e==-1/0}function Ui(e){return"number"==typeof e&&Number.isInteger(e)&&!qi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ji(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ni(e)?4:ts(e)?9007199254740991:10:Fr()}function Bi(e,t){if(e===t)return!0;const n=ji(e);if(n!==ji(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Pi(e).isEqual(Pi(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ai(e.timestampValue),r=Ai(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Oi(e.bytesValue).isEqual(Oi(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ri(e.geoPointValue.latitude)===Ri(t.geoPointValue.latitude)&&Ri(e.geoPointValue.longitude)===Ri(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ri(e.integerValue)===Ri(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ri(e.doubleValue),r=Ri(t.doubleValue);return n===r?qi(n)===qi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Zr(e.arrayValue.values||[],t.arrayValue.values||[],Bi);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(yi(n)!==yi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Bi(n[i],r[i])))return!1;return!0}(e,t);default:return Fr()}}function $i(e,t){return void 0!==(e.values||[]).find((e=>Bi(e,t)))}function zi(e,t){if(e===t)return 0;const n=ji(e),r=ji(t);if(n!==r)return Xr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ri(e.integerValue||e.doubleValue),r=Ri(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Hi(e.timestampValue,t.timestampValue);case 4:return Hi(Pi(e),Pi(t));case 5:return Xr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Oi(e),r=Oi(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Xr(n[i],r[i]);if(0!==e)return e}return Xr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Xr(Ri(e.latitude),Ri(t.latitude));return 0!==n?n:Xr(Ri(e.longitude),Ri(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=zi(n[i],r[i]);if(e)return e}return Xr(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Vi.mapValue&&t===Vi.mapValue)return 0;if(e===Vi.mapValue)return 1;if(t===Vi.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Xr(r[o],s[o]);if(0!==e)return e;const t=zi(n[r[o]],i[s[o]]);if(0!==t)return t}return Xr(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Fr()}}function Hi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Xr(e,t);const n=Ai(e),r=Ai(t),i=Xr(n.seconds,r.seconds);return 0!==i?i:Xr(n.nanos,r.nanos)}function Ki(e){return Wi(e)}function Wi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ai(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Oi(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,oi.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Wi(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Wi(e.fields[i])}`;return n+"}"}(e.mapValue):Fr();var t,n}function Gi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ji(e){return!!e&&"integerValue"in e}function Qi(e){return!!e&&"arrayValue"in e}function Yi(e){return!!e&&"nullValue"in e}function Xi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Zi(e){return!!e&&"mapValue"in e}function es(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return bi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=es(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=es(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ts(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns{constructor(e){this.value=e}static empty(){return new ns({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Zi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=es(t)}setAll(e){let t=si.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=es(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Zi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Bi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Zi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){bi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new ns(es(this.value))}}function rs(e){const t=[];return bi(e.fields,((e,n)=>{const r=new si([e]);if(Zi(n)){const e=rs(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Ii(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class is{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new is(e,0,ti.min(),ti.min(),ns.empty(),0)}static newFoundDocument(e,t,n){return new is(e,1,t,ti.min(),n,0)}static newNoDocument(e,t){return new is(e,2,t,ti.min(),ns.empty(),0)}static newUnknownDocument(e,t){return new is(e,3,t,ti.min(),ns.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ns.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ns.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ti.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof is&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new is(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ht=null}}function os(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ss(e,t,n,r,i,s,o)}function as(e){const t=qr(e);if(null===t.ht){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Ki(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Mi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Ki(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Ki(e))).join(",")),t.ht=e}return t.ht}function ls(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Ki(t.value)}`;var t})).join(", ")}]`),Mi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Ki(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Ki(e))).join(",")),`Target(${t})`}function cs(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Es(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Bi(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ks(e.startAt,t.startAt)&&ks(e.endAt,t.endAt)}function us(e){return oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class hs extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new ds(e,t,n):"array-contains"===t?new gs(e,n):"in"===t?new vs(e,n):"not-in"===t?new ys(e,n):"array-contains-any"===t?new bs(e,n):new hs(e,t,n)}static lt(e,t,n){return"in"===t?new fs(e,n):new ps(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(zi(t,this.value)):null!==t&&ji(this.value)===ji(t)&&this.ft(zi(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Fr()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ds extends hs{constructor(e,t,n){super(e,t,n),this.key=oi.fromName(n.referenceValue)}matches(e){const t=oi.comparator(e.key,this.key);return this.ft(t)}}class fs extends hs{constructor(e,t){super(e,"in",t),this.keys=ms("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ps extends hs{constructor(e,t){super(e,"not-in",t),this.keys=ms("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ms(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>oi.fromName(e.referenceValue)))}class gs extends hs{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qi(t)&&$i(t.arrayValue,this.value)}}class vs extends hs{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&$i(this.value.arrayValue,t)}}class ys extends hs{constructor(e,t){super(e,"not-in",t)}matches(e){if($i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!$i(this.value.arrayValue,t)}}class bs extends hs{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>$i(this.value.arrayValue,e)))}}class ws{constructor(e,t){this.position=e,this.inclusive=t}}class _s{constructor(e,t="asc"){this.field=e,this.dir=t}}function Es(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ts(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?oi.comparator(oi.fromName(o.referenceValue),n.key):zi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ks(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Bi(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Is(e,t,n,r,i,s,o,a){return new Ss(e,t,n,r,i,s,o,a)}function xs(e){return new Ss(e)}function Cs(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function As(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Rs(e){for(const t of e.filters)if(t.dt())return t.field;return null}function Os(e){return null!==e.collectionGroup}function Ns(e){const t=qr(e);if(null===t._t){t._t=[];const e=Rs(t),n=As(t);if(null!==e&&null===n)e.isKeyField()||t._t.push(new _s(e)),t._t.push(new _s(si.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t._t.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new _s(si.keyField(),e))}}}return t._t}function Ls(e){const t=qr(e);if(!t.wt)if("F"===t.limitType)t.wt=os(t.path,t.collectionGroup,Ns(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Ns(t)){const t="desc"===i.dir?"asc":"desc";e.push(new _s(i.field,t))}const n=t.endAt?new ws(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ws(t.startAt.position,t.startAt.inclusive):null;t.wt=os(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.wt}function Ps(e,t,n){return new Ss(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ds(e,t){return cs(Ls(e),Ls(t))&&e.limitType===t.limitType}function Fs(e){return`${as(Ls(e))}|lt:${e.limitType}`}function Ms(e){return`Query(target=${ls(Ls(e))}; limitType=${e.limitType})`}function qs(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):oi.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Ts(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Ns(e),t))&&!(e.endAt&&!function(e,t,n){const r=Ts(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Ns(e),t))}(e,t)}function Us(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Vs(e){return(t,n)=>{let r=!1;for(const i of Ns(e)){const e=js(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function js(e,t,n){const r=e.field.isKeyField()?oi.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?zi(r,i):Fr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Fr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qi(t)?"-0":t}}function $s(e){return{integerValue:""+e}}function zs(e,t){return Ui(t)?$s(t):Bs(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this._=void 0}}function Ks(e,t,n){return e instanceof Js?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Qs?Ys(e,t):e instanceof Xs?Zs(e,t):function(e,t){const n=Gs(e,t),r=to(n)+to(e.yt);return Ji(n)&&Ji(e.yt)?$s(r):Bs(e.It,r)}(e,t)}function Ws(e,t,n){return e instanceof Qs?Ys(e,t):e instanceof Xs?Zs(e,t):n}function Gs(e,t){return e instanceof eo?Ji(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Js extends Hs{}class Qs extends Hs{constructor(e){super(),this.elements=e}}function Ys(e,t){const n=no(t);for(const r of e.elements)n.some((e=>Bi(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Xs extends Hs{constructor(e){super(),this.elements=e}}function Zs(e,t){let n=no(t);for(const r of e.elements)n=n.filter((e=>!Bi(e,r)));return{arrayValue:{values:n}}}class eo extends Hs{constructor(e,t){super(),this.It=e,this.yt=t}}function to(e){return Ri(e.integerValue||e.doubleValue)}function no(e){return Qi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Qs&&t instanceof Qs||e instanceof Xs&&t instanceof Xs?Zr(e.elements,t.elements,Bi):e instanceof eo&&t instanceof eo?Bi(e.yt,t.yt):e instanceof Js&&t instanceof Js}(e.transform,t.transform)}class io{constructor(e,t){this.version=e,this.transformResults=t}}class so{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new so}static exists(e){return new so(void 0,e)}static updateTime(e){return new so(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ao{}function lo(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new bo(e.key,so.none()):new po(e.key,e.data,so.none());{const n=e.data,r=ns.empty();let i=new ki(si.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new mo(e.key,r,new Ii(i.toArray()),so.none())}}function co(e,t,n){e instanceof po?function(e,t,n){const r=e.value.clone(),i=vo(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof mo?function(e,t,n){if(!oo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=vo(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(go(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function uo(e,t,n,r){return e instanceof po?function(e,t,n,r){if(!oo(e.precondition,t))return n;const i=e.value.clone(),s=yo(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof mo?function(e,t,n,r){if(!oo(e.precondition,t))return n;const i=yo(e.fieldTransforms,r,t),s=t.data;return s.setAll(go(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return oo(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ho(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Gs(r.transform,e||null);null!=i&&(null===n&&(n=ns.empty()),n.set(r.field,i))}return n||null}function fo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Zr(e,t,((e,t)=>ro(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class po extends ao{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class mo extends ao{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function go(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function vo(e,t,n){const r=new Map;Mr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Ws(o,a,n[i]))}return r}function yo(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Ks(e,s,t))}return r}class bo extends ao{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wo extends ao{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Eo,To;function ko(e){switch(e){default:return Fr();case Ur.CANCELLED:case Ur.UNKNOWN:case Ur.DEADLINE_EXCEEDED:case Ur.RESOURCE_EXHAUSTED:case Ur.INTERNAL:case Ur.UNAVAILABLE:case Ur.UNAUTHENTICATED:return!1;case Ur.INVALID_ARGUMENT:case Ur.NOT_FOUND:case Ur.ALREADY_EXISTS:case Ur.PERMISSION_DENIED:case Ur.FAILED_PRECONDITION:case Ur.ABORTED:case Ur.OUT_OF_RANGE:case Ur.UNIMPLEMENTED:case Ur.DATA_LOSS:return!0}}function So(e){if(void 0===e)return Lr("GRPC error has no .code"),Ur.UNKNOWN;switch(e){case Eo.OK:return Ur.OK;case Eo.CANCELLED:return Ur.CANCELLED;case Eo.UNKNOWN:return Ur.UNKNOWN;case Eo.DEADLINE_EXCEEDED:return Ur.DEADLINE_EXCEEDED;case Eo.RESOURCE_EXHAUSTED:return Ur.RESOURCE_EXHAUSTED;case Eo.INTERNAL:return Ur.INTERNAL;case Eo.UNAVAILABLE:return Ur.UNAVAILABLE;case Eo.UNAUTHENTICATED:return Ur.UNAUTHENTICATED;case Eo.INVALID_ARGUMENT:return Ur.INVALID_ARGUMENT;case Eo.NOT_FOUND:return Ur.NOT_FOUND;case Eo.ALREADY_EXISTS:return Ur.ALREADY_EXISTS;case Eo.PERMISSION_DENIED:return Ur.PERMISSION_DENIED;case Eo.FAILED_PRECONDITION:return Ur.FAILED_PRECONDITION;case Eo.ABORTED:return Ur.ABORTED;case Eo.OUT_OF_RANGE:return Ur.OUT_OF_RANGE;case Eo.UNIMPLEMENTED:return Ur.UNIMPLEMENTED;case Eo.DATA_LOSS:return Ur.DATA_LOSS;default:return Fr()}}(To=Eo||(Eo={}))[To.OK=0]="OK",To[To.CANCELLED=1]="CANCELLED",To[To.UNKNOWN=2]="UNKNOWN",To[To.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",To[To.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",To[To.NOT_FOUND=5]="NOT_FOUND",To[To.ALREADY_EXISTS=6]="ALREADY_EXISTS",To[To.PERMISSION_DENIED=7]="PERMISSION_DENIED",To[To.UNAUTHENTICATED=16]="UNAUTHENTICATED",To[To.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",To[To.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",To[To.ABORTED=10]="ABORTED",To[To.OUT_OF_RANGE=11]="OUT_OF_RANGE",To[To.UNIMPLEMENTED=12]="UNIMPLEMENTED",To[To.INTERNAL=13]="INTERNAL",To[To.UNAVAILABLE=14]="UNAVAILABLE",To[To.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return wi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new _i(oi.comparator);function Co(){return xo}const Ao=new _i(oi.comparator);function Ro(...e){let t=Ao;for(const n of e)t=t.insert(n.key,n);return t}function Oo(e){let t=Ao;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function No(){return Po()}function Lo(){return Po()}function Po(){return new Io((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Do=new _i(oi.comparator),Fo=new ki(oi.comparator);function Mo(...e){let t=Fo;for(const n of e)t=t.add(n);return t}const qo=new ki(Xr);function Uo(){return qo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,jo.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Vo(ti.min(),r,Uo(),Co(),Mo())}}class jo{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new jo(n,t,Mo(),Mo(),Mo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t,n,r){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=r}}class $o{constructor(e,t){this.targetId=e,this.At=t}}class zo{constructor(e,t,n=xi.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ho{constructor(){this.Rt=0,this.bt=Go(),this.Pt=xi.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Mo(),t=Mo(),n=Mo();return this.bt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Fr()}})),new jo(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=Go()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ko{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Co(),this.qt=Wo(),this.Kt=new ki(Xr)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,(t=>{const n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:Fr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach(((e,n)=>{this.Ht(n)&&t(n)}))}Yt(e){const t=e.targetId,n=e.At.count,r=this.Xt(t);if(r){const e=r.target;if(us(e))if(0===n){const n=new oi(e.path);this.jt(t,n,is.newNoDocument(n,ti.min()))}else Mr(1===n);else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach(((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&us(i.target)){const t=new oi(i.target.path);null!==this.Ut.get(t)||this.ee(r,t)||this.jt(r,t,is.newNoDocument(t,e))}n.Dt&&(t.set(r,n.xt()),n.Nt())}}));let n=Mo();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Ut.forEach(((t,n)=>n.setReadTime(e)));const r=new Vo(e,t,this.Kt,this.Ut,n);return this.Ut=Co(),this.qt=Wo(),this.Kt=new ki(Xr),r}Qt(e,t){if(!this.Ht(e))return;const n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new Ho,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new ki(Xr),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=null!==this.Xt(e);return t||Nr("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Ho),this.Bt.getRemoteKeysForTarget(e).forEach((t=>{this.jt(e,t,null)}))}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function Wo(){return new _i(oi.comparator)}function Go(){return new _i(oi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Qo=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Yo{constructor(e,t){this.databaseId=e,this.gt=t}}function Xo(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Zo(e,t){return e.gt?t.toBase64():t.toUint8Array()}function ea(e,t){return Xo(e,t.toTimestamp())}function ta(e){return Mr(!!e),ti.fromTimestamp(function(e){const t=Ai(e);return new ei(t.seconds,t.nanos)}(e))}function na(e,t){return function(e){return new ri(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ra(e){const t=ri.fromString(e);return Mr(Ia(t)),t}function ia(e,t){return na(e.databaseId,t.path)}function sa(e,t){const n=ra(t);if(n.get(1)!==e.databaseId.projectId)throw new Vr(Ur.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Vr(Ur.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new oi(ca(n))}function oa(e,t){return na(e.databaseId,t)}function aa(e){const t=ra(e);return 4===t.length?ri.emptyPath():ca(t)}function la(e){return new ri(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ca(e){return Mr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ua(e,t,n){return{name:ia(e,t),fields:n.value.mapValue.fields}}function ha(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Fr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.gt?(Mr(void 0===t||"string"==typeof t),xi.fromBase64String(t||"")):(Mr(void 0===t||t instanceof Uint8Array),xi.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Ur.UNKNOWN:So(e.code);return new Vr(t,e.message||"")}(o);n=new zo(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=sa(e,r.document.name),s=ta(r.document.updateTime),o=new ns({mapValue:{fields:r.document.fields}}),a=is.newFoundDocument(i,s,o),l=r.targetIds||[],c=r.removedTargetIds||[];n=new Bo(l,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=sa(e,r.document),s=r.readTime?ta(r.readTime):ti.min(),o=is.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Bo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=sa(e,r.document),s=r.removedTargetIds||[];n=new Bo([],s,i,null)}else{if(!("filter"in t))return Fr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new _o(r),s=e.targetId;n=new $o(s,i)}}return n}function da(e,t){let n;if(t instanceof po)n={update:ua(e,t.key,t.value)};else if(t instanceof bo)n={delete:ia(e,t.key)};else if(t instanceof mo)n={update:ua(e,t.key,t.data),updateMask:Sa(t.fieldMask)};else{if(!(t instanceof wo))return Fr();n={verify:ia(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Js)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Qs)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Xs)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof eo)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw Fr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ea(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Fr()}(e,t.precondition)),n}function fa(e,t){return e&&e.length>0?(Mr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ta(e.updateTime):ta(t);return n.isEqual(ti.min())&&(n=ta(t)),new io(n,e.transformResults||[])}(e,t)))):[]}function pa(e,t){return{documents:[oa(e,t.path)]}}function ma(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=oa(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=oa(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Xi(e.value))return{unaryFilter:{field:_a(e.field),op:"IS_NAN"}};if(Yi(e.value))return{unaryFilter:{field:_a(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Xi(e.value))return{unaryFilter:{field:_a(e.field),op:"IS_NOT_NAN"}};if(Yi(e.value))return{unaryFilter:{field:_a(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_a(e.field),op:wa(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:_a(e.field),direction:ba(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.gt||Mi(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ga(e){let t=aa(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Mr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=ya(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new _s(Ea(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Mi(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new ws(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new ws(n,t)}(n.endAt)),Is(t,i,o,s,a,"F",l,c)}function va(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Fr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function ya(e){return e?void 0!==e.unaryFilter?[ka(e)]:void 0!==e.fieldFilter?[Ta(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>ya(e))).reduce(((e,t)=>e.concat(t))):Fr():[]}function ba(e){return Jo[e]}function wa(e){return Qo[e]}function _a(e){return{fieldPath:e.canonicalString()}}function Ea(e){return si.fromServerFormat(e.fieldPath)}function Ta(e){return hs.create(Ea(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Fr()}}(e.fieldFilter.op),e.fieldFilter.value)}function ka(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ea(e.unaryFilter.field);return hs.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ea(e.unaryFilter.field);return hs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ea(e.unaryFilter.field);return hs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ea(e.unaryFilter.field);return hs.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Fr()}}function Sa(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ia(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ca=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Aa=Ca;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&co(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=uo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=uo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Lo();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=lo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ti.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Mo())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,((e,t)=>fo(e,t)))&&Zr(this.baseMutations,e.baseMutations,((e,t)=>fo(e,t)))}}class Oa{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Mr(e.mutations.length===n.length);let r=Do;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Oa(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,n,r,i=ti.min(),s=ti.min(),o=xi.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new La(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new La(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new La(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.re=e}}function Da(e){const t=ga({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Ps(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fa{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(Ri(e.integerValue));else if("doubleValue"in e){const n=Ri(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),qi(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.le(t,20),"string"==typeof n?t.de(n):(t.de(`${n.seconds||""}`),t.fe(n.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(Oi(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.le(t,45),t.fe(n.latitude||0),t.fe(n.longitude||0)}else"mapValue"in e?ts(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):Fr()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const n=e.fields||{};this.le(t,55);for(const r of Object.keys(n))this._e(r,t),this.ae(n[r],t)}pe(e,t){const n=e.values||[];this.le(t,50);for(const r of n)this.ae(r,t)}ge(e,t){this.le(t,37),oi.fromName(e).path.forEach((e=>{this.le(t,60),this.Ie(e,t)}))}le(e,t){e.fe(t)}we(e){e.fe(2)}}Fa.Te=new Fa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma{constructor(){this.Ye=new qa}addToCollectionParentIndex(e,t){return this.Ye.add(t),mi.resolve()}getCollectionParents(e,t){return mi.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return mi.resolve()}deleteFieldIndex(e,t){return mi.resolve()}getDocumentsMatchingTarget(e,t){return mi.resolve(null)}getIndexType(e,t){return mi.resolve(0)}getFieldIndexes(e,t){return mi.resolve([])}getNextCollectionGroupToUpdate(e){return mi.resolve(null)}getMinOffset(e,t){return mi.resolve(ui.min())}getMinOffsetFromCollectionGroup(e,t){return mi.resolve(ui.min())}updateCollectionGroup(e,t,n){return mi.resolve()}updateIndexEntries(e,t){return mi.resolve()}}class qa{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ki(ri.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ki(ri.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ua{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ua(e,Ua.DEFAULT_COLLECTION_PERCENTILE,Ua.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ua.DEFAULT_COLLECTION_PERCENTILE=10,Ua.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ua.DEFAULT=new Ua(41943040,Ua.DEFAULT_COLLECTION_PERCENTILE,Ua.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ua.DISABLED=new Ua(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Va(0)}static vn(){return new Va(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(){this.changes=new Io((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,is.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?mi.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&uo(n.mutation,e,Ii.empty(),ei.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Mo()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Mo()){const r=No();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Ro();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=No();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Mo())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Co();const s=Po(),o=Po();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof mo)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),uo(o.mutation,t,o.mutation.getFieldMask(),ei.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ba(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Po();let r=new _i(((e,t)=>e-t)),i=Mo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Ii.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Mo()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,c=Lo();l.forEach((e=>{if(!i.has(e)){const r=lo(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,c))}return mi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Os(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):mi.resolve(No());let o=-1,a=i;return s.next((t=>mi.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?mi.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Mo()))).next((e=>({batchId:o,changes:Oo(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oi(t)).next((e=>{let t=Ro();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Ro();return this.indexManager.getCollectionParents(e,r).next((s=>mi.forEach(s,(s=>{const o=function(e,t){return new Ss(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,is.newInvalidDocument(n)))}));let n=Ro();return r.forEach(((r,i)=>{const s=e.get(r);void 0!==s&&uo(s.mutation,i,Ii.empty(),ei.now()),qs(t,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):mi.resolve(is.newInvalidDocument(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return mi.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:ta(n.createTime)}),mi.resolve()}getNamedQuery(e,t){return mi.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:Da(e.bundledQuery),readTime:ta(e.readTime)}}(t)),mi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.overlays=new _i(oi.comparator),this.es=new Map}getOverlay(e,t){return mi.resolve(this.overlays.get(t))}getOverlays(e,t){const n=No();return mi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ue(e,t,r)})),mi.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),mi.resolve()}getOverlaysForCollection(e,t,n){const r=No(),i=t.length+1,s=new oi(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return mi.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new _i(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=No(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=No(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return mi.resolve(o)}ue(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Na(t,n));let i=this.es.get(t);void 0===i&&(i=Mo(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.ns=new ki(Wa.ss),this.rs=new ki(Wa.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new Wa(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new Wa(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new oi(new ri([])),n=new Wa(t,e),r=new Wa(t,e+1),i=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),i.push(e.key)})),i}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new oi(new ri([])),n=new Wa(t,e),r=new Wa(t,e+1);let i=Mo();return this.rs.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Wa(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Wa{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return oi.comparator(e.key,t.key)||Xr(e._s,t._s)}static os(e,t){return Xr(e._s,t._s)||oi.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new ki(Wa.ss)}checkEmpty(e){return mi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Ra(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.gs=this.gs.add(new Wa(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return mi.resolve(s)}lookupMutationBatch(e,t){return mi.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return mi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return mi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return mi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Wa(t,0),r=new Wa(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);i.push(t)})),mi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ki(Xr);return t.forEach((e=>{const t=new Wa(e,0),r=new Wa(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),mi.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;oi.isDocumentKey(i)||(i=i.child(""));const s=new Wa(new oi(i),0);let o=new ki(Xr);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),s),mi.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Mr(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return mi.forEach(t.mutations,(r=>{const i=new Wa(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new Wa(t,0),r=this.gs.firstAfterOrEqual(n);return mi.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,mi.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this.Es=e,this.docs=new _i(oi.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return mi.resolve(n?n.document.mutableCopy():is.newInvalidDocument(t))}getEntries(e,t){let n=Co();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():is.newInvalidDocument(e))})),mi.resolve(n)}getAllFromCollection(e,t,n){let r=Co();const i=new oi(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||hi(ci(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return mi.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Fr()}As(e,t){return mi.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Qa(this)}getSize(e){return mi.resolve(this.size)}}class Qa extends ja{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),mi.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.persistence=e,this.Rs=new Io((e=>as(e)),cs),this.lastRemoteSnapshotVersion=ti.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ka,this.targetCount=0,this.vs=Va.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),mi.resolve()}getLastRemoteSnapshotVersion(e){return mi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return mi.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),mi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),mi.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Va(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,mi.resolve()}updateTargetData(e,t){return this.Dn(t),mi.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,mi.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),mi.waitFor(i).next((()=>r))}getTargetCount(e){return mi.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return mi.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),mi.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),mi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),mi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return mi.resolve(n)}containsKey(e,t){return mi.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new vi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Ya(this),this.indexManager=new Ma,this.remoteDocumentCache=function(e){return new Ja(e)}((e=>this.referenceDelegate.xs(e))),this.It=new Pa(t),this.Ns=new za(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ha,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new Ga(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Nr("MemoryPersistence","Starting transaction:",e);const r=new Za(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ms(e,t){return mi.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class Za extends fi{constructor(e){super(),this.currentSequenceNumber=e}}class el{constructor(e){this.persistence=e,this.Fs=new Ka,this.$s=null}static Bs(e){return new el(e)}get Ls(){if(this.$s)return this.$s;throw Fr()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),mi.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),mi.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),mi.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mi.forEach(this.Ls,(n=>{const r=oi.fromPath(n);return this.Us(e,r).next((e=>{e||t.removeEntry(r,ti.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.Us(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}Us(e,t){return mi.or([()=>mi.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=Mo(),r=Mo();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new tl(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((i=>i||this.Oi(e,t,r,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(Cs(t))return mi.resolve(null);let n=Ls(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Ps(t,null,"F"),n=Ls(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Mo(...r);return this.Ni.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,Ps(t,null,"F")):this.Bi(e,s,t,n)}))))})))))}Oi(e,t,n,r){return Cs(t)||r.isEqual(ti.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((i=>{const s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(Or()<=o["in"].DEBUG&&Nr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ms(t)),this.Bi(e,s,t,li(r,-1)))}))}Fi(e,t){let n=new ki(Vs(e));return t.forEach(((t,r)=>{qs(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return Or()<=o["in"].DEBUG&&Nr("QueryEngine","Using full collection scan to execute query:",Ms(t)),this.Ni.getDocumentsMatchingQuery(e,t,ui.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new _i(Xr),this.qi=new Io((e=>as(e)),cs),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $a(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ui)))}}function il(e,t,n,r){return new rl(e,t,n,r)}async function sl(e,t){const n=qr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Mo();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function ol(e,t){const n=qr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=mi.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Mr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Mo();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function al(e){const t=qr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function ll(e,t){const n=qr(e),r=t.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const o=[];t.targetChanges.forEach(((s,a)=>{const l=i.get(a);if(!l)return;o.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,s.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?c=c.withResumeToken(xi.EMPTY_BYTE_STRING,ti.min()).withLastLimboFreeSnapshotVersion(ti.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,s)&&o.push(n.Cs.updateTargetData(e,c))}));let a=Co(),l=Mo();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(cl(e,s,t.documentUpdates).next((e=>{a=e.Wi,l=e.zi}))),!r.isEqual(ti.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return mi.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Ui=i,e)))}function cl(e,t,n){let r=Mo(),i=Mo();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Co();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ti.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Nr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:r,zi:i}}))}function ul(e,t){const n=qr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function hl(e,t){const n=qr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((i=>i?(r=i,mi.resolve(r)):n.Cs.allocateTargetId(e).next((i=>(r=new La(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function dl(e,t,n){const r=qr(e),i=r.Ui.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!gi(e))throw e;Nr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ui=r.Ui.remove(t),r.qi.delete(i.target)}function fl(e,t,n){const r=qr(e);let i=ti.min(),s=Mo();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=qr(e),i=r.qi.get(n);return void 0!==i?mi.resolve(r.Ui.get(i)):r.Cs.getTargetData(t,n)}(r,e,Ls(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:ti.min(),n?s:Mo()))).next((e=>(pl(r,Us(t),e),{documents:e,Hi:s})))))}function pl(e,t,n){let r=e.Ki.get(t)||ti.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}class ml{constructor(){this.activeTargetIds=Uo()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gl{constructor(){this.Lr=new ml,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ml,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Nr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Nr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){const s=this.ho(e,t);Nr("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(e,s,o,n).then((e=>(Nr("RestConnection","Received: ",e),e)),(t=>{throw Pr("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ar,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=bl[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((i,s)=>{const o=new Ir;o.setWithCredentials(!0),o.listenOnce(_r.COMPLETE,(()=>{var t;try{switch(o.getLastErrorCode()){case wr.NO_ERROR:const n=o.getResponseJson();Nr("Connection","XHR received:",JSON.stringify(n)),i(n);break;case wr.TIMEOUT:Nr("Connection",'RPC "'+e+'" timed out'),s(new Vr(Ur.DEADLINE_EXCEEDED,"Request time out"));break;case wr.HTTP_ERROR:const r=o.getStatus();if(Nr("Connection",'RPC "'+e+'" failed with status:',r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const n=null===(t=e)||void 0===t?void 0:t.error;if(n&&n.status&&n.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ur).indexOf(t)>=0?t:Ur.UNKNOWN}(n.status);s(new Vr(e,n.message))}else s(new Vr(Ur.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Vr(Ur.UNAVAILABLE,"Connection failed."));break;default:Fr()}}finally{Nr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=yr(),s=br(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new kr({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Nr("Connection","Creating WebChannel: "+a,o);const l=i.createWebChannel(a,o);let c=!1,u=!1;const h=new wl({Hr:e=>{u?Nr("Connection","Not sending because WebChannel is closed:",e):(c||(Nr("Connection","Opening WebChannel transport."),l.open(),c=!0),Nr("Connection","WebChannel sending:",e),l.send(e))},Jr:()=>l.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(l,Sr.EventType.OPEN,(()=>{u||Nr("Connection","WebChannel transport opened.")})),d(l,Sr.EventType.CLOSE,(()=>{u||(u=!0,Nr("Connection","WebChannel transport closed"),h.io())})),d(l,Sr.EventType.ERROR,(e=>{u||(u=!0,Pr("Connection","WebChannel transport errored:",e),h.io(new Vr(Ur.UNAVAILABLE,"The operation could not be completed")))})),d(l,Sr.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];Mr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Nr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Eo[e];if(void 0!==t)return So(t)}(e),n=i.message;void 0===t&&(t=Ur.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),u=!0,h.io(new Vr(t,n)),l.close()}else Nr("Connection","WebChannel received:",n),h.ro(n)}})),d(s,Er.STAT_EVENT,(e=>{e.stat===Tr.PROXY?Nr("Connection","Detected buffering proxy"):e.stat===Tr.NOPROXY&&Nr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(e){return new Yo(e,!0)}class kl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&Nr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t,n,r,i,s,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new kl(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===Ur.RESOURCE_EXHAUSTED?(Lr(t.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===Ur.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new Vr(Ur.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return Nr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Nr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Il extends Sl{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.It=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=ha(this.It,e),n=function(e){if(!("targetChange"in e))return ti.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ti.min():t.readTime?ta(t.readTime):ti.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=la(this.It),t.addTarget=function(e,t){let n;const r=t.target;return n=us(r)?{documents:pa(e,r)}:{query:ma(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Zo(e,t.resumeToken):t.snapshotVersion.compareTo(ti.min())>0&&(n.readTime=Xo(e,t.snapshotVersion.toTimestamp())),n}(this.It,e);const n=va(this.It,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=la(this.It),t.removeTarget=e,this.Bo(t)}}class xl extends Sl{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Mr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=fa(e.writeResults,e.commitTime),n=ta(e.commitTime);return this.listener.Zo(n,t)}return Mr(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=la(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>da(this.It,e)))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.It=r,this.nu=!1}su(){if(this.nu)throw new Vr(Ur.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Vr(Ur.UNKNOWN,e.toString())}))}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection._o(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Vr(Ur.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class Al{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Lr(t),this.ou=!1):Nr("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr((e=>{n.enqueueAndForget((async()=>{Ul(this)&&(Nr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=qr(e);t._u.add(4),await Nl(t),t.gu.set("Unknown"),t._u.delete(4),await Ol(t)}(this))}))})),this.gu=new Al(n,r)}}async function Ol(e){if(Ul(e))for(const t of e.wu)await t(!0)}async function Nl(e){for(const t of e.wu)await t(!1)}function Ll(e,t){const n=qr(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),ql(n)?Ml(n):rc(n).ko()&&Dl(n,t))}function Pl(e,t){const n=qr(e),r=rc(n);n.du.delete(t),r.ko()&&Fl(n,t),0===n.du.size&&(r.ko()?r.Fo():Ul(n)&&n.gu.set("Unknown"))}function Dl(e,t){e.yu.Mt(t.targetId),rc(e).zo(t)}function Fl(e,t){e.yu.Mt(t),rc(e).Ho(t)}function Ml(e){e.yu=new Ko({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),rc(e).start(),e.gu.uu()}function ql(e){return Ul(e)&&!rc(e).No()&&e.du.size>0}function Ul(e){return 0===qr(e)._u.size}function Vl(e){e.yu=void 0}async function jl(e){e.du.forEach(((t,n)=>{Dl(e,t)}))}async function Bl(e,t){Vl(e),ql(e)?(e.gu.hu(t),Ml(e)):e.gu.set("Unknown")}async function $l(e,t,n){if(e.gu.set("Online"),t instanceof zo&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){Nr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await zl(e,n)}else if(t instanceof Bo?e.yu.Gt(t):t instanceof $o?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(ti.min()))try{const t=await al(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.te(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(xi.EMPTY_BYTE_STRING,n.snapshotVersion)),Fl(e,t);const r=new La(n.target,t,1,n.sequenceNumber);Dl(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Nr("RemoteStore","Failed to raise snapshot:",t),await zl(e,t)}}async function zl(e,t,n){if(!gi(t))throw t;e._u.add(1),await Nl(e),e.gu.set("Offline"),n||(n=()=>al(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Nr("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Ol(e)}))}function Hl(e,t){return t().catch((n=>zl(e,n,t)))}async function Kl(e){const t=qr(e),n=ic(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Wl(t);)try{const e=await ul(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,Gl(t,e)}catch(e){await zl(t,e)}Jl(t)&&Ql(t)}function Wl(e){return Ul(e)&&e.fu.length<10}function Gl(e,t){e.fu.push(t);const n=ic(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Jl(e){return Ul(e)&&!ic(e).No()&&e.fu.length>0}function Ql(e){ic(e).start()}async function Yl(e){ic(e).eu()}async function Xl(e){const t=ic(e);for(const n of e.fu)t.Xo(n.mutations)}async function Zl(e,t,n){const r=e.fu.shift(),i=Oa.from(r,t,n);await Hl(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Kl(e)}async function ec(e,t){t&&ic(e).Yo&&await async function(e,t){if(n=t.code,ko(n)&&n!==Ur.ABORTED){const n=e.fu.shift();ic(e).Mo(),await Hl(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Kl(e)}var n}(e,t),Jl(e)&&Ql(e)}async function tc(e,t){const n=qr(e);n.asyncQueue.verifyOperationInProgress(),Nr("RemoteStore","RemoteStore received new credentials");const r=Ul(n);n._u.add(3),await Nl(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Ol(n)}async function nc(e,t){const n=qr(e);t?(n._u.delete(2),await Ol(n)):t||(n._u.add(2),await Nl(n),n.gu.set("Unknown"))}function rc(e){return e.pu||(e.pu=function(e,t,n){const r=qr(e);return r.su(),new Il(t,r.connection,r.authCredentials,r.appCheckCredentials,r.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:jl.bind(null,e),Zr:Bl.bind(null,e),Wo:$l.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),ql(e)?Ml(e):e.gu.set("Unknown")):(await e.pu.stop(),Vl(e))}))),e.pu}function ic(e){return e.Iu||(e.Iu=function(e,t,n){const r=qr(e);return r.su(),new xl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.It,n)}(e.datastore,e.asyncQueue,{Yr:Yl.bind(null,e),Zr:ec.bind(null,e),tu:Xl.bind(null,e),Zo:Zl.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await Kl(e)):(await e.Iu.stop(),e.fu.length>0&&(Nr("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class sc{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new sc(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Vr(Ur.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oc(e,t){if(Lr("AsyncQueue",`${t}: ${e}`),gi(e))return new Vr(Ur.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.comparator=e?(t,n)=>e(t,n)||oi.comparator(t.key,n.key):(e,t)=>oi.comparator(e.key,t.key),this.keyedMap=Ro(),this.sortedSet=new _i(this.comparator)}static emptySet(e){return new ac(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ac))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new ac;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.Tu=new _i(oi.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Fr():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class cc{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new cc(e,t,ac.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ds(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.Au=void 0,this.listeners=[]}}class hc{constructor(){this.queries=new Io((e=>Fs(e)),Ds),this.onlineState="Unknown",this.Ru=new Set}}async function dc(e,t){const n=qr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new uc),i)try{s.Au=await n.onListen(r)}catch(e){const n=oc(e,`Initialization of query '${Ms(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.bu(n.onlineState),s.Au&&t.Pu(s.Au)&&gc(n)}async function fc(e,t){const n=qr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function pc(e,t){const n=qr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Pu(i)&&(r=!0);t.Au=i}}r&&gc(n)}function mc(e,t,n){const r=qr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function gc(e){e.Ru.forEach((e=>{e.next()}))}class vc{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new cc(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=cc.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yc{constructor(e){this.key=e}}class bc{constructor(e){this.key=e}}class wc{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Mo(),this.mutatedKeys=Mo(),this.Gu=Vs(e),this.Qu=new ac(this.Gu)}get ju(){return this.Uu}Wu(e,t){const n=t?t.zu:new lc,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const c=r.get(e),u=qs(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Hu(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Gu(u,a)>0||l&&this.Gu(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Fr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new cc(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new lc,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.Uu=this.Uu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Uu=this.Uu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Mo(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new bc(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new yc(n))})),t}tc(e){this.Uu=e.Hi,this.Ku=Mo();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return cc.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class _c{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ec{constructor(e){this.key=e,this.nc=!1}}class Tc{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new Io((e=>Fs(e)),Ds),this.rc=new Map,this.oc=new Set,this.uc=new _i(oi.comparator),this.cc=new Map,this.ac=new Ka,this.hc={},this.lc=new Map,this.fc=Va.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function kc(e,t){const n=$c(e);let r,i;const s=n.ic.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const e=await hl(n.localStore,Ls(t));n.isPrimaryClient&&Ll(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Sc(n,t,r,"current"===s,e.resumeToken)}return i}async function Sc(e,t,n,r,i){e._c=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await fl(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Mc(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const s=await fl(e.localStore,t,!0),o=new wc(t,s.Hi),a=o.Wu(s.documents),l=jo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),c=o.applyChanges(a,e.isPrimaryClient,l);Mc(e,n,c.Xu);const u=new _c(t,n,o);return e.ic.set(t,u),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),c.snapshot}async function Ic(e,t){const n=qr(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((e=>!Ds(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Pl(n.remoteStore,r.targetId),Dc(n,r.targetId)})).catch(pi)):(Dc(n,r.targetId),await dl(n.localStore,r.targetId,!0))}async function xc(e,t,n){const r=zc(e);try{const e=await function(e,t){const n=qr(e),r=ei.now(),i=t.reduce(((e,t)=>e.add(t.key)),Mo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Co(),l=Mo();return n.Gi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=ho(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new mo(e.key,t,rs(t.value.mapValue),so.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Oo(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new _i(Xr)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Vc(r,e.changes),await Kl(r.remoteStore)}catch(e){const t=oc(e,"Failed to persist write");n.reject(t)}}async function Cc(e,t){const n=qr(e);try{const e=await ll(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.cc.get(t);r&&(Mr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?Mr(r.nc):e.removedDocuments.size>0&&(Mr(r.nc),r.nc=!1))})),await Vc(n,e,t)}catch(e){await pi(e)}}function Ac(e,t,n){const r=qr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=qr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.bu(t)&&(r=!0)})),r&&gc(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Rc(e,t,n){const r=qr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),s=i&&i.key;if(s){let e=new _i(oi.comparator);e=e.insert(s,is.newNoDocument(s,ti.min()));const n=Mo().add(s),i=new Vo(ti.min(),new Map,new ki(Xr),e,n);await Cc(r,i),r.uc=r.uc.remove(s),r.cc.delete(t),Uc(r)}else await dl(r.localStore,t,!1).then((()=>Dc(r,t,n))).catch(pi)}async function Oc(e,t){const n=qr(e),r=t.batch.batchId;try{const e=await ol(n.localStore,t);Pc(n,r,null),Lc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vc(n,e)}catch(e){await pi(e)}}async function Nc(e,t,n){const r=qr(e);try{const e=await function(e,t){const n=qr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Mr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Pc(r,t,n),Lc(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Vc(r,e)}catch(n){await pi(n)}}function Lc(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function Pc(e,t,n){const r=qr(e);let i=r.hc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function Dc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||Fc(e,t)}))}function Fc(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(Pl(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Uc(e))}function Mc(e,t,n){for(const r of n)r instanceof yc?(e.ac.addReference(r.key,t),qc(e,r)):r instanceof bc?(Nr("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||Fc(e,r.key)):Fr()}function qc(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Nr("SyncEngine","New document in limbo: "+n),e.oc.add(r),Uc(e))}function Uc(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new oi(ri.fromString(t)),r=e.fc.next();e.cc.set(r,new Ec(n)),e.uc=e.uc.insert(n,r),Ll(e.remoteStore,new La(Ls(xs(n.path)),r,2,vi.at))}}async function Vc(e,t,n){const r=qr(e),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((e,a)=>{o.push(r._c(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=tl.Ci(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.sc.Wo(i),await async function(e,t){const n=qr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>mi.forEach(t,(t=>mi.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>mi.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!gi(e))throw e;Nr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ui.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(e,i)}}}(r.localStore,s))}async function jc(e,t){const n=qr(e);if(!n.currentUser.isEqual(t)){Nr("SyncEngine","User change. New user:",t.toKey());const e=await sl(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new Vr(Ur.CANCELLED,t))}))})),e.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Vc(n,e.ji)}}function Bc(e,t){const n=qr(e),r=n.cc.get(t);if(r&&r.nc)return Mo().add(r.key);{let e=Mo();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}function $c(e){const t=qr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Cc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Rc.bind(null,t),t.sc.Wo=pc.bind(null,t.eventManager),t.sc.wc=mc.bind(null,t.eventManager),t}function zc(e){const t=qr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Oc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Nc.bind(null,t),t}class Hc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Tl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return il(this.persistence,new nl,e.initialUser,this.It)}yc(e){return new Xa(el.Bs,this.It)}gc(e){return new gl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Kc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Ac(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=jc.bind(null,this.syncEngine),await nc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new hc}createDatastore(e){const t=Tl(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new _l(r));var r;return function(e,t,n,r){return new Cl(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Ac(this.syncEngine,e,0),s=yl.C()?new yl:new vl,new Rl(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Tc(e,t,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=qr(e);Nr("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Nl(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(e,t,n){if(!n)throw new Vr(Ur.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Gc(e,t,n,r){if(!0===t&&!0===r)throw new Vr(Ur.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Jc(e){if(!oi.isDocumentKey(e))throw new Vr(Ur.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Qc(e){if(oi.isDocumentKey(e))throw new Vr(Ur.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Yc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Fr()}function Xc(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Vr(Ur.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yc(e);throw new Vr(Ur.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zc=new Map;class eu{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Vr(Ur.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Vr(Ur.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Gc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Vr(Ur.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Vr(Ur.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eu(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new $r;switch(e.type){case"gapi":const t=e.client;return new Wr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Vr(Ur.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Zc.get(e);t&&(Nr("ComponentProvider","Removing Datastore"),Zc.delete(e),t.terminate())}(this),Promise.resolve()}}function nu(e,t,n,r={}){var i;const s=(e=Xc(e,tu))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Pr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Cr.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Vr(Ur.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Cr(s)}e._authCredentials=new zr(new Br(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new su(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ru(this.firestore,e,this._key)}}class iu{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new iu(this.firestore,e,this._query)}}class su extends iu{constructor(e,t,n){super(e,t,xs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ru(this.firestore,null,new oi(e))}withConverter(e){return new su(this.firestore,e,this._path)}}function ou(e,t,...n){if(e=(0,a.m9)(e),Wc("collection","path",t),e instanceof tu){const r=ri.fromString(t,...n);return Qc(r),new su(e,null,r)}{if(!(e instanceof ru||e instanceof su))throw new Vr(Ur.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ri.fromString(t,...n));return Qc(r),new su(e.firestore,null,r)}}function au(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=Yr.R()),Wc("doc","path",t),e instanceof tu){const r=ri.fromString(t,...n);return Jc(r),new ru(e,null,new oi(r))}{if(!(e instanceof ru||e instanceof su))throw new Vr(Ur.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ri.fromString(t,...n));return Jc(r),new ru(e.firestore,e instanceof su?e.converter:null,new oi(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cu{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Cr.UNAUTHENTICATED,this.clientId=Yr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Nr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Nr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Vr(Ur.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=oc(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function uu(e,t){e.asyncQueue.verifyOperationInProgress(),Nr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await sl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function hu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await du(e);Nr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>tc(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>tc(t.remoteStore,n))),e.onlineComponents=t}async function du(e){return e.offlineComponents||(Nr("FirestoreClient","Using default OfflineComponentProvider"),await uu(e,new Hc)),e.offlineComponents}async function fu(e){return e.onlineComponents||(Nr("FirestoreClient","Using default OnlineComponentProvider"),await hu(e,new Kc)),e.onlineComponents}function pu(e){return fu(e).then((e=>e.syncEngine))}async function mu(e){const t=await fu(e),n=t.eventManager;return n.onListen=kc.bind(null,t.syncEngine),n.onUnlisten=Ic.bind(null,t.syncEngine),n}class gu{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new kl(this,"async_queue_retry"),this.Wc=()=>{const e=El();e&&Nr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=El();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const t=El();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise((()=>{}));const t=new jr;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(E){if(!gi(E))throw E;Nr("AsyncQueue","Operation failed with retryable error: "+E)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Lr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=sc.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.qc.push(r),r}zc(){this.Kc&&Fr()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.qc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.qc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.qc.indexOf(e);this.qc.splice(t,1)}}function vu(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class yu extends tu{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new gu,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_u(this),this._firestoreClient.terminate()}}function bu(e,t){const n="object"==typeof e?e:(0,i.Mq)(),r="string"==typeof e?e:t||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.P0)("firestore");e&&nu(s,...e)}return s}function wu(e){return e._firestoreClient||_u(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function _u(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Di(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new cu(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Eu(xi.fromBase64String(e))}catch(e){throw new Vr(Ur.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Eu(xi.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Vr(Ur.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new si(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ku{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Vr(Ur.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Vr(Ur.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Xr(this._lat,e._lat)||Xr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=/^__.*__$/;class xu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new mo(e,this.data,this.fieldMask,t,this.fieldTransforms):new po(e,this.data,t,this.fieldTransforms)}}function Cu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Fr()}}class Au{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Au(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ju(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Cu(this.sa)&&Iu.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Ru{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||Tl(e)}da(e,t,n,r=!1){return new Au({sa:e,methodName:t,fa:n,path:si.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Ou(e){const t=e._freezeSettings(),n=Tl(e._databaseId);return new Ru(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Nu(e,t,n,r,i,s={}){const o=e.da(s.merge||s.mergeFields?2:0,t,n,i);Mu("Data must be an object, but it was:",o,r);const a=Du(r,o);let l,c;if(s.merge)l=new Ii(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=qu(t,r,n);if(!o.contains(i))throw new Vr(Ur.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Bu(e,i)||e.push(i)}l=new Ii(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new xu(new ns(a),l,c)}function Lu(e,t,n,r=!1){return Pu(n,e.da(r?4:3,t))}function Pu(e,t){if(Fu(e=(0,a.m9)(e)))return Mu("Unsupported field value:",t,e),Du(e,t);if(e instanceof ku)return function(e,t){if(!Cu(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Pu(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return zs(t.It,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ei.fromDate(e);return{timestampValue:Xo(t.It,n)}}if(e instanceof ei){const n=new ei(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Xo(t.It,n)}}if(e instanceof Su)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Eu)return{bytesValue:Zo(t.It,e._byteString)};if(e instanceof ru){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:na(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${Yc(e)}`)}(e,t)}function Du(e,t){const n={};return wi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):bi(e,((e,r)=>{const i=Pu(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Fu(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ei||e instanceof Su||e instanceof Eu||e instanceof ru||e instanceof ku)}function Mu(e,t,n){if(!Fu(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Yc(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function qu(e,t,n){if((t=(0,a.m9)(t))instanceof Tu)return t._internalPath;if("string"==typeof t)return Vu(e,t);throw ju("Field path arguments must be of type string or ",e,!1,void 0,n)}const Uu=new RegExp("[~\\*/\\[\\]]");function Vu(e,t,n){if(t.search(Uu)>=0)throw ju(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Tu(...t.split("."))._internalPath}catch(r){throw ju(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ju(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Vr(Ur.INVALID_ARGUMENT,a+e+l)}function Bu(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ru(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new zu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Hu("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class zu extends $u{data(){return super.data()}}function Hu(e,t){return"string"==typeof t?Vu(e,t):t instanceof Tu?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Vr(Ur.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wu{}function Gu(e,...t){for(const n of t)e=n._apply(e);return e}class Ju extends Wu{constructor(e,t,n){super(),this.ma=e,this.ga=t,this.ya=n,this.type="where"}_apply(e){const t=Ou(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Vr(Ur.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Xu(o,s);const t=[];for(const n of o)t.push(Yu(r,e,n));a={arrayValue:{values:t}}}else a=Yu(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Xu(o,s),a=Lu(n,t,o,"in"===s||"not-in"===s);const l=hs.create(i,s,a);return function(e,t){if(t.dt()){const n=Rs(e);if(null!==n&&!n.isEqual(t.field))throw new Vr(Ur.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=As(e);null!==r&&Zu(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Vr(Ur.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Vr(Ur.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,l),l}(e._query,"where",t,e.firestore._databaseId,this.ma,this.ga,this.ya);return new iu(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Ss(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Qu(e,t,n){const r=t,i=Hu("where",e);return new Ju(i,r,n)}function Yu(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Vr(Ur.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Os(t)&&-1!==n.indexOf("/"))throw new Vr(Ur.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ri.fromString(n));if(!oi.isDocumentKey(r))throw new Vr(Ur.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gi(e,new oi(r))}if(n instanceof ru)return Gi(e,n._key);throw new Vr(Ur.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yc(n)}.`)}function Xu(e,t){if(!Array.isArray(e)||0===e.length)throw new Vr(Ur.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Vr(Ur.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Zu(e,t,n){if(!n.isEqual(t))throw new Vr(Ur.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{convertValue(e,t="none"){switch(ji(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ri(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Fr()}}convertObject(e,t){const n={};return bi(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Su(Ri(e.latitude),Ri(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Li(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Pi(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new ei(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ri.fromString(e);Mr(Ia(n));const r=new Fi(n.get(1),n.get(3)),i=new oi(n.popFirst(5));return r.isEqual(t)||Lr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rh extends $u{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ih(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Hu("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ih extends rh{data(e={}){return super.data(e)}}class sh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new nh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ih(this._firestore,this._userDataWriter,n.key,n,new nh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Vr(Ur.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new ih(e._firestore,e._userDataWriter,n.doc.key,n.doc,new nh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new ih(e._firestore,e._userDataWriter,t.doc.key,t.doc,new nh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:oh(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function oh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Fr()}}class ah extends eh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Eu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ru(this.firestore,null,t)}}function lh(e){return hh(Xc(e.firestore,yu),[new bo(e._key,so.none())])}function ch(e,t){const n=Xc(e.firestore,yu),r=au(e),i=th(e.converter,t);return hh(n,[Nu(Ou(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,so.exists(!1))]).then((()=>r))}function uh(e,...t){var n,r,i;e=(0,a.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||vu(t[o])||(s=t[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges};if(vu(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,h;if(e instanceof ru)u=Xc(e.firestore,yu),h=xs(e._key.path),c={next:n=>{t[o]&&t[o](dh(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Xc(e,iu);u=Xc(n.firestore,yu),h=n._query;const r=new ah(u);c={next:e=>{t[o]&&t[o](new sh(u,r,n,e))},error:t[o+1],complete:t[o+2]},Ku(e._query)}return function(e,t,n,r){const i=new lu(r),s=new vc(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>dc(await mu(e),s))),()=>{i.bc(),e.asyncQueue.enqueueAndForget((async()=>fc(await mu(e),s)))}}(wu(u),h,l,c)}function hh(e,t){return function(e,t){const n=new jr;return e.asyncQueue.enqueueAndForget((async()=>xc(await pu(e),t,n))),n.promise}(wu(e),t)}function dh(e,t,n){const r=n.docs.get(t._key),i=new ah(e);return new rh(e,i,t._key,r,new nh(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Ar=e}(i.Jn),(0,i.Xd)(new s.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new yu(new Hr(e.getProvider("auth-internal")),new Jr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Vr(Ur.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fi(e.options.projectId,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(xr,"3.7.3",e),(0,i.KN)(xr,"3.7.3","esm2017")}()},2309:(e,t,n)=>{"use strict";n.d(t,{KV:()=>r.KV,aF:()=>r.aF,cF:()=>r.cF,iH:()=>r.iH,sd:()=>r.sd});var r=n(2079)},1639:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},3340:(e,t,n)=>{"use strict";function r(e){return e}function i(e){return e}n.d(t,{BC:()=>i,xr:()=>r})},8339:(e,t,n)=>{"use strict";n.d(t,{p7:()=>nt,r5:()=>V,tv:()=>st});var r=n(9835),i=n(499);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function l(e,t){const n={};for(const r in t){const i=t[r];n[r]=u(i)?i.map(e):e(i)}return n}const c=()=>{},u=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=_(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&v(t.matched[r],n.matched[i])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function v(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b(e[n],t[n]))return!1;return!0}function b(e,t){return u(e)?w(e,t):u(t)?w(t,e):e===t}function w(e,t){return u(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function _(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,T;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function k(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const S=/^[^#]+#/;function I(e,t){return e.replace(S,"#")+t}function x(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const C=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=x(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function R(e,t){const n=history.state?history.state.position-t:-1;return n+e}const O=new Map;function N(e,t){O.set(e,t)}function L(e){const t=O.get(e);return O.delete(e),t}let P=()=>location.protocol+"//"+location.host;function D(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,e);return o+r+i}function F(e,t,n,r){let i=[],s=[],o=null;const l=({state:s})=>{const a=D(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:u,type:E.pop,direction:u?u>0?T.forward:T.back:T.unknown})}))};function c(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:C()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h),{pauseListeners:c,listen:u,destroy:d}}function M(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?C():null}}function q(e){const{history:t,location:n}=window,r={value:D(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:P()+e+r;try{t[o?"replaceState":"pushState"](s,"",l),i.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}function o(e,n){const o=a({},t.state,M(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function l(e,n){const o=a({},i.value,t.state,{forward:e,scroll:C()});s(o.current,o,!0);const l=a({},M(r.value,e,null),{position:o.position+1},n);s(e,l,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:l,replace:o}}function U(e){e=k(e);const t=q(e),n=F(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:I.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function V(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),U(e)}function j(e){return"string"===typeof e||e&&"object"===typeof e}function B(e){return"string"===typeof e||"symbol"===typeof e}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var H;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(H||(H={}));function K(e,t){return a(new Error,{type:e,[z]:!0},t)}function W(e,t){return e instanceof Error&&z in e&&(null==t||!!(e.type&t))}const G="[^/]+?",J={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function Y(e,t){const n=a({},J,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Q,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:c}=r;s.push({name:e,repeatable:n,optional:l});const u=c||G;if(u!==G){o+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(d=l&&a.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),i+=d,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(u(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=u(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n||"/"}return{re:o,score:r,keys:s,parse:l,stringify:c}}function X(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=X(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(ee(r))return 1;if(ee(i))return-1}return i.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ne.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function ie(e,t,n){const r=Y(re(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,l=ae(e);l.aliasOf=r&&r.record;const h=he(t,e),d=[l];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=ie(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ce(f)&&o(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&u(f)}return p?()=>{o(p)}:c}function o(e){if(B(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function l(){return n}function u(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,l={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw K(1,{location:e});0,o=i.record.name,l=a(oe(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,i.keys.map((e=>e.name)))),s=i.stringify(l)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(l=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw K(1,{location:e,currentLocation:t});o=i.record.name,l=a({},t.params,e.params),s=i.stringify(l)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:l,matched:c,meta:ue(c)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:le(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function le(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function he(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,pe=/&/g,me=/\//g,ge=/=/g,ve=/\?/g,ye=/\+/g,be=/%5B/g,we=/%5D/g,_e=/%5E/g,Ee=/%60/g,Te=/%7B/g,ke=/%7C/g,Se=/%7D/g,Ie=/%20/g;function xe(e){return encodeURI(""+e).replace(ke,"|").replace(be,"[").replace(we,"]")}function Ce(e){return xe(e).replace(Te,"{").replace(Se,"}").replace(_e,"^")}function Ae(e){return xe(e).replace(ye,"%2B").replace(Ie,"+").replace(fe,"%23").replace(pe,"%26").replace(Ee,"`").replace(Te,"{").replace(Se,"}").replace(_e,"^")}function Re(e){return Ae(e).replace(ge,"%3D")}function Oe(e){return xe(e).replace(fe,"%23").replace(ve,"%3F")}function Ne(e){return null==e?"":Oe(e).replace(me,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Pe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),s=Le(n<0?e:e.slice(0,n)),o=n<0?null:Le(e.slice(n+1));if(s in t){let e=t[s];u(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=u(r)?r.map((e=>e&&Ae(e))):[r&&Ae(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Fe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=u(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Me=Symbol(""),qe=Symbol(""),Ue=Symbol(""),Ve=Symbol(""),je=Symbol("");function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $e(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const l=e=>{!1===e?a(K(4,{from:n,to:t})):e instanceof Error?a(e):j(e)?a(K(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function ze(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(He(a)){const o=a.__vccOpts||a,l=o[t];l&&i.push($e(l,n,r,s,e))}else{let l=a();0,i.push((()=>l.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const l=a.__vccOpts||a,c=l[t];return c&&$e(c,n,r,s,e)()}))))}}}return i}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ke(e){const t=(0,r.f3)(Ue),n=(0,r.f3)(Ve),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(v.bind(null,r));if(o>-1)return o;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&i[i.length-1].path!==a?i.findIndex(v.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qe(n.params,s.value.params))),l=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,s.value.params)));function u(n={}){return Je(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(c):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:l,navigate:u}}const We=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=(0,i.qj)(Ke(e)),{options:s}=(0,r.f3)(Ue),o=(0,r.Fl)((()=>({[Xe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Ge=We;function Je(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!u(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(je),o=(0,r.Fl)((()=>e.route||s.value)),l=(0,r.f3)(qe,0),c=(0,r.Fl)((()=>{let e=(0,i.SU)(l);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,r.Fl)((()=>o.value.matched[c.value]));(0,r.JJ)(qe,(0,r.Fl)((()=>c.value+1))),(0,r.JJ)(Me,u),(0,r.JJ)(je,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,u.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&v(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,l=u.value,c=l&&l.components[s];if(!c)return et(n.default,{Component:c,route:i});const d=l.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(l.instances[s]=null)},m=(0,r.h)(c,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:m,route:i})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=se(e.routes,e),n=e.parseQuery||Pe,o=e.stringifyQuery||De,h=e.history;const d=Be(),m=Be(),v=Be(),y=(0,i.XI)($);let b=$;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=l.bind(null,(e=>""+e)),_=l.bind(null,Ne),T=l.bind(null,Le);function k(e,n){let r,i;return B(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function I(){return t.getRoutes().map((e=>e.record))}function x(e){return!!t.getRecordMatcher(e)}function O(e,r){if(r=a({},r||y.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:Le(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:_(e.params)}),r.params=_(r.params)}const s=t.resolve(i,r),l=e.hash||"";s.params=w(T(s.params));const c=p(o,a({},e,{hash:Ce(l),path:s.path})),u=h.createHref(c);return a({fullPath:c,hash:l,query:o===De?Fe(e.query):e.query||{}},s,{redirectedFrom:void 0,href:u})}function P(e){return"string"===typeof e?f(n,e,y.value.path):a({},e)}function D(e,t){if(b!==e)return K(8,{from:t,to:e})}function F(e){return U(e)}function M(e){return F(a(P(e),{replace:!0}))}function q(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function U(e,t){const n=b=O(e),r=y.value,i=e.state,s=e.force,l=!0===e.replace,c=q(n);if(c)return U(a(P(c),{state:"object"===typeof c?a({},i,c.state):i,force:s,replace:l}),t||n);const u=n;let h;return u.redirectedFrom=t,!s&&g(o,r,n)&&(h=K(16,{to:u,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):j(u,r)).catch((e=>W(e)?W(e,2)?e:te(e):Z(e,u,r))).then((e=>{if(e){if(W(e,2))return U(a({replace:l},P(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||u)}else e=H(u,r,!0,l,i);return z(u,r,e),e}))}function V(e,t){const n=D(e,t);return n?Promise.reject(n):Promise.resolve()}function j(e,t){let n;const[r,i,s]=it(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push($e(r,e,t))}));const o=V.bind(null,e,t);return n.push(o),rt(n).then((()=>{n=[];for(const r of d.list())n.push($e(r,e,t));return n.push(o),rt(n)})).then((()=>{n=ze(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push($e(r,e,t))}));return n.push(o),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(u(r.beforeEnter))for(const i of r.beforeEnter)n.push($e(i,e,t));else n.push($e(r.beforeEnter,e,t));return n.push(o),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(s,"beforeRouteEnter",e,t),n.push(o),rt(n)))).then((()=>{n=[];for(const r of m.list())n.push($e(r,e,t));return n.push(o),rt(n)})).catch((e=>W(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of v.list())r(e,t,n)}function H(e,t,n,r,i){const o=D(e,t);if(o)return o;const l=t===$,c=s?history.state:{};n&&(r||l?h.replace(e.fullPath,a({scroll:l&&c&&c.scroll},i)):h.push(e.fullPath,i)),y.value=e,ne(e,t,n,l),te()}let G;function J(){G||(G=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=O(e),i=q(r);if(i)return void U(a(i,{replace:!0}),r).catch(c);b=r;const o=y.value;s&&N(R(o.fullPath,n.delta),C()),j(r,o).catch((e=>W(e,12)?e:W(e,2)?(U(e.to,r).then((e=>{W(e,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(c),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(e,r,o)))).then((e=>{e=e||H(r,o,!1),e&&(n.delta&&!W(e,8)?h.go(-n.delta,!1):n.type===E.pop&&W(e,20)&&h.go(-1,!1)),z(r,o,e)})).catch(c)})))}let Q,Y=Be(),X=Be();function Z(e,t,n){te(e);const r=X.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return Q&&y.value!==$?Promise.resolve():new Promise(((e,t)=>{Y.add([e,t])}))}function te(e){return Q||(Q=!e,J(),Y.list().forEach((([t,n])=>e?n(e):t())),Y.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const l=!i&&L(R(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,l))).then((e=>e&&A(e))).catch((e=>Z(e,t,n)))}const re=e=>h.go(e);let ie;const oe=new Set,ae={currentRoute:y,listening:!0,addRoute:k,removeRoute:S,hasRoute:x,getRoutes:I,resolve:O,options:e,push:F,replace:M,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:m.add,afterEach:v.add,onError:X.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),s&&!ie&&y.value===$&&(ie=!0,F(h.location).catch((e=>{0})));const n={};for(const i in $)n[i]=(0,r.Fl)((()=>y.value[i]));e.provide(Ue,t),e.provide(Ve,(0,i.qj)(n)),e.provide(je,y);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(b=$,G&&G(),G=null,y.value=$,ie=!1,Q=!1),o()}}};return ae}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>v(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>v(e,a)))||i.push(a))}return[n,r,i]}function st(){return(0,r.f3)(Ue)}},8897:(e,t,n)=>{"use strict";n.d(t,{Jn:()=>me,qX:()=>he,Xd:()=>ue,Mq:()=>ve,ZF:()=>ge,KN:()=>ye});var r=n(3513),i=n(9795),s=n(5505);const o=(e,t)=>t.some((t=>e instanceof t));let a,l;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),o(e,c())?new Proxy(e,y):e)}function E(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const T=e=>m.get(e);function k(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],x=new Map;function C(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(x.get(t))return x.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return x.set(t,s),s}b((e=>({...e,get:(t,n,r)=>C(t,n)||e.get(t,n,r),has:(t,n)=>!!C(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const O="@firebase/app",N="0.8.4",L=new i.Yd("@firebase/app"),P="@firebase/app-compat",D="@firebase/analytics-compat",F="@firebase/analytics",M="@firebase/app-check-compat",q="@firebase/app-check",U="@firebase/auth",V="@firebase/auth-compat",j="@firebase/database",B="@firebase/database-compat",$="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",W="@firebase/messaging",G="@firebase/messaging-compat",J="@firebase/performance",Q="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.14.0",se="[DEFAULT]",oe={[O]:"fire-core",[P]:"fire-core-compat",[F]:"fire-analytics",[D]:"fire-analytics-compat",[q]:"fire-app-check",[M]:"fire-app-check-compat",[U]:"fire-auth",[V]:"fire-auth-compat",[j]:"fire-rtdb",[B]:"fire-rtdb-compat",[$]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[W]:"fire-fcm",[G]:"fire-fcm-compat",[J]:"fire-perf",[Q]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,le=new Map;function ce(e,t){try{e.container.addComponent(t)}catch(n){L.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(le.has(t))return L.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ae.values())ce(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new s.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=ie;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const l=new r.H0(o);for(const r of le.values())l.addComponent(r);const c=new pe(n,i,l);return ae.set(o,c),c}function ve(e=se){const t=ae.get(e);if(!t&&e===se)return ge();if(!t)throw fe.create("no-app",{appName:e});return t}function ye(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void L.warn(e.join(" "))}ue(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be="firebase-heartbeat-database",we=1,_e="firebase-heartbeat-store";let Ee=null;function Te(){return Ee||(Ee=k(be,we,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_e)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function ke(e){var t;try{const t=await Te();return t.transaction(_e).objectStore(_e).get(Ie(e))}catch(n){if(n instanceof s.ZR)L.warn(n.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});L.warn(e.message)}}}async function Se(e,t){var n;try{const n=await Te(),r=n.transaction(_e,"readwrite"),i=r.objectStore(_e);return await i.put(t,Ie(e)),r.done}catch(r){if(r instanceof s.ZR)L.warn(r.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});L.warn(e.message)}}}function Ie(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=1024,Ce=2592e6;class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ne(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Re();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ce})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Re(),{heartbeatsToSend:t,unsentEntries:n}=Oe(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Re(){const e=new Date;return e.toISOString().substring(0,10)}function Oe(e,t=xe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Le(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Le(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ne{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ke(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Le(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){ue(new r.wA("platform-logger",(e=>new A(e)),"PRIVATE")),ue(new r.wA("heartbeat",(e=>new Ae(e)),"PRIVATE")),ye(O,N,e),ye(O,N,"esm2017"),ye("fire-js","")}Pe("")},3513:(e,t,n)=>{"use strict";n.d(t,{H0:()=>c,wA:()=>i});var r=n(5505);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},9795:(e,t,n)=>{"use strict";n.d(t,{Yd:()=>c,in:()=>i});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},8593:e=>{"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}}]);