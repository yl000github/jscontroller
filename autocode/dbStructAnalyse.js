load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/lib/FreemarkerUtil.js");
Action(function(request){
	var dbConfig={
			url:"jdbc:mysql://192.168.1.40:3306/dlb?characterEncoding=utf-8&characterSetResults=utf-8&useUnicode=false",
			user:"ymt",
			password:"yimiaotong2015",
			driver:"com.mysql.jdbc.Driver",
			desc:"40"
	}
	var sqlExecute=DBUtil.getInstance(false,dbConfig);
	var data=getDBData(sqlExecute);
	$_response_$={
			errorCode:0,
			desc:dbConfig.desc,
			data:data
	}
});

function getDBData(sqlExecute){
	var tableNameList=DBService.getAllTableName(sqlExecute);
	var rs={};
	tableNameList.map(function(tableName){
		var detail=DBService.getColumnList(sqlExecute, tableName);
		rs[tableName]=detail;
	});
	return rs;
}
/**
 * 构建一个结果差异集，先根据1来一次，再根据2来一次
 * @param data1
 * @param data2
 */
function compare(data1,data2){
//	var tableNum1=getKeyNums(data1);
//	var tableNum2=getKeyNums(data2);
//	var bigData=tableNum1>tableNum1?data1:data2;
//	var smallData=tableNum1>tableNum1?data1:data2;
	var rs={};
	function innerCompare(data1,data2){
		var desc1=data1.desc;
		var desc2=data2.desc;
		for(var tableName in data1){
			var detail1=data1[tableName];
			if(data2.hasOwnProperty(tableName)){
				var detail2=data2[tableName];
				
				
				
			}else{
				rs[tableName]={
						desc1:"存在表",
						desc2:"不存在表",
				}
			}
		}
	}
	
	
	
	
	
	
}
function getKeyNums(m){
	if(!m) return 0;
	var t=0;
	for(var key in m){
		t++;
	}
	return t;
}