"use strict";(globalThis["webpackChunkfirebaseaut"]=globalThis["webpackChunkfirebaseaut"]||[]).push([[252],{1252:(e,a,r)=>{r.r(a),r.d(a,{default:()=>h});var t=r(9835);const n={class:"q-pa-md"};function o(e,a,r,o,i,s){const l=(0,t.up)("q-btn"),d=(0,t.up)("q-table");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t.Wm)(d,{flat:"",bordered:"",title:"YOR POS Report",rows:o.orders,columns:o.columns,"row-key":"orderId",pagination:o.pagination,"onUpdate:pagination":a[0]||(a[0]=e=>o.pagination=e)},{"top-right":(0,t.w5)((()=>[(0,t.Wm)(l,{label:"Print Report",icon:"print",color:"primary"})])),pagination:(0,t.w5)((e=>[e.pagesNumber>2?((0,t.wg)(),(0,t.j4)(l,{key:0,icon:"first_page",color:"grey-8",round:"",dense:"",flat:"",disable:e.isFirstPage,onClick:e.firstPage},null,8,["disable","onClick"])):(0,t.kq)("",!0),(0,t.Wm)(l,{icon:"chevron_left",color:"grey-8",round:"",dense:"",flat:"",disable:e.isFirstPage,onClick:e.prevPage},null,8,["disable","onClick"]),(0,t.Wm)(l,{icon:"chevron_right",color:"grey-8",round:"",dense:"",flat:"",disable:e.isLastPage,onClick:e.nextPage},null,8,["disable","onClick"]),e.pagesNumber>2?((0,t.wg)(),(0,t.j4)(l,{key:1,icon:"last_page",color:"grey-8",round:"",dense:"",flat:"",disable:e.isLastPage,onClick:e.lastPage},null,8,["disable","onClick"])):(0,t.kq)("",!0)])),_:1},8,["rows","columns","pagination"])])}r(9665);var i=r(499),s=r(6605),l=r(222),d=r(9017);const c={setup(){const e=(0,t.FN)().appContext.config.globalProperties,a=(0,i.iH)([]),r=(0,l.ZF)(e.$firebaseConfig),n=(0,d.ad)(r),o=async()=>{const e=(0,s.v0)().currentUser;if(e){const r=(0,d.IO)((0,d.hJ)(n,"report")),t=await(0,d.PL)(r),o=[];t.docs.forEach((a=>{const r=a.data();Array.isArray(r.orders)&&r.orders[0].userId===e.uid&&o.push(r)})),a.value=o}};(0,t.bv)((()=>{o()}));const c=(0,t.Fl)((()=>a.value.map((e=>({...e,orderId:e.orders[0].orderId,payment_status:e.orders[0].payment_status,timestamp:new Date(1e3*e.timestamp.seconds)}))))),u=(0,t.Fl)((()=>{let e=0;return a.value.forEach((a=>{a.orders.forEach((a=>{a.orders.forEach((a=>{e=a.order_quantity}))}))})),e})),g=[{name:"orderId",required:!0,label:"Order ID",align:"center",field:"orderId",sortable:!0},{name:"cashReceived",required:!0,label:"Cash Received",align:"center",field:"cashReceived",sortable:!0},{name:"orderDate",required:!0,label:"Payment Date",align:"center",field:"timestamp",format:e=>e.toLocaleString(),sortable:!0},{name:"price",required:!0,label:"Total Price",align:"center",field:e=>e.cashReceived-e.change,sortable:!0},{name:"payment_status",required:!0,label:"Payment Status",align:"center",field:"payment_status",sortable:!0}],p=(0,i.iH)({sortBy:"orderId",descending:!1,page:1,rowsPerPage:10});return{orders:c,columns:g,pagination:p,getData:o,computedTotalQuantity:u}}};var u=r(1639),g=r(6008),p=r(4455),b=r(9984),m=r.n(b);const f=(0,u.Z)(c,[["render",o]]),h=f;m()(c,"components",{QTable:g.Z,QBtn:p.Z})}}]);