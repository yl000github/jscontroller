var RobotUtil={
		enabler:null,
		init:function(){
			this.enabler=require("enabler.robot.RobotEnabler");
		},
		record:function(filePath,duration,startWait){
			this.init();
			startWait=startWait||0;
			this.enabler.record(filePath,duration,startWait);
		},
		reappear:function(filePath,duration,startWait){
			this.init();
			startWait=startWait||0;
			this.enabler.reappear(filePath,duration,startWait);
		}
}