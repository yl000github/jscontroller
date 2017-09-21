var TxtService={
		/**
		 * 文本读出的内容转换为行列表
		 * @param c
		 * @returns
		 */
		content2lineList:function(c){
			var columnList=c.split("\r\n");
			if(!columnList[columnList.length-1]){
				columnList.pop();
			}
			return columnList;
		},
		/**
		 * 快速构建string
		 * @param tpl
		 * @param paramList
		 * @param mode g全局
		 */
		replace:function(tpl,paramList,mode){
			var str=tpl;
			for (var i = 0; i < paramList.length; i++) {
				var param = paramList[i];
				var t='{'+i+'}';
				if(mode=="g"){
					str=str.replace(new RegExp(t,'g'),param);
				}else{
					str=str.replace(t,param);
				}
			}
			return str;
		},
		randStr:function(len){
			len = len || 32;
			var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
			var maxPos = $chars.length;
			var pwd = '';
			for (i = 0; i < len; i++) {
				pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
			}
			return pwd;
		},
		uniqueStr:function(){
			var top=new Date().getTime();
			return top+this.randStr(16);
		},
}