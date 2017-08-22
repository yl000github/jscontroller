load("/lib/common.js");
load("/lib/function.js");
load("/lib/PictureUtil.js");
load("/lib/FileUtil.js");
Action(function(request){
	var path=request.path||"e:/data.png";
	var rs=JSON.parse(FileUtil.listDir("f:/yiji/output/", false, true));
	log("rs", rs);
	log("rs", typeof rs);
	rs.sort(function(a,b){
		var numA=a.substring(a.lastIndexOf("/")+1,a.lastIndexOf("."));
		var numB=b.substring(b.lastIndexOf("/")+1,b.lastIndexOf("."));
		log("numA",numA);	
		log("numB",numB);	
//		numA=parseInt(numA);
//		numB=parseInt(numB);
		return numA-numB;
	});
	log("rs", rs);
	
	PictureUtil.merge(rs, "png", "f:/demo3.png", 3);
	
	
	$_response_$={
			errorCode:0
	}
});

