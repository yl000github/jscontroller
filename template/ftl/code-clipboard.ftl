##java代码
<#list columnList as column>
	obj.put("${column}", jsonObject.get("${column}"));
</#list>
<#list columnList as column>
	String ${column}=null;
</#list>


##接口测试json报文
{
<#list kvList as kv>
		  <#if kv_has_next>
	"${kv.key}":"${kv.value}",
   <#else> 
	"${kv.key}":"${kv.value}"
  </#if>
</#list>
}
##短信
hmset smsServer:blackList <#list columnList as column> ${column} 0</#list>
hdel smsServer:blackList <#list columnList as column> ${column}</#list>

##序列
<#list sequence as num>
Z201708010000${num}
</#list>
