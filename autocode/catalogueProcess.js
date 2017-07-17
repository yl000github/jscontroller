load("/lib/common.js");
load("/lib/function.js");
load("/service/DBService.js");
load("/lib/FileUtil.js");
/**
 * 根据文本获得接口字段名
 * 使用freemarker生成模板数据
 */
Action(function(request){
	var c=FileUtil.read("template/input/catalogue.txt");
	log("content",c)
	var columnList=c.split("\r\n");
	if(!columnList[columnList.length-1]){
		columnList.pop();
	}
	var content=columnList.map(function(line){
		//查找第一个和第二个空格，取中间的字符串
		var firstSpaceIndex=line.indexOf(" ");
		if(firstSpaceIndex==-1) return "";
		var secondSpaceIndex=line.indexOf("\t",firstSpaceIndex);
		log("firstSpaceIndex",firstSpaceIndex)
		log("secondSpaceIndex",secondSpaceIndex)
		var c=line.substring(firstSpaceIndex+1,secondSpaceIndex);
		return c;
	}).join("\r\n");
	var fileName="catalogue.txt";
	FileUtil.write("template/output/"+fileName, content, false);
	$_response_$={
			errorCode:0
	}
})

