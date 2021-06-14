<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("uni.scss");

	page {
		font-size: 32rpx;
	}

	view {
		box-sizing: border-box;
	}
	
	button::after{
		border: 0;
	}

	.mask {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}

	@font-face {
		font-family: 'iconfont';
		/* Project id 2600610 */
		src: url('//at.alicdn.com/t/font_2600610_zbk3bf22jej.woff2?t=1623554938401') format('woff2'),
			url('//at.alicdn.com/t/font_2600610_zbk3bf22jej.woff?t=1623554938401') format('woff'),
			url('//at.alicdn.com/t/font_2600610_zbk3bf22jej.ttf?t=1623554938401') format('truetype');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}

	.xiugai::after {
		content: '\e60b';
	}

	.fatie::after {
		content: '\e62d';
	}

	.pinglun::after {
		content: '\e671';
	}

	.dianzan::after {
		content: '\e606';
	}

	.arrow::after {
		content: '\e6fb';
	}

	.down_arrow::after {
		content: '\e6e0';
	}

	.reply_icon::before {
		content: "\ec8c";
	}

	.home::after {
		content: "\e607";
	}

	.caidan::after {
		content: "\e77a";
	}

	.guanzhu::after {
		content: "\e688";
	}
</style>
