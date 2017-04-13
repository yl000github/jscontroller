load("/lib/common.js");
load("/lib/function.js");
load("/lib/FileUtil.js");
load("/ssh/LogModal.js");
load("/lib/SSHUtil.js");
/**
 * 需求
 * 1.查找出单资料返回体内容
 * 倒序，寻找请求头，再找返回值
 * 
 * 极大问题难以突破
 * 1.大日志文件获取耗时太久
 * 2.文本搜索算法堪忧
 * 3.只能处理难以做到
 */
Action(function(request){
//	var c=FileUtil.read("e:/ssh/useMgr-2017-04-09.log");
	var c=SSHUtil.readFile({
		ip:"192.168.1.20",
		user:"root",
		password:"jieroudlb2017!@#",
		path:"/home/yap2.0test2/bizSystem/tomcat7/bin/log/userMgr-2017-03-08.log",
	});
	var modal=new LogModal(c);
	log("modal.rowNum",modal.rowNum);
	var rs=modal.findReturn({
		first:"login4portal.js",
//		second:"listScheduleBasicInfo",
	}, {
		first:"向前端输出的内容",
		second:"",
	});
	log("rs",rs);
	$_response_$={
			errorCode:0,
			data:rs
	}
})
/**
 * 查找第一关键字出现的位置，如果有第二关键字，在一定范围内匹配第二关键字，返回第一次出现的行号
 * @param first
 * @param second
 */
function findHead(first,second){
	
}
/**
 * 根据行号查找关键字出现的位置
 * @param rowNum
 * @param first
 */
function findTail(rowNum,first){
	
}