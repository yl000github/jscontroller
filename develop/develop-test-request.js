load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/service/QuickCodeService.js");
load("/lib/FreemarkerUtil.js");
Action(function(request){
	var tableName=request.tableName?request.tableName:"blacklist";
	var input=QuickCodeService.inputClipboard();
	QuickCodeService.process(input, function(data){
		var kvList=data.columnList.map(function(item){
			return {
				key:item,
				value:DBService.getRandValue(item)
			}
		});
		data.kvList=kvList;
		return data;
	}, {
		type:3,
		path:"C:/Users/Administrator/Desktop/jscontroller-result.txt",
		templateName:"develop-test-request.ftl"
	});
	
	$_response_$={
			errorCode:0
	}
})