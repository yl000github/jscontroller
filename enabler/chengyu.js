(function(request){
	load("/lib/common.js");
	load("/lib/function.js");
	load("/lib/DBUtil.js");
	load("/lib/PageUtil.js");
	load("/lib/CodeUtil.js");
	var firstWord=request.firstWord||"人";
//	var firstWord="人";
//	firstWord=CodeUtil.decToHex(firstWord);
//	log("firstWord",firstWord)
//	var url="http://chengyu.t086.com/chaxun.php?q1=" +
//			firstWord +
//			"&q2=&q3=&q4=";
	var url="http://chengyu.t086.com/chaxun.php?q1=&q2=&q3=&q4=";
	PageUtil.open(url);
	var input=PageUtil.findElement("//input[@name='q1']");
	input.setValue(firstWord);
	var button=PageUtil.findElement("//input[@type='submit']");
	button.click();
	var ansList=PageUtil.findElements("//td[@class='td1']");
//	ansList=JSON.parse(ansList)
	logger.debug(ansList)
	logger.debug(typeof ansList)
//	var strList=ansList.map(function(item){
//		return item.getText();
//	});
	var strList=new Array();
	for (var i = 0; i < ansList.length; i++) {
		strList.push(ansList[i].getText());
	}
	strList=strList.filter(function(item){
		return item.length==4;
	});
	log("strList",strList);
	
	$_response_$={
			c:"ok",
			list:strList
	}
})($_request_param_$)