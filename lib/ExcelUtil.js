var ExcelUtil={
		instance:null,
		init:function(){
			if(!this.instance){
				var ExcelEnabler=require("enabler.office.ExcelEnabler");
				this.instance=new ExcelEnabler();
			}
		},
		read:function(filepath){
			return this.instance.read(filepath);
		},
		/**
		 * 	var data={
					"2":{
						"3":"2行3列的内容"
					}
			};
			0行开始
		 * @param filepath
		 * @param content
		 */
		write:function(filepath,content){
			this.instance.write(filepath,JSON.stringify(content));
		},
		/**
		 * arr 二维数组
		 * @param filepath
		 * @param arr
		 */
		writeArray:function(filepath,arr){
			var result={};
			for(var i=0;i<arr.length;i++){
				var line=arr[i];
				var obj={};
				for(var j=0;j<line.length;j++){
					var c=line[j];
					obj[j]=String(c);
				}
				result[i]=obj;
			}
			log("result",result);
			return this.write(filepath,result);
		}
}
ExcelUtil.init();