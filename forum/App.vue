<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')

		},
		onShow: function() {
			// uni.setStorageSync("token", {
			// 	access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0ZXN0IiwiYXVkIjoidGVzdCIsImlhdCI6MTYyNTcyNzYzMSwibmJmIjoxNjI1NzI3NjMxLCJkYXRhIjp7InVzZXJfaWQiOjJ9LCJleHAiOjE2MjcwMjM2MzF9.Y7a8ZEsYxOqoqQeEzN4Zr1lHaN0IEehnldrZ2BY6agM",
			// 	token_type: "bearer"
			// });
			// uni.setStorageSync("userinfo", {
			// 	auth_name: "",
			// 	birthday: "0000-00-00",
			// 	city: "",
			// 	country: "黑山",
			// 	create_time: "2021-07-08 15:00:31",
			// 	delete_time: null,
			// 	headimgurl: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIWP1HQPWCtFOStzUdiaMR2IedSBCZFb6gaGW64zjnhq39cZf2471icYcsY9Mt1YI4FQcgSHlC1hJSA/132",
			// 	id: 2,
			// 	is_authentication: 0,
			// 	is_delete: 0,
			// 	mobile: "",
			// 	nickName: "Περιπλανήσεις",
			// 	openid: "obRbY6RjwxNaO9vZ0hSn0JJyFApc",
			// 	province: "",
			// 	sex: 1,
			// 	unionid: "",
			// 	update_time: "2021-07-08 15:00:31",
			// 	user_name: "",
			// });


			let user = uni.getStorageSync('user');
			let isWeixin = this.isWechat()
			if (isWeixin && !user) {
				this.$utils.request({
					url: '/index/systemConfig/getAppId',
				}).then((res) => {
					this.checkWeChatCode(res.app_id) //通过微信官方接口获取code之后，会重新刷新设置的回调地址【redirect_uri】
					uni.setStorageSync('appid',res.app_id)
				})

			}
		},

		methods: {
			/*微信登录相关  start*/
			//方法：用来判断是否是微信内置的浏览器
			isWechat() {
				return String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === "micromessenger";
			},
			//方法:用来提取code
			getUrlCode(name) {
				return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) ||
				[, ''
				])[1].replace(/\+/g, '%20')) || null
			},
			//检查浏览器地址栏中微信接口返回的code
			checkWeChatCode(appid) {
				let code = this.getUrlCode('code');
				if (code) {
					this.getOpenidAndUserinfo(code)
				} else {
					this.getWeChatCode(appid);
				}
			},
			//请求微信接口，用来获取code
			getWeChatCode(appid) {

				let local = encodeURIComponent(window.location.href); //获取当前页面地址作为回调地址
				// let appid =appid;
				window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid +
					'&redirect_uri=' + local + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
			},
			//把code传递给后台接口，静默登录
			async getOpenidAndUserinfo(code) {
				await this.$utils.request({
					url: '/index/user/getUserInfoForWechat',
					data: {
						code
					},
				}).then((res) => {
					uni.setStorageSync("token", res.token);
					uni.setStorageSync("userinfo", res.userInfo);
				})

			},
			/*微信登录相关  end*/
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

	button::after {
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
