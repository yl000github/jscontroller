var SysInfoUtil={
		instance:null,
		init:function(){
			if(!this.instance){
				var Enabler=require("enabler.sys.SysInfoEnabler");
				this.instance=Enabler;
			}
		},
		/**
		 * 
		 * @param origin  false表明获取原生值
		 */
		getEnv:function(key,origin){
			var rs=this.instance.getEnv(key);
			if(!origin){
				if(rs){
					rs=rs.replace(/\\/g,"/") 
					rs=rs.replace(/\\\\/g,"/") 
				}
			}
			return rs;
		},
}
SysInfoUtil.init();