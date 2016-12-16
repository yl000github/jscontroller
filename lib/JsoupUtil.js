var JsoupEnablerDoc=null;
var JsoupUtil={
		open:function(url){
			var JsoupEnabler=require("enabler.http.JsoupEnabler");
			JsoupEnablerDoc=JsoupEnabler.open(url);
			return JsoupEnablerDoc;
		}
}
var $=function(pattern){
	if(JsoupEnablerDoc){
		return JsoupEnablerDoc.select(pattern);
	}
}