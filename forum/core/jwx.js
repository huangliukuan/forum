var jweixin = require('jweixin-module')

import utils from './util.js';


var recordId = '',
	startRecord,
	stopRecord,
	playVoice,
	stopVoice,
	uploadVoice;

utils.request({
	url: '/index/wechat/getWechatJssdkSign',
	data: {
		url: window.location.href
	}
}).then(res => {
	jweixin.config({
		debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: res.appId, // 必填，公众号的唯一标识
		timestamp: res.timestamp, // 必填，生成签名的时间戳
		nonceStr: res.nonceStr, // 必填，生成签名的随机串
		signature: res.signature, // 必填，签名
		jsApiList: ['startRecord', 'stopRecord', 'playVoice', 'stopVoice', 'uploadVoice']
	});
	jweixin.ready(res => {
		startRecord = function() {
			return jweixin.startRecord()
		};
		stopRecord = function() {
		 	return jweixin.stopRecord({
				success: function(res) {
					recordId = res.localId;
				}
			});
		};
		playVoice = function() {
			return jweixin.playVoice({
				localId: recordId // 需要播放的音频的本地ID，由stopRecord接口获得
			});
		};
		stopVoice = function() {
			return jweixin.stopVoice({
				localId: recordId // 需要停止的音频的本地ID，由stopRecord接口获得
			});
		};
		uploadVoice = function(e) {
			return jweixin.uploadVoice({
				localId: recordId, // 需要上传的音频的本地ID，由stopRecord接口获得
				isShowProgressTips: 1, // 默认为1，显示进度提示
				success: function(res) {
					// 返回音频的服务器端ID
					return e(res.serverId)
				}
			});
		}
	});
	jweixin.error(err => {
		console.log('config fail:', err);
	});
})



export default {
	startRecord,
	stopRecord,
	playVoice,
	stopVoice,
	uploadVoice,
};

// async function configWeiXin(callback) {

//     let [errConfig, resConfig] = await api.wxConfig(window.location.href);
//     if (resConfig) {
//         let apiList = [ // 可能需要用到的能力
//             'onMenuShareAppMessage',
//             'onMenuShareTimeline',
//             'hideOptionMenu',
//             'showOptionMenu',
//             'chooseWXPay'
//         ];

//         let info = {
//             debug: true, // 调试，发布的时候改为false
//             appId: 'appid',
//             nonceStr: resConfig.noncestr,
//             timestamp: resConfig.timestamp,
//             signature: resConfig.sign,
//             jsApiList: apiList
//         };
//         jweixin.config(info);
//         jweixin.error(err => {
//             console.log('config fail:', err);
//         });

//         jweixin.ready(res => {
//             if (callback) callback(jweixin); // 配置成功
//         });
//     }
// }
