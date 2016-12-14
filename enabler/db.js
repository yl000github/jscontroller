(function(request){
	load("/lib/common.js");
	load("/lib/function.js");
	load("/lib/DBUtil.js");
	load("/lib/JRobotUtil.js");
//	var DBEnabler=require("enabler.db.DBEnabler");
//	var sqlExecute=DBEnabler.open(false);
//	var str=sqlExecute.query(JSON.stringify({
//		sql:"select * from users where id=@id",
//		param:{
//			id:1
//		}
//	}));
//	var sqlExecute=DBEnabler.open(false);
//	try {
//		var str=sqlExecute.execute(JSON.stringify({
//			sql:"insert into users(phoneNO) values(@phoneNO)",
//			param:{
//				phoneNO:55555555
//			}
//		}));
//		log("str",str);
//		throw "error";
//		sqlExecute.commitAndClose();
//	} catch (e) {
//		log("ERROR",e.toString());
//		sqlExecute.rollbackAndClose();
//	}
	
	var sqlExecute=DBUtil.getInstance(false);
//	log("rs",sqlExecute.query(JSON.stringify({
//		sql:"select * from users where id=@id",
//		param:{
//			id:1
//		}
//	})));
	log("rs",sqlExecute.query({
		sql:"select * from users where id=@id",
		param:{
			id:1
		}
	}));
	$_response_$={
			c:"ok",
//			rs:obj.phoneNO
	}
})($_request_param_$)