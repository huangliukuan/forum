<template>
	<view class="apply">
		<lk-banner :height="340" ></lk-banner>
		
		<view class="scrollBox">
			<view class="scrollItem"> 你好，你是谁你是啥你好，你是谁你是啥你好，你是谁你是啥你好，你是谁你是啥你好，你是谁你是啥</view>
		</view>
		
		<view class="classList">
			<view class="classItem" @click="toPath" data-path="/pages/form/index">
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
				height: 84rpx;
				line-height: 84rpx;
				border-bottom: 1rpx solid #d1d1d1;
				position: relative;
				background-color: $uni-bg-color;
			}
			
			.scrollItem{
				display: inline-block;
				white-space: nowrap;
				position: absolute;
				top: 0;
				animation: toLeft 10s linear infinite;
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
