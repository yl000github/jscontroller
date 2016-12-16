load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/PageUtil.js");
load("/lib/JsoupUtil.js");
load("/lib/CodeUtil.js");
Action(function(request){
	checkParamsE(request, ["firstWord"]);
	var firstWord=request.firstWord;
	firstWord=CodeUtil.urlEncode(firstWord, 'gb2312');
	var url="http://chengyu.t086.com/chaxun.php?q1=" +
		firstWord +
		"&q2=&q3=&q4=";
	var doc=JsoupUtil.open(url);
	var ans=doc.select("td.td1");
	ans=arrayMap(ans, function(item){
		return item.text();
	}).filter(function(item){
		return item.length==4;
	});
	$_response_$={
			c:"ok",
			ans:ans
	}
})