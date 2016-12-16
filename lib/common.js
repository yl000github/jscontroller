var robotFilePath="e:/";
var logger={
		debug:print,
		error:print,
		warn:print,
};
var Action=function(fn){
	$_response_$=null;
	try {
		fn($_request_param_$);
		if(!$_response_$){
			$_response_$={
					c:"ok"
			}
		}
	} catch (e) {
		logger.error(e.toString());
		if(e instanceof ResException){
			$_response_$={
					errorCode:e.errorCode,
					errorMsg:e.errorMsg,
			}
			return ;
		}
		$_response_$={
				errorCode:-100,
				errorMsg:e.toString(),
		}
	}
}
function arrayMap(javaArray,fn){
	var arr=new Array();
	for (var i = 0; i < javaArray.length; i++) {
		var item=javaArray[i];
		var rs=fn(item);
		if(rs){
			arr.push(rs);
		}
	}
	return arr;
}
