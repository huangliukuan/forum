<template>
	<view class="form">
		<!-- <rich-text :nodes="richText"></rich-text> -->
		<view class="formBox">
			<form @submit="submit">
				<view class="formItem">
					<view class="label">姓名：</view>
					<view class="formRight">
						<input type="text" value="" name='user_name' placeholder="请输入姓名" />
					</view>

				</view>
				<view class="formItem">
					<view class="label" >性别：</view>
					<view class="formRight">
						<radio-group class="gender" name='sex'>
							<label class="mr20">
								<radio class="radio" value="男" checked /><text>男</text>
							</label>
							<label class="radio">
								<radio class="radio" value="女" /><text>女</text>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="formItem">
					<view class="label">手机号：</view>
					<view class="formRight">
						<input type="number" value="" name="mobile" placeholder="请输入手机号" />
					</view>

				</view>
				<view class="formItem">
					<view class="label">微信号：</view>
					<view class="formRight">
						<input type="text" value="" name='wechat' placeholder="请输入微信号" />
					</view>

				</view>
				<view class="formItem">
					<view class="label">身份证：</view>
					<view class="formRight">
						<input type="text" value="" name="id_card" placeholder="请输入身份证号" />
					</view>

				</view>
				<view class="formItem" v-if="type == 'car'">
					<view class="label">报考车型：</view>
					<view class="formRight">
						<picker class="picker" :range="carList" @change="changePicker" :value="carI" name="license_type" data-type="car">
							<view class=""> {{carList[carI]}} </view>
						</picker>
					</view>

				</view>
				<view class="formItem">
					<view class="label">所在学校：</view>
					<view class="formRight">
						<picker class="picker" :range="schoolList" @change="changePicker" :value="schoolI" name="university" data-type="school">
							<view class=""> {{schoolList[schoolI]}} </view>
						</picker>
					</view>

				</view>
				
				<view class="formItem" v-if="type == 'graduation'">
					<view class="label">报考学校：</view>
					<view class="formRight">
						<picker class="picker" :range="schoolList" @change="changePicker" :value="schoolI" name="entrance_university" data-type="school">
							<view class=""> {{schoolList[schoolI]}} </view>
						</picker>
					</view>
				
				</view>
				
				<view class="formItem">
					<view class="label">报名时间：</view>
					<view class="formRight">
						<picker class="picker" :range="timeList" @change="changePicker":value="timeI" name="baokao_date" data-type="time">
							<view class=""> {{timeList[timeI]}} </view>
						</picker>
					</view>

				</view>
				<button type="default" form-type="submit" class="btn">提交</button>
			</form>
		</view>

	</view>
</template>

<script>
	import reg from '../../core/reg.js'
	
	export default {
		data() {
			return {
				type:"",
				richText: '驾校预约申请',
				carList: ['汽车手动C1', "汽车自动C1"],
				carI: 0,
				schoolList: ['北京大学', '清华大学'],
				schoolI: 0,
				timeList: ['现在报名', '过段时间报名'],
				timeI: 0
			}
		},
		onLoad(o) {
			this.type = o.type;
			uni.setNavigationBarTitle({
				title: o.type=="car" ? "驾校预约申请" :'专升本申请'
			})
			if(o.type=="car"){
				
			}else{
				this.getUniversityList();
			}
		},
		onShow() {
			
		},
		methods: {
			submit(e){
				let _this =this,
				form = e.detail.value;
				console.log(form);
				if(!form.user_name){
					uni.showToast({
						title:'姓名为空!',
						icon:'none'
					})
					return false;
				}
				if(!form.mobile){
					uni.showToast({
						title:'手机号为空!',
						icon:'none'
					})
					return false;
				}
				if(!reg.phoneReg.test(form.mobile)){
					uni.showToast({
						title:'手机号格式不对!',
						icon:'none'
					})
					return false;
				}
				if(!form.wechat){
					uni.showToast({
						title:'微信号为空!',
						icon:'none'
					})
					return false;
				}
				if(!form.id_card){
					uni.showToast({
						title:'身份证号为空!',
						icon:'none'
					})
					return false;
				}
				if(!reg.cardReg.test(form.id_card)){
					uni.showToast({
						title:'身份证号格式不对!',
						icon:'none'
					})
					return false;
				}
				if(_this.type == 'car'){
					form.license_type = _this.carList[_this.carI];
				
				}
				if( _this.type == 'graduation'){
					form.entrance_university = _this.schoolList[_this.schoolI];
				}
				form.university = _this.schoolList[_this.schoolI];
				form.form_type = _this.type;
				form.baokao_date = _this.timeList[_this.timeI];
				_this.$utils.request({
					url:'/index/FormCollection/saveFormCollection',
					method:'post',
					data:form
				}).then(res=>{
					uni.showToast({
						title:"提交成功",
						icon:"none"
					})
					setTimeout(res=>{
						uni.navigateBack()
					},2000)
				})
				
			},
			getUniversityList(){
				let _this = this;
				_this.$utils.request({
					url:'/index/systemConfig/getUniversityList',
				}).then(res=>{
					console.log(res);
					_this.schoolList =res;
				})
			},
			changePicker(e) {
				let i = e.detail.value,
					type = e.currentTarget.dataset.type;
				this[`${type}I`] = i;
			}
		},
		components: {

		}
	}
</script>

<style scoped lang="scss">
	.form {
		padding: 20rpx;
	}

	.formBox {
		margin-top: 50rpx;
	}

	.formItem {
		width: 100%;
		// height: 84rpx;
		// line-height: 84rpx;
		// display: flex;
		// align-items: center;
		border-bottom: 1rpx solid #f1f1f1;
		margin-bottom: 20rpx;
	}
	
	.formItem:last-child{
		border: 0;
	}
	
	input{
		height: 84rpx;
		line-height: 84rpx;
	}
	
	.radio{
		transform: scale(0.7);
	}

	.label {
		width: 180rpx;
	}
	.label::after{
		content: "*";
		color: #f03e3e;
	}
	
	.formRight{
		// flex: 1;
		color: #666;
		border: 1rpx solid #c3c3c3;
		margin-top: 20rpx;
		border-radius: 10rpx;
		
	}
	
	.formRight .picker,
	.formRight .gender,
	.formRight input{
			height:  54rpx;
			line-height: 54rpx;
			padding: 0 20rpx;
			font-size: 28rpx;
	}
	
	.btn{
		width: 60%;
		height: 84rpx;
		line-height: 84rpx;
		margin-top: 60rpx;
		color: #666;
		background-color: #cccc;
	}
</style>
