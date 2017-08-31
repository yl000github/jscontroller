load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/HttpUtil.js");
load("/lib/JsoupUtil.js");
load("/lib/FileUtil.js");
load("/service/TxtService.js");
/**
 * 数据挖掘，存储数据库，数据分析
 */
Action(function(request){
	var keyWord="python";
	var keyWord="java";
	var dir="f:/51job/";
	log("文件名",dir);
	FileUtil.mkdir(dir, true);
	//北上广深
	var tpl="http://search.51job.com/list/010000%252C020000%252C030200%252C040000,000000,0000,00,9,99,{0},2,{1}.html";
	var dataList=new Array();
	for(var pageNum=1;pageNum<10;pageNum++){
		var url=TxtService.replace(tpl, [keyWord,pageNum], true);
		log("url",url);
		var doc=JsoupUtil.open(url);
		var elList=doc.select("div.dw_table").select("div.el")
		for(var i=0;i<elList.length;i++){
//		for(var i=0;i<3;i++){
			if(i==0) continue;
			try {
		
															var el=elList[i];
//			log("el.outerHtml()",el.outerHtml())
				var firstA=el.select("p.t1").select("a");
				var spanList=el.select("span");
//			log("spanList.outerHtml()",spanList.outerHtml())
				var posName=firstA.attr("title");
				var companyName=spanList[1].text();
				var location=spanList[2].text();
				var salary=spanList[3].text();
				var releaseTime=spanList[4].text();
				var detailUrl=firstA.attr("href");
				var detailDoc=JsoupUtil.open(detailUrl);
				var tagList=detailDoc.select("div.tCompany_main").select("div.tBorderTop_box.bt").select("p.t2").text();
				var needPeopleYears=detailDoc.select("div.tCompany_main").select("div.t1").text();
				var tBorderTop_boxList=detailDoc.select("div.tBorderTop_box");
				var posDesc=tBorderTop_boxList[1].text();
				var contact=tBorderTop_boxList[2].text();
				var companyInfo=tBorderTop_boxList[3].text();
				var propertyPeopleIndustry=detailDoc.select("div.tHeader.tHjob").select("p.msg.ltype").text();
				var obj={
						posName:posName,
						companyName:companyName,
						location:location,
						salary:salary,
						releaseTime:releaseTime,
						tagList:tagList,
						needPeopleYears:needPeopleYears,
						posDesc:posDesc,
						contact:contact,
						companyInfo:companyInfo,
						propertyPeopleIndustry:propertyPeopleIndustry,
				}
//			log("obj",obj);
				dataList.push(obj);							
			} catch (e) {
				logger.error(e)
			}
		}
	}
	log("dataList",dataList)
	//数据存储持久化
	saveData(dataList);
	$_response_$={
		errorCode:0
	}
})
function saveData(dataList){
	if(!dataList) return;
	var config={
			url:"jdbc:mysql://192.168.1.15:3306/yy?characterEncoding=utf-8&characterSetResults=utf-8&useUnicode=false",
			user:"root",
			password:"ymt15",
			driver:"com.mysql.jdbc.Driver",	
	}
	var sqlExecute=DBUtil.getInstance(false,config);
	dataList.forEach(function(obj){
		try {
			var rs=JSON.parse(sqlExecute.execute({
				sql:"insert into jobinfo(posName,companyName,location,salary,releaseTime,tagList,needPeopleYears,posDesc,contact,companyInfo,propertyPeopleIndustry) values(@posName,@companyName,@location,@salary,@releaseTime,@tagList,@needPeopleYears,@posDesc,@contact,@companyInfo,@propertyPeopleIndustry)",
				param:obj
			}));
			log("saveData rs", rs)
		} catch (e) {
			logger.error(e)
		}
	})
//		sqlExecute.commitAndClose();
	
}