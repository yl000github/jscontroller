load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/lib/FreemarkerUtil.js");
load("/lib/FileUtil.js");
/**
 * 道的路径转换
 */
Action(function(request){
	var c=FileUtil.read("e:/record2.txt");
//	log("content",c)
	var columnList=c.split("\r\n");
	if(!columnList[columnList.length-1]){
		columnList.pop();
	}
	log("columnList.length",columnList.length)
//	var json=JSON.stringify({
//		columnList:columnList
//	})
	var h2=768,w2=1366;
	var h1=500,w1=800,h1Num=40,w1Num=40;
	var h1Piece=h1/h1Num;
	var w1Piece=w1/w1Num;
	var posList=columnList.map(function(line){
//		log("line",line)
		var l=line.indexOf("(");
//		log("l",l)
		var r=line.indexOf(")");
//		log("r",r)
		var pos=line.substring(l+1,r);
//		log("pos",pos);
		var loc=pos.split(",");
		return {
			x:loc[0],
			y:loc[1]
		}
	});
//	.map(function(pos){
//		//坐标转换
//		return {
//			x:w1/w2*pos.x,
//			y:h1/h2*pos.y,
//		}
//	}).map(function(pos){
//		//返回具体的格子坐标
//		return {
//			x:parseInt(pos.x/w1Piece),
//			y:parseInt(pos.y/h1Piece),
//		}
//	});
//	//相邻相同坐标合并
//	var rsArr=[];
//	var curPos=null;
//	posList.forEach(function(pos){
//		if(!curPos) {
//			curPos=pos;
//			rsArr.push(pos);
//		}else{
//			if(curPos.x==pos.x&&curPos.y==pos.y){
//				return;
//			}else{
//				curPos=pos;
//				rsArr.push(pos);
//			}
//		}
//	});
	log("posList.length",posList.length)
	log("columnList last",columnList[columnList.length-1]);
	log("posList last",posList[posList.length-1]);
	var str=JSON.stringify(posList);
	str="var robotPosList="+str;
	var fileName="D:/workspace/dao/js/robot-output.js";
//	var fileName="e:/robot-output"+".js";
	FileUtil.write(fileName, str, false);
	$_response_$={
			errorCode:0
	}
})

