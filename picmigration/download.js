load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/HttpUtil.js");
Action(function(request){
	var downloadDir="e:/download/";
	var httpRequest="http://res-1.yitianxian.com:10500/miResourceMgr";
	//要同时操作多个库，不好办，不过我是分两步走，想来没问题
	var sqlExecute=DBUtil.getInstance(false);
	var resouces=JSON.parse(sqlExecute.query({
		sql:"select * from resources where id in (select resourcesID from goods_images_rel)",
		param:{}
	}));
	log("resources",resouces)
	resouces.forEach(function(resource){
		//下载图片
		var resoureID=resource.id;
		var relPath=resource.httpUrl;
		if(relPath){
			var url=httpRequest+relPath;
			log("请求的url为",url);
			var destPath=downloadDir+resoureID+".jpg";
			HttpUtil.download(url, destPath);
		}
	})
	$_response_$={
			errorCode:0
	}
})