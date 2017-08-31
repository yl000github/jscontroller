load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/lib/JFreeChartUtil.js");
load("/lib/FileUtil.js");
load("/service/TxtService.js");
Action(function(request){

	var titleList=[
	               "first",
	               "second",
	               "third",
	               ]
	var dataList=[
	              ["1","shenzhen","2008"],
	              ["2","shenzhen","2009"],
	              ["3.1","shenzhen","2010"],
	              
	              ["1.9","shanghai","2008"],
	              ["2.5","shanghai","2009"],
	              ["3.1","shanghai","2010"],
	              
	              ["10","wuhan","2008"],
	              ["2.6","wuhan","2009"],
	              ["7.1","wuhan","2010"],
	              
	              ];
	
	JFreeChartUtil.buildBarChart("f:/barchart.jpg", titleList, dataList);
	JFreeChartUtil.buildLineChart("f:/linechart.jpg", titleList, dataList);
	JFreeChartUtil.buildPieChart("f:/piechart.jpg", titleList, dataList);
	
	
	$_response_$={
		errorCode:0
	}
})
