<template>
	<view class="mask">
		<view class="classBox">
			<view class="classTit">选择分类</view>
			<view class="p20">
				<view class="classItem" @click="toPath()">心情吐槽</view>
				<view class="classItem">心情吐槽</view>
				<view class="classItem">心情吐槽</view>
				<view class="classItem">心情吐槽</view>
				<view class="classItem">心情吐槽</view>
			</view>
			<view class="classTit cancel"  @click="cancel">取消发布</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			cancel(){
				this.$emit("cancel",false)
			},
			toPath(){
				uni.reLaunch({
					url: "../issue/index"
				})
			},
		},
		components:{
			
		}
	}
</script>

<style scoped lang="scss">
	.classBox{
		width: 460rpx;
		height: auto;
		background-color: #FFFFFF;
		text-align: center;
		border-radius: 10rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.classTit{
		font-size: 30rpx;
		height: 84rpx;
		line-height: 84rpx;
		border-bottom: 1px solid #d1d1d1;
	}
	.classItem{
		height: 70rpx;
		line-height: 86rpx;
		text-align: left;
		font-size: 34rpx;
		color: #666;
		border-bottom: 1px dotted #d1d1d1;
	}
	.cancel{
		color: #999;
		border-top: 1px solid #d1d1d1;
	}
</style>
