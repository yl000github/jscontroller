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
//		/**
//		 * 
//		 * @param imgArr
//		 * @param type
//		 * @param outputPath
//		 * @param width 输出文件的宽
//		 * @param height 输出文件的高
//		 */
//		merge1:function(imgArr,type,outputPath,width,height){
//			if(!imgArr||imgArr.length==0){
//				log("imgArr为空");
//				return;
//			}
//			var len=imgArr.length;
//			var picWidth,picHeight;
//			//如何计算最佳适配
//			var ratio=width/height;
//			var delt=null;
//			var x=1;
//			var widthNum=x;
//			while (x++){
//				var curDelt= Math.abs(x*picWidth/((parseInt(len/x)+1)*picHeight)-ratio);
//				if(!delt||curDelt<delt){
//					delt=curDelt;
//					widthNum=x;
//				}
//			}
//			this.instance.merge(imgArr,type,outputPath,widthNum);
//		},
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