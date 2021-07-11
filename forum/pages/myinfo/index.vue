<template>
	<view class="myinfo">
		<lk-user :userinfo="userinfo"></lk-user>

		<view class="prompt">提示：您正在修改昵称、性别、头像，修改后您在发帖、评论将以新的个人信息进行展示，本次修改将消耗0积分。</view>

		<view class="iptTit">昵称</view>
		<view class="prl2">
			<input class="duties" type="text"  @input="inputName" :value="nickName"  />
		</view>
		
		<view class="iptTit">性别</view>
		<view class="prl2">
			<picker @change="changeGender" :range="genderArr" :value="genderI">
				<view class="duties">{{genderArr[genderI]}}</view>
			</picker>
			
		</view>
		<view class="iptTit">头像上传</view>
		<lk-upimg class="prl2" :imgArr="avatar_img" :count='1' v-on:changeImg="changeImg" ></lk-upimg>
		
		<button class="btn" type="default" @click="submit">确认提交</button>
		

	</view>
</template>

<script>
	import lkUser from "../../components/lk-user/lk-user.vue"
	import lkUpimg from '../../components/lk-upimg/lk-upimg.vue'

	export default {
		components: {
			lkUser,
			lkUpimg,
		},
		data(){
			return{
				nickName:'',
				avatar_img:[],
				genderArr:['男','女'],
				genderI:0,
				gender:'',
				userinfo:{},
			}
		},
		onShow() {
			let userinfo = uni.getStorageSync('userinfo');
			this.userinfo =userinfo;
			this.nickName = userinfo.nickName;
			this.avatar_img.push(userinfo.headimgurl);
			this.genderI= userinfo.sex -1;
		},
		methods:{
			inputName(e){
				this.nickName = e.detail.value;
			},
			changeGender(e){
				this.genderI = e.detail.value;
			},
			changeImg(e){
				this.avatar_img = e;
				console.log(e);
			},
			async submit(){
				let _this = this;
				await _this.$utils.request({
					url:'/index/user/updateUserInfo',
					method:"POST",
					data:{
						nickName:_this.nickName,
						avatar_img:_this.avatar_img,
						sex:_this.genderI+1
					}
				}).then(res=>{
					uni.showToast({
						title:"修改成功！",
						icon:"none"
					})
					uni.setStorageSync("userinfo",res.userInfo)
					uni.navigateBack()
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.myinfo {
			width: 100%;
			min-height: 100%;
			padding-bottom: 140rpx;
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
