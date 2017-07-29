		@Autowired
		${tableName?cap_first}Service ${tableName?uncap_first}Service;
		@Autowired
		${tableName?cap_first}Dao ${tableName?uncap_first}Dao;
	
	
		${tableName?cap_first}Dto ${tableName?uncap_first}Dto=new ${tableName?cap_first}Dto();
<#list columnList as column>
<#if column=="createTime"||column=="lastUpdate">  
		${tableName?uncap_first}Dto.set${column?cap_first}(new Date());
<#else>  
		${tableName?uncap_first}Dto.set${column?cap_first}(${column});
</#if>  
</#list>
//set语句
<#list columnList as column>
		${tableName?uncap_first}Dto.set${column?cap_first}(null);
</#list>

<#list columnList as column>
<#if column=="createTime"||column=="lastUpdate"||column=="id">  
<#else>  
		if(StringUtils.isEmptyStr(${tableName?uncap_first}Dto.get${column?cap_first}())){
			throw new BusinessException(ServerErrorCode.E1001.getCode(),"参数${column}缺失");
		}
</#if>
</#list>


<#list columnList as column>
<#if column=="createTime"||column=="lastUpdate"||column=="id">  
<#else>  
		String ${column}=${tableName?uncap_first}Dto.get${column?cap_first}();
</#if>
</#list>


ValidateHelper.validateNull(request, new String[]{${columnListStr}});
