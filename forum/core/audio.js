

let audioId = 0;
const innerAudioContext = uni.createInnerAudioContext();
const audioEvent = function(id,url,e){
	if(audioId != id){
		innerAudioContext.destroy();
		audioId = id;
		innerAudioContext.src = url;
		innerAudioContext.autoplay = true;
		
	}else{
		audioId = 0;
		innerAudioContext.pause()
	}
	return e(audioId)
}

export default audioEvent;