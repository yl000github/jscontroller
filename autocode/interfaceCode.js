load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/lib/FreemarkerUtil.js");
load("/lib/FileUtil.js");
/**
 * 根据文本获得接口字段名
 * 使用freemarker生成模板数据
 */
Action(function(request){
	var c=FileUtil.read("template/input/interface.txt");
	log("content",c)
	var columnList=c.split("\r\n");
	if(!columnList[columnList.length-1]){
		columnList.pop();
	}
	//接口json demo新增智能识别功能 ID，status为数字 date time为日期，其余为随机字符串
	var kvList=columnList.map(function(column){
		var sColumn=column.toLowerCase();
		log("sColumn",sColumn)
		var value=randomStr(5);
		var numList=["status","id","val","priority","type","mode","amount"];
		var dateList=["date","time","lastupdate"]; 
		for (var i = 0; i < numList.length; i++) {
			if(sColumn.indexOf(numList[i])!=-1){
				value=randomNum(1);
				return {
					key:column,
					value:value
				}
			}
		}
		for (var i = 0; i < dateList.length; i++) {
			if(sColumn.indexOf(dateList[i])!=-1){
				value=new Date().format("yyyy-MM-dd HH:mm:ss");
				return {
					key:column,
					value:value
				}
			}
		}
//		if(sColumn.indexOf("status")!=-1){
//			value=randomNum(1);
//		}else if(sColumn.indexOf("id")!=-1){
//			value=randomNum(1);
//		}else if(sColumn.indexOf("date")!=-1){
//			value=new Date().format("yyyy-MM-dd HH:mm:ss");
//		}else if(sColumn.indexOf("time")!=-1){
//			value=new Date().format("yyyy-MM-dd HH:mm:ss");
//		}else if(sColumn.indexOf("amount")!=-1){
//			value=randomNum(5);
//		}
		return {
			key:column,
			value:value
		}
	});
	log("kvList",kvList)
	var json=JSON.stringify({
		columnList:columnList,
		kvList:kvList
	})
	var fileName="interface-code"+".txt";
//	FreemarkerUtil.printFile("template/ftl/demo.ftl", "template/output/output.txt", json)
	FreemarkerUtil.printFile("javainterface.ftl", fileName, json);
	
	$_response_$={
			errorCode:0
	}
})

