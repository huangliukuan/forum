(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myinfo-index"],{"016c":function(a,t,n){"use strict";n.r(t);var e=n("8e60"),i=n("4d4e");for(var r in i)"default"!==r&&function(a){n.d(t,a,(function(){return i[a]}))}(r);n("15ac");var c,d=n("f0c5"),o=Object(d["a"])(i["default"],e["b"],e["c"],!1,null,"33b07f7a",null,!1,e["a"],c);t["default"]=o.exports},"0729":function(a,t,n){a.exports=n.p+"static/img/shangchuan.bc58d42d.png"},"0aeb":function(a,t,n){"use strict";var e=n("bbcf"),i=n.n(e);i.a},"15ac":function(a,t,n){"use strict";var e=n("b5fa"),i=n.n(e);i.a},"278c":function(a,t,n){"use strict";var e=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=e(n("1da1")),r=e(n("016c")),c=e(n("d0bd")),d={components:{lkUser:r.default,lkUpimg:c.default},data:function(){return{nickName:"",avatar_img:[],genderArr:["男","女"],genderI:0,gender:"",userinfo:{}}},onShow:function(){var a=uni.getStorageSync("userinfo");this.userinfo=a,this.nickName=a.nickName,this.avatar_img.push(a.headimgurl),this.genderI=a.sex-1},methods:{inputName:function(a){this.nickName=a.detail.value},changeGender:function(a){this.genderI=a.detail.value},changeImg:function(a){this.avatar_img=a,console.log(a)},submit:function(){var a=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=a,t.next=3,n.$utils.request({url:"/index/user/updateUserInfo",method:"POST",data:{nickName:n.nickName,avatar_img:n.avatar_img,sex:n.genderI+1}}).then((function(a){uni.showToast({title:"修改成功！",icon:"none"}),uni.setStorageSync("userinfo",a.userInfo),uni.navigateBack()}));case 3:case"end":return t.stop()}}),t)})))()}}};t.default=d},"31b1":function(a,t,n){"use strict";var e=n("6434"),i=n.n(e);i.a},3731:function(a,t,n){"use strict";var e=n("4ea4");n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e(n("716f")),r=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){uni.uploadFile({url:i.default.url+"/index/upload/upload",filePath:a.filePath,name:"img",success:function(a){return a=JSON.parse(a.data),t(a)},fail:function(a){uni.showModal({title:"错误提示",content:a,showCancel:!1,confirmText:"我知道了",success:function(){}})}})}))},c=r;t.default=c},"4d4e":function(a,t,n){"use strict";n.r(t);var e=n("8a40"),i=n.n(e);for(var r in e)"default"!==r&&function(a){n.d(t,a,(function(){return e[a]}))}(r);t["default"]=i.a},"520b":function(a,t,n){a.exports=n.p+"static/img/close1.a2384b25.png"},5890:function(a,t,n){"use strict";n.r(t);var e=n("c304"),i=n.n(e);for(var r in e)"default"!==r&&function(a){n.d(t,a,(function(){return e[a]}))}(r);t["default"]=i.a},"5dd2":function(a,t,n){"use strict";n.r(t);var e=n("ea2e"),i=n("c921");for(var r in i)"default"!==r&&function(a){n.d(t,a,(function(){return i[a]}))}(r);n("31b1");var c,d=n("f0c5"),o=Object(d["a"])(i["default"],e["b"],e["c"],!1,null,"0c3cbb2f",null,!1,e["a"],c);t["default"]=o.exports},6434:function(a,t,n){var e=n("c5fb");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var i=n("4f06").default;i("e7209488",e,!0,{sourceMap:!1,shadowMode:!1})},"8a40":function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},props:{userinfo:{type:Object,default:function(){return{}}}},watch:{userinfo:function(a){this.userinfo=a}},mounted:function(){}};t.default=e},"8e3e":function(a,t,n){"use strict";var e;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return e}));var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"upimgBox"},[a._l(a.imgArr,(function(t,i){return e("v-uni-view",{key:i,staticClass:"imgItem"},[e("v-uni-image",{staticClass:"close",attrs:{src:n("520b"),mode:""},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.delImg(i)}}}),e("v-uni-image",{attrs:{src:t,mode:""}})],1)})),e("v-uni-view",{staticClass:"addImg",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.addImg.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:n("0729"),mode:""}})],1)],2)},r=[]},"8e60":function(a,t,n){"use strict";var e;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return e}));var i=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-uni-view",{staticClass:"user"},[n("v-uni-view",{staticClass:"userBox"},[n("v-uni-image",{attrs:{src:a.userinfo.headimgurl,mode:""}}),n("v-uni-view",{staticClass:"userItem"},[n("v-uni-view",{staticClass:"username"},[a._v(a._s(a.userinfo.nickName))]),n("v-uni-text",{staticClass:"certification"},[a._v(a._s(a.userinfo.auth_name?a.userinfo.auth_name:"未实名认证"))])],1)],1)],1)},r=[]},b4b8:function(a,t,n){var e=n("24fb");t=e(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.blue[data-v-33b07f7a]{color:#007aff}.f28[data-v-33b07f7a]{font-size:%?28?%}.bcred[data-v-33b07f7a]{background-color:#fa5252!important}.bcf[data-v-33b07f7a]{background-color:#fff!important}.br1[data-v-33b07f7a]{border-right:%?1?% solid #f1f1f1}.p20[data-v-33b07f7a]{padding:%?20?%}.prl2[data-v-33b07f7a]{padding:0 %?20?%}.w20[data-v-33b07f7a]{width:20%}.mt20[data-v-33b07f7a]{margin-top:%?20?%}.mr20[data-v-33b07f7a]{margin-right:%?20?%}.mb20[data-v-33b07f7a]{margin-bottom:%?20?%}.mrl20[data-v-33b07f7a]{margin:0 %?20?%}.w50[data-v-33b07f7a]{width:50%}.w100[data-v-33b07f7a]{width:100%}.flex[data-v-33b07f7a]{display:-webkit-box;display:-webkit-flex;display:flex}[data-v-33b07f7a]::-webkit-scrollbar{width:0;height:0;display:none}.userBox[data-v-33b07f7a]{width:100%;height:%?200?%;background-color:#4dabf7;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;color:#fff}.userBox uni-image[data-v-33b07f7a]{width:%?120?%;height:%?120?%;border-radius:50%;overflow:hidden;margin-right:%?20?%}.userBox .username[data-v-33b07f7a]{letter-spacing:%?6?%}.userBox .certification[data-v-33b07f7a]{font-size:%?24?%;padding:%?6?% %?20?%;border-radius:%?50?%;background-color:#fd7e14;margin-top:%?10?%}',""]),a.exports=t},b5fa:function(a,t,n){var e=n("b4b8");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var i=n("4f06").default;i("87a627d6",e,!0,{sourceMap:!1,shadowMode:!1})},bbcf:function(a,t,n){var e=n("f033");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var i=n("4f06").default;i("183bb2fc",e,!0,{sourceMap:!1,shadowMode:!1})},c304:function(a,t,n){"use strict";var e=n("4ea4");n("4160"),n("a434"),n("a9e3"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e(n("3731")),r={data:function(){return{}},props:{imgArr:{type:Array,default:function(){return[]}},count:{type:Number,default:1}},methods:{addImg:function(){var a=this;uni.chooseImage({count:a.count,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){uni.showLoading({title:"上传中...",mask:!0}),t.tempFilePaths.forEach((function(n,e){(0,i.default)({filePath:n}).then((function(n){if(a.count>1){var i=a.imgArr;i.push(n.data),a.imgArr=i,a.$emit("changeImg",i),e>=t.tempFilePaths.length-1&&uni.hideLoading()}else{var r=new Array;r.push(n.data),a.imgArr.splice(0,1,n.data),a.$emit("changeImg",r),uni.hideLoading()}}))}))}})},delImg:function(a){this.imgArr.splice(a,1),this.$emit("changeImg",this.imgArr)}}};t.default=r},c5fb:function(a,t,n){var e=n("24fb");t=e(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.blue[data-v-0c3cbb2f]{color:#007aff}.f28[data-v-0c3cbb2f]{font-size:%?28?%}.bcred[data-v-0c3cbb2f]{background-color:#fa5252!important}.bcf[data-v-0c3cbb2f]{background-color:#fff!important}.br1[data-v-0c3cbb2f]{border-right:%?1?% solid #f1f1f1}.p20[data-v-0c3cbb2f]{padding:%?20?%}.prl2[data-v-0c3cbb2f]{padding:0 %?20?%}.w20[data-v-0c3cbb2f]{width:20%}.mt20[data-v-0c3cbb2f]{margin-top:%?20?%}.mr20[data-v-0c3cbb2f]{margin-right:%?20?%}.mb20[data-v-0c3cbb2f]{margin-bottom:%?20?%}.mrl20[data-v-0c3cbb2f]{margin:0 %?20?%}.w50[data-v-0c3cbb2f]{width:50%}.w100[data-v-0c3cbb2f]{width:100%}.flex[data-v-0c3cbb2f]{display:-webkit-box;display:-webkit-flex;display:flex}[data-v-0c3cbb2f]::-webkit-scrollbar{width:0;height:0;display:none}uni-page-body[data-v-0c3cbb2f]{height:100%}uni-page-body .myinfo[data-v-0c3cbb2f]{width:100%;min-height:100%;padding-bottom:%?140?%;background-color:#fff}uni-page-body .myinfo .prompt[data-v-0c3cbb2f]{line-height:%?46?%;font-size:%?30?%;padding:%?40?% %?20?%}uni-page-body .myinfo .iptTit[data-v-0c3cbb2f]{height:%?84?%;line-height:%?84?%;padding:0 %?20?%}uni-page-body .myinfo .duties[data-v-0c3cbb2f]{background-color:#f1f1f1;padding:%?10?%;font-size:%?26?%;border-radius:%?8?%}uni-page-body .myinfo .btn[data-v-0c3cbb2f]{width:60%;height:%?86?%;line-height:%?86?%;padding:0;border-radius:%?10?%;margin-top:%?100?%;color:#666}',""]),a.exports=t},c921:function(a,t,n){"use strict";n.r(t);var e=n("278c"),i=n.n(e);for(var r in e)"default"!==r&&function(a){n.d(t,a,(function(){return e[a]}))}(r);t["default"]=i.a},d0bd:function(a,t,n){"use strict";n.r(t);var e=n("8e3e"),i=n("5890");for(var r in i)"default"!==r&&function(a){n.d(t,a,(function(){return i[a]}))}(r);n("0aeb");var c,d=n("f0c5"),o=Object(d["a"])(i["default"],e["b"],e["c"],!1,null,"41ccd89a",null,!1,e["a"],c);t["default"]=o.exports},ea2e:function(a,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return e}));var e={lkUser:n("016c").default,lkUpimg:n("d0bd").default},i=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-uni-view",{staticClass:"myinfo"},[n("lk-user",{attrs:{userinfo:a.userinfo}}),n("v-uni-view",{staticClass:"prompt"},[a._v("提示：您正在修改昵称、性别、头像，修改后您在发帖、评论将以新的个人信息进行展示，本次修改将消耗0积分。")]),n("v-uni-view",{staticClass:"iptTit"},[a._v("昵称")]),n("v-uni-view",{staticClass:"prl2"},[n("v-uni-input",{staticClass:"duties",attrs:{type:"text",value:a.nickName},on:{input:function(t){arguments[0]=t=a.$handleEvent(t),a.inputName.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"iptTit"},[a._v("性别")]),n("v-uni-view",{staticClass:"prl2"},[n("v-uni-picker",{attrs:{range:a.genderArr,value:a.genderI},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.changeGender.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"duties"},[a._v(a._s(a.genderArr[a.genderI]))])],1)],1),n("v-uni-view",{staticClass:"iptTit"},[a._v("头像上传")]),n("lk-upimg",{staticClass:"prl2",attrs:{imgArr:a.avatar_img,count:1},on:{changeImg:function(t){arguments[0]=t=a.$handleEvent(t),a.changeImg.apply(void 0,arguments)}}}),n("v-uni-button",{staticClass:"btn",attrs:{type:"default"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.submit.apply(void 0,arguments)}}},[a._v("确认提交")])],1)},r=[]},f033:function(a,t,n){var e=n("24fb");t=e(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.blue[data-v-41ccd89a]{color:#007aff}.f28[data-v-41ccd89a]{font-size:%?28?%}.bcred[data-v-41ccd89a]{background-color:#fa5252!important}.bcf[data-v-41ccd89a]{background-color:#fff!important}.br1[data-v-41ccd89a]{border-right:%?1?% solid #f1f1f1}.p20[data-v-41ccd89a]{padding:%?20?%}.prl2[data-v-41ccd89a]{padding:0 %?20?%}.w20[data-v-41ccd89a]{width:20%}.mt20[data-v-41ccd89a]{margin-top:%?20?%}.mr20[data-v-41ccd89a]{margin-right:%?20?%}.mb20[data-v-41ccd89a]{margin-bottom:%?20?%}.mrl20[data-v-41ccd89a]{margin:0 %?20?%}.w50[data-v-41ccd89a]{width:50%}.w100[data-v-41ccd89a]{width:100%}.flex[data-v-41ccd89a]{display:-webkit-box;display:-webkit-flex;display:flex}[data-v-41ccd89a]::-webkit-scrollbar{width:0;height:0;display:none}.upimgBox[data-v-41ccd89a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.addImg[data-v-41ccd89a],\r\n.imgItem[data-v-41ccd89a]{width:22%;height:%?160?%;line-height:%?160?%;position:relative;margin-top:%?20?%;margin-right:%?20?%}.addImg[data-v-41ccd89a]:nth-child(4n),\r\n.imgItem[data-v-41ccd89a]:nth-child(4n){margin-right:0}.addImg uni-image[data-v-41ccd89a],\r\n.imgItem uni-image[data-v-41ccd89a]{width:100%;height:100%;border-radius:%?10?%;overflow:hidden}.addImg .close[data-v-41ccd89a],\r\n.imgItem .close[data-v-41ccd89a]{width:%?46?%;height:%?46?%;position:absolute;z-index:1;top:0;right:0;-webkit-transform:translate(40%,-40%);transform:translate(40%,-40%)}.addImg[data-v-41ccd89a]{margin-right:0;border-radius:%?10?%;font-size:%?56?%;font-weight:700;overflow:hidden;background-color:#f1f1f1;color:#999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.addImg uni-image[data-v-41ccd89a]{width:%?115?%;height:%?100?%}',""]),a.exports=t}}]);