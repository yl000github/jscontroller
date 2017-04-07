var DBUtil={
	getInstance:function(transaction,config){
		var DBEnabler=require("enabler.db.DBEnabler");
		var autoCommit = typeof transaction == 'boolean' ? !transaction : true;
		if(config){
			config.driver=config.driver?config.driver:"com.mysql.jdbc.Driver";
			var sqlExecute=DBEnabler.open(JSON.stringify(config),autoCommit);
		}else{
			var sqlExecute=DBEnabler.open(autoCommit);
		}
		return new SqlExecute(sqlExecute);
//		return {
//			query:function(obj){
//				return sqlExecute.query(JSON.stringify(obj));
//			},
//			execute:function(obj){
//				return sqlExecute.execute(JSON.stringify(obj));
//			},
//			commitAndClose:function(){
//				return sqlExecute.commitAndClose();
//			},
//			rollbackAndClose:function(){
//				return sqlExecute.rollbackAndClose();
//			},
//		}
	}
}

var SqlExecute=function (handler){
	this.handler=handler;
}
SqlExecute.prototype.query=function(obj){
	return this.handler.query(JSON.stringify(obj));
}
/**
 * 新增返回id，更新返回-1
 * @param obj
 * @returns
 */
SqlExecute.prototype.execute=function(obj){
	return this.handler.execute(JSON.stringify(obj));
}
SqlExecute.prototype.commitAndClose=function(){
	return this.handler.commitAndClose();
}
SqlExecute.prototype.rollbackAndClose=function(){
	return this.handler.rollbackAndClose();
}