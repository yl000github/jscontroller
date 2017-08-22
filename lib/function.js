function numCompare(s1){
	return (parseFloat(this)-parseFloat(s1))>0;
};
//避免NaN错误
//var parseFloat1=parseFloat;
var parseFloat1=function(s){
	if(isNull(s)) s="0";
	return parseFloat(s);
}
/**
 * 对[]兼容性不够
 * @param flag
 * @param obj
 */
function log(flag,obj){
	flag="========="+flag+"=========";
	var str="";
	var t= typeof obj;
//	logger.debug(t)
	if(t=='boolean'){
		logger.debug(flag+obj);
		return;
	}
	
//	if(obj==false) {
//		logger.debug(flag+obj);
//		return;
//	}
	if(obj){
		try {
			if(obj instanceof Object){
				str=JSON.stringify(obj);
			}else{
				str=obj;
			}
		} catch (e) {
			str=obj;
		}
	}
	logger.debug(flag+str);
}

/**
 * 去除字符串前多余的0，并转为int型
 * @param str
 * @returns
 */
function clearZero(str){
	if(str && (typeof str)=="string"){
		var i=0;
		while(str.charAt(i)==0&&i<str.length){
//			logger.debug(str.charAt(i))
			i++;
		}
		var s=str.substring(i);
		return parseInt(s);
	}else{
		return str;
	}
}

function isNull(param){
	if(param==undefined||param==null) return true;
	param=String(param);
	return param.trim()=="";
}
/**
 * 基本的异常类
 */
var ResException=function(errorCode,errorMsg){
	this.errorCode=errorCode;
	this.errorMsg=errorMsg;
}
ResException.prototype.toJSON=function(){
	return JSON.stringify({
		errorCode:this.errorCode,
		errorMsg:this.errorMsg
	})
}
/**
 * 
 * @param param 请求对象
 * @param checkKeys  var checkKeys=["userID","carLicense","drivingLicenseUrl"];
 */
function checkParamsE(request,checkKeys){
	var param=request;
	var isOk=true;
	var errMsg=checkKeys.map(function(item,index){
		if(!param[item]) {
			isOk=false;
			return item+"不能为空";
		}
	}).filter(function(item){
		return !isNull(item);
	}).join(";").toString();
	if(!isOk){
		throw new ResException(-1,errMsg);
	}
}

/**
 * 去除.0
 * eg:2016-10-28 15:04:36.0-》2016-10-28 15:04:36
 * @param dateStr
 * @returns
 */
function formatDate(dateStr){
	if(!dateStr) return null;
	if(dateStr.length!=21) return null;
	return dateStr.substring(0,19);
}








