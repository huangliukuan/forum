<template>
	<view class="tabbar">
		<view class="tabItem" v-for="(item,index) in tabbar" :key='index' :data-path='item.path' @click="toSwitch">
			<view class="" v-if="!item.center">
				<image :src=" (checked == index && !item.center) ? item.selectIcon :item.icon " mode=""></image>
				<view :class="(checked == index && !item.center) ? 'act':'' ">{{item.text}}</view>
			</view>
			<view class="" v-if="item.center">
				<view class="tabCenter" >
					<image :src="item.icon" mode=""></image>
				</view>
			</view>
		</view>
		<lk-mastclass v-if="maskClass" v-on:cancel="cancel"></lk-mastclass>
	</view>

</template>

<script>
	import lkMastclass from "../lk-mastclass/index.vue"

	export default {
		data() {
			return {
				maskClass:false,
				tabbar: [{
					center: false,
					path: '../forum/index',
					text: '首页',
					icon: '../../static/tabber/home.png',
					selectIcon: '../../static/tabber/home-select.png'
				}, {
					center: false,
					path: '../att/index',
					text: '关注',
					icon: '../../static/tabber/att.png',
					selectIcon: '../../static/tabber/att-select.png'
				}, {
					center: true,
					path: '../issue/index',
					icon: '../../static/tabber/issue.png',
				}, {
					center: false,
					path: '../auth/index',
					text: '加V',
					icon: '../../static/tabber/auth.png',
					selectIcon: '../../static/tabber/auth-select.png'
				}, {
					center: false,
					path: '../mine/index',
					text: '我的',
					icon: '../../static/tabber/mine.png',
					selectIcon: '../../static/tabber/mine-select.png'
				}]
			}
		},
		props: {
			checked: {
				type: Number,
				default: 2
			}
		},
		methods: {
			// 发布类取消
			cancel(e){
				console.log(e);
				this.maskClass = e;
			},			
			toSwitch(e) {
				let path = e.currentTarget.dataset.path;
				if(path != "../issue/index"){
					uni.reLaunch({
						url: path
					})
				}else{
					this.maskClass = true;
				}
				
			}
		},
		components: {
			lkMastclass
		}
	}
</script>

<style scoped>
	.tabbar {
		width: 100%;
		height: 120rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 998;
		display: flex;
		background-color: #ffff;
		justify-content: space-around;
		padding: 10rpx;
		box-shadow: 0 -4rpx 4rpx 4rpx #f1f1f1;
	}

	.tabItem {
		width: 20%;
		font-size: 26rpx;
		text-align: center;
	}

	.tabItem image {
		display: block;
		width: 56rpx;
		height: 56rpx;
		margin: 0 auto 6rpx;
	}

	.act {
		color: #FFBB12;
	}

	.tabCenter {
		width: 110rpx;
		height: 110rpx;
		transform: translate(0, -40%);
		padding: 8rpx;
		border-radius: 50%;
		overflow: hidden;
		background-color: #fff;
		margin: 0 auto;
		box-shadow: 0 -4rpx 4rpx 4rpx #f1f1f1;
		display: flex;
		align-items: center;
	}
	
	.tabCenter image {
		display: block;
		width: 90rpx;
		height: 90rpx;
		margin-top: 10rpx;
		margin-left: -5rpx;
	}
</style>
