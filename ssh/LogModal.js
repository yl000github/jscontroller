var LogModal=function(txt){
	this.txt=txt;
	if(txt){
		this.arr=txt.split("\n");
		this.rowNum=this.arr.length;
	}
	log("文本总行数："+this.rowNum)
}
/**
 * 查找第一关键字出现的位置，如果有第二关键字，在一定范围内匹配第二关键字，返回第一次出现的行号
 * @param first
 * @param second
 */
LogModal.prototype.findHead=function(first,second){
	log("first",first);
	log("second",second);
	if(!this.txt||!first) return ;
//	log("findHead.rowNum",this.rowNum);
	var r=this.rowNum-1;
	var scope=10;//第二关键字的查找范围
	while(r--){
		var rs=rowPro(this.arr, r, first, second);
		if(rs){
			return rs;
		}
	}
}
function rowPro(arr,r,first,second){
	if(arr[r].indexOf(first)!=-1){
		log("row find",arr[r])
		var content="";
		for(var i=0;i<1;i++){
			if((r+i)<arr.length){
				content+=arr[r+i];
			}else{
				break;
			}
		}
		if(!second){
			return {
				pos:r,
				content:content
			}
		}else{
			if(content.indexOf(second)!=-1){
				return {
					pos:r,
					content:content
				}
			}
		}
	}

}
/**
 * 根据行号查找关键字出现的位置
 * @param rowNum
 * @param first
 */
LogModal.prototype.findTail=function(row,first,second){
	if(!first) return ;
	var r=row+1;
//	log("findTail.rowNum",this.rowNum);
	var scope=10;//第二关键字的查找范围
	while(r++<this.rowNum){
		var rs=rowPro(this.arr, r, first, second);
		if(rs){
			return rs;
		}
	}
}
LogModal.prototype.findReturn=function(head,tail){
	var c=this.findHead(head.first, head.second);
	log("findHead",c);
	if(!c) return ;
	var rs=this.findTail(c.pos, tail.first, tail.second);
	log("findTail",rs);
	if(!rs) return ;
	return rs.content;
}