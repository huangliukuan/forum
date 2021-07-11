<template>
	<view class="att">
		<lk-forum :forumList='forumList'></lk-forum>
		
		<lk-tabbar :checked="1"></lk-tabbar>
	</view>
</template>

<script>
	import lkTabbar from '../../components/lk-tabbar/lk-tabbar.vue'
	import lkForum from '../../components/lk-forum/lk-forum.vue'
	
	export default {
		components:{
			lkTabbar,
			lkForum
		},
		data(){
			return {
				forumList:[],
			}
		},
		onShow() {
			this.getDataList()
		},
		methods:{
			async getDataList() {
				let _this = this;
				await _this.$utils.request({
					url: '/index/post/getPostForFollower',
					data: {}
				}).then(res => {
					_this.forumList = res;
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body{
		height: 100%;
		.att{
			width: 100%;
			min-height: 100%;
			padding: 20rpx;
			padding-bottom: 160rpx;
			background-color: #f1f1f1;
		}
	}
	
	
</style>
