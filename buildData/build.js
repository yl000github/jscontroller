load("/lib/common.js");
load("/lib/function.js");
load("/lib/DBUtil.js");
load("/service/DBService.js");
load("/service/QuickCodeService.js");
load("/lib/FreemarkerUtil.js");
/**
 * 1.通过表名快速构建产生数据的代码
 * 2.自己修改build的接口代码
 * 3.产生数据
 */
Action(function(request){
	var tableName=request.tableName?request.tableName:"blacklist";
	
	var sqlExecute=DBUtil.getInstance(false,{
		url:"jdbc:mysql://192.168.1.15:3306/dlb?characterEncoding=utf-8&characterSetResults=utf-8&useUnicode=false",
		user:"ymt",
		password:"yimiaotong2015",
		driver:"com.mysql.jdbc.Driver",
	});
	//获取insert语句
	
	var sql="insert into usergoodsorder(goodsOrderNO,mergeGoodsOrderID,agreementID,userQuotationID,proposalID,userID,carID,goodsID,goodsName,userGoodsID,supplierID,supplierName,shortName,kindType,buyQty,giftQty,unitAmount,startDate,endDate,goodsOrderStatus,amount,payAmount,freeAmount,cardCode,sumPremium,sumTravelTax,expireTime,protectionPlan,createTime,lastUpdate) values(@goodsOrderNO,@mergeGoodsOrderID,@agreementID,@userQuotationID,@proposalID,@userID,@carID,@goodsID,@goodsName,@userGoodsID,@supplierID,@supplierName,@shortName,@kindType,@buyQty,@giftQty,@unitAmount,@startDate,@endDate,@goodsOrderStatus,@amount,@payAmount,@freeAmount,@cardCode,@sumPremium,@sumTravelTax,@expireTime,@protectionPlan,NOW(),NOW())";
	var params=new Array();
	for(var i=0;i<1;i++){
		var obj={
			kindType:'1',
			giftQty:'0',
			endDate:'2018-07-04',
			sumTravelTax:null,
			userID:'6',
			carID:'6',
			payAmount:'82.20',
			id:null,
			goodsName:'商品3-Test01',
			userQuotationID:'9',
			supplierName:'中国平安',
			amount:'82.20',
			supplierID:'1',
			freeAmount:'0.00',
			goodsID:'2',
			goodsOrderStatus:'4',
			cardCode:null,
//			protectionPlan:'[{"amount":"T","hasFree":1,"amountShow":"投保","freePremium":150.0,"premium":1000.0,"kindName":"车辆损失险","kindID":1,"realPrice":110000}]',
			proposalID:null,
			sumPremium:'1000.00',
			buyQty:'30',
			expireTime:'2017-07-15 12:55:37.0',
			createTime:'2017-07-15 10:55:11.0',
			lastUpdate:'2017-07-15 10:55:11.0',
			agreementID:'10',
			unitAmount:'2.74',
			goodsOrderNO:'D201707150000013',
			mergeGoodsOrderID:null,
			shortName:'平安',
			startDate:'2017-07-05',
			userGoodsID:'61',
		};
		var rs=JSON.parse(sqlExecute.execute({
			sql:sql,
			param:obj
		}));
		log("rs",rs);
		params.push(obj);
	}
	log("params",params)

	
	$_response_$={
			errorCode:0
	}
})