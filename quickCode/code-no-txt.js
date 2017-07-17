load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/service/QuickCodeService.js");
load("/lib/FreemarkerUtil.js");
load("/lib/ClipboardUtil.js");
/**
 * 不依赖任何中间文本
 * input格式体
 * 模板 +换行=====换行+ 列数据
 * 
 * 模板中
 * Y_C表示列字段
 * Y_L "Y_C","Y_C" 类型的列
 * 
 */
Action(function(request){
	var tableName=request.tableName?request.tableName:"blacklist";
	var c=ClipboardUtil.getContent();
//	var pos=c.indexOf("=====");
//	var template=c.substring(0,pos-1);
//	var input=c.substring(pos+5+1);
	var list=c.split("\n");
	if(list.length<3){
		log("list",list)
		throw new ResException(1, "list长度不对");
	}
	var template=list[0];
	list.shift();
	list.shift();
	var input=list.join("\n");
	log("template", template);
	log("input", input);
	//input转为列
	var columnList=input.split("\n");
	if(!columnList[columnList.length-1]){
		columnList.pop();
	}
	var output=""; 
	//构造输出数据
	if(template.indexOf("Y_C")!=-1){
		output=columnList.map(function(item){
			item=item.trim();
			return template.replace(new RegExp("Y_C",'g'),item);
		}).join("\n").toString();
	}else if(template.indexOf("Y_L")!=-1){
		var Y_L=columnList.map(function(item){
			item=item.trim();
			return "\""+item+"\"";
		}).join(",").toString();
		output=template.replace(new RegExp("Y_L",'g'),Y_L);
	}
	log("output",output);
	ClipboardUtil.setContent(output);
	
	$_response_$={
			errorCode:0
	}
})