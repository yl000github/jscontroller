load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/HttpUtil.js");
load("/lib/JRobotUtil.js");
/**
 * 遗留问题
 * 1.无法获取剪切板
 * 2.无法复制信息
 */
Action(function(request){
//	checkParamsE(request, ["question"]);
	var line=request.word?request.word:"hello yang you are best!";
	var times=request.times?request.times:1;
	JRobotUtil.shortCut("switchPage");
	while(times--){
		//获得聊天对象的言语
		var word=getWord();
		log("聊天对象的谈话内容",word);
		if(!word) continue;
		var ans=TuLingUtil.ask(word);
		log("回答的内容",ans);
		JRobotUtil.inputText(ans);
		JRobotUtil.shortCut("qqSend");
	}
//	JRobotUtil.mouseMove(0.5,0.5,true);
//	for(var i=0;i<line.length;i++){
//		var c=line.charAt(i);
//		JRobotUtil.inputText(c);
//		JRobotUtil.sleep(500);
//	}
//	var text=JRobotUtil.getRegionText(0.25, 0.25, 0.75, 0.75);
//	log("剪切板内容",text);
	$_response_$={
			errorCode:0
	}
});
var lastWord=null;
function getWord(){
	var me="lin";
	var he="yang";
	var count=5;//3次获取不到则放弃
	while (count--){
		JRobotUtil.sleep(1000);
		var text=JRobotUtil.getRegionText(448, 246, 779, 468);
//		var text=JRobotUtil.getRegionText(459, 261, 786, 468);
//		var text=JRobotUtil.getRegionText(414, 231, 789, 480);
//		var text=JRobotUtil.getRegionText(0.25, 0.25, 0.75, 0.75);
		if(!text) continue;
		//获取组后一个对白的言语
//		var recordList=text.split("\n\n");
		log("剪切板内容",text);
		var recordList=new Array();
		
//		log("聊天记录",recordList);
//		var t=recordList.length-1;
//		if(t<0) return null;
//		while(!recordList[t]) t--;
//		if(t<0) return null;
//		var record=recordList[t];
		var index=text.lastIndexOf(he);
		if(index==-1) continue;
		var meIndex=text.lastIndexOf(me);
		if(meIndex>index){
			var record=text.substring(index,meIndex-index);
		}else{
			var record=text.substring(index);
		}
		if(record.indexOf(he)!=-1&&lastWord!=record) {
			log("lastWord",lastWord);
			log("record",record);
			lastWord=record;
			var word=record.split("\n")[1];
			return word;
		}else{
			continue;
		}
	}
	return null;
}


//var flag=true;
//while(flag){
//	function secondIndexOf(str,sub){
//		var firstIndex=str.indexOf(sub);
//		return str.substring(firstIndex+1).indexOf(sub)+firstIndex+1;
//	}
//	var meIndex=secondIndexOf(text,me);
//	var heIndex=secondIndexOf(text,he);
//	var index;
//	if(meIndex==-1) {
//		index=heIndex;
//	}else if(heIndex==-1){
//		index=meIndex;
//	}else{
//		index=meIndex<heIndex?meIndex:heIndex;
//	}
//	log("index",index);
//	log("text",text);
//	if(index==-1) break;
////	flag=index!=-1;
//	recordList.push(text.substring(0,index));
//	text=text.substring(index);
//}