const url = "https://xy.szzyqy.xyz";
// const url = "/api";

const request = function(e) {
	uni.showLoading({
		title: "加载中..."
	})
	let token = uni.getStorageSync('token'), header= null;
	if(token){
		header = {
			"content-type": 'application/x-www-form-urlencoded',
			"Authorization":token.token_type + ' '+ token.access_token, 
		}
	}else{
		header = {
			"content-type": 'application/x-www-form-urlencoded',
		}
	}
	
	
	return new Promise((resolve, reject) => {
		uni.request({
			url: url +e.url,
 			header,
			method: e.method || "GET",
			data: e.data || {},
			success(res) {
				setTimeout(() => {
					uni.hideLoading()
				}, 500)
				if (res.data.code == 1) {
					return resolve(res.data.data);

				} else {
					if (res.data.msg == '请先登录') {
						uni.reLaunch({
							url: '/pages/index/index'
						})
					} else {
						uni.showModal({
							title: "错误提示",
							content: res,
							showCancel: false,
							confirmText: "我知道了",
							success() {

							}
						})
					}

				}

			},
			fail(err) {
				uni.hideLoading()
				uni.showModal({
					title: "错误提示",
					content: err,
					showCancel: false,
					confirmText: "我知道了",
					success() {

					}
				})
			}
		})
	})
}



export default {
	url,
	request
}
