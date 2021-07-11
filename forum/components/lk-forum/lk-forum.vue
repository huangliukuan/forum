<template>
	<view class="forumBox" v-if="forumList">
		<view class="forumItem" v-for="(item,index) in forumList" :key="index"   @click="toPath" :data-path="'/pages/detail/index?id='+item.id">
			<view class="forumUser">
				<image :src="item.headimgurl" mode=""></image>
				<view class="forumUserInfo">
					<view class="forumUserName"> {{item.nickName}}  <text class="vipName" v-if="item.is_authentication">{{item.auth_name}}</text> </view>
					<view class="forumUser">
						<!-- <text>2020-01-01 12:00有人评论</text> -->
						<text>#{{item.category_name}}</text>
						<text>来自{{item.device_info}}</text>
					</view>
				</view>
			</view>
			<view>{{item.title}}</view>
			<view class="forumText">{{item.content}}</view>
			
			
			<view class="recordBox" v-if="item.voice_url !== ''" :data-src='item.voice_url'>
				<view class="recordItem">
					<view class="recordItemArc1"></view>	
					<view class="recordItemArc2 recordArc2"></view>
					<view class="recordItemArc3 recordArc3"></view>
				</view>
			</view>
			
			<view class="forumImg" v-if="item.img_url&& item.img_url[0] != ''">
				<image v-for="(imgItem,imgIndex) in item.img_url" :key="imgIndex" :src="imgItem" mode=""></image>
			</view>
			<view class="forumInfo">
				<text>{{item.create_time}}</text>
				<text>{{item.view_count}}浏览</text>
				<text>{{item.thumbs_up_count}}评论</text>
				<text>{{item.comment_count}}点赞</text>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			forumList:{
				type:Array,
				default:()=>{
					return []
				}
			}
		},
		methods:{
			toPath(e){
				uni.navigateTo({
					url:e.currentTarget.dataset.path
				})
			}
		}
	}
	
</script>

<style scoped lang="scss">
	.forumBox{
		
		.forumItem{
			padding: 20rpx;
			// border-bottom: 1px dashed #ccc;
			border-radius: 20rpx;
			background-color: $uni-bg-color;
			margin-bottom: 10rpx;
			overflow: hidden;
			&:last-child{
				border: 0;	
			}
			
			.forumUser{
				display: flex;
				image{
					width: 64rpx;
					height: 64rpx;
					border-radius: 50%;
					overflow: hidden;
					margin-right: 20rpx;
				}
				.forumUserInfo{
					flex: 1;
					.forumUserName{
						font-size: 30rpx;
						font-weight: bold;
					}
					.vipName{
						background-color: #dab710;
						color: #FFFFFF;
						font-size: 24rpx;
						margin-left: 10rpx;
						border-radius: 50rpx;
						padding: 2rpx 14rpx;
					}
					.forumUser{
						font-size: 26rpx;
						color: #666;
						text{
							margin-right:6rpx;
						}
					}
				}
			}
			.forumText{
				padding: 20rpx 0;
				line-height: 46rpx;
				color: #333;
			}
			
			.recordBox{
				width: 100%;
				margin-bottom: 20rpx;
				height: 64rpx;
				line-height: 64rpx;
				.recordItem{
					width: 40%;
					height: 64rpx;
					line-height: 64rpx;
					border-radius: 50rpx;
					background-color: #ffd43b;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					padding: 0 20rpx;
					.recordItemArc1{
						width: 0;
						height: 0;
						border-radius: 50rpx;
						border:15rpx solid #ffd43b;
						border-right-color: #fff;
					}
					.recordItemArc2{
						width: 16rpx;
						height: 28rpx;
						border-radius: 0 60% 60% 0;
						border-right: 4rpx solid #fff;
						margin-left: -6rpx;
					}
					.recordItemArc3{
						width: 20rpx;
						height: 36rpx;
						border-radius: 0 60% 60% 0;
						border-right: 4rpx solid #fff;
						margin-left: -8rpx;
					}
				}
			}
			
			.recordArc2{
				animation: record 1s linear 0s infinite;
			}
			
			.recordArc3{
				animation: record 1s linear 0.5s infinite;
			}
			
			.forumImg{
				display: flex;
				flex-wrap: wrap;
				image{
					width: 155rpx;
					height: 155rpx;
					margin-right: 14rpx;
					margin-bottom: 20rpx;
					&:nth-child(4n){
						margin-right: 0;
					}
				}
			}
			.forumInfo{
				height: 64rpx;
				line-height: 64rpx;
				font-size: 26rpx;
				color: #666;
				text{
					margin-right: 10rpx;
				}
			}
		}
	}
	
	@keyframes record{
		0%{
			opacity: 1;
		}
		100%{
			opacity: 0;
		}
	}

</style>
