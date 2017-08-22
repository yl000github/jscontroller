load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/lib/JRobotUtil.js");
Action(function(request){
	//功能是能够实现，但是健壮性必然比较差，测起来费时间，用起来捉急
	//切入目标页
	JRobotUtil.shortCut("switchPage");
	JRobotUtil.mouseMove(0.5,0.5,true);
//	JRobotUtil.keyClick("Tab");
//	JRobotUtil.keyClick("Space");
//	JRobotUtil.keyClick("Tab");
//	JRobotUtil.keyClick("Tab");
//	JRobotUtil.keyClick("Tab");
//	var carList=['FF456468764151315','4156464561','131231','2017-02-02','5','1'];
//	for(var i=0;i<carList.length;i++){
//		JRobotUtil.keyClick("Tab");
//		JRobotUtil.inputText(carList[i]);
//	}
//	JRobotUtil.shortCut("backTab");
//	JRobotUtil.shortCut("backTab");
//	JRobotUtil.shortCut("backTab");
//	JRobotUtil.shortCut("backTab");
//	JRobotUtil.shortCut("backTab");
//	JRobotUtil.shortCut("backTab");
//	JRobotUtil.shortCut("backTab");
//	JRobotUtil.keyClick("Space");
	
	//底部信息输入
	JRobotUtil.mouseMove(0.5,0.5,true);
//	JRobotUtil.keyClick("Tab");
	var list=['2017-11-11','150000','120000','10000','10','1','1','1','1'];
	for(var i=0;i<list.length;i++){
		JRobotUtil.keyClick("Tab");
		JRobotUtil.inputText(list[i]);
	}
	JRobotUtil.keyClick("Tab");
	JRobotUtil.keyClick("Space");
//	var demoList=['','FF456468764151315','4156464561','131231','2017-02-02','5','1',
//	              '2017-11-11','150000','120000','10000','10','1','1','1','1'];
//	for(var )
	
	
//	for (var i = 0; i < 17; i++) {
//		JRobotUtil.keyClick("Tab");
//		var n=parseInt(Math.random()*1000);
//		JRobotUtil.inputText(n);
//	}	
	$_response_$={
			errorCode:0
	}
})