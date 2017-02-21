var JRobotUtil={
		instance:null,
		init:function(){
			if(!this.instance){
				var JRobotEnabler=require("enabler.jrobot.JRobotEnabler");
				this.instance=new JRobotEnabler();
			}
		},
		/**
		 * switchPage,switchDesk,qqOpen,qqSend,screenShot
		 * @param code
		 */
		shortCut:function(code){
			this.instance.shortCut(code);
		},
		/**
		 * 待支持字符：！
		 * @param src
		 */
		inputText:function(src){
			this.instance.inputText(src);
		},
		mouseClick:function(type,times){
			this.instance.mouseClick(type,times);
		},
		getRegionText:function(sX, sY, eX, eY){
			return this.instance.getRegionText(sX, sY, eX, eY);
		},
		mouseMove:function(x,y,isPress){
			this.instance.mouseMove(x,y,isPress);
		},
		keyClick:function(code){
			this.instance.keyClick(code);
		},
		sleep:function(t){
			this.instance.sleep(t);
		},
		
}
JRobotUtil.init();