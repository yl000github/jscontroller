load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/PageUtil.js");
load("/lib/JsoupUtil.js");
Action(function(request){
	checkParamsE(request, ["word"]);
	var word=request.word;
//	var url="http://dict.youdao.com/";
	var url="http://www.iciba.com/"+word;
	
	var doc=JsoupUtil.open(url);
//	var ans=doc.getElementsByClass("container-left").get(0).getElementsByTag("ul").get(0).text();
	var ans=doc.select(".container-left")[0].select("ul")[0].text();
	log("",$("html").text());
	$_response_$={
			c:"ok",
			ans:ans
	}
})