load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/service/QuickCodeService.js");
load("/lib/FreemarkerUtil.js");
load("/lib/ClipboardUtil.js");
/**
 * 1.通过表名快速构建产生数据的代码
 * 2.自己修改build的接口代码
 * 3.产生数据
 */
Action(function(request){
	var tableName=request.tableName?request.tableName:"usergoodsorder";
	var config={
			url:"jdbc:mysql://192.168.1.15:3306/dlb?characterEncoding=utf-8&characterSetResults=utf-8&useUnicode=false",
			user:"ymt",
			password:"yimiaotong2015",
			driver:"com.mysql.jdbc.Driver",	
	}
	var sqlExecute=DBUtil.getInstance(false,config);
	var columnList=DBService.getColumnList(sqlExecute, tableName);
	log("columnList",columnList);
	
	
	
	var insertSql=DBService.getInsertSql(tableName, columnList);
	//全随机数据
	
//	var demoData=JSON.parse(sqlExecute.query({
//		sql:"select * from "+tableName+" limit 1",
//		param:{
//		}
//	}));
	
//	var dataList=demoDataRand(columnList);
	var dataList=demoDataCopy(sqlExecute, tableName, 137);
	
	
	
	log('dataList',dataList)
	
	var json=JSON.stringify({
		tableName:tableName,
		columnList:dataList,
		url:config.url,
		sql:insertSql,
		sql:insertSql,
		sql:insertSql,
	})
	var fileName="../../buildData/build.js";
//	FreemarkerUtil.printFile("template/ftl/demo.ftl", "template/output/output.txt", json)
	FreemarkerUtil.printFile("buildData-active.ftl", fileName, json);
	
	$_response_$={
			errorCode:0
	}
	
	
})

function demoDataRand(columnList){
	return columnList.map(function(column){
		var value='DBService.getRandValue(\"'+column+'\")';
		if(column=='id') value='null';
		if(column=='createTime'||column=='lastUpdate') value='null';
		return {
			key:column,
			value:value
//			value:'\"'+value+'\"'
		}
	});
}
function demoDataCopy(sqlExecute,tableName,id){
	var demoData=JSON.parse(sqlExecute.query({
		sql:"select * from "+tableName+" where id=@id",
		param:{
			id:id
		}
	}))[0];
	var arr=[];
	for(var key in demoData){
		var value=demoData[key];
		if(key=='id') value=null;
		arr.push({
			key:key,
			value:value?"\'"+value+"\'":null,
//			value:demoData[key],
		})
	}
	return arr;
}