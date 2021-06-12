import util from './util.js'

const uploadFile = function(args={}){
	return new Promise((resolve,reject)=>{
		uni.uploadFile({
			url:util.url + "/api/wx/uploadimages_file.html",
			// files:args.files,
			filePath:args.filePath,
			name:'file',
			success:(res)=>{
				return resolve(res);
			},
			fail(err) {
				return reject(err);
			}
		})
	})
}



export default uploadFile;

