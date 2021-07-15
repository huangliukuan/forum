<template>
	<view class="banner">
		<swiper class="swiper" 
		:autoplay="autoplay" 
		:indicator-dots="indicatorDots" 
		:circular="circular"  :style="{height:height+'rpx'}">
			<swiper-item class="swiperItem" v-for="(item,index) in banners" :key="index">
				<image :src="item" mode=""></image>
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
			banner:{
				type:Array,
				default:()=>{
					return []
				}
			}
		},
		data(){
			return{
				banners:[],
			}
		},
		watch:{
			banner(e){
				this.banners = e;
			}
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
