load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/HttpUtil.js");
load("/lib/JRobotUtil.js");
Action(function(request){
//	checkParamsE(request, ["question"]);
	var line=request.word?request.word:"hello yang you are best!";
	JRobotUtil.shortCut("switchPage");
	JRobotUtil.mouseMove(0.5,0.5,true);
	for(var i=0;i<line.length;i++){
		var c=line.charAt(i);
		JRobotUtil.inputText(c);
		JRobotUtil.sleep(500);
	}
	$_response_$={
			errorCode:0
	}
})