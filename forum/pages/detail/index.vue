<template>
	<view class="detail">
		<view class="detailBox">
			<view class="userinfo">
				<view class="flex">
					<image class="userImg" src="../../static/logo.png" mode=""></image>
					<view class="userCenter">
						<view class="c3f28">昵称</view>
						<view class="c9f26">2021-06-11 20:36:53   来自Android</view>
					</view>
				</view>
				
				<view class="userRight">
					<view class="forunClass">打听求助</view>
					<view class="c9f26">100浏览</view>
				</view>
			</view>
			<view class="detailTxt">
				<view class="forumText">另外选择和上传非图像、视频文件参考：</view>
				<!-- <view class="forumImg">
					<image src="../../static/logo.png" mode=""></image>
					<image src="../../static/logo.png" mode=""></image>
					<image src="../../static/logo.png" mode=""></image>
					<image src="../../static/logo.png" mode=""></image>
					<image src="../../static/logo.png" mode=""></image>
				
				</view> -->
				
				<view class="forumAudio">
				</view>
			</view>
			<view class="report">
				<text>举报</text>
			</view>
			<view class="like">
				<view class="likeBtn">点赞TA</view>
				<view class="c9f26">点赞人数：0</view>
			</view>
		</view>
		
		<view class="cmtBox bcf mt20">
			<view class="cmtTop">
				<view class="">全部评论</view>
				<view class="c9f26"> <text class="iconfont down_arrow"></text> 切换默认排序</view>
			</view>
			<view class="cmtList">
				<view class="cmtItem">
					<view class="userinfo">
						<view class="flex">
							<image class="userImg" src="../../static/logo.png" mode=""></image>
							<view class="userCenter">
								<view class="c3f28">昵称</view>
								<view class="c9f26">
									<text>来自Android 2021-06-11 20:36</text>  
									<text class="iconfont dianzan"></text><text>0</text>
								</view>
							</view>
						</view>
						<view class="userRight">
							<view class="c9f26">1楼</view>
							<view class="c9f26"></view>
						</view>
					</view>
					
					<view class="reply">
						<view class="">@昵称 </view>
						<view class="forumText">接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。另外选择和上传非图像、视频文件参考：</view>
						<view class="forumImg">
							<image src="../../static/logo.png" mode=""></image>
							<image src="../../static/logo.png" mode=""></image>
							<image src="../../static/logo.png" mode=""></image>
							<image src="../../static/logo.png" mode=""></image>
							<image src="../../static/logo.png" mode=""></image>
						</view>
						<view class="">2021-01-23 23:23</view>
					</view>
					
					
					<view class="detailTxt">
						<view class="forumText">接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。另外选择和上传非图像、视频文件参考：</view>
						<view class="forumImg">
							<image src="../../static/logo.png" mode=""></image>
							<image src="../../static/logo.png" mode=""></image>
							<image src="../../static/logo.png" mode=""></image>
							<image src="../../static/logo.png" mode=""></image>
							<image src="../../static/logo.png" mode=""></image>
						</view>
					</view>
					<view class="replyBtn">
						<text>回复</text>
					</view>
				</view>
			</view>
			
			<view class="endLoad">已加载完成</view>
		</view>
		
		
		<view class="replyInput">
			<view class="iconfont reply_icon">评论说点什么吧</view>
		</view>
		
		<lk-reply v-if="showReply"></lk-reply>
		<lk-record v-if="showRecord"></lk-record>
		<lk-menu></lk-menu>
		
		<lk-bigimg v-if="showBigimg"></lk-bigimg>
	
		
	</view>
</template>

<script>
	import lkReply from "../../components/lk-reply/lk-reply.vue"
	import lkMenu from "../../components/lk-menu/lk-menu.vue"
	import lkRecord from "../../components/lk-record/lk-record.vue"
	import lkBigimg from "../../components/lk-bigimg/lk-bigimg.vue"
	
	export default{
		data(){
			return{
				showReply:false,
				showRecord:false,
				showBigimg:false,
			}
		},
		onLoad(e) {
			uni.setNavigationBarTitle({
				title:`发布的信息`
			})
		},
		methods:{
			
		},
		components:{
			lkReply,
			lkMenu,
			lkRecord,
			lkBigimg
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body{
		height: 100%;
		.detail{
			width: 100%;
			min-height: 100%;
			background-color: $uni-bg-color-grey;
			padding-bottom: 80rpx;
			.detailBox{
				background-color: $uni-bg-color;
				padding: 20rpx;
				width: 100%;
				height: auto;
			}
			.userinfo{
				width: 100%;
				height: auto;
				display: flex;
				justify-content: space-between;
			}
			.userImg{
				width: 74rpx;
				height: 74rpx;
				border-radius: 50%;
				margin-right: 10rpx;
			}
			.forunClass{
				font-size: 26rpx;
				background-color: #C6D228;
				border-radius: 5rpx;
				color: #fff;
				text-align: center;
				padding: 2rpx 4rpx;
			}
			
			.detailTxt{
				min-height: 180rpx;
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
					width: 165rpx;
					height: 165rpx;
					margin-right: 14rpx;
					margin-bottom: 20rpx;
					&:nth-child(4n){
						margin-right: 0;
					}
				}
			}
			
			.forumAudio{
				height: 60rpx;
			}
			
			.report{
				text-align: right;
				color: #f03e3e;
				padding-bottom: 20rpx;
				border-bottom: 1rpx solid #d1d1d1;
			}
			
			.like{
				padding-top: 20rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.likeBtn{
				padding: 10rpx 20rpx;
				background-color: #C6D228;
				color: #FFFFFF;
				border-radius: 5rpx;
				font-size: 28rpx;
			}
			

			.cmtTop{
				height: 86rpx;
				line-height: 86rpx;
				padding: 0 20rpx;
				display: flex;
				justify-content: space-between;
			}
			
			.cmtItem{
				padding: 20rpx;
				border-top: 1rpx solid #d1d1d1;
			}
			
			.dianzan{
				font-size: 24rpx;
				margin: 0 4rpx 0 6rpx ;
			}
			
			.reply{
				background-color: #F1F1F1;
				padding: 20rpx;
				color: #999!important;
				font-size: 28rpx;
				border-left: 8rpx solid #ccc;
				margin-top: 10rpx;
			}
			
			.reply .forumText{
				color: #999;
			}
			
			.reply .forumImg{
				image{
					width: 150rpx;
					height: 150rpx;
				}
			}
			
			.replyBtn{
				text-align: right;
				font-size: 28rpx;
				color: #666;
			}
			
			.endLoad{
				width: 100%;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				font-size: 28rpx;
				color: #666;
				border-top: 1rpx solid #d1d1d1;
			}
			
			.replyInput{
				width: 100%;
				height: 80rpx;
				position: fixed;
				bottom: 0;
				left: 0;
				background-color: $uni-bg-color-grey;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			.replyInput view{
				width: 80%;
				height: 50rpx;
				line-height: 50rpx;
				border-radius: 50rpx;
				border: 1rpx solid #999;
				font-size: 26rpx;
				padding: 0 20rpx;
				color: #666;
			}
			
			
			.c9f26{
				color: #999;
				font-size: 26rpx;
			}
			.c3f28{
				color: #333;
				font-size: 28rpx;
			}
		}
	}
	
	
	
</style>
