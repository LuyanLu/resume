webpackJsonp([0],{"+wb9":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main-skill"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMe,expression:"showMe"}],staticClass:"title animated slideInUp"},[t._v(t._s(t.msg.title))]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"contain"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMe,expression:"showMe"}],staticClass:"skill-grid animated fadeIn duration"},t._l(t.msg.skillList,function(e,i){return s("div",{key:i,staticClass:"grid-cell",class:"-"+e},[t._v(t._s(e))])})),t._v(" "),s("div",{staticClass:"des"},t._l(t.msg.desList,function(e,i){return s("p",{directives:[{name:"show",rawName:"v-show",value:t.showMe,expression:"showMe"}],staticClass:"animated fadeIn"},[t._v(t._s(e))])}))])])])},n=[],a={render:i,staticRenderFns:n};e.a=a},"/oiM":function(t,e,s){"use strict";e.a={name:"contact",props:{msg:{type:Object,default:{}},isMobile:{type:Boolean,default:!1}},data:function(){return{showMe:this.isMobile,img:s("q+ug")}},mounted:function(){document.styleSheets[0].insertRule(".item:nth-child(4):after { background: url(../../"+this.img+") no-repeat center center/100px 100px, #f0f2f1 }",0)},methods:{enterAnimate:function(){this.showMe=!0}}}},"3mAT":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main-contact"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMe,expression:"showMe"}],staticClass:"title animated slideInUp"},[t._v(t._s(t.msg.title))]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"msg-des"},t._l(t.msg.desList,function(e,i){return s("p",{key:i},[t._v(t._s(e))])})),t._v(" "),s("div",{ref:"contactType",staticClass:"msg-type"},t._l(t.msg.typeList,function(e,i){return s("a",{directives:[{name:"show",rawName:"v-show",value:t.showMe,expression:"showMe"}],key:i,staticClass:"item animated flipInX",attrs:{href:e.url}},[s("i",{class:e.iconClass})])}))])])},n=[],a={render:i,staticRenderFns:n};e.a=a},"9TD/":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{ref:"default",staticClass:"main-default"},[s("div",{staticClass:"content"},[s("a",{directives:[{name:"show",rawName:"v-show",value:t.showMe,expression:"showMe"}],staticClass:"photo",style:{background:"url("+t.msg.avatar+") no-repeat center center/cover"},attrs:{href:t.msg.url}}),t._v(" "),s("div",{staticClass:"des"},[s("p",{directives:[{name:"show",rawName:"v-show",value:t.showMe,expression:"showMe"}],staticClass:"quote animated zoomIn"},[s("span",{staticStyle:{color:"#edde55"}},[t._v("while")]),t._v("("),s("span",{staticStyle:{color:"#007c6b"}},[t._v("!")]),t._v("("),s("span",{staticStyle:{color:"#f5606f"}},[t._v("succeed")]),t._v(" = "),s("span",{staticStyle:{color:"#7648af"}},[t._v("try")]),t._v("()));")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMe,expression:"showMe"}],staticClass:"des-list animated zoomIn"},t._l(t.msg.desList,function(e,i){return s("p",{key:i},[t._v(t._s(e))])}))])])])},n=[],a={render:i,staticRenderFns:n};e.a=a},"9Vp+":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main-works"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMe,expression:"showMe"}],staticClass:"title animated fadeIn"},[t._v(t._s(t.msg.title))]),t._v(" "),s("div",{staticClass:"content"},[s("ul",{staticClass:"work-list"},t._l(t.msg.worksList,function(e,i){return s("li",{key:i,staticClass:"work-item"},[s("a",{staticClass:"img",style:{background:"url("+e.img+") no-repeat center center/cover"},attrs:{href:e.url}},[s("h4",[t._v(t._s(e.title))])]),t._v(" "),s("a",{staticClass:"mask",attrs:{href:e.url}},[s("p",[t._v(t._s(e.des))])])])}))])])},n=[],a={render:i,staticRenderFns:n};e.a=a},"9u6k":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fixed-nav",on:{mouseover:t.showIcon,mouseout:t.hideIcon}},[i("a",{ref:"avatar",staticClass:"avatar",attrs:{href:t.fixedNav[0].url}},[i("img",{attrs:{src:s("lS+k"),alt:""}})]),t._v(" "),i("transition",{attrs:{name:"move"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.iconShow,expression:"iconShow"}],staticClass:"fixed-nav-icon"},t._l(t.fixedNav,function(t,e){return i("a",{key:e,class:["inner","inner-"+(e+1)],attrs:{href:t.url}},[i("i",{class:t.iconClass})])}))])],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},"9wsk":function(t,e){},A82A:function(t,e){},AyPV:function(t,e){},C7CD:function(t,e){},E9Zs:function(t,e,s){t.exports=s.p+"static/img/photo.dab0248.jpg"},EKFb:function(t,e,s){"use strict";e.a={name:"skill",props:{msg:{type:Object,default:{}},isMobile:{type:Boolean,default:!1}},data:function(){return{showMe:this.isMobile}},methods:{enterAnimate:function(){this.showMe=!0}}}},FnhZ:function(t,e,s){"use strict";function i(t){s("A82A")}var n=s("/oiM"),a=s("3mAT"),o=s("VU/8"),c=i,r=o(n.a,a.a,c,"data-v-0d3b4396",null);e.a=r.exports},HRea:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("fix-nav",{attrs:{fixedNav:t.fixedNav}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}],staticClass:"nav-dot"},[s("ul",t._l(t.titleList,function(e,i){return s("li",{class:[{"active-dot":t.curIndex===i},"item"],on:{click:function(e){t.goto(i)}}},[s("em",{staticClass:"dot"},[s("i",{class:e.iconClass})]),t._v(" "),s("span",{staticClass:"dot-title"},[t._v(t._s(e.title))])])}))]),t._v(" "),s("div",{ref:"main",staticClass:"main",on:{mousewheel:function(e){t.mouseWheelHandler(e)},DOMMouseScroll:function(e){t.mouseWheelHandler(e)}}},[s("transition-group",{attrs:{tag:"div",name:t.slide,mode:"in-out","enter-active-class":t.enterClass,"leave-active-class":t.leaveClass},on:{"after-enter":t.enterHandler,leave:t.slidingHandler}},t._l(t.pageList,function(e,i){return s(e,{directives:[{name:"show",rawName:"v-show",value:t.showMe(i),expression:"showMe(index)"}],key:"index",ref:"component",refInFor:!0,tag:"component",class:[(i+1)%2!=0?"bg-color-blue":"bg-color-white","page-section","animate-duration"],attrs:{msg:t.db[i],isMobile:t.isMobile}})}))],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile&&t.curIndex!==t.pageList.length-1,expression:"!isMobile && curIndex !== (pageList.length - 1)"}],staticClass:"-arrow",on:{click:t.arrowClick}},[s("i",{staticClass:"icon-arrow"})])],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},JIdF:function(t,e){},M93x:function(t,e,s){"use strict";function i(t){s("AyPV")}var n=s("xJD8"),a=s("HRea"),o=s("VU/8"),c=i,r=o(n.a,a.a,c,null,null);e.a=r.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n=s("M93x"),a=s("oPmM"),o=(s.n(a),s("tb/R")),c=(s.n(o),s("JIdF"));s.n(c);i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:n.a}})},NjFi:function(t,e,s){t.exports=s.p+"static/img/resume.9b77fed.png"},PtIi:function(t,e,s){"use strict";e.a={name:"default",props:{msg:{type:Object,default:{}}},data:function(){return{showMe:!0}},methods:{enterAnimate:function(){}}}},QSml:function(t,e){},SzYN:function(t,e,s){"use strict";function i(t){s("w2sy")}var n=s("w4w8"),a=s("9Vp+"),o=s("VU/8"),c=i,r=o(n.a,a.a,c,"data-v-40ec5978",null);e.a=r.exports},UV08:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main-info"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMe,expression:"showMe"}],staticClass:"title animated slideInUp"},[t._v(t._s(t.msg.title))]),t._v(" "),s("div",{staticClass:"content"},[s("div",[s("ul",{staticClass:"msg-list"},t._l(t.msg.infoList,function(e,i){return s("li",{directives:[{name:"show",rawName:"v-show",value:t.showMe,expression:"showMe"}],key:i,staticClass:"msg-item animated zoomIn"},[s("div",{staticClass:"cont"},[s("div",{staticClass:"svg"},[s("i",{class:e.iconClass})]),t._v(" "),s("div",{staticClass:"intro"},[s("span",[t._v(t._s(e.key))]),t._v("/"),s("span",[t._v(t._s(e.value))])])])])}))]),t._v(" "),s("div",{staticClass:"msg-des"},t._l(t.msg.desList,function(e,i){return s("p",{directives:[{name:"show",rawName:"v-show",value:t.showMe,expression:"showMe"}],staticClass:" animated flipInX"},[t._v(t._s(e))])}))])])},n=[],a={render:i,staticRenderFns:n};e.a=a},cmXJ:function(t,e,s){t.exports=s.p+"static/img/musicPlayer.c820151.png"},gDR0:function(t,e,s){"use strict";function i(t){s("QSml")}var n=s("vn1A"),a=s("UV08"),o=s("VU/8"),c=i,r=o(n.a,a.a,c,"data-v-54d3f028",null);e.a=r.exports},l5cK:function(t,e,s){"use strict";function i(t){s("zW/v")}var n=s("EKFb"),a=s("+wb9"),o=s("VU/8"),c=i,r=o(n.a,a.a,c,"data-v-759008c7",null);e.a=r.exports},"lS+k":function(t,e,s){t.exports=s.p+"static/img/avatar.95cfc03.jpg"},oPmM:function(t,e){},"p+pX":function(t,e,s){t.exports=s.p+"static/img/FCC-code.8aacf39.png"},"q+ug":function(t,e,s){t.exports=s.p+"static/img/wechat.5b0b0ba.jpg"},rQBB:function(t,e,s){"use strict";s.d(e,"c",function(){return i}),s.d(e,"a",function(){return n}),s.d(e,"b",function(){return a});var i=function(t,e,s){function i(t){return t.target.removeEventListener(t.type,i),s(t)}t.addEventListener(e,i)},n=function(){var t=!1;return function(e,s){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t},a=function(t,e,s){var i=this,n=null,a=void 0;return function(){for(var o=arguments.length,c=Array(o),r=0;r<o;r++)c[r]=arguments[r];var l=+new Date;clearTimeout(n),a||(a=l),l-a>=s?(t.apply(i,c),a=l):n=setTimeout(function(){t.apply(this,c)},e)}}},rob8:function(t,e,s){t.exports=s.p+"static/img/pyblog.78fa19c.png"},"tb/R":function(t,e){},ueVu:function(t,e,s){"use strict";s.d(e,"a",function(){return i}),s.d(e,"b",function(){return n}),s.d(e,"c",function(){return a}),s.d(e,"d",function(){return o}),s.d(e,"e",function(){return c}),s.d(e,"f",function(){return r}),s.d(e,"g",function(){return l});var i=[{iconClass:"icon-s_github",url:"https://github.com/LuyanLu"},{iconClass:"icon-s_blog",url:"http://samanthalu.site"},{iconClass:"icon-s_sf",url:"https://segmentfault.com/u/1149430032"}],n=[{iconClass:"icon-d_home",title:"首页"},{iconClass:"icon-d_info",title:"关于我"},{iconClass:"icon-d_skills",title:"技能栈"},{iconClass:"icon-d_works",title:"作品集"},{iconClass:"icon-d_contact",title:"联系我"}],a={avatar:s("E9Zs"),url:"https://github.com/LuyanLu",quote:"while(!(succeed = try()));",desList:["我是卢璐妍","一名前端工程师","samanthalu920@qq.com"]},o={title:"关于我",infoList:[{iconClass:"icon-i_age",key:"年龄",value:"21岁"},{iconClass:"icon-i_edu",key:"学历",value:"本科"},{iconClass:"icon-i_site",key:"坐标",value:"上海"},{iconClass:"icon-i_status",key:"状态",value:"求职"}],desList:["山东大学 信息学院 2018届 大四 CET-6","一入前端深似海，从此coding不能停","具备快速自学，独立解决问题的能力，良好的编程习惯","对前端相见恨晚，但我会脚踏实地，坚定地走下去( •̀ω•́ )✧"]},c={title:"技能栈",skillList:["React","Vuex","Python","Nodejs","Stylus","jQuery","HTML5","CSS","Javascript","Vue","Less","Webpack","Bootstrap"],desList:["熟练使用Vue全家桶完成工程化项目编写","掌握原生JS，ES6语法，代码编写遵守规范","了解前端自动化，模块化开发，前后端的交互过程","会使用常见的前端框架和构建工具"]},r={title:"作品集",worksList:[{title:"python-blog",des:"学习教程的实战项目，用 Python + aiohttp + jinja2 + MySQL 写的博客网站，包括日志、用户、评论、后台管理。",url:"https://github.com/LuyanLu/pyblog",img:s("rob8")},{title:"FCC-code",des:"FreeCodeCamp代码集合，包括用react写的番茄时钟，用jQuery写的游戏和计算器等，以及fcc的算法题。",url:"http://samanthalu.site/FCC-code/pomodoro-timer/build/index.html",img:s("p+pX")},{title:"用Vue编写的外卖App",des:"使用 Vue全家桶，Less，webpack 完成的仿饿了么前端app，json模拟后端数据，实现登录、购物、查找等基本功能，实践各种CSS3新特性。",url:"http://samanthalu.site/elemeVue",img:s("vZKs")},{title:"SPA音乐播放器",des:"网页播放器，使用Vue+axios+sass，支持滚动歌词、播放列表、播放调节，使用H5的audio标签各属性。",url:"http://samanthalu.site/music-player",img:s("cmXJ")},{title:"个人简历",des:"一份是轮播简历，深入使用Vue的过渡效果，自制动画效果+Animate.css，并做移动端兼容，数据代码分离；一份静态网页用gulp打包。",url:"http://samanthalu.site/resume.html",img:s("NjFi")}]},l={title:"联系我",desList:["邮箱：samanthalu920@qq.com","电话：15665823680","微信：xiamolvgreen","QQ：1149430032"],typeList:[{iconClass:"icon-d_contact",url:"https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=6ZqIhIiHnYGIhZzQ29mpmJjHioaE"},{iconClass:"icon-s_blog",url:"http://samanthalu.site"},{iconClass:"icon-s_github",url:"https://github.com/LuyanLu"},{iconClass:"icon-wechat",url:"javascript:;"},{iconClass:"icon-s_sf",url:"https://segmentfault.com/u/1149430032"}]}},vZKs:function(t,e,s){t.exports=s.p+"static/img/eleme.c5a6c7b.png"},vn1A:function(t,e,s){"use strict";e.a={name:"info",props:{msg:{type:Object,default:{}},isMobile:{type:Boolean,default:!1}},data:function(){return{showMe:this.isMobile}},methods:{enterAnimate:function(){this.showMe=!0}}}},vnsC:function(t,e,s){"use strict";e.a={props:{fixedNav:{type:Array,default:[]}},data:function(){return{iconShow:!1,iconShowTimer:null,iconHideTimer:null}},methods:{showIcon:function(){var t=this;this.iconShow=!0,clearTimeout(this.iconHideTimer),this.iconShowTimer=setTimeout(function(){t.$refs.avatar.classList.add("animated","rubberBand")},250)},hideIcon:function(){var t=this;this.iconShow=!1,clearTimeout(this.iconShowTimer),this.iconHideTimer=setTimeout(function(){t.$refs.avatar.classList.remove("animated","rubberBand")},250)}}}},w2sy:function(t,e){},w4w8:function(t,e,s){"use strict";e.a={name:"works",props:{msg:{type:Object,default:{}},isMobile:{type:Boolean,default:!1}},data:function(){return{showMe:this.isMobile}},methods:{enterAnimate:function(){this.showMe=!0}}}},xJD8:function(t,e,s){"use strict";var i=s("FnhZ"),n=s("xz+F"),a=s("gDR0"),o=s("l5cK"),c=s("SzYN"),r=s("yYrt"),l=s("rQBB"),u=s("ueVu");e.a={name:"app",components:{Contact:i.a,Default:n.a,Info:a.a,Skill:o.a,Works:c.a,fixNav:r.a},data:function(){return{pageList:["Default","Info","Skill","Works","contact"],curIndex:0,direction:"up",slide:"slide-up",sliding:!1,isMobile:!1,fixedNav:u.a,titleList:u.b,db:[u.c,u.d,u.e,u.f,u.g]}},computed:{pageNum:function(){return this.pageList.length},prevIndex:function(){return 0!==this.curIndex?this.curIndex-1:null},nextIndex:function(){return this.curIndex!==this.pageNum-1?this.curIndex+1:null},isOdd:function(){return(this.curIndex+1)%2!=0},enterClass:function(){return"animated "+("up"===this.direction?"slideInUp":"slideInDown")},leaveClass:function(){return"animated "+("up"===this.direction?"slideOutUp":"slideOutDown")}},created:function(){s.i(l.a)()&&(this.isMobile=!0)},mounted:function(){this.isMobile&&(this.$refs.main.classList.remove("main"),this.$refs.main.classList.add("mobile-main"))},methods:{mouseWheelHandler:function(t){var e=this;s.i(l.b)(function(t){e.sliding||t.wheelDelta<0&&e.curIndex===e.pageNum-1||t.wheelDelta>0&&0===e.curIndex||t.detail>0&&e.curIndex===e.pageNum-1||t.detail<0&&0===e.curIndex||(e.sliding=!0,t.wheelDelta<0||t.detail>0?(e.direction="up",e.slide="slide-up",e.curIndex++):(e.direction="down",e.slide="slide-down",e.curIndex--))},100,300)(t)},slidingHandler:function(t,e){var i=this;s.i(l.c)(t,"animationend",function(){i.sliding=!1,e()})},goto:function(t){this.direction=t>this.curIndex?"up":"down",this.slide=t>this.curIndex?"slide-up":"slide-down",this.curIndex=t},enterHandler:function(){this.$refs.component[this.curIndex].enterAnimate()},showMe:function(t){return!!this.isMobile||this.curIndex===t},arrowClick:function(){this.sliding||(this.direction="up",this.slide="slide-up",this.curIndex++)}}}},"xz+F":function(t,e,s){"use strict";function i(t){s("9wsk")}var n=s("PtIi"),a=s("9TD/"),o=s("VU/8"),c=i,r=o(n.a,a.a,c,"data-v-1e800592",null);e.a=r.exports},yYrt:function(t,e,s){"use strict";function i(t){s("C7CD")}var n=s("vnsC"),a=s("9u6k"),o=s("VU/8"),c=i,r=o(n.a,a.a,c,null,null);e.a=r.exports},"zW/v":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8edfaa3b77eaf64c43e8.js.map