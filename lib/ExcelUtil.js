var ExcelUtil={
		instance:null,
		init:function(){
			if(!this.instance){
				var ExcelEnabler=require("enabler.office.ExcelEnabler");
				this.instance=new ExcelEnabler();
			}
		},
		read:function(filepath){
			return this.instance.read(filepath);
		},
		write:function(filepath,content){
			this.instance.write(filepath,JSON.stringify(content));
		},
		
}
ExcelUtil.init();