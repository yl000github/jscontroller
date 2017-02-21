load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
(function(request){
	var tableName=$_request_param_$.tableName;
	if(!tableName){
		$_response_$={
				c:"tableName不能为空"
		}
		return ;
	}
	var sqlExecute=DBUtil.getInstance(false);
	var rs=JSON.parse(sqlExecute.query({
		sql:"desc "+tableName,
		param:{
		}
	}));
	log("desc resources",rs);
	var columnList=rs.map(function(item,index){
		return item.Field;
	});
	
	$_response_$={
			sql:getSql(columnList,tableName),
			code:getCode(columnList),
	}
	
})($_request_param_$);
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
function getCode(rawArray){
	var inParam=rawArray.join(",");
	var inParamRequest=rawArray.map(function(item){
		return "request."+item+"";
	}).join(",");
	var inParamObject="{"+rawArray.map(function(item){
		return item+":"+item;
	}).join(",")+"}";
	return {
		inParam:inParam,
		inParamRequest:inParamRequest,
		inParamObject:String(inParamObject)
	}
}