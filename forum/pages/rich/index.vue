<template>
	<view class="rich">
		<rich-text :nodes="richText"></rich-text>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				richText:""
			}
		},
		onLoad(o) {
			this.getArticleDetail(o.id)
		},
		methods:{
			getArticleDetail(id){
				let _this = this;
				_this.$utils.request({
					url:'/index/article/getArticleDetailByID',
					data:{
						id
					}
				}).then(res=>{
					_this.richText = _this.addUrl(res.content);
					uni.setNavigationBarTitle({
						title:res.title
					})
				})
			},
			// 富文本中图片和视频添加url地址
			addUrl(e) {
				let isCycle = true,
					reg = /<img src="/g;
				do {
					let res = reg.exec(e);

					if (res == null) {
						isCycle = false;
					} else {
						e = e.slice(0, res.index + 10) + this.$utils.url + e.slice(res.index + 15);
					}
				} while (isCycle);

				return e;
			}
		},

		components:{
			
		}
	}
</script>

<style scoped lang="scss">
	.rich{
		padding: 20rpx;
	}
	
</style>
