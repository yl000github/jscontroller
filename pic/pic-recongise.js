load("/lib/common.js");
load("/lib/function.js");
load("/lib/BaiduRecogniseUtil.js");
/**
 * 百度的图像识别，使用api技术
 */
Action(function(request){
	var path=request.path||"e:/data.png";
	var rs=JSON.parse(BaiduRecogniseUtil.recognise(path));
	$_response_$={
			errorCode:0,
			data:rs
	}
});

