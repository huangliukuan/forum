<template>
	<view class="mine">
		<lk-user></lk-user>
		
		<view class="mineItem">
			<view class="left">
				<text class="iconfont pinglun mr20"></text>
				<text>我的评论</text>
			</view>
			<view class="iconfont arrow"></view>
		</view>
		<view class="mineItem">
			<view class="left">
				<text class="iconfont dianzan mr20"></text>
				<text>我的点赞</text>
			</view>
			<view class="iconfont arrow"></view>
		</view>
		<view class="mineItem">
			<view class="left">
				<text class="iconfont fatie mr20"></text>
				<text>我的发帖</text>
			</view>
			<view class="iconfont arrow"></view>
		</view>
		<view class="mineItem" @click="toPath" data-path='../myinfo/index'>
			<view class="left">
				<text class="iconfont xiugai mr20"></text>
				<text>修改资料</text>
			</view>
			<view class="iconfont arrow"></view>
		</view>
		
		<lk-tabbar :checked="4"></lk-tabbar>
	</view>
</template>

<script>
	import lkTabbar from '../../components/lk-tabbar/lk-tabbar.vue'
	import lkUser from "../../components/lk-user/lk-user.vue"
	
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			toPath(e){
				uni.navigateTo({
					url:e.currentTarget.dataset.path
				})
			}
		},
		components:{
			lkTabbar,
			lkUser
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body{
		height: 100%;
		.mine{
			width: 100%;
			min-height: 100%;
			padding-bottom: 160rpx;
			background-color: #ffff;
			.iconfont{
				color: #999;
			}
			.mineItem{
				width: 100%;
				height: 96rpx;
				line-height: 96rpx;
				background-color: #fff;
				padding: 0 20rpx;
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid #ccc;
				color: #333;
			}
		}
	}
	
	
</style>
