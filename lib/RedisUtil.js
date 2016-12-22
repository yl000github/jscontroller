var RedisUtil={
		instance:null,
		init:function(){
			if(!this.instance){
				var RedisEnabler=require("enabler.redis.RedisEnabler");
				this.instance=new RedisEnabler();
			}
		},
		hgetall:function(tableName){
			return this.instance.hgetall(tableName);
		},
		hget:function(tableName,key){
			return this.instance.hget(tableName,key);
		},
}
RedisUtil.init();