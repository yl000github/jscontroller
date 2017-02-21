load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/HttpUtil.js");
load("/lib/JRobotUtil.js");
Action(function(request){
//	checkParamsE(request, ["question"]);
	var line="hello yang you are best!";
	JRobotUtil.shortCut("switchPage");
	JRobotUtil.mouseMove(0.5,0.5,true);
//	for(var i=0;i<line.length;i++){
//		var c=line.charAt(i);
//		JRobotUtil.inputText(c);
//		JRobotUtil.sleep(300);
//	}
	var character=[
	               'a','b','c','d','e','f','g',
	               'h','i','j','k','l','m','n',
	               'o','p','q','r','s','t',
	               'u','v','w','x','y','z',
	               ];
	for (var i = 0; i < 100; i++) {
		if(i!=0&&i%5==0){
			JRobotUtil.inputText(" ");
		}
//		var c=parseInt(Math.random(26))+'a';
		var c=character[parseInt(Math.random()*26)];
		JRobotUtil.inputText(c);
		JRobotUtil.sleep(parseInt(Math.random()*300));
	}
	$_response_$={
			errorCode:0
	}
});
