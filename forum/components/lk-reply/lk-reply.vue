<template>
	<view class="mask" @touchmove.stop.prevent="moveHandle">
		<view class="box">
			<view class="title">输入评论内容</view>
			<view class="p20">
				<textarea class="textArea" value="" @input="input" maxlength="200" name="info"
					placeholder="请输入详细内容,并自觉遵守《中华人民共和国网络安全法》等法律法规,依法依规进行发布 " />
				<lk-upimg :count="6" v-on:changeImg='changeImg'></lk-upimg>
			</view>
			<view class="maskBtn">
				<view class="w50 br1" @click="replyHide">取消</view>
				<view class="w50 blue" @click="submit">发布</view>
			</view>
		</view>
	</view>
</template>

<script>
	import lkUpimg from "../lk-upimg/lk-upimg.vue"
	
	export default {
		data() {
			return {
				imgArr:[],
				comment:'',
			}
		},
		props:{
			replyType:{
				type:String,
				default:''
			},
			postId:{
				type:String,
				default:'',
			},
			parentId:{
				type:Number,
				default:'',
			}
		},
		methods: {
			input(e){
				this.comment = e.detail.value;
			},
			async submit(){
				
				let _this = this, data={} ;
				if(!_this.comment){
					uni.showToast({
						title:"请填写内容",
						icon:'none'
					})
					return false;
				}
				console.log(_this.parentId);
				if(_this.replyType == 'forum'){
					data={
						post_id:_this.postId,
						parent_id:0,
						comment:_this.comment,
						img_url:_this.imgArr,
						device_info:uni.getSystemInfoSync().model
					}
				}else{
					data={
						post_id:_this.postId,
						parent_id:_this.parentId,
						comment:_this.comment,
						img_url:_this.imgArr,
						device_info:uni.getSystemInfoSync().model
					}
				}
								
				await _this.$utils.request({
					url:'/index/post/publishPostComment',
					method:"POST",
					data:data
				}).then(res=>{
						uni.showToast({
							title:"评论成功",
							icon:'none'
						})
						_this.$emit("replyHide",false);
						_this.$emit('getDateInfo',_this.postId);
						
				})
			},
			
			
			replyHide(){
				this.$emit("replyHide",false)
			},
			changeImg(e){
				this.imgArr = e;
			},
			
			moveHandle() {
				return false
			}
		},
		components: {
			lkUpimg
		}
	}
</script>

<style scoped lang="scss">
	.box{
		width: 95%;
		height: auto;
		background-color: #fff;
		border-radius: 10rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
	.title{
		height: 84rpx;
		line-height: 84rpx;
		text-align: center;
		border-bottom: 1rpx solid #d1d1d1;
	}
	.textArea{
		width: 100%;
		height: 200rpx;
		background-color: #f1f1f1;
		font-size: 28rpx;
		padding: 4rpx;
		box-sizing: border-box;
	}
	.maskBtn{
		width: 100%;
		height: 96rpx;
		line-height: 96rpx;
		display: flex;
		justify-content: space-between;
		text-align: center;
		border-top: 1rpx solid #f1f1f1;
		color: #333;
	}
	
</style>
