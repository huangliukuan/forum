<template>
	<view class="auth">
		<lk-user :userinfo='userinfo'></lk-user>

		<view class="prompt">您好，请填写以下认证资料，管理员将在3个工作日内完成审核。认证成功后，您在发帖、评论时将会加v显示。如您在发帖时不想显示个人认证说明，请将发帖昵称改为 某个同学
			即可。如您已认证，重新提交之前的认证将会取消。</view>

		<view class="iptTit">认证说明</view>
		<view class="prl2">
			<input class="duties" @input="changeInput" type="text" placeholder="例如:学生会会长"  />
		</view>
		<view class="iptTit">认证材料</view>
		
		<lk-upimg class="prl2" :count="1" v-on:changeImg="changeImg"></lk-upimg>
		
		<button class="btn" type="default" @click="submit">确认提交</button>
		
		<lk-tabbar :checked="3"></lk-tabbar>
	</view>
</template>

<script>
	import lkTabbar from '../../components/lk-tabbar/lk-tabbar.vue'
	import lkUser from "../../components/lk-user/lk-user.vue"
	import lkUpimg from '../../components/lk-upimg/lk-upimg.vue'

	export default {
		components: {
			lkTabbar,
			lkUser,
			lkUpimg,
			userinfo:{},
		},
		data(){
			return {
				apply_detail:'',
				material:[],
			}
		},
		onShow() {
			this.userinfo = uni.getStorageSync('userinfo');
		},
		methods:{
			changeImg(e){
				this.material = e;
			},
			changeInput(e){
				this.apply_detail = e.detail.value;
			},
			async submit(){
				let _this = this;
				if(!_this.apply_detail){
					uni.showToast({
						title:"认证说明为空！",
						icon:"none"
					})
					return false;
				}
				if(_this.material.length<1){
					uni.showToast({
						title:"认证说明为空！",
						icon:"none"
					})
					return false;
				}
				await _this.$utils.request({
					url:'/index/user/authApply',
					method:"POST",
					data:{
						apply_detail:_this.apply_detail,
						material:_this.material
					}
				}).then(res=>{
					console.log(res);
					uni.showToast({
						title:"提交成功，请等待审核！",
						icon:"none"
					})
					
				})
				
			}
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.auth {
			width: 100%;
			min-height: 100%;
			padding-bottom: 160rpx;
			background-color: $uni-bg-color;

			.prompt {
				line-height: 46rpx;
				font-size: 30rpx;
				padding: 40rpx 20rpx;
			}
			.iptTit{
				height: 84rpx;
				line-height: 84rpx;
				padding: 0 20rpx;
			}
			.duties{
				background-color: #f1f1f1;
				padding: 10rpx;
				font-size: 26rpx;
				border-radius: 8rpx;
			}
			.btn{
				width: 60%;
				height: 86rpx;
				line-height: 86rpx;
				padding: 0;
				border-radius: 10rpx;
				margin-top: 100rpx;
				color: #666;
			}
		}
	}
</style>
