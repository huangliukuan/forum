<template>
	<view class="mask" @touchmove.stop.prevent="moveHandle" @click="closeImg">
		<view class="num"> {{idx+1}}/{{bigImg.length}} </view>
		<swiper style="height: 100vh;" :current='idx' @change="change">
			<swiper-item class="swiperItem"  v-for="(item,index) in bigImg" :key="index">
				<image :src="item"  mode="aspectFit"></image>
			</swiper-item>
		</swiper>
	</view>
</template>


<script>
	export default{
		data(){
			return{
				idx:0
			}
		},
		props:{
			imgIndex:{
				type:Number,
				default:0,
			},
			bigImg:{
				type:Array,
				default:()=>{
					return []
				}
			}
		},
		watch:{
			imgIndex(e){
				this.idx = e;
			},
		},
		methods:{
			moveHandle() {},
			closeImg(){
				this.$emit('closeImg',false)
			},
			change(e){
				this.idx = e.detail.current;
			}
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
		z-index: 100;
		color: #fff;
	}
	
</style>
