load("/lib/common.js");
load("/lib/function.js");
load("/lib/ZipUtil.js");
load("/lib/FileUtil.js");
load("/environment/config.js");
/**
 * 存储媒介--百度云
 * 本地路径dir d:/environment
 * 文件格式 zip包
 */
Action(function(request){
	log("config",config);
	var keyArr=null;
//	var keyArr=["notepad++"];
	var keyArr=["eclipse"];
//	log("keyArr.indexOf(绿色版)",keyArr.indexOf("eclipse 绿色版"))
	var date=new Date().format("yyyy-MM-dd");
	for(var key in config){
		//未设定，且没有就略过
//		log("key",key)
//		log("keyArr",keyArr)
//		log("keyArr.indexOf(key)",keyArr.indexOf(key))
		if(keyArr&&keyArr.indexOf(key)==-1) continue;
		var obj=config[key];
		log("obj",obj)
		var folders=obj.folders;
		var files=obj.files;
		
		//压缩
		var zipFiles=new Array();
		folders.forEach(function(item){
			zipFiles.push(item);
		})
		files.forEach(function(item){
			zipFiles.push(item);
		})
		var dest=dir+key+" "+date+".zip";
		log("dest",dest);
		//复制到当前路径下，压缩，删除
//		zipFiles=zipFiles.map(function(item){
//			var lastName=FileUtil.lastOne(item);
//			var outputPath=dir+lastName;
//			FileUtil.copy(item, outputPath, true)
//			return outputPath;
//		});
		log("zipFiles",zipFiles);
//		zipFiles.forEach(function(item){
//			FileUtil.
//		})
		ZipUtil.zipFile(dest, zipFiles);
	}
	
	$_response_$={
			errorCode:0
	}
})
