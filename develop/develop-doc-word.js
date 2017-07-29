load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/lib/FreemarkerUtil.js");
/**
 * 经测试wps可生成模板，word有些许问题
 */
Action(function(request){
	var tableName=request.tableName?request.tableName:"goods";
	var sqlExecute=DBUtil.getInstance(false,{
		url:"jdbc:mysql://192.168.1.15:3306/dlb_overall?characterEncoding=utf-8&characterSetResults=utf-8&useUnicode=false",
		user:"ymt",
		password:"yimiaotong2015",
		driver:"com.mysql.jdbc.Driver",
	});
	var tableInfo=DBService.getTableInfo(sqlExecute, tableName);
	var requestParam=tableInfo.fieldList.map(function(field){
		var type=field.type;
		var column=field.field;
		var comment=field.comment;
		var paramType=type.indexOf("int")==-1?"String":"Integer";
		var paramDesc=comment;
		var paramNeed="否";
		var paramName=column;
		return {
			paramName:paramName,
			paramType:paramType,
			paramNeed:paramNeed,
			paramDesc:paramDesc,
		}
	});
	var responseParam=requestParam;
	var json=JSON.stringify({
		interfaceName:tableName,
		interfaceDesc:tableName,
		interfacePath:tableName,
		requestParam:requestParam,
		responseParam:responseParam,
	});
	log("json",json);
	var fileName="develop-doc-word"+".docx";
//	FreemarkerUtil.printFile("template/ftl/demo.ftl", "template/output/output.txt", json)
	FreemarkerUtil.printFile("develop-doc-word.xml", fileName, json);
	
	$_response_$={
			errorCode:0
	}
})