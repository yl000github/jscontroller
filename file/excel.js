load("/lib/common.js");
load("/lib/function.js");
load("/lib/ExcelUtil.js");
Action(function(request){
	var data={
			"2":{
				"3":"2行3列的内容"
			}
	};
	var filepath="e:/jsexceldemo.xls";
	ExcelUtil.write(filepath, data);
	
	var r=ExcelUtil.read(filepath);
	log("r",r);
	$_response_$={
			c:"ok",
			r:JSON.parse(r)
	}
})