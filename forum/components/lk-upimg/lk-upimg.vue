<template>
	<view class="upimgBox">
		<view class="imgItem">
			<image class="close"  src="../../static/close1.png" mode=""></image>
			<image src="../../static/logo.png" mode=""></image>
		</view>
		<view class="addImg" >
			<image src="../../static/shangchuan.png" mode=""></image>
		</view>
	</view>
</template>

<script>

</script>

<style scoped lang="scss">
	.upimgBox {
		display: flex;
		flex-wrap: wrap;
		// padding: 0 20rpx;
	}
	.addImg,
	.imgItem {
		width: 22%;
		height: 160rpx;
		line-height: 160rpx;
		position: relative;
	
		margin-top: 20rpx;
		margin-right: 20rpx;
	
		&:nth-child(4n) {
			margin-right: 0;
		}
	
		image {
			width: 100%;
			height: 100%;
			border-radius: 10rpx;
			overflow: hidden;
		}
	
		.close {
			width: 46rpx;
			height: 46rpx;
			position: absolute;
			z-index: 1;
			top: 0;
			right: 0;
			transform: translate(40%, -40%);
		}
	}
	
	.addImg {
		margin-right: 0;
		border-radius: 10rpx;
		font-size: 56rpx;
		font-weight: bold;
		overflow: hidden;
		background-color: #f1f1f1;
		color: #999;
		display: flex;
		align-items: center;
		justify-content: center;
		image{
			width: 115rpx;
			height: 100rpx;
		}
	}
</style>
