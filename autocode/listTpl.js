load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/lib/FreemarkerUtil.js");
/**
 * 读出表字段
 * 使用freemarker生成模板数据
 */
Action(function(request){
	var magicCubeTpl='<section class="cube-container"><div class="cube {1}"><figure class="front"></figure><figure class="back"></figure><figure class="right"></figure><figure class="left"></figure><figure class="top"></figure><figure class="bottom"></figure></div></section>';
	for(var i=1;i<=24;i++){
		logger.debug(magicCubeTpl.replace("{1}", "edge"+i))
	}
	for(var i=1;i<=24;i++){
		logger.debug(magicCubeTpl.replace("{1}", "edge"+i))
	}
	$_response_$={
			errorCode:0
	}
})