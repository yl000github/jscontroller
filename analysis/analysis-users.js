load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/service/QuickCodeService.js");
load("/lib/FreemarkerUtil.js");
/**
 * 通过用户手机号，查出用户的车辆、订单等各种单据的信息，一定的报表
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
	//TODO
	$_response_$={
			errorCode:0
	}
})
