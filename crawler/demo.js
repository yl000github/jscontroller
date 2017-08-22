load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/HttpUtil.js");
load("/lib/JsoupUtil.js");
Action(function(request){
//	checkParamsE(request, ["word"]);
//	var word=request.word;
	var url="http://www.mmjpg.com/mm/7/2";
	
	var doc=JsoupUtil.open(url);
	var ans=doc.select("div.content").select("a").select("img").attr("src");
	log("图片路径",ans);
	
	var headers={
			"user-agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36",
			"Referer":"http://www.mmjpg.com",
	}
	HttpUtil.download(ans, "f:/jscontroller.jpg", headers);
	$_response_$={
		errorCode:0
	}
})