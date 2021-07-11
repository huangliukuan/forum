<template>
	<view class="apply">
		<lk-banner :height="340" ></lk-banner>
		
		<view class="scrollBox">
			<image class="ggtb" src="../../static/caidan.png" mode=""></image>
			<view class="scrollItem"> 
			你好，你是谁你是啥你好，你是谁你是啥你好，你是谁你是啥你好，你是谁你是啥你好，你是谁你是啥
			</view>
		</view>
		
		<view class="classList">
			<view class="classItem classItem1" @click="toPath" data-path="/pages/form/index">
				<image src="../../static/logo.png" mode=""></image>
				<view class="">学生学车·预约登记</view>
			</view>
			<view class="classItem">
				<image src="../../static/logo.png" mode=""></image>
				<view class="">报考驾校·学车介绍</view>
			</view>
			<view class="classItem">
				<image src="../../static/logo.png" mode=""></image>
				<view class="">报考驾校·学车介绍</view>
			</view>
			<view class="classItem">
				<image src="../../static/logo.png" mode=""></image>
				<view class="">报考驾校·学车介绍</view>
			</view>
			<view class="classItem">
				<image src="../../static/logo.png" mode=""></image>
				<view class="">报考驾校·学车介绍</view>
			</view>
		</view>
	</view>
</template>

<script>
	import lkBanner from "../../components/lk-banner/index.vue"
	export default{
		data(){
			return{
				
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title:"分类"
			})
		},
		methods:{
			toPath(e){
				uni.navigateTo({
					url:e.currentTarget.dataset.path
				})
			},
		},
		components:{
			lkBanner
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body{
		height: 100%;
		.apply{
			width: 100%;
			min-height: 100%;
			background-color: #f1f1f1;
			
	
			
			.scrollBox{
				width: 100%;
				height: 64rpx;
				line-height: 64rpx;
				border-bottom: 1rpx solid #d1d1d1;
				position: relative;
				background-color: $uni-bg-color;
			}
			.ggtb{
				background-color: #fff;
				height: 50rpx;
				width: 50rpx;
				position: absolute;
			  top: 50%;
				transform: translate(0,-50%);
				z-index: 100;
			}
			
			.scrollItem{
				display: inline-block;
				white-space: nowrap;
				position: absolute;
				top: 0;
				animation: toLeft 15s linear infinite;
				font-size: 30rpx;
				color: #555555;
			}
			
			
			.classList{
				width: 100%;
				height: auto;
				display: flex;
				flex-wrap: wrap;
			}
			
			.classItem{
				width: 47%;
				height: auto;
				text-align: center;
				padding: 40rpx 0;
				margin-left: 2%;
				margin-top: 20rpx;
				border-radius: 20rpx;
				background-color: #FFFFFF;
				image{
					width: 96rpx;
					height: 96rpx;
				}
			}
			.classItem1{
			width: 96%;
			}
			
		}
	}
	
	
	
	@keyframes toLeft{
		0%{
			right: 0%;
			transform: translate(100%,0%);
		}
		100%{
			right: 100%;
			transform: translate(0%,0%);
		}
	}
	
</style>
