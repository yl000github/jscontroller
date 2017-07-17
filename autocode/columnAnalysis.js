load("/lib/common.js");
load("/lib/function.js");
load("/service/DBService.js");
load("/lib/FileUtil.js");
/**
 * 针对单列做一些处理
 */
Action(function(request){
	var c=FileUtil.read("template/input/column.txt");
	log("content",c)
	var columnList=c.split("\r\n");
	if(!columnList[columnList.length-1]){
		columnList.pop();
	}
	//自动添加前后缀
	var outputList=columnList.map(function(column){
		return "hset smsServer:blackList "+column+" 0";
	});
	var outputStr=outputList.join("\r\n");
	//文本重复内容分析
	var repeatObj={};
	columnList.forEach(function(column){
		if(repeatObj[column]){
			repeatObj[column]++;
		}else{
			repeatObj[column]=1;
		}
	});
	var repeatList=[];
	for(var key in repeatObj){
		var str=key+","+repeatObj[key];
		repeatList.push(str);
	}
	var repeatStr=repeatList.join("\r\n");
	var content="改造的列："+"\r\n"+outputStr+"\r\n\r\n\r\n 统计的列\r\n"+repeatStr;
	FileUtil.write("template/output/column.txt", content, false);
	$_response_$={
			errorCode:0
	}
})

