<template>
	<view class="auth">
		<lk-user></lk-user>

		<view class="prompt">您好，请填写以下认证资料，管理员将在3个工作日内完成审核。认证成功后，您在发帖、评论时将会加v显示。如您在发帖时不想显示个人认证说明，请将发帖昵称改为 某个同学
			即可。如您已认证，重新提交之前的认证将会取消。</view>

		<view class="iptTit">认证说明</view>
		<input type="text" value="" placeholder="例如:学生会会长" />
		<view class="iptTit">认证说明</view>
		
		<lk-upimg></lk-upimg>
		
		<lk-tabbar :checked="3"></lk-tabbar>
	</view>
</template>

<script>
	import lkTabbar from '../../components/lk-tabbar/lk-tabbar.vue'
	import lkUser from "../../components/lk-user/lk-user.vue"
	import lkUpimg from '../../components/lk-upimg/lk-upimg.vue'

	export default {
		components: {
			lkTabbar,
			lkUser,
			lkUpimg
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.auth {
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
				height: 64rpx;
				line-height: 64rpx;
				padding: 0 20rpx;
			}
		}
	}
</style>
