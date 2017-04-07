load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/HttpUtil.js");
load("/lib/FileUtil.js");
/**
 * 两个需要修订的地方，配置库地址，资源服务器地址
 */
Action(function(request){
	var sqlExecute=DBUtil.getInstance(true);
	try {
		var paths=upload();
		save2DB(sqlExecute, paths);
		sqlExecute.commitAndClose();
		$_response_$={
				errorCode:0
		}
	} catch (e) {
		log("ERROR",e.toString());
		sqlExecute.rollbackAndClose();
		$_response_$={
				errorCode:-100,
				errorMsg:e.toString()
		}
	}
});
function upload(){
	//TODO
	var downloadDir="e:/download/";
	var httpRequest="http://192.168.1.39:10500/miResourceMgr/upload";
	var pics=JSON.parse(FileUtil.listDir(downloadDir));
	log("pics",pics);
	var paths=pics.map(function(pic){
		//获取resourceID
		var resourceID=pic.substring(pic.lastIndexOf("/")+1,pic.lastIndexOf("."));
		log("resourceID",resourceID);
		var fileSize=FileUtil.getFileSize(pic);
		var fileName=FileUtil.getFileName(pic);
		var rs=HttpUtil.submitForm(httpRequest,{
			file:{
				file:pic
			},
			keyValue:{
				fileSize:fileSize,
				fileName:fileName
			}
		});
		rs=JSON.parse(rs);
		var data=rs.data;
		data.resourceID=resourceID;
		return data;
	});
	return paths;
}
function save2DB(sqlExecute,paths){
	log("paths",paths);
	paths.forEach(function(path){
		var resourceID=path.resourceID;
		var groupName=path.goupName;
		var httpUrl="/"+groupName+"/"+path.remoteFileName;
		var rs=JSON.parse(sqlExecute.execute({
			sql:"update resources set groupName=@groupName,remoteFileName=@remoteFileName,httpUrl=@httpUrl,lastUpdate=NOW()" +
			" where id=@resourceID",
			param:{
				groupName:groupName,
				remoteFileName:path.remoteFileName,
				httpUrl:httpUrl,
				resourceID:resourceID,
			}
		}))
		log("update rs",rs);
	})
}