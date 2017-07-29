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
		},
		getInsertSql:function(tableName,columnList){
			//insert 语句
			var columnList=columnList.filter(function(item){
				return item!="id";
			});
			var prefix=columnList.join(",");
			var suffix=columnList.filter(function(item){
				return item!="createTime"&&item!="lastUpdate";
			}).join(",@");
			var insertRaw="insert into @tableName(@prefix) values(@@suffix,NOW(),NOW())";
			var insertSql=insertRaw.replace("@tableName",tableName).replace("@prefix",prefix).replace("@suffix",suffix);
			return insertSql;
		},
		/**
		 * 根据字段名判断
		 * 
		 * @param key
		 * @returns
		 */
		getRandValue:function(key){
			var sColumn=key.toLowerCase();
//			log("sColumn",sColumn)
			var value=randomStr(5);
			var numList=["status","id","val","priority","type","mode","amount","qty"];
			var dateList=["date","time","lastupdate"]; 
			for (var i = 0; i < numList.length; i++) {
				if(sColumn.indexOf(numList[i])!=-1){
					value=randomNum(1);
					return value;
				}
			}
			for (var i = 0; i < dateList.length; i++) {
				if(sColumn.indexOf(dateList[i])!=-1){
					value=new Date().format("yyyy-MM-dd HH:mm:ss");
					return value;
				}
			}
			return value;

		},
		/**
		 * 根据字段类型判断
		 * {
					field:obj['Field'],
					type:obj['Type'],
					key:obj['Key'],
					comment:comment,
				}
		 * @param key
		 * @returns
		 */
		getRandValueType:function(fieldList){
			var mapList= fieldList.map(function(field){
				var type=field.type;
				type=type.toLowerCase();
				var value=null;
				if(type.indexOf("int")!=-1){
					value=parseInt(Math.random()*1000);
				}else if(type.indexOf("varchar")!=-1){
					var l=type.indexOf("(");
					var r=type.indexOf(")");
					var len=type.substring(l+1,r);
//					log("l",l);
//					log("r",r);
//					log("len",len);
					len=(len-1)>=0?(len-1):0;
					value=randomStr(len);;
				}else if(type.indexOf("decimal")!=-1){
					value=parseInt(Math.random()*1000);
				}else if(type.indexOf("date")!=-1){
					value=new Date().format("yyyy-MM-dd HH:mm:ss");
				}else if(type.indexOf("datetime")!=-1){
					value=new Date().format("yyyy-MM-dd HH:mm:ss");
				}else if(type.indexOf("time")!=-1){
					value=new Date().format("yyyy-MM-dd HH:mm:ss");
				}else if(type.indexOf("text")!=-1){
					value=randomStr(50);
				}
				return {
					column:field.field,
					value:value
				}
			});
			log("mapList",mapList)
			var obj={};
			mapList.forEach(function(m){
				var key=m.column;
				var value=m.value;
				obj[key]=value;
			});
			log("构造的随机数据为:",obj);
			return obj;
		}
}