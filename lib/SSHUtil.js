var SSHUtil={
		instance:null,
		init:function(ip,user,password){
			if(!this.instance){
				var SSHEnabler=require("enabler.ssh.SSHEnabler");
				this.instance=new SSHEnabler(ip,user,password);
			}
		},
		/**
		 * 
		 * @param path
		 * @returns 远程文件内容
		 */
		readFile:function(param){
			var SSHEnabler=require("enabler.ssh.SSHEnabler");
			var instance=new SSHEnabler(param.ip,param.user,param.password);
			return instance.readFile(param.path);
		},
		
}
