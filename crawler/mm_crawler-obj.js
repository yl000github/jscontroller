load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/HttpUtil.js");
load("/lib/JsoupUtil.js");
load("/lib/FileUtil.js");
load("/service/CrawlerService.js");
load("/service/TxtService.js");
Action(function(request){
//	checkParamsE(request, ["word"]);
//	var word=request.word;
	//只考虑某个套图
	var dir="f:/mmjpg_jscontroller/";
	var url="http://www.mmjpg.com/mm/";
//	var url="http://www.mmjpg.com/mm/7";
	var crawler=new Crawler(url, dir);
	crawler.then(function(item){
		var arr=new Array();
		for(var i=1;i<20;i++){
			arr.push({
				url:item.url+i
			})
		}
		return arr;
	}).then(function(item){
		var doc=JsoupUtil.open(item.url);
		var len=doc.select("div.page").select("a").size()
		var maxCount=doc.select("div.page").select("a")[len-2].html();
		log("maxCount",maxCount)
		maxCount=parseInt(maxCount);
		var picUrlArr=new Array();
		for(var i=1;i<=maxCount;i++){
			var childUrl=url+"/"+i;
			var doc=JsoupUtil.open(childUrl);
			var picUrl=doc.select("div.content").select("a").select("img").attr("src");
			picUrlArr.push({
				link:picUrl,
				path:dir+"/"+TxtService.uniqueStr()+".jpg",
			});
		}
		return picUrlArr;
	}).downloadPic({
		"user-agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36",
		"Referer":"http://www.mmjpg.com",
	});
	
	 
	
	
	
//	var doc=JsoupUtil.open(url);
//	var folder=doc.select("h2").html();
//	log("文件名",folder)
//	FileUtil.mkdir(dir, true);
//	var len=doc.select("div.page").select("a").size()
//	var maxCount=doc.select("div.page").select("a")[len-2].html();
//	log("maxCount",maxCount)
//	maxCount=parseInt(maxCount);
//	var picUrlArr=new Array();
//	for(var i=1;i<=maxCount;i++){
//		var childUrl=url+"/"+i;
//		var doc=JsoupUtil.open(childUrl);
//		var picUrl=doc.select("div.content").select("a").select("img").attr("src");
//		picUrlArr.push(picUrl);
//	}
//	log("picUrlArr",picUrlArr);
//	//download
//	for(var i=0;i<picUrlArr.length;i++){
//		var headers={
//				"user-agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36",
//				"Referer":"http://www.mmjpg.com",
//		}
//		HttpUtil.download(picUrlArr[i], dir+i+".jpg", headers);
//	}
	$_response_$={
		errorCode:0
	}
})