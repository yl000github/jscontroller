var PictureUtil={
		instance:null,
		init:function(){
			if(!this.instance){
				var PictureEnabler=require("enabler.picture.PictureEnabler");
				this.instance=new PictureEnabler();
			}
		},
		merge:function(imgArr,type,outputPath,widthNum){
			if(!imgArr||imgArr.length==0){
				log("imgArr为空");
				return;
			}
			
			this.instance.merge(imgArr,type,outputPath,widthNum);
		},
		scale:function(srcImageFile,destImageFile,height,width,bb){
			if(bb==undefined){
				bb=true;
			}
			return this.instance.scale(srcImageFile,destImageFile,height,width,bb);
		},
		pressText:function(pressText,srcImageFile,destImageFile,fontName){
			this.instance.pressText(pressText,srcImageFile,destImageFile,fontName);
		},
}
PictureUtil.init();