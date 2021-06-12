<template>
	<view class="forumBox">
		<view class="forumItem" @click="toPath" data-path="/pages/detail/index">
			<view class="forumUser">
				<image src="../../static/logo.png" mode=""></image>
				<view class="forumUserInfo">
					<view class="forumUserName">昵称</view>
					<view class="forumUser">
						<text>2020-01-01 12:00有人评论</text>
						<text>#卖室友</text>
					</view>
				</view>
			</view>
			<view class="forumText">接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。另外选择和上传非图像、视频文件参考：</view>
			<view class="forumImg">
				<image src="../../static/logo.png" mode=""></image>
				<image src="../../static/logo.png" mode=""></image>
				<image src="../../static/logo.png" mode=""></image>
				<image src="../../static/logo.png" mode=""></image>
				<image src="../../static/logo.png" mode=""></image>
			
			</view>
			<view class="forumInfo">
				<text>来自华为 P100</text>
				<text>10000浏览</text>
				<text>100评论</text>
				<text>100点赞</text>
			</view>
		</view>
		<view class="forumItem">
			<view class="forumUser">
				<image src="../../static/logo.png" mode=""></image>
				<view class="forumUserInfo">
					<view class="forumUserName">昵称</view>
					<view class="forumUser">
						<text>2020-01-01 12:00有人评论</text>
						<text>#卖室友</text>
					</view>
				</view>
			</view>
			<view class="forumText">接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。另外选择和上传非图像、视频文件参考：</view>
			<view class="forumImg">
				<image src="../../static/logo.png" mode=""></image>
				<image src="../../static/logo.png" mode=""></image>
				<image src="../../static/logo.png" mode=""></image>
				<image src="../../static/logo.png" mode=""></image>
				<image src="../../static/logo.png" mode=""></image>
			
			</view>
			<view class="forumInfo">
				<text>来自华为 P100</text>
				<text>10000浏览</text>
				<text>100评论</text>
				<text>100点赞</text>
			</view>
		</view>
		<view class="forumItem">
			<view class="forumUser">
				<image src="../../static/logo.png" mode=""></image>
				<view class="forumUserInfo">
					<view class="forumUserName">昵称</view>
					<view class="forumUser">
						<text>2020-01-01 12:00有人评论</text>
						<text>#卖室友</text>
					</view>
				</view>
			</view>
			<view class="forumText">接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。另外选择和上传非图像、视频文件参考：</view>
			<view class="forumImg">
				<image src="../../static/logo.png" mode=""></image>
				<image src="../../static/logo.png" mode=""></image>
				<image src="../../static/logo.png" mode=""></image>
				<image src="../../static/logo.png" mode=""></image>
				<image src="../../static/logo.png" mode=""></image>
			
			</view>
			<view class="forumInfo">
				<text>来自华为 P100</text>
				<text>10000浏览</text>
				<text>100评论</text>
				<text>100点赞</text>
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
		methods:{
			toPath(e){
				console.log(e);
				uni.navigateTo({
					url:"/pages/detail/index"
				})
			}
		}
	}
	
</script>

<style scoped lang="scss">
	.forumBox{
		padding: 0 20rpx;
		background-color: $uni-bg-color;
		.forumItem{
			padding: 20rpx;
			border-bottom: 1px dashed #ccc;
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

</style>
