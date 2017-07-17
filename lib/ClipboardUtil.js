var ClipboardUtil={
		instance:null,
		init:function(){
			if(!this.instance){
				var Enabler=require("enabler.jrobot.ClipboardEnabler");
				this.instance=new Enabler();
			}
		},
		setContent:function(content){
			if(!content) return "";
			return this.instance.setContent(content);
		},
		getContent:function(){
			return this.instance.getContent();
		},
}
ClipboardUtil.init();