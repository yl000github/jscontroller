load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/HttpUtil.js");
load("/lib/JsoupUtil.js");
load("/lib/FileUtil.js");
load("/service/CrawlerService.js");

Action(function(request){
	//初始化
	var dir="f:/thz-obj/";
	var url="F:/BaiduNetdiskDownload/1/2.html";
	
	var crawler=new Crawler(url, dir);
	crawler.then(function(item){
		//获取子页面链接
		var doc=JsoupUtil.openFile(item.url);
		log("s")
		return arrayMap(doc.select("th.common"), function(linkFather){
			log("s1")
			log("href",linkFather.select("a")[3].attr("href"))
			log("title",linkFather.select("a")[3].html())
			return {
				url:linkFather.select("a")[3].attr("href"),
				title:linkFather.select("a")[3].html(),
				path:dir+linkFather.select("a")[3].html()+"/",
			}
		})
	}).then(function(item){
		//获取图片链接
//		log("第一层筛选出的内容",item);
		var path=item.path;
		var doc=JsoupUtil.open(item.url); 
		var picName=0;
		return arrayMap(doc.select("img.zoom"), function(linkFather){
			return {
				link:linkFather.attr("file"),
//				path:path+"/"+picName+++".jpg",
				path:dir+"/"+TxtService.uniqueStr()+".jpg",
			}
		})
		return item;
	}).downloadPic({
		"user-agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36",
		"Referer":"http://thzbbt.net",
	});
	
	$_response_$={
		errorCode:0
	}
})