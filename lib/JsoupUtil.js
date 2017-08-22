var JsoupEnablerDoc=null;
var JsoupUtil={
		open:function(url){
			var JsoupEnabler=require("enabler.http.JsoupEnabler");
			JsoupEnablerDoc=JsoupEnabler.open(url);
			return JsoupEnablerDoc;
		}
}
/**
 * 不推荐，显得逻辑有几分混乱
 */
var $=function(pattern){
	if(JsoupEnablerDoc){
		return JsoupEnablerDoc.select(pattern);
	}
}