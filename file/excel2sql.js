load("/lib/common.js");
load("/lib/function.js");
load("/lib/ExcelUtil.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
Action(function(request){
	var filepath="E:/doc/04架构设计/短信组件/短信汇总.xlsx";
	var content=ExcelUtil.read(filepath);
	log("content before",content);
	//JSON.parse 和eval解析出的结果不一样，难以分析其中的原因
	var obj=eval("("+content+")");
//	var obj=JSON.parse(String(content));
	log("content after",obj);
//	var lineNoList=[8,22,23,24,42,43,44,48,49];
	var lineNoList=[27,31];
	for(var lineNo in obj){
		if(lineNo==0||lineNo==1||lineNo==2) continue;
		//过滤不用的行
		if(lineNoList.indexOf(parseInt(lineNo)+1)==-1) continue;
		var lineObj=obj[lineNo];
//		log("lineObj",lineObj)
		var applyName=lineObj[0];
		var title=lineObj['1'];
		var templateContent=lineObj[2];
		var ytxCode=lineObj[4];
		var templateCode=lineObj[5];
		if(!templateCode) continue;
		var sql="insert into template(code,platformTemplateName,platformContent,limitCount,smsTemplateCode,smsContent,smsName,createTime,lastUpdate) values(@code,@platformTemplateName,@platformContent,@limitCount,@smsTemplateCode,@smsContent,@smsName,NOW(),NOW());";
		sql=replace(sql,"@code",templateCode);
		sql=replace(sql,"@platformTemplateName",title);
		sql=replace(sql,"@platformContent",templateContent);
		sql=replace(sql,"@limitCount",500);
		sql=replace(sql,"@smsTemplateCode",ytxCode);
		sql=replace(sql,"@smsContent",templateContent);
		sql=replace(sql,"@smsName","云通讯");
//		log("sql",sql);
		logger.debug(sql)
	}
	
	
	$_response_$={
			errorCode:0
	}
})
function replace(source,raw,repl){
	return source.replaceAll(raw,"\'"+repl+"\'");
}