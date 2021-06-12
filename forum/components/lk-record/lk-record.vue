<template>
	<view class="mask">
		<view class="maskBox">
			<view class="start" v-if="false">
				<image class="maskImg" src="../../static/recording.png" mode=""></image>
				<view class="">点击开始录音</view>
				<view class="cancel">取消</view>
			</view>
			<view class="processing" v-if="false">
				<image class="maskImg" src="../../static/recording.png" mode=""></image>
				<view class="mb20">正在录音，点击停止</view>
			</view>
			<view class="end" >
				<view class="" v-if="false">
					<image class="maskImg" src="../../static/play.png" mode=""></image>
					<view class="mb20">点击播放</view>
				</view>
				<view class="" v-if="false">
					<image class="maskImg" src="../../static/playing.png" mode=""></image>
					<view class="mb20">播放中...点击停止</view>
				</view>
				<view class="" >
					<image class="maskImg" src="../../static/playing.png" mode=""></image>
					<view class="mb20">播放结束</view>
				</view>
				<view class="maskBtn">
					<view class="w50 br1">取消</view>
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
				
			}
		},
		methods:{
			
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
