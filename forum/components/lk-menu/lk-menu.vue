<template>
	<view class="menu">
		<view class="menuBox" v-if="show">
			<view class="menuItem">
				<view class="iconfont pinglun"></view>
				<view class="">评论</view>
			</view>
			<view class="menuItem">
				<view class="iconfont pinglun"></view>
				<view class="">语音评</view>
			</view>
			<view class="menuItem" @click="toPath">
				<view class="iconfont home"></view>
				<view class="">首页</view>
			</view>
			<view class="menuItem bcred">
				<view class="iconfont guanzhu"></view>
				<view class="">关注</view>
			</view>
		</view>

		<view class="menuItems" @click="showMenu">
			<view class="iconfont caidan"></view>
			<view class="">菜单</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:true,
			}
		},
		methods: {
			showMenu(){
				this.show = !this.show
			},
			toPath(){
				uni.reLaunch({
					url:"/pages/forum/index"
				})
			}
		},
		components: {

		}
	}
</script>

<style scoped lang="scss">
	.menu {
		width: 80rpx;
		height: auto;
		position: fixed;
		top: 80%;
		left: 100%;
		animation: toLeft 0.3s linear forwards;
	}

	.menuItems,
	.menuItem {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		text-align: center;
		background-color: #666;
		color: #fff;
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 6rpx;
		position: absolute;
	}
	
	.menuItem:first-child{
		top: -335rpx;
	}
	.menuItem:nth-child(2){
		top: -250rpx;
	}
	.menuItem:nth-child(3){
		top: -165rpx;
	}
	.menuItem:nth-child(4){
		top: -80rpx;
	}
	.menuItem{
		animation: toTop 0.2s linear forwards;
	}

	.menuItems {
		background-color: #C6D228;
	}
	
	
	

	@keyframes toLeft {
		0% {
			left: 100%;
		}

		100% {
			left: 85%;
		}
	}

	@keyframes toTop {
		0% {
			opacity: 0;
			transform: translate(0,100%);
		}

		100% {
			opacity: 1;
			transform: translate(0,0);
		}
	}
</style>
