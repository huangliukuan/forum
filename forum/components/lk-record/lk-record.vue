<template>
	<view class="mask">
		<view class="maskBox">
			<view class="start" v-if="isRecord == 0">
				<view  @click="startRecord">
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
				<view class="" v-if="isPlay == 0"  @click="startPlay">
					<image class="maskImg" src="../../static/play.png" mode=""></image>
					<view class="mb20">点击播放</view>
				</view>
				<view class="" v-if="isPlay == 1" @click="endPlay">
					<image class="maskImg" src="../../static/playing.png" mode=""></image>
					<view class="mb20">播放中...点击停止</view>
				</view>
				<view class=""  v-if="isPlay == 2">
					<image class="maskImg" src="../../static/playing.png" mode=""></image>
					<view class="mb20">播放结束</view>
				</view>
				<view class="maskBtn">
					<view class="w50 br1" @click="recordHide">取消</view>
					<view class="w50 blue">提交</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isRecord:0,
				isPlay:0,
			}
		},
		methods:{
			// 开始录音
			startRecord(){
				this.isRecord = 1;
			},
			// 结束录音
			endRecord(){
				this.isRecord = 2;
			},
			// 开始播放
			startPlay(){
				this.isPlay = 1;
			},
			// 结束播放
			endPlay(){
				this.isPlay = 2;
			},
			recordHide(){
				this.$emit("recordHide",false)
			}
		},
		components:{
			
		}
	}
</script>

<style scoped lang="scss">
	.maskBox{
		width: 70%;
		height: auto;
		background-color: #fff;
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%,-50%);
		border-radius: 10rpx;
		text-align: center;
		overflow: hidden;
	}
	
	.maskImg{
		width: 120rpx;
		height: 120rpx;
		margin: 20rpx 0;
	}
	
	.cancel{
		height: 84rpx;
		line-height: 84rpx;
		background-color: #d1d1d1;
		margin-top: 10rpx;
	}
	
	.maskBtn{
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
