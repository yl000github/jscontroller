load("/lib/common.js");
load("/lib/function.js");
load("/lib/FreemarkerUtil.js");
Action(function(request){
	var json=JSON.stringify({
		A:"asdads",
		ll:[
		    {
			name:"123"
		},
		{
			name:"124"
		},
		{
			name:"125"
		},
		    
		    
		    ]
	})
//	FreemarkerUtil.printFile("template/ftl/demo.ftl", "template/output/output.txt", json)
	FreemarkerUtil.printFile("demo.ftl", "output1.txt", json)
	$_response_$={
			errorCode:0
	}
})
