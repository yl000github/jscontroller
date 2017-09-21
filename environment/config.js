load("/lib/SysInfoUtil.js")
var APPDATA=SysInfoUtil.getEnv("APPDATA");
var p86=SysInfoUtil.getEnv("ProgramFiles(x86)");
var p=SysInfoUtil.getEnv("ProgramFiles");
var dir="d:/environment/";
//p86=p86.replace("\\","/")
//p=p.replace("\\","/")
//APPDATA=APPDATA.replace("\\","/")
var config={
		"notepad++":{
			folders:[
			         p86+"/Notepad++/plugins",
			         APPDATA+"/Notepad++",
			],
			files:[
				"C:/Users/Administrator/Downloads/npp_7.4.2_Installer.exe"
			]
		},
		"tomcat7":{
			folders:[
			         "D:/Program Files/tomcat",
			],
			files:[
			]
		},		
		"jdk8":{
			folders:[
			         "C:/Program Files/Java",
			         ],
			         files:[
			                ]
		},		
		"eclipse":{
			folders:[
			         "D:/eclipse-jee-mars-2-win32-x86_64 (1)/eclipse",
			         "D:/workspace/.metadata",
			         "D:/workspace/.recommenders",
			         ],
			         files:[
			                ]
		},		
}
//var config={
//		"notepad++":{
//			folders:{
//				"loc":p86+"/Notepad++/plugins",
//				"appData":APPDATA+"/Notepad++",
//			},
//			files:{
//				"install":"C:/Users/Administrator/Downloads/npp_7.4.2_Installer.exe"
//			}
//		}
//}