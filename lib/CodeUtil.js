var CodeUtil={
	//编码
	decToHex : function(str) {
	    var res=[];
	    for(var i=0;i < str.length;i++)
	        res[i]=("00"+str.charCodeAt(i).toString(16)).slice(-4);
	    return "\\u"+res.join("\\u");
	},
	hexToDec :function(str) {
	    str=str.replace(/\\/g,"%");
	    return unescape(str);
	},
	instance:null,
	init:function(){
		if(!this.instance){
			var CodeEnabler=require("enabler.code.CodeEnabler");
			this.instance=new CodeEnabler();
		}
	},
	urlEncode:function(src,charset){
		this.init();
		charset=charset||'utf-8';
		return this.instance.urlEncode(src,charset);
	},
	urlDecode:function(src,charset){
		this.init();
		charset=charset||'utf-8';
		return this.instance.urlDecode(src,charset);
	},
}