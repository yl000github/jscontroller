<#list columnList as column>
	obj.put("${column}", jsonObject.get("${column}"));
</#list>