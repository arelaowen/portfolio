(function(){"use strict";var e={1545:function(e,t,n){var o=n(144),r=n(998),i=n(4291),a=n(4886),u=n(9223),c=n(1267),s=n(8271),f=n(4324),l=n(3059),d=n(9409),m=n(6566),p=function(){var e=this,t=e._self._c;return t(r.Z,[t(l.Z,[t("router-view")],1),t(s.Z,{staticClass:"transparent text-center",attrs:{dark:"",padless:"",id:"contact"}},[t(c.Z,[t(a.EB,{staticClass:"d-block"},[e._v("You can contact me here")])],1),t(a.ZB,e._l(e.icons,(function(n,o){return t(i.Z,{key:o,staticClass:"mx-4 white--text",attrs:{text:""}},[t(f.Z,{attrs:{size:"24px"}},[e._v(" "+e._s(n.icon)+" ")]),t("span",{staticClass:"text-lowercase"},[e._v(" "+e._s(n.username))])],1)})),1),t(u.Z),t(a.ZB,{staticClass:"white--text"},[t("strong",[e._v("Rafael Owen G. Arela")])])],1),t(d.Z,{attrs:{bottom:"",right:"",fixed:"",transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function(){return[t(i.Z,{attrs:{color:"blue darken-2",dark:"",fab:"",tran:""},model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[e.fab?t(f.Z,[e._v(" mdi-close ")]):t(f.Z,[e._v(" mdi-cog-outline ")])],1)]},proxy:!0}]),model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},e._l(e.actions,(function(n,o){return t(m.Z,{key:`actions_${o}`,attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function({on:o,attrs:r}){return[t(i.Z,e._g(e._b({attrs:{fab:"",dark:"",small:"",href:"#"+n.id},on:{click:function(t){e.fab=!e.fab}}},"v-btn",r,!1),o),[t(f.Z,[e._v(e._s(n.icon))])],1)]}}],null,!0)},[t("span",[e._v(e._s(n.text))])])})),1)],1)},v=[],h={name:"App",data:()=>({icons:[{icon:"mdi-facebook",username:"owenarela"},{icon:"mdi-linkedin",username:"rafael-owen-arela"},{icon:"mdi-gmail",username:"arelaowen@gmail.com"},{icon:"mdi-instagram",username:"owenarela"},{icon:"mdi-phone",username:"09272286606"}],actions:[{icon:"mdi-home-account",id:"home",text:"Home"},{icon:"mdi-account-outline",id:"aboutme",text:"About Me"},{icon:"mdi-account-hard-hat-outline",id:"work",text:"Work Experience"},{icon:"mdi-folder-outline",id:"project",text:"Projects"},{icon:"mdi-phone",id:"contact",text:"Contact Me"}]})},b=h,g=n(1001),y=(0,g.Z)(b,p,v,!1,null,null,null),k=y.exports,w=n(8345);o.ZP.use(w.ZP);const _=[{path:"/",alias:"/owenarela",name:"home",component:()=>n.e(149).then(n.bind(n,6149))}],x=new w.ZP({mode:"history",base:"/portfolio/",routes:_});var Z=x,C=n(8864);o.ZP.use(C.Z);var O=new C.Z({theme:{dark:!0}});o.ZP.mixin({computed:{isMobile(){return this.$vuetify.breakpoint.mdAndDown&&(this.$vuetify.breakpoint.sm||this.$vuetify.breakpoint.smAndDown)}}}),o.ZP.config.productionTip=!1,new o.ZP({router:Z,vuetify:O,render:e=>e(k)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],i=e[f][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".262aeb2d.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".c80feb31.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-portfolio:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/portfolio/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),u=n.p+a;if(t(a,u))return r();e(o,u,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={149:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],c=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var f=c(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},o=self["webpackChunkmy_portfolio"]=self["webpackChunkmy_portfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1545)}));o=n.O(o)})();
//# sourceMappingURL=app.2dd61ef9.js.map