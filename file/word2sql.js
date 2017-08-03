load("/lib/common.js");
load("/lib/function.js");
load("/lib/FileUtil.js");
load("/lib/DBUtil.js");
load("/service/TxtService.js");
/**
 * word表格数据复制到txt中，分析表格数据
 */
Action(function(request){
	var filepath="f:/config.txt";
	var filepath="f:/insurance.txt";
	var c=FileUtil.read(filepath);
	var lineList=TxtService.content2lineList(c);
	log("lineList",lineList);
	//换行型注释处理 完全找不到好的思路
	//换行数据合并
	lineList=combine(lineList);
	log("lineList 结合后",lineList);
	
//	c=lineList.map(function)
	var curTableName="";
	lineList.forEach(function(line){
		if(line==null) return;
		line=String(line);
		if(line.trim()=="") return;
		if(line.indexOf("表名")!=-1){
			curTableName=cut(line)[1].trim();
		}
		var dataList=cut(line);
		if(dataList.length<3) return;
//		log("dataList",dataList);
		if(dataList[2]=="N"){
			var column=dataList[0];
			column=column.trim();
			var type=dataList[1];
			var comment=dataList[3];
			var tpl="ALTER TABLE `{0}` MODIFY COLUMN `{1}` {2} not null COMMENT '{3}';";
			var arr=[curTableName,column,type,comment];
			var str=TxtService.replace(tpl, arr);
			logger.debug(str);
		}
		
	});
	$_response_$={
			errorCode:0
	}
})
function cut(line){
	return line.split("\t");
}
//换行注释以数字开头
function combine(lineList){
	var nLineList=new Array();
	var curLine=null;//当前有效字段行
//	var curComment=null;//当前积累注释
	function isColumn(line){
		if(!line) return false;
		return /^[a-z]{2,}.*$/i.test(line);
	}
	function isComment(line){
		if(!line) return false;
		return /^[0-9]{1,}.*$/i.test(line);
	}
	lineList.forEach(function(line){
		//以字母开头的认为是表字段
		if(isColumn(line)){
			nLineList.push(line);
			curLine=line;

		}else if(isComment(line)){
			nLineList.pop();
			curLine=curLine+line;
			nLineList.push(curLine);
		}else{
			curLine=null;
			nLineList.push(line);
		}
	})
	
	return nLineList;
}