<template>
	<view class="forum">
		<view class="search">
			<input type="text" value="" @input="paramsChange" placeholder="请输入标题或内容" />
			<text @click="seach">搜索</text>
		</view>
		<view class="p20 bcf">
			<lk-banner v-if="banner" class="banner" :banner="banner" :autoplay="true" :circular="true" :height="320"></lk-banner>
		</view>
		<view class="classBox">
			<view class="classFirst">
				<view class="classItem" v-for="(item,index) in classArr" :key="index" @click="selectClass"
					:data-id='item.id'>
					<image class="tImg" :src="item.category_img" mode=""></image>
					<view class="txt">{{item.category_name}}</view>
				</view>
			</view>
		</view>
		<view class="classSecond">
			<view class="mr20 " @click="changeClassSecond" :class="selClassSecond == 'newest' ? 'active':''"
				data-type="newest">最新</view>
			<view class="mr20" @click="changeClassSecond" :class="selClassSecond == 'hot' ? 'active':''"
				data-type="hot">热门</view>
			<view class="mr20" @click="changeClassSecond" :class="selClassSecond == 'new_comment' ? 'active':''"
				data-type="new_comment">新评</view>
		</view>

		<view class="issueBox">
			<lk-forum :forumList="forumList"></lk-forum>
		</view>

		<lk-tabbar :checked="0"></lk-tabbar>
	</view>
</template>

<script>
	import lkTabbar from '../../components/lk-tabbar/lk-tabbar.vue'
	import lkBanner from '../../components/lk-banner/index.vue'
	import lkForum from '../../components/lk-forum/lk-forum.vue'


	export default {
		components: {
			lkTabbar,
			lkBanner,
			lkForum,
			
		},
		data() {
			return {
				classArr: {},
				selClassSecond: 'newest',
				category_id: '',
				forumList: [],
				banner:[],
				params:'',
			}
		},
		onLoad(o) {
			console.log(o);
			let _this = this;
			if(o.type == 'user'){
				_this.getPostForUser();
			}
			if(o.type == 'comment'){
				_this.getPostForUserComment();
			}
			if(o.type == 'thumbsUp'){
				_this.getPostForUserThumbsUp();
			}
			if(o.id){
				this.category_id = o.id;
				_this.getDataList();
			}
		},
		onShow() {
			this.getClassData();
			this.getDataList();
			this.getHomePageImg();
		},
		methods: {
			// 获取用户帖子
			getPostForUser(){
				let _this = this;
				_this.$utils.request({
					url:'/index/post/getPostForUser'
				}).then(res=>{
					_this.forumList  =res;
				})
			},// 获取评论过的帖子
			getPostForUserComment(){
				let _this = this;
				_this.$utils.request({
					url:'/index/post/getPostForUserComment'
				}).then(res=>{
					_this.forumList  =res;
				})
			},//获取用户点赞过的帖子
			getPostForUserThumbsUp(){
				let _this = this;
				_this.$utils.request({
					url:'/index/post/getPostForUserThumbsUp'
				}).then(res=>{
					_this.forumList  =res;
				})
			},
			
			
			async getHomePageImg(){
				let _this =this;
				await _this.$utils.request({
					url:'/index/systemConfig/getHomePageImg',
					data:{
						carousel_type:'bbs_page_img'
					}
				}).then(res=>{
					_this.banner = res;
				})
			},
			
			async getClassData() {
				let _this = this;
				await _this.$utils.request({
					url: "/index/bbs/getBbsCategory",
					method: "GET"
				}).then((res) => {
					_this.classArr = res;
				})
			},

			async getDataList() {
				let _this = this;
				await _this.$utils.request({
					url: '/index/post/getPostList',
					data: {
						show_type: _this.selClassSecond,
						category_id: _this.category_id
					}
				}).then(res => {
					_this.forumList = res;
				})
			},

			// 搜索
			async seach(){
				let _this =  this;
				await _this.$utils.request({
					url:'/index/post/searchPost',
					
					data:{
						params:this.params
					}
				}).then(res=>{
					_this.forumList =res; 
				})
			},
			paramsChange(e){
				this.params = e.detail.value;
			},
			selectClass(e) {
				this.category_id = e.currentTarget.dataset.id;
				this.getDataList();
			},

			changeClassSecond(e) {
				this.selClassSecond = e.currentTarget.dataset.type;
				this.getDataList();
			}

		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.forum {
			width: 100%;
			min-height: 100%;
			padding-bottom: 140rpx;
			background-color: $uni-bg-color-grey;

			.search {
				width: 100%;
				margin: 0 auto;
				height: 128rpx;
				line-height: 128rpx;
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				padding: 0 20rpx;
				color: #333;
				font-size: 28rpx;
			}

			.search input {
				background-color: $uni-bg-color-grey;
				width: 86%;
				height: 64rpx;
				line-height: 64rpx;
				padding: 0 0 0 20rpx;
				border-radius: 50rpx;
				border: 1rpx solid #e7e7e7;
				font-size: 28rpx;
				box-sizing: border-box;
				margin-top: 30rpx;
			}

			.banner {
				border-radius: $uni-border-radius-lg;
				overflow: hidden;
			}

			.classBox {
				width: 100%;
				height: auto;
				background-color: $uni-bg-color;
				padding: 0 20rpx 20rpx;

				.classFirst {
					display: flex;
					flex-wrap: wrap;

					.classItem {
						width: 20%;
						text-align: center;
						margin-top: 20rpx;
						font-size: 28rpx;

						.tImg {
							width: 80rpx;
							height: 80rpx;
							border-radius: 50%;
							overflow: hidden;
						}
					}
				}
			}

			.classSecond {
				display: flex;
				font-size: 42rpx;
				font-weight: bold;
				color: #666;
				padding: 20rpx 20rpx 0;
				background-color: $uni-bg-color;
			}

			.active {
				color: #333;
				border-bottom: 5px solid #4dabf7;

			}

			.issueBox {
				// margin-top: 20rpx;
				padding: 20rpx;
			}
		}
	}
</style>
