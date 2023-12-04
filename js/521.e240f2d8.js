"use strict";(self["webpackChunkmy_portfolio"]=self["webpackChunkmy_portfolio"]||[]).push([[521],{2521:function(t,e,s){s.r(e),s.d(e,{default:function(){return V}});s(560);var i=s(7567),o=s(6750),r=s(8846),n=s(7678),a=s(5352),l=(0,n.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,a.z9)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=l,h=s(6669),d=s(1767),p=s(4101);const m="undefined"!==typeof window&&"IntersectionObserver"in window;var u=(0,n.Z)(c,h.Z).extend({name:"v-img",directives:{intersect:o.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,s){if(!m||s||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,p.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const s=()=>{const{naturalHeight:i,naturalWidth:o}=t;i||o?(this.naturalWidth=o,this.calculatedAspectRatio=o/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(s,e)};s()},genContent(){const t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,a.z9)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=c.options.render.call(this,t),s=(0,d.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:m?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,s,e.children)}}),v=i.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...i.Z.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,a.kb)(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,p.fK)(t,e,this)}))},methods:{genBackground(){const t={height:(0,a.kb)(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(u,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,a.kb)(this.computedContentHeight)}},(0,a.z9)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,a.kb)(this.extensionHeight)}},(0,a.z9)(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],s=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,s,e)}});function g(t,e,s){const{self:i=!1}=e.modifiers||{},o=e.value,r="object"===typeof o&&o.options||{passive:!0},n="function"===typeof o||"handleEvent"in o?o:o.handler,a=i?t:e.arg?document.querySelector(e.arg):window;a&&(a.addEventListener("scroll",n,r),t._onScroll=Object(t._onScroll),t._onScroll[s.context._uid]={handler:n,options:r,target:i?void 0:a})}function S(t,e,s){var i;if(!(null===(i=t._onScroll)||void 0===i?void 0:i[s.context._uid]))return;const{handler:o,options:r,target:n=t}=t._onScroll[s.context._uid];n.removeEventListener("scroll",o,r),delete t._onScroll[s.context._uid]}const f={inserted:g,unbind:S};var b=f,y=s(3347),C=s(144),_=C.ZP.extend({name:"scrollable",directives:{Scroll:f},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,p.Kd)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}}),E=s(9131),x=s(1444);const T=(0,n.Z)(v,_,E.Z,x.Z,(0,y.Z)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var O=T.extend({name:"v-app-bar",directives:{Scroll:b},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return _.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...v.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return v.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,e=1.5;return t+(e-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=v.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:v.options.computed.isCollapsed.call(this)},isProminent(){return v.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...v.options.computed.styles.call(this),fontSize:(0,a.kb)(this.computedFontSize,"rem"),marginTop:(0,a.kb)(this.computedMarginTop),transform:`translateY(${(0,a.kb)(this.computedTransform)})`,left:(0,a.kb)(this.computedLeft),right:(0,a.kb)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=v.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=v.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),I=s(4291),A=s(778),R=s(4886),w=(s(9027),s(7549)),B=(0,w.Z)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:i}){let o;const{attrs:r}=s;return r&&(s.attrs={},o=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,(0,d.ZP)(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(o||[])}),i)}}),k=s(1267),P=s(7394),$=(0,a.Ji)("spacer","div","v-spacer"),L=(0,n.Z)(h.Z).extend({name:"v-timeline",provide(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes(){return{"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse,...this.themeClasses}}},render(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),M=s(4324),N=M.Z,z=s(6878);const H=(0,n.Z)(z.Z,h.Z);var Z=H.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon(){return!!this.icon||!!this.$slots.icon}},methods:{genBody(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon(){return this.$slots.icon?this.$slots.icon:this.$createElement(N,{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot(){const t=this.setBackgroundColor(this.color);return this.$createElement("div",{staticClass:"v-timeline-item__inner-dot",...t},[this.hasIcon&&this.genIcon()])},genDot(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider(){const t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render(t){const e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:{"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right,...this.themeClasses}},e)}}),D=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"body"}},[e("div",{staticClass:"cursor",attrs:{id:"cursor"}},[e("div",{staticClass:"ring",style:`transform: translateX(calc(${t.mouseX}px - 1.25rem)) translateY(calc(${t.mouseY}px - 1.25rem))`},[e("div")]),e("div",{staticClass:"ring",style:`transform: translateX(calc(${t.mouseX}px - 1.25rem)) translateY(calc(${t.mouseY}px - 1.25rem))`},[e("div")])]),t.isMobile?t._e():e(O,{staticClass:"mt-2 mx-6",attrs:{dense:"",elevation:"0",color:"transparent",dark:"",id:"home"}},[e(P.vQ,[e("span",{directives:[{name:"show",rawName:"v-show",value:t.mode.navbar,expression:"mode.navbar"}]},[e("span",{staticClass:"text-h4"},[t._v("{ }")]),e("span",{staticClass:"text-caption"},[t._v("wen")])])]),e($),e(P.xy,[e("div",{directives:[{name:"show",rawName:"v-show",value:t.mode.navbar,expression:"mode.navbar"}]},[e(I.Z,{staticClass:"mr-1",attrs:{text:"",href:"#aboutme"}},[t._v("About Me")]),e(I.Z,{staticClass:"mr-1",attrs:{text:"",href:"#work"}},[t._v("Work Experience")]),e(I.Z,{staticClass:"mr-1",attrs:{text:"",href:"#project"}},[t._v("Projects")]),e(I.Z,{attrs:{text:"",href:"#contact"}},[t._v("Contact")])],1)])],1),t.isMobile?e("div",{staticClass:"mt-2 mx-4",attrs:{id:"home"}},[e(P.vQ,[e("span",{directives:[{name:"show",rawName:"v-show",value:t.mode.navbar,expression:"mode.navbar"}]},[e("span",{staticClass:"text-h4"},[t._v("{ }")]),e("span",{staticClass:"text-caption"},[t._v("wen")])])])],1):t._e(),e(B,{attrs:{fluid:""}},[e(k.Z,{attrs:{md12:"",sm12:"",xs12:"",row:"","no-gutters":""}},[e(k.Z,{staticClass:"text-center pa-2",style:`font-size: ${t.isMobile?"40px":"50px"};`,attrs:{md6:"",sm12:"",xs12:""}},[e("div",{staticClass:"mt-8"},[e("div",{class:t.isMobile?"text-right":"",attrs:{id:"inner-text"}}),e("div",{class:t.isMobile?"text-right":"",attrs:{id:"inner-text1"}}),e("div",{class:t.isMobile?"text-right":"",attrs:{id:"inner-text2"}}),e("div",{class:t.isMobile?"text-right":"",attrs:{id:"inner-text3"}}),e("div",{class:t.isMobile?"text-right":"",attrs:{id:"inner-text4"}})])]),e(k.Z,{staticClass:"text-body-2 pa-2",attrs:{md6:"",sm12:"",xs12:""}},[e("div",[e("code",{staticClass:"pa-0"},[e("pre",{class:`my-1 typewriter ${t.isMobile?"float-right":"float-left"} `},[t._v("                    function showStackSkill(){\n                        const skills = [\n                            'PHP',\n                            'JAVASCRIPT',\n                            'NODEJS FRAMEWORKS(VUEJS,REACTJS)',\n                            'IONIC(VUEJS)',\n                            'NATIVESCRIPT(VUEJS)',\n                            'Knoweledge in Repositories',\n                            'REST API',\n                            'API INTEGRATION',\n                            'NODE PLUGINS',\n                            'MYSQL',\n                            'CLOUD SERVER (eg. Google Cloud)',\n                            'Basic Server Troubleshooting',\n                            'Application Services',\n                            'Basic Knoweledge in .Net',\n                            'Basic C#',\n                            'Basic Java',\n                            'Basic C++',\n                            'Basic Python',\n                            'CSS',\n                            'Knoweledge UI Styling Libraries',\n                        ];\n                      return skills;\n                    }\n                    console.log(showStackSkill());\n                ")])])])])],1)],1),e(B,{class:""+(t.isMobile?"mt-0 pt-0":"mt-4"),attrs:{fluid:""}},[e("div",{staticClass:"my-2",attrs:{id:"aboutme"}},[e(R.EB,{staticClass:"text-h4 pb-10"},[t._v("About Me")]),e(R.Qq,{staticClass:"text-h5"},[t._v("Hi, I'm Rafael Owen G. Arela, and I love programming. I enjoy finding smart solutions to tricky problems and always exploring new possibilities in technology.")]),e("div",[e("div",{staticClass:"text-center text-h6 pa-2"},[t._v("Educational Background")]),e(k.Z,{staticClass:"ma-0",attrs:{md12:"",sm12:"",xs12:"",row:"","no-gutters":""}},t._l(t.education,(function(s,i){return e(k.Z,{key:`educ_${i}`,staticClass:"pa-2",attrs:{md6:"",sm12:"",xs12:""}},[e(A.Z,[e(R.EB,[e("p",[t._v(" "+t._s(s.school)+" "),e($),t._v(" ( "),e("span",{staticClass:"success--text"},[t._v(t._s(s.year))]),t._v(" ) ")],1)]),e(R.Qq,[e("i",[t._v(t._s(s.address))]),e($),t._v(" "+t._s(s.level)+" "),e($),t._v(" "+t._s(s.course)+" ")],1)],1)],1)})),1)],1),e("div",[e("div",{staticClass:"text-center text-h6 pa-2",attrs:{id:"work"}},[t._v("Work Experience")]),e(L,{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.work,(function(s,i){return e(Z,{key:`work_${i}`,attrs:{small:""}},[e("span",{staticClass:"success--text",attrs:{slot:"opposite"},slot:"opposite"},[t._v(t._s(s.year))]),e(A.Z,{staticClass:"elevation-2"},[e(R.EB,[t._v(" "+t._s(s.company)+" ")]),e(R.Qq,[t._v(t._s(s.position))]),e(R.ZB,[e("ul",t._l(s.details,(function(s){return e("li",{key:s},[t._v(" "+t._s(s)+" ")])})),0)])],1)],1)})),1)],1),e("div",[e("div",{staticClass:"text-center text-h6 pa-2",attrs:{id:"project"}},[t._v("My Projects")]),e("p",{staticClass:"text-justify"},[t._v(" In 3 years time with my current job, I do develop and maintain mostly In-house applications listed below: ")]),e("ul",{staticClass:"pb-4"},[t._v(" HRIS AND COMPANY PAYROLL SYSTEM (REPLACEMENT FOR OLD SYSTEM) "),e("li",{staticClass:"ml-10"},[t._v("These applications is used for Storing Employee Information, Employee Timekeepig, Payroll Computation and Generation of Reports that provides HR needs.")]),e("li",{staticClass:"ml-10"},[t._v("Application is built using CodeIgniter as its backend and VUEJS for its front.")])]),e("ul",{staticClass:"pb-4"},[t._v(" EMPLOYEE SELF SERVICE PORTAL (REPLACEMENT FOR OLD SYSTEM) "),e("li",{staticClass:"ml-10"},[t._v("The purpose of this application is to allow employees to do task such as filing of leave, etc. that were traditionally handled by HR.")]),e("li",{staticClass:"ml-10"},[t._v("Application is built using CodeIgniter as its backend and VUEJS for its front.")])]),e("ul",{staticClass:"pb-4"},[t._v(" APPLICANT TRACKING SYSTEM(ONBOARDING SYSTEM) "),e("li",{staticClass:"ml-10"},[t._v("The purpose of this application is to give HR facilities to handle the process of job application upto onboarding.")]),e("li",{staticClass:"ml-10"},[t._v("Application is built using CodeIgniter as its backend and VUEJS for its front.")])]),e("ul",[t._v(" SPOTT(STERLING PAPER ONLINE TIME TRACKER) "),e("li",{staticClass:"ml-10"},[t._v("This is a mobile application for DTR of field employees who are not able to do biometrics.")]),e("li",{staticClass:"ml-10"},[t._v("Application is built using Nativescript Vue.")])])])],1)])],1)},U=[],Y={data(){return{mouseX:0,mouseY:0,model:null,mode:{navbar:!1,name:!1},education:[{year:"2013-2019",school:"Rizal Technological University",level:"Tertiary",address:"Boni Avenue, Mandaluyong City",course:"Bachelor of Science in Information and Communication Technology"},{year:"2011-2013",school:"Isaac Lopez Integrated School",level:"Secondary",address:"Ilino Cruz Vergara, Mandaluyong City",course:""},{year:"2008-2011",school:"Lopez National Comprehensive High School",level:"Secondary",address:"Pan-Philippine Highway, Lopez, Quezon Province",course:""},{year:"2002-2008",school:"Don Emilio Salumbides Elementary School",level:"Primary",address:"Magsaysay Lopez, Quezon Province",course:""}],work:[{company:"SL AGRITECH CORPORATION",position:"Junior Programmer",year:"Nov. 2020 - Present",details:["Build In-house Web/Standalone Application, Maintenance, Backup and Monitoring of all application.","Support user concern's","Maintain Company Email software","Monthly Reporting and Retrospect"]},{company:"STERLING OPENOVATE",position:"Junior Developer",year:"March 2020 - May 2020",details:["Build Web Application","Maintain/Update Existing Application","Document and create user manual"]},{company:"JINDINGYUAN",position:"Data Encoder",year:"November 2019 - February 2020",details:["Created web domain landing page","Finding domain for sale","Monitor websites daily"]},{company:"AXEIA DEVELOPMENT CORPORATION",position:"Sales Management Staff(Internship)",year:"April 2018 - July 2018",details:["Handles Paper Filings","Provide Clients Assistance"]},{company:"ITECH GLOBAL SOLUTIONS, INC",position:"IT Technical Support(Internship)",year:"June 2015 - October 2016",details:["Provide User/Employee Assistance"]},{company:"Municipality of Mandaluyong",position:"IT Technical Support(Internship)",year:"June 2015 - September 2015",details:["Provide User/Employee Assistance"]}]}},created(){setTimeout((()=>{this.mode.navbar=!0}),500)},mounted(){function t(t,e){t=t||"ZOOM!";var s=t.split(""),i=document.getElementById(e);i.innerHTML="",i.classList.remove("done-animating"),s.forEach((function(t,e){var o=document.createElement("span");o.textContent=t,o.className="letter animate",o.style["animation-delay"]=300*e+"ms",i.appendChild(o),e===s.length-1&&o.addEventListener("animationend",(function(){i.classList.add("done-animating")}))}))}document.addEventListener("mousemove",(t=>{this.mouseX=t.clientX,this.mouseY=t.clientY})),t("HELLO!","inner-text"),t("I AM","inner-text1"),t("OWEN","inner-text2"),t("A","inner-text3"),t("DEVELOPER","inner-text4")}},W=Y,j=s(1001),J=(0,j.Z)(W,D,U,!1,null,null,null),V=J.exports}}]);
//# sourceMappingURL=521.e240f2d8.js.map