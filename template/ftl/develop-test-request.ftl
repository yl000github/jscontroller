
接口测试json报文
{
<#list kvList as kv>
		  <#if kv_has_next>
	"${kv.key}":"${kv.value}",
   <#else> 
	"${kv.key}":"${kv.value}"
  </#if>
</#list>
}