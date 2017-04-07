load("/lib/common.js");
load("/lib/function.js");
load("/lib/ExcelUtil.js");
load("/lib/FileUtil.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
/**
 * 根据表名，生成word表格数据
 */
Action(function(request){
	var tableName=request.tableName?request.tableName:"kind";
	var filepath="e:/autocode/interface-output.txt";
	var sqlExecute=DBUtil.getInstance(false,{
		url:"jdbc:mysql://192.168.1.21:3306/dlb_overall?characterEncoding=utf-8&characterSetResults=utf-8&useUnicode=false",
		user:"ymt",
		password:"yimiaotong2015",
		driver:"com.mysql.jdbc.Driver",
	});
	var tableInfo=DBService.getTableInfo(sqlExecute, tableName)
	log("tableInfo",tableInfo);
	if(tableInfo){
		var str=tableInfo.fieldList.map(function(fieldInfo){
			return fieldInfo.field+"\tString\t是\t"+fieldInfo.comment;
		}).join("\n");
		FileUtil.write(filepath, str);
	}
//	ExcelUtil.writeArray(filepath, content);
	$_response_$={
			errorCode:0,
			data:tableInfo
	}
})