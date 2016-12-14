var DBUtil={
	getInstance:function(transaction){
		var DBEnabler=require("enabler.db.DBEnabler");
		var autoCommit = typeof transaction == 'boolean' ? !autoCommit : true;
		var sqlExecute=DBEnabler.open(autoCommit);
		return {
			query:function(obj){
				return sqlExecute.query(JSON.stringify(obj));
			},
			execute:function(obj){
				return sqlExecute.execute(JSON.stringify(obj));
			},
			commitAndClose:function(){
				return sqlExecute.commitAndClose();
			},
			rollbackAndClose:function(){
				return sqlExecute.rollbackAndClose();
			},
		}
	}
}