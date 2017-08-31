load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/HttpUtil.js");
load("/lib/JsoupUtil.js");
load("/lib/FileUtil.js");
Action(function(request){
//	checkParamsE(request, ["word"]);
//	var word=request.word;
	//只考虑某个套图
	var dir="f:/bd-images/";
	var url="https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=result&fr=&sf=1&fmq=1503314500785_R&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word=%E7%99%BD%E4%BA%91";
	var doc=JsoupUtil.open(url);
	var html=doc.html();
//	var html=FileUtil.read("f:/dd.txt");
	var folder=doc.select("h2").html();
	log("文件名",folder)
	FileUtil.mkdir(dir, true);
	var imgUrls=html.match(/https:\/\/ss1\.bdstatic\.com.*?jpg/gm);
	log("imgUrls",imgUrls)
	for(var i=0;i<imgUrls.length;i++){
		var headers=null;
//		var headers={
//				"user-agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36",
//				"Referer":"http://www.mmjpg.com",
//		}
		HttpUtil.download(imgUrls[i], dir+i+".jpg", headers);
	}
//	log("", doc.html());
//	FileUtil.write("f:/dd.txt", doc.html(), false);
//	var len=doc.select("div.page").select("a").size()
//	var imgUrls=doc.select("img.main_img")
//	.attr("data-imgurl");
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
		errorCode:0,
		data:imgUrls
	}
})