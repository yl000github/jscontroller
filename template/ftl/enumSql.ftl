
<#list typeList as obj>
insert into CodeTypes values(null,'${obj.codeType?cap_first}','${obj.typeName}','1',null,'2017-06-06 06:06:06','2017-06-06 06:06:06');
</#list>

<#list objList as obj>
insert into CodeDetails values(null,'${obj.codeType?cap_first}','${obj.codeValue}','${obj.codeName}','${obj.priority}','1',null,'2017-06-06 06:06:06','2017-06-06 06:06:06');
</#list>