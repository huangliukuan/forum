<template>
	<view class="myinfo">
		<lk-user></lk-user>

		<view class="prompt">提示：您正在修改昵称、性别、头像，修改后您在发帖、评论将以新的个人信息进行展示，本次修改将消耗0积分。</view>

		<view class="iptTit">昵称</view>
		<view class="prl2">
			<input class="duties" type="text" value=""  />
		</view>
		
		<view class="iptTit">性别</view>
		<view class="prl2">
			<input class="duties" type="text" value=""  />
		</view>
		<view class="iptTit">头像上传</view>
		<lk-upimg class="prl2"></lk-upimg>
		
		<button class="btn" type="default">确认提交</button>
		

	</view>
</template>

<script>
	import lkUser from "../../components/lk-user/lk-user.vue"
	import lkUpimg from '../../components/lk-upimg/lk-upimg.vue'

	export default {
		components: {
			lkUser,
			lkUpimg
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.myinfo {
			width: 100%;
			min-height: 100%;
			padding-bottom: 140rpx;
			background-color: $uni-bg-color;

			.prompt {
				line-height: 46rpx;
				font-size: 30rpx;
				padding: 40rpx 20rpx;
			}
			.iptTit{
				height: 84rpx;
				line-height: 84rpx;
				padding: 0 20rpx;
			}
			.duties{
				background-color: #f1f1f1;
				padding: 10rpx;
				font-size: 26rpx;
				border-radius: 8rpx;
			}
			.btn{
				width: 60%;
				height: 86rpx;
				line-height: 86rpx;
				padding: 0;
				border-radius: 10rpx;
				margin-top: 100rpx;
				color: #666;
			}
		}
	}
</style>
