<template>
	<view class="menu" >
		<view class="menuBox" v-if="show">
			<view class="menuItem" v-if="isAttention == 0" @click="followUser">
				<view class="menuImg">
					<image src="../../static/guanzhu.png" mode=""></image>
				</view>
				<!-- <view class="">关注</view> -->
			</view>
				
			<view class="menuItem" @click="replyShow" data-type='forum'>
				<view class="menuImg">
					<image src="../../static/liaotian.png" mode=""></image>
				</view>
				<!-- <view class="">评论</view> -->
			</view>
			<view class="menuItem" @click="recordShow">
				<view class="menuImg">
					<image src="../../static/luyin.png" mode=""></image>
				</view>
				<!-- <view class="">语音评</view> -->
			</view>
			
			<view class="menuItem" @click="toPath">
				<view class="menuImg">
					<image src="../../static/tabber/home-select.png" mode=""></image>
				</view>
				<!-- <view class="">首页</view> -->
			</view>
		</view>

		<view class="menuItems" @click="showMenu">
			<view class="menuImg">
				<image src="../../static/caidan.png" mode=""></image>
			</view>
			<!-- <view class="">菜单</view> -->
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
		props:{
			isAttention:{
				type:Number,
				default:0,
			},
			userid:{
				type:Number,
				default:0,
			},
			
		},
		methods: {
			// 关注
			async followUser(){
				await this.$utils.request({
					url:"/index/user/followUser",
					method:"POST",
					data:{
						follow_id:this.userid
					}
				}).then(res=>{
						console.log(res);
						_this.$emit('getDateInfo',true)
				})
			},
			
			showMenu(){
				this.show = !this.show
			},
			toPath(){
				uni.reLaunch({
					url:"/pages/forum/index"
				})
			},
			replyShow(e){
				this.$emit('replyShow',e)
			},
			recordShow(){
				this.$emit('recordShow',true)
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
		top: 75%;
		left: 100%;
		animation: toLeft 0.3s linear forwards;
	}
	.menuBox{
		display: flex;
		flex-direction:  column;
		justify-content: flex-end;
		position: absolute;
		bottom: 80rpx;
	}
	.menuItems,
	.menuItem {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		text-align: center;
		// background-color: #666;
		// color: #fff;
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 6rpx;
	}
	
	.menuItem{
		animation: toTop 0.2s linear forwards;
	}

	.menuItems {
		background-color: #f1f1f1;
	}
	
	.menuImg{
		width: 80rpx;
		height: 80rpx;
	}
	.menuImg image{
		width: 100%;
		height: 100%;
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
