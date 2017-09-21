load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/HttpUtil.js");
load("/lib/JsoupUtil.js");
load("/lib/FileUtil.js");
Action(function(request){
	//初始化
	var dir="f:/thz/";
	FileUtil.mkdir(dir, true);
	var url="http://www.mmjpg.com/mm/7";
//	var doc=JsoupUtil.open(url);
	var doc=JsoupUtil.openFile("F:/BaiduNetdiskDownload/1/2.html");
	//获取字网页链接
	var linkFather=doc.select("th.common");
	log("linkFather",linkFather.length)
	var linkList=new Array();
//	for(var i=0;i<linkFather.length;i++){
	for(var i=0;i<5;i++){
		log("linkFather[i]",linkFather[i])
		try {
			var link=linkFather[i].select("a")[3].attr("href");
			var title=linkFather[i].select("a")[3].html();
			linkList.push({
				link:link,
				title:title,
			})
		} catch (e) {
			log("该条链接无法解析："+linkFather[i])
		}
	}
	log("linkList",linkList)
	log("linkList.length",linkList.length)
	
	var downloadList=new Array();
	//子页面拉取规则
	for(var i=0;i<linkList.length;i++){
//	for(var i=1;i<2;i++){ 
		try {
//			log("in")
			var item=linkList[i]
			var doc=JsoupUtil.open(item.link); 
			var picLinkListFater=doc.select("img.zoom");
			var picLinkList=new Array();
			for(var j=0;j<picLinkListFater.length;j++){
				var link=picLinkListFater[j].attr("file");
				picLinkList.push(link);
			}
			log("picLinkList",picLinkList)
			item.picLinkList=picLinkList;
			downloadList.push(item)
		} catch (e) {
			logger.error(e)
			log("子页面获取图片link错误")
		}
	}
	log("downloadList",downloadList)
	//下载
	for(var i=0;i<downloadList.length;i++){
		var item=downloadList[i];
		var headers={
				"user-agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36",
				"Referer":"http://thzbbt.net",
		}
		if(item.picLinkList.length==0) continue;
		var fatherDir=dir+item.title+"/";
		FileUtil.mkdir(fatherDir, true);
		var j=0;
		item.picLinkList.forEach(function(link){
			HttpUtil.download(link, fatherDir+j+++".jpg", headers);
		})
	}
	$_response_$={
		errorCode:0
	}
})