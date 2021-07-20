<template>
	<view class="apply">
		<lk-banner v-if="banner" :banner="banner" :height="340" ></lk-banner>
		
		<view class="scrollBox">
			<image class="ggtb" src="../../static/caidan.png" mode=""></image>
			<view class="scrollItem">{{adv}}</view>
		</view>
		
		<view class="classList">
			<view class="classItem classItem1"  v-for="(item,index) in classList" :key="index"  @click="toPath" :data-type="item.type"  :data-path="item.detail">
				<image :src="item.category_img" mode=""></image>
				<view class="">{{item.category_name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import lkBanner from "../../components/lk-banner/index.vue"
	export default{
		data(){
			return{
				type:"",
				banner:[],
				adv:'',
				classList:[],
			}
		},
		onLoad(o) {
			this.type = o.type;
			uni.setNavigationBarTitle({
				title:o.type=='car' ? '驾校报名' :'专升本'
			})
		},
		onShow() {
			
			this.getHomePageImg();
			this.getFormScroll();
			this.getCarFormCategory();
		},
		methods:{
			async getHomePageImg(){
				let _this =this;
				await _this.$utils.request({
					url:'/index/systemConfig/getHomePageImg',
					data:{
						carousel_type: this.type == 'car'? 'car_form_img':'graduation_form_img'
					}
				}).then(res=>{
					_this.banner = res;
				})
			},
			async getFormScroll(){
				let _this = this;
				await _this.$utils.request({
					url:'/index/systemConfig/getFormScroll',
					method:"POST",
					data:{
						type:_this.type == 'car'? 'car_scroll ':'graduation_scroll'
					}
				}).then(res=>{
					_this.adv = res;
				})
			},
			async getCarFormCategory(){
				let _this = this,url='';
				console.log(_this.type)
				
				if(_this.type == 'car'){
						url='/index/carFormCategory/getCarFormCategory'
					}else{
						url='/index/graduationFormCategory/getGraduationFormCategory'
					}
				
				await _this.$utils.request({
					url,
				}).then(res=>{
					_this.classList = res;
				})
			},
			toPath(e){
				
				if(e.currentTarget.dataset.type == "bbs_link"){
					uni.navigateTo({
						url:e.currentTarget.dataset.path
					})
				}else{
					uni.navigateTo({
						url:'/pages/rich/index?id='+e.currentTarget.dataset.path
					})
				}
				
			
			},
		},
		components:{
			lkBanner
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body{
		height: 100%;
		.apply{
			width: 100%;
			min-height: 100%;
			background-color: #f1f1f1;
			
	
			
			.scrollBox{
				width: 100%;
				height: 64rpx;
				line-height: 64rpx;
				border-bottom: 1rpx solid #d1d1d1;
				position: relative;
				background-color: $uni-bg-color;
			}
			.ggtb{
				background-color: #fff;
				height: 50rpx;
				width: 50rpx;
				position: absolute;
			  top: 50%;
				transform: translate(0,-50%);
				z-index: 100;
			}
			
			.scrollItem{
				display: inline-block;
				white-space: nowrap;
				position: absolute;
				top: 0;
				animation: toLeft 15s linear infinite;
				font-size: 30rpx;
				color: #555555;
			}
			
			
			.classList{
				width: 100%;
				height: auto;
				display: flex;
				flex-wrap: wrap;
			}
			
			.classItem{
				width: 47%;
				height: auto;
				text-align: center;
				padding: 40rpx 0;
				margin-left: 2%;
				margin-top: 20rpx;
				border-radius: 20rpx;
				background-color: #FFFFFF;
				image{
					width: 96rpx;
					height: 96rpx;
				}
				
				&:first-child{
					width: 96%;
				}
			}

			
		}
	}
	
	
	
	@keyframes toLeft{
		0%{
			right: 0%;
			transform: translate(100%,0%);
		}
		100%{
			right: 100%;
			transform: translate(0%,0%);
		}
	}
	
</style>
