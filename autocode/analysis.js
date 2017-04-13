load("/lib/common.js");
load("/lib/function.js");
load("/lib/ExcelUtil.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
Action(function(request){
	var arr=[
	         "14:3306/yibaohui","24:3306/yibaohui",
	         "20:3306/dlb","20:3306/dlb2",
	         "20:3306/dlb_test","21:3306/dlb",
	         "39:3306/dlb","39:3306/dlb_uat","40:3306/dlb","55:3306/dlb",
	         ];
	var sql="select * from hirepurchaseagreement where userID=(select id from users where phoneNO='15919505409')";
//	var sql="select * from hirepurchaseagreement where userID=(select id from users where phoneNO='15884571025')";
//	var sql="select h.*,ups.id upsID,ups.payMethod,ups.payAccount,ups.contractID from hirepurchaseagreement h,userrepaymentsetting ups where h.curFirstRepayDate <= @payDate and h.status =1 and h.userRepaymentSettingID = ups.id ";
	mutiDB(arr,sql);
	$_response_$={
			errorCode:0
	}
})
function mutiDB(arr,sql){
	log("要连接的数据库为",arr);
	log("要执行的sql为",sql);
	arr.forEach(function(url){
		var sqlExecute=DBUtil.getInstance(false,{
			url:"jdbc:mysql://192.168.1."+url+"?characterEncoding=utf-8&characterSetResults=utf-8&useUnicode=false",
			user:"ymt",
			password:"yimiaotong2015",
			driver:"com.mysql.jdbc.Driver",
		});
		log("url",url);
		var result=JSON.parse(sqlExecute.query({
			sql:sql,
			param:{}
		}));
		log("result",result);
	})
}