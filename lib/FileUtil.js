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
		listDir:function(filepath,recrusive,isFullPath){
			recrusive=recrusive||false;
			isFullPath=isFullPath||true;
			return this.instance.listDir(filepath,recrusive,isFullPath);
		}
}
FileUtil.init();