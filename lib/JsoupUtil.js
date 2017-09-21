var JsoupEnablerDoc=null;
/**
 * jsoup文档
 * html() 获得内部的html
 * outerHtml()包含元素的html
 * text()获得纯文本
 * 
 */
var JsoupUtil={
		open:function(url){
			var JsoupEnabler=require("enabler.http.JsoupEnabler");
			JsoupEnablerDoc=JsoupEnabler.open(url);
			return JsoupEnablerDoc;
		},
		openFile:function(url){
			var JsoupEnabler=require("enabler.http.JsoupEnabler");
			JsoupEnablerDoc=JsoupEnabler.openFile(url);
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