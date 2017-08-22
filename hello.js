print(JSON.stringify($_request_param_$));
print("hi in hello.js")
require();
//let a;
$_response_$={
		c:"ok"
}

var list=document.getElementsByTagName("input");
var demoList=['','FF456468764151315','4156464561','131231','2017-02-02','5','1',
              '2017-11-11','150000','120000','10000','10','1','1','1','1'];
var index=0;
for(var i=0;i<list.length;i++){
	var input=list[i];
	if(input.placeholder){
		if(demoList[index]){
			var span=document.createElement("span");
			span.innerHtml=demoList[index];
//			input.value=demoList[index];
			$(input).append(span)
		}
		index++;
	}
//	console.log(input)
//	console.log(input.placeholder)
}
