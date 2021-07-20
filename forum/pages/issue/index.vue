<template>
	<view class="issue">
		<lk-user :userinfo="userinfo"></lk-user>
		<view class="prompt">禁止发布内容和分类不符、营销推广类等内容，平台已引入AI智能机器人对您发布的信息进行自动检测，同时平台将加强巡查力度，整治不合规信息。</view>

		<form @submit="submit">
			<view class="iptTit">分类</view>
			<view class="prl2">
				<input class="duties" name="className" type="text" :value="className" placeholder="请填写分类" />
			</view>
			<view class="iptTit">标题</view>
			<view class="prl2">
				<input class="duties" name="title" type="text" value="" placeholder="请填写标题" />
			</view>
			<view class="iptTit">详细内容</view>
			<view class="prl2">
				<textarea class="textArea" value="" maxlength="200" name="content" 
					placeholder="请输入详细内容,并自觉遵守《中华人民共和国网络安全法》等法律法规,依法依规进行发布 " />
			</view>
			<view class="iptTit">上传语音</view>
			<view class="recording" @click="recordShow">
				<image src="../../static/luyin.png" mode="scaleToFill"></image>
			</view>
			<view class="iptTit">图片</view>
			<lk-upimg class="prl2" :count="6" :imgArr="imgArr" v-on:changeImg='changeImg'></lk-upimg>
			<view class="p20 f28">
				<checkbox-group name="anonymous">
					<label>
						<checkbox value="anonymous" checked="true" style="transform:scale(0.6)" />是否匿名发布
					</label>
				</checkbox-group>
			</view>

			<button class="btn" type="default" form-type="submit">确认上传</button>
		</form>
		<lk-record v-if="showRecord" @recording='recording'  @recordHide="recordHide"></lk-record>
		<lk-tabbar></lk-tabbar>
	</view>
</template>

<script>
	import lkUser from "../../components/lk-user/lk-user.vue"
	import lkTabbar from '../../components/lk-tabbar/lk-tabbar.vue'
	import lkRecord from "../../components/lk-record/lk-record.vue"

	export default {
		data() {
			return {
				showRecord:false,
				className:'',
				content:'',
				imgArr:[],
				recordId:'',
				category_id :'',
				userinfo:'',
			}
		},
		onLoad(e){
			this.className = e.name;
			this.category_id = e.id;
		},
		onShow() {
			this.userinfo = uni.getStorageSync('userinfo');
		},
		methods: {
			async submit(e) {
				let _this =this,
				form = e.detail.value,
				systemInfo = uni.getSystemInfoSync();
				if(!form.className){
					uni.showToast({
						title:"分类为空！",
						icon:"none"
					})
					return false;
				}
				if(!form.title){
					uni.showToast({
						title:"标题为空！",
						icon:"none"
					})
					return false;
				}
				console.log(!form.content, _this.imgArr.length<1 ,!_this.recordId )
				if(!form.content && _this.imgArr.length<1 && !_this.recordId ){
					uni.showToast({
						title:"详细内容,录音或图片最少一样！",
						icon:"none"
					})
					return false;
				}
				await _this.$utils.request({
					url:"/index/post/publishPost",
					method:"POST",
					data:{
						title:form.title,
						device_info:systemInfo.model,
						is_anonymous: form.anonymous[0] == 'anonymous' ? 1:0,
						content:form.content,
						img_url:_this.imgArr,
						voice_url:_this.recordId,
						category_id:_this.category_id
					}
				}).then(res=>{
						uni.showToast({
							title:"发布成功",
							icon:'none'
						})
						setTimeout(()=>{
							uni.reLaunch({
								url:'/pages/forum/index'
							})
						},2000)
				})
				
			},
			changeImg(e){
				this.imgArr = e;
			},
			recording(e){
					this.recordId = e; 
			},
			
			recordShow() {
				this.showRecord = true;
			},
			recordHide(){
				this.showRecord = false;
			}
		},
		components: {
			lkTabbar,
			lkUser,
			lkRecord,
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.issue {
			width: 100%;
			min-height: 100%;
			padding-bottom: 180rpx;
			background-color: $uni-bg-color;

			.prompt {
				line-height: 46rpx;
				font-size: 30rpx;
				padding: 20rpx;
			}

			.iptTit {
				height: 64rpx;
				line-height: 64rpx;
				padding: 0 20rpx;
			}

			.textArea,
			.duties {
				background-color: #f1f1f1;
				padding: 10rpx;
				font-size: 26rpx;
				border-radius: 8rpx;
			}

			.textArea {
				width: 100%;
				box-sizing: border-box !important;
			}

			.recording {
				width: 66rpx;
				height: 66rpx;
				line-height: 56rpx;
				padding: 0;
				border-radius: 10rpx;
				margin: 0;
				margin-left: 20rpx;
				font-size: 28rpx;
				border-radius: 50%;
				background-color: #F1F1F1;

				image {
					width: 100%;
					height: 100%;
				}
			}
			
			.btn{
				width: 60%;
				color: #333333;
				margin-top: 60rpx;
			}


		}
	}
</style>
