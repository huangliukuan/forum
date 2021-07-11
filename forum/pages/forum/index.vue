<template>
	<view class="forum">
		<view class="search">
			<input type="text" value="" placeholder="搜索" />
		</view>
		<view class="p20 bcf">
			<lk-banner class="banner" :autoplay="true" :circular="true" :height="320"></lk-banner>
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
			}
		},
		onShow() {
			this.getClassData();
			this.getDataList();
		},
		methods: {
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
				height: 52rpx;
				background-color: #fff;
			}

			.search input {
				background-color: $uni-bg-color-grey;
				width: 96%;
				height: 48rpx;
				margin: 0 auto;
				padding: 0 0 0 20rpx;
				border-radius: 50rpx;
				border: 1rpx solid #e7e7e7;
				font-size: 28rpx;
				box-sizing: border-box;
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
