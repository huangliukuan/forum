<template>
	<view class="issue">
		<lk-user></lk-user>
		<view class="prompt">禁止发布内容和分类不符、营销推广类等内容，平台已引入AI智能机器人对您发布的信息进行自动检测，同时平台将加强巡查力度，整治不合规信息。</view>

		<form @submit="submit">
			<view class="iptTit">分类</view>
			<view class="prl2">
				<input class="duties" name="class" type="text" value="" placeholder="请填写分类" />
			</view>
			<view class="iptTit">详细内容</view>
			<view class="prl2">
				<textarea class="textArea" value="" maxlength="200" name="info"
					placeholder="请输入详细内容,并自觉遵守《中华人民共和国网络安全法》等法律法规,依法依规进行发布 " />
			</view>
			<view class="iptTit">上传语音</view>
			<button class="recording" type="default">点击录音</button>
			<view class="iptTit">图片</view>
			<lk-upimg class="prl2"></lk-upimg>
			<view class="p20">
				<checkbox-group name="anonymous" >
					<label>
						<checkbox value="anonymous" checked="true"  style="transform:scale(0.7)" />是否匿名发布
					</label>
				</checkbox-group>
			</view>

			<button class="btn" type="default" form-type="submit">确认上传</button>
		</form>
		
		
		<lk-record v-if="false"></lk-record>
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

			}
		},
		methods: {
			submit(e) {
				console.log(e);
			},
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
			padding-bottom: 160rpx;
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
				width: 200rpx;
				height: 56rpx;
				line-height: 56rpx;
				padding: 0;
				border-radius: 10rpx;
				margin: 0;
				margin-left: 20rpx;
				font-size: 28rpx;
			}
			
		
		}
	}
</style>
