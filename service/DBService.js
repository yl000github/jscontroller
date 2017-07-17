var DBService={
		getColumnList:function(sqlExecute,tableName){
			var rs=JSON.parse(sqlExecute.query({
				sql:"desc "+tableName,
				param:{
				}
			}));
			var columnList=rs.map(function(item,index){
				return item.Field;
			});
			return columnList;
		},
		/**
		 * 获得表注释、字段名、类型、长度、注释、特殊约束
		 * @param sqlExecute
		 * @param tableName
		 * @returns
		 */
		getTableInfo:function(sqlExecute,tableName){
			var createSql=JSON.parse(sqlExecute.query({
				sql:"SHOW CREATE TABLE "+tableName,
				param:{
				}
			}))[0]["Create Table"];
			var tableComment=createSql.substring(createSql.indexOf("COMMENT=")+9,createSql.length-1);
			
			var fieldList=JSON.parse(sqlExecute.query({
				sql:"show full columns from "+tableName,
				param:{
				}
			}));
			fieldList=fieldList.map(function(obj){
				var comment=obj['Comment'];
				var k=comment.indexOf("\n");
				comment=k!=-1?comment.substring(0,k):comment;
				return{
					field:obj['Field'],
					type:obj['Type'],
					key:obj['Key'],
					comment:comment,
				}
			});
			return{
				tableName:tableName,
				tableComment:tableComment,
				fieldList:fieldList
			};
		},
		getAllTableName:function(sqlExecute){
			var sql="SHOW TABLES ";
			return JSON.parse(sqlExecute.query({
				sql:sql,
				param:{
				}
			})).map(function(item){
				for(var key in item){
					return item[key];
				}
			});
		}
		
}