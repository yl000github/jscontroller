load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/lib/FreemarkerUtil.js");
/**
 * 搜索binlog
 */
Action(function(request){
	var tableName=request.tableName?request.tableName:"blacklist";
	var sqlExecute=DBUtil.getInstance(false,{
		url:"jdbc:mysql://192.168.1.21:3306/dlb?characterEncoding=utf-8&characterSetResults=utf-8&useUnicode=false",
		user:"root",
		password:"ymt21",
		driver:"com.mysql.jdbc.Driver",
	});
	var logList=JSON.parse(sqlExecute.query({
		sql:"show binlog events limit 10000",
		param:{}
	}));
	log("logList.length",logList.length);
	logList.forEach(function(obj){
		if(obj.Event_type!="Query"){
			logger.debug(obj.Info);
		}
	});
	$_response_$={
			errorCode:0
	}
})