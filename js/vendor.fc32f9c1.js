(globalThis["webpackChunkfirebaseaut"]=globalThis["webpackChunkfirebaseaut"]||[]).push([[736],{202:(e,t,n)=>{"use strict";n.d(t,{hJ:()=>nt,Xb:()=>pt,v0:()=>Sr,Aj:()=>yt,e5:()=>mt,rh:()=>yn,w7:()=>bt});var r=n(5505),i=n(8897),o=n(9795);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(3513);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=l,c=new r.LL("auth","Firebase",l()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}
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
 */function f(e,...t){throw v(e,...t)}function p(e,...t){return v(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r.LL("auth","Firebase",i);return o.create(t,{appName:e.name})}function g(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&f(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function y(e,t,...n){if(!e)throw v(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function w(e,t){e||b(t)}
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
 */function S(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function T(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(E);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
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
 */function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function x(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(x()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function F(e,t,n,i,o={}){return M(e,o,(async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),N.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))}))}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},L),t);try{const t=new V(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw j(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw j(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);f(e,a)}}catch(o){if(o instanceof r.ZR)throw o;f(e,"network-request-failed")}}async function q(e,t,n,r,i={}){const o=await F(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?O(e.config,i):`${e.config.apiScheme}://${i}`}class V{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),P.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function H(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),o=W(i);y(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:z(K(o.auth_time)),issuedAtTime:z(K(o.iat)),expirationTime:z(K(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function K(e){return 1e3*Number(e)}function W(e){var t;const[n,i,o]=e.split(".");if(void 0===n||void 0===i||void 0===o)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(i);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",null===(t=s)||void 0===t?void 0:t.toString()),null}}function G(e){const t=W(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class Y{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function X(e){var t;const n=e.auth,r=await e.getIdToken(),i=await J(e,$(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?ne(o.providerUserInfo):[],a=te(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),c=!!l&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Y(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,h)}async function ee(e){const t=(0,r.m9)(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function te(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ne(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function re(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=U(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class ie{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await re(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ie;return n&&(y("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ie,this.toJSON())}_performRefresh(){return b("not implemented")}}
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
 */function oe(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await J(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:S}=t;y(b&&S,e,"internal-error");const T=ie.fromJSON(this.name,S);y("string"===typeof b,e,"internal-error"),oe(c,e.name),oe(h,e.name),y("boolean"===typeof w,e,"internal-error"),y("boolean"===typeof _,e,"internal-error"),oe(d,e.name),oe(f,e.name),oe(p,e.name),oe(m,e.name),oe(g,e.name),oe(v,e.name);const k=new se({uid:b,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(k.providerData=E.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new ie;r.updateFromServerResponse(t);const i=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await X(i),i}}
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
 */function ue(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ue(this.userKey,r.apiKey,i),this.fullPersistenceKey=ue("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(E(le),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||E(le);const o=ue(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=se._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(l){}}))),new ce(i,e,n)):new ce(i,e,n)}}
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
 */function he(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(me(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ve(t))return"Blackberry";if(ye(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||pe(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,r.z$)()){return/firefox\//i.test(e)}function fe(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pe(e=(0,r.z$)()){return/crios\//i.test(e)}function me(e=(0,r.z$)()){return/iemobile/i.test(e)}function ge(e=(0,r.z$)()){return/android/i.test(e)}function ve(e=(0,r.z$)()){return/blackberry/i.test(e)}function ye(e=(0,r.z$)()){return/webos/i.test(e)}function be(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function we(e=(0,r.z$)()){var t;return be(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return(0,r.w1)()&&10===document.documentMode}function Ee(e=(0,r.z$)()){return be(e)||ge(e)||ye(e)||ve(e)||/windows phone/i.test(e)||me(e)}function Se(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function Te(e,t=[]){let n;switch(e){case"Browser":n=he((0,r.z$)());break;case"Worker":n=`${he((0,r.z$)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
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
 */class ke{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
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
 */class xe{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ce(this),this.idTokenSubscription=new Ce(this),this.beforeStateQueue=new ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=E(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await X(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(E(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&E(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[E(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return y(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Te(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ie(e){return(0,r.m9)(e)}class Ce{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ae(e,t,n){const r=Ie(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Re(t),{host:s,port:a}=Oe(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Le()}function Re(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Oe(e){const t=Re(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ne(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ne(t)}}}function Ne(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Le(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */const je="http://localhost";class Be extends Pe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Be(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Be(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ve(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ve(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ve(e,t)}buildRequest(){const e={requestUri:je,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
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
 */function Je(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qe(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||t||e}class Ze{constructor(e){var t,n,i,o,s,a;const l=(0,r.zd)((0,r.pd)(e)),u=null!==(t=l["apiKey"])&&void 0!==t?t:null,c=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=Je(null!==(i=l["mode"])&&void 0!==i?i:null);y(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(o=l["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=l["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Qe(e);try{return new Ze(t)}catch(n){return null}}}
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
class Ye{constructor(){this.providerId=Ye.PROVIDER_ID}static credential(e,t){return Ue._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ze.parseLink(t);return y(n,"argument-error"),Ue._fromEmailAndCode(e,n.code,n.tenantId)}}Ye.PROVIDER_ID="password",Ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Xe{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class et extends Xe{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
async function ot(e,t){return q(e,"POST","/v1/accounts:signUp",D(e,t))}
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
 */it.TWITTER_SIGN_IN_METHOD="twitter.com",it.PROVIDER_ID="twitter.com";class st{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await se._fromIdTokenResponse(e,n,r),o=at(n),s=new st({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=at(n);return new st({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function at(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class lt extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,lt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new lt(e,t,n,r)}}function ut(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw lt._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function ct(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return st._forOperation(e,"link",r)}
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
async function ht(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const r=await J(e,ut(i,o,t,e),n);y(r.idToken,i,"internal-error");const s=W(r.idToken);y(s,i,"internal-error");const{sub:a}=s;return y(e.uid===a,i,"user-mismatch"),st._forOperation(e,o,r)}catch(s){throw"auth/user-not-found"===(null===(r=s)||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),s}}
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
 */async function dt(e,t,n=!1){const r="signIn",i=await ut(e,r,t),o=await st._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function ft(e,t){return dt(Ie(e),t)}async function pt(e,t,n){const r=Ie(e),i=await ot(r,{returnSecureToken:!0,email:t,password:n}),o=await st._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function mt(e,t,n){return ft((0,r.m9)(e),Ye.credential(t,n))}
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
 */class St{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Et,"1"),this.storage.removeItem(Et),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function Tt(){const e=(0,r.z$)();return fe(e)||be(e)}const kt=1e3,xt=10;class It extends St{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tt()&&Se(),this.fallbackToPolling=Ee(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);_e()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,xt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),kt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}It.type="LOCAL";const Ct=It;
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
 */class At extends St{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}At.type="SESSION";const Rt=At;
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
 */class Nt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Nt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await Ot(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
 */Nt.receivers=[];class Pt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const l=Lt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
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
 */const jt="firebaseLocalStorageDb",Bt=1,$t="firebaseLocalStorage",zt="fbase_key";class Ht{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Kt(e,t){return e.transaction([$t],t?"readwrite":"readonly").objectStore($t)}function Wt(){const e=indexedDB.deleteDatabase(jt);return new Ht(e).toPromise()}function Gt(){const e=indexedDB.open(jt,Bt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore($t,{keyPath:zt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains($t)?t(n):(n.close(),await Wt(),t(await Gt()))}))}))}async function Jt(e,t,n){const r=Kt(e,!0).put({[zt]:t,value:n});return new Ht(r).toPromise()}async function Qt(e,t){const n=Kt(e,!1).get(t),r=await new Ht(n).toPromise();return void 0===r?null:r.value}function Zt(e,t){const n=Kt(e,!0).delete(t);return new Ht(n).toPromise()}const Yt=800,Xt=3;class en{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Gt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Xt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nt._getInstance(Vt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await qt(),!this.activeServiceWorker)return;this.sender=new Pt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Ut()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gt();return await Jt(e,Et,"1"),await Zt(e,Et),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Jt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Qt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Zt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Kt(e,!1).getAll();return new Ht(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Yt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}en.type="LOCAL";const tn=en;
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
function on(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function sn(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",on().appendChild(r)}))}function an(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
const ln="recaptcha";async function un(e,t,n){var r;const i=await n.verify();try{let o;if(y("string"===typeof i,e,"argument-error"),y(n.type===ln,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){y("enroll"===t.type,e,"internal-error");const n=await wt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;y(n,e,"missing-multi-factor-info");const s=await nn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await $e(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class cn{constructor(e){this.providerId=cn.PROVIDER_ID,this.auth=Ie(e)}verifyPhoneNumber(e,t){return un(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Ge._fromVerification(e,t)}static credentialFromResult(e){const t=e;return cn.credentialFromTaggedObject(t)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ge._fromTokenResponse(t,n):null}}
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
 */cn.PROVIDER_ID="phone",cn.PHONE_SIGN_IN_METHOD="phone";class dn extends Pe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ve(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ve(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fn(e){return dt(e.auth,new dn(e),e.bypassAuthState)}function pn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),ht(n,new dn(e),e.bypassAuthState)}async function mn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),ct(n,new dn(e),e.bypassAuthState)}
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
 */class gn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fn;case"linkViaPopup":case"linkViaRedirect":return mn;case"reauthViaPopup":case"reauthViaRedirect":return pn;default:f(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const vn=new R(2e3,1e4);async function yn(e,t,n){const r=Ie(e);g(e,t,Xe);const i=hn(r,n),o=new bn(r,"signInViaPopup",t,i);return o.executeNotNull()}class bn extends gn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=Lt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,vn.get())};e()}}bn.currentPopupAction=null;
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
const wn="pendingRedirect",_n=new Map;class En extends gn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=_n.get(this.auth._key());if(!e){try{const t=await Sn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}_n.set(this.auth._key(),e)}return this.bypassAuthState||_n.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Sn(e,t){const n=xn(t),r=kn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Tn(e,t){_n.set(e._key(),t)}function kn(e){return E(e._redirectPersistence)}function xn(e){return ue(wn,e.config.apiKey,e.name)}
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
 */async function In(e,t,n=!1){const r=Ie(e),i=hn(r,t),o=new En(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
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
 */const Pn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dn=/^https?/;async function Fn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ln(e);for(const r of t)try{if(Mn(r))return}catch(n){}f(e,"unauthorized-domain")}function Mn(e){const t=k(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Dn.test(n))return!1;if(Pn.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
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
 */const qn=new R(3e4,6e4);function Un(){const e=Dt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Vn(e){return new Promise(((t,n)=>{var r,i,o;function s(){Un(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Un(),n(p(e,"network-request-failed"))},timeout:qn.get()})}if(null===(i=null===(r=Dt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Dt().gapi)||void 0===o?void 0:o.load)){const t=an("iframefcb");return Dt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},sn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw jn=null,e}))}let jn=null;function Bn(e){return jn=jn||Vn(e),jn}
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
 */const $n=new R(5e3,15e3),zn="__/auth/iframe",Hn="emulator/auth/iframe",Kn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gn(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,Hn):`https://${e.config.authDomain}/${zn}`,o={apiKey:t.apiKey,appName:e.name,v:i.Jn},s=Wn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function Jn(e){const t=await Bn(e),n=Dt().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:Gn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=Dt().setTimeout((()=>{r(i)}),$n.get());function s(){Dt().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
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
 */const Qn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zn=500,Yn=600,Xn="_blank",er="http://localhost";class tr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function nr(e,t,n,i=Zn,o=Yn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Qn),{width:i.toString(),height:o.toString(),top:s,left:a}),c=(0,r.z$)().toLowerCase();n&&(l=pe(c)?Xn:n),de(c)&&(t=t||er,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(we(c)&&"_self"!==l)return rr(t||"",l),new tr(null);const d=window.open(t||"",l,h);y(d,e,"popup-blocked");try{d.focus()}catch(f){}return new tr(d)}function rr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const ir="__/auth/handler",or="emulator/auth/handler";function sr(e,t,n,o,s,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(t instanceof Xe){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof et){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const u=l;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${ar(e)}?${(0,r.xO)(u).slice(1)}`}function ar({config:e}){return e.emulator?O(e,or):`https://${e.authDomain}/${ir}`}
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
 */const lr="webStorageSupport";class ur{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rt,this._completeRedirectFn=In,this._overrideRedirectResult=Tn}async _openPopup(e,t,n,r){var i;w(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=sr(e,t,n,k(),r);return nr(e,o,Lt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Ft(sr(e,t,n,k(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Jn(e),n=new An(e);return t.register("authEvent",(t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(lr,{type:lr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[lr];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Fn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ee()||fe()||be()}}const cr=ur;class hr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class dr extends hr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new dr(e)}_finalizeEnroll(e,t,n){return _t(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return rn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class fr{constructor(){}static assertion(e){return dr._fromCredential(e)}}fr.FACTOR_ID="phone";var pr="@firebase/auth",mr="0.20.11";
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
 */function vr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((t,r)=>{y(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),y(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Te(e)},a=new xe(t,r,i);return T(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Ie(e.getProvider("auth").getImmediate());return(e=>new gr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(pr,mr,vr(e)),(0,i.KN)(pr,mr,"esm2017")}
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
 */const br=300,wr=(0,r.Pz)("authIdTokenMaxAge")||br;let _r=null;const Er=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wr)return;const i=null===n||void 0===n?void 0:n.token;_r!==i&&(_r=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Sr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=S(e,{popupRedirectResolver:cr,persistence:[tn,Ct,Rt]}),o=(0,r.Pz)("authTokenSyncURL");if(o){const e=Er(o);vt(n,e,(()=>e(n.currentUser))),gt(n,(t=>e(t)))}const s=(0,r.q4)("auth");return s&&Ae(n,`http://${s}`),n}yr("Browser")},2079:(e,t,n)=>{"use strict";n.d(t,{Jt:()=>mt,KV:()=>dt,aF:()=>pt,cF:()=>vt,iH:()=>gt,sd:()=>ft});var r=n(8897),i=n(5505),o=n(3513);
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
const s="firebasestorage.googleapis.com",a="storageBucket",l=12e4,u=6e5;
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
class c extends i.ZR{constructor(e,t,n=0){super(h(e),`Firebase Storage: ${t} (${h(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(e){return"storage/"+e}function d(){const e="An unknown error occurred, please check the error payload for server response.";return new c("unknown",e)}function f(e){return new c("object-not-found","Object '"+e+"' does not exist.")}function p(e){return new c("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new c("unauthenticated",e)}function g(){return new c("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(e){return new c("unauthorized","User does not have permission to access '"+e+"'.")}function y(){return new c("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b(){return new c("canceled","User canceled the upload/download.")}function w(e){return new c("invalid-url","Invalid URL '"+e+"'.")}function _(e){return new c("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function E(){return new c("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function S(){return new c("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function T(){return new c("no-download-url","The given file does not have any download URLs.")}function k(e){return new c("unsupported-environment",`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function x(e){return new c("invalid-argument",e)}function I(){return new c("app-deleted","The Firebase app was deleted.")}function C(e){return new c("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function A(e,t){return new c("invalid-format","String does not match format '"+e+"': "+t)}function R(e){throw new c("internal-error","Internal error: "+e)}
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
 */class O{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=O.makeFromUrl(e,t)}catch(r){return new O(e,"")}if(""===n.path)return n;throw _(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const c="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=t===s?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",v=new RegExp(`^https?://${m}/${r}/${g}`,"i"),y={bucket:1,path:2},b=[{regex:a,indices:l,postModify:i},{regex:f,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let s=0;s<b.length;s++){const t=b[s],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new O(e,i),t.postModify(n);break}}if(null==n)throw w(e);return n}}class N{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function L(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return 2===a}let u=!1;function c(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,l())}),t)}function d(){o&&clearTimeout(o)}function f(e,...t){if(u)return void d();if(e)return d(),void c.call(null,e,...t);const n=l()||s;if(n)return d(),void c.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),o=setTimeout((()=>{s=!0,m(!0)}),n),m}function P(e){e(!1)}
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
 */function D(e){return void 0!==e}function F(e){return"object"===typeof e&&!Array.isArray(e)}function M(e){return"string"===typeof e||e instanceof String}function q(e){return U()&&e instanceof Blob}function U(){return"undefined"!==typeof Blob&&!(0,i.UG)()}function V(e,t,n,r){if(r<t)throw x(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw x(`Invalid value for '${e}'. Expected ${n} or less.`)}
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
function z(e,t){const n=e>=500&&e<600,r=[408,429],i=-1!==r.indexOf(e),o=-1!==t.indexOf(e);return n||i||o}
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
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})($||($={}));class H{constructor(e,t,n,r,i,o,s,a,l,u,c,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new K(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===$.NO_ERROR,i=n.getStatus();if((!t||z(i,this.additionalRetryCodes_))&&this.retry){const t=n.getErrorCode()===$.ABORT;return void e(!1,new K(!1,null,t))}const o=-1!==this.successCodes_.indexOf(i);e(!0,new K(o,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());D(e)?n(e):n()}catch(o){r(o)}else if(null!==i){const e=d();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?I():b();r(e)}else{const e=y();r(e)}};this.canceled_?t(!1,new K(!1,null,!0)):this.backoffId_=L(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&P(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class K{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function W(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function G(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function J(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Q(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function Z(e,t,n,r,i,o,s=!0){const a=B(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return J(u,t),W(u,n),G(u,o),Q(u,r),new H(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,s)}
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
 */function Y(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function X(...e){const t=Y();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(U())return new Blob(e);throw new c("unsupported-environment","This browser doesn't seem to support creating Blobs")}function ee(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
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
 */function te(e){if("undefined"===typeof atob)throw k("base-64");return atob(e)}
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
 */const ne={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class re{constructor(e,t){this.data=e,this.contentType=t||null}}function ie(e,t){switch(e){case ne.RAW:return new re(oe(t));case ne.BASE64:case ne.BASE64URL:return new re(ae(e,t));case ne.DATA_URL:return new re(ue(t),ce(t))}throw d()}function oe(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,o=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&o,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function se(e){let t;try{t=decodeURIComponent(e)}catch(n){throw A(ne.DATA_URL,"Malformed data URL.")}return oe(t)}function ae(e,t){switch(e){case ne.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw A(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case ne.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw A(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=te(t)}catch(i){if(i.message.includes("polyfill"))throw i;throw A(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class le{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw A(ne.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=he(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function ue(e){const t=new le(e);return t.base64?ae(ne.BASE64,t.rest):se(t.rest)}function ce(e){const t=new le(e);return t.contentType}function he(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
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
 */class de{constructor(e,t){let n=0,r="";q(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(q(this.data_)){const n=this.data_,r=ee(n,e,t);return null===r?null:new de(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new de(n,!0)}}static getBlob(...e){if(U()){const t=e.map((e=>e instanceof de?e.data_:e));return new de(X.apply(null,t))}{const t=e.map((e=>M(e)?ie(ne.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new de(r,!0)}}uploadData(){return this.data_}}
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
 */function ve(e,t){return t}class ye{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||ve}}let be=null;function we(e){return!M(e)||e.length<2?e:ge(e)}function _e(){if(be)return be;const e=[];function t(e,t){return we(t)}e.push(new ye("bucket")),e.push(new ye("generation")),e.push(new ye("metageneration")),e.push(new ye("name","fullPath",!0));const n=new ye("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new ye("size");return i.xform=r,e.push(i),e.push(new ye("timeCreated")),e.push(new ye("updated")),e.push(new ye("md5Hash",null,!0)),e.push(new ye("cacheControl",null,!0)),e.push(new ye("contentDisposition",null,!0)),e.push(new ye("contentEncoding",null,!0)),e.push(new ye("contentLanguage",null,!0)),e.push(new ye("contentType",null,!0)),e.push(new ye("metadata","customMetadata",!0)),be=e,be}function Ee(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new O(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Se(e,t,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const e=n[o];r[e.local]=e.xform(r,t[e.server])}return Ee(r,e),r}function Te(e,t,n){const r=fe(t);if(null===r)return null;const i=r;return Se(e,i,n)}function ke(e,t,n,r){const i=fe(t);if(null===i)return null;if(!M(i["downloadTokens"]))return null;const o=i["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),l=a.map((t=>{const i=e["bucket"],o=e["fullPath"],a="/b/"+s(i)+"/o/"+s(o),l=j(a,n,r),u=B({alt:"media",token:t});return l+u}));return l[0]}function xe(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
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
 */const Ie="prefixes",Ce="items";function Ae(e,t,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[Ie])for(const i of n[Ie]){const n=i.replace(/\/$/,""),o=e._makeStorageReference(new O(t,n));r.prefixes.push(o)}if(n[Ce])for(const i of n[Ce]){const n=e._makeStorageReference(new O(t,i["name"]));r.items.push(n)}return r}function Re(e,t,n){const r=fe(n);if(null===r)return null;const i=r;return Ae(e,t,i)}class Oe{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function Ne(e){if(!e)throw d()}function Le(e,t){function n(n,r){const i=Te(e,r,t);return Ne(null!==i),i}return n}function Pe(e,t){function n(n,r){const i=Re(e,t,r);return Ne(null!==i),i}return n}function De(e,t){function n(n,r){const i=Te(e,r,t);return Ne(null!==i),ke(i,r,e.host,e._protocol)}return n}function Fe(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?g():m():402===t.getStatus()?p(e.bucket):403===t.getStatus()?v(e.path):n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}return t}function Me(e){const t=Fe(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=f(e.path)),i.serverResponse=r.serverResponse,i}return n}function qe(e,t,n){const r=t.fullServerUrl(),i=j(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Oe(i,o,Le(e,n),s);return a.errorHandler=Me(t),a}function Ue(e,t,n,r,i){const o={};t.isRoot?o["prefix"]="":o["prefix"]=t.path+"/",n&&n.length>0&&(o["delimiter"]=n),r&&(o["pageToken"]=r),i&&(o["maxResults"]=i);const s=t.bucketOnlyServerUrl(),a=j(s,e.host,e._protocol),l="GET",u=e.maxOperationRetryTime,c=new Oe(a,l,Pe(e,t.bucket),u);return c.urlParams=o,c.errorHandler=Fe(t),c}function Ve(e,t,n){const r=t.fullServerUrl(),i=j(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Oe(i,o,De(e,n),s);return a.errorHandler=Me(t),a}function je(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Be(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=je(null,t)),r}function $e(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const l=a();s["Content-Type"]="multipart/related; boundary="+l;const u=Be(t,r,i),c=xe(u,n),h="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+l+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+l+"--",f=de.getBlob(h,r,d);if(null===f)throw S();const p={name:u["fullPath"]},m=j(o,e.host,e._protocol),g="POST",v=e.maxUploadRetryTime,y=new Oe(m,g,Le(e,n),v);return y.urlParams=p,y.headers=s,y.body=f.uploadData(),y.errorHandler=Fe(t),y}
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
class Ge{constructor(e,t){this._service=e,this._location=t instanceof O?t:O.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ge(e,t)}get root(){const e=new O(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ge(this._location.path)}get storage(){return this._service}get parent(){const e=pe(this._location.path);if(null===e)return null;const t=new O(this._location.bucket,e);return new Ge(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw C(e)}}function Je(e,t,n){e._throwIfRoot("uploadBytes");const r=$e(e.storage,e._location,_e(),new de(t,!0),n);return e.storage.makeRequestWithTokens(r,We).then((t=>({metadata:t,ref:e})))}function Qe(e){const t={prefixes:[],items:[]};return Ze(e,t).then((()=>t))}async function Ze(e,t,n){const r={pageToken:n},i=await Ye(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await Ze(e,t,i.nextPageToken)}function Ye(e,t){null!=t&&"number"===typeof t.maxResults&&V("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=Ue(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,We)}function Xe(e){e._throwIfRoot("getMetadata");const t=qe(e.storage,e._location,_e());return e.storage.makeRequestWithTokens(t,We)}function et(e){e._throwIfRoot("getDownloadURL");const t=Ve(e.storage,e._location,_e());return e.storage.makeRequestWithTokens(t,We).then((e=>{if(null===e)throw T();return e}))}function tt(e,t){const n=me(e._location.path,t),r=new O(e._location.bucket,n);return new Ge(e.storage,r)}
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
 */function nt(e){return/^[A-Za-z]+:\/\//.test(e)}function rt(e,t){return new Ge(e,t)}function it(e,t){if(e instanceof lt){const n=e;if(null==n._bucket)throw E();const r=new Ge(n,n._bucket);return null!=t?it(r,t):r}return void 0!==t?tt(e,t):e}function ot(e,t){if(t&&nt(t)){if(e instanceof lt)return rt(e,t);throw x("To use ref(service, url), the first argument must be a Storage instance.")}return it(e,t)}function st(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:O.makeFromBucketSpec(n,e)}function at(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken="string"===typeof o?o:(0,i.Sg)(o,e.app.options.projectId))}class lt{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?O.makeFromBucketSpec(r,this._host):st(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,e):this._bucket=st(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){V("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){V("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ge(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new N(I());{const o=Z(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const ut="@firebase/storage",ct="0.9.14",ht="storage";function dt(e,t,n){return e=(0,i.m9)(e),Je(e,t,n)}function ft(e){return e=(0,i.m9)(e),Xe(e)}function pt(e){return e=(0,i.m9)(e),Qe(e)}function mt(e){return e=(0,i.m9)(e),et(e)}function gt(e,t){return e=(0,i.m9)(e),ot(e,t)}function vt(e=(0,r.Mq)(),t){e=(0,i.m9)(e);const n=(0,r.qX)(e,ht),o=n.getImmediate({identifier:t}),s=(0,i.P0)("storage");return s&&yt(o,...s),o}function yt(e,t,n,r={}){at(e,t,n,r)}
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
 */function bt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new lt(n,i,o,t,r.Jn)}function wt(){(0,r.Xd)(new o.wA(ht,bt,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(ut,ct,""),(0,r.KN)(ut,ct,"esm2017")}wt()},5505:(e,t,n)=>{"use strict";n.d(t,{BH:()=>x,L:()=>a,LL:()=>R,P0:()=>S,Pz:()=>k,Sg:()=>I,UG:()=>h,ZR:()=>A,aH:()=>T,b$:()=>f,eu:()=>g,hl:()=>m,m9:()=>$,ne:()=>U,pd:()=>q,q4:()=>E,ru:()=>d,tV:()=>l,uI:()=>c,vZ:()=>P,w1:()=>p,xO:()=>F,xb:()=>L,z$:()=>u,zd:()=>M});
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,u=t>>2,c=(3&t)<<4|s>>4;let h=(15&s)<<2|l>>6,d=63&l;a||(d=64,o||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,l=a?n[e.charAt(i)]:64;++i;const u=i<e.length,c=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==l||null==c)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==l){const e=s<<4&240|l>>2;if(r.push(e),64!==c){const e=l<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return o.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},l=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function c(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function d(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m(){return"object"===typeof indexedDB}function g(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function v(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
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
 */const y=()=>v().__FIREBASE_DEFAULTS__,b=()=>{if("undefined"===typeof process||"undefined"===typeof process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},w=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},_=()=>{try{return y()||b()||w()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},E=e=>{var t,n;return null===(n=null===(t=_())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},S=e=>{const t=E(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},T=()=>{var e;return null===(e=_())||void 0===e?void 0:e.config},k=e=>{var t;return null===(t=_())||void 0===t?void 0:t[`_${e}`]};
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
class x{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function I(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),l].join(".")}
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
 */const C="FirebaseError";class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=C,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?O(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new A(r,s,n);return a}}function O(e,t){return e.replace(N,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
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
 */function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function P(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(D(n)&&D(o)){if(!P(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function D(e){return null!==e&&"object"===typeof e}
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
function $(e){return e&&e._delegate?e._delegate:e}},9984:e=>{e.exports=function(e,t,n){const r=void 0!==e.__vccOpts?e.__vccOpts:e,i=r[t];if(void 0===i)r[t]=n;else for(const o in n)void 0===i[o]&&(i[o]=n[o])}},499:(e,t,n)=>{"use strict";n.d(t,{Bj:()=>o,Fl:()=>ze,IU:()=>Ce,Jd:()=>S,PG:()=>Te,SU:()=>Ue,Um:()=>_e,WL:()=>je,X$:()=>I,X3:()=>Ie,XI:()=>Fe,Xl:()=>Ae,dq:()=>Pe,iH:()=>De,j:()=>k,lk:()=>T,qj:()=>we,qq:()=>b,yT:()=>xe});var r=n(6970);let i;class o{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function s(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&p)>0,u=e=>(e.n&p)>0,c=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];l(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const v=Symbol(""),y=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,s(this,n)}run(){if(!this.active)return this.fn();let e=g,t=_;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,_=!0,p=1<<++f,f<=m?c(this):w(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,_=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _=!0;const E=[];function S(){E.push(_),_=!1}function T(){const e=E.pop();_=void 0===e||e}function k(e,t,n){if(_&&g){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;x(r,i)}}function x(e,t){let n=!1;f<=m?u(e)||(e.n|=p,n=!l(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function I(e,t,n,i,o,s){const l=d.get(e);if(!l)return;let u=[];if("clear"===t)u=[...l.values()];else if("length"===n&&(0,r.kJ)(e)){const e=(0,r.He)(i);l.forEach(((t,n)=>{("length"===n||n>=e)&&u.push(t)}))}else switch(void 0!==n&&u.push(l.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(l.get("length")):(u.push(l.get(v)),(0,r._N)(e)&&u.push(l.get(y)));break;case"delete":(0,r.kJ)(e)||(u.push(l.get(v)),(0,r._N)(e)&&u.push(l.get(y)));break;case"set":(0,r._N)(e)&&u.push(l.get(v));break}if(1===u.length)u[0]&&C(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);C(a(e))}}function C(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&A(r,t);for(const r of n)r.computed||A(r,t)}function A(e,t){(e!==g||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const R=(0,r.fY)("__proto__,__v_isRef,__isVue"),O=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),N=M(),L=M(!1,!0),P=M(!0),D=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ce(this);for(let t=0,i=this.length;t<i;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ce)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){S();const n=Ce(this)[t].apply(this,e);return T(),n}})),e}function M(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?ve:ge:t?me:pe).get(n))return n;const s=(0,r.kJ)(n);if(!e&&s&&(0,r.RI)(D,i))return Reflect.get(D,i,o);const a=Reflect.get(n,i,o);return((0,r.yk)(i)?O.has(i):R(i))?a:(e||k(n,"get",i),t?a:Pe(a)?s&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ee(a):we(a):a)}}const q=V(),U=V(!0);function V(e=!1){return function(t,n,i,o){let s=t[n];if(ke(s)&&Pe(s)&&!Pe(i))return!1;if(!e&&(xe(i)||ke(i)||(s=Ce(s),i=Ce(i)),!(0,r.kJ)(t)&&Pe(s)&&!Pe(i)))return s.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),l=Reflect.set(t,n,i,o);return t===Ce(o)&&(a?(0,r.aU)(i,s)&&I(t,"set",n,i,s):I(t,"add",n,i)),l}}function j(e,t){const n=(0,r.RI)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&I(e,"delete",t,void 0,i),o}function B(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&O.has(t)||k(e,"has",t),n}function $(e){return k(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const z={get:N,set:q,deleteProperty:j,has:B,ownKeys:$},H={get:P,set(e,t){return!0},deleteProperty(e,t){return!0}},K=(0,r.l7)({},z,{get:L,set:U}),W=e=>e,G=e=>Reflect.getPrototypeOf(e);function J(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ce(e),o=Ce(t);n||(t!==o&&k(i,"get",t),k(i,"get",o));const{has:s}=G(i),a=r?W:n?Oe:Re;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function Q(e,t=!1){const n=this["__v_raw"],r=Ce(n),i=Ce(e);return t||(e!==i&&k(r,"has",e),k(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Z(e,t=!1){return e=e["__v_raw"],!t&&k(Ce(e),"iterate",v),Reflect.get(e,"size",e)}function Y(e){e=Ce(e);const t=Ce(this),n=G(t),r=n.has.call(t,e);return r||(t.add(e),I(t,"add",e,e)),this}function X(e,t){t=Ce(t);const n=Ce(this),{has:i,get:o}=G(n);let s=i.call(n,e);s||(e=Ce(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?(0,r.aU)(t,a)&&I(n,"set",e,t,a):I(n,"add",e,t),this}function ee(e){const t=Ce(this),{has:n,get:r}=G(t);let i=n.call(t,e);i||(e=Ce(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&I(t,"delete",e,void 0,o),s}function te(){const e=Ce(this),t=0!==e.size,n=void 0,r=e.clear();return t&&I(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Ce(o),a=t?W:e?Oe:Re;return!e&&k(s,"iterate",v),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function re(e,t,n){return function(...i){const o=this["__v_raw"],s=Ce(o),a=(0,r._N)(s),l="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,c=o[e](...i),h=n?W:t?Oe:Re;return!t&&k(s,"iterate",u?y:v),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function oe(){const e={get(e){return J(this,e)},get size(){return Z(this)},has:Q,add:Y,set:X,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return J(this,e,!1,!0)},get size(){return Z(this)},has:Q,add:Y,set:X,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return J(this,e,!0)},get size(){return Z(this,!0)},has(e){return Q.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return J(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return Q.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)})),[e,n,t,r]}const[se,ae,le,ue]=oe();function ce(e,t){const n=t?e?ue:le:e?ae:se;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,o)}const he={get:ce(!1,!1)},de={get:ce(!1,!0)},fe={get:ce(!0,!1)};const pe=new WeakMap,me=new WeakMap,ge=new WeakMap,ve=new WeakMap;function ye(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ye((0,r.W7)(e))}function we(e){return ke(e)?e:Se(e,!1,z,he,pe)}function _e(e){return Se(e,!1,K,de,me)}function Ee(e){return Se(e,!0,H,fe,ge)}function Se(e,t,n,i,o){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=be(e);if(0===a)return e;const l=new Proxy(e,2===a?i:n);return o.set(e,l),l}function Te(e){return ke(e)?Te(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ke(e){return!(!e||!e["__v_isReadonly"])}function xe(e){return!(!e||!e["__v_isShallow"])}function Ie(e){return Te(e)||ke(e)}function Ce(e){const t=e&&e["__v_raw"];return t?Ce(t):e}function Ae(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Re=e=>(0,r.Kn)(e)?we(e):e,Oe=e=>(0,r.Kn)(e)?Ee(e):e;function Ne(e){_&&g&&(e=Ce(e),x(e.dep||(e.dep=a())))}function Le(e,t){e=Ce(e),e.dep&&C(e.dep)}function Pe(e){return!(!e||!0!==e.__v_isRef)}function De(e){return Me(e,!1)}function Fe(e){return Me(e,!0)}function Me(e,t){return Pe(e)?e:new qe(e,t)}class qe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ce(e),this._value=t?e:Re(e)}get value(){return Ne(this),this._value}set value(e){const t=this.__v_isShallow||xe(e)||ke(e);e=t?e:Ce(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Re(e),Le(this,e))}}function Ue(e){return Pe(e)?e.value:e}const Ve={get:(e,t,n)=>Ue(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function je(e){return Te(e)?e:new Proxy(e,Ve)}var Be;class $e{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Be]=!1,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ce(this);return Ne(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ze(e,t,n=!1){let i,o;const s=(0,r.mf)(e);s?(i=e,o=r.dG):(i=e.get,o=e.set);const a=new $e(i,o,s||!o,n);return a}Be="__v_isReadonly"},9835:(e,t,n)=>{"use strict";n.d(t,{$d:()=>s,Ah:()=>ke,FN:()=>_n,Fl:()=>Mn,HY:()=>Vt,JJ:()=>z,Jd:()=>Te,Ko:()=>Ue,P$:()=>te,Q2:()=>Fe,Q6:()=>ae,U2:()=>re,Uk:()=>cn,Us:()=>xt,Wm:()=>sn,Xn:()=>Ee,Y3:()=>y,Y8:()=>Y,YP:()=>W,_:()=>on,aZ:()=>le,bv:()=>_e,dl:()=>de,f3:()=>H,h:()=>qn,iD:()=>Zt,ic:()=>Se,j4:()=>Yt,kq:()=>hn,lR:()=>qt,nK:()=>se,se:()=>fe,up:()=>Pe,vl:()=>xe,w5:()=>D,wg:()=>Kt,wy:()=>Re});var r=n(499),i=n(6970);function o(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){a(o,t,n)}return i}function s(e,t,n,r){if((0,i.mf)(e)){const s=o(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{a(e,t,n)})),s}const l=[];for(let i=0;i<e.length;i++)l.push(s(e[i],t,n,r));return l}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void o(a,null,10,[e,i,s])}l(e,n,i,r)}function l(e,t,n,r=!0){console.error(e)}let u=!1,c=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let v=null;function y(e){const t=v||g;return e?t.then(this?e.bind(this):e):t}function b(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=x(h[r]);i<e?t=r+1:n=r}return t}function w(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(b(e.id),0,e),_())}function _(){u||c||(c=!0,v=g.then(C))}function E(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function S(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||f.push(e),_()}function T(e,t=(u?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function k(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>x(e)-x(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const x=e=>null==e.id?1/0:e.id,I=(e,t)=>{const n=x(e)-x(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function C(e){c=!1,u=!0,h.sort(I);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&o(e,null,14)}}finally{d=0,h.length=0,k(e),u=!1,v=null,(h.length||f.length)&&C(e)}}new Set;new Map;function A(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let o=n;const a=t.startsWith("update:"),l=a&&t.slice(7);if(l&&l in r){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:s}=r[e]||i.kT;s&&(o=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(o=n.map(i.He))}let u;let c=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!c&&a&&(c=r[u=(0,i.hR)((0,i.rs)(t))]),c&&s(c,e,6,o);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,s(h,e,6,o)}}function R(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},l=!1;if(!(0,i.mf)(e)){const r=e=>{const n=R(e,t,!0);n&&(l=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||l?((0,i.kJ)(s)?s.forEach((e=>a[e]=null)):(0,i.l7)(a,s),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function O(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let N=null,L=null;function P(e){const t=N;return N=e,L=e&&e.type.__scopeId||null,t}function D(e,t=N,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Jt(-1);const i=P(t);let o;try{o=e(...n)}finally{P(i),r._d&&Jt(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function F(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[l],slots:u,attrs:c,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:v}=e;let y,b;const w=P(e);try{if(4&n.shapeFlag){const e=o||r;y=dn(d.call(e,e,f,s,m,p,g)),b=c}else{const e=t;0,y=dn(e.length>1?e(s,{attrs:c,slots:u,emit:h}):e(s,null)),b=t.props?c:M(c)}}catch(E){zt.length=0,a(E,e,1),y=sn(Bt)}let _=y;if(b&&!1!==v){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(l&&e.some(i.tR)&&(b=q(b,l)),_=un(_,b))}return n.dirs&&(_=un(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),y=_,P(w),y}const M=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},q=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function U(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:l}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||V(r,s,u):!!s);if(1024&l)return!0;if(16&l)return r?V(r,s,u):!!s;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!O(u,n))return!0}}return!1}function V(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!O(n,o))return!0}return!1}function j({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const B=e=>e.__isSuspense;function $(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):S(e)}function z(e,t){if(wn){let n=wn.provides;const r=wn.parent&&wn.parent.provides;r===n&&(n=wn.provides=Object.create(r)),n[e]=t}else 0}function H(e,t,n=!1){const r=wn||N;if(r){const o=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const K={};function W(e,t,n){return G(e,t,n)}function G(e,t,{immediate:n,deep:a,flush:l,onTrack:u,onTrigger:c}=i.kT){const h=wn;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Z(e):(0,i.mf)(e)?o(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>o(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),s(e,h,3,[v])}:i.dG,t&&a){const e=d;d=()=>Z(e())}let g,v=e=>{f=E.onStop=()=>{o(e,h,4)}};if(In){if(v=i.dG,t?n&&s(t,h,3,[d(),m?[]:void 0,v]):d(),"sync"!==l)return i.dG;{const e=Vn();g=e.__watcherHandles||(e.__watcherHandles=[])}}let y=m?new Array(e.length).fill(K):K;const b=()=>{if(E.active)if(t){const e=E.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(f&&f(),s(t,h,3,[e,y===K?void 0:m&&y[0]===K?[]:y,v]),y=e)}else E.run()};let _;b.allowRecurse=!!t,"sync"===l?_=b:"post"===l?_=()=>kt(b,h&&h.suspense):(b.pre=!0,h&&(b.id=h.uid),_=()=>w(b));const E=new r.qq(d,_);t?n?b():y=E.run():"post"===l?kt(E.run.bind(E),h&&h.suspense):E.run();const S=()=>{E.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,E)};return g&&g.push(S),S}function J(e,t,n){const r=this.proxy,o=(0,i.HD)(e)?e.includes(".")?Q(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.mf)(t)?s=t:(s=t.handler,n=t);const a=wn;En(this);const l=G(o,s.bind(r),n);return a?En(a):Sn(),l}function Q(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Z(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Z(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Z(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Z(e,t)}));else if((0,i.PO)(e))for(const n in e)Z(e[n],t);return e}function Y(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _e((()=>{e.isMounted=!0})),Te((()=>{e.isUnmounting=!0})),e}const X=[Function,Array],ee={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:X,onEnter:X,onAfterEnter:X,onEnterCancelled:X,onBeforeLeave:X,onLeave:X,onAfterLeave:X,onLeaveCancelled:X,onBeforeAppear:X,onAppear:X,onAfterAppear:X,onAppearCancelled:X},setup(e,{slots:t}){const n=_n(),i=Y();let o;return()=>{const s=t.default&&ae(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Bt){0,a=t,e=!0;break}}const l=(0,r.IU)(e),{mode:u}=l;if(i.isLeaving)return ie(a);const c=oe(a);if(!c)return ie(a);const h=re(c,l,i,n);se(c,h);const d=n.subTree,f=d&&oe(d);let p=!1;const{getTransitionKey:m}=c.type;if(m){const e=m();void 0===o?o=e:e!==o&&(o=e,p=!0)}if(f&&f.type!==Bt&&(!en(c,f)||p)){const e=re(f,l,i,n);if(se(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},ie(a);"in-out"===u&&c.type!==Bt&&(e.delayLeave=(e,t,n)=>{const r=ne(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},te=ee;function ne(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function re(e,t,n,r){const{appear:o,mode:a,persisted:l=!1,onBeforeEnter:u,onEnter:c,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:b,onAppearCancelled:w}=t,_=String(e.key),E=ne(n,e),S=(e,t)=>{e&&s(e,r,9,t)},T=(e,t)=>{const n=t[1];S(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},k={mode:a,persisted:l,beforeEnter(t){let r=u;if(!n.isMounted){if(!o)return;r=v||u}t._leaveCb&&t._leaveCb(!0);const i=E[_];i&&en(e,i)&&i.el._leaveCb&&i.el._leaveCb(),S(r,[t])},enter(e){let t=c,r=h,i=d;if(!n.isMounted){if(!o)return;t=y||c,r=b||h,i=w||d}let s=!1;const a=e._enterCb=t=>{s||(s=!0,S(t?i:r,[e]),k.delayedLeave&&k.delayedLeave(),e._enterCb=void 0)};t?T(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();S(f,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),S(n?g:m,[t]),t._leaveCb=void 0,E[i]===e&&delete E[i])};E[i]=e,p?T(p,[t,s]):s()},clone(e){return re(e,t,n,r)}};return k}function ie(e){if(ce(e))return e=un(e),e.children=null,e}function oe(e){return ce(e)?e.children?e.children[0]:void 0:e}function se(e,t){6&e.shapeFlag&&e.component?se(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ae(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Vt?(128&s.patchFlag&&i++,r=r.concat(ae(s.children,t,a))):(t||s.type!==Bt)&&r.push(null!=a?un(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function le(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const ue=e=>!!e.type.__asyncLoader;const ce=e=>e.type.__isKeepAlive;RegExp,RegExp;function he(e,t){return(0,i.kJ)(e)?e.some((e=>he(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function de(e,t){pe(e,"a",t)}function fe(e,t){pe(e,"da",t)}function pe(e,t,n=wn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ye(t,r,n),n){let e=n.parent;while(e&&e.parent)ce(e.parent.vnode)&&me(r,t,n,e),e=e.parent}}function me(e,t,n,r){const o=ye(t,e,r,!0);ke((()=>{(0,i.Od)(r[t],o)}),n)}function ge(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ve(e){return 128&e.shapeFlag?e.ssContent:e}function ye(e,t,n=wn,i=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),En(n);const o=s(t,n,e,i);return Sn(),(0,r.lk)(),o});return i?o.unshift(a):o.push(a),a}}const be=e=>(t,n=wn)=>(!In||"sp"===e)&&ye(e,((...e)=>t(...e)),n),we=be("bm"),_e=be("m"),Ee=be("bu"),Se=be("u"),Te=be("bum"),ke=be("um"),xe=be("sp"),Ie=be("rtg"),Ce=be("rtc");function Ae(e,t=wn){ye("ec",e,t)}function Re(e,t){const n=N;if(null===n)return e;const r=Pn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,l=i.kT]=t[s];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Z(n),o.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:l}))}return e}function Oe(e,t,n,i){const o=e.dirs,a=t&&t.dirs;for(let l=0;l<o.length;l++){const u=o[l];a&&(u.oldValue=a[l].value);let c=u.dir[i];c&&((0,r.Jd)(),s(c,n,8,[e.el,u,e,t]),(0,r.lk)())}}const Ne="components",Le="directives";function Pe(e,t){return Me(Ne,e,!0,t)||e}const De=Symbol();function Fe(e){return Me(Le,e)}function Me(e,t,n=!0,r=!1){const o=N||wn;if(o){const n=o.type;if(e===Ne){const e=Dn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const s=qe(o[e]||n[e],t)||qe(o.appContext[e],t);return!s&&r?n:s}}function qe(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Ue(e,t,n,r){let o;const s=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}const Ve=e=>e?Tn(e)?Pn(e)||e.proxy:Ve(e.parent):null,je=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ve(e.parent),$root:e=>Ve(e.root),$emit:e=>e.emit,$options:e=>Je(e),$forceUpdate:e=>e.f||(e.f=()=>w(e.update)),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>J.bind(e)}),Be=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),$e={get({_:e},t){const{ctx:n,setupState:o,data:s,props:a,accessCache:l,type:u,appContext:c}=e;let h;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(Be(o,t))return l[t]=1,o[t];if(s!==i.kT&&(0,i.RI)(s,t))return l[t]=2,s[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return l[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return l[t]=4,n[t];ze&&(l[t]=0)}}const d=je[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(l[t]=4,n[t]):(p=c.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return Be(o,t)?(o[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let l;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||Be(t,a)||(l=s[0])&&(0,i.RI)(l,a)||(0,i.RI)(r,a)||(0,i.RI)(je,a)||(0,i.RI)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ze=!0;function He(e){const t=Je(e),n=e.proxy,o=e.ctx;ze=!1,t.beforeCreate&&We(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:l,watch:u,provide:c,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:E,render:S,renderTracked:T,renderTriggered:k,errorCaptured:x,serverPrefetch:I,expose:C,inheritAttrs:A,components:R,directives:O,filters:N}=t,L=null;if(h&&Ke(h,o,L,e.appContext.config.unwrapInjectedRef),l)for(const r in l){const e=l[r];(0,i.mf)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(ze=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const s=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,l=Mn({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(u)for(const r in u)Ge(u[r],o,n,r);if(c){const e=(0,i.mf)(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{z(t,e[t])}))}function P(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&We(d,e,"c"),P(we,f),P(_e,p),P(Ee,m),P(Se,g),P(de,v),P(fe,y),P(Ae,x),P(Ce,T),P(Ie,k),P(Te,w),P(ke,E),P(xe,I),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});S&&e.render===i.dG&&(e.render=S),null!=A&&(e.inheritAttrs=A),R&&(e.components=R),O&&(e.directives=O)}function Ke(e,t,n=i.dG,o=!1){(0,i.kJ)(e)&&(e=et(e));for(const s in e){const n=e[s];let a;a=(0,i.Kn)(n)?"default"in n?H(n.from||s,n.default,!0):H(n.from||s):H(n),(0,r.dq)(a)&&o?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[s]=a}}function We(e,t,n){s((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ge(e,t,n,r){const o=r.includes(".")?Q(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&W(o,n)}else if((0,i.mf)(e))W(o,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ge(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&W(o,r,e)}else 0}function Je(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,l=s.get(t);let u;return l?u=l:o.length||n||r?(u={},o.length&&o.forEach((e=>Qe(u,e,a,!0))),Qe(u,t,a)):u=t,(0,i.Kn)(t)&&s.set(t,u),u}function Qe(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Qe(e,o,n,!0),i&&i.forEach((t=>Qe(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=Ze[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Ze={data:Ye,props:nt,emits:nt,methods:nt,computed:nt,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:nt,directives:nt,watch:rt,provide:Ye,inject:Xe};function Ye(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Xe(e,t){return nt(et(e),et(t))}function et(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function rt(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function it(e,t,n,o=!1){const s={},a={};(0,i.Nj)(a,tn,1),e.propsDefaults=Object.create(null),st(e,t,s,a);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=o?s:(0,r.Um)(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function ot(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:l}}=e,u=(0,r.IU)(s),[c]=e.propsOptions;let h=!1;if(!(o||l>0)||16&l){let r;st(e,t,s,a)&&(h=!0);for(const o in u)t&&((0,i.RI)(t,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(t,r))||(c?!n||void 0===n[o]&&void 0===n[r]||(s[o]=at(c,u,o,void 0,e,!0)):delete s[o]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(O(e.emitsOptions,o))continue;const l=t[o];if(c)if((0,i.RI)(a,o))l!==a[o]&&(a[o]=l,h=!0);else{const t=(0,i._A)(o);s[t]=at(c,u,t,l,e,!1)}else l!==a[o]&&(a[o]=l,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function st(e,t,n,o){const[s,a]=e.propsOptions;let l,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const c=t[r];let h;s&&(0,i.RI)(s,h=(0,i._A)(r))?a&&a.includes(h)?(l||(l={}))[h]=c:n[h]=c:O(e.emitsOptions,r)||r in o&&c===o[r]||(o[r]=c,u=!0)}if(a){const t=(0,r.IU)(n),o=l||i.kT;for(let r=0;r<a.length;r++){const l=a[r];n[l]=at(s,t,l,o[l],e,!(0,i.RI)(o,l))}}return u}function at(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=o;n in i?r=i[n]:(En(o),r=i[n]=e.call(null,t),Sn())}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function lt(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},l=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=lt(e,t,!0);(0,i.l7)(a,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(s))for(let h=0;h<s.length;h++){0;const e=(0,i._A)(s[h]);ut(e)&&(a[e]=i.kT)}else if(s){0;for(const e in s){const t=(0,i._A)(e);if(ut(t)){const n=s[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=dt(Boolean,r.type),n=dt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&l.push(t)}}}}const c=[a,l];return(0,i.Kn)(e)&&r.set(e,c),c}function ut(e){return"$"!==e[0]}function ct(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function ht(e,t){return ct(e)===ct(t)}function dt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>ht(t,e))):(0,i.mf)(t)&&ht(t,e)?0:-1}const ft=e=>"_"===e[0]||"$stable"===e,pt=e=>(0,i.kJ)(e)?e.map(dn):[dn(e)],mt=(e,t,n)=>{if(t._n)return t;const r=D(((...e)=>pt(t(...e))),n);return r._c=!1,r},gt=(e,t,n)=>{const r=e._ctx;for(const o in e){if(ft(o))continue;const n=e[o];if((0,i.mf)(n))t[o]=mt(o,n,r);else if(null!=n){0;const e=pt(n);t[o]=()=>e}}},vt=(e,t)=>{const n=pt(t);e.slots.default=()=>n},yt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):gt(t,e.slots={})}else e.slots={},t&&vt(e,t);(0,i.Nj)(e.slots,tn,1)},bt=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,i.l7)(o,t),n||1!==e||delete o._):(s=!t.$stable,gt(t,o)),a=t}else t&&(vt(e,t),a={default:1});if(s)for(const i in o)ft(i)||i in a||delete o[i]};function wt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _t=0;function Et(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const o=wt(),s=new Set;let a=!1;const l=o.app={_uid:_t++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:jn,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,i.mf)(e.install)?(s.add(e),e.install(l,...t)):(0,i.mf)(e)&&(s.add(e),e(l,...t))),l},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),l},component(e,t){return t?(o.components[e]=t,l):o.components[e]},directive(e,t){return t?(o.directives[e]=t,l):o.directives[e]},mount(i,s,u){if(!a){0;const c=sn(n,r);return c.appContext=o,s&&t?t(c,i):e(c,i,u),a=!0,l._container=i,i.__vue_app__=l,Pn(c.component)||c.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return o.provides[e]=t,l}};return l}}function St(e,t,n,s,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>St(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,a)));if(ue(s)&&!a)return;const l=4&s.shapeFlag?Pn(s.component)||s.component.proxy:s.el,u=a?null:l,{i:c,r:h}=e;const d=t&&t.r,f=c.refs===i.kT?c.refs={}:c.refs,p=c.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))o(h,c,12,[u,f]);else{const t=(0,i.HD)(h),o=(0,r.dq)(h);if(t||o){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,l):(0,i.kJ)(n)?n.includes(l)||n.push(l):t?(f[h]=[l],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[l],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):o&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,kt(r,n)):r()}else 0}}function Tt(){}const kt=$;function xt(e){return It(e)}function It(e,t){Tt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:l,createText:u,createComment:c,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,o=null,s=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!en(e,t)&&(r=Y(e),W(e,i,o,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:u,ref:c,shapeFlag:h}=t;switch(u){case jt:y(e,t,n,r);break;case Bt:b(e,t,n,r);break;case $t:null==e&&_(t,n,r,s);break;case Vt:P(e,t,n,r,i,o,s,a,l);break;default:1&h?I(e,t,n,r,i,o,s,a,l):6&h?D(e,t,n,r,i,o,s,a,l):(64&h||128&h)&&u.process(e,t,n,r,i,o,s,a,l,ee)}null!=c&&i&&St(c,e&&e.ref,o,t||e,!t)},y=(e,t,n,r)=>{if(null==e)o(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?o(t.el=c(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),o(e,n,r),e=i;o(t,n,r)},x=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},I=(e,t,n,r,i,o,s,a,l)=>{s=s||"svg"===t.type,null==e?C(t,n,r,i,o,s,a,l):O(e,t,i,o,s,a,l)},C=(e,t,n,r,s,u,c,h)=>{let f,p;const{type:m,props:g,shapeFlag:v,transition:y,dirs:b}=e;if(f=e.el=l(e.type,u,g&&g.is,g),8&v?d(f,e.children):16&v&&R(e.children,f,null,r,s,u&&"foreignObject"!==m,c,h),b&&Oe(e,null,r,"created"),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],u,e.children,r,s,Z);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&gn(p,r,e)}A(f,e,e.scopeId,c,r),b&&Oe(e,null,r,"beforeMount");const w=(!s||s&&!s.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(f),o(f,t,n),((p=g&&g.onVnodeMounted)||w||b)&&kt((()=>{p&&gn(p,r,e),w&&y.enter(f),b&&Oe(e,null,r,"mounted")}),s)},A=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let o=0;o<r.length;o++)m(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},R=(e,t,n,r,i,o,s,a,l=0)=>{for(let u=l;u<e.length;u++){const l=e[u]=a?fn(e[u]):dn(e[u]);v(null,l,t,n,r,i,o,s,a)}},O=(e,t,n,r,o,s,l)=>{const u=t.el=e.el;let{patchFlag:c,dynamicChildren:h,dirs:f}=t;c|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&Ct(n,!1),(g=m.onVnodeBeforeUpdate)&&gn(g,n,t,e),f&&Oe(t,e,n,"beforeUpdate"),n&&Ct(n,!0);const v=o&&"foreignObject"!==t.type;if(h?N(e.dynamicChildren,h,u,n,r,v,s):l||$(e,t,u,null,n,r,v,s,!1),c>0){if(16&c)L(u,t,p,m,n,r,o);else if(2&c&&p.class!==m.class&&a(u,"class",null,m.class,o),4&c&&a(u,"style",p.style,m.style,o),8&c){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const s=i[t],l=p[s],c=m[s];c===l&&"value"!==s||a(u,s,l,c,o,e.children,n,r,Z)}}1&c&&e.children!==t.children&&d(u,t.children)}else l||null!=h||L(u,t,p,m,n,r,o);((g=m.onVnodeUpdated)||f)&&kt((()=>{g&&gn(g,n,t,e),f&&Oe(t,e,n,"updated")}),r)},N=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const l=e[a],u=t[a],c=l.el&&(l.type===Vt||!en(l,u)||70&l.shapeFlag)?f(l.el):n;v(l,u,c,null,r,i,o,s,!0)}},L=(e,t,n,r,o,s,l)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,l,t.children,o,s,Z);for(const u in r){if((0,i.Gg)(u))continue;const c=r[u],h=n[u];c!==h&&"value"!==u&&a(e,u,h,c,l,t.children,o,s,Z)}"value"in r&&a(e,"value",n.value,r.value)}},P=(e,t,n,r,i,s,a,l,c)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(o(h,n,r),o(d,n,r),R(t.children,n,d,i,s,a,l,c)):f>0&&64&f&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,i,s,a,l),(null!=t.key||i&&t===i.subTree)&&At(e,t,!0)):$(e,t,n,d,i,s,a,l,c)},D=(e,t,n,r,i,o,s,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,l):M(t,n,r,i,o,s,l):q(e,t,l)},M=(e,t,n,r,i,o,s)=>{const a=e.component=bn(e,r,i);if(ce(e)&&(a.ctx.renderer=ee),Cn(a),a.asyncDep){if(i&&i.registerDep(a,V),!e.el){const e=a.subTree=sn(Bt);b(null,e,t,n)}}else V(a,e,t,n,i,o,s)},q=(e,t,n)=>{const r=t.component=e.component;if(U(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,E(r.update),r.update()}else t.el=e.el,r.vnode=t},V=(e,t,n,o,s,a,l)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:o,parent:u,vnode:c}=e,h=n;0,Ct(e,!1),n?(n.el=c.el,B(e,n,l)):n=c,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&gn(t,u,n,c),Ct(e,!0);const d=F(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),Y(p),e,s,a),n.el=d.el,null===h&&j(e,d.el),o&&kt(o,s),(t=n.props&&n.props.onVnodeUpdated)&&kt((()=>gn(t,u,n,c)),s)}else{let r;const{el:l,props:u}=t,{bm:c,m:h,parent:d}=e,f=ue(t);if(Ct(e,!1),c&&(0,i.ir)(c),!f&&(r=u&&u.onVnodeBeforeMount)&&gn(r,d,t),Ct(e,!0),l&&ne){const n=()=>{e.subTree=F(e),ne(l,e.subTree,e,s,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=F(e);0,v(null,r,n,o,e,s,a),t.el=r.el}if(h&&kt(h,s),!f&&(r=u&&u.onVnodeMounted)){const e=t;kt((()=>gn(r,d,e)),s)}(256&t.shapeFlag||d&&ue(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&kt(e.a,s),e.isMounted=!0,t=n=o=null}},c=e.effect=new r.qq(u,(()=>w(h)),e.scope),h=e.update=()=>c.run();h.id=e.uid,Ct(e,!0),h()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,ot(e,t.props,i,n),bt(e,t.children,n),(0,r.Jd)(),T(),(0,r.lk)()},$=(e,t,n,r,i,o,s,a,l=!1)=>{const u=e&&e.children,c=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void H(u,h,n,r,i,o,s,a,l);if(256&f)return void z(u,h,n,r,i,o,s,a,l)}8&p?(16&c&&Z(u,i,o),h!==u&&d(n,h)):16&c?16&p?H(u,h,n,r,i,o,s,a,l):Z(u,i,o,!0):(8&c&&d(n,""),16&p&&R(h,n,r,i,o,s,a,l))},z=(e,t,n,r,o,s,a,l,u)=>{e=e||i.Z6,t=t||i.Z6;const c=e.length,h=t.length,d=Math.min(c,h);let f;for(f=0;f<d;f++){const r=t[f]=u?fn(t[f]):dn(t[f]);v(e[f],r,n,null,o,s,a,l,u)}c>h?Z(e,o,s,!0,!1,d):R(t,n,r,o,s,a,l,u,d)},H=(e,t,n,r,o,s,a,l,u)=>{let c=0;const h=t.length;let d=e.length-1,f=h-1;while(c<=d&&c<=f){const r=e[c],i=t[c]=u?fn(t[c]):dn(t[c]);if(!en(r,i))break;v(r,i,n,null,o,s,a,l,u),c++}while(c<=d&&c<=f){const r=e[d],i=t[f]=u?fn(t[f]):dn(t[f]);if(!en(r,i))break;v(r,i,n,null,o,s,a,l,u),d--,f--}if(c>d){if(c<=f){const e=f+1,i=e<h?t[e].el:r;while(c<=f)v(null,t[c]=u?fn(t[c]):dn(t[c]),n,i,o,s,a,l,u),c++}}else if(c>f)while(c<=d)W(e[c],o,s,!0),c++;else{const p=c,m=c,g=new Map;for(c=m;c<=f;c++){const e=t[c]=u?fn(t[c]):dn(t[c]);null!=e.key&&g.set(e.key,c)}let y,b=0;const w=f-m+1;let _=!1,E=0;const S=new Array(w);for(c=0;c<w;c++)S[c]=0;for(c=p;c<=d;c++){const r=e[c];if(b>=w){W(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=f;y++)if(0===S[y-m]&&en(r,t[y])){i=y;break}void 0===i?W(r,o,s,!0):(S[i-m]=c+1,i>=E?E=i:_=!0,v(r,t[i],n,null,o,s,a,l,u),b++)}const T=_?Rt(S):i.Z6;for(y=T.length-1,c=w-1;c>=0;c--){const e=m+c,i=t[e],d=e+1<h?t[e+1].el:r;0===S[c]?v(null,i,n,d,o,s,a,l,u):_&&(y<0||c!==T[y]?K(i,n,d,2):y--)}}},K=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:l,children:u,shapeFlag:c}=e;if(6&c)return void K(e.component.subTree,t,n,r);if(128&c)return void e.suspense.move(t,n,r);if(64&c)return void a.move(e,t,n,ee);if(a===Vt){o(s,t,n);for(let e=0;e<u.length;e++)K(u[e],t,n,r);return void o(e.anchor,t,n)}if(a===$t)return void S(e,t,n);const h=2!==r&&1&c&&l;if(h)if(0===r)l.beforeEnter(s),o(s,t,n),kt((()=>l.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=l,a=()=>o(s,t,n),u=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,u):u()}else o(s,t,n)},W=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:l,dynamicChildren:u,shapeFlag:c,patchFlag:h,dirs:d}=e;if(null!=a&&St(a,null,n,e,!0),256&c)return void t.ctx.deactivate(e);const f=1&c&&d,p=!ue(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&gn(m,t,e),6&c)Q(e.component,n,r);else{if(128&c)return void e.suspense.unmount(n,r);f&&Oe(e,null,t,"beforeUnmount"),64&c?e.type.remove(e,t,n,i,ee,r):u&&(o!==Vt||h>0&&64&h)?Z(u,t,n,!1,!0):(o===Vt&&384&h||!i&&16&c)&&Z(l,t,n),r&&G(e)}(p&&(m=s&&s.onVnodeUnmounted)||f)&&kt((()=>{m&&gn(m,t,e),f&&Oe(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Vt)return void J(n,r);if(t===$t)return void x(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},J=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},Q=(e,t,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:l}=e;r&&(0,i.ir)(r),o.stop(),s&&(s.active=!1,W(a,e,t,n)),l&&kt(l,t),kt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Z=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)W(e[s],t,n,r,i)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),X=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),T(),k(),t._vnode=e},ee={p:v,um:W,m:K,r:G,mt:M,mc:R,pc:$,pbc:N,n:Y,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:X,hydrate:te,createApp:Et(X,te)}}function Ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function At(e,t,n=!1){const r=e.children,o=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=fn(o[i]),t.el=e.el),n||At(e,t)),t.type===jt&&(t.el=e.el)}}function Rt(e){const t=e.slice(),n=[0];let r,i,o,s,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<l?o=a+1:s=a;l<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const Ot=e=>e.__isTeleport,Nt=e=>e&&(e.disabled||""===e.disabled),Lt=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,Pt=(e,t)=>{const n=e&&e.to;if((0,i.HD)(n)){if(t){const e=t(n);return e}return null}return n},Dt={__isTeleport:!0,process(e,t,n,r,i,o,s,a,l,u){const{mc:c,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:g}}=u,v=Nt(t.props);let{shapeFlag:y,children:b,dynamicChildren:w}=t;if(null==e){const e=t.el=m(""),u=t.anchor=m("");f(e,n,r),f(u,n,r);const h=t.target=Pt(t.props,p),d=t.targetAnchor=m("");h&&(f(d,h),s=s||Lt(h));const g=(e,t)=>{16&y&&c(b,e,t,i,o,s,a,l)};v?g(n,u):h&&g(h,d)}else{t.el=e.el;const r=t.anchor=e.anchor,c=t.target=e.target,f=t.targetAnchor=e.targetAnchor,m=Nt(e.props),g=m?n:c,y=m?r:f;if(s=s||Lt(c),w?(d(e.dynamicChildren,w,g,i,o,s,a),At(e,t,!0)):l||h(e,t,g,y,i,o,s,a,!1),v)m||Ft(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Pt(t.props,p);e&&Ft(t,e,null,u,0)}else m&&Ft(t,c,f,u,1)}Ut(t)},remove(e,t,n,r,{um:i,o:{remove:o}},s){const{shapeFlag:a,children:l,anchor:u,targetAnchor:c,target:h,props:d}=e;if(h&&o(c),(s||!Nt(d))&&(o(u),16&a))for(let f=0;f<l.length;f++){const e=l[f];i(e,t,n,!0,!!e.dynamicChildren)}},move:Ft,hydrate:Mt};function Ft(e,t,n,{o:{insert:r},m:i},o=2){0===o&&r(e.targetAnchor,t,n);const{el:s,anchor:a,shapeFlag:l,children:u,props:c}=e,h=2===o;if(h&&r(s,t,n),(!h||Nt(c))&&16&l)for(let d=0;d<u.length;d++)i(u[d],t,n,2);h&&r(a,t,n)}function Mt(e,t,n,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:l}},u){const c=t.target=Pt(t.props,l);if(c){const l=c._lpa||c.firstChild;if(16&t.shapeFlag)if(Nt(t.props))t.anchor=u(s(e),t,a(e),n,r,i,o),t.targetAnchor=l;else{t.anchor=s(e);let a=l;while(a)if(a=s(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,c._lpa=t.targetAnchor&&s(t.targetAnchor);break}u(l,t,c,n,r,i,o)}Ut(t)}return t.anchor&&s(t.anchor)}const qt=Dt;function Ut(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;while(n!==e.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Vt=Symbol(void 0),jt=Symbol(void 0),Bt=Symbol(void 0),$t=Symbol(void 0),zt=[];let Ht=null;function Kt(e=!1){zt.push(Ht=e?null:[])}function Wt(){zt.pop(),Ht=zt[zt.length-1]||null}let Gt=1;function Jt(e){Gt+=e}function Qt(e){return e.dynamicChildren=Gt>0?Ht||i.Z6:null,Wt(),Gt>0&&Ht&&Ht.push(e),e}function Zt(e,t,n,r,i,o){return Qt(on(e,t,n,r,i,o,!0))}function Yt(e,t,n,r,i){return Qt(sn(e,t,n,r,i,!0))}function Xt(e){return!!e&&!0===e.__v_isVNode}function en(e,t){return e.type===t.type&&e.key===t.key}const tn="__vInternal",nn=({key:e})=>null!=e?e:null,rn=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:N,r:e,k:t,f:!!n}:e:null;function on(e,t=null,n=null,r=0,o=null,s=(e===Vt?0:1),a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&nn(t),ref:t&&rn(t),scopeId:L,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:N};return l?(pn(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Gt>0&&!a&&Ht&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Ht.push(u),u}const sn=an;function an(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==De||(e=Bt),Xt(e)){const r=un(e,t,!0);return n&&pn(r,n),Gt>0&&!a&&Ht&&(6&r.shapeFlag?Ht[Ht.indexOf(e)]=r:Ht.push(r)),r.patchFlag|=-2,r}if(Fn(e)&&(e=e.__vccOpts),t){t=ln(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const l=(0,i.HD)(e)?1:B(e)?128:Ot(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return on(e,t,n,o,s,l,a,!0)}function ln(e){return e?(0,r.X3)(e)||tn in e?(0,i.l7)({},e):e:null}function un(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=e,l=t?mn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&nn(l),ref:t&&t.ref?n&&o?(0,i.kJ)(o)?o.concat(rn(t)):[o,rn(t)]:rn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Vt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&un(e.ssContent),ssFallback:e.ssFallback&&un(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx};return u}function cn(e=" ",t=0){return sn(jt,null,e,t)}function hn(e="",t=!1){return t?(Kt(),Yt(Bt,null,e)):sn(Bt,null,e)}function dn(e){return null==e||"boolean"===typeof e?sn(Bt):(0,i.kJ)(e)?sn(Vt,null,e.slice()):"object"===typeof e?fn(e):sn(jt,null,String(e))}function fn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:un(e)}function pn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),pn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||tn in t?3===r&&N&&(1===N.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=N}}else(0,i.mf)(t)?(t={default:t,_ctx:N},n=32):(t=String(t),64&r?(n=16,t=[cn(t)]):n=8);e.children=t,e.shapeFlag|=n}function mn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.kJ)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function gn(e,t,n,r=null){s(e,t,7,[n,r])}const vn=wt();let yn=0;function bn(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||vn,a={uid:yn++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lt(o,s),emitsOptions:R(o,s),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:o.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=A.bind(null,a),e.ce&&e.ce(a),a}let wn=null;const _n=()=>wn||N,En=e=>{wn=e,e.scope.on()},Sn=()=>{wn&&wn.scope.off(),wn=null};function Tn(e){return 4&e.vnode.shapeFlag}let kn,xn,In=!1;function Cn(e,t=!1){In=t;const{props:n,children:r}=e.vnode,i=Tn(e);it(e,n,i,t),yt(e,r);const o=i?An(e,t):void 0;return In=!1,o}function An(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,$e));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Ln(e):null;En(e),(0,r.Jd)();const l=o(s,e,0,[e.props,n]);if((0,r.lk)(),Sn(),(0,i.tI)(l)){if(l.then(Sn,Sn),t)return l.then((n=>{Rn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else Rn(e,l,t)}else On(e,t)}function Rn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),On(e,n)}function On(e,t,n){const o=e.type;if(!e.render){if(!t&&kn&&!o.render){const t=o.template||Je(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,l=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:s},r),a);o.render=kn(t,l)}}e.render=o.render||i.dG,xn&&xn(e)}En(e),(0,r.Jd)(),He(e),(0,r.lk)(),Sn()}function Nn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Ln(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Nn(e))},slots:e.slots,emit:e.emit,expose:t}}function Pn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in je?je[n](e):void 0},has(e,t){return t in e||t in je}}))}function Dn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Fn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Mn=(e,t)=>(0,r.Fl)(e,t,In);function qn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Xt(t)?sn(e,null,[t]):sn(e,t):sn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Xt(n)&&(n=[n]),sn(e,t,n))}const Un=Symbol(""),Vn=()=>{{const e=H(Un);return e}};const jn="3.2.45"},1957:(e,t,n)=>{"use strict";n.d(t,{iM:()=>Y,ri:()=>ne,uT:()=>P});var r=n(6970),i=n(9835);n(499);const o="http://www.w3.org/2000/svg",s="undefined"!==typeof document?document:null,a=s&&s.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?s.createElementNS(o,e):s.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>s.createTextNode(e),createComment:e=>s.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>s.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const i=a.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function c(e,t,n){const i=e.style,o=(0,r.HD)(n);if(n&&!o){for(const e in n)d(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);h.test(n)?e.setProperty((0,r.rs)(i),n.replace(h,""),"important"):e[i]=n}}const f=["Webkit","Moz","ms"],p={};function m(e,t){const n=p[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return p[t]=i;i=(0,r.kC)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in e)return p[t]=n}return t}const g="http://www.w3.org/1999/xlink";function v(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function y(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",l=!0):"number"===i&&(n=0,l=!0)}try{e[t]=n}catch(u){0}l&&e.removeAttribute(t)}function b(e,t,n,r){e.addEventListener(t,n,r)}function w(e,t,n,r){e.removeEventListener(t,n,r)}function _(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=S(t);if(r){const s=o[t]=I(r,i);b(e,n,s,a)}else s&&(w(e,n,s,a),o[t]=void 0)}}const E=/(?:Once|Passive|Capture)$/;function S(e){let t;if(E.test(e)){let n;t={};while(n=e.match(E))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let T=0;const k=Promise.resolve(),x=()=>T||(k.then((()=>T=0)),T=Date.now());function I(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(C(e,n.value),t,5,[e])};return n.value=e,n.attached=x(),n}function C(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const A=/^on[a-z]/,R=(e,t,n,i,o=!1,s,a,l,h)=>{"class"===t?u(e,i,o):"style"===t?c(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||_(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):O(e,t,i,o))?y(e,t,i,s,a,l,h):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),v(e,t,i,o))};function O(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&A.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!A.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const N="transition",L="animation",P=(e,{slots:t})=>(0,i.h)(i.P$,q(e),t);P.displayName="Transition";const D={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=(P.props=(0,r.l7)({},i.P$.props,D),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),M=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function q(e){const t={};for(const r in e)r in D||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:c=a,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=U(o),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:E,onBeforeAppear:S=y,onAppear:T=b,onAppearCancelled:k=w}=t,x=(e,t,n)=>{B(e,t?h:l),B(e,t?c:a),n&&n()},I=(e,t)=>{e._isLeaving=!1,B(e,d),B(e,p),B(e,f),t&&t()},C=e=>(t,n)=>{const r=e?T:b,o=()=>x(t,e,n);F(r,[t,o]),$((()=>{B(t,e?u:s),j(t,e?h:l),M(r)||H(t,i,g,o)}))};return(0,r.l7)(t,{onBeforeEnter(e){F(y,[e]),j(e,s),j(e,a)},onBeforeAppear(e){F(S,[e]),j(e,u),j(e,c)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>I(e,t);j(e,d),J(),j(e,f),$((()=>{e._isLeaving&&(B(e,d),j(e,p),M(_)||H(e,i,v,n))})),F(_,[e,n])},onEnterCancelled(e){x(e,!1),F(w,[e])},onAppearCancelled(e){x(e,!0),F(k,[e])},onLeaveCancelled(e){I(e),F(E,[e])}})}function U(e){if(null==e)return null;if((0,r.Kn)(e))return[V(e.enter),V(e.leave)];{const t=V(e);return[t,t]}}function V(e){const t=(0,r.He)(e);return t}function j(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function B(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function $(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let z=0;function H(e,t,n,r){const i=e._endId=++z,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:l}=K(e,t);if(!s)return r();const u=s+"end";let c=0;const h=()=>{e.removeEventListener(u,d),o()},d=t=>{t.target===e&&++c>=l&&h()};setTimeout((()=>{c<l&&h()}),a+1),e.addEventListener(u,d)}function K(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${N}Delay`),o=r(`${N}Duration`),s=W(i,o),a=r(`${L}Delay`),l=r(`${L}Duration`),u=W(a,l);let c=null,h=0,d=0;t===N?s>0&&(c=N,h=s,d=o.length):t===L?u>0&&(c=L,h=u,d=l.length):(h=Math.max(s,u),c=h>0?s>u?N:L:null,d=c?c===N?o.length:l.length:0);const f=c===N&&/\b(transform|all)(,|$)/.test(r(`${N}Property`).toString());return{type:c,timeout:h,propCount:d,hasTransform:f}}function W(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>G(t)+G(e[n]))))}function G(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function J(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Q=["ctrl","shift","alt","meta"],Z={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Q.some((n=>e[`${n}Key`]&&!t.includes(n)))},Y=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Z[t[e]];if(r&&r(n,t))return}return e(n,...r)};const X=(0,r.l7)({patchProp:R},l);let ee;function te(){return ee||(ee=(0,i.Us)(X))}const ne=(...e)=>{const t=te().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=re(e);if(!i)return;const o=t._component;(0,r.mf)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function re(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},6970:(e,t,n)=>{"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:()=>h,DM:()=>L,E9:()=>ie,F7:()=>k,Gg:()=>H,HD:()=>F,He:()=>ne,Kn:()=>q,NO:()=>S,Nj:()=>te,Od:()=>C,PO:()=>$,Pq:()=>f,RI:()=>R,S0:()=>z,W7:()=>B,WV:()=>g,Z6:()=>_,_A:()=>G,_N:()=>N,aU:()=>X,dG:()=>E,e1:()=>o,fY:()=>r,hR:()=>Y,hq:()=>v,ir:()=>ee,j5:()=>s,kC:()=>Z,kJ:()=>O,kT:()=>w,l7:()=>I,mf:()=>D,rs:()=>Q,tI:()=>U,tR:()=>x,yA:()=>p,yk:()=>M,zw:()=>y});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);function s(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=F(r)?c(r):s(r);if(i)for(const e in i)t[e]=i[e]}return t}return F(e)||q(e)?e:void 0}const a=/;(?![^(]*\))/g,l=/:([^]+)/,u=/\/\*.*?\*\//gs;function c(e){const t={};return e.replace(u,"").split(a).forEach((e=>{if(e){const n=e.split(l);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function h(e){let t="";if(F(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const r=h(e[n]);r&&(t+=r+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f=r(d);function p(e){return!!e||""===e}function m(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=g(e[r],t[r]);return n}function g(e,t){if(e===t)return!0;let n=P(e),r=P(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=M(e),r=M(t),n||r)return e===t;if(n=O(e),r=O(t),n||r)return!(!n||!r)&&m(e,t);if(n=q(e),r=q(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!g(e[n],t[n]))return!1}}return String(e)===String(t)}function v(e,t){return e.findIndex((e=>g(e,t)))}const y=e=>F(e)?e:null==e?"":O(e)||q(e)&&(e.toString===V||!D(e.toString))?JSON.stringify(e,b,2):String(e),b=(e,t)=>t&&t.__v_isRef?b(e,t.value):N(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:L(t)?{[`Set(${t.size})`]:[...t.values()]}:!q(t)||O(t)||$(t)?t:String(t),w={},_=[],E=()=>{},S=()=>!1,T=/^on[^a-z]/,k=e=>T.test(e),x=e=>e.startsWith("onUpdate:"),I=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,R=(e,t)=>A.call(e,t),O=Array.isArray,N=e=>"[object Map]"===j(e),L=e=>"[object Set]"===j(e),P=e=>"[object Date]"===j(e),D=e=>"function"===typeof e,F=e=>"string"===typeof e,M=e=>"symbol"===typeof e,q=e=>null!==e&&"object"===typeof e,U=e=>q(e)&&D(e.then)&&D(e.catch),V=Object.prototype.toString,j=e=>V.call(e),B=e=>j(e).slice(8,-1),$=e=>"[object Object]"===j(e),z=e=>F(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},W=/-(\w)/g,G=K((e=>e.replace(W,((e,t)=>t?t.toUpperCase():"")))),J=/\B([A-Z])/g,Q=K((e=>e.replace(J,"-$1").toLowerCase())),Z=K((e=>e.charAt(0).toUpperCase()+e.slice(1))),Y=K((e=>e?`on${Z(e)}`:"")),X=(e,t)=>!Object.is(e,t),ee=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},te=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ne=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let re;const ie=()=>re||(re="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},9981:(e,t,n)=>{e.exports=n(6148)},6857:(e,t,n)=>{"use strict";var r=n(6031),i=n(8117),o=n(6139),s=n(9395),a=n(7187),l=n(7758),u=n(4908),c=n(7381);e.exports=function(e){return new Promise((function(t,n){var h=e.data,d=e.headers,f=e.responseType;r.isFormData(h)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(m+":"+g)}var v=a(e.baseURL,e.url);function y(){if(p){var r="getAllResponseHeaders"in p?l(p.getAllResponseHeaders()):null,o=f&&"text"!==f&&"json"!==f?p.response:p.responseText,s={data:o,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};i(t,n,s),p=null}}if(p.open(e.method.toUpperCase(),s(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,"onloadend"in p?p.onloadend=y:p.onreadystatechange=function(){p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))&&setTimeout(y)},p.onabort=function(){p&&(n(c("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(c(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var b=(e.withCredentials||u(v))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}"setRequestHeader"in p&&r.forEach(d,(function(e,t){"undefined"===typeof h&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),f&&"json"!==f&&(p.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),h||(h=null),p.send(h)}))}},6148:(e,t,n)=>{"use strict";var r=n(6031),i=n(4009),o=n(7237),s=n(8342),a=n(9860);function l(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var u=l(a);u.Axios=o,u.create=function(e){return l(s(u.defaults,e))},u.Cancel=n(5838),u.CancelToken=n(5e3),u.isCancel=n(2649),u.all=function(e){return Promise.all(e)},u.spread=n(7615),u.isAxiosError=n(6794),e.exports=u,e.exports["default"]=u},5838:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},5e3:(e,t,n)=>{"use strict";var r=n(5838);function i(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e,t=new i((function(t){e=t}));return{token:t,cancel:e}},e.exports=i},2649:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},7237:(e,t,n)=>{"use strict";var r=n(6031),i=n(9395),o=n(7332),s=n(1014),a=n(8342),l=n(9206),u=l.validators;function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&l.assertOptions(t,{silentJSONParsing:u.transitional(u.boolean,"1.0.0"),forcedJSONParsing:u.transitional(u.boolean,"1.0.0"),clarifyTimeoutError:u.transitional(u.boolean,"1.0.0")},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var i,o=[];if(this.interceptors.response.forEach((function(e){o.push(e.fulfilled,e.rejected)})),!r){var c=[s,void 0];Array.prototype.unshift.apply(c,n),c=c.concat(o),i=Promise.resolve(e);while(c.length)i=i.then(c.shift(),c.shift());return i}var h=e;while(n.length){var d=n.shift(),f=n.shift();try{h=d(h)}catch(p){f(p);break}}try{i=s(h)}catch(p){return Promise.reject(p)}while(o.length)i=i.then(o.shift(),o.shift());return i},c.prototype.getUri=function(e){return e=a(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=c},7332:(e,t,n)=>{"use strict";var r=n(6031);function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},7187:(e,t,n)=>{"use strict";var r=n(6847),i=n(6560);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},7381:(e,t,n)=>{"use strict";var r=n(4918);e.exports=function(e,t,n,i,o){var s=new Error(e);return r(s,t,n,i,o)}},1014:(e,t,n)=>{"use strict";var r=n(6031),i=n(2297),o=n(2649),s=n(9860);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){a(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||s.adapter;return t(e).then((function(t){return a(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(a(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},4918:e=>{"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},8342:(e,t,n)=>{"use strict";var r=n(6031);e.exports=function(e,t){t=t||{};var n={},i=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function l(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=l(void 0,e[i])):n[i]=l(e[i],t[i])}r.forEach(i,(function(e){r.isUndefined(t[e])||(n[e]=l(void 0,t[e]))})),r.forEach(o,u),r.forEach(s,(function(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=l(void 0,e[i])):n[i]=l(void 0,t[i])})),r.forEach(a,(function(r){r in t?n[r]=l(e[r],t[r]):r in e&&(n[r]=l(void 0,e[r]))}));var c=i.concat(o).concat(s).concat(a),h=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return r.forEach(h,u),n}},8117:(e,t,n)=>{"use strict";var r=n(7381);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},2297:(e,t,n)=>{"use strict";var r=n(6031),i=n(9860);e.exports=function(e,t,n){var o=this||i;return r.forEach(n,(function(n){e=n.call(o,e,t)})),e}},9860:(e,t,n)=>{"use strict";var r=n(6031),i=n(4129),o=n(4918),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function l(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=n(6857)),e}function u(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(e)}var c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:l(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),u(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s){if("SyntaxError"===a.name)throw o(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(s)})),e.exports=c},4009:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},9395:(e,t,n)=>{"use strict";var r=n(6031);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(i(t)+"="+i(e))})))})),o=s.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},6560:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},6139:(e,t,n)=>{"use strict";var r=n(6031);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,i,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},6847:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},6794:e=>{"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},4908:(e,t,n)=>{"use strict";var r=n(6031);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},4129:(e,t,n)=>{"use strict";var r=n(6031);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},7758:(e,t,n)=>{"use strict";var r=n(6031),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(s[t]&&i.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},7615:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},9206:(e,t,n)=>{"use strict";var r=n(8593),i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var o={},s=r.version.split(".");function a(e,t){for(var n=t?t.split("."):s,r=e.split("."),i=0;i<3;i++){if(n[i]>r[i])return!0;if(n[i]<r[i])return!1}return!1}function l(e,t,n){if("object"!==typeof e)throw new TypeError("options must be an object");var r=Object.keys(e),i=r.length;while(i-- >0){var o=r[i],s=t[o];if(s){var a=e[o],l=void 0===a||s(a,o,e);if(!0!==l)throw new TypeError("option "+o+" must be "+l)}else if(!0!==n)throw Error("Unknown option "+o)}}i.transitional=function(e,t,n){var i=t&&a(t);function s(e,t){return"[Axios v"+r.version+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new Error(s(r," has been removed in "+t));return i&&!o[r]&&(o[r]=!0,console.warn(s(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={isOlderVersion:a,assertOptions:l,validators:i}},6031:(e,t,n)=>{"use strict";var r=n(4009),i=Object.prototype.toString;function o(e){return"[object Array]"===i.call(e)}function s(e){return"undefined"===typeof e}function a(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function l(e){return"[object ArrayBuffer]"===i.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function c(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function h(e){return"string"===typeof e}function d(e){return"number"===typeof e}function f(e){return null!==e&&"object"===typeof e}function p(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===i.call(e)}function g(e){return"[object File]"===i.call(e)}function v(e){return"[object Blob]"===i.call(e)}function y(e){return"[object Function]"===i.call(e)}function b(e){return f(e)&&y(e.pipe)}function w(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function _(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function E(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function S(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function T(){var e={};function t(t,n){p(e[n])&&p(t)?e[n]=T(e[n],t):p(t)?e[n]=T({},t):o(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)S(arguments[n],t);return e}function k(e,t,n){return S(t,(function(t,i){e[i]=n&&"function"===typeof t?r(t,n):t})),e}function x(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:o,isArrayBuffer:l,isBuffer:a,isFormData:u,isArrayBufferView:c,isString:h,isNumber:d,isObject:f,isPlainObject:p,isUndefined:s,isDate:m,isFile:g,isBlob:v,isFunction:y,isStream:b,isURLSearchParams:w,isStandardBrowserEnv:E,forEach:S,merge:T,extend:k,trim:_,stripBOM:x}},1357:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(9835),i=n(2857),o=n(244),s=n(5987),a=n(2026);const l=(0,s.L)({name:"QAvatar",props:{...o.LU,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const n=(0,o.ZP)(e),s=(0,r.Fl)((()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(!0===e.square?" q-avatar--square":!0===e.rounded?" rounded-borders":""))),l=(0,r.Fl)((()=>e.fontSize?{fontSize:e.fontSize}:null));return()=>{const o=void 0!==e.icon?[(0,r.h)(i.Z,{name:e.icon})]:void 0;return(0,r.h)("div",{class:s.value,style:n.value},[(0,r.h)("div",{class:"q-avatar__content row flex-center overflow-hidden",style:l.value},(0,a.pf)(t.default,o))])}}})},990:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});n(6727);var r=n(9835),i=n(5987),o=n(2026);const s=["top","middle","bottom"],a=(0,i.L)({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>s.includes(e)}},setup(e,{slots:t}){const n=(0,r.Fl)((()=>void 0!==e.align?{verticalAlign:e.align}:null)),i=(0,r.Fl)((()=>{const t=!0===e.outline&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${!0===e.multiLine?"multi":"single"}-line`+(!0===e.outline?" q-badge--outline":void 0!==e.color?` bg-${e.color}`:"")+(void 0!==t?` text-${t}`:"")+(!0===e.floating?" q-badge--floating":"")+(!0===e.rounded?" q-badge--rounded":"")+(!0===e.transparent?" q-badge--transparent":"")}));return()=>(0,r.h)("div",{class:i.value,style:n.value,role:"status","aria-label":e.label},(0,o.vs)(t.default,void 0!==e.label?[e.label]:[]))}})},4455:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});n(9665);var r=n(9835),i=n(499),o=n(1957),s=n(2857),a=n(3940),l=n(1136),u=(n(6727),n(5065)),c=n(244),h=n(945);const d={none:0,xs:4,sm:8,md:16,lg:24,xl:32},f={xs:8,sm:10,md:14,lg:20,xl:24},p=["button","submit","reset"],m=/[^\s]\/[^\s]/,g=["flat","outline","push","unelevated"],v=(e,t)=>!0===e.flat?"flat":!0===e.outline?"outline":!0===e.push?"push":!0===e.unelevated?"unelevated":t,y={...c.LU,...h.$,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...g.reduce(((e,t)=>(e[t]=Boolean)&&e),{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...u.jO.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function b(e){const t=(0,c.ZP)(e,f),n=(0,u.ZP)(e),{hasRouterLink:i,hasLink:o,linkTag:s,linkAttrs:a,navigateOnClick:l}=(0,h.Z)({fallbackTag:"button"}),g=(0,r.Fl)((()=>{const n=!1===e.fab&&!1===e.fabMini?t.value:{};return void 0!==e.padding?Object.assign({},n,{padding:e.padding.split(/\s+/).map((e=>e in d?d[e]+"px":e)).join(" "),minWidth:"0",minHeight:"0"}):n})),y=(0,r.Fl)((()=>!0===e.rounded||!0===e.fab||!0===e.fabMini)),b=(0,r.Fl)((()=>!0!==e.disable&&!0!==e.loading)),w=(0,r.Fl)((()=>!0===b.value?e.tabindex||0:-1)),_=(0,r.Fl)((()=>v(e,"standard"))),E=(0,r.Fl)((()=>{const t={tabindex:w.value};return!0===o.value?Object.assign(t,a.value):!0===p.includes(e.type)&&(t.type=e.type),"a"===s.value?(!0===e.disable?t["aria-disabled"]="true":void 0===t.href&&(t.role="button"),!0!==i.value&&!0===m.test(e.type)&&(t.type=e.type)):!0===e.disable&&(t.disabled="",t["aria-disabled"]="true"),!0===e.loading&&void 0!==e.percentage&&Object.assign(t,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),t})),S=(0,r.Fl)((()=>{let t;void 0!==e.color?t=!0===e.flat||!0===e.outline?`text-${e.textColor||e.color}`:`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(t=`text-${e.textColor}`);const n=!0===e.round?"round":"rectangle"+(!0===y.value?" q-btn--rounded":!0===e.square?" q-btn--square":"");return`q-btn--${_.value} q-btn--${n}`+(void 0!==t?" "+t:"")+(!0===b.value?" q-btn--actionable q-focusable q-hoverable":!0===e.disable?" disabled":"")+(!0===e.fab?" q-btn--fab":!0===e.fabMini?" q-btn--fab-mini":"")+(!0===e.noCaps?" q-btn--no-uppercase":"")+(!0===e.dense?" q-btn--dense":"")+(!0===e.stretch?" no-border-radius self-stretch":"")+(!0===e.glossy?" glossy":"")+(e.square?" q-btn--square":"")})),T=(0,r.Fl)((()=>n.value+(!0===e.stack?" column":" row")+(!0===e.noWrap?" no-wrap text-no-wrap":"")+(!0===e.loading?" q-btn__content--hidden":"")));return{classes:S,style:g,innerClasses:T,attributes:E,hasLink:o,linkTag:s,navigateOnClick:l,isActionable:b}}var w=n(5987),_=n(2026),E=n(1384),S=n(1705);const{passiveCapture:T}=E.rU;let k=null,x=null,I=null;const C=(0,w.L)({name:"QBtn",props:{...y,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:u}=(0,r.FN)(),{classes:c,style:h,innerClasses:d,attributes:f,hasLink:p,linkTag:m,navigateOnClick:g,isActionable:v}=b(e),y=(0,i.iH)(null),w=(0,i.iH)(null);let C,A,R=null;const O=(0,r.Fl)((()=>void 0!==e.label&&null!==e.label&&""!==e.label)),N=(0,r.Fl)((()=>!0!==e.disable&&!1!==e.ripple&&{keyCodes:!0===p.value?[13,32]:[13],...!0===e.ripple?{}:e.ripple})),L=(0,r.Fl)((()=>({center:e.round}))),P=(0,r.Fl)((()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}})),D=(0,r.Fl)((()=>{if(!0===e.loading)return{onMousedown:$,onTouchstart:$,onClick:$,onKeydown:$,onKeyup:$};if(!0===v.value){const t={onClick:M,onKeydown:q,onMousedown:V};if(!0===u.$q.platform.has.touch){const n=void 0!==e.onTouchstart?"":"Passive";t[`onTouchstart${n}`]=U}return t}return{onClick:E.NS}})),F=(0,r.Fl)((()=>({ref:y,class:"q-btn q-btn-item non-selectable no-outline "+c.value,style:h.value,...f.value,...D.value})));function M(t){if(null!==y.value){if(void 0!==t){if(!0===t.defaultPrevented)return;const n=document.activeElement;if("submit"===e.type&&n!==document.body&&!1===y.value.contains(n)&&!1===n.contains(y.value)){y.value.focus();const e=()=>{document.removeEventListener("keydown",E.NS,!0),document.removeEventListener("keyup",e,T),null!==y.value&&y.value.removeEventListener("blur",e,T)};document.addEventListener("keydown",E.NS,!0),document.addEventListener("keyup",e,T),y.value.addEventListener("blur",e,T)}}g(t)}}function q(e){null!==y.value&&(n("keydown",e),!0===(0,S.So)(e,[13,32])&&x!==y.value&&(null!==x&&B(),!0!==e.defaultPrevented&&(y.value.focus(),x=y.value,y.value.classList.add("q-btn--active"),document.addEventListener("keyup",j,!0),y.value.addEventListener("blur",j,T)),(0,E.NS)(e)))}function U(e){null!==y.value&&(n("touchstart",e),!0!==e.defaultPrevented&&(k!==y.value&&(null!==k&&B(),k=y.value,R=e.target,R.addEventListener("touchcancel",j,T),R.addEventListener("touchend",j,T)),C=!0,clearTimeout(A),A=setTimeout((()=>{C=!1}),200)))}function V(e){null!==y.value&&(e.qSkipRipple=!0===C,n("mousedown",e),!0!==e.defaultPrevented&&I!==y.value&&(null!==I&&B(),I=y.value,y.value.classList.add("q-btn--active"),document.addEventListener("mouseup",j,T)))}function j(e){if(null!==y.value&&(void 0===e||"blur"!==e.type||document.activeElement!==y.value)){if(void 0!==e&&"keyup"===e.type){if(x===y.value&&!0===(0,S.So)(e,[13,32])){const t=new MouseEvent("click",e);t.qKeyEvent=!0,!0===e.defaultPrevented&&(0,E.X$)(t),!0===e.cancelBubble&&(0,E.sT)(t),y.value.dispatchEvent(t),(0,E.NS)(e),e.qKeyEvent=!0}n("keyup",e)}B()}}function B(e){const t=w.value;!0===e||k!==y.value&&I!==y.value||null===t||t===document.activeElement||(t.setAttribute("tabindex",-1),t.focus()),k===y.value&&(null!==R&&(R.removeEventListener("touchcancel",j,T),R.removeEventListener("touchend",j,T)),k=R=null),I===y.value&&(document.removeEventListener("mouseup",j,T),I=null),x===y.value&&(document.removeEventListener("keyup",j,!0),null!==y.value&&y.value.removeEventListener("blur",j,T),x=null),null!==y.value&&y.value.classList.remove("q-btn--active")}function $(e){(0,E.NS)(e),e.qSkipRipple=!0}return(0,r.Jd)((()=>{B(!0)})),Object.assign(u,{click:M}),()=>{let n=[];void 0!==e.icon&&n.push((0,r.h)(s.Z,{name:e.icon,left:!1===e.stack&&!0===O.value,role:"img","aria-hidden":"true"})),!0===O.value&&n.push((0,r.h)("span",{class:"block"},[e.label])),n=(0,_.vs)(t.default,n),void 0!==e.iconRight&&!1===e.round&&n.push((0,r.h)(s.Z,{name:e.iconRight,right:!1===e.stack&&!0===O.value,role:"img","aria-hidden":"true"}));const i=[(0,r.h)("span",{class:"q-focus-helper",ref:w})];return!0===e.loading&&void 0!==e.percentage&&i.push((0,r.h)("span",{class:"q-btn__progress absolute-full overflow-hidden"+(!0===e.darkPercentage?" q-btn__progress--dark":"")},[(0,r.h)("span",{class:"q-btn__progress-indicator fit block",style:P.value})])),i.push((0,r.h)("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+d.value},n)),null!==e.loading&&i.push((0,r.h)(o.uT,{name:"q-transition--fade"},(()=>!0===e.loading?[(0,r.h)("span",{key:"loading",class:"absolute-full flex flex-center"},void 0!==t.loading?t.loading():[(0,r.h)(a.Z)])]:null))),(0,r.wy)((0,r.h)(m.value,F.value,i),[[l.Z,N.value,void 0,L.value]])}}})},4458:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(9835),i=n(8234),o=n(5987),s=n(2026);const a=(0,o.L)({name:"QCard",props:{...i.S,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),o=(0,i.Z)(e,n),a=(0,r.Fl)((()=>"q-card"+(!0===o.value?" q-card--dark q-dark":"")+(!0===e.bordered?" q-card--bordered":"")+(!0===e.square?" q-card--square no-border-radius":"")+(!0===e.flat?" q-card--flat no-shadow":"")));return()=>(0,r.h)(e.tag,{class:a.value},(0,s.KR)(t.default))}})},1821:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(9835),i=n(5065),o=n(5987),s=n(2026);const a=(0,o.L)({name:"QCardActions",props:{...i.jO,vertical:Boolean},setup(e,{slots:t}){const n=(0,i.ZP)(e),o=(0,r.Fl)((()=>`q-card__actions ${n.value} q-card__actions--`+(!0===e.vertical?"vert column":"horiz row")));return()=>(0,r.h)("div",{class:o.value},(0,s.KR)(t.default))}})},3190:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9835),i=n(5987),o=n(2026);const s=(0,i.L)({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-card__section q-card__section--"+(!0===e.horizontal?"horiz row no-wrap":"vert")));return()=>(0,r.h)(e.tag,{class:n.value},(0,o.KR)(t.default))}})},7691:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});n(9665);var r=n(9835),i=n(2857),o=n(1136),s=n(8234),a=n(244),l=n(5987),u=n(1384),c=n(2026);const h={xs:8,sm:10,md:14,lg:20,xl:24},d=(0,l.L)({name:"QChip",props:{...s.S,...a.LU,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=(0,r.FN)(),d=(0,s.Z)(e,l),f=(0,a.ZP)(e,h),p=(0,r.Fl)((()=>!0===e.selected||void 0!==e.icon)),m=(0,r.Fl)((()=>!0===e.selected?e.iconSelected||l.iconSet.chip.selected:e.icon)),g=(0,r.Fl)((()=>e.iconRemove||l.iconSet.chip.remove)),v=(0,r.Fl)((()=>!1===e.disable&&(!0===e.clickable||null!==e.selected))),y=(0,r.Fl)((()=>{const t=!0===e.outline&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(!1===e.outline&&void 0!==e.color?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(!0===e.disable?" disabled":"")+(!0===e.dense?" q-chip--dense":"")+(!0===e.outline?" q-chip--outline":"")+(!0===e.selected?" q-chip--selected":"")+(!0===v.value?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(!0===e.square?" q-chip--square":"")+(!0===d.value?" q-chip--dark q-dark":"")})),b=(0,r.Fl)((()=>{const t=!0===e.disable?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},n={...t,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||l.lang.label.remove};return{chip:t,remove:n}}));function w(e){13===e.keyCode&&_(e)}function _(t){e.disable||(n("update:selected",!e.selected),n("click",t))}function E(t){void 0!==t.keyCode&&13!==t.keyCode||((0,u.NS)(t),!1===e.disable&&(n("update:modelValue",!1),n("remove")))}function S(){const n=[];!0===v.value&&n.push((0,r.h)("div",{class:"q-focus-helper"})),!0===p.value&&n.push((0,r.h)(i.Z,{class:"q-chip__icon q-chip__icon--left",name:m.value}));const o=void 0!==e.label?[(0,r.h)("div",{class:"ellipsis"},[e.label])]:void 0;return n.push((0,r.h)("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},(0,c.pf)(t.default,o))),e.iconRight&&n.push((0,r.h)(i.Z,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),!0===e.removable&&n.push((0,r.h)(i.Z,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...b.value.remove,onClick:E,onKeyup:E})),n}return()=>{if(!1===e.modelValue)return;const t={class:y.value,style:f.value};return!0===v.value&&Object.assign(t,b.value.chip,{onClick:_,onKeyup:w}),(0,c.Jl)("div",t,S(),"ripple",!1!==e.ripple&&!0!==e.disable,(()=>[[o.Z,e.ripple]]))}}})},2074:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});n(6727);var r=n(9835),i=n(499),o=n(1957),s=n(4953),a=n(2695),l=n(6916),u=n(3842),c=n(431),h=n(2306),d=n(9754),f=n(5987),p=n(223),m=n(2026),g=n(6532),v=n(4173),y=n(7026);let b=0;const w={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},_={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},E=(0,f.L)({name:"QDialog",inheritAttrs:!1,props:{...u.vr,...c.D,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>"standard"===e||["top","bottom","left","right"].includes(e)}},emits:[...u.gH,"shake","click","escapeKey"],setup(e,{slots:t,emit:n,attrs:f}){const E=(0,r.FN)(),S=(0,i.iH)(null),T=(0,i.iH)(!1),k=(0,i.iH)(!1);let x,I,C,A=null;const R=(0,r.Fl)((()=>!0!==e.persistent&&!0!==e.noRouteDismiss&&!0!==e.seamless)),{preventBodyScroll:O}=(0,d.Z)(),{registerTimeout:N}=(0,a.Z)(),{registerTick:L,removeTick:P}=(0,l.Z)(),{transitionProps:D,transitionStyle:F}=(0,c.Z)(e,(()=>_[e.position][0]),(()=>_[e.position][1])),{showPortal:M,hidePortal:q,portalIsAccessible:U,renderPortal:V}=(0,h.Z)(E,S,ie,!0),{hide:j}=(0,u.ZP)({showing:T,hideOnRouteChange:R,handleShow:G,handleHide:J,processOnMount:!0}),{addToHistory:B,removeFromHistory:$}=(0,s.Z)(T,j,R),z=(0,r.Fl)((()=>"q-dialog__inner flex no-pointer-events q-dialog__inner--"+(!0===e.maximized?"maximized":"minimized")+` q-dialog__inner--${e.position} ${w[e.position]}`+(!0===k.value?" q-dialog__inner--animating":"")+(!0===e.fullWidth?" q-dialog__inner--fullwidth":"")+(!0===e.fullHeight?" q-dialog__inner--fullheight":"")+(!0===e.square?" q-dialog__inner--square":""))),H=(0,r.Fl)((()=>!0===T.value&&!0!==e.seamless)),K=(0,r.Fl)((()=>!0===e.autoClose?{onClick:te}:{})),W=(0,r.Fl)((()=>["q-dialog fullscreen no-pointer-events q-dialog--"+(!0===H.value?"modal":"seamless"),f.class]));function G(t){B(),A=!1===e.noRefocus&&null!==document.activeElement?document.activeElement:null,ee(e.maximized),M(),k.value=!0,!0!==e.noFocus?(null!==document.activeElement&&document.activeElement.blur(),L(Q)):P(),N((()=>{if(!0===E.proxy.$q.platform.is.ios){if(!0!==e.seamless&&document.activeElement){const{top:e,bottom:t}=document.activeElement.getBoundingClientRect(),{innerHeight:n}=window,r=void 0!==window.visualViewport?window.visualViewport.height:n;e>0&&t>r/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-r,t>=n?1/0:Math.ceil(document.scrollingElement.scrollTop+t-r/2))),document.activeElement.scrollIntoView()}C=!0,S.value.click(),C=!1}M(!0),k.value=!1,n("show",t)}),e.transitionDuration)}function J(t){P(),$(),X(!0),k.value=!0,q(),null!==A&&(((t&&0===t.type.indexOf("key")?A.closest('[tabindex]:not([tabindex^="-"])'):void 0)||A).focus(),A=null),N((()=>{q(!0),k.value=!1,n("hide",t)}),e.transitionDuration)}function Q(e){(0,y.jd)((()=>{let t=S.value;null!==t&&!0!==t.contains(document.activeElement)&&(t=(""!==e?t.querySelector(e):null)||t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))}))}function Z(e){e&&"function"===typeof e.focus?e.focus({preventScroll:!0}):Q(),n("shake");const t=S.value;null!==t&&(t.classList.remove("q-animate--scale"),t.classList.add("q-animate--scale"),clearTimeout(x),x=setTimeout((()=>{null!==S.value&&(t.classList.remove("q-animate--scale"),Q())}),170))}function Y(){!0!==e.seamless&&(!0===e.persistent||!0===e.noEscDismiss?!0!==e.maximized&&!0!==e.noShake&&Z():(n("escapeKey"),j()))}function X(t){clearTimeout(x),!0!==t&&!0!==T.value||(ee(!1),!0!==e.seamless&&(O(!1),(0,v.H)(re),(0,g.k)(Y))),!0!==t&&(A=null)}function ee(e){!0===e?!0!==I&&(b<1&&document.body.classList.add("q-body--dialog"),b++,I=!0):!0===I&&(b<2&&document.body.classList.remove("q-body--dialog"),b--,I=!1)}function te(e){!0!==C&&(j(e),n("click",e))}function ne(t){!0!==e.persistent&&!0!==e.noBackdropDismiss?j(t):!0!==e.noShake&&Z(t.relatedTarget)}function re(t){!0!==e.allowFocusOutside&&!0===U.value&&!0!==(0,p.mY)(S.value,t.target)&&Q('[tabindex]:not([tabindex="-1"])')}function ie(){return(0,r.h)("div",{role:"dialog","aria-modal":!0===H.value?"true":"false",...f,class:W.value},[(0,r.h)(o.uT,{name:"q-transition--fade",appear:!0},(()=>!0===H.value?(0,r.h)("div",{class:"q-dialog__backdrop fixed-full",style:F.value,"aria-hidden":"true",tabindex:-1,onFocusin:ne}):null)),(0,r.h)(o.uT,D.value,(()=>!0===T.value?(0,r.h)("div",{ref:S,class:z.value,style:F.value,tabindex:-1,...K.value},(0,m.KR)(t.default)):null))])}return(0,r.YP)((()=>e.maximized),(e=>{!0===T.value&&ee(e)})),(0,r.YP)(H,(e=>{O(e),!0===e?((0,v.i)(re),(0,g.c)(Y)):((0,v.H)(re),(0,g.k)(Y))})),Object.assign(E.proxy,{focus:Q,shake:Z,__updateRefocusTarget(e){A=e||null}}),(0,r.Jd)(X),V}})},906:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});n(6727),n(9665);var r=n(9835),i=n(499),o=n(4953),s=n(3842),a=n(9754),l=n(2695),u=n(8234),c=n(9714),h=n(5987),d=n(321),f=n(2026),p=n(5439);const m=150,g=(0,h.L)({name:"QDrawer",inheritAttrs:!1,props:{...s.vr,...u.S,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...s.gH,"onLayout","miniState"],setup(e,{slots:t,emit:n,attrs:h}){const g=(0,r.FN)(),{proxy:{$q:v}}=g,y=(0,u.Z)(e,v),{preventBodyScroll:b}=(0,a.Z)(),{registerTimeout:w,removeTimeout:_}=(0,l.Z)(),E=(0,r.f3)(p.YE,p.qO);if(E===p.qO)return console.error("QDrawer needs to be child of QLayout"),p.qO;let S,T,k;const x=(0,i.iH)("mobile"===e.behavior||"desktop"!==e.behavior&&E.totalWidth.value<=e.breakpoint),I=(0,r.Fl)((()=>!0===e.mini&&!0!==x.value)),C=(0,r.Fl)((()=>!0===I.value?e.miniWidth:e.width)),A=(0,i.iH)(!0===e.showIfAbove&&!1===x.value||!0===e.modelValue),R=(0,r.Fl)((()=>!0!==e.persistent&&(!0===x.value||!0===G.value)));function O(e,t){if(D(),!1!==e&&E.animate(),ae(0),!0===x.value){const e=E.instances[z.value];void 0!==e&&!0===e.belowBreakpoint&&e.hide(!1),le(1),!0!==E.isContainer.value&&b(!0)}else le(0),!1!==e&&ue(!1);w((()=>{!1!==e&&ue(!0),!0!==t&&n("show",e)}),m)}function N(e,t){F(),!1!==e&&E.animate(),le(0),ae(U.value*C.value),fe(),!0!==t?w((()=>{n("hide",e)}),m):_()}const{show:L,hide:P}=(0,s.ZP)({showing:A,hideOnRouteChange:R,handleShow:O,handleHide:N}),{addToHistory:D,removeFromHistory:F}=(0,o.Z)(A,P,R),M={belowBreakpoint:x,hide:P},q=(0,r.Fl)((()=>"right"===e.side)),U=(0,r.Fl)((()=>(!0===v.lang.rtl?-1:1)*(!0===q.value?1:-1))),V=(0,i.iH)(0),j=(0,i.iH)(!1),B=(0,i.iH)(!1),$=(0,i.iH)(C.value*U.value),z=(0,r.Fl)((()=>!0===q.value?"left":"right")),H=(0,r.Fl)((()=>!0===A.value&&!1===x.value&&!1===e.overlay?!0===e.miniToOverlay?e.miniWidth:C.value:0)),K=(0,r.Fl)((()=>!0===e.overlay||!0===e.miniToOverlay||E.view.value.indexOf(q.value?"R":"L")>-1||!0===v.platform.is.ios&&!0===E.isContainer.value)),W=(0,r.Fl)((()=>!1===e.overlay&&!0===A.value&&!1===x.value)),G=(0,r.Fl)((()=>!0===e.overlay&&!0===A.value&&!1===x.value)),J=(0,r.Fl)((()=>"fullscreen q-drawer__backdrop"+(!1===A.value&&!1===j.value?" hidden":""))),Q=(0,r.Fl)((()=>({backgroundColor:`rgba(0,0,0,${.4*V.value})`}))),Z=(0,r.Fl)((()=>!0===q.value?"r"===E.rows.value.top[2]:"l"===E.rows.value.top[0])),Y=(0,r.Fl)((()=>!0===q.value?"r"===E.rows.value.bottom[2]:"l"===E.rows.value.bottom[0])),X=(0,r.Fl)((()=>{const e={};return!0===E.header.space&&!1===Z.value&&(!0===K.value?e.top=`${E.header.offset}px`:!0===E.header.space&&(e.top=`${E.header.size}px`)),!0===E.footer.space&&!1===Y.value&&(!0===K.value?e.bottom=`${E.footer.offset}px`:!0===E.footer.space&&(e.bottom=`${E.footer.size}px`)),e})),ee=(0,r.Fl)((()=>{const e={width:`${C.value}px`,transform:`translateX(${$.value}px)`};return!0===x.value?e:Object.assign(e,X.value)})),te=(0,r.Fl)((()=>"q-drawer__content fit "+(!0!==E.isContainer.value?"scroll":"overflow-auto"))),ne=(0,r.Fl)((()=>`q-drawer q-drawer--${e.side}`+(!0===B.value?" q-drawer--mini-animate":"")+(!0===e.bordered?" q-drawer--bordered":"")+(!0===y.value?" q-drawer--dark q-dark":"")+(!0===j.value?" no-transition":!0===A.value?"":" q-layout--prevent-focus")+(!0===x.value?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":" q-drawer--"+(!0===I.value?"mini":"standard")+(!0===K.value||!0!==W.value?" fixed":"")+(!0===e.overlay||!0===e.miniToOverlay?" q-drawer--on-top":"")+(!0===Z.value?" q-drawer--top-padding":"")))),re=(0,r.Fl)((()=>{const t=!0===v.lang.rtl?e.side:z.value;return[[c.Z,he,void 0,{[t]:!0,mouse:!0}]]})),ie=(0,r.Fl)((()=>{const t=!0===v.lang.rtl?z.value:e.side;return[[c.Z,de,void 0,{[t]:!0,mouse:!0}]]})),oe=(0,r.Fl)((()=>{const t=!0===v.lang.rtl?z.value:e.side;return[[c.Z,de,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]}));function se(){me(x,"mobile"===e.behavior||"desktop"!==e.behavior&&E.totalWidth.value<=e.breakpoint)}function ae(e){void 0===e?(0,r.Y3)((()=>{e=!0===A.value?0:C.value,ae(U.value*e)})):(!0!==E.isContainer.value||!0!==q.value||!0!==x.value&&Math.abs(e)!==C.value||(e+=U.value*E.scrollbarWidth.value),$.value=e)}function le(e){V.value=e}function ue(e){const t=!0===e?"remove":!0!==E.isContainer.value?"add":"";""!==t&&document.body.classList[t]("q-body--drawer-toggle")}function ce(){clearTimeout(T),g.proxy&&g.proxy.$el&&g.proxy.$el.classList.add("q-drawer--mini-animate"),B.value=!0,T=setTimeout((()=>{B.value=!1,g&&g.proxy&&g.proxy.$el&&g.proxy.$el.classList.remove("q-drawer--mini-animate")}),150)}function he(e){if(!1!==A.value)return;const t=C.value,n=(0,d.vX)(e.distance.x,0,t);if(!0===e.isFinal){const e=n>=Math.min(75,t);return!0===e?L():(E.animate(),le(0),ae(U.value*t)),void(j.value=!1)}ae((!0===v.lang.rtl?!0!==q.value:q.value)?Math.max(t-n,0):Math.min(0,n-t)),le((0,d.vX)(n/t,0,1)),!0===e.isFirst&&(j.value=!0)}function de(t){if(!0!==A.value)return;const n=C.value,r=t.direction===e.side,i=(!0===v.lang.rtl?!0!==r:r)?(0,d.vX)(t.distance.x,0,n):0;if(!0===t.isFinal){const e=Math.abs(i)<Math.min(75,n);return!0===e?(E.animate(),le(1),ae(0)):P(),void(j.value=!1)}ae(U.value*i),le((0,d.vX)(1-i/n,0,1)),!0===t.isFirst&&(j.value=!0)}function fe(){b(!1),ue(!0)}function pe(t,n){E.update(e.side,t,n)}function me(e,t){e.value!==t&&(e.value=t)}function ge(t,n){pe("size",!0===t?e.miniWidth:n)}return(0,r.YP)(x,(t=>{!0===t?(S=A.value,!0===A.value&&P(!1)):!1===e.overlay&&"mobile"!==e.behavior&&!1!==S&&(!0===A.value?(ae(0),le(0),fe()):L(!1))})),(0,r.YP)((()=>e.side),((e,t)=>{E.instances[t]===M&&(E.instances[t]=void 0,E[t].space=!1,E[t].offset=0),E.instances[e]=M,E[e].size=C.value,E[e].space=W.value,E[e].offset=H.value})),(0,r.YP)(E.totalWidth,(()=>{!0!==E.isContainer.value&&!0===document.qScrollPrevented||se()})),(0,r.YP)((()=>e.behavior+e.breakpoint),se),(0,r.YP)(E.isContainer,(e=>{!0===A.value&&b(!0!==e),!0===e&&se()})),(0,r.YP)(E.scrollbarWidth,(()=>{ae(!0===A.value?0:void 0)})),(0,r.YP)(H,(e=>{pe("offset",e)})),(0,r.YP)(W,(e=>{n("onLayout",e),pe("space",e)})),(0,r.YP)(q,(()=>{ae()})),(0,r.YP)(C,(t=>{ae(),ge(e.miniToOverlay,t)})),(0,r.YP)((()=>e.miniToOverlay),(e=>{ge(e,C.value)})),(0,r.YP)((()=>v.lang.rtl),(()=>{ae()})),(0,r.YP)((()=>e.mini),(()=>{!0===e.modelValue&&(ce(),E.animate())})),(0,r.YP)(I,(e=>{n("miniState",e)})),E.instances[e.side]=M,ge(e.miniToOverlay,C.value),pe("space",W.value),pe("offset",H.value),!0===e.showIfAbove&&!0!==e.modelValue&&!0===A.value&&void 0!==e["onUpdate:modelValue"]&&n("update:modelValue",!0),(0,r.bv)((()=>{n("onLayout",W.value),n("miniState",I.value),S=!0===e.showIfAbove;const t=()=>{const e=!0===A.value?O:N;e(!1,!0)};0===E.totalWidth.value?k=(0,r.YP)(E.totalWidth,(()=>{k(),k=void 0,!1===A.value&&!0===e.showIfAbove&&!1===x.value?L(!1):t()})):(0,r.Y3)(t)})),(0,r.Jd)((()=>{void 0!==k&&k(),clearTimeout(T),!0===A.value&&fe(),E.instances[e.side]===M&&(E.instances[e.side]=void 0,pe("size",0),pe("offset",0),pe("space",!1))})),()=>{const n=[];!0===x.value&&(!1===e.noSwipeOpen&&n.push((0,r.wy)((0,r.h)("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),re.value)),n.push((0,f.Jl)("div",{ref:"backdrop",class:J.value,style:Q.value,"aria-hidden":"true",onClick:P},void 0,"backdrop",!0!==e.noSwipeBackdrop&&!0===A.value,(()=>oe.value))));const i=!0===I.value&&void 0!==t.mini,o=[(0,r.h)("div",{...h,key:""+i,class:[te.value,h.class]},!0===i?t.mini():(0,f.KR)(t.default))];return!0===e.elevated&&!0===A.value&&o.push((0,r.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push((0,f.Jl)("aside",{ref:"content",class:ne.value,style:ee.value},o,"contentclose",!0!==e.noSwipeClose&&!0===x.value,(()=>ie.value))),(0,r.h)("div",{class:"q-drawer-container"},n)}}})},9420:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});n(6727);var r=n(9835),i=n(499),o=n(7691),s=n(3167),a=n(9256),l=(n(9665),n(7506)),u=n(1384);function c(e,t,n,r){const i=[];return e.forEach((e=>{!0===r(e)?i.push(e):t.push({failedPropValidation:n,file:e})})),i}function h(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),(0,u.NS)(e)}const d={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},f=["rejected"];function p({editable:e,dnd:t,getFileInput:n,addFilesToQueue:o}){const{props:s,emit:a,proxy:d}=(0,r.FN)(),f=(0,i.iH)(null),p=(0,r.Fl)((()=>void 0!==s.accept?s.accept.split(",").map((e=>(e=e.trim(),"*"===e?"*/":(e.endsWith("/*")&&(e=e.slice(0,e.length-1)),e.toUpperCase())))):null)),m=(0,r.Fl)((()=>parseInt(s.maxFiles,10))),g=(0,r.Fl)((()=>parseInt(s.maxTotalSize,10)));function v(t){if(e.value)if(t!==Object(t)&&(t={target:null}),null!==t.target&&!0===t.target.matches('input[type="file"]'))0===t.clientX&&0===t.clientY&&(0,u.sT)(t);else{const e=n();e&&e!==t.target&&e.click(t)}}function y(t){e.value&&t&&o(null,t)}function b(e,t,n,r){let i=Array.from(t||e.target.files);const o=[],l=()=>{o.length>0&&a("rejected",o)};if(void 0!==s.accept&&-1===p.value.indexOf("*/")&&(i=c(i,o,"accept",(e=>p.value.some((t=>e.type.toUpperCase().startsWith(t)||e.name.toUpperCase().endsWith(t))))),0===i.length))return l();if(void 0!==s.maxFileSize){const e=parseInt(s.maxFileSize,10);if(i=c(i,o,"max-file-size",(t=>t.size<=e)),0===i.length)return l()}if(!0!==s.multiple&&i.length>0&&(i=[i[0]]),i.forEach((e=>{e.__key=e.webkitRelativePath+e.lastModified+e.name+e.size})),!0===r){const e=n.map((e=>e.__key));i=c(i,o,"duplicate",(t=>!1===e.includes(t.__key)))}if(0===i.length)return l();if(void 0!==s.maxTotalSize){let e=!0===r?n.reduce(((e,t)=>e+t.size),0):0;if(i=c(i,o,"max-total-size",(t=>(e+=t.size,e<=g.value))),0===i.length)return l()}if("function"===typeof s.filter){const e=s.filter(i);i=c(i,o,"filter",(t=>e.includes(t)))}if(void 0!==s.maxFiles){let e=!0===r?n.length:0;if(i=c(i,o,"max-files",(()=>(e++,e<=m.value))),0===i.length)return l()}return l(),i.length>0?i:void 0}function w(e){h(e),!0!==t.value&&(t.value=!0)}function _(e){(0,u.NS)(e);const n=null!==e.relatedTarget||!0!==l.Lp.is.safari?e.relatedTarget!==f.value:!1===document.elementsFromPoint(e.clientX,e.clientY).includes(f.value);!0===n&&(t.value=!1)}function E(e){h(e);const n=e.dataTransfer.files;n.length>0&&o(null,n),t.value=!1}function S(e){if(!0===t.value)return(0,r.h)("div",{ref:f,class:`q-${e}__dnd absolute-full`,onDragenter:h,onDragover:h,onDragleave:_,onDrop:E})}return Object.assign(d,{pickFiles:v,addFiles:y}),{pickFiles:v,addFiles:y,onDragover:w,onDragleave:_,processFiles:b,getDndNode:S,maxFilesNumber:m,maxTotalSizeNumber:g}}var m=n(7915),g=n(5987),v=n(321),y=n(3251);const b=(0,g.L)({name:"QFile",inheritAttrs:!1,props:{...s.Cl,...a.Fz,...d,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...s.HJ,...f],setup(e,{slots:t,emit:n,attrs:l}){const{proxy:c}=(0,r.FN)(),h=(0,s.tL)(),d=(0,i.iH)(null),f=(0,i.iH)(!1),g=(0,a.Do)(e),{pickFiles:b,onDragover:w,onDragleave:_,processFiles:E,getDndNode:S}=p({editable:h.editable,dnd:f,getFileInput:q,addFilesToQueue:U}),T=(0,m.Z)(e),k=(0,r.Fl)((()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[])),x=(0,r.Fl)((()=>(0,s.yV)(k.value))),I=(0,r.Fl)((()=>k.value.map((e=>e.name)).join(", "))),C=(0,r.Fl)((()=>(0,v.rB)(k.value.reduce(((e,t)=>e+t.size),0)))),A=(0,r.Fl)((()=>({totalSize:C.value,filesNumber:k.value.length,maxFiles:e.maxFiles}))),R=(0,r.Fl)((()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:g.value,...l,id:h.targetUid.value,disabled:!0!==h.editable.value}))),O=(0,r.Fl)((()=>"q-file q-field--auto-height"+(!0===f.value?" q-file--dnd":""))),N=(0,r.Fl)((()=>!0===e.multiple&&!0===e.append));function L(e){const t=k.value.slice();t.splice(e,1),D(t)}function P(e){const t=k.value.findIndex(e);t>-1&&L(t)}function D(t){n("update:modelValue",!0===e.multiple?t:t[0])}function F(e){13===e.keyCode&&(0,u.X$)(e)}function M(e){13!==e.keyCode&&32!==e.keyCode||b(e)}function q(){return d.value}function U(t,n){const r=E(t,n,k.value,N.value),i=q();void 0!==i&&null!==i&&(i.value=""),void 0!==r&&((!0===e.multiple?e.modelValue&&r.every((e=>k.value.includes(e))):e.modelValue===r[0])||D(!0===N.value?k.value.concat(r):r))}function V(){return[(0,r.h)("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function j(){if(void 0!==t.file)return 0===k.value.length?V():k.value.map(((e,n)=>t.file({index:n,file:e,ref:this})));if(void 0!==t.selected)return 0===k.value.length?V():t.selected({files:k.value,ref:this});if(!0===e.useChips)return 0===k.value.length?V():k.value.map(((t,n)=>(0,r.h)(o.Z,{key:"file-"+n,removable:h.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{L(n)}},(()=>(0,r.h)("span",{class:"ellipsis",textContent:t.name})))));const n=void 0!==e.displayValue?e.displayValue:I.value;return n.length>0?[(0,r.h)("div",{class:e.inputClass,style:e.inputStyle,textContent:n})]:V()}function B(){const t={ref:d,...R.value,...T.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:U};return!0===e.multiple&&(t.multiple=!0),(0,r.h)("input",t)}return Object.assign(h,{fieldClass:O,emitValue:D,hasValue:x,inputRef:d,innerValue:k,floatingLabel:(0,r.Fl)((()=>!0===x.value||(0,s.yV)(e.displayValue))),computedCounter:(0,r.Fl)((()=>{if(void 0!==e.counterLabel)return e.counterLabel(A.value);const t=e.maxFiles;return`${k.value.length}${void 0!==t?" / "+t:""} (${C.value})`})),getControlChild:()=>S("file"),getControl:()=>{const t={ref:h.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return!0===h.editable.value&&Object.assign(t,{onDragover:w,onDragleave:_,onKeydown:F,onKeyup:M}),(0,r.h)("div",t,[B()].concat(j()))}}),Object.assign(c,{removeAtIndex:L,removeFile:P,getNativeElement:()=>d.value}),(0,y.g)(c,"nativeEl",(()=>d.value)),(0,s.ZP)(h)}})},6602:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});n(9665);var r=n(9835),i=n(499),o=n(883),s=n(5987),a=n(2026),l=n(5439);const u=(0,s.L)({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:n}){const{proxy:{$q:s}}=(0,r.FN)(),u=(0,r.f3)(l.YE,l.qO);if(u===l.qO)return console.error("QHeader needs to be child of QLayout"),l.qO;const c=(0,i.iH)(parseInt(e.heightHint,10)),h=(0,i.iH)(!0),d=(0,r.Fl)((()=>!0===e.reveal||u.view.value.indexOf("H")>-1||s.platform.is.ios&&!0===u.isContainer.value)),f=(0,r.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===d.value)return!0===h.value?c.value:0;const t=c.value-u.scroll.value.position;return t>0?t:0})),p=(0,r.Fl)((()=>!0!==e.modelValue||!0===d.value&&!0!==h.value)),m=(0,r.Fl)((()=>!0===e.modelValue&&!0===p.value&&!0===e.reveal)),g=(0,r.Fl)((()=>"q-header q-layout__section--marginal "+(!0===d.value?"fixed":"absolute")+"-top"+(!0===e.bordered?" q-header--bordered":"")+(!0===p.value?" q-header--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus":""))),v=(0,r.Fl)((()=>{const e=u.rows.value.top,t={};return"l"===e[0]&&!0===u.left.space&&(t[!0===s.lang.rtl?"right":"left"]=`${u.left.size}px`),"r"===e[2]&&!0===u.right.space&&(t[!0===s.lang.rtl?"left":"right"]=`${u.right.size}px`),t}));function y(e,t){u.update("header",e,t)}function b(e,t){e.value!==t&&(e.value=t)}function w({height:e}){b(c,e),y("size",e)}function _(e){!0===m.value&&b(h,!0),n("focusin",e)}(0,r.YP)((()=>e.modelValue),(e=>{y("space",e),b(h,!0),u.animate()})),(0,r.YP)(f,(e=>{y("offset",e)})),(0,r.YP)((()=>e.reveal),(t=>{!1===t&&b(h,e.modelValue)})),(0,r.YP)(h,(e=>{u.animate(),n("reveal",e)})),(0,r.YP)(u.scroll,(t=>{!0===e.reveal&&b(h,"up"===t.direction||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)}));const E={};return u.instances.header=E,!0===e.modelValue&&y("size",c.value),y("space",e.modelValue),y("offset",f.value),(0,r.Jd)((()=>{u.instances.header===E&&(u.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))})),()=>{const n=(0,a.Bl)(t.default,[]);return!0===e.elevated&&n.push((0,r.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push((0,r.h)(o.Z,{debounce:0,onResize:w})),(0,r.h)("header",{class:g.value,style:v.value,onFocusin:_},n)}}})},2857:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(9835),i=n(244),o=n(5987),s=n(2026);const a="0 0 24 24",l=e=>e,u=e=>`ionicons ${e}`,c={"mdi-":e=>`mdi ${e}`,"icon-":l,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":u,"ion-ios":u,"ion-logo":u,"iconfont ":l,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},h={o_:"-outlined",r_:"-round",s_:"-sharp"},d={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},f=new RegExp("^("+Object.keys(c).join("|")+")"),p=new RegExp("^("+Object.keys(h).join("|")+")"),m=new RegExp("^("+Object.keys(d).join("|")+")"),g=/^[Mm]\s?[-+]?\.?\d/,v=/^img:/,y=/^svguse:/,b=/^ion-/,w=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,_=(0,o.L)({name:"QIcon",props:{...i.LU,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),o=(0,i.ZP)(e),l=(0,r.Fl)((()=>"q-icon"+(!0===e.left?" on-left":"")+(!0===e.right?" on-right":"")+(void 0!==e.color?` text-${e.color}`:""))),u=(0,r.Fl)((()=>{let t,i=e.name;if("none"===i||!i)return{none:!0};if(null!==n.iconMapFn){const e=n.iconMapFn(i);if(void 0!==e){if(void 0===e.icon)return{cls:e.cls,content:void 0!==e.content?e.content:" "};if(i=e.icon,"none"===i||!i)return{none:!0}}}if(!0===g.test(i)){const[e,t=a]=i.split("|");return{svg:!0,viewBox:t,nodes:e.split("&&").map((e=>{const[t,n,i]=e.split("@@");return(0,r.h)("path",{style:n,d:t,transform:i})}))}}if(!0===v.test(i))return{img:!0,src:i.substring(4)};if(!0===y.test(i)){const[e,t=a]=i.split("|");return{svguse:!0,src:e.substring(7),viewBox:t}}let o=" ";const s=i.match(f);if(null!==s)t=c[s[1]](i);else if(!0===w.test(i))t=i;else if(!0===b.test(i))t=`ionicons ion-${!0===n.platform.is.ios?"ios":"md"}${i.substring(3)}`;else if(!0===m.test(i)){t="notranslate material-symbols";const e=i.match(m);null!==e&&(i=i.substring(6),t+=d[e[1]]),o=i}else{t="notranslate material-icons";const e=i.match(p);null!==e&&(i=i.substring(2),t+=h[e[1]]),o=i}return{cls:t,content:o}}));return()=>{const n={class:l.value,style:o.value,"aria-hidden":"true",role:"presentation"};return!0===u.value.none?(0,r.h)(e.tag,n,(0,s.KR)(t.default)):!0===u.value.img?(0,r.h)("span",n,(0,s.vs)(t.default,[(0,r.h)("img",{src:u.value.src})])):!0===u.value.svg?(0,r.h)("span",n,(0,s.vs)(t.default,[(0,r.h)("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):!0===u.value.svguse?(0,r.h)("span",n,(0,s.vs)(t.default,[(0,r.h)("svg",{viewBox:u.value.viewBox},[(0,r.h)("use",{"xlink:href":u.value.src})])])):(void 0!==u.value.cls&&(n.class+=" "+u.value.cls),(0,r.h)(e.tag,n,(0,s.vs)(t.default,[u.value.content])))}}})},335:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});n(9665);var r=n(499),i=n(9835),o=n(1957),s=n(3940);const a={ratio:[String,Number]};function l(e,t){return(0,i.Fl)((()=>{const n=Number(e.ratio||(void 0!==t?t.value:void 0));return!0!==isNaN(n)&&n>0?{paddingBottom:100/n+"%"}:null}))}var u=n(5987),c=n(2026);const h=16/9,d=(0,u.L)({name:"QImg",props:{...a,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:h},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:n}){const a=(0,r.iH)(e.initialRatio),u=l(e,a);let h;const d=[(0,r.iH)(null),(0,r.iH)(_())],f=(0,r.iH)(0),p=(0,r.iH)(!1),m=(0,r.iH)(!1),g=(0,i.Fl)((()=>`q-img q-img--${!0===e.noNativeMenu?"no-":""}menu`)),v=(0,i.Fl)((()=>({width:e.width,height:e.height}))),y=(0,i.Fl)((()=>"q-img__image "+(void 0!==e.imgClass?e.imgClass+" ":"")+`q-img__image--with${!0===e.noTransition?"out":""}-transition`)),b=(0,i.Fl)((()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position})));function w(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function _(){return void 0!==e.placeholderSrc?{src:e.placeholderSrc}:null}function E(e){clearTimeout(h),m.value=!1,null===e?(p.value=!1,d[1^f.value].value=_()):p.value=!0,d[f.value].value=e}function S({target:e}){null!==h&&(clearTimeout(h),a.value=0===e.naturalHeight?.5:e.naturalWidth/e.naturalHeight,T(e,1))}function T(e,t){null!==h&&1e3!==t&&(!0===e.complete?k(e):h=setTimeout((()=>{T(e,t+1)}),50))}function k(e){null!==h&&(f.value=1^f.value,d[f.value].value=null,p.value=!1,m.value=!1,n("load",e.currentSrc||e.src))}function x(e){clearTimeout(h),p.value=!1,m.value=!0,d[f.value].value=null,d[1^f.value].value=_(),n("error",e)}function I(t){const n=d[t].value,r={key:"img_"+t,class:y.value,style:b.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...n};return f.value===t?(r.class+=" q-img__image--waiting",Object.assign(r,{onLoad:S,onError:x})):r.class+=" q-img__image--loaded",(0,i.h)("div",{class:"q-img__container absolute-full",key:"img"+t},(0,i.h)("img",r))}function C(){return!0!==p.value?(0,i.h)("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},(0,c.KR)(t[!0===m.value?"error":"default"])):(0,i.h)("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},void 0!==t.loading?t.loading():!0===e.noSpinner?void 0:[(0,i.h)(s.Z,{color:e.spinnerColor,size:e.spinnerSize})])}return(0,i.YP)((()=>w()),E),E(w()),(0,i.Jd)((()=>{clearTimeout(h),h=null})),()=>{const t=[];return null!==u.value&&t.push((0,i.h)("div",{key:"filler",style:u.value})),!0!==m.value&&(null!==d[0].value&&t.push(I(0)),null!==d[1].value&&t.push(I(1))),t.push((0,i.h)(o.uT,{name:"q-transition--fade"},C)),(0,i.h)("div",{class:g.value,style:v.value,role:"img","aria-label":e.alt},t)}}})},4152:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});n(6727);var r=n(9835),i=n(499),o=n(3167),s=(n(8964),n(9665),n(1705));const a={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},l={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},u=Object.keys(l);u.forEach((e=>{l[e].regex=new RegExp(l[e].pattern)}));const c=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+u.join("")+"])|(.)","g"),h=/[.*+?^${}()|[\]\\]/g,d=String.fromCharCode(1),f={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function p(e,t,n,o){let u,f,p,m;const g=(0,i.iH)(null),v=(0,i.iH)(b());function y(){return!0===e.autogrow||["textarea","text","search","url","tel","password"].includes(e.type)}function b(){if(_(),!0===g.value){const t=x(C(e.modelValue));return!1!==e.fillMask?A(t):t}return e.modelValue}function w(e){if(e<u.length)return u.slice(-e);let t="",n=u;const r=n.indexOf(d);if(r>-1){for(let r=e-n.length;r>0;r--)t+=d;n=n.slice(0,r)+t+n.slice(r)}return n}function _(){if(g.value=void 0!==e.mask&&e.mask.length>0&&y(),!1===g.value)return m=void 0,u="",void(f="");const t=void 0===a[e.mask]?e.mask:a[e.mask],n="string"===typeof e.fillMask&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=n.replace(h,"\\$&"),i=[],o=[],s=[];let v=!0===e.reverseFillMask,b="",w="";t.replace(c,((e,t,n,r,a)=>{if(void 0!==r){const e=l[r];s.push(e),w=e.negate,!0===v&&(o.push("(?:"+w+"+)?("+e.pattern+"+)?(?:"+w+"+)?("+e.pattern+"+)?"),v=!1),o.push("(?:"+w+"+)?("+e.pattern+")?")}else if(void 0!==n)b="\\"+("\\"===n?"":n),s.push(n),i.push("([^"+b+"]+)?"+b+"?");else{const e=void 0!==t?t:a;b="\\"===e?"\\\\\\\\":e.replace(h,"\\\\$&"),s.push(e),i.push("([^"+b+"]+)?"+b+"?")}}));const _=new RegExp("^"+i.join("")+"("+(""===b?".":"[^"+b+"]")+"+)?"+(""===b?"":"["+b+"]*")+"$"),E=o.length-1,S=o.map(((t,n)=>0===n&&!0===e.reverseFillMask?new RegExp("^"+r+"*"+t):n===E?new RegExp("^"+t+"("+(""===w?".":w)+"+)?"+(!0===e.reverseFillMask?"$":r+"*")):new RegExp("^"+t)));p=s,m=t=>{const n=_.exec(!0===e.reverseFillMask?t:t.slice(0,s.length));null!==n&&(t=n.slice(1).join(""));const r=[],i=S.length;for(let e=0,o=t;e<i;e++){const t=S[e].exec(o);if(null===t)break;o=o.slice(t.shift().length),r.push(...t)}return r.length>0?r.join(""):t},u=s.map((e=>"string"===typeof e?e:d)).join(""),f=u.split(d).join(n)}function E(t,i,s){const a=o.value,l=a.selectionEnd,c=a.value.length-l,h=C(t);!0===i&&_();const p=x(h),m=!1!==e.fillMask?A(p):p,g=v.value!==m;a.value!==m&&(a.value=m),!0===g&&(v.value=m),document.activeElement===a&&(0,r.Y3)((()=>{if(m!==f)if("insertFromPaste"!==s||!0===e.reverseFillMask)if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const t=!0===e.reverseFillMask?0===l?m.length>p.length?1:0:Math.max(0,m.length-(m===f?0:Math.min(p.length,c)+1))+1:l;a.setSelectionRange(t,t,"forward")}else if(!0===e.reverseFillMask)if(!0===g){const e=Math.max(0,m.length-(m===f?0:Math.min(p.length,c+1)));1===e&&1===l?a.setSelectionRange(e,e,"forward"):T.rightReverse(a,e,e)}else{const e=m.length-c;a.setSelectionRange(e,e,"backward")}else if(!0===g){const e=Math.max(0,u.indexOf(d),Math.min(p.length,l)-1);T.right(a,e,e)}else{const e=l-1;T.right(a,e,e)}else{const e=l-1;T.right(a,e,e)}else{const t=!0===e.reverseFillMask?f.length:0;a.setSelectionRange(t,t,"forward")}}));const y=!0===e.unmaskedValue?C(m):m;String(e.modelValue)!==y&&n(y,!0)}function S(e,t,n){const r=x(C(e.value));t=Math.max(0,u.indexOf(d),Math.min(r.length,t)),e.setSelectionRange(t,n,"forward")}(0,r.YP)((()=>e.type+e.autogrow),_),(0,r.YP)((()=>e.mask),(n=>{if(void 0!==n)E(v.value,!0);else{const n=C(v.value);_(),e.modelValue!==n&&t("update:modelValue",n)}})),(0,r.YP)((()=>e.fillMask+e.reverseFillMask),(()=>{!0===g.value&&E(v.value,!0)})),(0,r.YP)((()=>e.unmaskedValue),(()=>{!0===g.value&&E(v.value)}));const T={left(e,t,n,r){const i=-1===u.slice(t-1).indexOf(d);let o=Math.max(0,t-1);for(;o>=0;o--)if(u[o]===d){t=o,!0===i&&t++;break}if(o<0&&void 0!==u[t]&&u[t]!==d)return T.right(e,0,0);t>=0&&e.setSelectionRange(t,!0===r?n:t,"backward")},right(e,t,n,r){const i=e.value.length;let o=Math.min(i,n+1);for(;o<=i;o++){if(u[o]===d){n=o;break}u[o-1]===d&&(n=o)}if(o>i&&void 0!==u[n-1]&&u[n-1]!==d)return T.left(e,i,i);e.setSelectionRange(r?t:n,n,"forward")},leftReverse(e,t,n,r){const i=w(e.value.length);let o=Math.max(0,t-1);for(;o>=0;o--){if(i[o-1]===d){t=o;break}if(i[o]===d&&(t=o,0===o))break}if(o<0&&void 0!==i[t]&&i[t]!==d)return T.rightReverse(e,0,0);t>=0&&e.setSelectionRange(t,!0===r?n:t,"backward")},rightReverse(e,t,n,r){const i=e.value.length,o=w(i),s=-1===o.slice(0,n+1).indexOf(d);let a=Math.min(i,n+1);for(;a<=i;a++)if(o[a-1]===d){n=a,n>0&&!0===s&&n--;break}if(a>i&&void 0!==o[n-1]&&o[n-1]!==d)return T.leftReverse(e,i,i);e.setSelectionRange(!0===r?t:n,n,"forward")}};function k(n){if(t("keydown",n),!0===(0,s.Wm)(n))return;const r=o.value,i=r.selectionStart,a=r.selectionEnd;if(37===n.keyCode||39===n.keyCode){const t=T[(39===n.keyCode?"right":"left")+(!0===e.reverseFillMask?"Reverse":"")];n.preventDefault(),t(r,i,a,n.shiftKey)}else 8===n.keyCode&&!0!==e.reverseFillMask&&i===a?T.left(r,i,a,!0):46===n.keyCode&&!0===e.reverseFillMask&&i===a&&T.rightReverse(r,i,a,!0)}function x(t){if(void 0===t||null===t||""===t)return"";if(!0===e.reverseFillMask)return I(t);const n=p;let r=0,i="";for(let e=0;e<n.length;e++){const o=t[r],s=n[e];if("string"===typeof s)i+=s,o===s&&r++;else{if(void 0===o||!s.regex.test(o))return i;i+=void 0!==s.transform?s.transform(o):o,r++}}return i}function I(e){const t=p,n=u.indexOf(d);let r=e.length-1,i="";for(let o=t.length-1;o>=0&&r>-1;o--){const s=t[o];let a=e[r];if("string"===typeof s)i=s+i,a===s&&r--;else{if(void 0===a||!s.regex.test(a))return i;do{i=(void 0!==s.transform?s.transform(a):a)+i,r--,a=e[r]}while(n===o&&void 0!==a&&s.regex.test(a))}}return i}function C(e){return"string"!==typeof e||void 0===m?"number"===typeof e?m(""+e):e:m(e)}function A(t){return f.length-t.length<=0?t:!0===e.reverseFillMask&&t.length>0?f.slice(0,-t.length)+t:t+f.slice(t.length)}return{innerValue:v,hasMask:g,moveCursorForPaste:S,updateMaskValue:E,onMaskedKeydown:k}}var m=n(9256),g=n(7915),v=n(7506);const y=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,b=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,w=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,_=/[a-z0-9_ -]$/i;function E(e){return function(t){if("compositionend"===t.type||"change"===t.type){if(!0!==t.target.qComposing)return;t.target.qComposing=!1,e(t)}else if("compositionupdate"===t.type&&!0!==t.target.qComposing&&"string"===typeof t.data){const e=!0===v.Lp.is.firefox?!1===_.test(t.data):!0===y.test(t.data)||!0===b.test(t.data)||!0===w.test(t.data);!0===e&&(t.target.qComposing=!0)}}}var S=n(5987),T=n(1384),k=n(7026),x=n(3251);const I=(0,S.L)({name:"QInput",inheritAttrs:!1,props:{...o.Cl,...f,...m.Fz,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...o.HJ,"paste","change","keydown","animationend"],setup(e,{emit:t,attrs:n}){const{proxy:s}=(0,r.FN)(),{$q:a}=s,l={};let u,c,h,d,f=NaN;const v=(0,i.iH)(null),y=(0,m.Do)(e),{innerValue:b,hasMask:w,moveCursorForPaste:_,updateMaskValue:S,onMaskedKeydown:I}=p(e,t,j,v),C=(0,g.Z)(e,!0),A=(0,r.Fl)((()=>(0,o.yV)(b.value))),R=E(U),O=(0,o.tL)(),N=(0,r.Fl)((()=>"textarea"===e.type||!0===e.autogrow)),L=(0,r.Fl)((()=>!0===N.value||["text","search","url","tel","password"].includes(e.type))),P=(0,r.Fl)((()=>{const t={...O.splitAttrs.listeners.value,onInput:U,onPaste:q,onChange:$,onBlur:z,onFocus:T.sT};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=R,!0===w.value&&(t.onKeydown=I),!0===e.autogrow&&(t.onAnimationend=V),t})),D=(0,r.Fl)((()=>{const t={tabindex:0,"data-autofocus":!0===e.autofocus||void 0,rows:"textarea"===e.type?6:void 0,"aria-label":e.label,name:y.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:!0===e.disable,readonly:!0===e.readonly};return!1===N.value&&(t.type=e.type),!0===e.autogrow&&(t.rows=1),t}));function F(){(0,k.jd)((()=>{const e=document.activeElement;null===v.value||v.value===e||null!==e&&e.id===O.targetUid.value||v.value.focus({preventScroll:!0})}))}function M(){null!==v.value&&v.value.select()}function q(n){if(!0===w.value&&!0!==e.reverseFillMask){const e=n.target;_(e,e.selectionStart,e.selectionEnd)}t("paste",n)}function U(n){if(!n||!n.target)return;if("file"===e.type)return void t("update:modelValue",n.target.files);const i=n.target.value;if(!0!==n.target.qComposing){if(!0===w.value)S(i,!1,n.inputType);else if(j(i),!0===L.value&&n.target===document.activeElement){const{selectionStart:e,selectionEnd:t}=n.target;void 0!==e&&void 0!==t&&(0,r.Y3)((()=>{n.target===document.activeElement&&0===i.indexOf(n.target.value)&&n.target.setSelectionRange(e,t)}))}!0===e.autogrow&&B()}else l.value=i}function V(e){t("animationend",e),B()}function j(n,i){d=()=>{"number"!==e.type&&!0===l.hasOwnProperty("value")&&delete l.value,e.modelValue!==n&&f!==n&&(f=n,!0===i&&(c=!0),t("update:modelValue",n),(0,r.Y3)((()=>{f===n&&(f=NaN)}))),d=void 0},"number"===e.type&&(u=!0,l.value=n),void 0!==e.debounce?(clearTimeout(h),l.value=n,h=setTimeout(d,e.debounce)):d()}function B(){requestAnimationFrame((()=>{const e=v.value;if(null!==e){const t=e.parentNode.style,{overflow:n}=e.style;!0!==a.platform.is.firefox&&(e.style.overflow="hidden"),e.style.height="1px",t.marginBottom=e.scrollHeight-1+"px",e.style.height=e.scrollHeight+"px",e.style.overflow=n,t.marginBottom=""}}))}function $(e){R(e),clearTimeout(h),void 0!==d&&d(),t("change",e.target.value)}function z(t){void 0!==t&&(0,T.sT)(t),clearTimeout(h),void 0!==d&&d(),u=!1,c=!1,delete l.value,"file"!==e.type&&setTimeout((()=>{null!==v.value&&(v.value.value=void 0!==b.value?b.value:"")}))}function H(){return!0===l.hasOwnProperty("value")?l.value:void 0!==b.value?b.value:""}(0,r.YP)((()=>e.type),(()=>{v.value&&(v.value.value=e.modelValue)})),(0,r.YP)((()=>e.modelValue),(t=>{if(!0===w.value){if(!0===c&&(c=!1,String(t)===f))return;S(t)}else b.value!==t&&(b.value=t,"number"===e.type&&!0===l.hasOwnProperty("value")&&(!0===u?u=!1:delete l.value));!0===e.autogrow&&(0,r.Y3)(B)})),(0,r.YP)((()=>e.autogrow),(e=>{!0===e?(0,r.Y3)(B):null!==v.value&&n.rows>0&&(v.value.style.height="auto")})),(0,r.YP)((()=>e.dense),(()=>{!0===e.autogrow&&(0,r.Y3)(B)})),(0,r.Jd)((()=>{z()})),(0,r.bv)((()=>{!0===e.autogrow&&B()})),Object.assign(O,{innerValue:b,fieldClass:(0,r.Fl)((()=>"q-"+(!0===N.value?"textarea":"input")+(!0===e.autogrow?" q-textarea--autogrow":""))),hasShadow:(0,r.Fl)((()=>"file"!==e.type&&"string"===typeof e.shadowText&&e.shadowText.length>0)),inputRef:v,emitValue:j,hasValue:A,floatingLabel:(0,r.Fl)((()=>!0===A.value||(0,o.yV)(e.displayValue))),getControl:()=>(0,r.h)(!0===N.value?"textarea":"input",{ref:v,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...D.value,...P.value,..."file"!==e.type?{value:H()}:C.value}),getShadowControl:()=>(0,r.h)("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(!0===N.value?"":" text-no-wrap")},[(0,r.h)("span",{class:"invisible"},H()),(0,r.h)("span",e.shadowText)])});const K=(0,o.ZP)(O);return Object.assign(s,{focus:F,select:M,getNativeElement:()=>v.value}),(0,x.g)(s,"nativeEl",(()=>v.value)),K}})},490:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});n(6890);var r=n(9835),i=n(499),o=n(8234),s=n(945),a=n(5987),l=n(2026),u=n(1384),c=n(1705);const h=(0,a.L)({name:"QItem",props:{...o.S,...s.$,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=(0,r.FN)(),h=(0,o.Z)(e,a),{hasLink:d,linkAttrs:f,linkClass:p,linkTag:m,navigateOnClick:g}=(0,s.Z)(),v=(0,i.iH)(null),y=(0,i.iH)(null),b=(0,r.Fl)((()=>!0===e.clickable||!0===d.value||"label"===e.tag)),w=(0,r.Fl)((()=>!0!==e.disable&&!0===b.value)),_=(0,r.Fl)((()=>"q-item q-item-type row no-wrap"+(!0===e.dense?" q-item--dense":"")+(!0===h.value?" q-item--dark":"")+(!0===d.value&&null===e.active?p.value:!0===e.active?" q-item--active"+(void 0!==e.activeClass?` ${e.activeClass}`:""):"")+(!0===e.disable?" disabled":"")+(!0===w.value?" q-item--clickable q-link cursor-pointer "+(!0===e.manualFocus?"q-manual-focusable":"q-focusable q-hoverable")+(!0===e.focused?" q-manual-focusable--focused":""):""))),E=(0,r.Fl)((()=>{if(void 0===e.insetLevel)return null;const t=!0===a.lang.rtl?"Right":"Left";return{["padding"+t]:16+56*e.insetLevel+"px"}}));function S(e){!0===w.value&&(null!==y.value&&(!0!==e.qKeyEvent&&document.activeElement===v.value?y.value.focus():document.activeElement===y.value&&v.value.focus()),g(e))}function T(e){if(!0===w.value&&!0===(0,c.So)(e,13)){(0,u.NS)(e),e.qKeyEvent=!0;const t=new MouseEvent("click",e);t.qKeyEvent=!0,v.value.dispatchEvent(t)}n("keyup",e)}function k(){const e=(0,l.Bl)(t.default,[]);return!0===w.value&&e.unshift((0,r.h)("div",{class:"q-focus-helper",tabindex:-1,ref:y})),e}return()=>{const t={ref:v,class:_.value,style:E.value,role:"listitem",onClick:S,onKeyup:T};return!0===w.value?(t.tabindex=e.tabindex||"0",Object.assign(t,f.value)):!0===b.value&&(t["aria-disabled"]="true"),(0,r.h)(m.value,t,k())}}})},3115:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9835),i=n(5987),o=n(2026);const s=(0,i.L)({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=(0,r.Fl)((()=>parseInt(e.lines,10))),i=(0,r.Fl)((()=>"q-item__label"+(!0===e.overline?" q-item__label--overline text-overline":"")+(!0===e.caption?" q-item__label--caption text-caption":"")+(!0===e.header?" q-item__label--header":"")+(1===n.value?" ellipsis":""))),s=(0,r.Fl)((()=>void 0!==e.lines&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null));return()=>(0,r.h)("div",{style:s.value,class:i.value},(0,o.KR)(t.default))}})},1233:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9835),i=n(5987),o=n(2026);const s=(0,i.L)({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-item__section column q-item__section--"+(!0===e.avatar||!0===e.side||!0===e.thumbnail?"side":"main")+(!0===e.top?" q-item__section--top justify-start":" justify-center")+(!0===e.avatar?" q-item__section--avatar":"")+(!0===e.thumbnail?" q-item__section--thumbnail":"")+(!0===e.noWrap?" q-item__section--nowrap":"")));return()=>(0,r.h)("div",{class:n.value},(0,o.KR)(t.default))}})},3246:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(9835),i=n(5987),o=n(8234),s=n(2026);const a=(0,i.L)({name:"QList",props:{...o.S,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=(0,r.FN)(),i=(0,o.Z)(e,n.proxy.$q),a=(0,r.Fl)((()=>"q-list"+(!0===e.bordered?" q-list--bordered":"")+(!0===e.dense?" q-list--dense":"")+(!0===e.separator?" q-list--separator":"")+(!0===i.value?" q-list--dark":"")+(!0===e.padding?" q-list--padding":"")));return()=>(0,r.h)(e.tag,{class:a.value},(0,s.KR)(t.default))}})},249:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(9835),i=n(499),o=n(7506),s=n(1868),a=n(883),l=n(5987),u=n(3701),c=n(2026),h=n(5439);const d=(0,l.L)({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=(0,r.FN)(),d=(0,i.iH)(null),f=(0,i.iH)(l.screen.height),p=(0,i.iH)(!0===e.container?0:l.screen.width),m=(0,i.iH)({position:0,direction:"down",inflectionPoint:0}),g=(0,i.iH)(0),v=(0,i.iH)(!0===o.uX.value?0:(0,u.np)()),y=(0,r.Fl)((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),b=(0,r.Fl)((()=>!1===e.container?{minHeight:l.screen.height+"px"}:null)),w=(0,r.Fl)((()=>0!==v.value?{[!0===l.lang.rtl?"left":"right"]:`${v.value}px`}:null)),_=(0,r.Fl)((()=>0!==v.value?{[!0===l.lang.rtl?"right":"left"]:0,[!0===l.lang.rtl?"left":"right"]:`-${v.value}px`,width:`calc(100% + ${v.value}px)`}:null));function E(t){if(!0===e.container||!0!==document.qScrollPrevented){const r={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};m.value=r,void 0!==e.onScroll&&n("scroll",r)}}function S(t){const{height:r,width:i}=t;let o=!1;f.value!==r&&(o=!0,f.value=r,void 0!==e.onScrollHeight&&n("scrollHeight",r),k()),p.value!==i&&(o=!0,p.value=i),!0===o&&void 0!==e.onResize&&n("resize",t)}function T({height:e}){g.value!==e&&(g.value=e,k())}function k(){if(!0===e.container){const e=f.value>g.value?(0,u.np)():0;v.value!==e&&(v.value=e)}}let x;const I={instances:{},view:(0,r.Fl)((()=>e.view)),isContainer:(0,r.Fl)((()=>e.container)),rootRef:d,height:f,containerHeight:g,scrollbarWidth:v,totalWidth:(0,r.Fl)((()=>p.value+v.value)),rows:(0,r.Fl)((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:(0,i.qj)({size:0,offset:0,space:!1}),right:(0,i.qj)({size:300,offset:0,space:!1}),footer:(0,i.qj)({size:0,offset:0,space:!1}),left:(0,i.qj)({size:300,offset:0,space:!1}),scroll:m,animate(){void 0!==x?clearTimeout(x):document.body.classList.add("q-body--layout-animate"),x=setTimeout((()=>{document.body.classList.remove("q-body--layout-animate"),x=void 0}),155)},update(e,t,n){I[e][t]=n}};if((0,r.JJ)(h.YE,I),(0,u.np)()>0){let C=null;const A=document.body;function R(){C=null,A.classList.remove("hide-scrollbar")}function O(){if(null===C){if(A.scrollHeight>l.screen.height)return;A.classList.add("hide-scrollbar")}else clearTimeout(C);C=setTimeout(R,300)}function N(e){null!==C&&"remove"===e&&(clearTimeout(C),R()),window[`${e}EventListener`]("resize",O)}(0,r.YP)((()=>!0!==e.container?"add":"remove"),N),!0!==e.container&&N("add"),(0,r.Ah)((()=>{N("remove")}))}return()=>{const n=(0,c.vs)(t.default,[(0,r.h)(s.Z,{onScroll:E}),(0,r.h)(a.Z,{onResize:S})]),i=(0,r.h)("div",{class:y.value,style:b.value,ref:!0===e.container?void 0:d,tabindex:-1},n);return!0===e.container?(0,r.h)("div",{class:"q-layout-container overflow-hidden",ref:d},[(0,r.h)(a.Z,{onResize:T}),(0,r.h)("div",{class:"absolute-full",style:w.value},[(0,r.h)("div",{class:"scroll",style:_.value},[i])])]):i}}})},8289:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(9665);var r=n(9835),i=n(8234),o=n(244),s=n(5987),a=n(2026);const l={xs:2,sm:4,md:6,lg:10,xl:14};function u(e,t,n){return{transform:!0===t?`translateX(${!0===n.lang.rtl?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}const c=(0,s.L)({name:"QLinearProgress",props:{...i.S,...o.LU,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:t}){const{proxy:n}=(0,r.FN)(),s=(0,i.Z)(e,n.$q),c=(0,o.ZP)(e,l),h=(0,r.Fl)((()=>!0===e.indeterminate||!0===e.query)),d=(0,r.Fl)((()=>e.reverse!==e.query)),f=(0,r.Fl)((()=>({...null!==c.value?c.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`}))),p=(0,r.Fl)((()=>"q-linear-progress"+(void 0!==e.color?` text-${e.color}`:"")+(!0===e.reverse||!0===e.query?" q-linear-progress--reverse":"")+(!0===e.rounded?" rounded-borders":""))),m=(0,r.Fl)((()=>u(void 0!==e.buffer?e.buffer:1,d.value,n.$q))),g=(0,r.Fl)((()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${!0===e.instantFeedback?"out":""}-transition q-linear-progress__track--`+(!0===s.value?"dark":"light")+(void 0!==e.trackColor?` bg-${e.trackColor}`:""))),v=(0,r.Fl)((()=>u(!0===h.value?1:e.value,d.value,n.$q))),y=(0,r.Fl)((()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${!0===e.instantFeedback?"out":""}-transition q-linear-progress__model--${!0===h.value?"in":""}determinate`)),b=(0,r.Fl)((()=>({width:100*e.value+"%"}))),w=(0,r.Fl)((()=>"q-linear-progress__stripe absolute-"+(!0===e.reverse?"right":"left")));return()=>{const n=[(0,r.h)("div",{class:g.value,style:m.value}),(0,r.h)("div",{class:y.value,style:v.value})];return!0===e.stripe&&!1===h.value&&n.push((0,r.h)("div",{class:w.value,style:b.value})),(0,r.h)("div",{class:p.value,style:f.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":!0===e.indeterminate?void 0:e.value},(0,a.vs)(t.default,n))}}})},6362:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(9835),i=n(499),o=n(1957),s=n(4397),a=n(4088),l=n(3842),u=n(8234),c=n(2306),h=n(431),d=n(6916),f=n(2695),p=n(5987),m=n(2909),g=n(3701),v=n(1384),y=n(2026),b=n(6532),w=n(4173),_=n(223),E=n(9092),S=n(7026),T=n(9388);const k=(0,p.L)({name:"QMenu",inheritAttrs:!1,props:{...s.u,...l.vr,...u.S,...h.D,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:T.$},self:{type:String,validator:T.$},offset:{type:Array,validator:T.io},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...l.gH,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:p}){let k,x,I,C=null;const A=(0,r.FN)(),{proxy:R}=A,{$q:O}=R,N=(0,i.iH)(null),L=(0,i.iH)(!1),P=(0,r.Fl)((()=>!0!==e.persistent&&!0!==e.noRouteDismiss)),D=(0,u.Z)(e,O),{registerTick:F,removeTick:M}=(0,d.Z)(),{registerTimeout:q}=(0,f.Z)(),{transitionProps:U,transitionStyle:V}=(0,h.Z)(e),{localScrollTarget:j,changeScrollEvent:B,unconfigureScrollTarget:$}=(0,a.Z)(e,se),{anchorEl:z,canShow:H}=(0,s.Z)({showing:L}),{hide:K}=(0,l.ZP)({showing:L,canShow:H,handleShow:re,handleHide:ie,hideOnRouteChange:P,processOnMount:!0}),{showPortal:W,hidePortal:G,renderPortal:J}=(0,c.Z)(A,N,he),Q={anchorEl:z,innerRef:N,onClickOutside(t){if(!0!==e.persistent&&!0===L.value)return K(t),("touchstart"===t.type||t.target.classList.contains("q-dialog__backdrop"))&&(0,v.NS)(t),!0}},Z=(0,r.Fl)((()=>(0,T.li)(e.anchor||(!0===e.cover?"center middle":"bottom start"),O.lang.rtl))),Y=(0,r.Fl)((()=>!0===e.cover?Z.value:(0,T.li)(e.self||"top start",O.lang.rtl))),X=(0,r.Fl)((()=>(!0===e.square?" q-menu--square":"")+(!0===D.value?" q-menu--dark q-dark":""))),ee=(0,r.Fl)((()=>!0===e.autoClose?{onClick:ae}:{})),te=(0,r.Fl)((()=>!0===L.value&&!0!==e.persistent));function ne(){(0,S.jd)((()=>{let e=N.value;e&&!0!==e.contains(document.activeElement)&&(e=e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||e.querySelector("[autofocus], [data-autofocus]")||e,e.focus({preventScroll:!0}))}))}function re(t){if(C=!1===e.noRefocus?document.activeElement:null,(0,w.i)(le),W(),se(),k=void 0,void 0!==t&&(e.touchPosition||e.contextMenu)){const e=(0,v.FK)(t);if(void 0!==e.left){const{top:t,left:n}=z.value.getBoundingClientRect();k={left:e.left-n,top:e.top-t}}}void 0===x&&(x=(0,r.YP)((()=>O.screen.width+"|"+O.screen.height+"|"+e.self+"|"+e.anchor+"|"+O.lang.rtl),ce)),!0!==e.noFocus&&document.activeElement.blur(),F((()=>{ce(),!0!==e.noFocus&&ne()})),q((()=>{!0===O.platform.is.ios&&(I=e.autoClose,N.value.click()),ce(),W(!0),n("show",t)}),e.transitionDuration)}function ie(t){M(),G(),oe(!0),null===C||void 0!==t&&!0===t.qClickOutside||(((t&&0===t.type.indexOf("key")?C.closest('[tabindex]:not([tabindex^="-"])'):void 0)||C).focus(),C=null),q((()=>{G(!0),n("hide",t)}),e.transitionDuration)}function oe(e){k=void 0,void 0!==x&&(x(),x=void 0),!0!==e&&!0!==L.value||((0,w.H)(le),$(),(0,E.D)(Q),(0,b.k)(ue)),!0!==e&&(C=null)}function se(){null===z.value&&void 0===e.scrollTarget||(j.value=(0,g.b0)(z.value,e.scrollTarget),B(j.value,ce))}function ae(e){!0!==I?((0,m.AH)(R,e),n("click",e)):I=!1}function le(t){!0===te.value&&!0!==e.noFocus&&!0!==(0,_.mY)(N.value,t.target)&&ne()}function ue(e){n("escapeKey"),K(e)}function ce(){const t=N.value;null!==t&&null!==z.value&&(0,T.wq)({el:t,offset:e.offset,anchorEl:z.value,anchorOrigin:Z.value,selfOrigin:Y.value,absoluteOffset:k,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function he(){return(0,r.h)(o.uT,U.value,(()=>!0===L.value?(0,r.h)("div",{role:"menu",...p,ref:N,tabindex:-1,class:["q-menu q-position-engine scroll"+X.value,p.class],style:[p.style,V.value],...ee.value},(0,y.KR)(t.default)):null))}return(0,r.YP)(te,(e=>{!0===e?((0,b.c)(ue),(0,E.m)(Q)):((0,b.k)(ue),(0,E.D)(Q))})),(0,r.Jd)(oe),Object.assign(R,{focus:ne,updatePosition:ce}),J}})},627:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(5987),i=(n(6727),n(9835)),o=n(2026),s=n(5439);const a={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>2===e.length},expand:Boolean};function l(){const{props:e,proxy:{$q:t}}=(0,i.FN)(),n=(0,i.f3)(s.YE,s.qO);if(n===s.qO)return console.error("QPageSticky needs to be child of QLayout"),s.qO;const r=(0,i.Fl)((()=>{const t=e.position;return{top:t.indexOf("top")>-1,right:t.indexOf("right")>-1,bottom:t.indexOf("bottom")>-1,left:t.indexOf("left")>-1,vertical:"top"===t||"bottom"===t,horizontal:"left"===t||"right"===t}})),a=(0,i.Fl)((()=>n.header.offset)),l=(0,i.Fl)((()=>n.right.offset)),u=(0,i.Fl)((()=>n.footer.offset)),c=(0,i.Fl)((()=>n.left.offset)),h=(0,i.Fl)((()=>{let n=0,i=0;const o=r.value,s=!0===t.lang.rtl?-1:1;!0===o.top&&0!==a.value?i=`${a.value}px`:!0===o.bottom&&0!==u.value&&(i=-u.value+"px"),!0===o.left&&0!==c.value?n=s*c.value+"px":!0===o.right&&0!==l.value&&(n=-s*l.value+"px");const h={transform:`translate(${n}, ${i})`};return e.offset&&(h.margin=`${e.offset[1]}px ${e.offset[0]}px`),!0===o.vertical?(0!==c.value&&(h[!0===t.lang.rtl?"right":"left"]=`${c.value}px`),0!==l.value&&(h[!0===t.lang.rtl?"left":"right"]=`${l.value}px`)):!0===o.horizontal&&(0!==a.value&&(h.top=`${a.value}px`),0!==u.value&&(h.bottom=`${u.value}px`)),h})),d=(0,i.Fl)((()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--`+(!0===e.expand?"expand":"shrink")));function f(t){const n=(0,o.KR)(t.default);return(0,i.h)("div",{class:d.value,style:h.value},!0===e.expand?n:[(0,i.h)("div",n)])}return{$layout:n,getStickyContent:f}}const u=(0,r.L)({name:"QPageSticky",props:a,setup(e,{slots:t}){const{getStickyContent:n}=l();return()=>n(t)}})},9885:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(9835),i=n(5987),o=n(2026),s=n(5439);const a=(0,i.L)({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),i=(0,r.f3)(s.YE,s.qO);if(i===s.qO)return console.error("QPage needs to be a deep child of QLayout"),s.qO;const a=(0,r.f3)(s.Mw,s.qO);if(a===s.qO)return console.error("QPage needs to be child of QPageContainer"),s.qO;const l=(0,r.Fl)((()=>{const t=(!0===i.header.space?i.header.size:0)+(!0===i.footer.space?i.footer.size:0);if("function"===typeof e.styleFn){const r=!0===i.isContainer.value?i.containerHeight.value:n.screen.height;return e.styleFn(t,r)}return{minHeight:!0===i.isContainer.value?i.containerHeight.value-t+"px":0===n.screen.height?0!==t?`calc(100vh - ${t}px)`:"100vh":n.screen.height-t+"px"}})),u=(0,r.Fl)((()=>"q-page"+(!0===e.padding?" q-layout-padding":"")));return()=>(0,r.h)("main",{class:u.value,style:l.value},(0,o.KR)(t.default))}})},2133:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(9835),i=n(5987),o=n(2026),s=n(5439);const a=(0,i.L)({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),i=(0,r.f3)(s.YE,s.qO);if(i===s.qO)return console.error("QPageContainer needs to be child of QLayout"),s.qO;(0,r.JJ)(s.Mw,!0);const a=(0,r.Fl)((()=>{const e={};return!0===i.header.space&&(e.paddingTop=`${i.header.size}px`),!0===i.right.space&&(e["padding"+(!0===n.lang.rtl?"Left":"Right")]=`${i.right.size}px`),!0===i.footer.space&&(e.paddingBottom=`${i.footer.size}px`),!0===i.left.space&&(e["padding"+(!0===n.lang.rtl?"Right":"Left")]=`${i.left.size}px`),e}));return()=>(0,r.h)("div",{class:"q-page-container",style:a.value},(0,o.KR)(t.default))}})},883:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(9835),i=n(499),o=n(7506);function s(){const e=(0,i.iH)(!o.uX.value);return!1===e.value&&(0,r.bv)((()=>{e.value=!0})),e}var a=n(5987),l=n(1384);const u="undefined"!==typeof ResizeObserver,c=!0===u?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},h=(0,a.L)({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n,i=null,o={width:-1,height:-1};function a(t){!0===t||0===e.debounce||"0"===e.debounce?h():null===i&&(i=setTimeout(h,e.debounce))}function h(){if(clearTimeout(i),i=null,n){const{offsetWidth:e,offsetHeight:r}=n;e===o.width&&r===o.height||(o={width:e,height:r},t("resize",o))}}const{proxy:d}=(0,r.FN)();if(!0===u){let f;const p=e=>{n=d.$el.parentNode,n?(f=new ResizeObserver(a),f.observe(n),h()):!0!==e&&(0,r.Y3)((()=>{p(!0)}))};return(0,r.bv)((()=>{p()})),(0,r.Jd)((()=>{clearTimeout(i),void 0!==f&&(void 0!==f.disconnect?f.disconnect():n&&f.unobserve(n))})),l.ZT}{const m=s();let g;function v(){clearTimeout(i),void 0!==g&&(void 0!==g.removeEventListener&&g.removeEventListener("resize",a,l.rU.passive),g=void 0)}function y(){v(),n&&n.contentDocument&&(g=n.contentDocument.defaultView,g.addEventListener("resize",a,l.rU.passive),h())}return(0,r.bv)((()=>{(0,r.Y3)((()=>{n=d.$el,n&&y()}))})),(0,r.Jd)(v),d.trigger=a,()=>{if(!0===m.value)return(0,r.h)("object",{style:c.style,tabindex:-1,type:"text/html",data:c.url,"aria-hidden":"true",onLoad:y})}}}})},6663:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});n(6727);var r=n(499),i=n(9835),o=n(8234),s=n(883),a=n(1868),l=n(9714),u=n(5987),c=n(321),h=n(3701),d=n(2026),f=n(899);const p=["vertical","horizontal"],m={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},g={prevent:!0,mouse:!0,mouseAllDir:!0},v=e=>e>=250?50:Math.ceil(e/5),y=(0,u.L)({name:"QScrollArea",props:{...o.S,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:t,emit:n}){const u=(0,r.iH)(!1),y=(0,r.iH)(!1),b=(0,r.iH)(!1),w={vertical:(0,r.iH)(0),horizontal:(0,r.iH)(0)},_={vertical:{ref:(0,r.iH)(null),position:(0,r.iH)(0),size:(0,r.iH)(0)},horizontal:{ref:(0,r.iH)(null),position:(0,r.iH)(0),size:(0,r.iH)(0)}},{proxy:E}=(0,i.FN)(),S=(0,o.Z)(e,E.$q);let T,k;const x=(0,r.iH)(null),I=(0,i.Fl)((()=>"q-scrollarea"+(!0===S.value?" q-scrollarea--dark":"")));_.vertical.percentage=(0,i.Fl)((()=>{const e=_.vertical.size.value-w.vertical.value;if(e<=0)return 0;const t=(0,c.vX)(_.vertical.position.value/e,0,1);return Math.round(1e4*t)/1e4})),_.vertical.thumbHidden=(0,i.Fl)((()=>!0!==(null===e.visible?b.value:e.visible)&&!1===u.value&&!1===y.value||_.vertical.size.value<=w.vertical.value+1)),_.vertical.thumbStart=(0,i.Fl)((()=>_.vertical.percentage.value*(w.vertical.value-_.vertical.thumbSize.value))),_.vertical.thumbSize=(0,i.Fl)((()=>Math.round((0,c.vX)(w.vertical.value*w.vertical.value/_.vertical.size.value,v(w.vertical.value),w.vertical.value)))),_.vertical.style=(0,i.Fl)((()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${_.vertical.thumbStart.value}px`,height:`${_.vertical.thumbSize.value}px`}))),_.vertical.thumbClass=(0,i.Fl)((()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(!0===_.vertical.thumbHidden.value?" q-scrollarea__thumb--invisible":""))),_.vertical.barClass=(0,i.Fl)((()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(!0===_.vertical.thumbHidden.value?" q-scrollarea__bar--invisible":""))),_.horizontal.percentage=(0,i.Fl)((()=>{const e=_.horizontal.size.value-w.horizontal.value;if(e<=0)return 0;const t=(0,c.vX)(Math.abs(_.horizontal.position.value)/e,0,1);return Math.round(1e4*t)/1e4})),_.horizontal.thumbHidden=(0,i.Fl)((()=>!0!==(null===e.visible?b.value:e.visible)&&!1===u.value&&!1===y.value||_.horizontal.size.value<=w.horizontal.value+1)),_.horizontal.thumbStart=(0,i.Fl)((()=>_.horizontal.percentage.value*(w.horizontal.value-_.horizontal.thumbSize.value))),_.horizontal.thumbSize=(0,i.Fl)((()=>Math.round((0,c.vX)(w.horizontal.value*w.horizontal.value/_.horizontal.size.value,v(w.horizontal.value),w.horizontal.value)))),_.horizontal.style=(0,i.Fl)((()=>({...e.thumbStyle,...e.horizontalThumbStyle,[!0===E.$q.lang.rtl?"right":"left"]:`${_.horizontal.thumbStart.value}px`,width:`${_.horizontal.thumbSize.value}px`}))),_.horizontal.thumbClass=(0,i.Fl)((()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(!0===_.horizontal.thumbHidden.value?" q-scrollarea__thumb--invisible":""))),_.horizontal.barClass=(0,i.Fl)((()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(!0===_.horizontal.thumbHidden.value?" q-scrollarea__bar--invisible":"")));const C=(0,i.Fl)((()=>!0===_.vertical.thumbHidden.value&&!0===_.horizontal.thumbHidden.value?e.contentStyle:e.contentActiveStyle)),A=[[l.Z,e=>{M(e,"vertical")},void 0,{vertical:!0,...g}]],R=[[l.Z,e=>{M(e,"horizontal")},void 0,{horizontal:!0,...g}]];function O(){const e={};return p.forEach((t=>{const n=_[t];e[t+"Position"]=n.position.value,e[t+"Percentage"]=n.percentage.value,e[t+"Size"]=n.size.value,e[t+"ContainerSize"]=w[t].value})),e}const N=(0,f.Z)((()=>{const e=O();e.ref=E,n("scroll",e)}),0);function L(e,t,n){if(!1===p.includes(e))return void console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");const r="vertical"===e?h.f3:h.ik;r(x.value,t,n)}function P({height:e,width:t}){let n=!1;w.vertical.value!==e&&(w.vertical.value=e,n=!0),w.horizontal.value!==t&&(w.horizontal.value=t,n=!0),!0===n&&j()}function D({position:e}){let t=!1;_.vertical.position.value!==e.top&&(_.vertical.position.value=e.top,t=!0),_.horizontal.position.value!==e.left&&(_.horizontal.position.value=e.left,t=!0),!0===t&&j()}function F({height:e,width:t}){_.horizontal.size.value!==t&&(_.horizontal.size.value=t,j()),_.vertical.size.value!==e&&(_.vertical.size.value=e,j())}function M(e,t){const n=_[t];if(!0===e.isFirst){if(!0===n.thumbHidden.value)return;k=n.position.value,y.value=!0}else if(!0!==y.value)return;!0===e.isFinal&&(y.value=!1);const r=m[t],i=w[t].value,o=(n.size.value-i)/(i-n.thumbSize.value),s=e.distance[r.dist],a=k+(e.direction===r.dir?1:-1)*s*o;B(a,t)}function q(e,t){const n=_[t];if(!0!==n.thumbHidden.value){const r=e[m[t].offset];if(r<n.thumbStart.value||r>n.thumbStart.value+n.thumbSize.value){const e=r-n.thumbSize.value/2;B(e/w[t].value*n.size.value,t)}null!==n.ref.value&&n.ref.value.dispatchEvent(new MouseEvent(e.type,e))}}function U(e){q(e,"vertical")}function V(e){q(e,"horizontal")}function j(){!0===u.value?clearTimeout(T):u.value=!0,T=setTimeout((()=>{u.value=!1}),e.delay),void 0!==e.onScroll&&N()}function B(e,t){x.value[m[t].scroll]=e}function $(){b.value=!0}function z(){b.value=!1}let H=null;return(0,i.YP)((()=>E.$q.lang.rtl),(e=>{null!==x.value&&(0,h.ik)(x.value,Math.abs(_.horizontal.position.value)*(!0===e?-1:1))})),(0,i.se)((()=>{H={top:_.vertical.position.value,left:_.horizontal.position.value}})),(0,i.dl)((()=>{if(null===H)return;const e=x.value;null!==e&&((0,h.ik)(e,H.left),(0,h.f3)(e,H.top))})),(0,i.Jd)(N.cancel),Object.assign(E,{getScrollTarget:()=>x.value,getScroll:O,getScrollPosition:()=>({top:_.vertical.position.value,left:_.horizontal.position.value}),getScrollPercentage:()=>({top:_.vertical.percentage.value,left:_.horizontal.percentage.value}),setScrollPosition:L,setScrollPercentage(e,t,n){L(e,t*(_[e].size.value-w[e].value)*("horizontal"===e&&!0===E.$q.lang.rtl?-1:1),n)}}),()=>(0,i.h)("div",{class:I.value,onMouseenter:$,onMouseleave:z},[(0,i.h)("div",{ref:x,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:void 0!==e.tabindex?e.tabindex:void 0},[(0,i.h)("div",{class:"q-scrollarea__content absolute",style:C.value},(0,d.vs)(t.default,[(0,i.h)(s.Z,{debounce:0,onResize:F})])),(0,i.h)(a.Z,{axis:"both",onScroll:D})]),(0,i.h)(s.Z,{debounce:0,onResize:P}),(0,i.h)("div",{class:_.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:U}),(0,i.h)("div",{class:_.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:V}),(0,i.wy)((0,i.h)("div",{ref:_.vertical.ref,class:_.vertical.thumbClass.value,style:_.vertical.style.value,"aria-hidden":"true"}),A),(0,i.wy)((0,i.h)("div",{ref:_.horizontal.ref,class:_.horizontal.thumbClass.value,style:_.horizontal.style.value,"aria-hidden":"true"}),R)])}})},1868:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});n(6727);var r=n(9835),i=n(5987),o=n(3701),s=n(1384);const{passive:a}=s.rU,l=["both","horizontal","vertical"],u=(0,i.L)({name:"QScrollObserver",props:{axis:{type:String,validator:e=>l.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i,l,u=null;function c(){null!==u&&u();const r=Math.max(0,(0,o.u3)(i)),s=(0,o.OI)(i),a={top:r-n.position.top,left:s-n.position.left};if("vertical"===e.axis&&0===a.top||"horizontal"===e.axis&&0===a.left)return;const l=Math.abs(a.top)>=Math.abs(a.left)?a.top<0?"up":"down":a.left<0?"left":"right";n.position={top:r,left:s},n.directionChanged=n.direction!==l,n.delta=a,!0===n.directionChanged&&(n.direction=l,n.inflectionPoint=n.position),t("scroll",{...n})}function h(){i=(0,o.b0)(l,e.scrollTarget),i.addEventListener("scroll",f,a),f(!0)}function d(){void 0!==i&&(i.removeEventListener("scroll",f,a),i=void 0)}function f(t){if(!0===t||0===e.debounce||"0"===e.debounce)c();else if(null===u){const[t,n]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];u=()=>{n(t),u=null}}}(0,r.YP)((()=>e.scrollTarget),(()=>{d(),h()}));const{proxy:p}=(0,r.FN)();return(0,r.YP)((()=>p.$q.lang.rtl),c),(0,r.bv)((()=>{l=p.$el.parentNode,h()})),(0,r.Jd)((()=>{null!==u&&u(),d()})),Object.assign(p,{trigger:f,getPosition:()=>n}),s.ZT}})},926:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(9835),i=n(8234),o=n(5987);const s={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},a={xs:2,sm:4,md:8,lg:16,xl:24},l=(0,o.L)({name:"QSeparator",props:{...i.S,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=(0,r.FN)(),n=(0,i.Z)(e,t.proxy.$q),o=(0,r.Fl)((()=>!0===e.vertical?"vertical":"horizontal")),l=(0,r.Fl)((()=>` q-separator--${o.value}`)),u=(0,r.Fl)((()=>!1!==e.inset?`${l.value}-${s[e.inset]}`:"")),c=(0,r.Fl)((()=>`q-separator${l.value}${u.value}`+(void 0!==e.color?` bg-${e.color}`:"")+(!0===n.value?" q-separator--dark":""))),h=(0,r.Fl)((()=>{const t={};if(void 0!==e.size&&(t[!0===e.vertical?"width":"height"]=e.size),!1!==e.spaced){const n=!0===e.spaced?`${a.md}px`:e.spaced in a?`${a[e.spaced]}px`:e.spaced,r=!0===e.vertical?["Left","Right"]:["Top","Bottom"];t[`margin${r[0]}`]=t[`margin${r[1]}`]=n}return t}));return()=>(0,r.h)("hr",{class:c.value,style:h.value,"aria-orientation":o.value})}})},136:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9835),i=n(5987);const o=(0,r.h)("div",{class:"q-space"}),s=(0,i.L)({name:"QSpace",setup(){return()=>o}})},3940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(9835),i=n(244);const o={size:{type:[Number,String],default:"1em"},color:String};function s(e){return{cSize:(0,r.Fl)((()=>e.size in i.Ok?`${i.Ok[e.size]}px`:e.size)),classes:(0,r.Fl)((()=>"q-spinner"+(e.color?` text-${e.color}`:"")))}}var a=n(5987);const l=(0,a.L)({name:"QSpinner",props:{...o,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=s(e);return()=>(0,r.h)("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[(0,r.h)("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}})},1663:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9835),i=n(5987),o=n(2026);const s=(0,i.L)({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-toolbar row no-wrap items-center"+(!0===e.inset?" q-toolbar--inset":"")));return()=>(0,r.h)("div",{class:n.value,role:"toolbar"},(0,o.KR)(t.default))}})},1973:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9835),i=n(5987),o=n(2026);const s=(0,i.L)({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-toolbar__title ellipsis"+(!0===e.shrink?" col-shrink":"")));return()=>(0,r.h)("div",{class:n.value},(0,o.KR)(t.default))}})},6858:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(9835),i=n(499),o=n(1957),s=n(4397),a=n(4088),l=n(3842),u=n(2306),c=n(431),h=n(6916),d=n(2695),f=n(5987),p=n(3701),m=n(1384),g=n(2589),v=n(2026),y=n(9092),b=n(9388);const w=(0,f.L)({name:"QTooltip",inheritAttrs:!1,props:{...s.u,...l.vr,...c.D,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:b.$},self:{type:String,default:"top middle",validator:b.$},offset:{type:Array,default:()=>[14,14],validator:b.io},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...l.gH],setup(e,{slots:t,emit:n,attrs:f}){let w,_;const E=(0,r.FN)(),{proxy:{$q:S}}=E,T=(0,i.iH)(null),k=(0,i.iH)(!1),x=(0,r.Fl)((()=>(0,b.li)(e.anchor,S.lang.rtl))),I=(0,r.Fl)((()=>(0,b.li)(e.self,S.lang.rtl))),C=(0,r.Fl)((()=>!0!==e.persistent)),{registerTick:A,removeTick:R}=(0,h.Z)(),{registerTimeout:O}=(0,d.Z)(),{transitionProps:N,transitionStyle:L}=(0,c.Z)(e),{localScrollTarget:P,changeScrollEvent:D,unconfigureScrollTarget:F}=(0,a.Z)(e,Y),{anchorEl:M,canShow:q,anchorEvents:U}=(0,s.Z)({showing:k,configureAnchorEl:Z}),{show:V,hide:j}=(0,l.ZP)({showing:k,canShow:q,handleShow:H,handleHide:K,hideOnRouteChange:C,processOnMount:!0});Object.assign(U,{delayShow:J,delayHide:Q});const{showPortal:B,hidePortal:$,renderPortal:z}=(0,u.Z)(E,T,ee);if(!0===S.platform.is.mobile){const t={anchorEl:M,innerRef:T,onClickOutside(e){return j(e),e.target.classList.contains("q-dialog__backdrop")&&(0,m.NS)(e),!0}},n=(0,r.Fl)((()=>null===e.modelValue&&!0!==e.persistent&&!0===k.value));(0,r.YP)(n,(e=>{const n=!0===e?y.m:y.D;n(t)})),(0,r.Jd)((()=>{(0,y.D)(t)}))}function H(t){B(),A((()=>{_=new MutationObserver((()=>G())),_.observe(T.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),G(),Y()})),void 0===w&&(w=(0,r.YP)((()=>S.screen.width+"|"+S.screen.height+"|"+e.self+"|"+e.anchor+"|"+S.lang.rtl),G)),O((()=>{B(!0),n("show",t)}),e.transitionDuration)}function K(t){R(),$(),W(),O((()=>{$(!0),n("hide",t)}),e.transitionDuration)}function W(){void 0!==_&&(_.disconnect(),_=void 0),void 0!==w&&(w(),w=void 0),F(),(0,m.ul)(U,"tooltipTemp")}function G(){const t=T.value;null!==M.value&&t&&(0,b.wq)({el:t,offset:e.offset,anchorEl:M.value,anchorOrigin:x.value,selfOrigin:I.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(t){if(!0===S.platform.is.mobile){(0,g.M)(),document.body.classList.add("non-selectable");const e=M.value,t=["touchmove","touchcancel","touchend","click"].map((t=>[e,t,"delayHide","passiveCapture"]));(0,m.M0)(U,"tooltipTemp",t)}O((()=>{V(t)}),e.delay)}function Q(t){!0===S.platform.is.mobile&&((0,m.ul)(U,"tooltipTemp"),(0,g.M)(),setTimeout((()=>{document.body.classList.remove("non-selectable")}),10)),O((()=>{j(t)}),e.hideDelay)}function Z(){if(!0===e.noParentEvent||null===M.value)return;const t=!0===S.platform.is.mobile?[[M.value,"touchstart","delayShow","passive"]]:[[M.value,"mouseenter","delayShow","passive"],[M.value,"mouseleave","delayHide","passive"]];(0,m.M0)(U,"anchor",t)}function Y(){if(null!==M.value||void 0!==e.scrollTarget){P.value=(0,p.b0)(M.value,e.scrollTarget);const t=!0===e.noParentEvent?G:j;D(P.value,t)}}function X(){return!0===k.value?(0,r.h)("div",{...f,ref:T,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",f.class],style:[f.style,L.value],role:"tooltip"},(0,v.KR)(t.default)):null}function ee(){return(0,r.h)(o.uT,N.value,X)}return(0,r.Jd)(W),Object.assign(E.proxy,{updatePosition:G}),z}})},5065:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a,jO:()=>s});n(6727);var r=n(9835);const i={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},o=Object.keys(i),s={align:{type:String,validator:e=>o.includes(e)}};function a(e){return(0,r.Fl)((()=>{const t=void 0===e.align?!0===e.vertical?"stretch":"left":e.align;return`${!0===e.vertical?"items":"justify"}-${i[t]}`}))}},4397:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u,u:()=>l});var r=n(9835),i=n(499),o=n(2589),s=n(1384),a=n(1705);const l={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function u({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:l,proxy:u,emit:c}=(0,r.FN)(),h=(0,i.iH)(null);let d;function f(e){return null!==h.value&&(void 0===e||void 0===e.touches||e.touches.length<=1)}const p={};function m(){(0,s.ul)(p,"anchor")}function g(e){h.value=e;while(h.value.classList.contains("q-anchor--skip"))h.value=h.value.parentNode;n()}function v(){if(!1===l.target||""===l.target||null===u.$el.parentNode)h.value=null;else if(!0===l.target)g(u.$el.parentNode);else{let t=l.target;if("string"===typeof l.target)try{t=document.querySelector(l.target)}catch(e){t=void 0}void 0!==t&&null!==t?(h.value=t.$el||t,n()):(h.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return void 0===n&&(Object.assign(p,{hide(e){u.hide(e)},toggle(e){u.toggle(e),e.qAnchorHandled=!0},toggleKey(e){!0===(0,a.So)(e,13)&&p.toggle(e)},contextClick(e){u.hide(e),(0,s.X$)(e),(0,r.Y3)((()=>{u.show(e),e.qAnchorHandled=!0}))},prevent:s.X$,mobileTouch(e){if(p.mobileCleanup(e),!0!==f(e))return;u.hide(e),h.value.classList.add("non-selectable");const t=e.target;(0,s.M0)(p,"anchor",[[t,"touchmove","mobileCleanup","passive"],[t,"touchend","mobileCleanup","passive"],[t,"touchcancel","mobileCleanup","passive"],[h.value,"contextmenu","prevent","notPassive"]]),d=setTimeout((()=>{u.show(e),e.qAnchorHandled=!0}),300)},mobileCleanup(t){h.value.classList.remove("non-selectable"),clearTimeout(d),!0===e.value&&void 0!==t&&(0,o.M)()}}),n=function(e=l.contextMenu){if(!0===l.noParentEvent||null===h.value)return;let t;t=!0===e?!0===u.$q.platform.is.mobile?[[h.value,"touchstart","mobileTouch","passive"]]:[[h.value,"mousedown","hide","passive"],[h.value,"contextmenu","contextClick","notPassive"]]:[[h.value,"click","toggle","passive"],[h.value,"keyup","toggleKey","passive"]],(0,s.M0)(p,"anchor",t)}),(0,r.YP)((()=>l.contextMenu),(e=>{null!==h.value&&(m(),n(e))})),(0,r.YP)((()=>l.target),(()=>{null!==h.value&&m(),v()})),(0,r.YP)((()=>l.noParentEvent),(e=>{null!==h.value&&(!0===e?m():n())})),(0,r.bv)((()=>{v(),!0!==t&&!0===l.modelValue&&null===h.value&&c("update:modelValue",!1)})),(0,r.Jd)((()=>{clearTimeout(d),m()})),{anchorEl:h,canShow:f,anchorEvents:p}}},8234:(e,t,n)=>{"use strict";n.d(t,{S:()=>i,Z:()=>o});var r=n(9835);const i={dark:{type:Boolean,default:null}};function o(e,t){return(0,r.Fl)((()=>null===e.dark?t.dark.isActive:e.dark))}},3167:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>U,yV:()=>D,HJ:()=>M,Cl:()=>F,tL:()=>q});n(9665);var r=n(9835),i=n(499),o=n(1957),s=n(7506),a=n(2857),l=n(3940),u=n(8234),c=(n(6727),n(5439));function h({validate:e,resetValidation:t,requiresQForm:n}){const i=(0,r.f3)(c.vh,!1);if(!1!==i){const{props:n,proxy:o}=(0,r.FN)();Object.assign(o,{validate:e,resetValidation:t}),(0,r.YP)((()=>n.disable),(e=>{!0===e?("function"===typeof t&&t(),i.unbindComponent(o)):i.bindComponent(o)})),(0,r.bv)((()=>{!0!==n.disable&&i.bindComponent(o)})),(0,r.Jd)((()=>{!0!==n.disable&&i.unbindComponent(o)}))}else!0===n&&console.error("Parent QForm not found on useFormChild()!")}const d=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,f=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,p=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,m=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,g=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,v={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>d.test(e),hexaColor:e=>f.test(e),hexOrHexaColor:e=>p.test(e),rgbColor:e=>m.test(e),rgbaColor:e=>g.test(e),rgbOrRgbaColor:e=>m.test(e)||g.test(e),hexOrRgbColor:e=>d.test(e)||m.test(e),hexaOrRgbaColor:e=>f.test(e)||g.test(e),anyColor:e=>p.test(e)||m.test(e)||g.test(e)};var y=n(899),b=n(3251);const w=[!0,!1,"ondemand"],_={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>w.includes(e)}};function E(e,t){const{props:n,proxy:o}=(0,r.FN)(),s=(0,i.iH)(!1),a=(0,i.iH)(null),l=(0,i.iH)(null);h({validate:w,resetValidation:g});let u,c=0;const d=(0,r.Fl)((()=>void 0!==n.rules&&null!==n.rules&&n.rules.length>0)),f=(0,r.Fl)((()=>!0!==n.disable&&!0===d.value)),p=(0,r.Fl)((()=>!0===n.error||!0===s.value)),m=(0,r.Fl)((()=>"string"===typeof n.errorMessage&&n.errorMessage.length>0?n.errorMessage:a.value));function g(){c++,t.value=!1,l.value=null,s.value=!1,a.value=null,E.cancel()}function w(e=n.modelValue){if(!0!==f.value)return!0;const r=++c,i=!0!==t.value?()=>{l.value=!0}:()=>{},o=(e,n)=>{!0===e&&i(),s.value=e,a.value=n||null,t.value=!1},u=[];for(let t=0;t<n.rules.length;t++){const r=n.rules[t];let i;if("function"===typeof r?i=r(e,v):"string"===typeof r&&void 0!==v[r]&&(i=v[r](e)),!1===i||"string"===typeof i)return o(!0,i),!1;!0!==i&&void 0!==i&&u.push(i)}return 0===u.length?(o(!1),!0):(t.value=!0,Promise.all(u).then((e=>{if(void 0===e||!1===Array.isArray(e)||0===e.length)return r===c&&o(!1),!0;const t=e.find((e=>!1===e||"string"===typeof e));return r===c&&o(void 0!==t,t),void 0===t}),(e=>(r===c&&(console.error(e),o(!0)),!1))))}function _(e){!0===f.value&&"ondemand"!==n.lazyRules&&(!0===l.value||!0!==n.lazyRules&&!0!==e)&&E()}(0,r.YP)((()=>n.modelValue),(()=>{_()})),(0,r.YP)((()=>n.reactiveRules),(e=>{!0===e?void 0===u&&(u=(0,r.YP)((()=>n.rules),(()=>{_(!0)}))):void 0!==u&&(u(),u=void 0)}),{immediate:!0}),(0,r.YP)(e,(e=>{!0===e?null===l.value&&(l.value=!1):!1===l.value&&(l.value=!0,!0===f.value&&"ondemand"!==n.lazyRules&&!1===t.value&&E())}));const E=(0,y.Z)(w,0);return(0,r.Jd)((()=>{void 0!==u&&u(),E.cancel()})),Object.assign(o,{resetValidation:g,validate:w}),(0,b.g)(o,"hasError",(()=>p.value)),{isDirtyModel:l,hasRules:d,hasError:p,errorMessage:m,validate:w,resetValidation:g}}const S=/^on[A-Z]/;function T(e,t){const n={listeners:(0,i.iH)({}),attributes:(0,i.iH)({})};function o(){const r={},i={};for(const t in e)"class"!==t&&"style"!==t&&!1===S.test(t)&&(r[t]=e[t]);for(const e in t.props)!0===S.test(e)&&(i[e]=t.props[e]);n.attributes.value=r,n.listeners.value=i}return(0,r.Xn)(o),o(),n}var k=n(2026);n(8170),n(5231),n(7725),n(9212),n(548),n(9359),n(6408);let x,I=0;const C=new Array(256);for(let V=0;V<256;V++)C[V]=(V+256).toString(16).substring(1);const A=(()=>{const e="undefined"!==typeof crypto?crypto:"undefined"!==typeof window?window.crypto||window.msCrypto:void 0;if(void 0!==e){if(void 0!==e.randomBytes)return e.randomBytes;if(void 0!==e.getRandomValues)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return e=>{const t=[];for(let n=e;n>0;n--)t.push(Math.floor(256*Math.random()));return t}})(),R=4096;function O(){(void 0===x||I+16>R)&&(I=0,x=A(R));const e=Array.prototype.slice.call(x,I,I+=16);return e[6]=15&e[6]|64,e[8]=63&e[8]|128,C[e[0]]+C[e[1]]+C[e[2]]+C[e[3]]+"-"+C[e[4]]+C[e[5]]+"-"+C[e[6]]+C[e[7]]+"-"+C[e[8]]+C[e[9]]+"-"+C[e[10]]+C[e[11]]+C[e[12]]+C[e[13]]+C[e[14]]+C[e[15]]}var N=n(1384),L=n(7026);function P(e){return void 0===e?`f_${O()}`:e}function D(e){return void 0!==e&&null!==e&&(""+e).length>0}const F={...u.S,..._,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},M=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function q(){const{props:e,attrs:t,proxy:n,vnode:o}=(0,r.FN)(),s=(0,u.Z)(e,n.$q);return{isDark:s,editable:(0,r.Fl)((()=>!0!==e.disable&&!0!==e.readonly)),innerLoading:(0,i.iH)(!1),focused:(0,i.iH)(!1),hasPopupOpen:!1,splitAttrs:T(t,o),targetUid:(0,i.iH)(P(e.for)),rootRef:(0,i.iH)(null),targetRef:(0,i.iH)(null),controlRef:(0,i.iH)(null)}}function U(e){const{props:t,emit:n,slots:i,attrs:u,proxy:c}=(0,r.FN)(),{$q:h}=c;let d;void 0===e.hasValue&&(e.hasValue=(0,r.Fl)((()=>D(t.modelValue)))),void 0===e.emitValue&&(e.emitValue=e=>{n("update:modelValue",e)}),void 0===e.controlEvents&&(e.controlEvents={onFocusin:F,onFocusout:M}),Object.assign(e,{clearValue:q,onControlFocusin:F,onControlFocusout:M,focus:R}),void 0===e.computedCounter&&(e.computedCounter=(0,r.Fl)((()=>{if(!1!==t.counter){const e="string"===typeof t.modelValue||"number"===typeof t.modelValue?(""+t.modelValue).length:!0===Array.isArray(t.modelValue)?t.modelValue.length:0,n=void 0!==t.maxlength?t.maxlength:t.maxValues;return e+(void 0!==n?" / "+n:"")}})));const{isDirtyModel:f,hasRules:p,hasError:m,errorMessage:g,resetValidation:v}=E(e.focused,e.innerLoading),y=void 0!==e.floatingLabel?(0,r.Fl)((()=>!0===t.stackLabel||!0===e.focused.value||!0===e.floatingLabel.value)):(0,r.Fl)((()=>!0===t.stackLabel||!0===e.focused.value||!0===e.hasValue.value)),b=(0,r.Fl)((()=>!0===t.bottomSlots||void 0!==t.hint||!0===p.value||!0===t.counter||null!==t.error)),w=(0,r.Fl)((()=>!0===t.filled?"filled":!0===t.outlined?"outlined":!0===t.borderless?"borderless":t.standout?"standout":"standard")),_=(0,r.Fl)((()=>`q-field row no-wrap items-start q-field--${w.value}`+(void 0!==e.fieldClass?` ${e.fieldClass.value}`:"")+(!0===t.rounded?" q-field--rounded":"")+(!0===t.square?" q-field--square":"")+(!0===y.value?" q-field--float":"")+(!0===T.value?" q-field--labeled":"")+(!0===t.dense?" q-field--dense":"")+(!0===t.itemAligned?" q-field--item-aligned q-item-type":"")+(!0===e.isDark.value?" q-field--dark":"")+(void 0===e.getControl?" q-field--auto-height":"")+(!0===e.focused.value?" q-field--focused":"")+(!0===m.value?" q-field--error":"")+(!0===m.value||!0===e.focused.value?" q-field--highlighted":"")+(!0!==t.hideBottomSpace&&!0===b.value?" q-field--with-bottom":"")+(!0===t.disable?" q-field--disabled":!0===t.readonly?" q-field--readonly":""))),S=(0,r.Fl)((()=>"q-field__control relative-position row no-wrap"+(void 0!==t.bgColor?` bg-${t.bgColor}`:"")+(!0===m.value?" text-negative":"string"===typeof t.standout&&t.standout.length>0&&!0===e.focused.value?` ${t.standout}`:void 0!==t.color?` text-${t.color}`:""))),T=(0,r.Fl)((()=>!0===t.labelSlot||void 0!==t.label)),x=(0,r.Fl)((()=>"q-field__label no-pointer-events absolute ellipsis"+(void 0!==t.labelColor&&!0!==m.value?` text-${t.labelColor}`:""))),I=(0,r.Fl)((()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:y.value,modelValue:t.modelValue,emitValue:e.emitValue}))),C=(0,r.Fl)((()=>{const n={for:e.targetUid.value};return!0===t.disable?n["aria-disabled"]="true":!0===t.readonly&&(n["aria-readonly"]="true"),n}));function A(){const t=document.activeElement;let n=void 0!==e.targetRef&&e.targetRef.value;!n||null!==t&&t.id===e.targetUid.value||(!0===n.hasAttribute("tabindex")||(n=n.querySelector("[tabindex]")),n&&n!==t&&n.focus({preventScroll:!0}))}function R(){(0,L.jd)(A)}function O(){(0,L.fP)(A);const t=document.activeElement;null!==t&&e.rootRef.value.contains(t)&&t.blur()}function F(t){clearTimeout(d),!0===e.editable.value&&!1===e.focused.value&&(e.focused.value=!0,n("focus",t))}function M(t,r){clearTimeout(d),d=setTimeout((()=>{(!0!==document.hasFocus()||!0!==e.hasPopupOpen&&void 0!==e.controlRef&&null!==e.controlRef.value&&!1===e.controlRef.value.contains(document.activeElement))&&(!0===e.focused.value&&(e.focused.value=!1,n("blur",t)),void 0!==r&&r())}))}function q(i){if((0,N.NS)(i),!0!==h.platform.is.mobile){const t=void 0!==e.targetRef&&e.targetRef.value||e.rootRef.value;t.focus()}else!0===e.rootRef.value.contains(document.activeElement)&&document.activeElement.blur();"file"===t.type&&(e.inputRef.value.value=null),n("update:modelValue",null),n("clear",t.modelValue),(0,r.Y3)((()=>{v(),!0!==h.platform.is.mobile&&(f.value=!1)}))}function U(){const n=[];return void 0!==i.prepend&&n.push((0,r.h)("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:N.X$},i.prepend())),n.push((0,r.h)("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},V())),!0===m.value&&!1===t.noErrorIcon&&n.push(B("error",[(0,r.h)(a.Z,{name:h.iconSet.field.error,color:"negative"})])),!0===t.loading||!0===e.innerLoading.value?n.push(B("inner-loading-append",void 0!==i.loading?i.loading():[(0,r.h)(l.Z,{color:t.color})])):!0===t.clearable&&!0===e.hasValue.value&&!0===e.editable.value&&n.push(B("inner-clearable-append",[(0,r.h)(a.Z,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||h.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:q})])),void 0!==i.append&&n.push((0,r.h)("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:N.X$},i.append())),void 0!==e.getInnerAppend&&n.push(B("inner-append",e.getInnerAppend())),void 0!==e.getControlChild&&n.push(e.getControlChild()),n}function V(){const n=[];return void 0!==t.prefix&&null!==t.prefix&&n.push((0,r.h)("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),void 0!==e.getShadowControl&&!0===e.hasShadow.value&&n.push(e.getShadowControl()),void 0!==e.getControl?n.push(e.getControl()):void 0!==i.rawControl?n.push(i.rawControl()):void 0!==i.control&&n.push((0,r.h)("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":!0===t.autofocus||void 0},i.control(I.value))),!0===T.value&&n.push((0,r.h)("div",{class:x.value},(0,k.KR)(i.label,t.label))),void 0!==t.suffix&&null!==t.suffix&&n.push((0,r.h)("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat((0,k.KR)(i.default))}function j(){let n,s;!0===m.value?null!==g.value?(n=[(0,r.h)("div",{role:"alert"},g.value)],s=`q--slot-error-${g.value}`):(n=(0,k.KR)(i.error),s="q--slot-error"):!0===t.hideHint&&!0!==e.focused.value||(void 0!==t.hint?(n=[(0,r.h)("div",t.hint)],s=`q--slot-hint-${t.hint}`):(n=(0,k.KR)(i.hint),s="q--slot-hint"));const a=!0===t.counter||void 0!==i.counter;if(!0===t.hideBottomSpace&&!1===a&&void 0===n)return;const l=(0,r.h)("div",{key:s,class:"q-field__messages col"},n);return(0,r.h)("div",{class:"q-field__bottom row items-start q-field__bottom--"+(!0!==t.hideBottomSpace?"animated":"stale"),onClick:N.X$},[!0===t.hideBottomSpace?l:(0,r.h)(o.uT,{name:"q-transition--field-message"},(()=>l)),!0===a?(0,r.h)("div",{class:"q-field__counter"},void 0!==i.counter?i.counter():e.computedCounter.value):null])}function B(e,t){return null===t?null:(0,r.h)("div",{key:e,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},t)}(0,r.YP)((()=>t.for),(t=>{e.targetUid.value=P(t)}));let $=!1;return(0,r.se)((()=>{$=!0})),(0,r.dl)((()=>{!0===$&&!0===t.autofocus&&c.focus()})),(0,r.bv)((()=>{!0===s.uX.value&&void 0===t.for&&(e.targetUid.value=P()),!0===t.autofocus&&c.focus()})),(0,r.Jd)((()=>{clearTimeout(d)})),Object.assign(c,{focus:R,blur:O}),function(){const n=void 0===e.getControl&&void 0===i.control?{...e.splitAttrs.attributes.value,"data-autofocus":!0===t.autofocus||void 0,...C.value}:C.value;return(0,r.h)("label",{ref:e.rootRef,class:[_.value,u.class],style:u.style,...n},[void 0!==i.before?(0,r.h)("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:N.X$},i.before()):null,(0,r.h)("div",{class:"q-field__inner relative-position col self-stretch"},[(0,r.h)("div",{ref:e.controlRef,class:S.value,tabindex:-1,...e.controlEvents},U()),!0===b.value?j():null]),void 0!==i.after?(0,r.h)("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:N.X$},i.after()):null])}}},7915:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(9835);function i(e,t){function n(){const t=e.modelValue;try{const e="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(t)===t&&("length"in t?Array.from(t):[t]).forEach((t=>{e.items.add(t)})),{files:e.files}}catch(n){return{files:void 0}}}return!0===t?(0,r.Fl)((()=>{if("file"===e.type)return n()})):(0,r.Fl)(n)}},9256:(e,t,n)=>{"use strict";n.d(t,{Do:()=>o,Fz:()=>i});var r=n(9835);const i={name:String};function o(e){return(0,r.Fl)((()=>e.name||e.for))}},4953:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9835),i=n(5310);function o(e,t,n){let o;function s(){void 0!==o&&(i.Z.remove(o),o=void 0)}return(0,r.Jd)((()=>{!0===e.value&&s()})),{removeFromHistory:s,addToHistory(){o={condition:()=>!0===n.value,handler:t},i.Z.add(o)}}}},3842:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a,gH:()=>s,vr:()=>o});var r=n(9835),i=n(2046);const o={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},s=["beforeShow","show","beforeHide","hide"];function a({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:s,processOnMount:a}){const l=(0,r.FN)(),{props:u,emit:c,proxy:h}=l;let d;function f(t){!0===e.value?g(t):p(t)}function p(e){if(!0===u.disable||void 0!==e&&!0===e.qAnchorHandled||void 0!==t&&!0!==t(e))return;const n=void 0!==u["onUpdate:modelValue"];!0===n&&(c("update:modelValue",!0),d=e,(0,r.Y3)((()=>{d===e&&(d=void 0)}))),null!==u.modelValue&&!1!==n||m(e)}function m(t){!0!==e.value&&(e.value=!0,c("beforeShow",t),void 0!==o?o(t):c("show",t))}function g(e){if(!0===u.disable)return;const t=void 0!==u["onUpdate:modelValue"];!0===t&&(c("update:modelValue",!1),d=e,(0,r.Y3)((()=>{d===e&&(d=void 0)}))),null!==u.modelValue&&!1!==t||v(e)}function v(t){!1!==e.value&&(e.value=!1,c("beforeHide",t),void 0!==s?s(t):c("hide",t))}function y(t){if(!0===u.disable&&!0===t)void 0!==u["onUpdate:modelValue"]&&c("update:modelValue",!1);else if(!0===t!==e.value){const e=!0===t?m:v;e(d)}}(0,r.YP)((()=>u.modelValue),y),void 0!==n&&!0===(0,i.Rb)(l)&&(0,r.YP)((()=>h.$route.fullPath),(()=>{!0===n.value&&!0===e.value&&g()})),!0===a&&(0,r.bv)((()=>{y(u.modelValue)}));const b={show:p,hide:g,toggle:f};return Object.assign(h,b),b}},2306:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});n(9665);var r=n(499),i=n(9835),o=(n(1384),n(7026)),s=n(7495);const a=[];let l=document.body;function u(e){const t=document.createElement("div");if(void 0!==e&&(t.id=e),void 0!==s.w6.globalNodes){const e=s.w6.globalNodes["class"];void 0!==e&&(t.className=e)}return l.appendChild(t),a.push(t),t}function c(e){a.splice(a.indexOf(e),1),e.remove()}var h=n(2909),d=n(3251);function f(e){e=e.parent;while(void 0!==e&&null!==e){if("QGlobalDialog"===e.type.name)return!0;if("QDialog"===e.type.name||"QMenu"===e.type.name)return!1;e=e.parent}return!1}function p(e,t,n,s){const a=(0,r.iH)(!1),l=(0,r.iH)(!1);let p=null;const m={},g=!0===s&&f(e);function v(t){if(!0===t)return(0,o.xF)(m),void(l.value=!0);l.value=!1,!1===a.value&&(!1===g&&null===p&&(p=u()),a.value=!0,h.Q$.push(e.proxy),(0,o.YX)(m))}function y(t){if(l.value=!1,!0!==t)return;(0,o.xF)(m),a.value=!1;const n=h.Q$.indexOf(e.proxy);-1!==n&&h.Q$.splice(n,1),null!==p&&(c(p),p=null)}return(0,i.Ah)((()=>{y(!0)})),e.proxy.__qPortal=!0,(0,d.g)(e.proxy,"contentEl",(()=>t.value)),{showPortal:v,hidePortal:y,portalIsActive:a,portalIsAccessible:l,renderPortal:()=>!0===g?n():!0===a.value?[(0,i.h)(i.lR,{to:p},n())]:void 0}}},9754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(1384),i=n(3701),o=n(7506);let s,a,l,u,c,h,d=0,f=!1;function p(e){m(e)&&(0,r.NS)(e)}function m(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=(0,r.AZ)(e),n=e.shiftKey&&!e.deltaX,o=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),s=n||o?e.deltaY:e.deltaX;for(let r=0;r<t.length;r++){const e=t[r];if((0,i.QA)(e,o))return o?s<0&&0===e.scrollTop||s>0&&e.scrollTop+e.clientHeight===e.scrollHeight:s<0&&0===e.scrollLeft||s>0&&e.scrollLeft+e.clientWidth===e.scrollWidth}return!0}function g(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function v(e){!0!==f&&(f=!0,requestAnimationFrame((()=>{f=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;void 0!==l&&t===window.innerHeight||(l=n-t,document.scrollingElement.scrollTop=r),r>l&&(document.scrollingElement.scrollTop-=Math.ceil((r-l)/8))})))}function y(e){const t=document.body,n=void 0!==window.visualViewport;if("add"===e){const{overflowY:e,overflowX:l}=window.getComputedStyle(t);s=(0,i.OI)(window),a=(0,i.u3)(window),u=t.style.left,c=t.style.top,t.style.left=`-${s}px`,t.style.top=`-${a}px`,"hidden"!==l&&("scroll"===l||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),"hidden"!==e&&("scroll"===e||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,!0===o.Lp.is.ios&&(!0===n?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",v,r.rU.passiveCapture),window.visualViewport.addEventListener("scroll",v,r.rU.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",g,r.rU.passiveCapture))}!0===o.Lp.is.desktop&&!0===o.Lp.is.mac&&window[`${e}EventListener`]("wheel",p,r.rU.notPassive),"remove"===e&&(!0===o.Lp.is.ios&&(!0===n?(window.visualViewport.removeEventListener("resize",v,r.rU.passiveCapture),window.visualViewport.removeEventListener("scroll",v,r.rU.passiveCapture)):window.removeEventListener("scroll",g,r.rU.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=u,t.style.top=c,window.scrollTo(s,a),l=void 0)}function b(e){let t="add";if(!0===e){if(d++,void 0!==h)return clearTimeout(h),void(h=void 0);if(d>1)return}else{if(0===d)return;if(d--,d>0)return;if(t="remove",!0===o.Lp.is.ios&&!0===o.Lp.is.nativeMobile)return clearTimeout(h),void(h=setTimeout((()=>{y(t),h=void 0}),100))}y(t)}function w(){let e;return{preventBodyScroll(t){t===e||void 0===e&&!0!==t||(e=t,b(t))}}}},945:(e,t,n)=>{"use strict";n.d(t,{$:()=>h,Z:()=>d});n(8964);var r=n(9835),i=n(2046);function o(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function s(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function a(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!1===Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function l(e,t){return!0===Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function u(e,t){return!0===Array.isArray(e)?l(e,t):!0===Array.isArray(t)?l(t,e):e===t}function c(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!1===u(e[n],t[n]))return!1;return!0}const h={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function d({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=(0,r.FN)(),{props:l,proxy:u,emit:h}=n,d=(0,i.Rb)(n),f=(0,r.Fl)((()=>!0!==l.disable&&void 0!==l.href)),p=!0===t?(0,r.Fl)((()=>!0===d&&!0!==l.disable&&!0!==f.value&&void 0!==l.to&&null!==l.to&&""!==l.to)):(0,r.Fl)((()=>!0===d&&!0!==f.value&&void 0!==l.to&&null!==l.to&&""!==l.to)),m=(0,r.Fl)((()=>!0===p.value?T(l.to):null)),g=(0,r.Fl)((()=>null!==m.value)),v=(0,r.Fl)((()=>!0===f.value||!0===g.value)),y=(0,r.Fl)((()=>"a"===l.type||!0===v.value?"a":l.tag||e||"div")),b=(0,r.Fl)((()=>!0===f.value?{href:l.href,target:l.target}:!0===g.value?{href:m.value.href,target:l.target}:{})),w=(0,r.Fl)((()=>{if(!1===g.value)return-1;const{matched:e}=m.value,{length:t}=e,n=e[t-1];if(void 0===n)return-1;const r=u.$route.matched;if(0===r.length)return-1;const i=r.findIndex(s.bind(null,n));if(i>-1)return i;const a=o(e[t-2]);return t>1&&o(n)===a&&r[r.length-1].path!==a?r.findIndex(s.bind(null,e[t-2])):i})),_=(0,r.Fl)((()=>!0===g.value&&-1!==w.value&&a(u.$route.params,m.value.params))),E=(0,r.Fl)((()=>!0===_.value&&w.value===u.$route.matched.length-1&&c(u.$route.params,m.value.params))),S=(0,r.Fl)((()=>!0===g.value?!0===E.value?` ${l.exactActiveClass} ${l.activeClass}`:!0===l.exact?"":!0===_.value?` ${l.activeClass}`:"":""));function T(e){try{return u.$router.resolve(e)}catch(t){}return null}function k(e,{returnRouterError:t,to:n=l.to,replace:r=l.replace}={}){if(!0===l.disable)return e.preventDefault(),Promise.resolve(!1);if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||void 0!==e.button&&0!==e.button||"_blank"===l.target)return Promise.resolve(!1);e.preventDefault();const i=u.$router[!0===r?"replace":"push"](n);return!0===t?i:i.then((()=>{})).catch((()=>{}))}function x(e){if(!0===g.value){const t=t=>k(e,t);h("click",e,t),!0!==e.defaultPrevented&&t()}else h("click",e)}return{hasRouterLink:g,hasHrefLink:f,hasLink:v,linkTag:y,resolvedLink:m,linkIsActive:_,linkIsExactActive:E,linkClass:S,linkAttrs:b,getLink:T,navigateToRouterLink:k,navigateOnClick:x}}},4088:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(499),i=n(9835),o=n(1384);function s(e,t){const n=(0,r.iH)(null);let s;function a(e,t){const n=(void 0!==t?"add":"remove")+"EventListener",r=void 0!==t?t:s;e!==window&&e[n]("scroll",r,o.rU.passive),window[n]("scroll",r,o.rU.passive),s=t}function l(){null!==n.value&&(a(n.value),n.value=null)}const u=(0,i.YP)((()=>e.noParentEvent),(()=>{null!==n.value&&(l(),t())}));return(0,i.Jd)(u),{localScrollTarget:n,unconfigureScrollTarget:l,changeScrollEvent:a}}},244:(e,t,n)=>{"use strict";n.d(t,{LU:()=>o,Ok:()=>i,ZP:()=>s});var r=n(9835);const i={xs:18,sm:24,md:32,lg:38,xl:46},o={size:String};function s(e,t=i){return(0,r.Fl)((()=>void 0!==e.size?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null))}},6916:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9835),i=n(2046);function o(){let e;const t=(0,r.FN)();function n(){e=void 0}return(0,r.se)(n),(0,r.Jd)(n),{removeTick:n,registerTick(n){e=n,(0,r.Y3)((()=>{e===n&&(!1===(0,i.$D)(t)&&e(),e=void 0)}))}}}},2695:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9835),i=n(2046);function o(){let e;const t=(0,r.FN)();function n(){clearTimeout(e)}return(0,r.se)(n),(0,r.Jd)(n),{removeTimeout:n,registerTimeout(n,r){clearTimeout(e),!1===(0,i.$D)(t)&&(e=setTimeout(n,r))}}}},431:(e,t,n)=>{"use strict";n.d(t,{D:()=>i,Z:()=>o});var r=n(9835);const i={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function o(e,t=(()=>{}),n=(()=>{})){return{transitionProps:(0,r.Fl)((()=>{const r=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${r}-enter-from`,enterActiveClass:`${r}-enter-active`,enterToClass:`${r}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}})),transitionStyle:(0,r.Fl)((()=>`--q-transition-duration: ${e.transitionDuration}ms`))}}},9302:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9835),i=n(5439);function o(){return(0,r.f3)(i.Ng)}},2146:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(5987),i=n(2909),o=n(1705);function s(e){if(!1===e)return 0;if(!0===e||void 0===e)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const a=(0,r.f)({name:"close-popup",beforeMount(e,{value:t}){const n={depth:s(t),handler(t){0!==n.depth&&setTimeout((()=>{const r=(0,i.je)(e);void 0!==r&&(0,i.S7)(r,t,n.depth)}))},handlerKey(e){!0===(0,o.So)(e,13)&&n.handler(e)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=s(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}})},1136:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(9665);var r=n(5987),i=n(223),o=n(1384),s=n(1705);function a(e,t=250){let n,r=!1;return function(){return!1===r&&(r=!0,setTimeout((()=>{r=!1}),t),n=e.apply(this,arguments)),n}}function l(e,t,n,r){!0===n.modifiers.stop&&(0,o.sT)(e);const s=n.modifiers.color;let a=n.modifiers.center;a=!0===a||!0===r;const l=document.createElement("span"),u=document.createElement("span"),c=(0,o.FK)(e),{left:h,top:d,width:f,height:p}=t.getBoundingClientRect(),m=Math.sqrt(f*f+p*p),g=m/2,v=(f-m)/2+"px",y=a?v:c.left-h-g+"px",b=(p-m)/2+"px",w=a?b:c.top-d-g+"px";u.className="q-ripple__inner",(0,i.iv)(u,{height:`${m}px`,width:`${m}px`,transform:`translate3d(${y},${w},0) scale3d(.2,.2,1)`,opacity:0}),l.className="q-ripple"+(s?" text-"+s:""),l.setAttribute("dir","ltr"),l.appendChild(u),t.appendChild(l);const _=()=>{l.remove(),clearTimeout(E)};n.abort.push(_);let E=setTimeout((()=>{u.classList.add("q-ripple__inner--enter"),u.style.transform=`translate3d(${v},${b},0) scale3d(1,1,1)`,u.style.opacity=.2,E=setTimeout((()=>{u.classList.remove("q-ripple__inner--enter"),u.classList.add("q-ripple__inner--leave"),u.style.opacity=0,E=setTimeout((()=>{l.remove(),n.abort.splice(n.abort.indexOf(_),1)}),275)}),250)}),50)}function u(e,{modifiers:t,value:n,arg:r}){const i=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:!0===i.early,stop:!0===i.stop,center:!0===i.center,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}const c=(0,r.f)({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(!1===n.ripple)return;const r={cfg:n,enabled:!1!==t.value,modifiers:{},abort:[],start(t){!0===r.enabled&&!0!==t.qSkipRipple&&t.type===(!0===r.modifiers.early?"pointerdown":"click")&&l(t,e,r,!0===t.qKeyEvent)},keystart:a((t=>{!0===r.enabled&&!0!==t.qSkipRipple&&!0===(0,s.So)(t,r.modifiers.keyCodes)&&t.type==="key"+(!0===r.modifiers.early?"down":"up")&&l(t,e,r,!0)}),300)};u(r,t),e.__qripple=r,(0,o.M0)(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;void 0!==n&&(n.enabled=!1!==t.value,!0===n.enabled&&Object(t.value)===t.value&&u(n,t))}},beforeUnmount(e){const t=e.__qripple;void 0!==t&&(t.abort.forEach((e=>{e()})),(0,o.ul)(t,"main"),delete e._qripple)}})},9714:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(7506),i=n(5987);const o={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},s=Object.keys(o);function a(e){const t={};for(const n of s)!0===e[n]&&(t[n]=!0);return 0===Object.keys(t).length?o:(!0===t.horizontal?t.left=t.right=!0:!0===t.left&&!0===t.right&&(t.horizontal=!0),!0===t.vertical?t.up=t.down=!0:!0===t.up&&!0===t.down&&(t.vertical=!0),!0===t.horizontal&&!0===t.vertical&&(t.all=!0),t)}function l(e,t){return void 0===t.event&&void 0!==e.target&&!0!==e.target.draggable&&"function"===typeof t.handler&&"INPUT"!==e.target.nodeName.toUpperCase()&&(void 0===e.qClonedBy||-1===e.qClonedBy.indexOf(t.uid))}o.all=!0;var u=n(1384),c=n(2589);function h(e,t,n){const r=(0,u.FK)(e);let i,o=r.left-t.event.x,s=r.top-t.event.y,a=Math.abs(o),l=Math.abs(s);const c=t.direction;!0===c.horizontal&&!0!==c.vertical?i=o<0?"left":"right":!0!==c.horizontal&&!0===c.vertical?i=s<0?"up":"down":!0===c.up&&s<0?(i="up",a>l&&(!0===c.left&&o<0?i="left":!0===c.right&&o>0&&(i="right"))):!0===c.down&&s>0?(i="down",a>l&&(!0===c.left&&o<0?i="left":!0===c.right&&o>0&&(i="right"))):!0===c.left&&o<0?(i="left",a<l&&(!0===c.up&&s<0?i="up":!0===c.down&&s>0&&(i="down"))):!0===c.right&&o>0&&(i="right",a<l&&(!0===c.up&&s<0?i="up":!0===c.down&&s>0&&(i="down")));let h=!1;if(void 0===i&&!1===n){if(!0===t.event.isFirst||void 0===t.event.lastDir)return{};i=t.event.lastDir,h=!0,"left"===i||"right"===i?(r.left-=o,a=0,o=0):(r.top-=s,l=0,s=0)}return{synthetic:h,payload:{evt:e,touch:!0!==t.event.mouse,mouse:!0===t.event.mouse,position:r,direction:i,isFirst:t.event.isFirst,isFinal:!0===n,duration:Date.now()-t.event.time,distance:{x:a,y:l},offset:{x:o,y:s},delta:{x:r.left-t.event.lastX,y:r.top-t.event.lastY}}}}let d=0;const f=(0,i.f)({name:"touch-pan",beforeMount(e,{value:t,modifiers:n}){if(!0!==n.mouse&&!0!==r.Lp.has.touch)return;function i(e,t){!0===n.mouse&&!0===t?(0,u.NS)(e):(!0===n.stop&&(0,u.sT)(e),!0===n.prevent&&(0,u.X$)(e))}const o={uid:"qvtp_"+d++,handler:t,modifiers:n,direction:a(n),noop:u.ZT,mouseStart(e){l(e,o)&&(0,u.du)(e)&&((0,u.M0)(o,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),o.start(e,!0))},touchStart(e){if(l(e,o)){const t=e.target;(0,u.M0)(o,"temp",[[t,"touchmove","move","notPassiveCapture"],[t,"touchcancel","end","passiveCapture"],[t,"touchend","end","passiveCapture"]]),o.start(e)}},start(t,i){if(!0===r.Lp.is.firefox&&(0,u.Jf)(e,!0),o.lastEvt=t,!0===i||!0===n.stop){if(!0!==o.direction.all&&(!0!==i||!0!==o.modifiers.mouseAllDir&&!0!==o.modifiers.mousealldir)){const e=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);!0===t.defaultPrevented&&(0,u.X$)(e),!0===t.cancelBubble&&(0,u.sT)(e),Object.assign(e,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:void 0===t.qClonedBy?[o.uid]:t.qClonedBy.concat(o.uid)}),o.initialEvent={target:t.target,event:e}}(0,u.sT)(t)}const{left:s,top:a}=(0,u.FK)(t);o.event={x:s,y:a,time:Date.now(),mouse:!0===i,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:a}},move(e){if(void 0===o.event)return;const t=(0,u.FK)(e),r=t.left-o.event.x,s=t.top-o.event.y;if(0===r&&0===s)return;o.lastEvt=e;const a=!0===o.event.mouse,l=()=>{let t;i(e,a),!0!==n.preserveCursor&&!0!==n.preservecursor&&(t=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),!0===a&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),(0,c.M)(),o.styleCleanup=e=>{if(o.styleCleanup=void 0,void 0!==t&&(document.documentElement.style.cursor=t),document.body.classList.remove("non-selectable"),!0===a){const t=()=>{document.body.classList.remove("no-pointer-events--children")};void 0!==e?setTimeout((()=>{t(),e()}),50):t()}else void 0!==e&&e()}};if(!0===o.event.detected){!0!==o.event.isFirst&&i(e,o.event.mouse);const{payload:t,synthetic:n}=h(e,o,!1);return void(void 0!==t&&(!1===o.handler(t)?o.end(e):(void 0===o.styleCleanup&&!0===o.event.isFirst&&l(),o.event.lastX=t.position.left,o.event.lastY=t.position.top,o.event.lastDir=!0===n?void 0:t.direction,o.event.isFirst=!1)))}if(!0===o.direction.all||!0===a&&(!0===o.modifiers.mouseAllDir||!0===o.modifiers.mousealldir))return l(),o.event.detected=!0,void o.move(e);const d=Math.abs(r),f=Math.abs(s);d!==f&&(!0===o.direction.horizontal&&d>f||!0===o.direction.vertical&&d<f||!0===o.direction.up&&d<f&&s<0||!0===o.direction.down&&d<f&&s>0||!0===o.direction.left&&d>f&&r<0||!0===o.direction.right&&d>f&&r>0?(o.event.detected=!0,o.move(e)):o.end(e,!0))},end(t,n){if(void 0!==o.event){if((0,u.ul)(o,"temp"),!0===r.Lp.is.firefox&&(0,u.Jf)(e,!1),!0===n)void 0!==o.styleCleanup&&o.styleCleanup(),!0!==o.event.detected&&void 0!==o.initialEvent&&o.initialEvent.target.dispatchEvent(o.initialEvent.event);else if(!0===o.event.detected){!0===o.event.isFirst&&o.handler(h(void 0===t?o.lastEvt:t,o).payload);const{payload:e}=h(void 0===t?o.lastEvt:t,o,!0),n=()=>{o.handler(e)};void 0!==o.styleCleanup?o.styleCleanup(n):n()}o.event=void 0,o.initialEvent=void 0,o.lastEvt=void 0}}};if(e.__qtouchpan=o,!0===n.mouse){const t=!0===n.mouseCapture||!0===n.mousecapture?"Capture":"";(0,u.M0)(o,"main",[[e,"mousedown","mouseStart",`passive${t}`]])}!0===r.Lp.has.touch&&(0,u.M0)(o,"main",[[e,"touchstart","touchStart","passive"+(!0===n.capture?"Capture":"")],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchpan;void 0!==n&&(t.oldValue!==t.value&&("function"!==typeof value&&n.end(),n.handler=t.value),n.direction=a(t.modifiers))},beforeUnmount(e){const t=e.__qtouchpan;void 0!==t&&(void 0!==t.event&&t.end(),(0,u.ul)(t,"main"),(0,u.ul)(t,"temp"),!0===r.Lp.is.firefox&&(0,u.Jf)(e,!1),void 0!==t.styleCleanup&&t.styleCleanup(),delete e.__qtouchpan)}})},5310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});n(9665),n(6727);var r=n(7506),i=n(1384);const o=()=>!0;function s(e){return"string"===typeof e&&""!==e&&"/"!==e&&"#/"!==e}function a(e){return!0===e.startsWith("#")&&(e=e.substring(1)),!1===e.startsWith("/")&&(e="/"+e),!0===e.endsWith("/")&&(e=e.substring(0,e.length-1)),"#"+e}function l(e){if(!1===e.backButtonExit)return()=>!1;if("*"===e.backButtonExit)return o;const t=["#/"];return!0===Array.isArray(e.backButtonExit)&&t.push(...e.backButtonExit.filter(s).map(a)),()=>t.includes(window.location.hash)}const u={__history:[],add:i.ZT,remove:i.ZT,install({$q:e}){if(!0===this.__installed)return;const{cordova:t,capacitor:n}=r.Lp.is;if(!0!==t&&!0!==n)return;const i=e.config[!0===t?"cordova":"capacitor"];if(void 0!==i&&!1===i.backButton)return;if(!0===n&&(void 0===window.Capacitor||void 0===window.Capacitor.Plugins.App))return;this.add=e=>{void 0===e.condition&&(e.condition=o),this.__history.push(e)},this.remove=e=>{const t=this.__history.indexOf(e);t>=0&&this.__history.splice(t,1)};const s=l(Object.assign({backButtonExit:!0},i)),a=()=>{if(this.__history.length){const e=this.__history[this.__history.length-1];!0===e.condition()&&(this.__history.pop(),e.handler())}else!0===s()?navigator.app.exitApp():window.history.back()};!0===t?document.addEventListener("deviceready",(()=>{document.addEventListener("backbutton",a,!1)})):window.Capacitor.Plugins.App.addListener("backButton",a)}}},7506:(e,t,n)=>{"use strict";n.d(t,{Lp:()=>m,ZP:()=>v,aG:()=>s,uX:()=>o});n(9665);var r=n(499),i=n(3251);const o=(0,r.iH)(!1);let s,a=!1;function l(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:t[0]||""}}function u(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const c="ontouchstart"in window||window.navigator.maxTouchPoints>0;function h(e){s={is:{...e}},delete e.mac,delete e.desktop;const t=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,{mobile:!0,ios:!0,platform:t,[t]:!0})}function d(e){const t=e.toLowerCase(),n=u(t),r=l(t,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const o=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return!0===o||t.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||!0===i.mobile&&!0!==i.ios&&!0!==o)&&(i.webkit=!0),i.edg&&(r.browser="edgechromium",i.edgeChromium=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,t.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(void 0!==window.Capacitor?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):void 0===window._cordovaNative&&void 0===window.cordova||(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),!0===c&&!0===i.mac&&(!0===i.desktop&&!0===i.safari||!0===i.nativeMobile&&!0!==i.android&&!0!==i.ios&&!0!==i.ipad)&&h(i)),i}const f=navigator.userAgent||navigator.vendor||window.opera,p={has:{touch:!1,webStorage:!1},within:{iframe:!1}},m={userAgent:f,is:d(f),has:{touch:c},within:{iframe:window.self!==window.top}},g={install(e){const{$q:t}=e;!0===o.value?(e.onSSRHydrated.push((()=>{o.value=!1,Object.assign(t.platform,m),s=void 0})),t.platform=(0,r.qj)(this)):t.platform=this}};{let e;(0,i.g)(m.has,"webStorage",(()=>{if(void 0!==e)return e;try{if(window.localStorage)return e=!0,!0}catch(t){}return e=!1,!1})),a=!0===m.is.ios&&-1===window.navigator.vendor.toLowerCase().indexOf("apple"),!0===o.value?Object.assign(g,m,s,p):Object.assign(g,m)}const v=g},899:(e,t,n)=>{"use strict";function r(e,t=250,n){let r;function i(){const i=arguments,o=()=>{r=void 0,!0!==n&&e.apply(this,i)};clearTimeout(r),!0===n&&void 0===r&&e.apply(this,i),r=setTimeout(o,t)}return i.cancel=()=>{clearTimeout(r)},i}n.d(t,{Z:()=>r})},223:(e,t,n)=>{"use strict";n.d(t,{iv:()=>i,mY:()=>s,sb:()=>o});var r=n(499);function i(e,t){const n=e.style;for(const r in t)n[r]=t[r]}function o(e){if(void 0===e||null===e)return;if("string"===typeof e)try{return document.querySelector(e)||void 0}catch(n){return}const t=(0,r.SU)(e);return t?t.$el||t:void 0}function s(e,t){if(void 0===e||null===e||!0===e.contains(t))return!0;for(let n=e.nextElementSibling;null!==n;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}},1384:(e,t,n)=>{"use strict";n.d(t,{AZ:()=>a,FK:()=>s,Jf:()=>h,M0:()=>d,NS:()=>c,X$:()=>u,ZT:()=>i,du:()=>o,rU:()=>r,sT:()=>l,ul:()=>f});n(9665);const r={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(r,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch(p){}function i(){}function o(e){return 0===e.button}function s(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function a(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}}function l(e){e.stopPropagation()}function u(e){!1!==e.cancelable&&e.preventDefault()}function c(e){!1!==e.cancelable&&e.preventDefault(),e.stopPropagation()}function h(e,t){if(void 0===e||!0===t&&!0===e.__dragPrevented)return;const n=!0===t?e=>{e.__dragPrevented=!0,e.addEventListener("dragstart",u,r.notPassiveCapture)}:e=>{delete e.__dragPrevented,e.removeEventListener("dragstart",u,r.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function d(e,t,n){const i=`__q_${t}_evt`;e[i]=void 0!==e[i]?e[i].concat(n):n,n.forEach((t=>{t[0].addEventListener(t[1],e[t[2]],r[t[3]])}))}function f(e,t){const n=`__q_${t}_evt`;void 0!==e[n]&&(e[n].forEach((t=>{t[0].removeEventListener(t[1],e[t[2]],r[t[3]])})),e[n]=void 0)}},321:(e,t,n)=>{"use strict";n.d(t,{rB:()=>i,vX:()=>o});const r=["B","KB","MB","GB","TB","PB"];function i(e){let t=0;while(parseInt(e,10)>=1024&&t<r.length-1)e/=1024,++t;return`${e.toFixed(1)}${r[t]}`}function o(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}},9092:(e,t,n)=>{"use strict";n.d(t,{D:()=>c,m:()=>u});n(9665);var r=n(1384),i=n(2909);let o;const{notPassiveCapture:s}=r.rU,a=[];function l(e){clearTimeout(o);const t=e.target;if(void 0===t||8===t.nodeType||!0===t.classList.contains("no-pointer-events"))return;let n=i.Q$.length-1;while(n>=0){const e=i.Q$[n].$;if("QDialog"!==e.type.name)break;if(!0!==e.props.seamless)return;n--}for(let r=a.length-1;r>=0;r--){const n=a[r];if(null!==n.anchorEl.value&&!1!==n.anchorEl.value.contains(t)||t!==document.body&&(null===n.innerRef.value||!1!==n.innerRef.value.contains(t)))return;e.qClickOutside=!0,n.onClickOutside(e)}}function u(e){a.push(e),1===a.length&&(document.addEventListener("mousedown",l,s),document.addEventListener("touchstart",l,s))}function c(e){const t=a.findIndex((t=>t===e));t>-1&&(a.splice(t,1),0===a.length&&(clearTimeout(o),document.removeEventListener("mousedown",l,s),document.removeEventListener("touchstart",l,s)))}},5987:(e,t,n)=>{"use strict";n.d(t,{L:()=>o,f:()=>s});var r=n(499),i=n(9835);const o=e=>(0,r.Xl)((0,i.aZ)(e)),s=e=>(0,r.Xl)(e)},6532:(e,t,n)=>{"use strict";n.d(t,{c:()=>h,k:()=>d});n(9665);var r=n(7506),i=n(1705);const o=[];let s;function a(e){s=27===e.keyCode}function l(){!0===s&&(s=!1)}function u(e){!0===s&&(s=!1,!0===(0,i.So)(e,27)&&o[o.length-1](e))}function c(e){window[e]("keydown",a),window[e]("blur",l),window[e]("keyup",u),s=!1}function h(e){!0===r.Lp.is.desktop&&(o.push(e),1===o.length&&c("addEventListener"))}function d(e){const t=o.indexOf(e);t>-1&&(o.splice(t,1),0===o.length&&c("removeEventListener"))}},7026:(e,t,n)=>{"use strict";n.d(t,{YX:()=>s,fP:()=>u,jd:()=>l,xF:()=>a});n(9665);let r=[],i=[];function o(e){i=i.filter((t=>t!==e))}function s(e){o(e),i.push(e)}function a(e){o(e),0===i.length&&r.length>0&&(r[r.length-1](),r=[])}function l(e){0===i.length?e():r.push(e)}function u(e){r=r.filter((t=>t!==e))}},4173:(e,t,n)=>{"use strict";n.d(t,{H:()=>a,i:()=>s});n(9665);var r=n(7506);const i=[];function o(e){i[i.length-1](e)}function s(e){!0===r.Lp.is.desktop&&(i.push(e),1===i.length&&document.body.addEventListener("focusin",o))}function a(e){const t=i.indexOf(e);t>-1&&(i.splice(t,1),0===i.length&&document.body.removeEventListener("focusin",o))}},7495:(e,t,n)=>{"use strict";n.d(t,{Uf:()=>i,tP:()=>o,w6:()=>r});const r={};let i=!1;function o(){i=!0}},3251:(e,t,n)=>{"use strict";function r(e,t,n,r){return Object.defineProperty(e,t,{get:n,set:r,enumerable:!0}),e}n.d(t,{g:()=>r})},1705:(e,t,n)=>{"use strict";n.d(t,{So:()=>s,Wm:()=>o,ZK:()=>i});n(6727);let r=!1;function i(e){r=!0===e.isComposing}function o(e){return!0===r||e!==Object(e)||!0===e.isComposing||!0===e.qKeyEvent}function s(e,t){return!0!==o(e)&&[].concat(t).includes(e.keyCode)}},2909:(e,t,n)=>{"use strict";n.d(t,{AH:()=>s,Q$:()=>i,S7:()=>a,je:()=>o});var r=n(2046);const i=[];function o(e){return i.find((t=>null!==t.contentEl&&t.contentEl.contains(e)))}function s(e,t){do{if("QMenu"===e.$options.name){if(e.hide(t),!0===e.$props.separateClosePopup)return(0,r.O2)(e)}else if(!0===e.__qPortal){const n=(0,r.O2)(e);return void 0!==n&&"QPopupProxy"===n.$options.name?(e.hide(t),n):e}e=(0,r.O2)(e)}while(void 0!==e&&null!==e)}function a(e,t,n){while(0!==n&&void 0!==e&&null!==e){if(!0===e.__qPortal){if(n--,"QMenu"===e.$options.name){e=s(e,t);continue}e.hide(t)}e=(0,r.O2)(e)}}},9388:(e,t,n)=>{"use strict";n.d(t,{$:()=>a,io:()=>l,li:()=>c,wq:()=>f});n(6727);var r=n(3701),i=n(7506);let o,s;function a(e){const t=e.split(" ");return 2===t.length&&(!0!==["top","center","bottom"].includes(t[0])?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):!0===["left","middle","right","start","end"].includes(t[1])||(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1))}function l(e){return!e||2===e.length&&("number"===typeof e[0]&&"number"===typeof e[1])}const u={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};function c(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:u[`${n[1]}#${!0===t?"rtl":"ltr"}`]}}function h(e,t){let{top:n,left:r,right:i,bottom:o,width:s,height:a}=e.getBoundingClientRect();return void 0!==t&&(n-=t[1],r-=t[0],o+=t[1],i+=t[0],s+=t[0],a+=t[1]),{top:n,left:r,right:i,bottom:o,width:s,height:a,middle:r+(i-r)/2,center:n+(o-n)/2}}function d(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function f(e){if(!0===i.Lp.is.ios&&void 0!==window.visualViewport){const e=document.body.style,{offsetLeft:t,offsetTop:n}=window.visualViewport;t!==o&&(e.setProperty("--q-pe-left",t+"px"),o=t),n!==s&&(e.setProperty("--q-pe-top",n+"px"),s=n)}let t;const{scrollLeft:n,scrollTop:r}=e.el;if(void 0===e.absoluteOffset)t=h(e.anchorEl,!0===e.cover?[0,0]:e.offset);else{const{top:n,left:r}=e.anchorEl.getBoundingClientRect(),i=n+e.absoluteOffset.top,o=r+e.absoluteOffset.left;t={top:i,left:o,width:1,height:1,right:o+1,center:i,middle:o,bottom:i+1}}let a={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};!0!==e.fit&&!0!==e.cover||(a.minWidth=t.width+"px",!0===e.cover&&(a.minHeight=t.height+"px")),Object.assign(e.el.style,a);const l=d(e.el),u={top:t[e.anchorOrigin.vertical]-l[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-l[e.selfOrigin.horizontal]};p(u,t,l,e.anchorOrigin,e.selfOrigin),a={top:u.top+"px",left:u.left+"px"},void 0!==u.maxHeight&&(a.maxHeight=u.maxHeight+"px",t.height>u.maxHeight&&(a.minHeight=a.maxHeight)),void 0!==u.maxWidth&&(a.maxWidth=u.maxWidth+"px",t.width>u.maxWidth&&(a.minWidth=a.maxWidth)),Object.assign(e.el.style,a),e.el.scrollTop!==r&&(e.el.scrollTop=r),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function p(e,t,n,i,o){const s=n.bottom,a=n.right,l=(0,r.np)(),u=window.innerHeight-l,c=document.body.clientWidth;if(e.top<0||e.top+s>u)if("center"===o.vertical)e.top=t[i.vertical]>u/2?Math.max(0,u-s):0,e.maxHeight=Math.min(s,u);else if(t[i.vertical]>u/2){const n=Math.min(u,"center"===i.vertical?t.center:i.vertical===o.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,n),e.top=Math.max(0,n-s)}else e.top=Math.max(0,"center"===i.vertical?t.center:i.vertical===o.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,u-e.top);if(e.left<0||e.left+a>c)if(e.maxWidth=Math.min(a,c),"middle"===o.horizontal)e.left=t[i.horizontal]>c/2?Math.max(0,c-a):0;else if(t[i.horizontal]>c/2){const n=Math.min(c,"middle"===i.horizontal?t.middle:i.horizontal===o.horizontal?t.right:t.left);e.maxWidth=Math.min(a,n),e.left=Math.max(0,n-e.maxWidth)}else e.left=Math.max(0,"middle"===i.horizontal?t.middle:i.horizontal===o.horizontal?t.left:t.right),e.maxWidth=Math.min(a,c-e.left)}["left","middle","right"].forEach((e=>{u[`${e}#ltr`]=e,u[`${e}#rtl`]=e}))},2026:(e,t,n)=>{"use strict";n.d(t,{Bl:()=>o,Jl:()=>l,KR:()=>i,pf:()=>a,vs:()=>s});var r=n(9835);function i(e,t){return void 0!==e&&e()||t}function o(e,t){if(void 0!==e){const t=e();if(void 0!==t&&null!==t)return t.slice()}return t}function s(e,t){return void 0!==e?t.concat(e()):t}function a(e,t){return void 0===e?t:void 0!==t?t.concat(e()):e()}function l(e,t,n,i,o,s){t.key=i+o;const a=(0,r.h)(e,t,n);return!0===o?(0,r.wy)(a,s()):a}},2589:(e,t,n)=>{"use strict";n.d(t,{M:()=>i});var r=n(7506);function i(){if(void 0!==window.getSelection){const e=window.getSelection();void 0!==e.empty?e.empty():void 0!==e.removeAllRanges&&(e.removeAllRanges(),!0!==r.ZP.is.mobile&&e.addRange(document.createRange()))}else void 0!==document.selection&&document.selection.empty()}},5439:(e,t,n)=>{"use strict";n.d(t,{Mw:()=>o,Ng:()=>r,YE:()=>i,qO:()=>a,vh:()=>s});const r="_q_",i="_q_l_",o="_q_pc_",s="_q_fo_",a=()=>{}},2046:(e,t,n)=>{"use strict";function r(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;while(Object(t)===t){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function i(e){return void 0!==e.appContext.config.globalProperties.$router}function o(e){return!0===e.isUnmounted||!0===e.isDeactivated}n.d(t,{$D:()=>o,O2:()=>r,Rb:()=>i})},3701:(e,t,n)=>{"use strict";n.d(t,{OI:()=>a,QA:()=>g,b0:()=>o,f3:()=>d,ik:()=>f,np:()=>m,u3:()=>s});n(6727);var r=n(223);const i=[null,document,document.body,document.scrollingElement,document.documentElement];function o(e,t){let n=(0,r.sb)(t);if(void 0===n){if(void 0===e||null===e)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return i.includes(n)?window:n}function s(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function a(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function l(e,t,n=0){const r=void 0===arguments[3]?performance.now():arguments[3],i=s(e);n<=0?i!==t&&c(e,t):requestAnimationFrame((o=>{const s=o-r,a=i+(t-i)/Math.max(s,n)*s;c(e,a),a!==t&&l(e,t,n-s,o)}))}function u(e,t,n=0){const r=void 0===arguments[3]?performance.now():arguments[3],i=a(e);n<=0?i!==t&&h(e,t):requestAnimationFrame((o=>{const s=o-r,a=i+(t-i)/Math.max(s,n)*s;h(e,a),a!==t&&u(e,t,n-s,o)}))}function c(e,t){e!==window?e.scrollTop=t:window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t)}function h(e,t){e!==window?e.scrollLeft=t:window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0)}function d(e,t,n){n?l(e,t,n):c(e,t)}function f(e,t,n){n?u(e,t,n):h(e,t)}let p;function m(){if(void 0!==p)return p;const e=document.createElement("p"),t=document.createElement("div");(0,r.iv)(e,{width:"100%",height:"200px"}),(0,r.iv)(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let i=e.offsetWidth;return n===i&&(i=t.clientWidth),t.remove(),p=n-i,p}function g(e,t=!0){return!(!e||e.nodeType!==Node.ELEMENT_NODE)&&(t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"])))}},7198:(e,t,n)=>{"use strict";n.d(t,{Z:()=>F});n(6727);var r=n(7506),i=(n(9665),n(499)),o=n(3251);const s=(e,t)=>{const n=(0,i.qj)(e);for(const r in e)(0,o.g)(t,r,(()=>n[r]),(e=>{n[r]=e}));return t};var a=n(1384),l=n(899);const u=["sm","md","lg","xl"],{passive:c}=a.rU,h=s({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:a.ZT,setDebounce:a.ZT,install({$q:e,onSSRHydrated:t}){if(e.screen=this,!0===this.__installed)return void(void 0!==e.config.screen&&(!1===e.config.screen.bodyClasses?document.body.classList.remove(`screen--${this.name}`):this.__update(!0)));const{visualViewport:n}=window,i=n||window,o=document.scrollingElement||document.documentElement,s=void 0===n||!0===r.Lp.is.mobile?()=>[Math.max(window.innerWidth,o.clientWidth),Math.max(window.innerHeight,o.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-o.clientWidth,n.height*n.scale+window.innerHeight-o.clientHeight],a=void 0!==e.config.screen&&!0===e.config.screen.bodyClasses;this.__update=e=>{const[t,n]=s();if(n!==this.height&&(this.height=n),t!==this.width)this.width=t;else if(!0!==e)return;let r=this.sizes;this.gt.xs=t>=r.sm,this.gt.sm=t>=r.md,this.gt.md=t>=r.lg,this.gt.lg=t>=r.xl,this.lt.sm=t<r.sm,this.lt.md=t<r.md,this.lt.lg=t<r.lg,this.lt.xl=t<r.xl,this.xs=this.lt.sm,this.sm=!0===this.gt.xs&&!0===this.lt.md,this.md=!0===this.gt.sm&&!0===this.lt.lg,this.lg=!0===this.gt.md&&!0===this.lt.xl,this.xl=this.gt.lg,r=(!0===this.xs?"xs":!0===this.sm&&"sm")||!0===this.md&&"md"||!0===this.lg&&"lg"||"xl",r!==this.name&&(!0===a&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${r}`)),this.name=r)};let h,d={},f=16;this.setSizes=e=>{u.forEach((t=>{void 0!==e[t]&&(d[t]=e[t])}))},this.setDebounce=e=>{f=e};const p=()=>{const e=getComputedStyle(document.body);e.getPropertyValue("--q-size-sm")&&u.forEach((t=>{this.sizes[t]=parseInt(e.getPropertyValue(`--q-size-${t}`),10)})),this.setSizes=e=>{u.forEach((t=>{e[t]&&(this.sizes[t]=e[t])})),this.__update(!0)},this.setDebounce=e=>{void 0!==h&&i.removeEventListener("resize",h,c),h=e>0?(0,l.Z)(this.__update,e):this.__update,i.addEventListener("resize",h,c)},this.setDebounce(f),Object.keys(d).length>0?(this.setSizes(d),d=void 0):this.__update(),!0===a&&"xs"===this.name&&document.body.classList.add("screen--xs")};!0===r.uX.value?t.push(p):p()}});n(8964);const d=s({isActive:!1,mode:!1},{__media:void 0,set(e){d.mode=e,"auto"===e?(void 0===d.__media&&(d.__media=window.matchMedia("(prefers-color-scheme: dark)"),d.__updateMedia=()=>{d.set("auto")},d.__media.addListener(d.__updateMedia)),e=d.__media.matches):void 0!==d.__media&&(d.__media.removeListener(d.__updateMedia),d.__media=void 0),d.isActive=!0===e,document.body.classList.remove("body--"+(!0===e?"light":"dark")),document.body.classList.add("body--"+(!0===e?"dark":"light"))},toggle(){d.set(!1===d.isActive)},install({$q:e,onSSRHydrated:t,ssrContext:n}){const{dark:i}=e.config;if(e.dark=this,!0===this.__installed&&void 0===i)return;this.isActive=!0===i;const o=void 0!==i&&i;if(!0===r.uX.value){const e=e=>{this.__fromSSR=e},n=this.set;this.set=e,e(o),t.push((()=>{this.set=n,this.set(this.__fromSSR)}))}else this.set(o)}}),f=d;var p=n(5310);const m={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>1===e?"1 record selected.":(0===e?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function g(){const e=!0===Array.isArray(navigator.languages)&&navigator.languages.length>0?navigator.languages[0]:navigator.language;if("string"===typeof e)return e.split(/[-_]/).map(((e,t)=>0===t?e.toLowerCase():t>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase())).join("-")}const v=s({__langPack:{}},{getLocale:g,set(e=m,t){const n={...e,rtl:!0===e.rtl,getLocale:g};{const e=document.documentElement;e.setAttribute("dir",!0===n.rtl?"rtl":"ltr"),e.setAttribute("lang",n.isoName),n.set=v.set,Object.assign(v.__langPack,n),v.props=n,v.isoName=n.isoName,v.nativeName=n.nativeName}},install({$q:e,lang:t,ssrContext:n}){e.lang=v.__langPack,!0===this.__installed?void 0!==t&&this.set(t):this.set(t||m)}}),y=v;n(6822);function b(e,t,n=document.body){if("string"!==typeof e)throw new TypeError("Expected a string as propName");if("string"!==typeof t)throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}var w=n(1705);function _(e){return!0===e.ios?"ios":!0===e.android?"android":void 0}function E({is:e,has:t,within:n},r){const i=[!0===e.desktop?"desktop":"mobile",(!1===t.touch?"no-":"")+"touch"];if(!0===e.mobile){const t=_(e);void 0!==t&&i.push("platform-"+t)}if(!0===e.nativeMobile){const t=e.nativeMobileWrapper;i.push(t),i.push("native-mobile"),!0!==e.ios||void 0!==r[t]&&!1===r[t].iosStatusBarPadding||i.push("q-ios-padding")}else!0===e.electron?i.push("electron"):!0===e.bex&&i.push("bex");return!0===n.iframe&&i.push("within-iframe"),i}function S(){const e=document.body.className;let t=e;void 0!==r.aG&&(t=t.replace("desktop","platform-ios mobile")),!0===r.Lp.has.touch&&(t=t.replace("no-touch","touch")),!0===r.Lp.within.iframe&&(t+=" within-iframe"),e!==t&&(document.body.className=t)}function T(e){for(const t in e)b(t,e[t])}const k={install(e){if(!0!==this.__installed){if(!0===r.uX.value)S();else{const{$q:t}=e;void 0!==t.config.brand&&T(t.config.brand);const n=E(r.Lp,t.config);document.body.classList.add.apply(document.body.classList,n)}!0===r.Lp.is.ios&&document.body.addEventListener("touchstart",a.ZT),window.addEventListener("keydown",w.ZK,!0)}}},x={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},I=s({iconMapFn:null,__icons:{}},{set(e,t){const n={...e,rtl:!0===e.rtl};n.set=I.set,Object.assign(I.__icons,n)},install({$q:e,iconSet:t,ssrContext:n}){void 0!==e.config.iconMapFn&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__icons,(0,o.g)(e,"iconMapFn",(()=>this.iconMapFn),(e=>{this.iconMapFn=e})),!0===this.__installed?void 0!==t&&this.set(t):this.set(t||x)}}),C=I;var A=n(5439),R=n(7495);n(3122);function O(e){return null!==e&&"object"===typeof e&&!0!==Array.isArray(e)}const N=[r.ZP,k,f,h,p.Z,y,C];function L(e,t){t.forEach((t=>{t.install(e),t.__installed=!0}))}function P(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(A.Ng,n.$q),L(n,N),void 0!==t.components&&Object.values(t.components).forEach((t=>{!0===O(t)&&void 0!==t.name&&e.component(t.name,t)})),void 0!==t.directives&&Object.values(t.directives).forEach((t=>{!0===O(t)&&void 0!==t.name&&e.directive(t.name,t)})),void 0!==t.plugins&&L(n,Object.values(t.plugins).filter((e=>"function"===typeof e.install&&!1===N.includes(e)))),!0===r.uX.value&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach((e=>{e()})),n.$q.onSSRHydrated=()=>{}})}const D=function(e,t={}){const n={version:"2.10.2"};!1===R.Uf?(void 0!==t.config&&Object.assign(R.w6,t.config),n.config={...R.w6},(0,R.tP)()):n.config=t.config||{},P(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},F={version:"2.10.2",install:D,lang:y,iconSet:C}},8762:(e,t,n)=>{var r=n(6107),i=n(7545),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},9667:(e,t,n)=>{var r=n(9627),i=n(7545),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a constructor")}},9220:(e,t,n)=>{var r=n(6107),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},5323:(e,t,n)=>{var r=n(4103),i=n(5267),o=n(1012).f,s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},3366:(e,t,n)=>{"use strict";var r=n(6823).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},8406:(e,t,n)=>{var r=n(6123),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},616:(e,t,n)=>{var r=n(1419),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},8389:e=>{e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},8086:(e,t,n)=>{"use strict";var r,i,o,s=n(8389),a=n(4133),l=n(3834),u=n(6107),c=n(1419),h=n(2924),d=n(4239),f=n(7545),p=n(4722),m=n(4076),g=n(1012).f,v=n(6123),y=n(7886),b=n(6534),w=n(4103),_=n(3965),E=n(780),S=E.enforce,T=E.get,k=l.Int8Array,x=k&&k.prototype,I=l.Uint8ClampedArray,C=I&&I.prototype,A=k&&y(k),R=x&&y(x),O=Object.prototype,N=l.TypeError,L=w("toStringTag"),P=_("TYPED_ARRAY_TAG"),D="TypedArrayConstructor",F=s&&!!b&&"Opera"!==d(l.opera),M=!1,q={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},V=function(e){if(!c(e))return!1;var t=d(e);return"DataView"===t||h(q,t)||h(U,t)},j=function(e){var t=y(e);if(c(t)){var n=T(t);return n&&h(n,D)?n[D]:j(t)}},B=function(e){if(!c(e))return!1;var t=d(e);return h(q,t)||h(U,t)},$=function(e){if(B(e))return e;throw N("Target is not a typed array")},z=function(e){if(u(e)&&(!b||v(A,e)))return e;throw N(f(e)+" is not a typed array constructor")},H=function(e,t,n,r){if(a){if(n)for(var i in q){var o=l[i];if(o&&h(o.prototype,e))try{delete o.prototype[e]}catch(s){try{o.prototype[e]=t}catch(u){}}}R[e]&&!n||m(R,e,n?t:F&&x[e]||t,r)}},K=function(e,t,n){var r,i;if(a){if(b){if(n)for(r in q)if(i=l[r],i&&h(i,e))try{delete i[e]}catch(o){}if(A[e]&&!n)return;try{return m(A,e,n?t:F&&A[e]||t)}catch(o){}}for(r in q)i=l[r],!i||i[e]&&!n||m(i,e,t)}};for(r in q)i=l[r],o=i&&i.prototype,o?S(o)[D]=i:F=!1;for(r in U)i=l[r],o=i&&i.prototype,o&&(S(o)[D]=i);if((!F||!u(A)||A===Function.prototype)&&(A=function(){throw N("Incorrect invocation")},F))for(r in q)l[r]&&b(l[r],A);if((!F||!R||R===O)&&(R=A.prototype,F))for(r in q)l[r]&&b(l[r].prototype,R);if(F&&y(C)!==R&&b(C,R),a&&!h(R,L))for(r in M=!0,g(R,L,{get:function(){return c(this)?this[P]:void 0}}),q)l[r]&&p(l[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:F,TYPED_ARRAY_TAG:M&&P,aTypedArray:$,aTypedArrayConstructor:z,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:j,isView:V,isTypedArray:B,TypedArray:A,TypedArrayPrototype:R}},2248:(e,t,n)=>{"use strict";var r=n(3834),i=n(1636),o=n(4133),s=n(8389),a=n(9104),l=n(4722),u=n(2714),c=n(8814),h=n(8406),d=n(6675),f=n(7302),p=n(4686),m=n(9798),g=n(7886),v=n(6534),y=n(3450).f,b=n(1012).f,w=n(5408),_=n(6378),E=n(2365),S=n(780),T=a.PROPER,k=a.CONFIGURABLE,x=S.get,I=S.set,C="ArrayBuffer",A="DataView",R="prototype",O="Wrong length",N="Wrong index",L=r[C],P=L,D=P&&P[R],F=r[A],M=F&&F[R],q=Object.prototype,U=r.Array,V=r.RangeError,j=i(w),B=i([].reverse),$=m.pack,z=m.unpack,H=function(e){return[255&e]},K=function(e){return[255&e,e>>8&255]},W=function(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]},G=function(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]},J=function(e){return $(e,23,4)},Q=function(e){return $(e,52,8)},Z=function(e,t){b(e[R],t,{get:function(){return x(this)[t]}})},Y=function(e,t,n,r){var i=p(n),o=x(e);if(i+t>o.byteLength)throw V(N);var s=x(o.buffer).bytes,a=i+o.byteOffset,l=_(s,a,a+t);return r?l:B(l)},X=function(e,t,n,r,i,o){var s=p(n),a=x(e);if(s+t>a.byteLength)throw V(N);for(var l=x(a.buffer).bytes,u=s+a.byteOffset,c=r(+i),h=0;h<t;h++)l[u+h]=c[o?h:t-h-1]};if(s){var ee=T&&L.name!==C;if(c((function(){L(1)}))&&c((function(){new L(-1)}))&&!c((function(){return new L,new L(1.5),new L(NaN),1!=L.length||ee&&!k})))ee&&k&&l(L,"name",C);else{P=function(e){return h(this,D),new L(p(e))},P[R]=D;for(var te,ne=y(L),re=0;ne.length>re;)(te=ne[re++])in P||l(P,te,L[te]);D.constructor=P}v&&g(M)!==q&&v(M,q);var ie=new F(new P(2)),oe=i(M.setInt8);ie.setInt8(0,2147483648),ie.setInt8(1,2147483649),!ie.getInt8(0)&&ie.getInt8(1)||u(M,{setInt8:function(e,t){oe(this,e,t<<24>>24)},setUint8:function(e,t){oe(this,e,t<<24>>24)}},{unsafe:!0})}else P=function(e){h(this,D);var t=p(e);I(this,{bytes:j(U(t),0),byteLength:t}),o||(this.byteLength=t)},D=P[R],F=function(e,t,n){h(this,M),h(e,D);var r=x(e).byteLength,i=d(t);if(i<0||i>r)throw V("Wrong offset");if(n=void 0===n?r-i:f(n),i+n>r)throw V(O);I(this,{buffer:e,byteLength:n,byteOffset:i}),o||(this.buffer=e,this.byteLength=n,this.byteOffset=i)},M=F[R],o&&(Z(P,"byteLength"),Z(F,"buffer"),Z(F,"byteLength"),Z(F,"byteOffset")),u(M,{getInt8:function(e){return Y(this,1,e)[0]<<24>>24},getUint8:function(e){return Y(this,1,e)[0]},getInt16:function(e){var t=Y(this,2,e,arguments.length>1?arguments[1]:void 0);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=Y(this,2,e,arguments.length>1?arguments[1]:void 0);return t[1]<<8|t[0]},getInt32:function(e){return G(Y(this,4,e,arguments.length>1?arguments[1]:void 0))},getUint32:function(e){return G(Y(this,4,e,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(e){return z(Y(this,4,e,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(e){return z(Y(this,8,e,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(e,t){X(this,1,e,H,t)},setUint8:function(e,t){X(this,1,e,H,t)},setInt16:function(e,t){X(this,2,e,K,t,arguments.length>2?arguments[2]:void 0)},setUint16:function(e,t){X(this,2,e,K,t,arguments.length>2?arguments[2]:void 0)},setInt32:function(e,t){X(this,4,e,W,t,arguments.length>2?arguments[2]:void 0)},setUint32:function(e,t){X(this,4,e,W,t,arguments.length>2?arguments[2]:void 0)},setFloat32:function(e,t){X(this,4,e,J,t,arguments.length>2?arguments[2]:void 0)},setFloat64:function(e,t){X(this,8,e,Q,t,arguments.length>2?arguments[2]:void 0)}});E(P,C),E(F,A),e.exports={ArrayBuffer:P,DataView:F}},5408:(e,t,n)=>{"use strict";var r=n(8332),i=n(2661),o=n(8600);e.exports=function(e){var t=r(this),n=o(t),s=arguments.length,a=i(s>1?arguments[1]:void 0,n),l=s>2?arguments[2]:void 0,u=void 0===l?n:i(l,n);while(u>a)t[a++]=e;return t}},7714:(e,t,n)=>{var r=n(7447),i=n(2661),o=n(8600),s=function(e){return function(t,n,s){var a,l=r(t),u=o(l),c=i(s,u);if(e&&n!=n){while(u>c)if(a=l[c++],a!=a)return!0}else for(;u>c;c++)if((e||c in l)&&l[c]===n)return e||c||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},9275:(e,t,n)=>{var r=n(6158),i=n(3972),o=n(8332),s=n(8600),a=function(e){var t=1==e;return function(n,a,l){var u,c,h=o(n),d=i(h),f=r(a,l),p=s(d);while(p-- >0)if(u=d[p],c=f(u,p,h),c)switch(e){case 0:return u;case 1:return p}return t?-1:void 0}};e.exports={findLast:a(0),findLastIndex:a(1)}},9226:(e,t,n)=>{var r=n(6158),i=n(1636),o=n(3972),s=n(8332),a=n(8600),l=n(4837),u=i([].push),c=function(e){var t=1==e,n=2==e,i=3==e,c=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,m,g,v){for(var y,b,w=s(p),_=o(w),E=r(m,g),S=a(_),T=0,k=v||l,x=t?k(p,S):n||d?k(p,0):void 0;S>T;T++)if((f||T in _)&&(y=_[T],b=E(y,T,w),e))if(t)x[T]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return T;case 2:u(x,y)}else switch(e){case 4:return!1;case 7:u(x,y)}return h?-1:i||c?c:x}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},3614:(e,t,n)=>{"use strict";var r=n(4133),i=n(6555),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},6378:(e,t,n)=>{var r=n(2661),i=n(8600),o=n(5976),s=Array,a=Math.max;e.exports=function(e,t,n){for(var l=i(e),u=r(t,l),c=r(void 0===n?l:n,l),h=s(a(c-u,0)),d=0;u<c;u++,d++)o(h,d,e[u]);return h.length=d,h}},7085:(e,t,n)=>{var r=n(6378),i=Math.floor,o=function(e,t){var n=e.length,l=i(n/2);return n<8?s(e,t):a(e,o(r(e,0,l),t),o(r(e,l),t),t)},s=function(e,t){var n,r,i=e.length,o=1;while(o<i){r=o,n=e[o];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==o++&&(e[r]=n)}return e},a=function(e,t,n,r){var i=t.length,o=n.length,s=0,a=0;while(s<i||a<o)e[s+a]=s<i&&a<o?r(t[s],n[a])<=0?t[s++]:n[a++]:s<i?t[s++]:n[a++];return e};e.exports=o},4622:(e,t,n)=>{var r=n(6555),i=n(9627),o=n(1419),s=n(4103),a=s("species"),l=Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,i(t)&&(t===l||r(t.prototype))?t=void 0:o(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?l:t}},4837:(e,t,n)=>{var r=n(4622);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},8272:(e,t,n)=>{var r=n(4103),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(l){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(l){}return n}},6749:(e,t,n)=>{var r=n(1636),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},4239:(e,t,n)=>{var r=n(4130),i=n(6107),o=n(6749),s=n(4103),a=s("toStringTag"),l=Object,u="Arguments"==o(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=l(e),a))?n:u?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},7366:(e,t,n)=>{var r=n(2924),i=n(1240),o=n(863),s=n(1012);e.exports=function(e,t,n){for(var a=i(t),l=s.f,u=o.f,c=0;c<a.length;c++){var h=a[c];r(e,h)||n&&r(n,h)||l(e,h,u(t,h))}}},911:(e,t,n)=>{var r=n(8814);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},4722:(e,t,n)=>{var r=n(4133),i=n(1012),o=n(3386);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},3386:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},5976:(e,t,n)=>{"use strict";var r=n(1017),i=n(1012),o=n(3386);e.exports=function(e,t,n){var s=r(t);s in e?i.f(e,s,o(0,n)):e[s]=n}},9570:(e,t,n)=>{var r=n(2358),i=n(1012);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},4076:(e,t,n)=>{var r=n(6107),i=n(1012),o=n(2358),s=n(5437);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&o(n,u,a),a.global)l?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(c){}l?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},2714:(e,t,n)=>{var r=n(4076);e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},5437:(e,t,n)=>{var r=n(3834),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6405:(e,t,n)=>{"use strict";var r=n(7545),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},4133:(e,t,n)=>{var r=n(8814);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},948:e=>{var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},1657:(e,t,n)=>{var r=n(3834),i=n(1419),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},6689:e=>{var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},259:(e,t,n)=>{var r=n(322),i=r.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},1280:(e,t,n)=>{var r=n(322);e.exports=/MSIE|Trident/.test(r)},322:(e,t,n)=>{var r=n(7859);e.exports=r("navigator","userAgent")||""},1418:(e,t,n)=>{var r,i,o=n(3834),s=n(322),a=o.process,l=o.Deno,u=a&&a.versions||l&&l.version,c=u&&u.v8;c&&(r=c.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},7433:(e,t,n)=>{var r=n(322),i=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},203:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7940:(e,t,n)=>{var r=n(1636),i=Error,o=r("".replace),s=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(s);e.exports=function(e,t){if(l&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},9277:(e,t,n)=>{var r=n(8814),i=n(3386);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},6943:(e,t,n)=>{var r=n(3834),i=n(863).f,o=n(4722),s=n(4076),a=n(5437),l=n(7366),u=n(2764);e.exports=function(e,t){var n,c,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(c=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,c)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(c,h),d=p&&p.value):d=c[h],n=u(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(c,h,f,e)}}},8814:e=>{e.exports=function(e){try{return!!e()}catch(t){return!0}}},3218:(e,t,n)=>{"use strict";n(1476);var r=n(9287),i=n(4076),o=n(738),s=n(8814),a=n(4103),l=n(4722),u=a("species"),c=RegExp.prototype;e.exports=function(e,t,n,h){var d=a(e),f=!s((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f&&!s((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!p||n){var m=r(/./[d]),g=t(d,""[e],(function(e,t,n,i,s){var a=r(e),l=t.exec;return l===o||l===c.exec?f&&!s?{done:!0,value:m(t,n,i)}:{done:!0,value:a(n,t,i)}:{done:!1}}));i(String.prototype,e,g[0]),i(c,d,g[1])}h&&l(c[d],"sham",!0)}},6112:(e,t,n)=>{var r=n(9793),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},6158:(e,t,n)=>{var r=n(9287),i=n(8762),o=n(9793),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?s(e,t):function(){return e.apply(t,arguments)}}},9793:(e,t,n)=>{var r=n(8814);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6654:(e,t,n)=>{var r=n(9793),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},9104:(e,t,n)=>{var r=n(4133),i=n(2924),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),l=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:u}},9287:(e,t,n)=>{var r=n(6749),i=n(1636);e.exports=function(e){if("Function"===r(e))return i(e)}},1636:(e,t,n)=>{var r=n(9793),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},7859:(e,t,n)=>{var r=n(3834),i=n(6107),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},3395:(e,t,n)=>{var r=n(4239),i=n(7689),o=n(3873),s=n(1366),a=n(4103),l=a("iterator");e.exports=function(e){if(!o(e))return i(e,l)||i(e,"@@iterator")||s[r(e)]}},4021:(e,t,n)=>{var r=n(6654),i=n(8762),o=n(616),s=n(7545),a=n(3395),l=TypeError;e.exports=function(e,t){var n=arguments.length<2?a(e):t;if(i(n))return o(r(n,e));throw l(s(e)+" is not iterable")}},7689:(e,t,n)=>{var r=n(8762),i=n(3873);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},3075:(e,t,n)=>{var r=n(1636),i=n(8332),o=Math.floor,s=r("".charAt),a=r("".replace),l=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,h,d){var f=n+e.length,p=r.length,m=c;return void 0!==h&&(h=i(h),m=u),a(d,m,(function(i,a){var u;switch(s(a,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,n);case"'":return l(t,f);case"<":u=h[l(a,1,-1)];break;default:var c=+a;if(0===c)return i;if(c>p){var d=o(c/10);return 0===d?i:d<=p?void 0===r[d-1]?s(a,1):r[d-1]+s(a,1):i}u=r[c-1]}return void 0===u?"":u}))}},3834:(e,t,n)=>{var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2924:(e,t,n)=>{var r=n(1636),i=n(8332),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},1999:e=>{e.exports={}},6052:(e,t,n)=>{var r=n(7859);e.exports=r("document","documentElement")},6335:(e,t,n)=>{var r=n(4133),i=n(8814),o=n(1657);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},9798:e=>{var t=Array,n=Math.abs,r=Math.pow,i=Math.floor,o=Math.log,s=Math.LN2,a=function(e,a,l){var u,c,h,d=t(l),f=8*l-a-1,p=(1<<f)-1,m=p>>1,g=23===a?r(2,-24)-r(2,-77):0,v=e<0||0===e&&1/e<0?1:0,y=0;e=n(e),e!=e||e===1/0?(c=e!=e?1:0,u=p):(u=i(o(e)/s),h=r(2,-u),e*h<1&&(u--,h*=2),e+=u+m>=1?g/h:g*r(2,1-m),e*h>=2&&(u++,h/=2),u+m>=p?(c=0,u=p):u+m>=1?(c=(e*h-1)*r(2,a),u+=m):(c=e*r(2,m-1)*r(2,a),u=0));while(a>=8)d[y++]=255&c,c/=256,a-=8;u=u<<a|c,f+=a;while(f>0)d[y++]=255&u,u/=256,f-=8;return d[--y]|=128*v,d},l=function(e,t){var n,i=e.length,o=8*i-t-1,s=(1<<o)-1,a=s>>1,l=o-7,u=i-1,c=e[u--],h=127&c;c>>=7;while(l>0)h=256*h+e[u--],l-=8;n=h&(1<<-l)-1,h>>=-l,l+=t;while(l>0)n=256*n+e[u--],l-=8;if(0===h)h=1-a;else{if(h===s)return n?NaN:c?-1/0:1/0;n+=r(2,t),h-=a}return(c?-1:1)*n*r(2,h-t)};e.exports={pack:a,unpack:l}},3972:(e,t,n)=>{var r=n(1636),i=n(8814),o=n(6749),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a(e,""):s(e)}:s},2511:(e,t,n)=>{var r=n(6107),i=n(1419),o=n(6534);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},6461:(e,t,n)=>{var r=n(1636),i=n(6107),o=n(6081),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},6270:(e,t,n)=>{var r=n(1419),i=n(4722);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},780:(e,t,n)=>{var r,i,o,s=n(5779),a=n(3834),l=n(1419),u=n(4722),c=n(2924),h=n(6081),d=n(5315),f=n(1999),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var b=h.state||(h.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw m(p);return t.facade=e,b.set(e,t),t},i=function(e){return b.get(e)||{}},o=function(e){return b.has(e)}}else{var w=d("state");f[w]=!0,r=function(e,t){if(c(e,w))throw m(p);return t.facade=e,u(e,w,t),t},i=function(e){return c(e,w)?e[w]:{}},o=function(e){return c(e,w)}}e.exports={set:r,get:i,has:o,enforce:v,getterFor:y}},5712:(e,t,n)=>{var r=n(4103),i=n(1366),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},6555:(e,t,n)=>{var r=n(6749);e.exports=Array.isArray||function(e){return"Array"==r(e)}},354:(e,t,n)=>{var r=n(4239),i=n(1636),o=i("".slice);e.exports=function(e){return"Big"===o(r(e),0,3)}},6107:(e,t,n)=>{var r=n(948),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},9627:(e,t,n)=>{var r=n(1636),i=n(8814),o=n(6107),s=n(4239),a=n(7859),l=n(6461),u=function(){},c=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),m=function(e){if(!o(e))return!1;try{return h(u,c,e),!0}catch(t){return!1}},g=function(e){if(!o(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,l(e))}catch(t){return!0}};g.sham=!0,e.exports=!h||i((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?g:m},2764:(e,t,n)=>{var r=n(8814),i=n(6107),o=/#|\.prototype\./,s=function(e,t){var n=l[a(e)];return n==c||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},l=s.data={},u=s.NATIVE="N",c=s.POLYFILL="P";e.exports=s},3903:(e,t,n)=>{var r=n(1419),i=Math.floor;e.exports=Number.isInteger||function(e){return!r(e)&&isFinite(e)&&i(e)===e}},3873:e=>{e.exports=function(e){return null===e||void 0===e}},1419:(e,t,n)=>{var r=n(6107),i=n(948),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===o}:function(e){return"object"==typeof e?null!==e:r(e)}},200:e=>{e.exports=!1},1637:(e,t,n)=>{var r=n(7859),i=n(6107),o=n(6123),s=n(49),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},1366:e=>{e.exports={}},8600:(e,t,n)=>{var r=n(7302);e.exports=function(e){return r(e.length)}},2358:(e,t,n)=>{var r=n(8814),i=n(6107),o=n(2924),s=n(4133),a=n(9104).CONFIGURABLE,l=n(6461),u=n(780),c=u.enforce,h=u.get,d=Object.defineProperty,f=s&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||a&&e.name!==t)&&(s?d(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&o(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=c(e);return o(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&h(this).source||l(this)}),"toString")},7233:e=>{var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},1356:(e,t,n)=>{var r=n(6975);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},5267:(e,t,n)=>{var r,i=n(616),o=n(6029),s=n(203),a=n(1999),l=n(6052),u=n(1657),c=n(5315),h=">",d="<",f="prototype",p="script",m=c("IE_PROTO"),g=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",l.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=s.length;while(e--)delete w[f][s[e]];return w()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=w(),void 0===t?n:o.f(n,t)}},6029:(e,t,n)=>{var r=n(4133),i=n(64),o=n(1012),s=n(616),a=n(7447),l=n(4315);t.f=r&&!i?Object.defineProperties:function(e,t){s(e);var n,r=a(t),i=l(t),u=i.length,c=0;while(u>c)o.f(e,n=i[c++],r[n]);return e}},1012:(e,t,n)=>{var r=n(4133),i=n(6335),o=n(64),s=n(616),a=n(1017),l=TypeError,u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=c(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},863:(e,t,n)=>{var r=n(4133),i=n(6654),o=n(8068),s=n(3386),a=n(7447),l=n(1017),u=n(2924),c=n(6335),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=l(t),c)try{return h(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},3450:(e,t,n)=>{var r=n(6682),i=n(203),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},1996:(e,t)=>{t.f=Object.getOwnPropertySymbols},7886:(e,t,n)=>{var r=n(2924),i=n(6107),o=n(8332),s=n(5315),a=n(911),l=s("IE_PROTO"),u=Object,c=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=o(e);if(r(t,l))return t[l];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?c:null}},6123:(e,t,n)=>{var r=n(1636);e.exports=r({}.isPrototypeOf)},6682:(e,t,n)=>{var r=n(1636),i=n(2924),o=n(7447),s=n(7714).indexOf,a=n(1999),l=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,c=[];for(n in r)!i(a,n)&&i(r,n)&&l(c,n);while(t.length>u)i(r,n=t[u++])&&(~s(c,n)||l(c,n));return c}},4315:(e,t,n)=>{var r=n(6682),i=n(203);e.exports=Object.keys||function(e){return r(e,i)}},8068:(e,t)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},6534:(e,t,n)=>{var r=n(1636),i=n(616),o=n(9220);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},9370:(e,t,n)=>{var r=n(6654),i=n(6107),o=n(1419),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},1240:(e,t,n)=>{var r=n(7859),i=n(1636),o=n(3450),s=n(1996),a=n(616),l=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?l(t,n(e)):t}},4569:(e,t,n)=>{var r=n(1012).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},3808:(e,t,n)=>{var r=n(6654),i=n(616),o=n(6107),s=n(6749),a=n(738),l=TypeError;e.exports=function(e,t){var n=e.exec;if(o(n)){var u=r(n,e,t);return null!==u&&i(u),u}if("RegExp"===s(e))return r(a,e,t);throw l("RegExp#exec called on incompatible receiver")}},738:(e,t,n)=>{"use strict";var r=n(6654),i=n(1636),o=n(6975),s=n(9592),a=n(9165),l=n(8850),u=n(5267),c=n(780).get,h=n(3425),d=n(10),f=l("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,m=p,g=i("".charAt),v=i("".indexOf),y=i("".replace),b=i("".slice),w=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),_=a.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],S=w||E||_||h||d;S&&(m=function(e){var t,n,i,a,l,h,d,S=this,T=c(S),k=o(e),x=T.raw;if(x)return x.lastIndex=S.lastIndex,t=r(m,x,k),S.lastIndex=x.lastIndex,t;var I=T.groups,C=_&&S.sticky,A=r(s,S),R=S.source,O=0,N=k;if(C&&(A=y(A,"y",""),-1===v(A,"g")&&(A+="g"),N=b(k,S.lastIndex),S.lastIndex>0&&(!S.multiline||S.multiline&&"\n"!==g(k,S.lastIndex-1))&&(R="(?: "+R+")",N=" "+N,O++),n=new RegExp("^(?:"+R+")",A)),E&&(n=new RegExp("^"+R+"$(?!\\s)",A)),w&&(i=S.lastIndex),a=r(p,C?n:S,N),C?a?(a.input=b(a.input,O),a[0]=b(a[0],O),a.index=S.lastIndex,S.lastIndex+=a[0].length):S.lastIndex=0:w&&a&&(S.lastIndex=S.global?a.index+a[0].length:i),E&&a&&a.length>1&&r(f,a[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a&&I)for(a.groups=h=u(null),l=0;l<I.length;l++)d=I[l],h[d[0]]=a[d[1]];return a}),e.exports=m},9592:(e,t,n)=>{"use strict";var r=n(616);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},9165:(e,t,n)=>{var r=n(8814),i=n(3834),o=i.RegExp,s=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=s||r((function(){return!o("a","y").sticky})),l=s||r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:l,MISSED_STICKY:a,UNSUPPORTED_Y:s}},3425:(e,t,n)=>{var r=n(8814),i=n(3834),o=i.RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},10:(e,t,n)=>{var r=n(8814),i=n(3834),o=i.RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},5177:(e,t,n)=>{var r=n(3873),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},7104:(e,t,n)=>{"use strict";var r=n(7859),i=n(1012),o=n(4103),s=n(4133),a=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},2365:(e,t,n)=>{var r=n(1012).f,i=n(2924),o=n(4103),s=o("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,s)&&r(e,s,{configurable:!0,value:t})}},5315:(e,t,n)=>{var r=n(8850),i=n(3965),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},6081:(e,t,n)=>{var r=n(3834),i=n(5437),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},8850:(e,t,n)=>{var r=n(200),i=n(6081);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6823:(e,t,n)=>{var r=n(1636),i=n(6675),o=n(6975),s=n(5177),a=r("".charAt),l=r("".charCodeAt),u=r("".slice),c=function(e){return function(t,n){var r,c,h=o(s(t)),d=i(n),f=h.length;return d<0||d>=f?e?"":void 0:(r=l(h,d),r<55296||r>56319||d+1===f||(c=l(h,d+1))<56320||c>57343?e?a(h,d):r:e?u(h,d,d+2):c-56320+(r-55296<<10)+65536)}};e.exports={codeAt:c(!1),charAt:c(!0)}},4651:(e,t,n)=>{var r=n(1418),i=n(8814);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},2661:(e,t,n)=>{var r=n(6675),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},7385:(e,t,n)=>{var r=n(4384),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw i("Can't convert number to bigint");return BigInt(t)}},4686:(e,t,n)=>{var r=n(6675),i=n(7302),o=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw o("Wrong length or index");return n}},7447:(e,t,n)=>{var r=n(3972),i=n(5177);e.exports=function(e){return r(i(e))}},6675:(e,t,n)=>{var r=n(7233);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7302:(e,t,n)=>{var r=n(6675),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},8332:(e,t,n)=>{var r=n(5177),i=Object;e.exports=function(e){return i(r(e))}},4084:(e,t,n)=>{var r=n(859),i=RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw i("Wrong offset");return n}},859:(e,t,n)=>{var r=n(6675),i=RangeError;e.exports=function(e){var t=r(e);if(t<0)throw i("The argument can't be less than 0");return t}},4384:(e,t,n)=>{var r=n(6654),i=n(1419),o=n(1637),s=n(7689),a=n(9370),l=n(4103),u=TypeError,c=l("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,l=s(e,c);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},1017:(e,t,n)=>{var r=n(4384),i=n(1637);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},4130:(e,t,n)=>{var r=n(4103),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},6975:(e,t,n)=>{var r=n(4239),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},7545:e=>{var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},8532:(e,t,n)=>{"use strict";var r=n(6943),i=n(3834),o=n(6654),s=n(4133),a=n(5136),l=n(8086),u=n(2248),c=n(8406),h=n(3386),d=n(4722),f=n(3903),p=n(7302),m=n(4686),g=n(4084),v=n(1017),y=n(2924),b=n(4239),w=n(1419),_=n(1637),E=n(5267),S=n(6123),T=n(6534),k=n(3450).f,x=n(1157),I=n(9226).forEach,C=n(7104),A=n(1012),R=n(863),O=n(780),N=n(2511),L=O.get,P=O.set,D=O.enforce,F=A.f,M=R.f,q=Math.round,U=i.RangeError,V=u.ArrayBuffer,j=V.prototype,B=u.DataView,$=l.NATIVE_ARRAY_BUFFER_VIEWS,z=l.TYPED_ARRAY_TAG,H=l.TypedArray,K=l.TypedArrayPrototype,W=l.aTypedArrayConstructor,G=l.isTypedArray,J="BYTES_PER_ELEMENT",Q="Wrong length",Z=function(e,t){W(e);var n=0,r=t.length,i=new e(r);while(r>n)i[n]=t[n++];return i},Y=function(e,t){F(e,t,{get:function(){return L(this)[t]}})},X=function(e){var t;return S(j,e)||"ArrayBuffer"==(t=b(e))||"SharedArrayBuffer"==t},ee=function(e,t){return G(e)&&!_(t)&&t in e&&f(+t)&&t>=0},te=function(e,t){return t=v(t),ee(e,t)?h(2,e[t]):M(e,t)},ne=function(e,t,n){return t=v(t),!(ee(e,t)&&w(n)&&y(n,"value"))||y(n,"get")||y(n,"set")||n.configurable||y(n,"writable")&&!n.writable||y(n,"enumerable")&&!n.enumerable?F(e,t,n):(e[t]=n.value,e)};s?($||(R.f=te,A.f=ne,Y(K,"buffer"),Y(K,"byteOffset"),Y(K,"byteLength"),Y(K,"length")),r({target:"Object",stat:!0,forced:!$},{getOwnPropertyDescriptor:te,defineProperty:ne}),e.exports=function(e,t,n){var s=e.match(/\d+$/)[0]/8,l=e+(n?"Clamped":"")+"Array",u="get"+e,h="set"+e,f=i[l],v=f,y=v&&v.prototype,b={},_=function(e,t){var n=L(e);return n.view[u](t*s+n.byteOffset,!0)},S=function(e,t,r){var i=L(e);n&&(r=(r=q(r))<0?0:r>255?255:255&r),i.view[h](t*s+i.byteOffset,r,!0)},A=function(e,t){F(e,t,{get:function(){return _(this,t)},set:function(e){return S(this,t,e)},enumerable:!0})};$?a&&(v=t((function(e,t,n,r){return c(e,y),N(function(){return w(t)?X(t)?void 0!==r?new f(t,g(n,s),r):void 0!==n?new f(t,g(n,s)):new f(t):G(t)?Z(v,t):o(x,v,t):new f(m(t))}(),e,v)})),T&&T(v,H),I(k(f),(function(e){e in v||d(v,e,f[e])})),v.prototype=y):(v=t((function(e,t,n,r){c(e,y);var i,a,l,u=0,h=0;if(w(t)){if(!X(t))return G(t)?Z(v,t):o(x,v,t);i=t,h=g(n,s);var d=t.byteLength;if(void 0===r){if(d%s)throw U(Q);if(a=d-h,a<0)throw U(Q)}else if(a=p(r)*s,a+h>d)throw U(Q);l=a/s}else l=m(t),a=l*s,i=new V(a);P(e,{buffer:i,byteOffset:h,byteLength:a,length:l,view:new B(i)});while(u<l)A(e,u++)})),T&&T(v,H),y=v.prototype=E(K)),y.constructor!==v&&d(y,"constructor",v),D(y).TypedArrayConstructor=v,z&&d(y,z,l);var R=v!=f;b[l]=v,r({global:!0,constructor:!0,forced:R,sham:!$},b),J in v||d(v,J,s),J in y||d(y,J,s),C(l)}):e.exports=function(){}},5136:(e,t,n)=>{var r=n(3834),i=n(8814),o=n(8272),s=n(8086).NATIVE_ARRAY_BUFFER_VIEWS,a=r.ArrayBuffer,l=r.Int8Array;e.exports=!s||!i((function(){l(1)}))||!i((function(){new l(-1)}))||!o((function(e){new l,new l(null),new l(1.5),new l(e)}),!0)||i((function(){return 1!==new l(new a(2),1,void 0).length}))},1157:(e,t,n)=>{var r=n(6158),i=n(6654),o=n(9667),s=n(8332),a=n(8600),l=n(4021),u=n(3395),c=n(5712),h=n(354),d=n(8086).aTypedArrayConstructor,f=n(7385);e.exports=function(e){var t,n,p,m,g,v,y,b,w=o(this),_=s(e),E=arguments.length,S=E>1?arguments[1]:void 0,T=void 0!==S,k=u(_);if(k&&!c(k)){y=l(_,k),b=y.next,_=[];while(!(v=i(b,y)).done)_.push(v.value)}for(T&&E>2&&(S=r(S,arguments[2])),n=a(_),p=new(d(w))(n),m=h(p),t=0;n>t;t++)g=T?S(_[t],t):_[t],p[t]=m?f(g):+g;return p}},3965:(e,t,n)=>{var r=n(1636),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},49:(e,t,n)=>{var r=n(4651);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},64:(e,t,n)=>{var r=n(4133),i=n(8814);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5779:(e,t,n)=>{var r=n(3834),i=n(6107),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},4103:(e,t,n)=>{var r=n(3834),i=n(8850),o=n(2924),s=n(3965),a=n(4651),l=n(49),u=i("wks"),c=r.Symbol,h=c&&c["for"],d=l?c:c&&c.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(c,e)?u[e]=c[e]:u[e]=l&&h?h(t):d(t)}return u[e]}},8376:(e,t,n)=>{"use strict";var r=n(7859),i=n(2924),o=n(4722),s=n(6123),a=n(6534),l=n(7366),u=n(4569),c=n(2511),h=n(1356),d=n(6270),f=n(7940),p=n(9277),m=n(4133),g=n(200);e.exports=function(e,t,n,v){var y="stackTraceLimit",b=v?2:1,w=e.split("."),_=w[w.length-1],E=r.apply(null,w);if(E){var S=E.prototype;if(!g&&i(S,"cause")&&delete S.cause,!n)return E;var T=r("Error"),k=t((function(e,t){var n=h(v?t:e,void 0),r=v?new E(e):new E;return void 0!==n&&o(r,"message",n),p&&o(r,"stack",f(r.stack,2)),this&&s(S,this)&&c(r,this,k),arguments.length>b&&d(r,arguments[b]),r}));if(k.prototype=S,"Error"!==_?a?a(k,T):l(k,T,{name:!0}):m&&y in E&&(u(k,E,y),u(k,E,"prepareStackTrace")),l(k,E),!g)try{S.name!==_&&o(S,"name",_),S.constructor=k}catch(x){}return k}}},6727:(e,t,n)=>{"use strict";var r=n(6943),i=n(7714).includes,o=n(8814),s=n(5323),a=o((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")},9665:(e,t,n)=>{"use strict";var r=n(6943),i=n(8332),o=n(8600),s=n(3614),a=n(6689),l=n(8814),u=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||c},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var l=0;l<r;l++)t[n]=arguments[l],n++;return s(t,n),n}})},6890:(e,t,n)=>{"use strict";var r=n(6943),i=n(8332),o=n(8600),s=n(3614),a=n(6405),l=n(6689),u=1!==[].unshift(0),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||c},{unshift:function(e){var t=i(this),n=o(t),r=arguments.length;if(r){l(n+r);var u=n;while(u--){var c=u+r;u in t?t[c]=t[u]:a(t,c)}for(var h=0;h<r;h++)t[h]=arguments[h]}return s(t,n+r)}})},6822:(e,t,n)=>{var r=n(6943),i=n(3834),o=n(6112),s=n(8376),a="WebAssembly",l=i[a],u=7!==Error("e",{cause:7}).cause,c=function(e,t){var n={};n[e]=s(e,t,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},h=function(e,t){if(l&&l[e]){var n={};n[e]=s(a+"."+e,t,u),r({target:a,stat:!0,constructor:!0,arity:1,forced:u},n)}};c("Error",(function(e){return function(t){return o(e,this,arguments)}})),c("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),c("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),c("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),c("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),c("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),c("URIError",(function(e){return function(t){return o(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},1476:(e,t,n)=>{"use strict";var r=n(6943),i=n(738);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},3122:(e,t,n)=>{var r=n(3834),i=n(4133),o=n(9570),s=n(9592),a=n(8814),l=r.RegExp,u=l.prototype,c=i&&a((function(){var e=!0;try{l(".","d")}catch(c){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in e&&(o.hasIndices="d"),o)i(s,o[s]);var a=Object.getOwnPropertyDescriptor(u,"flags").get.call(t);return a!==r||n!==r}));c&&o(u,"flags",{configurable:!0,get:s})},8964:(e,t,n)=>{"use strict";var r=n(6112),i=n(6654),o=n(1636),s=n(3218),a=n(8814),l=n(616),u=n(6107),c=n(3873),h=n(6675),d=n(7302),f=n(6975),p=n(5177),m=n(3366),g=n(7689),v=n(3075),y=n(3808),b=n(4103),w=b("replace"),_=Math.max,E=Math.min,S=o([].concat),T=o([].push),k=o("".indexOf),x=o("".slice),I=function(e){return void 0===e?e:String(e)},C=function(){return"$0"==="a".replace(/./,"$0")}(),A=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),R=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,t,n){var o=A?"$":"$0";return[function(e,n){var r=p(this),o=c(e)?void 0:g(e,w);return o?i(o,e,r,n):i(t,f(r),e,n)},function(e,i){var s=l(this),a=f(e);if("string"==typeof i&&-1===k(i,o)&&-1===k(i,"$<")){var c=n(t,s,a,i);if(c.done)return c.value}var p=u(i);p||(i=f(i));var g=s.global;if(g){var b=s.unicode;s.lastIndex=0}var w=[];while(1){var C=y(s,a);if(null===C)break;if(T(w,C),!g)break;var A=f(C[0]);""===A&&(s.lastIndex=m(a,d(s.lastIndex),b))}for(var R="",O=0,N=0;N<w.length;N++){C=w[N];for(var L=f(C[0]),P=_(E(h(C.index),a.length),0),D=[],F=1;F<C.length;F++)T(D,I(C[F]));var M=C.groups;if(p){var q=S([L],D,P,a);void 0!==M&&T(q,M);var U=f(r(i,void 0,q))}else U=v(L,a,P,D,M,i);P>=O&&(R+=x(a,O,P)+U,O=P+L.length)}return R+x(a,O)}]}),!R||!C||A)},5231:(e,t,n)=>{"use strict";var r=n(8086),i=n(8600),o=n(6675),s=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(e){var t=s(this),n=i(t),r=o(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}))},7725:(e,t,n)=>{"use strict";var r=n(8086),i=n(5408),o=n(7385),s=n(4239),a=n(6654),l=n(1636),u=n(8814),c=r.aTypedArray,h=r.exportTypedArrayMethod,d=l("".slice),f=u((function(){var e=0;return new Int8Array(2).fill({valueOf:function(){return e++}}),1!==e}));h("fill",(function(e){var t=arguments.length;c(this);var n="Big"===d(s(this),0,3)?o(e):+e;return a(i,this,n,t>1?arguments[1]:void 0,t>2?arguments[2]:void 0)}),f)},548:(e,t,n)=>{"use strict";var r=n(8086),i=n(9275).findLastIndex,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLastIndex",(function(e){return i(o(this),e,arguments.length>1?arguments[1]:void 0)}))},9212:(e,t,n)=>{"use strict";var r=n(8086),i=n(9275).findLast,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLast",(function(e){return i(o(this),e,arguments.length>1?arguments[1]:void 0)}))},9359:(e,t,n)=>{"use strict";var r=n(3834),i=n(6654),o=n(8086),s=n(8600),a=n(4084),l=n(8332),u=n(8814),c=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,p=o.aTypedArray,m=o.exportTypedArrayMethod,g=!u((function(){var e=new Uint8ClampedArray(2);return i(f,e,{length:1,0:3},1),3!==e[1]})),v=g&&o.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var e=new h(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));m("set",(function(e){p(this);var t=a(arguments.length>1?arguments[1]:void 0,1),n=l(e);if(g)return i(f,this,n,t);var r=this.length,o=s(n),u=0;if(o+t>r)throw c("Wrong length");while(u<o)this[t+u]=n[u++]}),!g||v)},6408:(e,t,n)=>{"use strict";var r=n(3834),i=n(9287),o=n(8814),s=n(8762),a=n(7085),l=n(8086),u=n(259),c=n(1280),h=n(1418),d=n(7433),f=l.aTypedArray,p=l.exportTypedArrayMethod,m=r.Uint16Array,g=m&&i(m.prototype.sort),v=!!g&&!(o((function(){g(new m(2),null)}))&&o((function(){g(new m(2),{})}))),y=!!g&&!o((function(){if(h)return h<74;if(u)return u<67;if(c)return!0;if(d)return d<602;var e,t,n=new m(516),r=Array(516);for(e=0;e<516;e++)t=e%4,n[e]=515-e,r[e]=e-2*t+3;for(g(n,(function(e,t){return(e/4|0)-(t/4|0)})),e=0;e<516;e++)if(n[e]!==r[e])return!0})),b=function(e){return function(t,n){return void 0!==e?+e(t,n)||0:n!==n?-1:t!==t?1:0===t&&0===n?1/t>0&&1/n<0?1:-1:t>n}};p("sort",(function(e){return void 0!==e&&s(e),y?g(this,e):a(f(this),b(e))}),!y||v)},8170:(e,t,n)=>{var r=n(8532);r("Uint8",(function(e){return function(t,n,r){return e(this,t,n,r)}}))},222:(e,t,n)=>{"use strict";n.d(t,{ZF:()=>r.ZF});var r=n(8897),i="firebase",o="9.14.0";
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
(0,r.KN)(i,o,"app")},6605:(e,t,n)=>{"use strict";n.d(t,{Xb:()=>r.Xb,e5:()=>r.e5,hJ:()=>r.hJ,rh:()=>r.rh,v0:()=>r.v0});var r=n(202)},9017:(e,t,n)=>{"use strict";n.d(t,{ET:()=>uh,hJ:()=>sc,oe:()=>lh,JU:()=>ac,ad:()=>bc,cf:()=>ch,IO:()=>Gc,ar:()=>Qc});var r,i=n(8897),o=n(3513),s=n(9795),a=n(5505),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},c=c||{},h=l||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function b(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function w(e,t,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:b,w.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function S(){this.s=this.s,this.o=this.o}var T=0;S.prototype.s=!1,S.prototype.na=function(){this.s||(this.s=!0,this.M(),0==T)||m(this)},S.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function x(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function I(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function C(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function R(e){return/^[\s\xa0]*$/.test(e)}var O=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function N(e,t){return e<t?-1:e>t?1:0}function L(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function P(e){return-1!=L().indexOf(e)}function D(e){return D[" "](e),e}function F(e){var t=J;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}D[" "]=d;var M,q=P("Opera"),U=P("Trident")||P("MSIE"),V=P("Edge"),j=V||U,B=P("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),$=-1!=L().toLowerCase().indexOf("webkit")&&!P("Edge");function z(){var e=h.document;return e?e.documentMode:void 0}e:{var H="",K=function(){var e=L();return B?/rv:([^\);]+)(\)|;)/.exec(e):V?/Edge\/([\d\.]+)/.exec(e):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):$?/WebKit\/(\S+)/.exec(e):q?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(K&&(H=K?K[1]:""),U){var W=z();if(null!=W&&W>parseFloat(H)){M=String(W);break e}}M=H}var G,J={};function Q(){return F((function(){let e=0;const t=O(String(M)).split("."),n=O("9").split("."),r=Math.max(t.length,n.length);for(let s=0;0==e&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;e=N(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||N(0==i[2].length,0==o[2].length)||N(i[2],o[2]),i=i[3],o=o[3]}while(0==e)}return 0<=e}))}if(h.document&&U){var Z=z();G=Z||(parseInt(M,10)||void 0)}else G=void 0;var Y=G;function X(e,t){if(C.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(B){e:{try{D(t.nodeName);var i=!0;break e}catch(o){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&X.X.h.call(this)}}E(X,C);var ee={2:"touch",3:"pen",4:"mouse"};X.prototype.h=function(){X.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ne,this.ba=this.ea=!1}function ie(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function oe(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function se(e){const t={};for(const n in e)t[n]=e[n];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function le(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ae.length;t++)n=ae[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ue(e){this.src=e,this.g={},this.h=0}function ce(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=k(i,t);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ba&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}ue.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=he(e,t,r,i);return-1<s?(t=e[s],n||(t.ea=!1)):(t=new re(t,this.src,o,!!r,i),t.ea=n,e.push(t)),t};var de="closure_lm_"+(1e6*Math.random()|0),fe={};function pe(e,t,n,r,i){if(r&&r.once)return ve(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)pe(e,t[o],n,r,i);return null}return n=Te(n),e&&e[te]?e.N(t,n,p(r)?!!r.capture:!!r,i):me(e,t,n,!1,r,i)}function me(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=p(i)?!!i.capture:!!i,a=Ee(e);if(a||(e[de]=a=new ue(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=ge(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)A||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(we(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ge(){function e(n){return t.call(e.src,e.listener,n)}const t=_e;return e}function ve(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)ve(e,t[o],n,r,i);return null}return n=Te(n),e&&e[te]?e.O(t,n,p(r)?!!r.capture:!!r,i):me(e,t,n,!0,r,i)}function ye(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)ye(e,t[o],n,r,i);else r=p(r)?!!r.capture:!!r,n=Te(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=he(o,n,r,i),-1<n&&(ie(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,i)),(n=-1<e?t[e]:null)&&be(n))}function be(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])ce(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(we(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ee(t))?(ce(n,e),0==n.h&&(n.src=null,t[de]=null)):ie(e)}}}function we(e){return e in fe?fe[e]:fe[e]="on"+e}function _e(e,t){if(e.ba)e=!0;else{t=new X(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&be(e),e=n.call(r,t)}return e}function Ee(e){return e=e[de],e instanceof ue?e:null}var Se="__closure_events_fn_"+(1e9*Math.random()>>>0);function Te(e){return"function"===typeof e?e:(e[Se]||(e[Se]=function(t){return e.handleEvent(t)}),e[Se])}function ke(){S.call(this),this.i=new ue(this),this.P=this,this.I=null}function xe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new C(t,e);else if(t instanceof C)t.target=t.target||e;else{var i=t;t=new C(r,e),le(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=Ie(s,r,!0,t)&&i}if(s=t.g=e,i=Ie(s,r,!0,t)&&i,i=Ie(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=Ie(s,r,!1,t)&&i}function Ie(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&ce(e.i,s),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}E(ke,S),ke.prototype[te]=!0,ke.prototype.removeEventListener=function(e,t,n,r){ye(this,e,t,n,r)},ke.prototype.M=function(){if(ke.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.I=null},ke.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ke.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ce=h.JSON.stringify;function Ae(){var e=qe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Re{constructor(){this.h=this.g=null}add(e,t){const n=Ne.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Oe,Ne=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Le),(e=>e.reset()));class Le{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Pe(e){h.setTimeout((()=>{throw e}),0)}function De(e,t){Oe||Fe(),Me||(Oe(),Me=!0),qe.add(e,t)}function Fe(){var e=h.Promise.resolve(void 0);Oe=function(){e.then(Ue)}}var Me=!1,qe=new Re;function Ue(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(n){Pe(n)}var t=Ne;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Me=!1}function Ve(e,t){ke.call(this),this.h=e||1,this.g=t||h,this.j=w(this.lb,this),this.l=Date.now()}function je(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Be(e,t,n){if("function"===typeof e)n&&(e=w(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=w(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function $e(e){e.g=Be((()=>{e.g=null,e.i&&(e.i=!1,$e(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}E(Ve,ke),r=Ve.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),xe(this,"tick"),this.ca&&(je(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ve.X.M.call(this),je(this),delete this.g};class ze extends S{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$e(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(e){S.call(this),this.h=e,this.g={}}E(He,S);var Ke=[];function We(e,t,n,r){Array.isArray(n)||(n&&(Ke[0]=n.toString()),n=Ke);for(var i=0;i<n.length;i++){var o=pe(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function Ge(e){oe(e.g,(function(e,t){this.g.hasOwnProperty(t)&&be(e)}),e),e.g={}}function Je(){this.g=!0}function Qe(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");s=2<=h.length&&"type"==h[1]?s+(c+"=")+u+"&":s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}function Ze(e,t,n,r,i,o,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+s}))}function Ye(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(r?" "+r:"")}))}function Xe(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Ce(n)}catch(a){return t}}He.prototype.M=function(){He.X.M.call(this),Ge(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Je.prototype.Aa=function(){this.g=!1},Je.prototype.info=function(){};var tt={},nt=null;function rt(){return nt=nt||new ke}function it(e){C.call(this,tt.Pa,e)}function ot(e){const t=rt();xe(t,new it(t))}function st(e,t){C.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=rt();xe(t,new st(t,e))}function lt(e,t){C.call(this,tt.Qa,e),this.size=t}function ut(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",E(it,C),tt.STAT_EVENT="statevent",E(st,C),tt.Qa="timingevent",E(lt,C);var ct={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ht={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function dt(){}function ft(e){return e.h||(e.h=e.i())}function pt(){}dt.prototype.h=null;var mt,gt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vt(){C.call(this,"d")}function yt(){C.call(this,"c")}function bt(){}function wt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new He(this),this.O=Et,e=j?125:void 0,this.T=new Ve(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _t}function _t(){this.i=null,this.g="",this.h=!1}E(vt,C),E(yt,C),E(bt,dt),bt.prototype.g=function(){return new XMLHttpRequest},bt.prototype.i=function(){return{}},mt=new bt;var Et=45e3,St={},Tt={};function kt(e,t,n){e.K=1,e.v=Wt(Bt(t)),e.s=n,e.P=!0,xt(e,null)}function xt(e,t){e.F=Date.now(),Rt(e),e.A=Bt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),e.C=0,n=e.l.H,e.h=new _t,e.g=hr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new ze(w(e.La,e,e.g),e.N)),We(e.S,e.g,"readystatechange",e.ib),t=e.H?se(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),ot(),Qe(e.j,e.u,e.A,e.m,e.U,e.s)}function It(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function Ct(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=At(e,n),r==Tt){4==t&&(e.o=4,at(14),i=!1),Ye(e.j,e.m,null,"[Incomplete Response]");break}if(r==St){e.o=4,at(15),Ye(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ye(e.j,e.m,r,null),Dt(e,r)}It(e)&&r!=Tt&&r!=St&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,at(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.K=!0,at(11))):(Ye(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),Lt(e))}function At(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Tt:(n=Number(t.substring(n,r)),isNaN(n)?St:(r+=1,r+n>t.length?Tt:(t=t.substr(r,n),e.C=r+n,t)))}function Rt(e){e.V=Date.now()+e.O,Ot(e,e.O)}function Ot(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ut(w(e.gb,e),t)}function Nt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Lt(e){0==e.l.G||e.I||sr(e.l,e)}function Pt(e){Nt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,je(e.T),Ge(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Dt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||mn(n.h,e)))if(!e.J&&mn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;or(n),Gn(n)}nr(n),at(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ut(w(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else lr(n,11)}else if((e.J||n.g==e)&&or(n),!R(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const c=u[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(gn(o,o.h),o.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Kt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=e;if(r.sa=cr(r,r.H?r.ka:null,r.V),s.J){vn(r.h,s);var a=s,l=r.J;l&&a.setTimeout(l),a.B&&(Nt(a),Rt(a)),r.g=s}else tr(r);0<n.i.length&&Qn(n)}else"stop"!=u[0]&&"close"!=u[0]||lr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?lr(n,7):Wn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}ot(4)}catch(u){}}function Ft(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Mt(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function qt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Mt(e),r=Ft(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}r=wt.prototype,r.setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==jn(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const c=jn(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>c)&&(3!=c||j||this.g&&(this.h.h||this.g.fa()||Bn(this.g)))){this.I||4!=c||7==t||ot(8==t||0>=d?3:2),Nt(this);var n=this.g.aa();this.Y=n;t:if(It(this)){var r=Bn(this.g);e="";var i=r.length,o=4==jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pt(this),Lt(this);var s="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==n,Ze(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,at(12),Pt(this),Lt(this);break e}Ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Dt(this,n)}this.P?(Ct(this,c,s),j&&this.i&&3==c&&(We(this.S,this.T,"tick",this.hb),this.T.start())):(Ye(this.j,this.m,s,null),Dt(this,s)),4==c&&Pt(this),this.i&&!this.I&&(4==c?sr(this.l,this):(this.i=!1,Rt(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Pt(this),Lt(this)}}}catch(c){}},r.hb=function(){if(this.g){var e=jn(this.g),t=this.g.fa();this.C<t.length&&(Nt(this),Ct(this,e,t),this.i&&4!=e&&Rt(this))}},r.cancel=function(){this.I=!0,Pt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Xe(this.j,this.A),2!=this.K&&(ot(),at(17)),Pt(this),this.o=2,Lt(this)):Ot(this,this.V-e)};var Ut=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function jt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof jt){this.h=void 0!==t?t:e.h,$t(this,e.j),this.s=e.s,this.g=e.g,zt(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ht(this,n),this.o=e.o}else e&&(n=String(e).match(Ut))?(this.h=!!t,$t(this,n[1]||"",!0),this.s=Gt(n[2]||""),this.g=Gt(n[3]||"",!0),zt(this,n[4]),this.l=Gt(n[5]||"",!0),Ht(this,n[6]||"",!0),this.o=Gt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function Bt(e){return new jt(e)}function $t(e,t,n){e.j=n?Gt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function zt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ht(e,t,n){t instanceof nn?(e.i=t,un(e.i,e.h)):(n||(t=Jt(t,en)),e.i=new nn(t,e.h))}function Kt(e,t,n){e.i.set(t,n)}function Wt(e){return Kt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Gt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Jt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Qt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Qt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Jt(t,Zt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Jt(t,Zt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Jt(n,"/"==n.charAt(0)?Xt:Yt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Jt(n,tn)),e.join("")};var Zt=/[#\/\?@]/g,Yt=/[#\?:]/g,Xt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&Vt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function on(e,t){rn(e),t=ln(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function sn(e,t){return rn(e),t=ln(e,t),e.g.has(t)}function an(e,t,n){on(e,t),0<n.length&&(e.i=null,e.g.set(ln(e,t),x(n)),e.h+=n.length)}function ln(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function un(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(on(this,t),an(this,n,e))}),e)),e.j=t}r=nn.prototype,r.add=function(e,t){rn(this),this.i=null,e=ln(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.W=function(e){rn(this);let t=[];if("string"===typeof e)sn(this,e)&&(t=t.concat(this.g.get(ln(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return rn(this),this.i=null,e=ln(this,e),sn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};var cn=class{constructor(e,t){this.h=e,this.g=t}};function hn(e){this.l=e||dn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function pn(e){return e.h?1:e.g?e.g.size:0}function mn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function gn(e,t){e.g?e.g.add(t):e.h=t}function vn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function yn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return x(e.i)}function bn(){}function wn(){this.g=new bn}function _n(e,t,n){const r=n||"";try{qt(e,(function(e,n){let i=e;p(e)&&(i=Ce(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function En(e,t){const n=new Je;if(h.Image){const r=new Image;r.onload=_(Sn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(Sn,n,r,"TestLoadImage: error",!1,t),r.onabort=_(Sn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(Sn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Sn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(o){}}function Tn(e){this.l=e.ac||null,this.j=e.jb||!1}function kn(e,t){ke.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=xn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},bn.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},bn.prototype.parse=function(e){return h.JSON.parse(e,void 0)},E(Tn,dt),Tn.prototype.g=function(){return new kn(this.l,this.j)},Tn.prototype.i=function(e){return function(){return e}}({}),E(kn,ke);var xn=0;function In(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Cn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,An(e)}function An(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=kn.prototype,r.open=function(e,t){if(this.readyState!=xn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,An(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Cn(this)),this.readyState=xn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;In(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Cn(this):An(this),3==this.readyState&&In(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,Cn(this))},r.Ua=function(e){this.g&&(this.response=e,Cn(this))},r.ga=function(){this.g&&Cn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Rn=h.JSON.parse;function On(e){ke.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nn,this.K=this.L=!1}E(On,ke);var Nn="",Ln=/^https?$/i,Pn=["POST","PUT"];function Dn(e){return U&&Q()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Fn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Mn(e),Un(e)}function Mn(e){e.D||(e.D=!0,xe(e,"complete"),xe(e,"error"))}function qn(e){if(e.h&&"undefined"!=typeof c&&(!e.C[1]||4!=jn(e)||2!=e.aa()))if(e.v&&4==jn(e))Be(e.Ha,0,e);else if(xe(e,"readystatechange"),4==jn(e)){e.h=!1;try{const l=e.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===l){var i=String(e.H).match(Ut)[1]||null;if(!i&&h.self&&h.self.location){var o=h.self.location.protocol;i=o.substr(0,o.length-1)}r=!Ln.test(i?i.toLowerCase():"")}n=r}if(n)xe(e,"complete"),xe(e,"success");else{e.m=6;try{var s=2<jn(e)?e.g.statusText:""}catch(a){s=""}e.j=s+" ["+e.aa()+"]",Mn(e)}}finally{Un(e)}}}function Un(e,t){if(e.g){Vn(e);const r=e.g,i=e.C[0]?d:null;e.g=null,e.C=null,t||xe(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Vn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function jn(e){return e.g?e.g.readyState:0}function Bn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Nn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Ir){return null}}function $n(e){let t="";return oe(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function zn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$n(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Kt(e,t,n))}function Hn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kn(e){this.Ca=0,this.i=[],this.j=new Je,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Hn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Hn("baseRetryDelayMs",5e3,e),this.bb=Hn("retryDelaySeedMs",1e4,e),this.$a=Hn("forwardChannelMaxRetries",2,e),this.ta=Hn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(e&&e.concurrentRequestLimit),this.Fa=new wn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Wn(e){if(Jn(e),3==e.G){var t=e.U++,n=Bt(e.F);Kt(n,"SID",e.I),Kt(n,"RID",t),Kt(n,"TYPE","terminate"),Xn(e,n),t=new wt(e,e.j,t,void 0),t.K=2,t.v=Wt(Bt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=hr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Rt(t)}ur(e)}function Gn(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Jn(e){Gn(e),e.u&&(h.clearTimeout(e.u),e.u=null),or(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Qn(e){fn(e.h)||e.m||(e.m=!0,De(e.Ja,e),e.C=0)}function Zn(e,t){return!(pn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=ut(w(e.Ja,e,t),ar(e,e.C)),e.C++,!0))}function Yn(e,t){var n;n=t?t.m:e.U++;const r=Bt(e.F);Kt(r,"SID",e.I),Kt(r,"RID",n),Kt(r,"AID",e.T),Xn(e,r),e.o&&e.s&&zn(r,e.o,e.s),n=new wt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=er(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),gn(e.h,n),kt(n,r,t)}function Xn(e,t){e.ia&&oe(e.ia,(function(e,n){Kt(t,n,e)})),e.l&&qt({},(function(e,n){Kt(t,n,e)}))}function er(e,t,n){n=Math.min(e.i.length,n);var r=e.l?w(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].h;const l=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),s=!1;else try{_n(l,e,"req"+n+"_")}catch(o){r&&r(l)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tr(e){e.g||e.u||(e.Z=1,De(e.Ia,e),e.A=0)}function nr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ut(w(e.Ia,e),ar(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function ir(e){e.g=new wt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Bt(e.sa);Kt(t,"RID","rpc"),Kt(t,"SID",e.I),Kt(t,"CI",e.L?"0":"1"),Kt(t,"AID",e.T),Kt(t,"TYPE","xmlhttp"),Xn(e,t),e.o&&e.s&&zn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Wt(Bt(t)),n.s=null,n.P=!0,xt(n,e)}function or(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function sr(e,t){var n=null;if(e.g==t){or(e),rr(e),e.g=null;var r=2}else{if(!mn(e.h,t))return;n=t.D,vn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=rt(),xe(r,new lt(r,n)),Qn(e)}else tr(e);else if(i=t.o,3==i||0==i&&0<e.pa||!(1==r&&Zn(e,t)||2==r&&nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:lr(e,5);break;case 4:lr(e,10);break;case 3:lr(e,6);break;default:lr(e,2)}}function ar(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function lr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=w(e.kb,e);n||(n=new jt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||$t(n,"https"),Wt(n)),En(n.toString(),r)}else at(2);e.G=0,e.l&&e.l.va(t),ur(e),Jn(e)}function ur(e){if(e.G=0,e.la=[],e.l){const t=yn(e.h);0==t.length&&0==e.i.length||(I(e.la,t),I(e.la,e.i),e.h.i.length=0,x(e.i),e.i.length=0),e.l.ua()}}function cr(e,t,n){var r=n instanceof jt?Bt(n):new jt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),zt(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new jt(null,void 0);r&&$t(o,r),t&&(o.g=t),i&&zt(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.za,n&&t&&Kt(r,n,t),Kt(r,"VER",e.ma),Xn(e,r),r}function hr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new On(new Tn({jb:!0})):new On(e.ra),t.Ka(e.H),t}function dr(){}function fr(){if(U&&!(10<=Number(Y)))throw Error("Environmental error: no available transport.")}function pr(e,t){ke.call(this),this.g=new Kn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!R(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new vr(this)}function mr(e){vt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gr(){yt.call(this),this.status=1}function vr(e){this.g=e}r=On.prototype,r.Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?ft(this.u):ft(mt),this.g.onreadystatechange=w(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(o){return void Fn(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=k(Pn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vn(this),0<this.B&&((this.K=Dn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.qa,this)):this.A=Be(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){Fn(this,o)}},r.qa=function(){"undefined"!=typeof c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,xe(this,"complete"),xe(this,"abort"),Un(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Un(this,!0)),On.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?qn(this):this.fb())},r.fb=function(){qn(this)},r.aa=function(){try{return 2<jn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Rn(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Kn.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new wt(this,this.j,e,void 0);let o=this.s;if(this.S&&(o?(o=se(o),le(o,this.S)):o=this.S),null!==this.o||this.N||(i.H=o,o=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=er(this,i,t),n=Bt(this.F),Kt(n,"RID",e),Kt(n,"CVER",22),this.D&&Kt(n,"X-HTTP-Session-Id",this.D),Xn(this,n),o&&(this.N?t="headers="+encodeURIComponent(String($n(o)))+"&"+t:this.o&&zn(n,this.o,o)),gn(this.h,i),this.Ya&&Kt(n,"TYPE","init"),this.O?(Kt(n,"$req",t),Kt(n,"SID","null"),i.Z=!0,kt(i,n,null)):kt(i,n,t),this.G=2}}else 3==this.G&&(e?Yn(this,e):0==this.i.length||fn(this.h)||Yn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ut(w(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Gn(this),ir(this))},r.cb=function(){null!=this.v&&(this.v=null,Gn(this),nr(this),at(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},r=dr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},fr.prototype.g=function(e,t){return new pr(e,t)},E(pr,ke),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=cr(e,null,e.V),Qn(e)},pr.prototype.close=function(){Wn(this.g)},pr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ce(e),e=n);t.i.push(new cn(t.ab++,e)),3==t.G&&Qn(t)},pr.prototype.M=function(){this.g.l=null,delete this.j,Wn(this.g),delete this.g,pr.X.M.call(this)},E(mr,vt),E(gr,yt),E(vr,dr),vr.prototype.xa=function(){xe(this.g,"a")},vr.prototype.wa=function(e){xe(this.g,new mr(e))},vr.prototype.va=function(e){xe(this.g,new gr)},vr.prototype.ua=function(){xe(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,ct.NO_ERROR=0,ct.TIMEOUT=8,ct.HTTP_ERROR=6,ht.COMPLETE="complete",pt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",ke.prototype.listen=ke.prototype.N,On.prototype.listenOnce=On.prototype.O,On.prototype.getLastError=On.prototype.Oa,On.prototype.getLastErrorCode=On.prototype.Ea,On.prototype.getStatus=On.prototype.aa,On.prototype.getResponseJson=On.prototype.Sa,On.prototype.getResponseText=On.prototype.fa,On.prototype.send=On.prototype.da,On.prototype.setWithCredentials=On.prototype.Ka;var yr=u.createWebChannelTransport=function(){return new fr},br=u.getStatEventTarget=function(){return rt()},wr=u.ErrorCode=ct,_r=u.EventType=ht,Er=u.Event=tt,Sr=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Tr=u.FetchXmlHttpFactory=Tn,kr=u.WebChannel=pt,xr=u.XhrIo=On;const Ir="@firebase/firestore";
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
 */const Rr=new s.Yd("@firebase/firestore");function Or(){return Rr.logLevel}function Nr(e,...t){if(Rr.logLevel<=s["in"].DEBUG){const n=t.map(Dr);Rr.debug(`Firestore (${Ar}): ${e}`,...n)}}function Lr(e,...t){if(Rr.logLevel<=s["in"].ERROR){const n=t.map(Dr);Rr.error(`Firestore (${Ar}): ${e}`,...n)}}function Pr(e,...t){if(Rr.logLevel<=s["in"].WARN){const n=t.map(Dr);Rr.warn(`Firestore (${Ar}): ${e}`,...n)}}function Dr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */class Br{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $r{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Cr.UNAUTHENTICATED)))}shutdown(){}}class zr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Hr{constructor(e){this.t=e,this.currentUser=Cr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jr,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},s=e=>{Nr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((e=>s(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(Nr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jr)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Nr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Mr("string"==typeof t.accessToken),new Br(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Mr(null===e||"string"==typeof e),new Cr(e)}}class Kr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=Cr.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Mr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Wr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new Kr(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Cr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jr{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Nr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Nr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Nr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Nr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Mr("string"==typeof e.token),this.A=e.token,new Gr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
 */class Zr{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Qr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Yr(e,t){return e<t?-1:e>t?1:0}function Xr(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class ei{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Vr(Ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Vr(Ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Vr(Ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Vr(Ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ei.fromMillis(Date.now())}static fromDate(e){return ei.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ei(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Yr(this.nanoseconds,e.nanoseconds):Yr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class ni{constructor(e,t,n){void 0===t?t=0:t>e.length&&Fr(),void 0===n?n=e.length-t:n>e.length-t&&Fr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ni.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ni?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ri extends ni{construct(e,t,n){return new ri(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Vr(Ur.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ri(t)}static emptyPath(){return new ri([])}}const ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oi extends ni{construct(e,t,n){return new oi(e,t,n)}static isValidIdentifier(e){return ii.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oi.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new oi(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Vr(Ur.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Vr(Ur.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Vr(Ur.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new Vr(Ur.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oi(t)}static emptyPath(){return new oi([])}}
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
 */class si{constructor(e){this.path=e}static fromPath(e){return new si(ri.fromString(e))}static fromName(e){return new si(ri.fromString(e).popFirst(5))}static empty(){return new si(ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ri.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ri.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new si(new ri(e.slice()))}}
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
 */class ai{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}ai.UNKNOWN_ID=-1;function li(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ti.fromTimestamp(1e9===r?new ei(n+1,0):new ei(n,r));return new ci(i,si.empty(),t)}function ui(e){return new ci(e.readTime,e.key,-1)}class ci{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ci(ti.min(),si.empty(),-1)}static max(){return new ci(ti.max(),si.empty(),-1)}}function hi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=si.comparator(e.documentKey,t.documentKey),0!==n?n:Yr(e.largestBatchId,t.largestBatchId))}
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
 */class mi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Fr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new mi(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof mi?t:mi.resolve(t)}catch(e){return mi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):mi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):mi.reject(t)}static resolve(e){return new mi(((t,n)=>{t(e)}))}static reject(e){return new mi(((t,n)=>{n(e)}))}static waitFor(e){return new mi(((t,n)=>{let r=0,i=0,o=!1;e.forEach((e=>{++r,e.next((()=>{++i,o&&i===r&&t()}),(e=>n(e)))})),o=!0,i===r&&t()}))}static or(e){let t=mi.resolve(!1);for(const n of e)t=t.next((e=>e?mi.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new mi(((n,r)=>{const i=e.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next((e=>{o[l]=e,++s,s===i&&n(o)}),(e=>r(e)))}}))}static doWhile(e,t){return new mi(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
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
 */vi.at=-1;class _i{constructor(e,t){this.comparator=e,this.root=t||Si.EMPTY}insert(e,t){return new _i(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Si.BLACK,null,null))}remove(e){return new _i(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Si.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ei(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ei(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ei(this.root,e,this.comparator,!0)}}class Ei{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Si{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Si.RED,this.left=null!=r?r:Si.EMPTY,this.right=null!=i?i:Si.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Si(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Si.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Si.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Si.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Si.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Fr();if(this.right.isRed())throw Fr();const e=this.left.check();if(e!==this.right.check())throw Fr();return e+(this.isRed()?0:1)}}Si.EMPTY=null,Si.RED=!0,Si.BLACK=!1,Si.EMPTY=new class{constructor(){this.size=0}get key(){throw Fr()}get value(){throw Fr()}get color(){throw Fr()}get left(){throw Fr()}get right(){throw Fr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Si(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ti{constructor(e){this.comparator=e,this.data=new _i(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ki(this.data.getIterator())}getIteratorFrom(e){return new ki(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ti))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ti(this.comparator);return t.data=e,t}}class ki{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class xi{constructor(e){this.fields=e,e.sort(oi.comparator)}static empty(){return new xi([])}unionWith(e){let t=new Ti(oi.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new xi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
class Ii{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ii(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ii(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Yr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ii.EMPTY_BYTE_STRING=new Ii("");const Ci=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(e){if(Mr(!!e),"string"==typeof e){let t=0;const n=Ci.exec(e);if(Mr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ri(e.seconds),nanos:Ri(e.nanos)}}function Ri(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Oi(e){return"string"==typeof e?Ii.fromBase64String(e):Ii.fromUint8Array(e)}
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
 */class Di{constructor(e,t,n,r,i,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class Fi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Fi&&e.projectId===this.projectId&&e.database===this.database}}function Mi(e){return null==e}function qi(e){return 0===e&&1/e==-1/0}function Ui(e){return"number"==typeof e&&Number.isInteger(e)&&!qi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */const Vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ji(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ni(e)?4:to(e)?9007199254740991:10:Fr()}function Bi(e,t){if(e===t)return!0;const n=ji(e);if(n!==ji(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Pi(e).isEqual(Pi(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ai(e.timestampValue),r=Ai(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Oi(e.bytesValue).isEqual(Oi(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ri(e.geoPointValue.latitude)===Ri(t.geoPointValue.latitude)&&Ri(e.geoPointValue.longitude)===Ri(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ri(e.integerValue)===Ri(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ri(e.doubleValue),r=Ri(t.doubleValue);return n===r?qi(n)===qi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Xr(e.arrayValue.values||[],t.arrayValue.values||[],Bi);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(yi(n)!==yi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Bi(n[i],r[i])))return!1;return!0}(e,t);default:return Fr()}}function $i(e,t){return void 0!==(e.values||[]).find((e=>Bi(e,t)))}function zi(e,t){if(e===t)return 0;const n=ji(e),r=ji(t);if(n!==r)return Yr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Yr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ri(e.integerValue||e.doubleValue),r=Ri(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Hi(e.timestampValue,t.timestampValue);case 4:return Hi(Pi(e),Pi(t));case 5:return Yr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Oi(e),r=Oi(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Yr(n[i],r[i]);if(0!==e)return e}return Yr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Yr(Ri(e.latitude),Ri(t.latitude));return 0!==n?n:Yr(Ri(e.longitude),Ri(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=zi(n[i],r[i]);if(e)return e}return Yr(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Vi.mapValue&&t===Vi.mapValue)return 0;if(e===Vi.mapValue)return 1;if(t===Vi.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const e=Yr(r[s],o[s]);if(0!==e)return e;const t=zi(n[r[s]],i[o[s]]);if(0!==t)return t}return Yr(r.length,o.length)}(e.mapValue,t.mapValue);default:throw Fr()}}function Hi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Yr(e,t);const n=Ai(e),r=Ai(t),i=Yr(n.seconds,r.seconds);return 0!==i?i:Yr(n.nanos,r.nanos)}function Ki(e){return Wi(e)}function Wi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ai(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Oi(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,si.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Wi(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Wi(e.fields[i])}`;return n+"}"}(e.mapValue):Fr();var t,n}function Gi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ji(e){return!!e&&"integerValue"in e}function Qi(e){return!!e&&"arrayValue"in e}function Zi(e){return!!e&&"nullValue"in e}function Yi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Xi(e){return!!e&&"mapValue"in e}function eo(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return bi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=eo(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eo(e.arrayValue.values[n]);return t}return Object.assign({},e)}function to(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class no{constructor(e){this.value=e}static empty(){return new no({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Xi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eo(t)}setAll(e){let t=oi.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=eo(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Xi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Bi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Xi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){bi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new no(eo(this.value))}}function ro(e){const t=[];return bi(e.fields,((e,n)=>{const r=new oi([e]);if(Xi(n)){const e=ro(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new xi(t)
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
 */}class io{constructor(e,t,n,r,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new io(e,0,ti.min(),ti.min(),no.empty(),0)}static newFoundDocument(e,t,n){return new io(e,1,t,ti.min(),n,0)}static newNoDocument(e,t){return new io(e,2,t,ti.min(),no.empty(),0)}static newUnknownDocument(e,t){return new io(e,3,t,ti.min(),no.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=no.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=no.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ti.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof io&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new io(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class oo{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.ht=null}}function so(e,t=null,n=[],r=[],i=null,o=null,s=null){return new oo(e,t,n,r,i,o,s)}function ao(e){const t=qr(e);if(null===t.ht){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Ki(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Mi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Ki(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Ki(e))).join(",")),t.ht=e}return t.ht}function lo(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Ki(t.value)}`;var t})).join(", ")}]`),Mi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Ki(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Ki(e))).join(",")),`Target(${t})`}function uo(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!So(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Bi(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ko(e.startAt,t.startAt)&&ko(e.endAt,t.endAt)}function co(e){return si.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class ho extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new fo(e,t,n):"array-contains"===t?new vo(e,n):"in"===t?new yo(e,n):"not-in"===t?new bo(e,n):"array-contains-any"===t?new wo(e,n):new ho(e,t,n)}static lt(e,t,n){return"in"===t?new po(e,n):new mo(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(zi(t,this.value)):null!==t&&ji(this.value)===ji(t)&&this.ft(zi(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Fr()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class fo extends ho{constructor(e,t,n){super(e,t,n),this.key=si.fromName(n.referenceValue)}matches(e){const t=si.comparator(e.key,this.key);return this.ft(t)}}class po extends ho{constructor(e,t){super(e,"in",t),this.keys=go("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class mo extends ho{constructor(e,t){super(e,"not-in",t),this.keys=go("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function go(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>si.fromName(e.referenceValue)))}class vo extends ho{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qi(t)&&$i(t.arrayValue,this.value)}}class yo extends ho{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&$i(this.value.arrayValue,t)}}class bo extends ho{constructor(e,t){super(e,"not-in",t)}matches(e){if($i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!$i(this.value.arrayValue,t)}}class wo extends ho{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>$i(this.value.arrayValue,e)))}}class _o{constructor(e,t){this.position=e,this.inclusive=t}}class Eo{constructor(e,t="asc"){this.field=e,this.dir=t}}function So(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function To(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(r=o.field.isKeyField()?si.comparator(si.fromName(s.referenceValue),n.key):zi(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function ko(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Bi(e.position[n],t.position[n]))return!1;return!0}
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
 */class xo{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Io(e,t,n,r,i,o,s,a){return new xo(e,t,n,r,i,o,s,a)}function Co(e){return new xo(e)}function Ao(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ro(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Oo(e){for(const t of e.filters)if(t.dt())return t.field;return null}function No(e){return null!==e.collectionGroup}function Lo(e){const t=qr(e);if(null===t._t){t._t=[];const e=Oo(t),n=Ro(t);if(null!==e&&null===n)e.isKeyField()||t._t.push(new Eo(e)),t._t.push(new Eo(oi.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t._t.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new Eo(oi.keyField(),e))}}}return t._t}function Po(e){const t=qr(e);if(!t.wt)if("F"===t.limitType)t.wt=so(t.path,t.collectionGroup,Lo(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Lo(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Eo(i.field,t))}const n=t.endAt?new _o(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _o(t.startAt.position,t.startAt.inclusive):null;t.wt=so(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.wt}function Do(e,t,n){return new xo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Fo(e,t){return uo(Po(e),Po(t))&&e.limitType===t.limitType}function Mo(e){return`${ao(Po(e))}|lt:${e.limitType}`}function qo(e){return`Query(target=${lo(Po(e))}; limitType=${e.limitType})`}function Uo(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):si.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=To(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Lo(e),t))&&!(e.endAt&&!function(e,t,n){const r=To(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Lo(e),t))}(e,t)}function Vo(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function jo(e){return(t,n)=>{let r=!1;for(const i of Lo(e)){const e=Bo(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Bo(e,t,n){const r=e.field.isKeyField()?si.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?zi(r,i):Fr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Fr()}}
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
 */function $o(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qi(t)?"-0":t}}function zo(e){return{integerValue:""+e}}function Ho(e,t){return Ui(t)?zo(t):$o(e,t)}
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
 */class Ko{constructor(){this._=void 0}}function Wo(e,t,n){return e instanceof Qo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Zo?Yo(e,t):e instanceof Xo?es(e,t):function(e,t){const n=Jo(e,t),r=ns(n)+ns(e.yt);return Ji(n)&&Ji(e.yt)?zo(r):$o(e.It,r)}(e,t)}function Go(e,t,n){return e instanceof Zo?Yo(e,t):e instanceof Xo?es(e,t):n}function Jo(e,t){return e instanceof ts?Ji(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Qo extends Ko{}class Zo extends Ko{constructor(e){super(),this.elements=e}}function Yo(e,t){const n=rs(t);for(const r of e.elements)n.some((e=>Bi(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Xo extends Ko{constructor(e){super(),this.elements=e}}function es(e,t){let n=rs(t);for(const r of e.elements)n=n.filter((e=>!Bi(e,r)));return{arrayValue:{values:n}}}class ts extends Ko{constructor(e,t){super(),this.It=e,this.yt=t}}function ns(e){return Ri(e.integerValue||e.doubleValue)}function rs(e){return Qi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */function is(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Zo&&t instanceof Zo||e instanceof Xo&&t instanceof Xo?Xr(e.elements,t.elements,Bi):e instanceof ts&&t instanceof ts?Bi(e.yt,t.yt):e instanceof Qo&&t instanceof Qo}(e.transform,t.transform)}class os{constructor(e,t){this.version=e,this.transformResults=t}}class ss{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ss}static exists(e){return new ss(void 0,e)}static updateTime(e){return new ss(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function as(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ls{}function us(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new bs(e.key,ss.none()):new ps(e.key,e.data,ss.none());{const n=e.data,r=no.empty();let i=new Ti(oi.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new ms(e.key,r,new xi(i.toArray()),ss.none())}}function cs(e,t,n){e instanceof ps?function(e,t,n){const r=e.value.clone(),i=vs(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof ms?function(e,t,n){if(!as(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=vs(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(gs(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function hs(e,t,n,r){return e instanceof ps?function(e,t,n,r){if(!as(e.precondition,t))return n;const i=e.value.clone(),o=ys(e.fieldTransforms,r,t);return i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof ms?function(e,t,n,r){if(!as(e.precondition,t))return n;const i=ys(e.fieldTransforms,r,t),o=t.data;return o.setAll(gs(e)),o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return as(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ds(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Jo(r.transform,e||null);null!=i&&(null===n&&(n=no.empty()),n.set(r.field,i))}return n||null}function fs(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Xr(e,t,((e,t)=>is(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ps extends ls{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ms extends ls{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gs(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function vs(e,t,n){const r=new Map;Mr(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,Go(s,a,n[i]))}return r}function ys(e,t,n){const r=new Map;for(const i of e){const e=i.transform,o=n.data.field(i.field);r.set(i.field,Wo(e,o,t))}return r}class bs extends ls{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ws extends ls{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class _s{constructor(e){this.count=e}}
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
 */var Es,Ss;function Ts(e){switch(e){default:return Fr();case Ur.CANCELLED:case Ur.UNKNOWN:case Ur.DEADLINE_EXCEEDED:case Ur.RESOURCE_EXHAUSTED:case Ur.INTERNAL:case Ur.UNAVAILABLE:case Ur.UNAUTHENTICATED:return!1;case Ur.INVALID_ARGUMENT:case Ur.NOT_FOUND:case Ur.ALREADY_EXISTS:case Ur.PERMISSION_DENIED:case Ur.FAILED_PRECONDITION:case Ur.ABORTED:case Ur.OUT_OF_RANGE:case Ur.UNIMPLEMENTED:case Ur.DATA_LOSS:return!0}}function ks(e){if(void 0===e)return Lr("GRPC error has no .code"),Ur.UNKNOWN;switch(e){case Es.OK:return Ur.OK;case Es.CANCELLED:return Ur.CANCELLED;case Es.UNKNOWN:return Ur.UNKNOWN;case Es.DEADLINE_EXCEEDED:return Ur.DEADLINE_EXCEEDED;case Es.RESOURCE_EXHAUSTED:return Ur.RESOURCE_EXHAUSTED;case Es.INTERNAL:return Ur.INTERNAL;case Es.UNAVAILABLE:return Ur.UNAVAILABLE;case Es.UNAUTHENTICATED:return Ur.UNAUTHENTICATED;case Es.INVALID_ARGUMENT:return Ur.INVALID_ARGUMENT;case Es.NOT_FOUND:return Ur.NOT_FOUND;case Es.ALREADY_EXISTS:return Ur.ALREADY_EXISTS;case Es.PERMISSION_DENIED:return Ur.PERMISSION_DENIED;case Es.FAILED_PRECONDITION:return Ur.FAILED_PRECONDITION;case Es.ABORTED:return Ur.ABORTED;case Es.OUT_OF_RANGE:return Ur.OUT_OF_RANGE;case Es.UNIMPLEMENTED:return Ur.UNIMPLEMENTED;case Es.DATA_LOSS:return Ur.DATA_LOSS;default:return Fr()}}(Ss=Es||(Es={}))[Ss.OK=0]="OK",Ss[Ss.CANCELLED=1]="CANCELLED",Ss[Ss.UNKNOWN=2]="UNKNOWN",Ss[Ss.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ss[Ss.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ss[Ss.NOT_FOUND=5]="NOT_FOUND",Ss[Ss.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ss[Ss.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ss[Ss.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ss[Ss.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ss[Ss.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ss[Ss.ABORTED=10]="ABORTED",Ss[Ss.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ss[Ss.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ss[Ss.INTERNAL=13]="INTERNAL",Ss[Ss.UNAVAILABLE=14]="UNAVAILABLE",Ss[Ss.DATA_LOSS=15]="DATA_LOSS";
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
class xs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return wi(this.inner)}size(){return this.innerSize}}
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
 */const Is=new _i(si.comparator);function Cs(){return Is}const As=new _i(si.comparator);function Rs(...e){let t=As;for(const n of e)t=t.insert(n.key,n);return t}function Os(e){let t=As;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Ns(){return Ps()}function Ls(){return Ps()}function Ps(){return new xs((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Ds=new _i(si.comparator),Fs=new Ti(si.comparator);function Ms(...e){let t=Fs;for(const n of e)t=t.add(n);return t}const qs=new Ti(Yr);function Us(){return qs}
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
 */class Vs{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,js.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Vs(ti.min(),r,Us(),Cs(),Ms())}}class js{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new js(n,t,Ms(),Ms(),Ms())}}
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
 */class Bs{constructor(e,t,n,r){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=r}}class $s{constructor(e,t){this.targetId=e,this.At=t}}class zs{constructor(e,t,n=Ii.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Hs{constructor(){this.Rt=0,this.bt=Gs(),this.Pt=Ii.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Ms(),t=Ms(),n=Ms();return this.bt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Fr()}})),new js(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=Gs()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ks{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Cs(),this.qt=Ws(),this.Kt=new Ti(Yr)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,(t=>{const n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:Fr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach(((e,n)=>{this.Ht(n)&&t(n)}))}Yt(e){const t=e.targetId,n=e.At.count,r=this.Xt(t);if(r){const e=r.target;if(co(e))if(0===n){const n=new si(e.path);this.jt(t,n,io.newNoDocument(n,ti.min()))}else Mr(1===n);else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach(((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&co(i.target)){const t=new si(i.target.path);null!==this.Ut.get(t)||this.ee(r,t)||this.jt(r,t,io.newNoDocument(t,e))}n.Dt&&(t.set(r,n.xt()),n.Nt())}}));let n=Ms();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Ut.forEach(((t,n)=>n.setReadTime(e)));const r=new Vs(e,t,this.Kt,this.Ut,n);return this.Ut=Cs(),this.qt=Ws(),this.Kt=new Ti(Yr),r}Qt(e,t){if(!this.Ht(e))return;const n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new Hs,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new Ti(Yr),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=null!==this.Xt(e);return t||Nr("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Hs),this.Bt.getRemoteKeysForTarget(e).forEach((t=>{this.jt(e,t,null)}))}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function Ws(){return new _i(si.comparator)}function Gs(){return new _i(si.comparator)}
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
 */const Js=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Qs=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Zs{constructor(e,t){this.databaseId=e,this.gt=t}}function Ys(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Xs(e,t){return e.gt?t.toBase64():t.toUint8Array()}function ea(e,t){return Ys(e,t.toTimestamp())}function ta(e){return Mr(!!e),ti.fromTimestamp(function(e){const t=Ai(e);return new ei(t.seconds,t.nanos)}(e))}function na(e,t){return function(e){return new ri(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ra(e){const t=ri.fromString(e);return Mr(xa(t)),t}function ia(e,t){return na(e.databaseId,t.path)}function oa(e,t){const n=ra(t);if(n.get(1)!==e.databaseId.projectId)throw new Vr(Ur.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Vr(Ur.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new si(ua(n))}function sa(e,t){return na(e.databaseId,t)}function aa(e){const t=ra(e);return 4===t.length?ri.emptyPath():ua(t)}function la(e){return new ri(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ua(e){return Mr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ca(e,t,n){return{name:ia(e,t),fields:n.value.mapValue.fields}}function ha(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Fr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(e,t){return e.gt?(Mr(void 0===t||"string"==typeof t),Ii.fromBase64String(t||"")):(Mr(void 0===t||t instanceof Uint8Array),Ii.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(e){const t=void 0===e.code?Ur.UNKNOWN:ks(e.code);return new Vr(t,e.message||"")}(s);n=new zs(r,i,o,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=oa(e,r.document.name),o=ta(r.document.updateTime),s=new no({mapValue:{fields:r.document.fields}}),a=io.newFoundDocument(i,o,s),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Bs(l,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=oa(e,r.document),o=r.readTime?ta(r.readTime):ti.min(),s=io.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Bs([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=oa(e,r.document),o=r.removedTargetIds||[];n=new Bs([],o,i,null)}else{if(!("filter"in t))return Fr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new _s(r),o=e.targetId;n=new $s(o,i)}}return n}function da(e,t){let n;if(t instanceof ps)n={update:ca(e,t.key,t.value)};else if(t instanceof bs)n={delete:ia(e,t.key)};else if(t instanceof ms)n={update:ca(e,t.key,t.data),updateMask:ka(t.fieldMask)};else{if(!(t instanceof ws))return Fr();n={verify:ia(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Qo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Zo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Xo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ts)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw Fr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ea(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Fr()}(e,t.precondition)),n}function fa(e,t){return e&&e.length>0?(Mr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ta(e.updateTime):ta(t);return n.isEqual(ti.min())&&(n=ta(t)),new os(n,e.transformResults||[])}(e,t)))):[]}function pa(e,t){return{documents:[sa(e,t.path)]}}function ma(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=sa(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=sa(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Yi(e.value))return{unaryFilter:{field:_a(e.field),op:"IS_NAN"}};if(Zi(e.value))return{unaryFilter:{field:_a(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Yi(e.value))return{unaryFilter:{field:_a(e.field),op:"IS_NOT_NAN"}};if(Zi(e.value))return{unaryFilter:{field:_a(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_a(e.field),op:wa(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:_a(e.field),direction:ba(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(e,t){return e.gt||Mi(t)?t:{value:t}}(e,t.limit);var a;return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ga(e){let t=aa(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Mr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=ya(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((e=>function(e){return new Eo(Ea(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Mi(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new _o(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new _o(n,t)}(n.endAt)),Io(t,i,s,o,a,"F",l,u)}function va(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Fr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function ya(e){return e?void 0!==e.unaryFilter?[Ta(e)]:void 0!==e.fieldFilter?[Sa(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>ya(e))).reduce(((e,t)=>e.concat(t))):Fr():[]}function ba(e){return Js[e]}function wa(e){return Qs[e]}function _a(e){return{fieldPath:e.canonicalString()}}function Ea(e){return oi.fromServerFormat(e.fieldPath)}function Sa(e){return ho.create(Ea(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Fr()}}(e.fieldFilter.op),e.fieldFilter.value)}function Ta(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ea(e.unaryFilter.field);return ho.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ea(e.unaryFilter.field);return ho.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ea(e.unaryFilter.field);return ho.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ea(e.unaryFilter.field);return ho.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Fr()}}function ka(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function xa(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */const Ia=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ca=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Aa=Ca;
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
class Ra{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&cs(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=hs(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=hs(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ls();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=t.has(r.key)?null:s;const a=us(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(ti.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ms())}isEqual(e){return this.batchId===e.batchId&&Xr(this.mutations,e.mutations,((e,t)=>fs(e,t)))&&Xr(this.baseMutations,e.baseMutations,((e,t)=>fs(e,t)))}}class Oa{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Mr(e.mutations.length===n.length);let r=Ds;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new Oa(e,t,n,r)}}
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
 */class La{constructor(e,t,n,r,i=ti.min(),o=ti.min(),s=Ii.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(e){return new La(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new La(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new La(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
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
 */class Pa{constructor(e){this.re=e}}function Da(e){const t=ga({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Do(t,t.limit,"L"):t}
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
class Fa{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(Ri(e.integerValue));else if("doubleValue"in e){const n=Ri(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),qi(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.le(t,20),"string"==typeof n?t.de(n):(t.de(`${n.seconds||""}`),t.fe(n.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(Oi(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.le(t,45),t.fe(n.latitude||0),t.fe(n.longitude||0)}else"mapValue"in e?to(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):Fr()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const n=e.fields||{};this.le(t,55);for(const r of Object.keys(n))this._e(r,t),this.ae(n[r],t)}pe(e,t){const n=e.values||[];this.le(t,50);for(const r of n)this.ae(r,t)}ge(e,t){this.le(t,37),si.fromName(e).path.forEach((e=>{this.le(t,60),this.Ie(e,t)}))}le(e,t){e.fe(t)}we(e){e.fe(2)}}Fa.Te=new Fa;
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
class Ma{constructor(){this.Ye=new qa}addToCollectionParentIndex(e,t){return this.Ye.add(t),mi.resolve()}getCollectionParents(e,t){return mi.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return mi.resolve()}deleteFieldIndex(e,t){return mi.resolve()}getDocumentsMatchingTarget(e,t){return mi.resolve(null)}getIndexType(e,t){return mi.resolve(0)}getFieldIndexes(e,t){return mi.resolve([])}getNextCollectionGroupToUpdate(e){return mi.resolve(null)}getMinOffset(e,t){return mi.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,t){return mi.resolve(ci.min())}updateCollectionGroup(e,t,n){return mi.resolve()}updateIndexEntries(e,t){return mi.resolve()}}class qa{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ti(ri.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ti(ri.comparator)).toArray()}}
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
class ja{constructor(){this.changes=new xs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,io.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?mi.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
 */class $a{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&hs(n.mutation,e,xi.empty(),ei.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ms()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Ms()){const r=Ns();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Rs();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Ns();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ms())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Cs();const o=Ps(),s=Ps();return t.forEach(((e,t)=>{const s=n.get(t.key);r.has(t.key)&&(void 0===s||s.mutation instanceof ms)?i=i.insert(t.key,t):void 0!==s&&(o.set(t.key,s.mutation.getFieldMask()),hs(s.mutation,t,s.mutation.getFieldMask(),ei.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>o.set(e,t))),t.forEach(((e,t)=>{var n;return s.set(e,new Ba(t,null!==(n=o.get(e))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(e,t){const n=Ps();let r=new _i(((e,t)=>e-t)),i=Ms();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const o=t.get(e);if(null===o)return;let s=n.get(e)||xi.empty();s=i.applyToLocalView(o,s),n.set(e,s);const a=(r.get(i.batchId)||Ms()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,l=r.value,u=Ls();l.forEach((e=>{if(!i.has(e)){const r=us(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),o.push(this.documentOverlayCache.saveOverlays(e,a,u))}return mi.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return si.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):No(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):mi.resolve(Ns());let s=-1,a=i;return o.next((t=>mi.forEach(t,((t,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(t)?mi.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Ms()))).next((e=>({batchId:s,changes:Os(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new si(t)).next((e=>{let t=Rs();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Rs();return this.indexManager.getCollectionParents(e,r).next((o=>mi.forEach(o,(o=>{const s=function(e,t){return new xo(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(r));return this.getDocumentsMatchingCollectionQuery(e,s,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,io.newInvalidDocument(n)))}));let n=Rs();return r.forEach(((r,i)=>{const o=e.get(r);void 0!==o&&hs(o.mutation,i,xi.empty(),ei.now()),Uo(t,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):mi.resolve(io.newInvalidDocument(t))}}
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
 */class Ha{constructor(){this.overlays=new _i(si.comparator),this.es=new Map}getOverlay(e,t){return mi.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ns();return mi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ue(e,t,r)})),mi.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),mi.resolve()}getOverlaysForCollection(e,t,n){const r=Ns(),i=t.length+1,o=new si(t.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const e=s.getNext().value,o=e.getKey();if(!t.isPrefixOf(o.path))break;o.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return mi.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new _i(((e,t)=>e-t));const o=this.overlays.getIterator();for(;o.hasNext();){const e=o.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Ns(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const s=Ns(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>s.set(e,t))),s.size()>=r)break;return mi.resolve(s)}ue(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Na(t,n));let i=this.es.get(t);void 0===i&&(i=Ms(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}
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
 */class Ka{constructor(){this.ns=new Ti(Wa.ss),this.rs=new Ti(Wa.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new Wa(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new Wa(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new si(new ri([])),n=new Wa(t,e),r=new Wa(t,e+1),i=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),i.push(e.key)})),i}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new si(new ri([])),n=new Wa(t,e),r=new Wa(t,e+1);let i=Ms();return this.rs.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Wa(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Wa{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return si.comparator(e.key,t.key)||Yr(e._s,t._s)}static os(e,t){return Yr(e._s,t._s)||si.comparator(e.key,t.key)}}
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
 */class Ga{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Ti(Wa.ss)}checkEmpty(e){return mi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ra(i,t,n,r);this.mutationQueue.push(o);for(const s of r)this.gs=this.gs.add(new Wa(s.key,i)),this.indexManager.addToCollectionParentIndex(e,s.key.path.popLast());return mi.resolve(o)}lookupMutationBatch(e,t){return mi.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return mi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return mi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return mi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Wa(t,0),r=new Wa(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);i.push(t)})),mi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ti(Yr);return t.forEach((e=>{const t=new Wa(e,0),r=new Wa(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),mi.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;si.isDocumentKey(i)||(i=i.child(""));const o=new Wa(new si(i),0);let s=new Ti(Yr);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e._s)),!0)}),o),mi.resolve(this.Is(s))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Mr(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return mi.forEach(t.mutations,(r=>{const i=new Wa(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new Wa(t,0),r=this.gs.firstAfterOrEqual(n);return mi.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,mi.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class Ja{constructor(e){this.Es=e,this.docs=new _i(si.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return mi.resolve(n?n.document.mutableCopy():io.newInvalidDocument(t))}getEntries(e,t){let n=Cs();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():io.newInvalidDocument(e))})),mi.resolve(n)}getAllFromCollection(e,t,n){let r=Cs();const i=new si(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:e,value:{document:i}}=o.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||hi(ui(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return mi.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Fr()}As(e,t){return mi.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Qa(this)}getSize(e){return mi.resolve(this.size)}}class Qa extends ja{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),mi.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
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
 */class Za{constructor(e){this.persistence=e,this.Rs=new xs((e=>ao(e)),uo),this.lastRemoteSnapshotVersion=ti.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ka,this.targetCount=0,this.vs=Va.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),mi.resolve()}getLastRemoteSnapshotVersion(e){return mi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return mi.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),mi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),mi.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Va(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,mi.resolve()}updateTargetData(e,t){return this.Dn(t),mi.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,mi.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach(((o,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)})),mi.waitFor(i).next((()=>r))}getTargetCount(e){return mi.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return mi.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),mi.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),mi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),mi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return mi.resolve(n)}containsKey(e,t){return mi.resolve(this.Ps.containsKey(t))}}
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
 */class Ya{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new vi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Za(this),this.indexManager=new Ma,this.remoteDocumentCache=function(e){return new Ja(e)}((e=>this.referenceDelegate.xs(e))),this.It=new Pa(t),this.Ns=new za(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ha,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new Ga(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Nr("MemoryPersistence","Starting transaction:",e);const r=new Xa(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ms(e,t){return mi.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class Xa extends fi{constructor(e){super(),this.currentSequenceNumber=e}}class el{constructor(e){this.persistence=e,this.Fs=new Ka,this.$s=null}static Bs(e){return new el(e)}get Ls(){if(this.$s)return this.$s;throw Fr()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),mi.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),mi.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),mi.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mi.forEach(this.Ls,(n=>{const r=si.fromPath(n);return this.Us(e,r).next((e=>{e||t.removeEntry(r,ti.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.Us(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}Us(e,t){return mi.or([()=>mi.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
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
class tl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=Ms(),r=Ms();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new tl(e,t.fromCache,n,r)}}
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
 */class nl{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((i=>i||this.Oi(e,t,r,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(Ao(t))return mi.resolve(null);let n=Po(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Do(t,null,"F"),n=Po(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Ms(...r);return this.Ni.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const o=this.Fi(t,r);return this.$i(t,o,i,n.readTime)?this.ki(e,Do(t,null,"F")):this.Bi(e,o,t,n)}))))})))))}Oi(e,t,n,r){return Ao(t)||r.isEqual(ti.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((i=>{const o=this.Fi(t,i);return this.$i(t,o,n,r)?this.Mi(e,t):(Or()<=s["in"].DEBUG&&Nr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),qo(t)),this.Bi(e,o,t,li(r,-1)))}))}Fi(e,t){let n=new Ti(jo(e));return t.forEach(((t,r)=>{Uo(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return Or()<=s["in"].DEBUG&&Nr("QueryEngine","Using full collection scan to execute query:",qo(t)),this.Ni.getDocumentsMatchingQuery(e,t,ci.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class rl{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new _i(Yr),this.qi=new xs((e=>ao(e)),uo),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $a(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ui)))}}function il(e,t,n,r){return new rl(e,t,n,r)}async function ol(e,t){const n=qr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],o=[];let s=Ms();for(const e of r){i.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){o.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return n.localDocuments.getDocuments(e,s).next((e=>({ji:e,removedBatchIds:i,addedBatchIds:o})))}))}))}function sl(e,t){const n=qr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,o=i.keys();let s=mi.resolve();return o.forEach((e=>{s=s.next((()=>r.getEntry(t,e))).next((t=>{const o=n.docVersions.get(e);Mr(null!==o),t.version.compareTo(o)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),s.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ms();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function al(e){const t=qr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function ll(e,t){const n=qr(e),r=t.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const s=[];t.targetChanges.forEach(((o,a)=>{const l=i.get(a);if(!l)return;s.push(n.Cs.removeMatchingKeys(e,o.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,o.addedDocuments,a))));let u=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Ii.EMPTY_BYTE_STRING,ti.min()).withLastLimboFreeSnapshotVersion(ti.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,u,o)&&s.push(n.Cs.updateTargetData(e,u))}));let a=Cs(),l=Ms();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),s.push(ul(e,o,t.documentUpdates).next((e=>{a=e.Wi,l=e.zi}))),!r.isEqual(ti.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));s.push(t)}return mi.waitFor(s).next((()=>o.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Ui=i,e)))}function ul(e,t,n){let r=Ms(),i=Ms();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Cs();return n.forEach(((n,o)=>{const s=e.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(ti.min())?(t.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(o),r=r.insert(n,o)):Nr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)})),{Wi:r,zi:i}}))}function cl(e,t){const n=qr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function hl(e,t){const n=qr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((i=>i?(r=i,mi.resolve(r)):n.Cs.allocateTargetId(e).next((i=>(r=new La(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function dl(e,t,n){const r=qr(e),i=r.Ui.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!gi(e))throw e;Nr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ui=r.Ui.remove(t),r.qi.delete(i.target)}function fl(e,t,n){const r=qr(e);let i=ti.min(),o=Ms();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=qr(e),i=r.qi.get(n);return void 0!==i?mi.resolve(r.Ui.get(i)):r.Cs.getTargetData(t,n)}(r,e,Po(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{o=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:ti.min(),n?o:Ms()))).next((e=>(pl(r,Vo(t),e),{documents:e,Hi:o})))))}function pl(e,t,n){let r=e.Ki.get(t)||ti.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}class ml{constructor(){this.activeTargetIds=Us()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gl{constructor(){this.Lr=new ml,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ml,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class _l extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){const o=this.ho(e,t);Nr("RestConnection","Sending: ",o,n);const s={};return this.lo(s,r,i),this.fo(e,o,s,n).then((e=>(Nr("RestConnection","Received: ",e),e)),(t=>{throw Pr("RestConnection",`${e} failed with error: `,t,"url: ",o,"request:",n),t}))}_o(e,t,n,r,i,o){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ar,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=bl[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((i,o)=>{const s=new xr;s.setWithCredentials(!0),s.listenOnce(_r.COMPLETE,(()=>{var t;try{switch(s.getLastErrorCode()){case wr.NO_ERROR:const n=s.getResponseJson();Nr("Connection","XHR received:",JSON.stringify(n)),i(n);break;case wr.TIMEOUT:Nr("Connection",'RPC "'+e+'" timed out'),o(new Vr(Ur.DEADLINE_EXCEEDED,"Request time out"));break;case wr.HTTP_ERROR:const r=s.getStatus();if(Nr("Connection",'RPC "'+e+'" failed with status:',r,"response text:",s.getResponseText()),r>0){let e=s.getResponseJson();Array.isArray(e)&&(e=e[0]);const n=null===(t=e)||void 0===t?void 0:t.error;if(n&&n.status&&n.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ur).indexOf(t)>=0?t:Ur.UNKNOWN}(n.status);o(new Vr(e,n.message))}else o(new Vr(Ur.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new Vr(Ur.UNAVAILABLE,"Connection failed."));break;default:Fr()}}finally{Nr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);s.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=yr(),o=br(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new Tr({})),this.lo(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;const a=r.join("");Nr("Connection","Creating WebChannel: "+a,s);const l=i.createWebChannel(a,s);let u=!1,c=!1;const h=new wl({Hr:e=>{c?Nr("Connection","Not sending because WebChannel is closed:",e):(u||(Nr("Connection","Opening WebChannel transport."),l.open(),u=!0),Nr("Connection","WebChannel sending:",e),l.send(e))},Jr:()=>l.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(l,kr.EventType.OPEN,(()=>{c||Nr("Connection","WebChannel transport opened.")})),d(l,kr.EventType.CLOSE,(()=>{c||(c=!0,Nr("Connection","WebChannel transport closed"),h.io())})),d(l,kr.EventType.ERROR,(e=>{c||(c=!0,Pr("Connection","WebChannel transport errored:",e),h.io(new Vr(Ur.UNAVAILABLE,"The operation could not be completed")))})),d(l,kr.EventType.MESSAGE,(e=>{var t;if(!c){const n=e.data[0];Mr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Nr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Es[e];if(void 0!==t)return ks(t)}(e),n=i.message;void 0===t&&(t=Ur.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),c=!0,h.io(new Vr(t,n)),l.close()}else Nr("Connection","WebChannel received:",n),h.ro(n)}})),d(o,Er.STAT_EVENT,(e=>{e.stat===Sr.PROXY?Nr("Connection","Detected buffering proxy"):e.stat===Sr.NOPROXY&&Nr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
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
 */function Sl(e){return new Zs(e,!0)}class Tl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&Nr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
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
 */class kl{constructor(e,t,n,r,i,o,s,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Tl(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===Ur.RESOURCE_EXHAUSTED?(Lr(t.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===Ur.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new Vr(Ur.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return Nr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Nr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xl extends kl{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.It=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=ha(this.It,e),n=function(e){if(!("targetChange"in e))return ti.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ti.min():t.readTime?ta(t.readTime):ti.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=la(this.It),t.addTarget=function(e,t){let n;const r=t.target;return n=co(r)?{documents:pa(e,r)}:{query:ma(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Xs(e,t.resumeToken):t.snapshotVersion.compareTo(ti.min())>0&&(n.readTime=Ys(e,t.snapshotVersion.toTimestamp())),n}(this.It,e);const n=va(this.It,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=la(this.It),t.removeTarget=e,this.Bo(t)}}class Il extends kl{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Mr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=fa(e.writeResults,e.commitTime),n=ta(e.commitTime);return this.listener.Zo(n,t)}return Mr(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=la(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>da(this.It,e)))};this.Bo(t)}}
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
 */class Cl extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.It=r,this.nu=!1}su(){if(this.nu)throw new Vr(Ur.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Vr(Ur.UNKNOWN,e.toString())}))}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection._o(e,t,n,i,o,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Vr(Ur.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class Al{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Lr(t),this.ou=!1):Nr("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
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
 */class Rl{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr((e=>{n.enqueueAndForget((async()=>{Ul(this)&&(Nr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=qr(e);t._u.add(4),await Nl(t),t.gu.set("Unknown"),t._u.delete(4),await Ol(t)}(this))}))})),this.gu=new Al(n,r)}}async function Ol(e){if(Ul(e))for(const t of e.wu)await t(!0)}async function Nl(e){for(const t of e.wu)await t(!1)}function Ll(e,t){const n=qr(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),ql(n)?Ml(n):ru(n).ko()&&Dl(n,t))}function Pl(e,t){const n=qr(e),r=ru(n);n.du.delete(t),r.ko()&&Fl(n,t),0===n.du.size&&(r.ko()?r.Fo():Ul(n)&&n.gu.set("Unknown"))}function Dl(e,t){e.yu.Mt(t.targetId),ru(e).zo(t)}function Fl(e,t){e.yu.Mt(t),ru(e).Ho(t)}function Ml(e){e.yu=new Ks({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),ru(e).start(),e.gu.uu()}function ql(e){return Ul(e)&&!ru(e).No()&&e.du.size>0}function Ul(e){return 0===qr(e)._u.size}function Vl(e){e.yu=void 0}async function jl(e){e.du.forEach(((t,n)=>{Dl(e,t)}))}async function Bl(e,t){Vl(e),ql(e)?(e.gu.hu(t),Ml(e)):e.gu.set("Unknown")}async function $l(e,t,n){if(e.gu.set("Online"),t instanceof zs&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){Nr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await zl(e,n)}else if(t instanceof Bs?e.yu.Gt(t):t instanceof $s?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(ti.min()))try{const t=await al(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.te(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(Ii.EMPTY_BYTE_STRING,n.snapshotVersion)),Fl(e,t);const r=new La(n.target,t,1,n.sequenceNumber);Dl(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Nr("RemoteStore","Failed to raise snapshot:",t),await zl(e,t)}}async function zl(e,t,n){if(!gi(t))throw t;e._u.add(1),await Nl(e),e.gu.set("Offline"),n||(n=()=>al(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Nr("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Ol(e)}))}function Hl(e,t){return t().catch((n=>zl(e,n,t)))}async function Kl(e){const t=qr(e),n=iu(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Wl(t);)try{const e=await cl(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,Gl(t,e)}catch(e){await zl(t,e)}Jl(t)&&Ql(t)}function Wl(e){return Ul(e)&&e.fu.length<10}function Gl(e,t){e.fu.push(t);const n=iu(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Jl(e){return Ul(e)&&!iu(e).No()&&e.fu.length>0}function Ql(e){iu(e).start()}async function Zl(e){iu(e).eu()}async function Yl(e){const t=iu(e);for(const n of e.fu)t.Xo(n.mutations)}async function Xl(e,t,n){const r=e.fu.shift(),i=Oa.from(r,t,n);await Hl(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Kl(e)}async function eu(e,t){t&&iu(e).Yo&&await async function(e,t){if(n=t.code,Ts(n)&&n!==Ur.ABORTED){const n=e.fu.shift();iu(e).Mo(),await Hl(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Kl(e)}var n}(e,t),Jl(e)&&Ql(e)}async function tu(e,t){const n=qr(e);n.asyncQueue.verifyOperationInProgress(),Nr("RemoteStore","RemoteStore received new credentials");const r=Ul(n);n._u.add(3),await Nl(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Ol(n)}async function nu(e,t){const n=qr(e);t?(n._u.delete(2),await Ol(n)):t||(n._u.add(2),await Nl(n),n.gu.set("Unknown"))}function ru(e){return e.pu||(e.pu=function(e,t,n){const r=qr(e);return r.su(),new xl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.It,n)
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
 */}(e.datastore,e.asyncQueue,{Yr:jl.bind(null,e),Zr:Bl.bind(null,e),Wo:$l.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),ql(e)?Ml(e):e.gu.set("Unknown")):(await e.pu.stop(),Vl(e))}))),e.pu}function iu(e){return e.Iu||(e.Iu=function(e,t,n){const r=qr(e);return r.su(),new Il(t,r.connection,r.authCredentials,r.appCheckCredentials,r.It,n)}(e.datastore,e.asyncQueue,{Yr:Zl.bind(null,e),Zr:eu.bind(null,e),tu:Yl.bind(null,e),Zo:Xl.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await Kl(e)):(await e.Iu.stop(),e.fu.length>0&&(Nr("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
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
 */}class ou{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,s=new ou(e,t,o,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Vr(Ur.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function su(e,t){if(Lr("AsyncQueue",`${t}: ${e}`),gi(e))return new Vr(Ur.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class au{constructor(e){this.comparator=e?(t,n)=>e(t,n)||si.comparator(t.key,n.key):(e,t)=>si.comparator(e.key,t.key),this.keyedMap=Rs(),this.sortedSet=new _i(this.comparator)}static emptySet(e){return new au(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof au))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new au;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class lu{constructor(){this.Tu=new _i(si.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Fr():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class uu{constructor(e,t,n,r,i,o,s,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((e=>{o.push({type:0,doc:e})})),new uu(e,t,au.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class cu{constructor(){this.Au=void 0,this.listeners=[]}}class hu{constructor(){this.queries=new xs((e=>Mo(e)),Fo),this.onlineState="Unknown",this.Ru=new Set}}async function du(e,t){const n=qr(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new cu),i)try{o.Au=await n.onListen(r)}catch(e){const n=su(e,`Initialization of query '${qo(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,o),o.listeners.push(t),t.bu(n.onlineState),o.Au&&t.Pu(o.Au)&&gu(n)}async function fu(e,t){const n=qr(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const e=o.listeners.indexOf(t);e>=0&&(o.listeners.splice(e,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function pu(e,t){const n=qr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Pu(i)&&(r=!0);t.Au=i}}r&&gu(n)}function mu(e,t,n){const r=qr(e),i=r.queries.get(t);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(t)}function gu(e){e.Ru.forEach((e=>{e.next()}))}class vu{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new uu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=uu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
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
class yu{constructor(e){this.key=e}}class bu{constructor(e){this.key=e}}class wu{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Ms(),this.mutatedKeys=Ms(),this.Gu=jo(e),this.Qu=new au(this.Gu)}get ju(){return this.Uu}Wu(e,t){const n=t?t.zu:new lu,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=Uo(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Hu(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Gu(c,a)>0||l&&this.Gu(c,l)<0)&&(s=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(s=!0)),f&&(c?(o=o.add(c),i=d?i.add(e):i.delete(e)):(o=o.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const e="F"===this.query.limitType?o.last():o.first();o=o.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:o,zu:n,$i:s,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Fr()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const o=t?this.Yu():[],s=0===this.Ku.size&&this.current?1:0,a=s!==this.qu;return this.qu=s,0!==i.length||a?{snapshot:new uu(this.query,e.Qu,r,i,e.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new lu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.Uu=this.Uu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Uu=this.Uu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Ms(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new bu(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new yu(n))})),t}tc(e){this.Uu=e.Hi,this.Ku=Ms();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return uu.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class _u{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Eu{constructor(e){this.key=e,this.nc=!1}}class Su{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new xs((e=>Mo(e)),Fo),this.rc=new Map,this.oc=new Set,this.uc=new _i(si.comparator),this.cc=new Map,this.ac=new Ka,this.hc={},this.lc=new Map,this.fc=Va.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Tu(e,t){const n=$u(e);let r,i;const o=n.ic.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.ec();else{const e=await hl(n.localStore,Po(t));n.isPrimaryClient&&Ll(n.remoteStore,e);const o=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await ku(n,t,r,"current"===o,e.resumeToken)}return i}async function ku(e,t,n,r,i){e._c=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await fl(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,i))));const o=r&&r.targetChanges.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,o);return Mu(e,t.targetId,s.Xu),s.snapshot}(e,t,n,r);const o=await fl(e.localStore,t,!0),s=new wu(t,o.Hi),a=s.Wu(o.documents),l=js.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=s.applyChanges(a,e.isPrimaryClient,l);Mu(e,n,u.Xu);const c=new _u(t,n,s);return e.ic.set(t,c),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function xu(e,t){const n=qr(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((e=>!Fo(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Pl(n.remoteStore,r.targetId),Du(n,r.targetId)})).catch(pi)):(Du(n,r.targetId),await dl(n.localStore,r.targetId,!0))}async function Iu(e,t,n){const r=zu(e);try{const e=await function(e,t){const n=qr(e),r=ei.now(),i=t.reduce(((e,t)=>e.add(t.key)),Ms());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Cs(),l=Ms();return n.Gi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{o=i;const s=[];for(const e of t){const t=ds(e,o.get(e.key).overlayedDocument);null!=t&&s.push(new ms(e.key,t,ro(t.value.mapValue),ss.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,s,t)})).next((t=>{s=t;const r=t.applyToLocalDocumentSet(o,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:s.batchId,changes:Os(o)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new _i(Yr)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Vu(r,e.changes),await Kl(r.remoteStore)}catch(e){const t=su(e,"Failed to persist write");n.reject(t)}}async function Cu(e,t){const n=qr(e);try{const e=await ll(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.cc.get(t);r&&(Mr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?Mr(r.nc):e.removedDocuments.size>0&&(Mr(r.nc),r.nc=!1))})),await Vu(n,e,t)}catch(e){await pi(e)}}function Au(e,t,n){const r=qr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=qr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.bu(t)&&(r=!0)})),r&&gu(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ru(e,t,n){const r=qr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),o=i&&i.key;if(o){let e=new _i(si.comparator);e=e.insert(o,io.newNoDocument(o,ti.min()));const n=Ms().add(o),i=new Vs(ti.min(),new Map,new Ti(Yr),e,n);await Cu(r,i),r.uc=r.uc.remove(o),r.cc.delete(t),Uu(r)}else await dl(r.localStore,t,!1).then((()=>Du(r,t,n))).catch(pi)}async function Ou(e,t){const n=qr(e),r=t.batch.batchId;try{const e=await sl(n.localStore,t);Pu(n,r,null),Lu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vu(n,e)}catch(e){await pi(e)}}async function Nu(e,t,n){const r=qr(e);try{const e=await function(e,t){const n=qr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Mr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Pu(r,t,n),Lu(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Vu(r,e)}catch(n){await pi(n)}}function Lu(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function Pu(e,t,n){const r=qr(e);let i=r.hc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function Du(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||Fu(e,t)}))}function Fu(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(Pl(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Uu(e))}function Mu(e,t,n){for(const r of n)r instanceof yu?(e.ac.addReference(r.key,t),qu(e,r)):r instanceof bu?(Nr("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||Fu(e,r.key)):Fr()}function qu(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Nr("SyncEngine","New document in limbo: "+n),e.oc.add(r),Uu(e))}function Uu(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new si(ri.fromString(t)),r=e.fc.next();e.cc.set(r,new Eu(n)),e.uc=e.uc.insert(n,r),Ll(e.remoteStore,new La(Po(Co(n.path)),r,2,vi.at))}}async function Vu(e,t,n){const r=qr(e),i=[],o=[],s=[];r.ic.isEmpty()||(r.ic.forEach(((e,a)=>{s.push(r._c(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=tl.Ci(a.targetId,e);o.push(t)}})))})),await Promise.all(s),r.sc.Wo(i),await async function(e,t){const n=qr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>mi.forEach(t,(t=>mi.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>mi.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!gi(e))throw e;Nr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ui.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(e,i)}}}(r.localStore,o))}async function ju(e,t){const n=qr(e);if(!n.currentUser.isEqual(t)){Nr("SyncEngine","User change. New user:",t.toKey());const e=await ol(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new Vr(Ur.CANCELLED,t))}))})),e.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Vu(n,e.ji)}}function Bu(e,t){const n=qr(e),r=n.cc.get(t);if(r&&r.nc)return Ms().add(r.key);{let e=Ms();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}function $u(e){const t=qr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Cu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bu.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ru.bind(null,t),t.sc.Wo=pu.bind(null,t.eventManager),t.sc.wc=mu.bind(null,t.eventManager),t}function zu(e){const t=qr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ou.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Nu.bind(null,t),t}class Hu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Sl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return il(this.persistence,new nl,e.initialUser,this.It)}yc(e){return new Ya(el.Bs,this.It)}gc(e){return new gl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ku{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Au(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ju.bind(null,this.syncEngine),await nu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new hu}createDatastore(e){const t=Sl(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new _l(r));var r;return function(e,t,n,r){return new Cl(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Au(this.syncEngine,e,0),o=yl.C()?new yl:new vl,new Rl(t,n,r,i,o);var t,n,r,i,o}createSyncEngine(e,t){return function(e,t,n,r,i,o,s){const a=new Su(e,t,n,r,i,o);return s&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=qr(e);Nr("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Nl(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
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
 */function Wu(e,t,n){if(!n)throw new Vr(Ur.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Gu(e,t,n,r){if(!0===t&&!0===r)throw new Vr(Ur.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ju(e){if(!si.isDocumentKey(e))throw new Vr(Ur.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Qu(e){if(si.isDocumentKey(e))throw new Vr(Ur.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Zu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Fr()}function Yu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Vr(Ur.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zu(e);throw new Vr(Ur.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
const Xu=new Map;class ec{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Vr(Ur.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Vr(Ur.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Gu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class tc{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ec({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Vr(Ur.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Vr(Ur.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ec(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new $r;switch(e.type){case"gapi":const t=e.client;return new Wr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Vr(Ur.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Xu.get(e);t&&(Nr("ComponentProvider","Removing Datastore"),Xu.delete(e),t.terminate())}(this),Promise.resolve()}}function nc(e,t,n,r={}){var i;const o=(e=Yu(e,tc))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==t&&Pr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Cr.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new Vr(Ur.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Cr(o)}e._authCredentials=new zr(new Br(t,n))}}
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
 */class rc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rc(this.firestore,e,this._key)}}class ic{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ic(this.firestore,e,this._query)}}class oc extends ic{constructor(e,t,n){super(e,t,Co(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rc(this.firestore,null,new si(e))}withConverter(e){return new oc(this.firestore,e,this._path)}}function sc(e,t,...n){if(e=(0,a.m9)(e),Wu("collection","path",t),e instanceof tc){const r=ri.fromString(t,...n);return Qu(r),new oc(e,null,r)}{if(!(e instanceof rc||e instanceof oc))throw new Vr(Ur.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ri.fromString(t,...n));return Qu(r),new oc(e.firestore,null,r)}}function ac(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=Zr.R()),Wu("doc","path",t),e instanceof tc){const r=ri.fromString(t,...n);return Ju(r),new rc(e,null,new si(r))}{if(!(e instanceof rc||e instanceof oc))throw new Vr(Ur.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ri.fromString(t,...n));return Ju(r),new rc(e.firestore,e instanceof oc?e.converter:null,new si(r))}}
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
class lc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
class uc{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Cr.UNAUTHENTICATED,this.clientId=Zr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Nr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Nr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Vr(Ur.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=su(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function cc(e,t){e.asyncQueue.verifyOperationInProgress(),Nr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await ol(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function hc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await dc(e);Nr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>tu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>tu(t.remoteStore,n))),e.onlineComponents=t}async function dc(e){return e.offlineComponents||(Nr("FirestoreClient","Using default OfflineComponentProvider"),await cc(e,new Hu)),e.offlineComponents}async function fc(e){return e.onlineComponents||(Nr("FirestoreClient","Using default OnlineComponentProvider"),await hc(e,new Ku)),e.onlineComponents}function pc(e){return fc(e).then((e=>e.syncEngine))}async function mc(e){const t=await fc(e),n=t.eventManager;return n.onListen=Tu.bind(null,t.syncEngine),n.onUnlisten=xu.bind(null,t.syncEngine),n}class gc{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Tl(this,"async_queue_retry"),this.Wc=()=>{const e=El();e&&Nr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=El();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const t=El();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise((()=>{}));const t=new jr;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(E){if(!gi(E))throw E;Nr("AsyncQueue","Operation failed with retryable error: "+E)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e);throw Lr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=ou.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.qc.push(r),r}zc(){this.Kc&&Fr()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.qc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.qc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.qc.indexOf(e);this.qc.splice(t,1)}}function vc(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
 */(e,["next","error","complete"])}class yc extends tc{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new gc,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_c(this),this._firestoreClient.terminate()}}function bc(e,t){const n="object"==typeof e?e:(0,i.Mq)(),r="string"==typeof e?e:t||"(default)",o=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const e=(0,a.P0)("firestore");e&&nc(o,...e)}return o}function wc(e){return e._firestoreClient||_c(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function _c(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Di(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
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
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new uc(e._authCredentials,e._appCheckCredentials,e._queue,r)}
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
class Ec{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ec(Ii.fromBase64String(e))}catch(e){throw new Vr(Ur.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Ec(Ii.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Sc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Vr(Ur.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oi(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class Tc{constructor(e){this._methodName=e}}
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
 */class kc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Vr(Ur.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Vr(Ur.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Yr(this._lat,e._lat)||Yr(this._long,e._long)}}
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
 */const xc=/^__.*__$/;class Ic{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ms(e,this.data,this.fieldMask,t,this.fieldTransforms):new ps(e,this.data,t,this.fieldTransforms)}}function Cc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Fr()}}class Ac{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Ac(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return jc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Cc(this.sa)&&xc.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Rc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||Sl(e)}da(e,t,n,r=!1){return new Ac({sa:e,methodName:t,fa:n,path:oi.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Oc(e){const t=e._freezeSettings(),n=Sl(e._databaseId);return new Rc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Nc(e,t,n,r,i,o={}){const s=e.da(o.merge||o.mergeFields?2:0,t,n,i);Mc("Data must be an object, but it was:",s,r);const a=Dc(r,s);let l,u;if(o.merge)l=new xi(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=qc(t,r,n);if(!s.contains(i))throw new Vr(Ur.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Bc(e,i)||e.push(i)}l=new xi(e),u=s.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=s.fieldTransforms;return new Ic(new no(a),l,u)}function Lc(e,t,n,r=!1){return Pc(n,e.da(r?4:3,t))}function Pc(e,t){if(Fc(e=(0,a.m9)(e)))return Mc("Unsupported field value:",t,e),Dc(e,t);if(e instanceof Tc)return function(e,t){if(!Cc(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Pc(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Ho(t.It,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ei.fromDate(e);return{timestampValue:Ys(t.It,n)}}if(e instanceof ei){const n=new ei(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ys(t.It,n)}}if(e instanceof kc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Ec)return{bytesValue:Xs(t.It,e._byteString)};if(e instanceof rc){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:na(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${Zu(e)}`)}(e,t)}function Dc(e,t){const n={};return wi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):bi(e,((e,r)=>{const i=Pc(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Fc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ei||e instanceof kc||e instanceof Ec||e instanceof rc||e instanceof Tc)}function Mc(e,t,n){if(!Fc(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Zu(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function qc(e,t,n){if((t=(0,a.m9)(t))instanceof Sc)return t._internalPath;if("string"==typeof t)return Vc(e,t);throw jc("Field path arguments must be of type string or ",e,!1,void 0,n)}const Uc=new RegExp("[~\\*/\\[\\]]");function Vc(e,t,n){if(t.search(Uc)>=0)throw jc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Sc(...t.split("."))._internalPath}catch(r){throw jc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function jc(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new Vr(Ur.INVALID_ARGUMENT,a+e+l)}function Bc(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class $c{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new zc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Hc("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class zc extends $c{data(){return super.data()}}function Hc(e,t){return"string"==typeof t?Vc(e,t):t instanceof Sc?t._internalPath:t._delegate._internalPath}
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
 */function Kc(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Vr(Ur.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wc{}function Gc(e,...t){for(const n of t)e=n._apply(e);return e}class Jc extends Wc{constructor(e,t,n){super(),this.ma=e,this.ga=t,this.ya=n,this.type="where"}_apply(e){const t=Oc(e.firestore),n=function(e,t,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new Vr(Ur.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){Yc(s,o);const t=[];for(const n of s)t.push(Zc(r,e,n));a={arrayValue:{values:t}}}else a=Zc(r,e,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||Yc(s,o),a=Lc(n,t,s,"in"===o||"not-in"===o);const l=ho.create(i,o,a);return function(e,t){if(t.dt()){const n=Oo(e);if(null!==n&&!n.isEqual(t.field))throw new Vr(Ur.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Ro(e);null!==r&&Xc(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Vr(Ur.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Vr(Ur.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,l),l}(e._query,"where",t,e.firestore._databaseId,this.ma,this.ga,this.ya);return new ic(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new xo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Qc(e,t,n){const r=t,i=Hc("where",e);return new Jc(i,r,n)}function Zc(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Vr(Ur.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!No(t)&&-1!==n.indexOf("/"))throw new Vr(Ur.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ri.fromString(n));if(!si.isDocumentKey(r))throw new Vr(Ur.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gi(e,new si(r))}if(n instanceof rc)return Gi(e,n._key);throw new Vr(Ur.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zu(n)}.`)}function Yc(e,t){if(!Array.isArray(e)||0===e.length)throw new Vr(Ur.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Vr(Ur.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Xc(e,t,n){if(!n.isEqual(t))throw new Vr(Ur.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */class eh{convertValue(e,t="none"){switch(ji(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ri(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Fr()}}convertObject(e,t){const n={};return bi(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new kc(Ri(e.latitude),Ri(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Li(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Pi(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new ei(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ri.fromString(e);Mr(xa(n));const r=new Fi(n.get(1),n.get(3)),i=new si(n.popFirst(5));return r.isEqual(t)||Lr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
class nh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rh extends $c{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ih(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Hc("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ih extends rh{data(e={}){return super.data(e)}}class oh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new nh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ih(this._firestore,this._userDataWriter,n.key,n,new nh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Vr(Ur.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new ih(e._firestore,e._userDataWriter,n.doc.key,n.doc,new nh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new ih(e._firestore,e._userDataWriter,t.doc.key,t.doc,new nh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,o=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:sh(t.type),doc:r,oldIndex:i,newIndex:o}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function sh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Fr()}}class ah extends eh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ec(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rc(this.firestore,null,t)}}function lh(e){return hh(Yu(e.firestore,yc),[new bs(e._key,ss.none())])}function uh(e,t){const n=Yu(e.firestore,yc),r=ac(e),i=th(e.converter,t);return hh(n,[Nc(Oc(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,ss.exists(!1))]).then((()=>r))}function ch(e,...t){var n,r,i;e=(0,a.m9)(e);let o={includeMetadataChanges:!1},s=0;"object"!=typeof t[s]||vc(t[s])||(o=t[s],s++);const l={includeMetadataChanges:o.includeMetadataChanges};if(vc(t[s])){const e=t[s];t[s]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[s+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[s+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,c,h;if(e instanceof rc)c=Yu(e.firestore,yc),h=Co(e._key.path),u={next:n=>{t[s]&&t[s](dh(c,e,n))},error:t[s+1],complete:t[s+2]};else{const n=Yu(e,ic);c=Yu(n.firestore,yc),h=n._query;const r=new ah(c);u={next:e=>{t[s]&&t[s](new oh(c,r,n,e))},error:t[s+1],complete:t[s+2]},Kc(e._query)}return function(e,t,n,r){const i=new lc(r),o=new vu(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>du(await mc(e),o))),()=>{i.bc(),e.asyncQueue.enqueueAndForget((async()=>fu(await mc(e),o)))}}(wc(c),h,l,u)}function hh(e,t){return function(e,t){const n=new jr;return e.asyncQueue.enqueueAndForget((async()=>Iu(await pc(e),t,n))),n.promise}(wc(e),t)}function dh(e,t,n){const r=n.docs.get(t._key),i=new ah(e);return new rh(e,i,t._key,r,new nh(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */!function(e,t=!0){!function(e){Ar=e}(i.Jn),(0,i.Xd)(new o.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new yc(new Hr(e.getProvider("auth-internal")),new Jr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Vr(Ur.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fi(e.options.projectId,t)}
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
 */(i,n),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Ir,"3.7.3",e),(0,i.KN)(Ir,"3.7.3","esm2017")}()},2309:(e,t,n)=>{"use strict";n.d(t,{KV:()=>r.KV,aF:()=>r.aF,cF:()=>r.cF,iH:()=>r.iH,sd:()=>r.sd});var r=n(2079)},1639:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},3340:(e,t,n)=>{"use strict";function r(e){return e}function i(e){return e}n.d(t,{BC:()=>i,xr:()=>r})},8339:(e,t,n)=>{"use strict";n.d(t,{p7:()=>nt,r5:()=>V,tv:()=>ot});var r=n(9835),i=n(499);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof window;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function l(e,t){const n={};for(const r in t){const i=t[r];n[r]=c(i)?i.map(e):e(i)}return n}const u=()=>{},c=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),o=t.slice(l+1,a>-1?a:t.length),i=e(o)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=_(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&v(t.matched[r],n.matched[i])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function v(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b(e[n],t[n]))return!1;return!0}function b(e,t){return c(e)?w(e,t):c(t)?w(t,e):e===t}function w(e,t){return c(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function _(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],"."!==o){if(".."!==o)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,S;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(S||(S={}));function T(e){if(!e)if(o){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const k=/^[^#]+#/;function x(e,t){return e.replace(k,"#")+t}function I(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const C=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=I(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function R(e,t){const n=history.state?history.state.position-t:-1;return n+e}const O=new Map;function N(e,t){O.set(e,t)}function L(e){const t=O.get(e);return O.delete(e),t}let P=()=>location.protocol+"//"+location.host;function D(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const s=m(n,e);return s+r+i}function F(e,t,n,r){let i=[],o=[],s=null;const l=({state:o})=>{const a=D(e,location),l=n.value,u=t.value;let c=0;if(o){if(n.value=a,t.value=o,s&&s===l)return void(s=null);c=u?o.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:c,type:E.pop,direction:c?c>0?S.forward:S.back:S.unknown})}))};function u(){s=n.value}function c(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:C()}),"")}function d(){for(const e of o)e();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:c,destroy:d}}function M(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?C():null}}function q(e){const{history:t,location:n}=window,r={value:D(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:P()+e+r;try{t[s?"replaceState":"pushState"](o,"",l),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](l)}}function s(e,n){const s=a({},t.state,M(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function l(e,n){const s=a({},i.value,t.state,{forward:e,scroll:C()});o(s.current,s,!0);const l=a({},M(r.value,e,null),{position:s.position+1},n);o(e,l,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:l,replace:s}}function U(e){e=T(e);const t=q(e),n=F(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:x.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function V(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),U(e)}function j(e){return"string"===typeof e||e&&"object"===typeof e}function B(e){return"string"===typeof e||"symbol"===typeof e}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var H;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(H||(H={}));function K(e,t){return a(new Error,{type:e,[z]:!0},t)}function W(e,t){return e instanceof Error&&z in e&&(null==t||!!(e.type&t))}const G="[^/]+?",J={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function Z(e,t){const n=a({},J,t),r=[];let i=n.start?"^":"";const o=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Q,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;o.push({name:e,repeatable:n,optional:l});const c=u||G;if(c!==G){s+=10;try{new RegExp(`(${c})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${c}): `+h.message)}}let d=n?`((?:${c})(?:/(?:${c}))*)`:`(${c})`;t||(d=l&&a.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),i+=d,s+=20,l&&(s+=-8),n&&(s+=-20),".*"===c&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function l(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,l=o in t?t[o]:"";if(c(l)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=c(l)?l.join("/"):l;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:s,score:r,keys:o,parse:l,stringify:u}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function X(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Y(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(ee(r))return 1;if(ee(i))return-1}return i.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,l=0,u="",c="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:c,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ne.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==c[c.length-1]?c=c.slice(0,-1)+a:n=3:c+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,c="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function ie(e,t,n){const r=Z(re(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function oe(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,l=ae(e);l.aliasOf=r&&r.record;const h=he(t,e),d=[l];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=ie(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ue(f)&&s(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&c(f)}return p?()=>{s(p)}:u}function s(e){if(B(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function l(){return n}function c(e){let t=0;while(t<n.length&&X(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ue(e)&&r.set(e.record.name,e)}function h(e,t){let i,o,s,l={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw K(1,{location:e});0,s=i.record.name,l=a(se(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&se(e.params,i.keys.map((e=>e.name)))),o=i.stringify(l)}else if("path"in e)o=e.path,i=n.find((e=>e.re.test(o))),i&&(l=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw K(1,{location:e,currentLocation:t});s=i.record.name,l=a({},t.params,e.params),o=i.stringify(l)}const u=[];let c=i;while(c)u.unshift(c.record),c=c.parent;return{name:s,path:o,params:l,matched:u,meta:ce(u)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:h,removeRoute:s,getRoutes:l,getRecordMatcher:i}}function se(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:le(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function le(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ue(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ce(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function he(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,pe=/&/g,me=/\//g,ge=/=/g,ve=/\?/g,ye=/\+/g,be=/%5B/g,we=/%5D/g,_e=/%5E/g,Ee=/%60/g,Se=/%7B/g,Te=/%7C/g,ke=/%7D/g,xe=/%20/g;function Ie(e){return encodeURI(""+e).replace(Te,"|").replace(be,"[").replace(we,"]")}function Ce(e){return Ie(e).replace(Se,"{").replace(ke,"}").replace(_e,"^")}function Ae(e){return Ie(e).replace(ye,"%2B").replace(xe,"+").replace(fe,"%23").replace(pe,"%26").replace(Ee,"`").replace(Se,"{").replace(ke,"}").replace(_e,"^")}function Re(e){return Ae(e).replace(ge,"%3D")}function Oe(e){return Ie(e).replace(fe,"%23").replace(ve,"%3F")}function Ne(e){return null==e?"":Oe(e).replace(me,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Pe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),o=Le(n<0?e:e.slice(0,n)),s=n<0?null:Le(e.slice(n+1));if(o in t){let e=t[o];c(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=c(r)?r.map((e=>e&&Ae(e))):[r&&Ae(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Fe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=c(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Me=Symbol(""),qe=Symbol(""),Ue=Symbol(""),Ve=Symbol(""),je=Symbol("");function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $e(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((s,a)=>{const l=e=>{!1===e?a(K(4,{from:n,to:t})):e instanceof Error?a(e):j(e)?a(K(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},u=e.call(r&&r.instances[i],t,n,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch((e=>a(e)))}))}function ze(e,t,n,r){const i=[];for(const o of e){0;for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(He(a)){const s=a.__vccOpts||a,l=s[t];l&&i.push($e(l,n,r,o,e))}else{let l=a();0,i.push((()=>l.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const a=s(i)?i.default:i;o.components[e]=a;const l=a.__vccOpts||a,u=l[t];return u&&$e(u,n,r,o,e)()}))))}}}return i}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ke(e){const t=(0,r.f3)(Ue),n=(0,r.f3)(Ve),o=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),s=(0,r.Fl)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(v.bind(null,r));if(s>-1)return s;const a=Ze(e[t-2]);return t>1&&Ze(r)===a&&i[i.length-1].path!==a?i.findIndex(v.bind(null,e[t-2])):s})),a=(0,r.Fl)((()=>s.value>-1&&Qe(n.params,o.value.params))),l=(0,r.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&y(n.params,o.value.params)));function c(n={}){return Je(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:o,href:(0,r.Fl)((()=>o.value.href)),isActive:a,isExactActive:l,navigate:c}}const We=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=(0,i.qj)(Ke(e)),{options:o}=(0,r.f3)(Ue),s=(0,r.Fl)((()=>({[Ye(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ge=We;function Je(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!c(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Ze(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=(0,r.f3)(je),s=(0,r.Fl)((()=>e.route||o.value)),l=(0,r.f3)(qe,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(l);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),c=(0,r.Fl)((()=>s.value.matched[u.value]));(0,r.JJ)(qe,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Me,c),(0,r.JJ)(je,s);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,c.value,e.name]),(([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&v(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=s.value,o=e.name,l=c.value,u=l&&l.components[o];if(!u)return et(n.default,{Component:u,route:i});const d=l.props[o],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(l.instances[o]=null)},m=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:m,route:i})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Xe;function nt(e){const t=oe(e.routes,e),n=e.parseQuery||Pe,s=e.stringifyQuery||De,h=e.history;const d=Be(),m=Be(),v=Be(),y=(0,i.XI)($);let b=$;o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=l.bind(null,(e=>""+e)),_=l.bind(null,Ne),S=l.bind(null,Le);function T(e,n){let r,i;return B(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function k(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function x(){return t.getRoutes().map((e=>e.record))}function I(e){return!!t.getRecordMatcher(e)}function O(e,r){if(r=a({},r||y.value),"string"===typeof e){const i=f(n,e,r.path),o=t.resolve({path:i.path},r),s=h.createHref(i.fullPath);return a(i,o,{params:S(o.params),hash:Le(i.hash),redirectedFrom:void 0,href:s})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:_(e.params)}),r.params=_(r.params)}const o=t.resolve(i,r),l=e.hash||"";o.params=w(S(o.params));const u=p(s,a({},e,{hash:Ce(l),path:o.path})),c=h.createHref(u);return a({fullPath:u,hash:l,query:s===De?Fe(e.query):e.query||{}},o,{redirectedFrom:void 0,href:c})}function P(e){return"string"===typeof e?f(n,e,y.value.path):a({},e)}function D(e,t){if(b!==e)return K(8,{from:t,to:e})}function F(e){return U(e)}function M(e){return F(a(P(e),{replace:!0}))}function q(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function U(e,t){const n=b=O(e),r=y.value,i=e.state,o=e.force,l=!0===e.replace,u=q(n);if(u)return U(a(P(u),{state:"object"===typeof u?a({},i,u.state):i,force:o,replace:l}),t||n);const c=n;let h;return c.redirectedFrom=t,!o&&g(s,r,n)&&(h=K(16,{to:c,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):j(c,r)).catch((e=>W(e)?W(e,2)?e:te(e):X(e,c,r))).then((e=>{if(e){if(W(e,2))return U(a({replace:l},P(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:o}),t||c)}else e=H(c,r,!0,l,i);return z(c,r,e),e}))}function V(e,t){const n=D(e,t);return n?Promise.reject(n):Promise.resolve()}function j(e,t){let n;const[r,i,o]=it(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push($e(r,e,t))}));const s=V.bind(null,e,t);return n.push(s),rt(n).then((()=>{n=[];for(const r of d.list())n.push($e(r,e,t));return n.push(s),rt(n)})).then((()=>{n=ze(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push($e(r,e,t))}));return n.push(s),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(c(r.beforeEnter))for(const i of r.beforeEnter)n.push($e(i,e,t));else n.push($e(r.beforeEnter,e,t));return n.push(s),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(o,"beforeRouteEnter",e,t),n.push(s),rt(n)))).then((()=>{n=[];for(const r of m.list())n.push($e(r,e,t));return n.push(s),rt(n)})).catch((e=>W(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of v.list())r(e,t,n)}function H(e,t,n,r,i){const s=D(e,t);if(s)return s;const l=t===$,u=o?history.state:{};n&&(r||l?h.replace(e.fullPath,a({scroll:l&&u&&u.scroll},i)):h.push(e.fullPath,i)),y.value=e,ne(e,t,n,l),te()}let G;function J(){G||(G=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=O(e),i=q(r);if(i)return void U(a(i,{replace:!0}),r).catch(u);b=r;const s=y.value;o&&N(R(s.fullPath,n.delta),C()),j(r,s).catch((e=>W(e,12)?e:W(e,2)?(U(e.to,r).then((e=>{W(e,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),X(e,r,s)))).then((e=>{e=e||H(r,s,!1),e&&(n.delta&&!W(e,8)?h.go(-n.delta,!1):n.type===E.pop&&W(e,20)&&h.go(-1,!1)),z(r,s,e)})).catch(u)})))}let Q,Z=Be(),Y=Be();function X(e,t,n){te(e);const r=Y.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return Q&&y.value!==$?Promise.resolve():new Promise(((e,t)=>{Z.add([e,t])}))}function te(e){return Q||(Q=!e,J(),Z.list().forEach((([t,n])=>e?n(e):t())),Z.reset()),e}function ne(t,n,i,s){const{scrollBehavior:a}=e;if(!o||!a)return Promise.resolve();const l=!i&&L(R(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,l))).then((e=>e&&A(e))).catch((e=>X(e,t,n)))}const re=e=>h.go(e);let ie;const se=new Set,ae={currentRoute:y,listening:!0,addRoute:T,removeRoute:k,hasRoute:I,getRoutes:x,resolve:O,options:e,push:F,replace:M,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:m.add,afterEach:v.add,onError:Y.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),o&&!ie&&y.value===$&&(ie=!0,F(h.location).catch((e=>{0})));const n={};for(const i in $)n[i]=(0,r.Fl)((()=>y.value[i]));e.provide(Ue,t),e.provide(Ve,(0,i.qj)(n)),e.provide(je,y);const s=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(b=$,G&&G(),G=null,y.value=$,ie=!1,Q=!1),s()}}};return ae}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find((e=>v(e,o)))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find((e=>v(e,a)))||i.push(a))}return[n,r,i]}function ot(){return(0,r.f3)(Ue)}},8897:(e,t,n)=>{"use strict";n.d(t,{Jn:()=>me,qX:()=>he,Xd:()=>ce,Mq:()=>ve,ZF:()=>ge,KN:()=>ye});var r=n(3513),i=n(9795),o=n(5505);const s=(e,t)=>t.some((t=>e instanceof t));let a,l;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(E(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?c().includes(e)?function(...t){return e.apply(S(this),t),E(h.get(this))}:function(...t){return E(e.apply(S(this),t))}:function(t,...n){const r=e.call(S(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),s(e,u())?new Proxy(e,y):e)}function E(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const S=e=>m.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=E(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(E(s.result),e.oldVersion,e.newVersion,E(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const k=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],I=new Map;function C(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(I.get(t))return I.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=x.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!k.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return I.set(t,o),o}b((e=>({...e,get:(t,n,r)=>C(t,n)||e.get(t,n,r),has:(t,n)=>!!C(t,n)||e.has(t,n)})));
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
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const O="@firebase/app",N="0.8.4",L=new i.Yd("@firebase/app"),P="@firebase/app-compat",D="@firebase/analytics-compat",F="@firebase/analytics",M="@firebase/app-check-compat",q="@firebase/app-check",U="@firebase/auth",V="@firebase/auth-compat",j="@firebase/database",B="@firebase/database-compat",$="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",W="@firebase/messaging",G="@firebase/messaging-compat",J="@firebase/performance",Q="@firebase/performance-compat",Z="@firebase/remote-config",Y="@firebase/remote-config-compat",X="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.14.0",oe="[DEFAULT]",se={[O]:"fire-core",[P]:"fire-core-compat",[F]:"fire-analytics",[D]:"fire-analytics-compat",[q]:"fire-app-check",[M]:"fire-app-check-compat",[U]:"fire-auth",[V]:"fire-auth-compat",[j]:"fire-rtdb",[B]:"fire-rtdb-compat",[$]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[W]:"fire-fcm",[G]:"fire-fcm-compat",[J]:"fire-perf",[Q]:"fire-perf-compat",[Z]:"fire-rc",[Y]:"fire-rc-compat",[X]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,le=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){L.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ce(e){const t=e.name;if(le.has(t))return L.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new o.LL("app","Firebase",de);
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
 */const me=ie;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw fe.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw fe.create("no-options");const a=ae.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw fe.create("duplicate-app",{appName:s})}const l=new r.H0(s);for(const r of le.values())l.addComponent(r);const u=new pe(n,i,l);return ae.set(s,u),u}function ve(e=oe){const t=ae.get(e);if(!t&&e===oe)return ge();if(!t)throw fe.create("no-app",{appName:e});return t}function ye(e,t,n){var i;let o=null!==(i=se[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void L.warn(e.join(" "))}ce(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
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
const be="firebase-heartbeat-database",we=1,_e="firebase-heartbeat-store";let Ee=null;function Se(){return Ee||(Ee=T(be,we,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_e)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Te(e){var t;try{const t=await Se();return t.transaction(_e).objectStore(_e).get(xe(e))}catch(n){if(n instanceof o.ZR)L.warn(n.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});L.warn(e.message)}}}async function ke(e,t){var n;try{const n=await Se(),r=n.transaction(_e,"readwrite"),i=r.objectStore(_e);return await i.put(t,xe(e)),r.done}catch(r){if(r instanceof o.ZR)L.warn(r.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});L.warn(e.message)}}}function xe(e){return`${e.name}!${e.options.appId}`}
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
 */const Ie=1024,Ce=2592e6;class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ne(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Re();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ce})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Re(),{heartbeatsToSend:t,unsentEntries:n}=Oe(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Re(){const e=new Date;return e.toISOString().substring(0,10)}function Oe(e,t=Ie){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Le(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Le(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ne{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Te(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Le(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function Pe(e){ce(new r.wA("platform-logger",(e=>new A(e)),"PRIVATE")),ce(new r.wA("heartbeat",(e=>new Ae(e)),"PRIVATE")),ye(O,N,e),ye(O,N,"esm2017"),ye("fire-js","")}Pe("")},3513:(e,t,n)=>{"use strict";n.d(t,{H0:()=>u,wA:()=>i});var r=n(5505);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const o="[DEFAULT]";
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},9795:(e,t,n)=>{"use strict";n.d(t,{Yd:()=>u,in:()=>i});
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
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},2275:(e,t,n)=>{"use strict";n.d(t,{x0:()=>r});let r=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>(t&=63,e+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_",e)),"")},8593:e=>{"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}}]);