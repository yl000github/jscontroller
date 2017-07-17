load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/lib/FreemarkerUtil.js");
load("/lib/FileUtil.js");
/**
 * 自动生成type枚举的基本数据
 */
Action(function(request){
	var c=FileUtil.read("template/input/enumSql.txt");
	log("content",c)
	var columnList=c.split("\r\n");
	if(!columnList[columnList.length-1]){
		columnList.pop();
	}
	
	var objList=columnList.map(function(line){
		var arr=line.split("\t");
//		log("数组",arr);
		return {
			codeType:arr[0],
			typeName:arr[1],
			codeValue:arr[2],
			codeName:arr[3],
			priority:arr[4],
		}
	});
	log("objList",objList)
	//type 去重
	var typeList=new Array();
	var ra=new Array();
    for(var i = 0; i < objList.length; i ++){
    	var codeType=objList[i].codeType;
        if(ra.indexOf(codeType)<0){
           ra.push(codeType);
           typeList.push(objList[i]);
        }
    }
	
	var json=JSON.stringify({
		objList:objList,
		typeList:typeList
	})
	var fileName="enumSql"+".txt";
////	FreemarkerUtil.printFile("template/ftl/demo.ftl", "template/output/output.txt", json)
	FreemarkerUtil.printFile("enumSql.ftl", fileName, json);
	
	$_response_$={
			errorCode:0
	}
})

