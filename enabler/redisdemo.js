load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/RedisUtil.js");
Action(function(request){
//	checkParamsE(request, ["question"]);
//	var question=request.question;
	var ans=RedisUtil.hgetall("hhhh");
	$_response_$={
			c:"ok",
			ans:ans
	}
})