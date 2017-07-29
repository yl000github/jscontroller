load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/service/QuickCodeService.js");
load("/lib/FreemarkerUtil.js");
/**
 * 1.通过表名快速构建产生数据的代码
 * 2.自己修改build的接口代码
 * 3.产生数据
 */
Action(function(request){
	var tableName=request.tableName?request.tableName:"blacklist";
	
	var sqlExecute=DBUtil.getInstance(false,{
		url:"${url}",
		user:"ymt",
		password:"yimiaotong2015",
		driver:"com.mysql.jdbc.Driver",
	});
	//获取insert语句
	
	var sql="${sql}";
	var param={
		<#list columnList as column>
		${column.key}:${(column.value)!"null"},
		</#list>
	};
	var rs=JSON.parse(sqlExecute.execute({
		sql:sql,
		param:param
	}));
	log("rs",rs);
	
	$_response_$={
			errorCode:0
	}
})