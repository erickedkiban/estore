(globalThis["webpackChunkfirebaseaut"]=globalThis["webpackChunkfirebaseaut"]||[]).push([[902],{1902:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>ae});a(9665);var t=a(9835),o=a(1957),u=a(6970),n=a(499),i=a(8586),d=a.n(i),c=a(2275),s=a(8339),r=a(222),m=a(9017),p=a(2079),v=a(202);const g={align:"right"},w={hidden:"",align:"right"},f=(0,t._)("br",null,null,-1),_=(0,t._)("br",null,null,-1),h={class:"row"},y={class:"col-9 row",style:{"align-items":"flex-start"}},W=(0,t._)("span",{class:"text-weight-regular text-h5 text-black"},"ADD",-1),k={align:"center",class:"text-h6 text-uppercase",style:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis","max-width":"250px"}},b=(0,t._)("span",{class:"text-h6 text-uppercase"},"₱",-1),q=(0,t._)("span",{class:"text-uppercase"},"Category:",-1),x={class:"col row"},C={class:"text-h6"},V={key:0,style:{"text-align":"center"},class:"text-subtitle2 q-ma-sm"},U={key:0,class:"",align:"center",alt:"Quasar logo",width:"150",height:"150",src:d()},D={key:1},H=["src"],I=(0,t._)("div",{class:"text-h6"},"Edit Product",-1),S={class:"text-subtitle2"},Q={key:0},Z=["src"],T={class:"text-subtitle2"},P={__name:"FeedPage",setup(e){console.log("NANOID",(0,c.x0)());const l=(0,t.FN)().appContext.config.globalProperties,a=(0,n.iH)([]),i=(0,n.iH)(""),d=(0,n.iH)(""),P=(0,n.iH)(""),z=(0,n.iH)(0),A=(0,n.iH)(0),E=(0,n.iH)(2.3),j=(0,n.iH)(""),M=(0,n.iH)(!1),O=(0,n.iH)(""),F=(0,n.iH)(""),N=((0,n.iH)(""),(0,n.iH)([])),R=(0,n.iH)(""),J=(0,n.iH)(!1),Y=(0,n.iH)(!1),B=(0,n.iH)(""),L=(B.value.slice(0,5),(0,n.iH)([])),$=(0,n.iH)(0),G=(new Date).getFullYear(),K={apiKey:"AIzaSyDbjhOcP2TgjTn1Me9NxaGLJYjF8i8ktZE",authDomain:"fire-tut-981d2.firebaseapp.com",databaseURL:"https://fire-tut-981d2-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"fire-tut-981d2",storageBucket:"fire-tut-981d2.appspot.com",messagingSenderId:"935943220581",appId:"1:935943220581:web:e551613f36c35b1c41058c",measurementId:"G-TH1TFB65DG"},X=(0,r.ZF)(K),ee=(0,m.ad)(X),le=l.$getStorage(),ae=((0,n.iH)(null),(0,n.iH)(!1));async function te(){Y.value=!0}const oe=(0,s.tv)(),ue=(0,n.iH)(!0);let ne;async function ie(){const e=(0,n.iH)(le,N.value.name.toString());console.log("forestRef",e);const a=(0,p.iH)(le,N.value.name.toString());await l.$uploadBytes(a,N.value).then((e=>{console.log("storage",e)}));try{await(0,p.Jt)((0,p.iH)(le,N.value.name.toString())).then((e=>{console.log(e),R.value=e}));const e=await(0,m.ET)((0,m.hJ)(ee,"iam"),{name:d.value,description:i.value,specifications:P.value,price:z.value,pricebefore:A.value,ratings:E.value,category:j.value,image:R.value,ratings:E.value,percent:z.value/A.value*100,userid:B.value});Y.value=!1,d.value="",i.value="",console.log("Document written with ID: ",e.id)}catch(t){console.error("Error adding document: ",t)}}async function de(e){O.value=e.id,F.value=e.name,M.value=!0}async function ce(e){d.value=e.name,P.value=e.specifications,z.value=e.price,N.value.push(e.image),J.value=!0}const se=(e,l=1)=>{const a=B.value.slice(0,5),t=(new Date).getFullYear(),o=new Date,u={month:"short",day:"numeric",year:"numeric"},n=o.toLocaleDateString("en-US",u),i=L.value.find((l=>l.itemId===e.id));if(i)return void(i.order_quantity+=l);const d={itemId:e.id,userid:e.userid,orderId:"ORDER#"+t+a,name:e.name,price:e.price,desc:e.description,category:e.category,image:e.image,orderDate:n,order_quantity:l,payment_status:"unpaid"};L.value=[...L.value,{...d,grand_total:$}],console.log("ORDERS",L.value)};async function re(){try{const e=await(0,m.ET)((0,m.hJ)(ee,"orders"),{orders:L.value});L.value=[],console.log("Document written with ID: ",e.id)}catch(e){console.error("Error adding document: ",e)}}const me=(0,t.Fl)((()=>{$.value=0;for(const e of L.value)$.value+=e.price*e.order_quantity;return $.value})),pe=e=>{e.order_quantity++},ve=e=>{e.order_quantity>1&&e.order_quantity--},ge=()=>{L.value=[]};async function we(){M.value=!1,await(0,m.oe)((0,m.JU)(ee,"iam",O.value))}(0,t.vl)((async()=>{ne=(0,v.v0)(),(0,v.Aj)(ne,(e=>{e?(ue.value=!0,console.log(ue.value)):(ue.value=!1,console.log(ue.value))}))}));var fe=(0,v.v0)().currentUser;console.log(fe.uid),B.value=fe.uid,null!=fe&&(fe.displayName,fe.uid),console.log("yow",B.value);const _e=(0,m.IO)((0,m.hJ)(ee,"iam"),(0,m.ar)("userid","==",B.value)),he=((0,m.cf)(_e,(e=>{e.docChanges().forEach((e=>{console.log("doc.data()",e.doc.data());var l={...e.doc.data(),id:e.doc.id};if("added"===e.type&&a.value.push(l),"modified"===e.type&&console.log("Modified city: ",l),"removed"===e.type){const l=a.value.findIndex((l=>l.name===e.doc.data().name));console.log("Removed city: ",e.doc.data(),e.doc.id),a.value.splice(l,1)}}))})),()=>{const e=(0,v.v0)();(0,v.w7)(e).then((()=>{oe.push("/sign-in"),console.log("Sign-out successful.")})).catch((e=>{oe.push("/"),console.log(e)}))});function ye(){J.value=!1}return(0,t.bv)((()=>{})),(e,l)=>{const i=(0,t.up)("q-btn"),c=(0,t.up)("q-input"),s=(0,t.up)("q-separator"),r=(0,t.up)("q-icon"),m=(0,t.up)("q-file"),p=(0,t.up)("q-card-section"),v=(0,t.up)("q-card-actions"),A=(0,t.up)("q-card"),E=(0,t.up)("q-dialog"),O=(0,t.up)("q-tooltip"),R=(0,t.up)("q-img"),$=(0,t.up)("q-badge"),K=(0,t.up)("q-item-section"),X=(0,t.up)("q-item-label"),ee=(0,t.up)("q-label"),le=(0,t.up)("q-item"),oe=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",g,[(0,t.Wm)(i,{icon:"add",label:"Add Product",onClick:l[0]||(l[0]=e=>te()),flat:"",dense:""})]),(0,t._)("div",w,[ue.value?((0,t.wg)(),(0,t.j4)(i,{key:0,hidden:"",onClick:he},{default:(0,t.w5)((()=>[(0,t.Uk)("log out")])),_:1})):(0,t.kq)("",!0)]),(0,t._)("div",null,[(0,t.Wm)(E,{modelValue:Y.value,"onUpdate:modelValue":l[9]||(l[9]=e=>Y.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{class:"q-ma-md",width:"500px"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{label:"Name","lazy-rules":"",rules:[e=>!!e||"Please enter account  Name"],modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=e=>d.value=e)},null,8,["rules","modelValue"]),(0,t.Wm)(c,{modelValue:P.value,"onUpdate:modelValue":l[2]||(l[2]=e=>P.value=e),label:"Specifications"},null,8,["modelValue"]),(0,t.Wm)(c,{modelValue:z.value,"onUpdate:modelValue":l[3]||(l[3]=e=>z.value=e),modelModifiers:{number:!0},label:"Price"},null,8,["modelValue"]),(0,t.Wm)(c,{modelValue:j.value,"onUpdate:modelValue":l[4]||(l[4]=e=>j.value=e),label:"Category"},null,8,["modelValue"]),(0,t.Wm)(s),f,(0,t.Wm)(m,{filled:"","bottom-slots":"",modelValue:N.value,"onUpdate:modelValue":l[7]||(l[7]=e=>N.value=e),label:"Product Image",counter:""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(r,{name:"cloud_upload",onClick:l[5]||(l[5]=(0,o.iM)((()=>{}),["stop","prevent"]))})])),append:(0,t.w5)((()=>[(0,t.Wm)(r,{name:"close",onClick:l[6]||(l[6]=(0,o.iM)((e=>N.value=null),["stop","prevent"])),class:"cursor-pointer"})])),hint:(0,t.w5)((()=>[(0,t.Uk)(" Product Pic ")])),_:1},8,["modelValue"]),_])),_:1}),(0,t.Wm)(v,{align:"right"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{color:"accent",label:"ADD Product",class:"q-pa-lg",onClick:l[8]||(l[8]=e=>ie()),flat:"",dense:""})])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,t._)("div",h,[(0,t._)("div",y,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.value,(e=>((0,t.wg)(),(0,t.j4)(A,{style:{"background-color":"#d8e6e9 !important"},onMouseover:l[10]||(l[10]=e=>ae.value=!0),key:e.id,class:"q-ma-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{width:"300px",onClick:l=>se(e),height:"250px",src:e.image},{default:(0,t.w5)((()=>[ae.value?((0,t.wg)(),(0,t.j4)(O,{key:0,class:"q-pl-lg q-pr-lg",target:ae.value,anchor:"center middle",self:"center middle",style:{"background-color":"#d89f65"}},{default:(0,t.w5)((()=>[W])),_:1},8,["target"])):(0,t.kq)("",!0)])),_:2},1032,["onClick","src"]),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("div",k,[(0,t.Uk)((0,u.zw)(e.name)+" ",1),b,(0,t.Uk)(" "+(0,u.zw)(e.price),1)]),(0,t._)("div",null,[q,(0,t.Wm)($,{rounded:"",color:"amber-10",class:"q-ml-lg"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.category),1)])),_:2},1024)])])),_:2},1024),(0,t.Wm)(p,{align:"right"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{color:"secondary",class:"q-mr-md",icon:"edit",onClick:l=>ce(e)},null,8,["onClick"]),(0,t.Wm)(i,{color:"negative",icon:"close",hidden:"",onClick:l=>de(e)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)))),128))]),(0,t._)("div",x,[(0,t._)("div",null,[(0,t.Wm)(A,{flat:"",bordered:"",class:(0,u.C_)(["my-card",e.$q.dark.isActive?"bg-grey-9":"bg-grey-2"])},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t._)("div",null,[(0,t._)("div",C,[(0,t.Uk)(" ORDER# "),0!==L.value.length?((0,t.wg)(),(0,t.j4)($,{key:0,color:"blue",align:"right"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)((0,n.SU)(G))+(0,u.zw)(B.value.slice(0,5)),1)])),_:1})):(0,t.kq)("",!0)]),(0,t.Wm)(s,{inset:""}),0===L.value.length?((0,t.wg)(),(0,t.iD)("div",V,[e.$q.platform.is.desktop?((0,t.wg)(),(0,t.iD)("img",U)):(0,t.kq)("",!0)])):((0,t.wg)(),(0,t.iD)("div",D,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(L.value,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e.id,class:"text-subtitle2 q-ma-md q-pa-sm"},[(0,t.Wm)(A,{bordered:"",class:"my-card",style:{"background-color":"#eaf0f0 !important"}},{default:(0,t.w5)((()=>[(0,t.Wm)(le,null,{default:(0,t.w5)((()=>[(0,t.Wm)(K,{avatar:""},{default:(0,t.w5)((()=>[(0,t._)("img",{class:"border-radius-inherit",src:e.image,alt:"order iamge",width:"70",height:"70"},null,8,H)])),_:2},1024),(0,t.Wm)(K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(X,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.name),1)])),_:2},1024),(0,t.Wm)(X,{class:"text-h5"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.price),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(X,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" QUANTITY ")])),_:1}),(0,t.Wm)(ee,{class:"text-h5",align:"center"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.order_quantity),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ee,{class:"text-h5"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{flat:"",dense:"",icon:"add",onClick:l=>pe(e)},null,8,["onClick"]),(0,t.Wm)(i,{flat:"",dense:"",icon:"remove",onClick:l=>ve(e)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])))),128))]))])])])),_:1}),(0,t.Wm)(s,{inset:""}),(0,t.Wm)(A,{class:"my-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(le,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(X,{class:"text-h5"},{default:(0,t.w5)((()=>[(0,t.Uk)(" TOTATL AMMOUNT: ")])),_:1})])),_:1})])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(X,{class:"text-h5"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)((0,n.SU)(me)),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(s),(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,{onClick:ge,color:"deep-orange",glossy:"",label:"Cancel Order"}),(0,t.Wm)(i,{onClick:re,color:"brown-5",label:"Send Order"})])),_:1})])),_:1})])),_:1},8,["class"])])]),(0,t.Wm)(E,{persistent:"",modelValue:J.value,"onUpdate:modelValue":l[17]||(l[17]=e=>J.value=e),width:"700px"},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{style:{width:"100%","max-width":"800px",padding:"20px"}},{default:(0,t.w5)((()=>[I,(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("div",S,[(0,t.Wm)(c,{modelValue:d.value,"onUpdate:modelValue":l[11]||(l[11]=e=>d.value=e),label:"Item name"},null,8,["modelValue"]),(0,t.Wm)(c,{modelValue:P.value,"onUpdate:modelValue":l[12]||(l[12]=e=>P.value=e),label:"Specifications"},null,8,["modelValue"]),(0,t.Wm)(c,{modelValue:z.value,"onUpdate:modelValue":l[13]||(l[13]=e=>z.value=e),label:"Price"},null,8,["modelValue"]),(0,t.Wm)(m,{filled:"","bottom-slots":"",modelValue:N.value,"onUpdate:modelValue":l[16]||(l[16]=e=>N.value=e),label:"Product Image",counter:""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(r,{name:"cloud_upload",onClick:l[14]||(l[14]=(0,o.iM)((()=>{}),["stop","prevent"]))})])),append:(0,t.w5)((()=>[(0,t.Wm)(r,{name:"close",onClick:l[15]||(l[15]=(0,o.iM)((e=>N.value=null),["stop","prevent"])),class:"cursor-pointer"})])),_:1},8,["modelValue"]),N.value?((0,t.wg)(),(0,t.iD)("div",Q,[(0,t._)("img",{style:{"max-width":"200px","max-height":"200px"},src:N.value,alt:"productImage"},null,8,Z)])):(0,t.kq)("",!0)])])),_:1}),(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(i,{label:"Cancel",type:"reset",class:"col",unelevated:"",onClick:ye},null,512),[[oe]]),(0,t.Wm)(i,{unelevated:"",onClick:e.saveEdit,type:"submit",label:"Save",class:"col",color:"primary"},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(E,{modelValue:M.value,"onUpdate:modelValue":l[18]||(l[18]=e=>M.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{class:"my-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("div",T," Are your sure you want do delete this item "+(0,u.zw)(F.value)+"? ",1)])),_:1}),(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(i,{flat:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Cancel")])),_:1})),[[oe,M.value]]),(0,t.Wm)(i,{flat:"",onClick:we},{default:(0,t.w5)((()=>[(0,t.Uk)("Confirm")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])])}}};var z=a(4455),A=a(9420),E=a(2074),j=a(4458),M=a(3190),O=a(4152),F=a(926),N=a(2857),R=a(1821),J=a(335),Y=a(6858),B=a(990),L=a(490),$=a(1233),G=a(3115),K=a(2146),X=a(9984),ee=a.n(X);const le=P,ae=le;ee()(P,"components",{QBtn:z.Z,QFile:A.Z,QDialog:E.Z,QCard:j.Z,QCardSection:M.Z,QInput:O.Z,QSeparator:F.Z,QIcon:N.Z,QCardActions:R.Z,QImg:J.Z,QTooltip:Y.Z,QBadge:B.Z,QItem:L.Z,QItemSection:$.Z,QItemLabel:G.Z}),ee()(P,"directives",{ClosePopup:K.Z})},8586:(e,l,a)=>{e.exports=a.p+"img/noitem.6a5a83b2.png"}}]);