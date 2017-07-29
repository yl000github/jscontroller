load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/service/QuickCodeService.js");
load("/lib/FreemarkerUtil.js");
load("/lib/ClipboardUtil.js");
/**
 * 1.根据表字段生成随机数据
 * 2.某行代码复制
 * 3.自定义修改-参见buildData
 */
Action(function(request){
	var tableName=request.tableName?request.tableName:"incomestatement";
	//数据库配置
	var config={
			url:"jdbc:mysql://192.168.1.15:3306/dlb?characterEncoding=utf-8&characterSetResults=utf-8&useUnicode=false",
			user:"ymt",
			password:"yimiaotong2015",
			driver:"com.mysql.jdbc.Driver",	
	}
	var sqlExecute=DBUtil.getInstance(false,config);
	var columnList=DBService.getColumnList(sqlExecute, tableName);
	log("columnList",columnList);
	var tableInfo=DBService.getTableInfo(sqlExecute, tableName);
	var insertSql=DBService.getInsertSql(tableName, columnList);
	//构造数据记录数
	var count=1;
	while(count--){
		//全随机数据
//		var testData=DBService.getRandValueType(tableInfo.fieldList);
		var testData=demoDataCopy(sqlExecute, tableName, 1);
		var rs=JSON.parse(sqlExecute.execute({
			sql:insertSql,
			param:testData
		}));
		log("rs",rs);
	}
//	var dataList=demoDataCopy(sqlExecute, tableName, 137);
	
	$_response_$={
			errorCode:0
	}
	
	
})

function demoDataCopy(sqlExecute,tableName,id){
	var demoData=JSON.parse(sqlExecute.query({
		sql:"select * from "+tableName+" where id=@id",
		param:{
			id:id
		}
	}))[0];
	return demoData;
}