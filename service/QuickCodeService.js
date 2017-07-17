/**
 * 尽量减少代码级操作
 * 所有的数据传输全部是json对象
 */
load("/service/DBService.js");
load("/lib/ClipboardUtil.js");
var QuickCodeService={
		inputClipboard:function(){
			var c=ClipboardUtil.getContent();
			var columnList=c.split("\n");
			if(!columnList[columnList.length-1]){
				columnList.pop();
			}
//			log("columnList",columnList.length)
			return {
				columnList:columnList
			}
		},
		inputDB:function(sqlExecute,tableName){
			var columnList=DBService.getColumnList(sqlExecute, tableName);
			return {
				tableName:tableName,
				columnList:columnList,
			}
		},
		inputTxt:function(filepath){
			var c=FileUtil.read(filepath);
			log("文件读取的内容",c);
			var columnList=c.split("\r\n");
			
			if(!columnList[columnList.length-1]){
				columnList.pop();
			}
			return {
				filepath:filepath,
				columnList:columnList
			}
		},
		/**
		 * 
		 * @param input  input都包含columnList属性
		 * @param handleFn
		 * @param outputType 1报文输出，2文件输出,3freemarker输出,4写到剪切板  默认1
		 * 
		 */
		process:function(input,handleFn,output){
			log("input",input);
			log("output",output);
			var rs=handleFn(input);
			log("handle result",rs);
			if(!output){
				this.outputResponse(rs);return ;
			}
			if(output.type==2){
				this.outputTxt(output.path,rs);
			}else if(output.type==3){
				this.outputFreemarker(output.path, output.templateName, rs);
			}else if(output.type==4){
				this.outputFreemarker(output.path, output.templateName, rs);
			}
		},
		outputResponse:function(result){
			$_response_$.data=result;
		},
		outputTxt:function(path,result){
			FileUtil.write(filepath, JSON.stringify(result), false);
		},
		outputFreemarker:function(path,templateName,result){
//			log("result",result.columnList[0])
			//默认固定路径
			path="C:/Users/Administrator/Desktop/jscontroller-result.txt";
			FreemarkerUtil.printFile(templateName, path, JSON.stringify(result));
		},
		outputClipboard:function(result){
			ClipboardUtil.setContent(result);
		},
}