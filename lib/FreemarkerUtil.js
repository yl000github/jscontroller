var FreemarkerUtil={
		instance:null,
		init:function(){
			if(!this.instance){
				var Enabler=require("enabler.txt.FreeMarkerEnabler");
				this.instance=new Enabler();
			}
		},
		printFile:function(src,dest,json){
			if(src.indexOf("template/ftl/")==-1){
				src="template/ftl/"+src;
			}
			if(dest.indexOf(":")!=-1){
				
			}else if(dest.indexOf("template/output/")==-1){
				dest="template/output/"+dest;
			}
			log("dest",dest)
			this.instance.printFile(src,dest,json);
		},
		
}
FreemarkerUtil.init();