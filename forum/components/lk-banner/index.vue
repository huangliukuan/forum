<template>
	<view class="banner">
		<swiper class="swiper" 
		:autoplay="autoplay" 
		:indicator-dots="indicatorDots" 
		:circular="circular"  :style="{height:height+'rpx'}">
			<swiper-item class="swiperItem">
				<image src="https://i.loli.net/2021/05/28/928gMwqSA5LehNb.png" mode=""></image>
			</swiper-item>
			<swiper-item class="swiperItem">
				<image src="https://i.loli.net/2021/05/28/928gMwqSA5LehNb.png" mode=""></image>
			</swiper-item>
			<swiper-item class="swiperItem">
				<image src="https://i.loli.net/2021/05/28/928gMwqSA5LehNb.png" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			autoplay: {
				type: Boolean,
				default: false
			},
			circular:{
				type: Boolean,
				default: false
			},
			height:{
				type:Number,
				default:280
			},
			indicatorDots: {
				type: Boolean,
				default: false
			},
		}
	}
</script>

<style scoped lang="scss">
	.banner{
		width: 100%;
		.swiperItem{
			width: 100%;
			height: 100%;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
