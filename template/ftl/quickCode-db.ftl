###########sql语句###########
insertSql1:
${insertSql1}
insertSql2:
${insertSql2}


###########java代码###########


<#list columnList as column>
	obj.put("${column}", jsonObject.get("${column}"));
</#list>