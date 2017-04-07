load("/lib/common.js");
load("/lib/function.js");
load("/lib/ExcelUtil.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
Action(function(request){
	var tableName="users";
	var sqlExecute=DBUtil.getInstance(false,{
		url:"jdbc:mysql://192.168.1.39:3306/dlb?characterEncoding=utf-8&characterSetResults=utf-8&useUnicode=false",
		user:"ymt",
		password:"yimiaotong2015",
		driver:"com.mysql.jdbc.Driver",
	});
	var columnList=DBService.getColumnList(sqlExecute, tableName);
	var userList=JSON.parse(sqlExecute.query({
		sql:"select * from users limit 10",
		param:{}
	}));
	var content=new Array();
	log("content",content)
//	content.push(1);
	log("content",content)
	log("columnList",columnList)
	content.push(columnList);
	userList.forEach(function(item){
		content.push(columnList.map(function(column){
			return item[column];
		}));
	});
//	var content=userList.unshift(columnList);
	log("content",content);
//	var data={
//			"2":{
//				"3":"2行3列的内容"
//			}
//	};
//	var arr=[
//	         [1,2,3,4],
//	         [5,5,5,5,5]
//	         ];
	var filepath="e:/jsexceldemo.xls";
	ExcelUtil.writeArray(filepath, content);
	$_response_$={
			errorCode:0
	}
})