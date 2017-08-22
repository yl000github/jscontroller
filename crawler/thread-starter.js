load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/ThreadUtil.js");
load("/lib/JsoupUtil.js");
Action(function(request){
	var param=JSON.stringify({
		"sss":123000,
		"sss1":123,
		"sss2":123,
	});
	ThreadUtil.newThread("/crawler/_thread.js", param);
	log("outside")
	$_response_$={
		errorCode:0
	}
})