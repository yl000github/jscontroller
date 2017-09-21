load("/lib/common.js");
load("/lib/function.js");
load("/lib/PictureUtil.js");
load("/lib/FileUtil.js");
Action(function(request){
	var path=request.path||"e:/data.png";
//	var rs=JSON.parse(FileUtil.listDir("f:/magiccube/", false, true));
	var rs=JSON.parse(FileUtil.listDir("f:/yiji/output/", false, true));
	log("rs", rs);
	PictureUtil.merge(rs, "png", "f:/merge.png", 8);
	PictureUtil.scale("f:/merge.png", "f:/merge1.png", 1280, 720, true);
	$_response_$={
			errorCode:0
	}
});

