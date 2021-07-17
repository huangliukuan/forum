<template>
	<view class="mask">
		<view class="maskBox">
			<view class="start" v-if="isRecord == 0">
				<view @click="startRecord">
					<image class="maskImg" src="../../static/recording.png" mode=""></image>
					<view class="">点击开始录音</view>
				</view>
				<view class="cancel" @click="recordHide">取消</view>
			</view>
			<view class="processing" v-if="isRecord == 1" @click="endRecord">
				<image class="maskImg" src="../../static/recording.png" mode=""></image>
				<view class="mb20">正在录音，点击停止</view>
			</view>
			<view class="end" v-if="isRecord == 2">
				<view class="" v-if="isPlay == 0" @click="startPlay">
					<image class="maskImg" src="../../static/play.png" mode=""></image>
					<view class="mb20">点击播放</view>
				</view>
				<view class="" v-if="isPlay == 1" @click="endPlay">
					<image class="maskImg" src="../../static/playing.png" mode=""></image>
					<view class="mb20">播放中...点击停止</view>
				</view>
				<view class="" v-if="isPlay == 2">
					<image class="maskImg" src="../../static/playing.png" mode=""></image>
					<view class="mb20">播放结束</view>
				</view>
				<view class="maskBtn">
					<view class="w50 br1" @click="recordHide">取消</view>
					<view class="w50 blue" @click="upRecord">提交</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import wxjs from "weixin-js-sdk";
	export default {
		data() {
			return {
				isRecord: 0,
				isPlay: 0,
				recordId: '',
				config:{},
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			// 上传
			upRecord() {
				let _this = this;
				wxjs.ready(res=>{
					wxjs.uploadVoice({
						localId: _this.recordId, // 需要上传的音频的本地ID，由stopRecord接口获得
						isShowProgressTips: 1, // 默认为1，显示进度提示
						success: function(res) {
							// 返回音频的服务器端ID
							_this.$emit('recording', res.serverId);
							_this.$emit("recordHide", false)
						}
					});
				})
					
			},
			init(){
				let _this = this;
				_this.$utils.request({
					url: '/index/wechat/getWechatJssdkSign',
					data: {
						url: window.location.href
					}
				}).then(res=>{
					_this.config = res;
					wxjs.config({
						debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
						appId: res.appId, // 必填，公众号的唯一标识
						timestamp: res.timestamp, // 必填，生成签名的时间戳
						nonceStr: res.nonceStr, // 必填，生成签名的随机串
						signature: res.signature, // 必填，签名
						jsApiList: res.jsApiList
					});
					wxjs.error(err => {
						console.log('config fail:', err);
					});
				
					
				})
			},
			// 开始录音
			startRecord() {
				this.isRecord = 1;
				wxjs.ready(err=>{
					wxjs.startRecord()
				})
			},
			// 结束录音
			endRecord() {
				let _this = this;
				_this.isRecord = 2;
				wxjs.ready(res=>{
					wxjs.stopRecord({
						success: function(res) {
							_this.recordId = res.localId;
						}
					});
				})
			

			},
			// 开始播放
			startPlay() {
				let _this = this;
				_this.isPlay = 1;
				wxjs.ready(res=>{
					wxjs.playVoice({
						localId: _this.recordId // 需要播放的音频的本地ID，由stopRecord接口获得
					});
				})
				
			},
			// 结束播放
			endPlay() {
				let _this = this;
				_this.isPlay = 2;
				wxjs.ready(res=>{
					wx.stopVoice({
						localId: _this.recordId // 需要停止的音频的本地ID，由stopRecord接口获得
					});
				})
				
			},
			recordHide() {
				this.$emit("recordHide", false)
			}
		},
		components: {

		}
	}
</script>

<style scoped lang="scss">
	.maskBox {
		width: 70%;
		height: auto;
		background-color: #fff;
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 10rpx;
		text-align: center;
		overflow: hidden;
	}

	.maskImg {
		width: 120rpx;
		height: 120rpx;
		margin: 20rpx 0;
	}

	.cancel {
		height: 84rpx;
		line-height: 84rpx;
		background-color: #d1d1d1;
		margin-top: 10rpx;
	}

	.maskBtn {
		width: 100%;
		height: 84rpx;
		line-height: 84rpx;
		display: flex;
		justify-content: space-between;
		text-align: center;
		border-top: 1rpx solid #F1F1F1;
		color: #333;
	}



	.btn {
		width: 60%;
		height: 86rpx;
		line-height: 86rpx;
		padding: 0;
		border-radius: 10rpx;
		margin-top: 100rpx;
		margin-bottom: 20rpx;
		color: #666;
	}
</style>
