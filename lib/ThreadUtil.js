var ThreadUtil={
		instance:null,
		init:function(){
			if(!this.instance){
				var ThreadEnabler=require("enabler.thread.ThreadEnabler");
				this.instance=ThreadEnabler;
			}
		},
		newThread:function(jsFilePath,param){
			this.instance.newThread(jsFilePath,param);
		},
}
ThreadUtil.init();