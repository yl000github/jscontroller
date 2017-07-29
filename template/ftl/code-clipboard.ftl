<#list columnList as column>
	obj.put("${column}", jsonObject.get("${column}"));
</#list>
<#list columnList as column>
	String ${column}=null;
</#list>
<#list columnList as column>
	${column}=rTemp.getString("${column}");
</#list>
<#list columnList as column>
	payCert.put("${column}", ${column});
</#list>

hmset smsServer:blackList <#list columnList as column> ${column} 0</#list>


hdel smsServer:blackList <#list columnList as column> ${column}</#list>

