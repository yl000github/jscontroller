var PageUtil={
	instance:null,
	init:function(){
		if(!this.instance){
			var PageEnabler=require("complex.page.PageEnabler");
			this.instance=new PageEnabler();
		}
	},
	open:function(url){
		this.init();
		this.instance.open(url);
	},
	/**
	 * xpath
	 * @param patter
	 * @returns {___anonymous292_302}
	 */
	findElement:function(pattern){
		var dom=this.instance.findElement(pattern);
		return dom;
	},
	findElements:function(pattern){
		var doms=this.instance.findElements(pattern);
		return doms;
	}
}