load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/HttpUtil.js");
Action(function(request){
	checkParamsE(request, ["question"]);
	var question=request.question;
//	var url="http://dict.youdao.com/";
	var ans=TuLingUtil.ask(question);
	
	$_response_$={
			c:"ok",
			ans:ans
	}
})