load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/lib/FreemarkerUtil.js");
/**
 * 读出表字段
 * 使用freemarker生成模板数据
 */
Action(function(request){
	var tableName=request.tableName?request.tableName:"blacklist";
	var sqlExecute=DBUtil.getInstance(false,{
		url:"jdbc:mysql://192.168.1.21:3306/dlb_overall2?characterEncoding=utf-8&characterSetResults=utf-8&useUnicode=false",
		user:"ymt",
		password:"yimiaotong2015",
		driver:"com.mysql.jdbc.Driver",
	});
	var columnList=DBService.getColumnList(sqlExecute, tableName);
	log("columnList",columnList);
	var columnListStr=columnList.filter(function(item){
		return item!="id"&&item!="createTime"&&item!="lastUpdate";
	}).map(function(item){
		return "\""+item+"\"";
	}).join(",");
	log("columnListStr",columnListStr);
	var json=JSON.stringify({
		tableName:tableName,
		columnList:columnList,
		columnListStr:columnListStr
	})
	var fileName="javaDBCode"+".txt";
//	FreemarkerUtil.printFile("template/ftl/demo.ftl", "template/output/output.txt", json)
	FreemarkerUtil.printFile("javaDBCode.ftl", fileName, json);
	
	$_response_$={
			errorCode:0
	}
})