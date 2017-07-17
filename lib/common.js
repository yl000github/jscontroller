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
/*
** randomWord 产生任意长度随机字母数字组合
** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
** xuanfeng 2014-08-28
*/
 
function randomWord(randomFlag, min, max){
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}
function randomNum(length){
	var str = "",
    range = length,
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	for(var i=0; i<range; i++){
	    pos = Math.round(Math.random() * (arr.length-1));
	    str += arr[pos];
	}
	return str;
}
function randomStr(length){
	var str = "",
    range = length,
    arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	for(var i=0; i<range; i++){
	    pos = Math.round(Math.random() * (arr.length-1));
	    str += arr[pos];
	}
	return str;
}
//yyyy-MM-dd HH:mm:ss
Date.prototype.format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"H+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if(/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

