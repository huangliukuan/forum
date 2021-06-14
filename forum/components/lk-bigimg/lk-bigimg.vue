<template>
	<view class="mask" @touchmove.stop.prevent="moveHandle">
		<view class="num"> 1/2 </view>
		<swiper style="height: 100vh;">
			<swiper-item class="swiperItem">
				<image src="https://i.loli.net/2021/05/28/928gMwqSA5LehNb.png" mode="aspectFit"></image>
			</swiper-item>
		</swiper>
	</view>
</template>


<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			moveHandle() {}
		},
		components:{
			
		}
	}
</script>

<style scoped lang="scss">
	.mask{
		background-color: #333;
	}
	.swiperItem{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	
		image{
			width: 100%;
			height: 100%;
		}
	}
	.num{
		position: absolute;
		top: 3%;
		left: 50%;
		transform: translate(-50%,0);
		color: #fff;
	}
	
</style>
