<template>
	<view class="forum">
		<view class="p20 bannerBox">
			<lk-banner class="banner" :autoplay="true" :circular="true" :height="320"></lk-banner>
		</view>
		<view class="classBox">
			<view class="classFirst">
				<view class="classItem" @click="toPath"   data-url="../forum/index">
					<image class="tImg" src="../../static/logo.png" mode=""></image>
					<view class="txt">心情吐槽</view>
				</view>
				<view class="classItem">
					<image class="tImg" src="../../static/logo.png" mode=""></image>
					<view class="txt">实物招领</view>
				</view>
				<view class="classItem">
					<image class="tImg" src="../../static/logo.png" mode=""></image>
					<view class="txt">卖室友</view>
				</view>
			</view>
		</view>
		<view class="classSecond">
			<view class="mr20 active">最新</view>
			<view class="mr20">热门</view>
			<view class="mr20">新评</view>
		</view>
		
		<view class="issueBox">
			<lk-forum></lk-forum>
		</view>
		
		<lk-tabbar :checked="0"></lk-tabbar>
	</view>
</template>

<script>
	import lkTabbar from '../../components/lk-tabbar/lk-tabbar.vue'
	import lkBanner from '../../components/lk-banner/index.vue'
	import lkForum from '../../components/lk-forum/lk-forum.vue'
	

	export default {
		components: {
			lkTabbar,
			lkBanner,
			lkForum
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;
		.forum {
			width: 100%;
			min-height: 100%;
			padding-bottom: 160rpx;
			background-color: $uni-bg-color-grey;
			.banner {
				border-radius: $uni-border-radius-lg;
				overflow: hidden;
			}
			.classBox {
				width: 100%;
				height: auto;
				background-color: $uni-bg-color;
				padding: 0 20rpx 20rpx;
				.classFirst {
					display: flex;
					flex-wrap: wrap;
					.classItem {
						width: 20%;
						text-align: center;
						margin-top: 20rpx;
						font-size: 28rpx;
						.tImg {
							width: 80rpx;
							height: 80rpx;
							border-radius: 50%;
							overflow: hidden;
						}
					}
				}
			}
			.classSecond{
				display: flex;
				font-size: 42rpx;
				font-weight: bold;
				color: #666;
				padding: 20rpx 20rpx 0;
				background-color: $uni-bg-color;
			}
			.active{
				color: #333;
				border-bottom: 5px solid #4dabf7;
				
			}
			.issueBox{
				margin-top: 20rpx;
			}
		}
	}
</style>
