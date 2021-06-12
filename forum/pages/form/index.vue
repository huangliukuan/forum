<template>
	<view class="form">
		<rich-text :nodes="richText"></rich-text>
		<view class="formBox">
			<form @submit="submit">
				<view class="formItem">
					<view class="label">姓名：</view>
					<view class="formRight">
						<input type="text" value="" placeholder="请输入姓名" />
					</view>

				</view>
				<view class="formItem">
					<view class="label">性别：</view>
					<view class="formRight">
						<radio-group>
							<label class="mr20">
								<radio class="radio" value="man" /><text>男</text>
							</label>
							<label class="radio">
								<radio class="radio" value="woman" /><text>女</text>
							</label>
						</radio-group>
					</view>

				</view>
				<view class="formItem">
					<view class="label">手机号：</view>
					<view class="formRight">
						<input type="number" value="" placeholder="请输入手机号" />
					</view>

				</view>
				<view class="formItem">
					<view class="label">微信号：</view>
					<view class="formRight">
						<input type="text" value="" placeholder="请输入微信号" />
					</view>

				</view>
				<view class="formItem">
					<view class="label">身份证：</view>
					<view class="formRight">
						<input type="text" value="" placeholder="请输入身份证号" />
					</view>

				</view>
				<view class="formItem">
					<view class="label">报考车型：</view>
					<view class="formRight">
						<picker :range="carList" @change="changePicker" data-type="car">
							<view class=""> {{carList[carI]}} </view>
						</picker>
					</view>

				</view>
				<view class="formItem">
					<view class="label">报考车型：</view>
					<view class="formRight">
						<picker :range="schoolList" @change="changePicker" data-type="school">
							<view class=""> {{schoolList[schoolI]}} </view>
						</picker>
					</view>

				</view>
				<view class="formItem">
					<view class="label">报名时间：</view>
					<view class="formRight">
						<picker :range="timeList" @change="changePicker" data-type="time">
							<view class=""> {{timeList[timeI]}} </view>
						</picker>
					</view>

				</view>
				<button type="default" class="btn">提交</button>
			</form>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				richText: '驾校预约申请',
				carList: ['汽车手动C1', "汽车自动C1"],
				carI: 0,
				schoolList: ['北京大学', '清华大学'],
				schoolI: 0,
				timeList: ['现在报名', '过段时间报名'],
				timeI: 0
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: "驾校预约申请"
			})
		},
		methods: {
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
		height: 84rpx;
		line-height: 84rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #f1f1f1;
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
	.formRight{
		flex: 1;
		color: #666;
	}
	.btn{
		width: 60%;
		height: 84rpx;
		line-height: 84rpx;
		margin-top: 60rpx;
		color: #666;
	}
</style>
