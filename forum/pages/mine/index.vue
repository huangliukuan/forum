<template>
	<view class="mine">
		
		
		<lk-tabbar :checked="4"></lk-tabbar>
	</view>
</template>

<script>
	import lkTabbar from '../../components/lk-tabbar/lk-tabbar.vue'
	
	export default {
		components:{
			lkTabbar
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body{
		height: 100%;
		.mine{
			width: 100%;
			min-height: 100%;
			padding-bottom: 140rpx;
			background-color: #f1f1f1;
		}
	}
	
	
</style>
