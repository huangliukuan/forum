import util from './util.js'

const uploadFile = function(args={}){
	return new Promise((resolve,reject)=>{
		uni.uploadFile({
			url: util.url + "/index/upload/upload",
			// files:args.files,
			filePath:args.filePath,
			name:'img',
			success:(res)=>{
				res = JSON.parse(res.data);
				return resolve(res);
				
			},
			fail(err) {
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



export default uploadFile;

