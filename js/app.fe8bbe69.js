(()=>{"use strict";var e={4647:(e,t,r)=>{r(8964);var o=r(1957),n=r(1947),a=r(499),i=r(9835);function l(e,t,r,o,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});var c=r(1639);const u=(0,c.Z)(s,[["render",l]]),d=u;var p=r(3340),f=r(8339);r(202);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(332)]).then(r.bind(r,9725)),children:[{path:"index",component:()=>Promise.all([r.e(736),r.e(944)]).then(r.bind(r,1944))}]},{path:"/register",component:()=>Promise.all([r.e(736),r.e(978)]).then(r.bind(r,978))},{path:"/sign-in",component:()=>Promise.all([r.e(736),r.e(332)]).then(r.bind(r,9725))},{path:"/",component:()=>Promise.all([r.e(736),r.e(788)]).then(r.bind(r,1788)),children:[{path:"home",component:()=>r.e(417).then(r.bind(r,2417)),meta:{requiresAuth:!0}},{path:"menu",component:()=>Promise.all([r.e(736),r.e(902)]).then(r.bind(r,1902)),meta:{requiresAuth:!0}},{path:"payment",component:()=>Promise.all([r.e(736),r.e(328)]).then(r.bind(r,7328)),meta:{requiresAuth:!0}},{path:"orders",component:()=>Promise.all([r.e(736),r.e(252)]).then(r.bind(r,1252)),meta:{requiresAuth:!0}}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],m=h,b=(0,p.BC)((function(){const e=f.r5,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function g(e,t){const r=e(d);r.use(n.Z,t);const o=(0,a.Xl)("function"===typeof b?await b({}):b);return{app:r,router:o}}var v=r(2121),y=r(6827);const w={config:{},plugins:{Dialog:v.Z,Notify:y.Z}},P="";async function j({app:e,router:t},r){let o=!1;const n=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===o&&s<r.length;s++)try{await r[s]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:P})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(t),e.mount("#q-app"))}g(o.ri,w).then((e=>{const[t,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,1569))]).then((t=>{const r=o(t).filter((e=>"function"===typeof e));j(e,r)}))}))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>u,auth:()=>f,db:()=>h,default:()=>m});var o=r(3340),n=r(9981),a=r.n(n),i=r(222),l=r(202),s=r(9017),c=r(2309);const u=a().create({baseURL:"https://api.example.com"}),d={apiKey:"AIzaSyDbjhOcP2TgjTn1Me9NxaGLJYjF8i8ktZE",authDomain:"fire-tut-981d2.firebaseapp.com",databaseURL:"https://fire-tut-981d2-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"fire-tut-981d2",storageBucket:"fire-tut-981d2.appspot.com",messagingSenderId:"935943220581",appId:"1:935943220581:web:e551613f36c35b1c41058c",measurementId:"G-TH1TFB65DG"},p=(0,i.ZF)(d),f=(0,l.v0)(p),h=(0,s.LV)(p,{experimentalForceLongPolling:!0}),m=(0,o.xr)((({app:e,router:t})=>{const r=()=>new Promise(((e,t)=>{const r=(0,l.Aj)((0,l.v0)(),(t=>{r(),e(t)}),t)}));t.beforeEach((async(e,t,o)=>{e.matched.some((e=>e.meta.requiresAuth))?await r()?o():(o("/"),console.log("not authenticated")):o()})),e.config.globalProperties.$axios=a(),e.config.globalProperties.$firebaseConfig=d,e.config.globalProperties.$getStorage=c.cF,e.config.globalProperties.$ref1=c.iH,e.config.globalProperties.$uploadBytes=c.KV,e.config.globalProperties.$getMetadata=c.sd,e.config.globalProperties.$listAll1=c.aF,e.config.globalProperties.$api=u}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{252:"4f4307c2",328:"20f2a719",332:"9f60a648",417:"6d57c666",788:"c62d6034",862:"786a6c61",902:"9b60f5b4",944:"6ad4ec1c",978:"d2e300de"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"31d6cfe0",328:"31d6cfe0",332:"1067b018",736:"974311ab",788:"a3b20cdb",902:"671c512f"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="firebaseaut:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[n];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,n.parentNode.removeChild(n),o(s)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),l=r.p+i;if(t(i,l))return n();e(o,l,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={328:1,332:1,788:1,902:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),l=new Error,s=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,s]=o,c=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var u=s(r)}for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=globalThis["webpackChunkfirebaseaut"]=globalThis["webpackChunkfirebaseaut"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(4647)));o=r.O(o)})();