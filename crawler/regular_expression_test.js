load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/FileUtil.js");
load("/lib/JsoupUtil.js");
/**
 * \w [a-zA-Z0-9_]
 * 
 * *尽可能匹配多
 * *?极可能匹配少
 * 
 * match方法特性
 * 默认是按行搜索
 */
Action(function(request){
	var c=FileUtil.read("f:/dd1.txt");
//	log("match",c.match(/<div.*?>/g))
	log("match",c.match(/Chapter [0-9]*/gm))
	$_response_$={
		errorCode:0
	}
})