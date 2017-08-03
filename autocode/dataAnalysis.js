load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/lib/FreemarkerUtil.js");
/**
 * 读出表字段
 * 使用freemarker生成模板数据
 */
Action(function(request){
	var phoneNO=request.tableName?request.tableName:"15997469576";
	var userID=request.userID?request.userID:"1";
	var sqlExecute=DBUtil.getInstance(false,{
		url:"jdbc:mysql://192.168.1.15:3306/dlb?characterEncoding=utf-8&characterSetResults=utf-8&useUnicode=false",
		user:"ymt",
		password:"yimiaotong2015",
		driver:"com.mysql.jdbc.Driver",
	});
	var users=JSON.parse(sqlExecute.query({
		sql:"select * from users where "+
		phoneNO?"phoneNO like '%@phoneNO%'":""+
				userID?"userID = @phoneNO":"",
		param:{
			userID:userID,
			phoneNO:phonenO
		}				
	}));
	if(users.length>0){
		var car=JSON.parse(sqlExecute.query({
			sql:"select * from usercar where userID=@userID",
			param:{
				userID:userID,
				phoneNO:phonenO
			}				
		}));
		
		
		
		
		
		
	}
	
	
	$_response_$={
			errorCode:0
	}
})