load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/service/QuickCodeService.js");
load("/lib/FreemarkerUtil.js");
/**
 * 高可替换性
 * 读出表字段
 * 使用freemarker生成模板数据
 */
Action(function(request){
	var tableName=request.tableName?request.tableName:"goods";
	var ip=request.ip?request.ip:"21";
	var dbName=request.dbName?request.dbName:"dlb_overall2";
	var sqlExecute=DBUtil.getInstance(false,{
		url:"jdbc:mysql://192.168.1."+ip+":3306/"+dbName+"?characterEncoding=utf-8&characterSetResults=utf-8&useUnicode=false",
		user:"ymt",
		password:"yimiaotong2015",
		driver:"com.mysql.jdbc.Driver",
	});
	var input=QuickCodeService.inputDB(sqlExecute, tableName);
	QuickCodeService.process(input, function(data){
		return data;
	}, {
		type:3,
		path:"C:/Users/Administrator/Desktop/fast.txt",
		templateName:"quickCode-db.ftl"
	});
	
	$_response_$={
			errorCode:0
	}
})