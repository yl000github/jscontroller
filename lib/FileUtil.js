var FileUtil={
		instance:null,
		init:function(){
			if(!this.instance){
				var FileEnabler=require("enabler.file.FileEnabler");
				this.instance=FileEnabler;
//				this.instance=new FileEnabler();
			}
		},
		getFileName:function(filepath){
			return this.instance.getFileName(filepath);
		},
		getFileSize:function(filepath){
			return this.instance.getFileSize(filepath);
		},
		write:function(filepath,content,isAdd){
			isAdd=isAdd?isAdd:false;
			return this.instance.write(filepath,content,isAdd);
		},
		read:function(filepath){
			return this.instance.read(filepath);
		},
		mkdir:function(filepath,overwrite){
			return this.instance.mkdir(filepath,overwrite);
		},
		/**
		 * 
		 * @param filepath
		 * @param recrusive
		 * @param isFullPath  返回的路径是否全路径
		 * @returns 字符串数组
		 */
		listDir:function(filepath,recrusive,isFullPath){
//			recrusive=recrusive==undefined||false;
//			isFullPath=isFullPath==undefined||true;
			return this.instance.listDir(filepath,recrusive,isFullPath);
		}
}
FileUtil.init();