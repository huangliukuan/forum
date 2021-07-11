<template>
	<view class="upimgBox">
		<view class="imgItem" v-for="(item,index) in imgArr" :key="index">
			<image class="close"  src="../../static/close1.png" @click="delImg(index)" mode=""></image>
			<image :src="item" mode=""></image>
		</view>
		<view class="addImg" @click="addImg">
			<image  src="../../static/shangchuan.png" mode=""></image>
		</view>
	</view>
</template>

<script>
import uploadFile from '../../core/upload.js'

export default{
	data(){
		return{
			
		}
	},
	props:{
		imgArr:{
			type:Array,
			default:()=>{
				return []
			}
		},
		count:{
			type:Number,
			default:1
		}
	},
	methods:{
		 addImg(){
			let _this =this;
			uni.chooseImage({
			    count: _this.count, //默认9
			    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			    sourceType: ['album','camera'], //从相册选择
			    success: function (res1) {
							uni.showLoading({
								title:"上传中...",
								mask:true,
							})
							res1.tempFilePaths.forEach((item,index)=>{
								uploadFile({
									filePath:item
								}).then(res=>{
									if(_this.count >1){
										let img = _this.imgArr;
										img.push(res.data);
										_this.imgArr = img;
										_this.$emit('changeImg',img);
										if(index >= res1.tempFilePaths.length-1){
											uni.hideLoading();
										}
									}else{
										let img = new Array();
										img.push(res.data);
										_this.imgArr.splice(0,1,res.data);
										_this.$emit('changeImg',img);
										uni.hideLoading();
									}
									
								})
								
							})
			    }
			});
		},
		delImg(e){
			this.imgArr.splice(e,1);
			this.$emit('changeImg',this.imgArr);
		},
	}
}

</script>

<style scoped lang="scss">
	.upimgBox {
		display: flex;
		flex-wrap: wrap;
	}
	.addImg,
	.imgItem {
		width: 22%;
		height: 160rpx;
		line-height: 160rpx;
		position: relative;
	
		margin-top: 20rpx;
		margin-right: 20rpx;
	
		&:nth-child(4n) {
			margin-right: 0;
		}
	
		image {
			width: 100%;
			height: 100%;
			border-radius: 10rpx;
			overflow: hidden;
		}
	
		.close {
			width: 46rpx;
			height: 46rpx;
			position: absolute;
			z-index: 1;
			top: 0;
			right: 0;
			transform: translate(40%, -40%);
		}
	}
	
	.addImg {
		margin-right: 0;
		border-radius: 10rpx;
		font-size: 56rpx;
		font-weight: bold;
		overflow: hidden;
		background-color: #f1f1f1;
		color: #999;
		display: flex;
		align-items: center;
		justify-content: center;
		image{
			width: 115rpx;
			height: 100rpx;
		}
	}
</style>
