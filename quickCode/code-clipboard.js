load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/service/QuickCodeService.js");
load("/lib/FreemarkerUtil.js");
/**
 * 默认的输入是一个列
 * 高可替换性
 * 读出表字段
 * 使用freemarker生成模板数据
 */
Action(function(request){
	var tableName=request.tableName?request.tableName:"blacklist";
//	var sqlExecute=DBUtil.getInstance(false,{
//		url:"jdbc:mysql://192.168.1.21:3306/dlb_overall2?characterEncoding=utf-8&characterSetResults=utf-8&useUnicode=false",
//		user:"ymt",
//		password:"yimiaotong2015",
//		driver:"com.mysql.jdbc.Driver",
//	});
	var input=QuickCodeService.inputClipboard();
	QuickCodeService.process(input, function(data){
		var columnList=data.columnList;
		//接口参数
		var kvList=columnList.map(function(column){
			var value=DBService.getRandValue(column);
			return {
				key:column,
				value:value,
			}
		});
		data.kvList=kvList;
		//序列支持，格式要求两行，且都是数字
		var isSequence=true;
		columnList.forEach(function(num){
			if(isNaN(parseInt(num))){
				false;
			}
		})
		if(isSequence){
			//产生序列
			var end=parseInt(columnList[columnList.length-1]);
			var start=parseInt(columnList[0]);
			log("start",start)
			log("end",end)
			var delt=end>=start?1:-1;
			var sequence=[];
			for(var i=start;i<=end;i+=delt){
				sequence.push(i);
			}
			data.sequence=sequence;
		}
		
		
		
		return data;
	}, {
		type:3,
		templateName:"code-clipboard.ftl"
	});
	
	$_response_$={
			errorCode:0
	}
})