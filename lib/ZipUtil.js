var ZipUtil={
		instance:null,
		init:function(){
			if(!this.instance){
				var Enabler=require("enabler.file.ZipEnabler");
				this.instance=Enabler;
			}
		},
		/**
		 * 
		 * @param dest  目标路径
		 * @param files  文件数组
		 */
		zipFile:function(dest,files){
			var req=JSON.stringify({
				dest:dest,
				files:files,
			})
			this.instance.zipFile(req);
		},
		unzipFile:function(path,dest){
			this.instance.unzipFile(path,dest);
		},
}
ZipUtil.init();