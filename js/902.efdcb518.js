(globalThis["webpackChunkfirebaseaut"]=globalThis["webpackChunkfirebaseaut"]||[]).push([[902],{1902:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>ne});a(9665);var t=a(9835),o=a(1957),u=a(6970),n=a(499),i=a(8586),d=a.n(i),s=a(2275),r=a(8339),c=a(9302),m=a(9120),v=a(222),p=a(9017),g=a(2079),f=a(202);const w={align:"right",class:"q-ma-lg"},_=(0,t._)("br",null,null,-1),h=(0,t._)("br",null,null,-1),b={class:"row"},y={class:"col-9 row",style:{"align-items":"flex-start"}},W=(0,t._)("span",{class:"text-weight-regular text-h5 text-black"},"ADD",-1),k={align:"center",class:"text-h6 text-uppercase",style:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis","max-width":"250px"}},q=(0,t._)("span",{class:"text-h6 text-uppercase"},"₱",-1),x=(0,t._)("span",{class:"text-uppercase"},"Category:",-1),U={class:"col row"},V={class:"text-h6"},C={key:0,style:{"text-align":"center"},class:"text-subtitle2 q-ma-sm"},H={key:0,class:"",align:"center",alt:"Quasar logo",width:"150",height:"150",src:d()},D={key:1},I=["src"],Z=(0,t._)("div",{class:"text-h6"},"Edit Product",-1),S={class:"text-subtitle2"},Q={key:0},P=["src"],T={class:"text-subtitle2"},M={__name:"FeedPage",setup(e){console.log("NANOID",(0,s.x0)());const l=(0,t.FN)().appContext.config.globalProperties,a=(0,n.iH)([]),i=(0,n.iH)(""),d=(0,n.iH)(""),M=(0,n.iH)(""),z=(0,n.iH)(0),A=(0,n.iH)(0),E=(0,n.iH)(2.3),O=(0,n.iH)(""),j=(0,n.iH)("all"),R=(0,n.iH)(null),F=(0,n.iH)(null),N=(0,n.iH)(["starter","drinks","promos"]),J=(0,n.iH)(!1),Y=(0,n.iH)(""),B=(0,n.iH)(""),L=((0,n.iH)(""),(0,n.iH)([])),G=(0,n.iH)(""),K=(0,n.iH)(!1),$=(0,n.iH)(!1),X=(0,n.iH)(""),ee=(X.value.slice(0,5),(0,n.iH)([])),le=(0,n.iH)(0),ae=(new Date).getFullYear(),te={apiKey:"AIzaSyDbjhOcP2TgjTn1Me9NxaGLJYjF8i8ktZE",authDomain:"fire-tut-981d2.firebaseapp.com",databaseURL:"https://fire-tut-981d2-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"fire-tut-981d2",storageBucket:"fire-tut-981d2.appspot.com",messagingSenderId:"935943220581",appId:"1:935943220581:web:e551613f36c35b1c41058c",measurementId:"G-TH1TFB65DG"},oe=(0,v.ZF)(te),ue=(0,p.ad)(oe),ne=l.$getStorage(),ie=((0,n.iH)(null),(0,n.iH)(!1));async function de(){$.value=!0}(0,r.tv)();const se=(0,n.iH)(!0),re=(0,c.Z)();let ce;async function me(){const e=(0,n.iH)(ne,L.value.name.toString());console.log("forestRef",e);const a=(0,g.iH)(ne,L.value.name.toString());await l.$uploadBytes(a,L.value).then((e=>{console.log("storage",e)}));try{await(0,g.Jt)((0,g.iH)(ne,L.value.name.toString())).then((e=>{console.log(e),G.value=e}));const e=await(0,p.ET)((0,p.hJ)(ue,"iam"),{name:d.value,description:i.value,specifications:M.value,price:z.value,pricebefore:A.value,ratings:E.value,category:O.value,image:G.value,ratings:E.value,percent:z.value/A.value*100,userid:X.value});$.value=!1,d.value="",i.value="",console.log("Document written with ID: ",e.id)}catch(t){console.error("Error adding document: ",t)}}async function ve(e){Y.value=e.id,B.value=e.name,J.value=!0}async function pe(e){d.value=e.name,M.value=e.specifications,z.value=e.price,L.value.push(e.image),K.value=!0}const ge=(e,l=1)=>{const a=X.value.slice(0,5),t=(new Date).getFullYear(),o=new Date,u={month:"short",day:"numeric",year:"numeric"},n=o.toLocaleDateString("en-US",u),i=ee.value.find((l=>l.itemId===e.id));if(i)return void(i.order_quantity+=l);const d={itemId:e.id,userid:e.userid,orderId:"ORDER#"+t+a,name:e.name,price:e.price,desc:e.description,category:e.category,image:e.image,orderDate:n,order_quantity:l,payment_status:"unpaid"};ee.value=[...ee.value,{...d,grand_total:le}],console.log("ORDERS",ee.value)};async function fe(){try{const e=await(0,p.ET)((0,p.hJ)(ue,"orders"),{orders:ee.value}),l=re.dialog({title:"Uploading...",dark:!0,message:"0%",progress:{spinner:m.Z,color:"amber"},persistent:!0,ok:!1});let a=0;const t=setInterval((()=>{a=Math.min(100,a+Math.floor(22*Math.random())),l.update({message:`${a}%`}),100===a&&(clearInterval(t),l.update({title:"Done!",message:"Upload completed successfully",progress:!1,ok:!0}))}),300);ee.value=[],console.log("Document written with ID: ",e.id)}catch(e){console.error("Error adding document: ",e)}}const we=(0,t.Fl)((()=>{le.value=0;for(const e of ee.value)le.value+=e.price*e.order_quantity;return le.value})),_e=e=>{e.order_quantity++},he=e=>{e.order_quantity>1&&e.order_quantity--},be=()=>{ee.value=[]};async function ye(){J.value=!1,await(0,p.oe)((0,p.JU)(ue,"iam",Y.value))}(0,t.vl)((async()=>{ce=(0,f.v0)(),(0,f.Aj)(ce,(e=>{e?(se.value=!0,console.log(se.value)):(se.value=!1,console.log(se.value))}))}));var We=(0,f.v0)().currentUser;X.value=We.uid,null!=We&&(We.displayName,We.uid),(0,t.YP)(j,((e,l)=>{console.log("tab",j),console.log("tab",e),F.value&&F.value();const t=e;R.value="all"===t?(0,p.IO)((0,p.hJ)(ue,"iam"),(0,p.ar)("userid","==",X.value)):(0,p.IO)((0,p.hJ)(ue,"iam"),(0,p.ar)("userid","==",X.value),(0,p.ar)("category","==",t)),F.value=(0,p.cf)(R.value,(e=>{a.value=[],e.docChanges().forEach((e=>{var l={...e.doc.data(),id:e.doc.id};if("added"===e.type&&a.value.push(l),"modified"===e.type&&console.log("Modified city: ",l),"removed"===e.type){const l=a.value.findIndex((l=>l.name===e.doc.data().name));console.log("Removed city: ",e.doc.data(),e.doc.id),a.value.splice(l,1)}}))}))}));function ke(){K.value=!1}return(0,t.bv)((async()=>{j.value="all",R.value=(0,p.IO)((0,p.hJ)(ue,"iam"),(0,p.ar)("userid","==",X.value)),F.value=(0,p.cf)(R.value,(e=>{a.value=[],e.docChanges().forEach((e=>{var l={...e.doc.data(),id:e.doc.id};if("added"===e.type&&a.value.push(l),"modified"===e.type&&console.log("Modified city: ",l),"removed"===e.type){const l=a.value.findIndex((l=>l.name===e.doc.data().name));console.log("Removed city: ",e.doc.data(),e.doc.id),a.value.splice(l,1)}}))}))})),(e,l)=>{const i=(0,t.up)("q-btn"),s=(0,t.up)("q-input"),r=(0,t.up)("q-select"),c=(0,t.up)("q-separator"),m=(0,t.up)("q-icon"),v=(0,t.up)("q-file"),p=(0,t.up)("q-card-section"),g=(0,t.up)("q-card-actions"),f=(0,t.up)("q-card"),A=(0,t.up)("q-dialog"),E=(0,t.up)("q-tab"),R=(0,t.up)("q-tabs"),F=(0,t.up)("q-tooltip"),Y=(0,t.up)("q-img"),G=(0,t.up)("q-badge"),le=(0,t.up)("q-item-section"),te=(0,t.up)("q-item-label"),oe=(0,t.up)("q-label"),ue=(0,t.up)("q-item"),ne=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",w,[(0,t.Wm)(i,{align:"right",style:{"background-color":"#d8e6e9 !important"},icon:"add",label:"Add Product",onClick:l[0]||(l[0]=e=>de()),flat:"",dense:""})]),(0,t._)("div",null,[(0,t.Wm)(A,{modelValue:$.value,"onUpdate:modelValue":l[9]||(l[9]=e=>$.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{class:"q-ma-md",width:"500px"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{label:"Name","lazy-rules":"",rules:[e=>!!e||"Please enter  Name"],modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=e=>d.value=e)},null,8,["rules","modelValue"]),(0,t.Wm)(s,{modelValue:M.value,"onUpdate:modelValue":l[2]||(l[2]=e=>M.value=e),label:"Specifications"},null,8,["modelValue"]),(0,t.Wm)(s,{modelValue:z.value,"onUpdate:modelValue":l[3]||(l[3]=e=>z.value=e),modelModifiers:{number:!0},label:"Price"},null,8,["modelValue"]),(0,t.Wm)(r,{modelValue:O.value,"onUpdate:modelValue":l[4]||(l[4]=e=>O.value=e),options:N.value,label:"Category"},null,8,["modelValue","options"]),(0,t.Wm)(c),_,(0,t.Wm)(v,{filled:"","bottom-slots":"",modelValue:L.value,"onUpdate:modelValue":l[7]||(l[7]=e=>L.value=e),label:"Product Image",counter:""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(m,{name:"cloud_upload",onClick:l[5]||(l[5]=(0,o.iM)((()=>{}),["stop","prevent"]))})])),append:(0,t.w5)((()=>[(0,t.Wm)(m,{name:"close",onClick:l[6]||(l[6]=(0,o.iM)((e=>L.value=null),["stop","prevent"])),class:"cursor-pointer"})])),hint:(0,t.w5)((()=>[(0,t.Uk)(" Product Pic ")])),_:1},8,["modelValue"]),h])),_:1}),(0,t.Wm)(g,{align:"right"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{color:"accent",label:"ADD Product",class:"q-pa-lg",onClick:l[8]||(l[8]=e=>me()),flat:"",dense:""})])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,t._)("div",b,[(0,t._)("div",y,[(0,t.Wm)(R,{class:"q-ma-sm col-11 row",align:"justify",breakpoint:0,modelValue:j.value,"onUpdate:modelValue":l[10]||(l[10]=e=>j.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(E,{value:"all",name:"all",icon:"list",label:"all",class:"hover-tab"}),(0,t.Wm)(E,{value:"starter",name:"starter",icon:"lunch_dining",label:"Starter",class:"hover-tab"}),(0,t.Wm)(E,{value:"drinks",name:"drinks",icon:"sports_bar",label:"Drinks",class:"hover-tab"}),(0,t.Wm)(E,{value:"promos",name:"promos",icon:"fastfood",label:"Promos",class:"hover-tab"})])),_:1},8,["modelValue"]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.value,(e=>((0,t.wg)(),(0,t.j4)(f,{style:{"background-color":"#d8e6e9 !important"},onMouseover:l[11]||(l[11]=e=>ie.value=!0),key:e.id,class:"q-ma-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{width:"300px",onClick:l=>ge(e),height:"250px",src:e.image},{default:(0,t.w5)((()=>[ie.value?((0,t.wg)(),(0,t.j4)(F,{key:0,class:"q-pl-lg q-pr-lg",target:ie.value,anchor:"center middle",self:"center middle",style:{"background-color":"#d89f65"}},{default:(0,t.w5)((()=>[W])),_:1},8,["target"])):(0,t.kq)("",!0)])),_:2},1032,["onClick","src"]),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("div",k,[(0,t.Uk)((0,u.zw)(e.name)+" ",1),q,(0,t.Uk)(" "+(0,u.zw)(e.price),1)]),(0,t._)("div",null,[x,(0,t.Wm)(G,{rounded:"",color:"amber-10",class:"q-ml-lg"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.category),1)])),_:2},1024)])])),_:2},1024),(0,t.Wm)(p,{align:"right"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{color:"secondary",class:"q-mr-md",icon:"edit",onClick:l=>pe(e)},null,8,["onClick"]),(0,t.Wm)(i,{color:"negative",icon:"close",hidden:"",onClick:l=>ve(e)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)))),128))]),(0,t._)("div",U,[(0,t._)("div",null,[(0,t.Wm)(f,{flat:"",bordered:"",class:(0,u.C_)(["my-card",(0,n.SU)(re).dark.isActive?"bg-grey-9":"bg-grey-2"])},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t._)("div",null,[(0,t._)("div",V,[(0,t.Uk)(" ORDER# "),0!==ee.value.length?((0,t.wg)(),(0,t.j4)(G,{key:0,color:"blue",align:"right"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)((0,n.SU)(ae))+(0,u.zw)(X.value.slice(0,5)),1)])),_:1})):(0,t.kq)("",!0)]),(0,t.Wm)(c,{inset:""}),0===ee.value.length?((0,t.wg)(),(0,t.iD)("div",C,[(0,n.SU)(re).platform.is.desktop?((0,t.wg)(),(0,t.iD)("img",H)):(0,t.kq)("",!0)])):((0,t.wg)(),(0,t.iD)("div",D,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(ee.value,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e.id,class:"text-subtitle2 q-ma-md q-pa-sm"},[(0,t.Wm)(f,{bordered:"",class:"my-card",style:{"background-color":"#eaf0f0 !important"}},{default:(0,t.w5)((()=>[(0,t.Wm)(ue,null,{default:(0,t.w5)((()=>[(0,t.Wm)(le,{avatar:""},{default:(0,t.w5)((()=>[(0,t._)("img",{class:"border-radius-inherit",src:e.image,alt:"order iamge",width:"70",height:"70"},null,8,I)])),_:2},1024),(0,t.Wm)(le,null,{default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.name),1)])),_:2},1024),(0,t.Wm)(te,{class:"text-h5"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.price),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(le,null,{default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" QUANTITY ")])),_:1}),(0,t.Wm)(oe,{class:"text-h5",align:"center"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.order_quantity),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(le,null,{default:(0,t.w5)((()=>[(0,t.Wm)(oe,{class:"text-h5"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{flat:"",dense:"",icon:"add",onClick:l=>_e(e)},null,8,["onClick"]),(0,t.Wm)(i,{flat:"",dense:"",icon:"remove",onClick:l=>he(e)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])))),128))]))])])])),_:1}),(0,t.Wm)(c,{inset:""}),(0,t.Wm)(f,{class:"my-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(ue,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(le,null,{default:(0,t.w5)((()=>[(0,t.Wm)(te,{class:"text-h5"},{default:(0,t.w5)((()=>[(0,t.Uk)(" TOTAL AMOUNT: ")])),_:1})])),_:1})])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(le,null,{default:(0,t.w5)((()=>[(0,t.Wm)(te,{class:"text-h5"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)((0,n.SU)(we)),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(c),(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,{onClick:be,color:"deep-orange",glossy:"",label:"Cancel Order"}),(0,t.Wm)(i,{onClick:fe,color:"brown-5",label:"Send Order"})])),_:1})])),_:1})])),_:1},8,["class"])])]),(0,t.Wm)(A,{persistent:"",modelValue:K.value,"onUpdate:modelValue":l[18]||(l[18]=e=>K.value=e),width:"700px"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{style:{width:"100%","max-width":"800px",padding:"20px"}},{default:(0,t.w5)((()=>[Z,(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("div",S,[(0,t.Wm)(s,{modelValue:d.value,"onUpdate:modelValue":l[12]||(l[12]=e=>d.value=e),label:"Item name"},null,8,["modelValue"]),(0,t.Wm)(s,{modelValue:M.value,"onUpdate:modelValue":l[13]||(l[13]=e=>M.value=e),label:"Specifications"},null,8,["modelValue"]),(0,t.Wm)(s,{modelValue:z.value,"onUpdate:modelValue":l[14]||(l[14]=e=>z.value=e),label:"Price"},null,8,["modelValue"]),(0,t.Wm)(v,{filled:"","bottom-slots":"",modelValue:L.value,"onUpdate:modelValue":l[17]||(l[17]=e=>L.value=e),label:"Product Image",counter:""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(m,{name:"cloud_upload",onClick:l[15]||(l[15]=(0,o.iM)((()=>{}),["stop","prevent"]))})])),append:(0,t.w5)((()=>[(0,t.Wm)(m,{name:"close",onClick:l[16]||(l[16]=(0,o.iM)((e=>L.value=null),["stop","prevent"])),class:"cursor-pointer"})])),_:1},8,["modelValue"]),L.value?((0,t.wg)(),(0,t.iD)("div",Q,[(0,t._)("img",{style:{"max-width":"200px","max-height":"200px"},src:L.value,alt:"productImage"},null,8,P)])):(0,t.kq)("",!0)])])),_:1}),(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(i,{label:"Cancel",type:"reset",class:"col",unelevated:"",onClick:ke},null,512),[[ne]]),(0,t.Wm)(i,{unelevated:"",onClick:e.saveEdit,type:"submit",label:"Save",class:"col",color:"primary"},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(A,{modelValue:J.value,"onUpdate:modelValue":l[19]||(l[19]=e=>J.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{class:"my-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("div",T," Are your sure you want do delete this item "+(0,u.zw)(B.value)+"? ",1)])),_:1}),(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(i,{flat:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Cancel")])),_:1})),[[ne,J.value]]),(0,t.Wm)(i,{flat:"",onClick:ye},{default:(0,t.w5)((()=>[(0,t.Uk)("Confirm")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])])}}};var z=a(4455),A=a(9420),E=a(2074),O=a(4458),j=a(3190),R=a(3119),F=a(8401),N=a(926),J=a(2857),Y=a(1821),B=a(7817),L=a(900),G=a(335),K=a(6858),$=a(990),X=a(490),ee=a(1233),le=a(3115),ae=a(2146),te=a(9984),oe=a.n(te);const ue=M,ne=ue;oe()(M,"components",{QBtn:z.Z,QFile:A.Z,QDialog:E.Z,QCard:O.Z,QCardSection:j.Z,QInput:R.Z,QSelect:F.Z,QSeparator:N.Z,QIcon:J.Z,QCardActions:Y.Z,QTabs:B.Z,QTab:L.Z,QImg:G.Z,QTooltip:K.Z,QBadge:$.Z,QItem:X.Z,QItemSection:ee.Z,QItemLabel:le.Z}),oe()(M,"directives",{ClosePopup:ae.Z})},8586:(e,l,a)=>{e.exports=a.p+"img/noitem.6a5a83b2.png"}}]);