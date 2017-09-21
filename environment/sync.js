//load("/lib/common.js");
//load("/lib/function.js");
//load("/lib/ZipUtil.js");
//load("/lib/FileUtil.js");
//load("/environment/config.js");
///**
// * 存储媒介--百度云
// * 本地路径dir d:/environment
// * 文件格式 zip包
// * 
// * 解压  覆盖
// * 
// * 同步这件事情还是挺危险的，不做了
// */
//Action(function(request){
//	log("config",config);
//	var keyArr=["notepad++"];
//	var date=new Date().format("yyyy-MM-dd");
//
//	keyArr.forEach(function(key){
//		var folderConfig=config[key].folders;
//		//取最新的压缩文件
//		var fileList=FileUtil.listDir(dir, false, true);
//		fileList=JSON.parse(fileList)
//		fileList=fileList.filter(function(file){
//			return file.indexOf("zip")!=-1&&file.indexOf(key)!=-1;
//		});
//		fileList=fileList.sort(function(a,b){
//			return a<b?1:-1;
//		});		
//		log("fileList",fileList)
//		if(fileList.length==0){
//			throw new ResException(100, "找不到压缩包-"+key);
//		}
//		var zipFilePath=fileList[0];
//		var dest=zipFilePath.substring(0,zipFilePath.length-4);
//		log("zipFilePath",zipFilePath)
//		dest+="/"
//		log("dest",dest)
//		if(!FileUtil.exists(dest)){
//			//解压到当前路径、覆盖
//			log("未发现文件夹，开始解压")
//			ZipUtil.unzipFile(zipFilePath, dest);
//		}
//		log("开始覆盖工作")
//		//反向查找路径
//		var fileList=FileUtil.listDir(dest, false, true);
//		fileList=JSON.parse(fileList)
//		log("fileList",fileList)
////		var obj=config[key];
//		fileList.forEach(function(filepath){
//			var filepathLast=FileUtil.lastOne(filepath);
//			//仅针对文件夹 匹配 覆盖
//			var destPath=(function(folders,path){
//				for(var i=0;i<folders.length;i++){
//					var folder=folders[i];
//					var lastOne=folder.substring(folder.lastIndexOf("/")+1);
//					log("lastOne",lastOne)
//					if(lastOne==path){
//						return folders[i];
//					}
//				}
//			})(folderConfig,filepathLast);
//			log("匹配路径",destPath);
//			FileUtil.copy(filepath, destPath, true);
//		})
//		
//	})
//	
//	
//	
//	$_response_$={
//			errorCode:0
//	}
//})
