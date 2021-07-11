<template>
	<view class="content">
		<view class="p20 bannerBox">
			<lk-banner class="banner" :autoplay="true" :circular="true" :height="320"></lk-banner>
		</view>
		<view class="classBox">
			<view class="classFirst">
				<view class="classItem" @click="toPath"   data-url="/pages/forum/index">
					<image class="tImg" src="../../static/logo.png" mode=""></image>
					<view class="txt">论坛论坛</view>
				</view>
				<view class="classItem" @click="toPath"   data-url="/pages/apply/index">
					<image class="tImg" src="../../static/logo.png" mode=""></image>
					<view class="txt">驾校报名</view>
				</view>
				<view class="classItem" @click="toPath"   data-url="/pages/apply/index">
					<image class="tImg" src="../../static/logo.png" mode=""></image>
					<view class="txt">专升本</view>
				</view>
			</view>
		</view>


		<view class="classBox">
			<view class="classTop">
				<view class="classTit">第一类</view>
				<view class="iconfont arrow"></view>
			</view>
			<view class="classFirst">
				<view class="classItem">
					<image class="bImg" src="../../static/logo.png" mode=""></image>
					<view class="txt">论坛论坛</view>
				</view>
				<view class="classItem">
					<image class="bImg" src="../../static/logo.png" mode=""></image>
					<view class="txt">论坛论坛</view>
				</view>
				<view class="classItem">
					<image class="bImg" src="../../static/logo.png" mode=""></image>
					<view class="txt">论坛论坛</view>
				</view>
				<view class="classItem">
					<image class="bImg" src="../../static/logo.png" mode=""></image>
					<view class="txt">论坛论坛</view>
				</view>
				<view class="classItem">
					<image class="bImg" src="../../static/logo.png" mode=""></image>
					<view class="txt">论坛论坛</view>
				</view>
				<view class="classItem">
					<image class="bImg" src="../../static/logo.png" mode=""></image>
					<view class="txt">论坛论坛</view>
				</view>
				<view class="classItem">
					<image class="bImg" src="../../static/logo.png" mode=""></image>
					<view class="txt">论坛论坛</view>
				</view>
				<view class="classItem">
					<image class="bImg" src="../../static/logo.png" mode=""></image>
					<view class="txt">论坛论坛</view>
				</view>
				
			</view>
		</view>

	</view>
</template>

<script>
	import lkBanner from "../../components/lk-banner/index.vue"

	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			
		},
		methods: {
			toPath(e){
				uni.navigateTo({
					url:e.currentTarget.dataset.url
				})
			},
		
			
		},
		components: {
			lkBanner
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.content {
			width: 100%;
			min-height: 100%;
			background-color: $uni-bg-color-grey;
			color: #333;
			.bannerBox {
				background-color: $uni-bg-color;

				.banner {
					border-radius: $uni-border-radius-lg;
					overflow: hidden;
				}
			}

			.classBox {
				width: 95%;
				height: auto;
				background-color: $uni-bg-color;
				border-radius: 20rpx;
				padding: 0 20rpx 20rpx;
				margin: 0 auto;
				margin-top: 20rpx;

				.classFirst {
					display: flex;
					flex-wrap: wrap;

					.classItem {
						width: 20%;
						text-align: center;
						margin-top: 20rpx;
						font-size: 28rpx;

						.tImg {
							width: 100rpx;
							height: 100rpx;
							border-radius: 50%;
							overflow: hidden;
						}
						.bImg{
							width: 80rpx;
							height: 80rpx;
							border-radius: 20%;
							overflow: hidden;
						}
					}
				}

				.classTop {
					height: 84rpx;
					line-height: 64rpx;
					display: flex;
					justify-content: space-between;
					padding-top: 20rpx;
					border-bottom: 1rpx solid #e6e6e6;
				}
			}

		}
	}
</style>
