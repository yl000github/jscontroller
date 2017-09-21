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
		var sqlObj=getSql(data.columnList, data.tableName)
		data.insertSql1=sqlObj.insertSql1;
		data.insertSql2=sqlObj.insertSql2;
		return data;
	}, {
		type:3,
		templateName:"quickCode-db.ftl"
	});
	
	$_response_$={
			errorCode:0
	}
})

function getSql(rawColumnList,tableName){
	//insert 语句
	var columnList=rawColumnList.filter(function(item){
		return item!="id";
	});
	var prefix=columnList.join(",");
	var suffix=columnList.filter(function(item){
		return item!="createTime"&&item!="lastUpdate";
	}).join(",@");
	var insertRaw="insert into @tableName(@prefix) values(@@suffix,NOW(),NOW())";
	var insertSql=insertRaw.replace("@tableName",tableName).replace("@prefix",prefix).replace("@suffix",suffix);
	//another insert sql
	var prefix=rawColumnList.join(",");
	var suffix=rawColumnList.filter(function(item){
		return true;
	}).join(",@");
	var insertRaw1="insert into @tableName(@prefix) values(@@suffix)";
	var insertSql1=insertRaw1.replace("@tableName",tableName).replace("@prefix",prefix).replace("@suffix",suffix);
	
	var prefix=rawColumnList.filter(function(item){
		return item!="id";
//		return item!="id"&&item!="createTime"&&item!="lastUpdate";
	}).join(",");
	var suffix=rawColumnList.filter(function(item){
		return item!="id"&&item!="createTime"&&item!="lastUpdate";
	}).join(",@");
	var insertRaw2="insert into @tableName(@prefix) values(@@suffix,now(),now()) on duplicate key update lastUpdate=now()";
	var insertSql2=insertRaw2.replace("@tableName",tableName).replace("@prefix",prefix).replace("@suffix",suffix);
	return {
		insertSql:insertSql,
		insertSql1:insertSql1,
		insertSql2:insertSql2,
	}
}