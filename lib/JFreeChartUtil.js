var JFreeChartUtil={
		instance:null,
		init:function(){
			if(!this.instance){
				var Enabler=require("complex.statistics.JFreeChartEnabler");
				this.instance=Enabler;
//				this.instance=new Enabler();
			}
		},
		buildBarChart:function(filepath,titleList,dataList){
			var titleStr=JSON.stringify(titleList);
			var dataStr=JSON.stringify(dataList);
			this.instance.buildBarChart(filepath,titleStr,dataStr);
		},
		buildPieChart:function(filepath,titleList,dataList){
			var titleStr=JSON.stringify(titleList);
			var dataStr=JSON.stringify(dataList);
			this.instance.buildPieChart(filepath,titleStr,dataStr);
		},
		buildLineChart:function(filepath,titleList,dataList){
			var titleStr=JSON.stringify(titleList);
			var dataStr=JSON.stringify(dataList);
			this.instance.buildLineChart(filepath,titleStr,dataStr);
		},
		
}
JFreeChartUtil.init();