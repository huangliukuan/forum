<template>
	<view class="detail" v-show="showHtml">
		<view class="detailBox">
			<view class="userinfo">
				<view class="flex">
					<image class="userImg" :src="foruminfo.headimgurl" mode=""></image>
					<view class="userCenter">
						<view class="c3f28">{{foruminfo.nickName}}</view>
						<view class="c9f26">{{foruminfo.create_time}} 来自{{foruminfo.device_info}}</view>
					</view>
				</view>

				<view class="userRight">
					<view class="forunClass">{{foruminfo.category_name}}</view>
					<view class="c9f26 tac">{{foruminfo.view_count}}浏览</view>
				</view>
			</view>
			<view class="detailTxt">
				<view class="forumText">{{foruminfo.content}}</view>



				<view class="forumImg" v-if="foruminfo.img_url && foruminfo.img_url[0] != ''">
					<image v-for="(item,index) in foruminfo.img_url" :src="item" :key="index" :data-index='index'
						@click="changeBig" :data-imgs="foruminfo.img_url" mode=""></image>
				</view>


				<view class="recordBox" v-if="foruminfo.voice_url != ''">
					<view class="recordItem" @click.stop="audioEvent" :data-id="foruminfo.id" :data-url='foruminfo.voice_url'>
						<view class="recordItemArc1"></view>	
						<view class="recordItemArc2 " :class="audioId == foruminfo.id?'recordArc2':''" ></view>
						<view class="recordItemArc3 " :class="audioId == foruminfo.id?'recordArc3':''"></view>
					</view>
				</view>
			</view>
			<view class="report">
				<text @click="report">举报</text>
			</view>
			<view class="like">
				<view class="likeBtn">
					<image :src="`../../static/dianzan${extinfo.is_thumbs_up+1}.png`"
						:data-status="extinfo.is_thumbs_up" @click="thumbsUpPost" mode=""></image>
				</view>
				<view class="c9f26">点赞人数：{{foruminfo.thumbs_up_count}}</view>
			</view>
		</view>

		<view class="cmtBox bcf mt20">
			<view class="cmtTop">
				<view class="">全部评论</view>
				<view class="c9f26" @click="sortTap"> <text class="iconfont down_arrow"></text> 切换默认排序</view>
			</view>
			<view class="cmtList">
				<view class="cmtItem" v-for="(item,index) in commentinfo" :key="index">
					<view class="userinfo">
						<view class="flex">
							<image class="userImg" :src="item.headimgurl" mode=""></image>
							<view class="userCenter">
								<view class="c3f28">{{item.nickName}}</view>
								<view class="c9f26">
									<text>来自Android {{item.create_time}}</text>
									<text @click="replayLike" :data-id="item.is_thumbs_up" class="iconfont dianzan"></text><text>{{item.thumbs_up_count}}</text>
								</view>
							</view>
						</view>
						<view class="userRight">
							<view class="c9f26">{{index+1}}楼</view>
							<view class="c9f26"></view>
						</view>
					</view>
					<view class="detailTxt">
						<view class="forumText">{{item.comment}}</view>
						<view class="forumImg" v-if="item.img_url !=''">
							<image v-for="(items,indexs) in item.img_url" :src="items" :key="indexs" :data-index='indexs'
								@click="changeBig" :data-imgs="item.img_url" mode=""></image>
						</view>
						<view class="recordBox" v-if="item.voice_url != ''">
							<view class="recordItem" @click.stop="audioEvent" :data-id="item.comment_id" :data-url='item.voice_url'>
								<view class="recordItemArc1"></view>	
								<view class="recordItemArc2 " :class="audioId == item.comment_id?'recordArc2':''" ></view>
								<view class="recordItemArc3 " :class="audioId == item.comment_id?'recordArc3':''"></view>
							</view>
						</view>
						
					
					</view>
					<view class="replyBtn"   >
						<text @click="replyShow" data-type='reply' :data-id="item.comment_id">回复</text>
					</view>
					<view class="reply"   v-if="item.parent_comment_info.parent_id!=0">
						<view class="">@{{item.parent_comment_info.parent_nickName}} </view>
						<view class="forumText">{{item.parent_comment_info.parent_comment}}</view>
						<block  v-if="item.parent_comment_info.parent_img_url[0] !=''&&item.parent_comment_info.parent_img_url">
							<view class="forumImg" v-for="(t,i) in item.parent_comment_info.parent_img_url" :key="i" >
								<image :src="t" mode=""></image>
							</view>
						</block>
						<view class="recordBox" v-if="item.parent_comment_info.parent_voice_url != ''">
							<view class="recordItem" @click.stop="audioEvent" :data-id="item.parent_comment_info.parent_id" :data-url='item.parent_comment_info.parent_voice_url'>
								<view class="recordItemArc1"></view>	
								<view class="recordItemArc2 " :class="audioId == item.parent_comment_info.parent_id?'recordArc2':''" ></view>
								<view class="recordItemArc3 " :class="audioId == item.parent_comment_info.parent_id?'recordArc3':''"></view>
							</view>
						</view>
						
						<view class="">{{item.parent_comment_info.parent_create_time}}</view>
					</view>


				</view>
			</view>

			<view class="endLoad">已加载完成</view>
		</view>


		<view class="replyInput" @click="replyShow" data-type='forum'>
			<view class="iconfont reply_icon">评论说点什么吧</view>
		</view>

		<lk-reply v-if="showReply" @replyHide="replyHide" :postId="post_id" :parentId="parent_id" @getDateInfo='getDateInfo' :replyType='replyType'></lk-reply>
		<lk-record v-if="showRecord" @recordHide="recordHide" @recording="recording"></lk-record>
		<lk-menu :isAttention='isAttention'  :userid='foruminfo.user_id' @getDateInfo='getDateInfo' @replyShow="replyShow" @recordShow="recordShow"></lk-menu>

		<lk-bigimg v-if="showBigimg" :bigImg='bigImg' :imgIndex='imgIndex' v-on:closeImg="closeImg"></lk-bigimg>


	</view>
</template>

<script>
	import lkReply from "../../components/lk-reply/lk-reply.vue"
	import lkMenu from "../../components/lk-menu/lk-menu.vue"
	import lkRecord from "../../components/lk-record/lk-record.vue"
	import lkBigimg from "../../components/lk-bigimg/lk-bigimg.vue"
	const innerAudioContext = uni.createInnerAudioContext();
	export default {
		data() {
			return {
				showReply: false,
				showRecord: false,
				showBigimg: false,
				showHtml: false,
				replyType: '',
				order: 'asc',
				post_id: 0,
				extinfo: {},
				foruminfo: {},
				commentinfo:{},
				imgIndex: 0,
				bigImg: [],
				isAttention: 0,
				parent_id:0,
				audioId:0
			}
		},
		onLoad(e) {
			this.post_id = e.id;
			this.getDateInfo(e.id);
			this.addViews(e.id);
		},
		methods: {
			audioEvent(e){
				let _this = this,
				id = e.currentTarget.dataset.id,
				url = e.currentTarget.dataset.url;
				if(_this.audioId != id){
					innerAudioContext.destroy();
					_this.audioId = id;
					innerAudioContext.src = url;
					innerAudioContext.autoplay = true;
					
				}else{
					_this.audioId = 0;
					innerAudioContext.destroy();
				}
				
			},
			async getDateInfo(id) {
				let _this = this;
				await _this.$utils.request({
					url: '/index/post/getPostById',
					data: {
						post_id: id,
						order: _this.order
					}
				}).then(res => {
					console.log(res);
					// res.post_info.img_url = JSON.parse(res.post_info.img_url);
					// res.comment_info.forEach(item=>{
					// 	if(item.img_url != ''){
					// 		item.img_url = JSON.parse(item.img_url);
					// 	}
					// })
					_this.foruminfo = res.post_info;
					_this.commentinfo = res.comment_info;
					_this.extinfo = res.ext_info;
					_this.isAttention = res.ext_info.is_follow_post_user;
					_this.showHtml = true;
					uni.setNavigationBarTitle({
						title: `${_this.foruminfo.title}`
					})
				})
			},


			// 评论排序
		 	async sortTap(){
				let _this  =this;
				_this.order = _this.order == 'asc' ? "desc":'asc';
				_this.getDateInfo(_this.post_id);
			},

			// 点赞
			async thumbsUpPost(e) {
				let _this = this;
				await _this.$utils.request({
					url: '/index/post/thumbsUpPost',
					method: 'POST',
					data: {
						post_id: _this.post_id,
						status: e.currentTarget.dataset.status == 0 ? 1:0
					}
				}).then(res => {
					_this.getDateInfo(_this.post_id)
				})
			},
				
			// 回复点赞
			async replayLike(e){
				let _this =this;
				await _this.$utils.request({
					url:'/index/post/thumbsUpComment',
					method:'POST',
					data:{
						comment_id:e.currentTarget.dataset.id,
						status:e.currentTarget.dataset.status
					}
				}).then(res=>{
					console.log(res);
				})
			},
			
			
			// 增加浏览量
			async addViews(id) {
				let _this = this;
				await _this.$utils.request({
					url: "/index/post/incPostViewCount",
					data: {
						post_id: id,
					}
				}).then(res => {
					console.log(res, '增加浏览量');
				})
			},
			// 图片变大
			changeBig(e) {
				let _this = this;
				_this.imgIndex = e.currentTarget.dataset.index;
				_this.bigImg = e.currentTarget.dataset.imgs;
				_this.showBigimg = true;
			},
			closeImg() {
				this.showBigimg = false;
			},
			replyShow(e) {
				this.showReply = true;
				this.replyType = e.currentTarget.dataset.type;
				if(e.currentTarget.dataset.type == 'reply'){
					this.parent_id = e.currentTarget.dataset.id;
				}
			},
			
			async recording(id){
				let _this = this;
				await _this.$utils.request({
					url:'/index/post/publishPostComment',
					method:"POST",
					data:{
						post_id:_this.post_id,
						parent_id:0,
						comment:"",
						img_url:[],
						voice_media_id:id,
						device_info:uni.getSystemInfoSync().model
					}
				}).then(res=>{
						uni.showToast({
							title:"评论成功",
							icon:'none'
						})
						_this.getDateInfo(_this.post_id)
				})
			},
			
			 report(){
				let _this = this;
				
				uni.showModal({
					title:"提示",
					content:"确定要举报?",
					success(res) {
						if(res.confirm){
							 _this.$utils.request({
								url:'/index/post/complaintPost',
								method:"POST",
								data:{
									post_id:_this.post_id
								}
							}).then(res=>{
								uni.showToast({
									title:"举报成功!",
									icon:'none'
								})
							})
						}
					}
				})	
			},
			
			replyHide(e) {
				this.showReply = e;
			},
			recordShow(e) {
				this.showRecord = e;
			},
			recordHide(e) {
				this.showRecord = e;
			},
		},
		onHide() {
			innerAudioContext.destroy();
		},
		components: {
			lkReply,
			lkMenu,
			lkRecord,
			lkBigimg
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.detail {
			width: 100%;
			min-height: 100%;
			background-color: $uni-bg-color-grey;
			padding-bottom: 90rpx;

			.detailBox {
				background-color: $uni-bg-color;
				padding: 20rpx;
				width: 100%;
				height: auto;
			}

			.userinfo {
				width: 100%;
				height: auto;
				display: flex;
				justify-content: space-between;
			}

			.userImg {
				width: 74rpx;
				height: 74rpx;
				border-radius: 50%;
				margin-right: 10rpx;
			}

			.forunClass {
				font-size: 26rpx;
				background-color: #C6D228;
				border-radius: 5rpx;
				color: #fff;
				text-align: center;
				padding: 2rpx 4rpx;
			}

			// .detailTxt {
			// 	min-height: 180rpx;
			// }

			.forumText {

				padding: 20rpx 0;
				line-height: 46rpx;
				color: #333;
			}

			.forumImg {
				display: flex;
				flex-wrap: wrap;

				image {
					width: 165rpx;
					height: 165rpx;
					margin-right: 14rpx;
					margin-bottom: 20rpx;

					&:nth-child(4n) {
						margin-right: 0;
					}
				}
			}

			.forumAudio {
				height: 60rpx;
			}

			.report {
				text-align: right;
				color: #f03e3e;
				padding-bottom: 20rpx;
				border-bottom: 1rpx solid #d1d1d1;
			}

			.like {
				padding-top: 20rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.likeBtn {
				width: 60rpx;
				height: 60rpx;
			}

			.likeBtn image {
				width: 100%;
				height: 100%;
			}

			.cmtTop {
				height: 86rpx;
				line-height: 86rpx;
				padding: 0 20rpx;
				display: flex;
				justify-content: space-between;
			}

			.cmtItem {
				padding: 20rpx;
				border-top: 1rpx solid #d1d1d1;
			}

			.dianzan {
				font-size: 24rpx;
				margin: 0 4rpx 0 6rpx;
			}

			.reply {
				background-color: #F1F1F1;
				padding: 20rpx;
				color: #999 !important;
				font-size: 28rpx;
				border-left: 8rpx solid #ccc;
				margin-top: 10rpx;
			}

			.reply .forumText {
				color: #999;
			}

			.reply .forumImg {
				image {
					width: 150rpx;
					height: 150rpx;
				}
			}

			.replyBtn {
				text-align: right;
				font-size: 28rpx;
				color: #666;
			}

			.endLoad {
				width: 100%;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				font-size: 28rpx;
				color: #666;
				border-top: 1rpx solid #d1d1d1;
			}

			.replyInput {
				width: 100%;
				height: 90rpx;
				position: fixed;
				bottom: 0;
				left: 0;
				background-color: $uni-bg-color;
				display: flex;
				align-items: center;
				justify-content: center;
				border-top: 1rpx solid #d1d1d1;
			}

			.replyInput view {
				width: 80%;
				height: 70rpx;
				line-height: 70rpx;
				border-radius: 50rpx;
				background-color: #F3F3F3;
				font-size: 26rpx;
				padding: 0 20rpx;
				color: #898989;
			}


			.c9f26 {
				color: #999;
				font-size: 26rpx;
			}

			.c3f28 {
				color: #333;
				font-size: 28rpx;
			}

			.recordBox {
				width: 100%;
				margin-bottom: 20rpx;
				height: 64rpx;
				line-height: 64rpx;

				.recordItem {
					width: 40%;
					height: 64rpx;
					line-height: 64rpx;
					border-radius: 50rpx;
					background-color: #ffd43b;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					padding: 0 20rpx;

					.recordItemArc1 {
						width: 0;
						height: 0;
						border-radius: 50rpx;
						border: 15rpx solid #ffd43b;
						border-right-color: #fff;
					}

					.recordItemArc2 {
						width: 16rpx;
						height: 28rpx;
						border-radius: 0 60% 60% 0;
						border-right: 4rpx solid #fff;
						margin-left: -6rpx;
					}

					.recordItemArc3 {
						width: 20rpx;
						height: 36rpx;
						border-radius: 0 60% 60% 0;
						border-right: 4rpx solid #fff;
						margin-left: -8rpx;
					}
				}
			}

			.recordArc2 {
				animation: record 1s linear 0s infinite;
			}

			.recordArc3 {
				animation: record 1s linear 0.5s infinite;
			}
		}
	}

	@keyframes record {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}
</style>
