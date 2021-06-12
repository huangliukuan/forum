<template>
	<view class="mask">
		<view class="box">
			<view class="title">输入评论内容</view>
			<view class="p20">
				<textarea class="textArea" value="" maxlength="200" name="info"
					placeholder="请输入详细内容,并自觉遵守《中华人民共和国网络安全法》等法律法规,依法依规进行发布 " />
				<lk-upimg></lk-upimg>
			</view>
			<view class="maskBtn">
				<view class="w50 br1">取消</view>
				<view class="w50 blue">发布</view>
			</view>
		</view>
	</view>
</template>

<script>
	import lkUpimg from "../lk-upimg/lk-upimg.vue"
	
	export default {
		data() {
			return {

			}
		},
		methods: {

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
		background-color: #ccc;
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
