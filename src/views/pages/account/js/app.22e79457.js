(function(){"use strict";var e={4377:function(e,t,n){var o=n(144),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("base-layout",[n("router-view")],1)],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-0 m-0 ma-0",attrs:{id:"app"}},[n("app-navigation"),n("v-main",[e._t("default")],2),n("app-aside")],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.searchFiles.apply(null,arguments)}}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[n("v-text-field",{attrs:{outlined:"",dense:"",type:"search",placeholder:"search here","append-icon":"mdi-magnify"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)],1)],1),n("v-list",{staticClass:"d-none"},e._l(e.categories,(function(t){return n("v-list-item",{key:t.title,staticClass:"text--disabled small"},[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title)+" "),n("v-chip",{attrs:{small:""}},[e._v(e._s(t.count))])],1)],1)],1)})),1)],1)},l=[],u={name:"AppAside",data:()=>({categories:[{title:"Animation",count:0},{title:"Code generator",count:0},{title:"Bookmark",count:0},{title:"Activities",count:0}],search:""}),methods:{async searchFiles(){console.log(this.search)}}},d=u,f=n(1001),p=n(3453),m=n.n(p),v=n(5424),h=n(2102),g=n(247),b=n(6232),y=n(8346),k=n(7620),_=n(1311),Z=n(2877),w=n(970),C=(0,f.Z)(d,c,l,!1,null,null,null),x=C.exports;m()(C,{VChip:v.Z,VCol:h.Z,VContainer:g.Z,VForm:b.Z,VList:y.Z,VListItem:k.Z,VListItemContent:_.km,VListItemTitle:_.V9,VRow:Z.Z,VTextField:w.Z});var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{attrs:{id:"app-navigation"}},[n("div",{staticClass:"user-image-and-name"},[n("v-avatar",{attrs:{color:"indigo"}},[n("v-icon",{attrs:{dark:""}},[e._v(" mdi-account-circle ")])],1),e._m(0)],1),n("ul",e._l(e.links,(function(e){return n("li",{key:e.title},[n("nav-item",{staticClass:"text-capitalize",attrs:{icon:e.icon,title:e.title,route:e.route}})],1)})),0),n("a",{staticClass:"logout-button",attrs:{href:"/logout"}},[n("v-icon",{attrs:{right:"",color:"#fff"}},[e._v("mdi-logout")]),e._v(" logout")],1)])},V=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"name"},[n("span",{staticClass:"user-name-surname"},[e._v("Opeoluwa")]),n("span",{staticClass:"user-email"},[e._v("Opeoluwa")])])}],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"nav-item",attrs:{to:{name:e.route}}},[n("v-icon",[e._v(e._s(e.icon))]),e._v(" "+e._s(e.title)+" ")],1)},E=[],j={name:"NavItem",props:{icon:{type:String,required:!0},title:{type:String,required:!0},route:{type:String,required:!0}}},N=j,S=n(6428),T=(0,f.Z)(N,O,E,!1,null,null,null),F=T.exports;m()(T,{VIcon:S.Z});var L=o.Z.extend({name:"AppNavigation",components:{NavItem:F},data:()=>({links:[{icon:"mdi-home-variant-outline",title:"home",route:"home"},{icon:"mdi-account-circle-outline",title:"profile",route:"profile"},{icon:"mdi-post",title:"activities",route:"activities"},{icon:"mdi-bookmark-outline",title:"bookmark",route:"bookmark"},{icon:"mdi-security",title:"security",route:"security"},{icon:"mdi-cog-outline",title:"settings",route:"settings"},{icon:"mdi-share-variant",title:"invite friend",route:""}]})}),P=L,$=n(6370),I=(0,f.Z)(P,A,V,!1,null,"32ade6a1",null),q=I.exports;m()(I,{VAvatar:$.Z,VIcon:S.Z});var B=o.Z.extend({components:{AppNavigation:q,AppAside:x},name:"BaseLayout",data:()=>({})}),M=B,z=n(1009),D=(0,f.Z)(M,a,s,!1,null,null,null),H=D.exports;m()(D,{VMain:z.Z});var R=o.Z.extend({components:{BaseLayout:H},name:"App",data:()=>({})}),G=R,J=n(7524),K=(0,f.Z)(G,r,i,!1,null,null,null),Q=K.exports;m()(K,{VApp:J.Z});var U=n(5205);(0,U.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var W=n(8345),X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container")},Y=[],ee={name:"HomeView"},te=ee,ne=(0,f.Z)(te,X,Y,!1,null,null,null),oe=ne.exports;m()(ne,{VContainer:g.Z});const re=()=>n.e(707).then(n.bind(n,707)),ie=()=>n.e(395).then(n.bind(n,6395)),ae=()=>n.e(983).then(n.bind(n,6983)),se=()=>n.e(948).then(n.bind(n,6948)),ce=()=>n.e(726).then(n.bind(n,7726));o.Z.use(W.Z);const le=[{path:"/",name:"home",component:oe},{path:"/activities",name:"activities",component:re},{path:"/bookmark",name:"bookmark",component:ie},{path:"/profile",name:"profile",component:ae},{path:"/security",name:"security",component:se},{path:"/settings",name:"settings",component:ce}],ue=new W.Z({mode:"history",base:"/",routes:le});var de=ue,fe=n(629);o.Z.use(fe.ZP);var pe=new fe.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),me=n(1910);o.Z.use(me.Z);var ve=new me.Z({});o.Z.config.productionTip=!1,new o.Z({router:de,store:pe,vuetify:ve,render:e=>e(Q)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{395:"67d6e4cc",707:"3fd9325e",726:"e0f858db",948:"9637dd59",983:"bcd76996"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="user-account:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkuser_account"]=self["webpackChunkuser_account"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4377)}));o=n.O(o)})();
//# sourceMappingURL=app.22e79457.js.map