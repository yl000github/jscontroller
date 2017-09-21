var CrawlerService={
		/**
		 * 传递函数数组，一个函数表明一个
		 * 
		 */
		frame:function(){
			
		}
}
var Crawler=function(url,dir){
	this.url=url;
	this.dir=dir;
	this.curRs=new Array();
	this.curRs.push({
		url:url,
		dir:dir,
	})
}
/**
 * 对应于curRs遍历操作 
 * curRs通常为一个数组 深度为1
 * url：网页链接
 * picLink:图片链接
 * title：网页说明
 * @param fn  输入对象，返回对象或者数组
 */
Crawler.prototype.then=function(fn){
	var arr=new Array();
	//数组合并
	try {
		arrayMap(this.curRs, function(item){
			try {
				var fnRs=fn(item);
				if(fnRs.forEach){
					fnRs.forEach(function(e){
						arr.push(e);
					})
				}else{
					arr.push(fnRs)
				}
			} catch (e) {
				logger.error(e)
				return null;
			}
		});
	} catch (e) {
		logger.error(e)
	}
	this.curRs=arr;
	return this;
//	this.curRs=this.curRs.map(function(item){
//		try {
//			return fn(item);
//		} catch (e) {
//			logger.error(e)
//			return null;
//		}
//	})
}
/**
 * 照片格式默认为.jpg
 * curRs结构
 * link
 * path
 */
Crawler.prototype.downloadPic=function(headers){
	log("下载照片",this.curRs)
	this.curRs.forEach(function(item){
		try {
			var link=item.link;
			var path=item.path;
			if(!link||!path) return;
			HttpUtil.download(link, path, headers);
		} catch (e) {
			logger.error(e)
		}
	})
}