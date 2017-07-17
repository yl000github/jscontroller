/*
 * SDK本地检测参数返回的错误码：
error_code	error_msg	备注
SDK100	image size error	图片大小超限
SDK101	image length error	图片边长不符合要求
SDK102	read image file error	读取图片文件错误
SDK108	connection or read data time out	连接超时或读取数据超时
SDK109	unsupported image format	不支持的图片格式
服务端返回的错误码
错误码	错误信息	描述
216015	module closed	模块关闭
216100	invalid param	非法参数
216101	not enough param	参数数量不够
216102	service not support	业务不支持
216103	param too long	参数太长
216110	appid not exist	APP ID不存在
216111	invalid userid	非法用户ID
216200	empty image	空的图片
216201	image format error	图片格式错误
216202	image size error	图片大小错误
216300	db error	DB错误
216400	backend error	后端系统错误
216401	internal error	内部错误
216500	unknown error	未知错误
216600	id number format error	身份证的ID格式错误
216601	id number and name not match	身份证的ID和名字不匹配
216630	recognize error	识别错误
216631	recognize bank card error	识别银行卡错误
216632	ocr	unknown error
216633	recognize idcard error	识别身份证错误
216634	detect error	检测错误
216635	get mask error	获取mask图片错误
282000	logic internal error	业务逻辑层内部错误
282001	logic backend error	业务逻辑层后端服务错误
282002	input encoding error	请求参数编码错误
282100	image transcode error	图片压缩转码错误
 */
var BaiduRecogniseUtil={
		instance:null,
		init:function(){
			if(!this.instance){
				var Enabler=require("enabler.picture.BaiduRecogniseEnabler");
				this.instance=new Enabler();
			}
		},
		recognise:function(path){
			if(!path) return "";
			return this.instance.recognise(path);
		},
}
BaiduRecogniseUtil.init();