var HttpUtil={
		instance:null,
		init:function(){
			if(!this.instance){
				var HttpEnabler=require("enabler.http.HttpEnabler");
				this.instance=new HttpEnabler();
			}
		},
		get:function(url){
			return this.instance.get(code);
		},
		post:function(url,content){
			return this.instance.post(url,content);
		},
}
HttpUtil.init();
var TuLingUtil={
		ask:function(question){
			var url="http://www.tuling123.com/openapi/api";
			var rs=JSON.parse(HttpUtil.post(url, JSON.stringify({
				"key":"dc236b55bbad4422ba763ae8dc2e8bbb",
				"info":question,
//				"userid":"winder",
				"loc":"深圳市软件产业基地"
			})));
			log("ask result",rs);
			if(rs.code==100000){
				return rs.text;
			}else{
				return "I don't know";
			}
		}
}