<template>
	<view class="user">
		<view class="userBox">
			<image src="../../static/logo.png" mode=""></image>
			<view class="userItem">
				<view class="username">昵称</view>
				<view class="certification">未实名认证</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.userBox {
		width: 100%;
		height: 200rpx;
		background-color: $uni-color-userbg;
		display: flex;
		align-items: center;
		padding: 20rpx 30rpx;
		color: #fff;
		image {
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
			overflow: hidden;
			margin-right: 20rpx;
		}
		.username{
			letter-spacing: 6rpx;
		}
		.certification{
			font-size: 24rpx;
			padding: 6rpx 20rpx;
			border-radius: 50rpx;
			background-color: #fd7e14;
			margin-top: 10rpx;
		}
	}
</style>
