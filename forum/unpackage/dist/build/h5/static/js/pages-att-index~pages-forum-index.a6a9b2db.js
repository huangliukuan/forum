(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-att-index~pages-forum-index"],{"13d6":function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.forumList?a("v-uni-view",{staticClass:"forumBox"},t._l(t.forumList,(function(e,r){return a("v-uni-view",{key:r,staticClass:"forumItem",attrs:{"data-path":"/pages/detail/index?id="+e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPath.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"forumUser"},[a("v-uni-image",{attrs:{src:e.headimgurl,mode:""}}),a("v-uni-view",{staticClass:"forumUserInfo"},[a("v-uni-view",{staticClass:"forumUserName"},[t._v(t._s(e.nickName)),e.is_authentication?a("v-uni-text",{staticClass:"vipName"},[t._v(t._s(e.auth_name))]):t._e()],1),a("v-uni-view",{staticClass:"forumUser"},[a("v-uni-text",[t._v("#"+t._s(e.category_name))]),a("v-uni-text",[t._v("来自"+t._s(e.device_info))])],1)],1)],1),a("v-uni-view",[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"forumText"},[t._v(t._s(e.content))]),""!=e.voice_url?a("v-uni-view",{staticClass:"recordBox"},[a("v-uni-view",{staticClass:"recordItem",attrs:{"data-id":e.id,"data-url":e.voice_url},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.audioEvent.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"recordItemArc1"}),a("v-uni-view",{staticClass:"recordItemArc2 ",class:t.audioId==e.id?"recordArc2":""}),a("v-uni-view",{staticClass:"recordItemArc3 ",class:t.audioId==e.id?"recordArc3":""})],1)],1):t._e(),e.img_url&&""!=e.img_url[0]?a("v-uni-view",{staticClass:"forumImg"},t._l(e.img_url,(function(t,e){return a("v-uni-image",{key:e,attrs:{src:t,mode:""}})})),1):t._e(),a("v-uni-view",{staticClass:"forumInfo"},[a("v-uni-text",[t._v(t._s(e.create_time))]),a("v-uni-text",[t._v(t._s(e.view_count)+"浏览")]),a("v-uni-text",[t._v(t._s(e.comment_count)+"评论")]),a("v-uni-text",[t._v(t._s(e.thumbs_up_count)+"点赞")])],1)],1)})),1):t._e()},n=[]},1797:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.blue[data-v-d569d450]{color:#007aff}.f28[data-v-d569d450]{font-size:%?28?%}.bcred[data-v-d569d450]{background-color:#fa5252!important}.bcf[data-v-d569d450]{background-color:#fff!important}.br1[data-v-d569d450]{border-right:%?1?% solid #f1f1f1}.p20[data-v-d569d450]{padding:%?20?%}.prl2[data-v-d569d450]{padding:0 %?20?%}.w20[data-v-d569d450]{width:20%}.mt20[data-v-d569d450]{margin-top:%?20?%}.mr20[data-v-d569d450]{margin-right:%?20?%}.mb20[data-v-d569d450]{margin-bottom:%?20?%}.mrl20[data-v-d569d450]{margin:0 %?20?%}.w50[data-v-d569d450]{width:50%}.w100[data-v-d569d450]{width:100%}.flex[data-v-d569d450]{display:-webkit-box;display:-webkit-flex;display:flex}[data-v-d569d450]::-webkit-scrollbar{width:0;height:0;display:none}.classBox[data-v-d569d450]{width:%?460?%;height:auto;background-color:#fff;text-align:center;border-radius:%?10?%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.classTit[data-v-d569d450]{font-size:%?30?%;height:%?84?%;line-height:%?84?%;border-bottom:1px solid #d1d1d1}.classItem[data-v-d569d450]{height:%?70?%;line-height:%?86?%;text-align:left;font-size:%?34?%;color:#666;border-bottom:1px dotted #d1d1d1}.cancel[data-v-d569d450]{color:#999;border-top:1px solid #d1d1d1}',""]),t.exports=e},"1bda":function(t,e,a){"use strict";var r=a("3014"),i=a.n(r);i.a},3014:function(t,e,a){var r=a("5043");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("0ec095de",r,!0,{sourceMap:!1,shadowMode:!1})},3448:function(t,e,a){"use strict";a.r(e);var r=a("53c9"),i=a("547c");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("593d");var o,d=a("f0c5"),c=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"d569d450",null,!1,r["a"],o);e["default"]=c.exports},"355c":function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tabbar"},[t._l(t.tabbar,(function(e,r){return a("v-uni-view",{key:r,staticClass:"tabItem",attrs:{"data-path":e.path},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSwitch.apply(void 0,arguments)}}},[e.center?t._e():a("v-uni-view",{},[a("v-uni-image",{attrs:{src:t.checked!=r||e.center?e.icon:e.selectIcon,mode:""}}),a("v-uni-view",{class:t.checked!=r||e.center?"":"act"},[t._v(t._s(e.text))])],1),e.center?a("v-uni-view",{},[a("v-uni-view",{staticClass:"tabCenter"},[a("v-uni-image",{attrs:{src:e.icon,mode:""}})],1)],1):t._e()],1)})),t.maskClass?a("lk-mastclass",{on:{cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}}):t._e()],2)},n=[]},"3fa9":function(t,e,a){var r=a("1797");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("3c42cc16",r,!0,{sourceMap:!1,shadowMode:!1})},5043:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".tabbar[data-v-646b5290]{width:100%;height:%?120?%;position:fixed;bottom:0;left:0;z-index:998;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;-webkit-justify-content:space-around;justify-content:space-around;padding:%?10?%;-webkit-box-shadow:0 %?-4?% %?4?% %?4?% #f1f1f1;box-shadow:0 %?-4?% %?4?% %?4?% #f1f1f1}.tabItem[data-v-646b5290]{width:20%;font-size:%?26?%;text-align:center}.tabItem uni-image[data-v-646b5290]{display:block;width:%?56?%;height:%?56?%;margin:0 auto %?6?%}.act[data-v-646b5290]{color:#ffbb12}.tabCenter[data-v-646b5290]{width:%?110?%;height:%?110?%;-webkit-transform:translateY(-40%);transform:translateY(-40%);padding:%?8?%;border-radius:50%;overflow:hidden;background-color:#fff;margin:0 auto;-webkit-box-shadow:0 %?-4?% %?4?% %?4?% #f1f1f1;box-shadow:0 %?-4?% %?4?% %?4?% #f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tabCenter uni-image[data-v-646b5290]{display:block;width:%?90?%;height:%?90?%;margin-top:%?10?%;margin-left:%?-5?%}",""]),t.exports=e},"521f":function(t,e,a){"use strict";var r=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;r(a("f9ea"));var i=uni.createInnerAudioContext(),n={data:function(){return{audioId:""}},props:{forumList:{type:Array,default:function(){return[]}}},methods:{audioEvent:function(t){var e=this,a=t.currentTarget.dataset.id,r=t.currentTarget.dataset.url;e.audioId!=a?(i.destroy(),e.audioId=a,i.src=r,i.autoplay=!0):(e.audioId=0,i.destroy())},toPath:function(t){uni.navigateTo({url:t.currentTarget.dataset.path})}},onHide:function(){i.destroy()}};e.default=n},"53c9":function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"mask"},[a("v-uni-view",{staticClass:"classBox"},[a("v-uni-view",{staticClass:"classTit"},[t._v("选择分类")]),a("v-uni-view",{staticClass:"p20"},t._l(t.classArr,(function(e,r){return a("v-uni-view",{key:r,staticClass:"classItem",attrs:{"data-name":e.category_name,"data-id":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPath.apply(void 0,arguments)}}},[t._v(t._s(e.category_name))])})),1),a("v-uni-view",{staticClass:"classTit cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消发布")])],1)],1)},n=[]},"547c":function(t,e,a){"use strict";a.r(e);var r=a("ad1a"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},"55d3":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.blue[data-v-3086c296]{color:#007aff}.f28[data-v-3086c296]{font-size:%?28?%}.bcred[data-v-3086c296]{background-color:#fa5252!important}.bcf[data-v-3086c296]{background-color:#fff!important}.br1[data-v-3086c296]{border-right:%?1?% solid #f1f1f1}.p20[data-v-3086c296]{padding:%?20?%}.prl2[data-v-3086c296]{padding:0 %?20?%}.w20[data-v-3086c296]{width:20%}.mt20[data-v-3086c296]{margin-top:%?20?%}.mr20[data-v-3086c296]{margin-right:%?20?%}.mb20[data-v-3086c296]{margin-bottom:%?20?%}.mrl20[data-v-3086c296]{margin:0 %?20?%}.w50[data-v-3086c296]{width:50%}.w100[data-v-3086c296]{width:100%}.flex[data-v-3086c296]{display:-webkit-box;display:-webkit-flex;display:flex}[data-v-3086c296]::-webkit-scrollbar{width:0;height:0;display:none}.forumBox .forumItem[data-v-3086c296]{padding:%?20?%;border-radius:%?20?%;background-color:#fff;margin-bottom:%?10?%;overflow:hidden}.forumBox .forumItem[data-v-3086c296]:last-child{border:0}.forumBox .forumItem .forumUser[data-v-3086c296]{display:-webkit-box;display:-webkit-flex;display:flex}.forumBox .forumItem .forumUser uni-image[data-v-3086c296]{width:%?64?%;height:%?64?%;border-radius:50%;overflow:hidden;margin-right:%?20?%}.forumBox .forumItem .forumUser .forumUserInfo[data-v-3086c296]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.forumBox .forumItem .forumUser .forumUserInfo .forumUserName[data-v-3086c296]{font-size:%?30?%;font-weight:700}.forumBox .forumItem .forumUser .forumUserInfo .vipName[data-v-3086c296]{background-color:#dab710;color:#fff;font-size:%?24?%;margin-left:%?10?%;border-radius:%?50?%;padding:%?2?% %?14?%}.forumBox .forumItem .forumUser .forumUserInfo .forumUser[data-v-3086c296]{font-size:%?26?%;color:#666}.forumBox .forumItem .forumUser .forumUserInfo .forumUser uni-text[data-v-3086c296]{margin-right:%?6?%}.forumBox .forumItem .forumText[data-v-3086c296]{padding:%?20?% 0;line-height:%?46?%;color:#333}.forumBox .forumItem .recordBox[data-v-3086c296]{width:100%;margin-bottom:%?20?%;height:%?64?%;line-height:%?64?%}.forumBox .forumItem .recordBox .recordItem[data-v-3086c296]{width:40%;height:%?64?%;line-height:%?64?%;border-radius:%?50?%;background-color:#ffd43b;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:0 %?20?%}.forumBox .forumItem .recordBox .recordItem .recordItemArc1[data-v-3086c296]{width:0;height:0;border-radius:%?50?%;border:%?15?% solid #ffd43b;border-right-color:#fff}.forumBox .forumItem .recordBox .recordItem .recordItemArc2[data-v-3086c296]{width:%?16?%;height:%?28?%;border-radius:0 60% 60% 0;border-right:%?4?% solid #fff;margin-left:%?-6?%}.forumBox .forumItem .recordBox .recordItem .recordItemArc3[data-v-3086c296]{width:%?20?%;height:%?36?%;border-radius:0 60% 60% 0;border-right:%?4?% solid #fff;margin-left:%?-8?%}.forumBox .forumItem .recordArc2[data-v-3086c296]{-webkit-animation:record-data-v-3086c296 1s linear 0s infinite;animation:record-data-v-3086c296 1s linear 0s infinite}.forumBox .forumItem .recordArc3[data-v-3086c296]{-webkit-animation:record-data-v-3086c296 1s linear .5s infinite;animation:record-data-v-3086c296 1s linear .5s infinite}.forumBox .forumItem .forumImg[data-v-3086c296]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.forumBox .forumItem .forumImg uni-image[data-v-3086c296]{width:%?155?%;height:%?155?%;margin-right:%?14?%;margin-bottom:%?20?%}.forumBox .forumItem .forumImg uni-image[data-v-3086c296]:nth-child(4n){margin-right:0}.forumBox .forumItem .forumInfo[data-v-3086c296]{height:%?64?%;line-height:%?64?%;font-size:%?26?%;color:#666}.forumBox .forumItem .forumInfo uni-text[data-v-3086c296]{margin-right:%?10?%}@-webkit-keyframes record-data-v-3086c296{0%{opacity:1}100%{opacity:0}}@keyframes record-data-v-3086c296{0%{opacity:1}100%{opacity:0}}',""]),t.exports=e},"593d":function(t,e,a){"use strict";var r=a("3fa9"),i=a.n(r);i.a},7807:function(t,e,a){"use strict";a.r(e);var r=a("355c"),i=a("7e2d");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("1bda");var o,d=a("f0c5"),c=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"646b5290",null,!1,r["a"],o);e["default"]=c.exports},"7e2d":function(t,e,a){"use strict";a.r(e);var r=a("a583"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},"861d4":function(t,e,a){"use strict";var r=a("a3b7"),i=a.n(r);i.a},a3b7:function(t,e,a){var r=a("55d3");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("b68259f2",r,!0,{sourceMap:!1,shadowMode:!1})},a583:function(t,e,a){"use strict";var r=a("4ea4");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(a("3448")),n={data:function(){return{maskClass:!1,tabbar:[{center:!1,path:"../forum/index",text:"首页",icon:"../../static/tabber/home.png",selectIcon:"../../static/tabber/home-select.png"},{center:!1,path:"../att/index",text:"关注",icon:"../../static/tabber/att.png",selectIcon:"../../static/tabber/att-select.png"},{center:!0,path:"../issue/index",icon:"../../static/tabber/issue.png"},{center:!1,path:"../auth/index",text:"加V",icon:"../../static/tabber/auth.png",selectIcon:"../../static/tabber/auth-select.png"},{center:!1,path:"../mine/index",text:"我的",icon:"../../static/tabber/mine.png",selectIcon:"../../static/tabber/mine-select.png"}]}},props:{checked:{type:Number,default:2}},methods:{cancel:function(t){console.log(t),this.maskClass=t},toSwitch:function(t){var e=t.currentTarget.dataset.path;"../issue/index"!=e?uni.reLaunch({url:e}):this.maskClass=!0}},components:{lkMastclass:i.default}};e.default=n},abc4:function(t,e,a){"use strict";a.r(e);var r=a("13d6"),i=a("cbae");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("861d4");var o,d=a("f0c5"),c=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"3086c296",null,!1,r["a"],o);e["default"]=c.exports},ad1a:function(t,e,a){"use strict";var r=a("4ea4");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=r(a("1da1")),n={data:function(){return{classArr:[]}},mounted:function(){this.getClassData()},methods:{getClassData:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,e.next=3,a.$utils.request({url:"/index/bbs/getBbsCategory",method:"GET"}).then((function(t){console.log(t),a.classArr=t}));case 3:case"end":return e.stop()}}),e)})))()},cancel:function(){this.$emit("cancel",!1)},toPath:function(t){var e=t.currentTarget.dataset.name,a=t.currentTarget.dataset.id;uni.reLaunch({url:"/pages/issue/index?name=".concat(e,"&id=").concat(a)})}},components:{}};e.default=n},cbae:function(t,e,a){"use strict";a.r(e);var r=a("521f"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},f9ea:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=0,i=uni.createInnerAudioContext(),n=function(t,e,a){return r!=t?(i.destroy(),r=t,i.src=e,i.autoplay=!0):(r=0,i.pause()),a(r)},o=n;e.default=o}}]);