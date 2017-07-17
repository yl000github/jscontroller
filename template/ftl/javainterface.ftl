参数校验	
<#list columnList as column>
		if(StringUtils.isEmptyStr(${column})){
			LogUtil.log("参数${column}缺失");return;
		}
	</#list>



	
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