<template>
	<view class="content">
		<view class="p20 bannerBox">
			<lk-banner v-if="banner" class="banner" :banner="banner" :autoplay="true" :circular="true" :height="320"></lk-banner>
		</view>
		<view class="classBox">
			<view class="classFirst" >
				<view class="classItem" v-for="(item,index) in topClass" :key="index"  @click="toPath" :data-type='item.type'  :data-url="item.content">
					<image class="tImg" :src="item.category_img" mode=""></image>
					<view class="txt">{{item.category_name}}</view>
				</view>
			</view>
		</view>


		<view class="classBox" v-for="(item,index) in secondClass" :key="index">
			<view class="classTop">
				<view class="classTit">{{item.name}}</view>
				<view class="iconfont arrow"></view>
			</view>
			<view class="classFirst">
				<view class="classItem" v-for="(ite,ind) in item.children" :key="ind" @click="secondPath" :data-type="ite.type" :data-aid="ite.article_id" :data-cid="ite.bbs_category_id" :data-url="ite.content">
					<image class="bImg" :src="ite.category_img" mode=""></image>
					<view class="txt">{{ite.name}}</view>
				</view>
			</view>
		</view>	

	</view>
</template>

<script>
	import lkBanner from "../../components/lk-banner/index.vue"

	export default {
		data() {
			return {
				banner:[],
				topClass:[],
				secondClass:[],
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getHomePageImg();
			this.getTopCategory();
			this.getSecondClass();
		},
		methods: {
			async getHomePageImg(){
				let _this =this;
				await _this.$utils.request({
					url:'/index/systemConfig/getHomePageImg',
					data:{
						carousel_type:'home_page_img'
					}
				}).then(res=>{
					_this.banner = res;
				})
			},
			async getTopCategory(){
				let _this = this;
				_this.$utils.request({
						url:'/index/category/getTopCategory',
				}).then(res=>{
					_this.topClass = res;
					
				})
			},
			
			async getSecondClass(){
				let _this = this;
				_this.$utils.request({
					url:'/index/category/getIndexShowCategory',
				}).then(res=>{
					_this.secondClass = res;
					console.log(res);
				})
			},
			
			toPath(e){
				uni.navigateTo({
					url:e.currentTarget.dataset.url
				})
			},
			secondPath(e){
				console.log(e);
				let type = e.currentTarget.dataset.type,
				url = e.currentTarget.dataset.url;
				if(type == 'form' ||type == 'bbs_link'){
					uni.navigateTo({
						url:url
					})
				}
				if(type == "link"){
					window.location.href = url;
				}
				
				if(type == 'bbs_category'){
					let id = e.currentTarget.dataset.cid;
					uni.navigateTo({
						url:'/pages/forum/index?id='+id
					})
				}
				if(type == 'article'){
					let id = e.currentTarget.dataset.aid;
					uni.navigateTo({
						url:'/pages/rich/index?id='+id
					})
				}
				
			}
			
		},
		components: {
			lkBanner
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.content {
			width: 100%;
			min-height: 100%;
			background-color: $uni-bg-color-grey;
			color: #333;
			.bannerBox {
				background-color: $uni-bg-color;

				.banner {
					border-radius: $uni-border-radius-lg;
					overflow: hidden;
				}
			}

			.classBox {
				width: 95%;
				height: auto;
				background-color: $uni-bg-color;
				border-radius: 20rpx;
				padding: 0 20rpx 20rpx;
				margin: 0 auto;
				margin-top: 20rpx;

				.classFirst {
					display: flex;
					flex-wrap: wrap;

					.classItem {
						width: 20%;
						text-align: center;
						margin-top: 20rpx;
						font-size: 28rpx;

						.tImg {
							width: 100rpx;
							height: 100rpx;
							border-radius: 50%;
							overflow: hidden;
						}
						.bImg{
							width: 80rpx;
							height: 80rpx;
							border-radius: 20%;
							overflow: hidden;
						}
					}
				}

				.classTop {
					height: 84rpx;
					line-height: 64rpx;
					display: flex;
					justify-content: space-between;
					padding-top: 20rpx;
					border-bottom: 1rpx solid #e6e6e6;
				}
			}

		}
	}
</style>
