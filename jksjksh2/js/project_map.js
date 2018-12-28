/*
 * 
 */
"use strict";
function selectMapHeat(city,hospitalsLocations,type){
	// 百度地图API功能
	var map = new BMap.Map("map");    // 创建Map实例
	map.centerAndZoom(city,13);      // 初始化地图,用城市名设置地图中心点
	var mapStyle = {
		features: ["road", "water","land"],
		style:"midnight"//地图风格
	}
	map.setMapStyle(mapStyle);
//	var zoom =11;
	//map.centerAndZoom(new BMap.Point(115.90,28.71), 14);  // 初始化地图,设置中心点坐标和地图级别
//	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP]}));   //添加地图类型控件
	//map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的？？？？
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	var icon1 = new BMap.Icon('images/icon_fxyc.png', new BMap.Size(60, 60), {
		//20*32为可显示部分的大小
		//png为自定义的图标文件

	    //anchor: new BMap.Size(0, 30),
	 });
	var icon2 = new BMap.Icon('images/icon_fxyc0.png', new BMap.Size(60, 60), {
		//20*32为可显示部分的大小
		//png为自定义的图标文件

	    //anchor: new BMap.Size(0, 30),
	 });
	var icon3 = new BMap.Icon('images/icon_fxyc1.png', new BMap.Size(60, 60), {
		//20*32为可显示部分的大小
		//png为自定义的图标文件

	    //anchor: new BMap.Size(0, 30),
	 });
	var icon4 = new BMap.Icon('images/icon_fxyc2.png', new BMap.Size(80, 80), {
		//20*32为可显示部分的大小
		//png为自定义的图标文件

	    //anchor: new BMap.Size(0, 30),
	 });
	var icon5 = new BMap.Icon('images/icon_fxyc3.png', new BMap.Size(80, 80), {
		//20*32为可显示部分的大小
		//png为自定义的图标文件

	    //anchor: new BMap.Size(0, 30),
	 });
	var icon6 = new BMap.Icon('images/icon_fxyc4.png', new BMap.Size(80, 80), {
		//20*32为可显示部分的大小
		//png为自定义的图标文件

	    //anchor: new BMap.Size(0, 30),
	 });
	 var hospitals1=new Array();
	 var hospitals2=new Array();
	 var hospitals3=new Array();
	 var hospitals4=new Array();
	 var hospitals5=new Array();
	 var hospitals6=new Array();
	 for(var i = 0;i<hospitalsLocations.length;i++){
		 var ds=hospitalsLocations[i].d1;
		 if(ds>0&&ds<=1000){
			 hospitals1.push(hospitalsLocations[i]);
		 }else if(ds>1000&&ds<=3000){
			 hospitals2.push(hospitalsLocations[i]);
		 }else if(ds>3000&&ds<=5000){
			 hospitals3.push(hospitalsLocations[i]);
		 }else if(ds>5000&&ds<=7000){
			 hospitals4.push(hospitalsLocations[i]);
		 }else if(ds>7000&&ds<=9000){
			 hospitals5.push(hospitalsLocations[i]);
		 }else if(ds>9000){
			 hospitals6.push(hospitalsLocations[i]);
		 }
	 }
//	 console.log(hospitals1);
//	 console.log(hospitals2);
//	 console.log(hospitals3);
//	 console.log(hospitals4);
//	 console.log(hospitals5);
	//首页待显示的卫生院数据，可以加各种病情数据
	for( var i = 0;i<hospitals1.length;i++){
		(function(i){
				var marker = new BMap.Marker(new BMap.Point(hospitals1[i].geo[0],hospitals1[i].geo[1]),{
	                 icon: icon1
	            });
				var  content  ="从当前2017年9月，半年时间以来"+hospitals1[i].name+"数据分析高血压新增患者可能有"+hospitals1[i].d1+"名。"+"<br/>"+
           		"请对以下人群加以重视"; 
				var contentsUser="<div style='overflow-y:auto;height:182px;'><table><thead><th>姓名</th><th>身份证号</th><th>联系方式</th></thead>";
				var userName=["张力","李丽","吉吉","郭天","丁山","赵丽","陈成","王晓"];
				for(var s=0;s<8;s++){
					contentsUser=contentsUser+"<tr><td>"+userName[s]+"</td><td>23232419900"+(s+1)+"****</td><td>1321043567"+(s+1)+"</td></tr>";
				}
				contentsUser=contentsUser+"</table></div>";
//				console.log(contentsUser);
				var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;color:black;width:400px;'>" + content + "</p>"+"" +contentsUser,{
	            	//options here
	             });	
	            //console.log(content);
	           
	            map.addOverlay(marker);
	            //map.addOverlay(circ);
	            //为每个marker点添加鼠标移入事件
//	            marker.addEventListener("mouseover",function(e){
//	            	
//	            	this.openInfoWindow(infoWindow);
//	            });
//	            marker.addEventListener("mouseout",function(e){
//	            	this.closeInfoWindow();
//	            });
	            marker.addEventListener("click",function(e){
	            	this.openInfoWindow(infoWindow);
	            })
		})(i);
      }
	for( var i =0;i<hospitals2.length;i++){
		(function(i){
				var marker = new BMap.Marker(new BMap.Point(hospitals2[i].geo[0],hospitals2[i].geo[1]),{
	                 icon: icon2
	            });
				var  content  ="从当前2017年9月，半年时间以来"+hospitals2[i].name+"数据分析高血压新增患者可能有"+hospitals2[i].d1+"名。"+"<br/>"+
           		"请对以下人群加以重视"; 
				var contentsUser="<div style='overflow-y:auto;height:182px;'><table><thead><th>姓名</th><th>身份证号</th><th>联系方式</th></thead>";
				var userName=["张章","王晓","黄磊","宋江","赵云","韩寒","金鑫","李雷"];
				for(var s=0;s<8;s++){
					contentsUser=contentsUser+"<tr><td>"+userName[s]+"</td><td>23232419900"+(s+1)+"****</td><td>1321043567"+(s+1)+"</td></tr>";
				}
				contentsUser=contentsUser+"</table></div>";
//				console.log(contentsUser);
				var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;color:black;width:400px;'>" + content + "</p>"+"" +contentsUser,{
	            	//options here
	             });	
	            //console.log(content);
	           
	            map.addOverlay(marker);
	            //map.addOverlay(circ);
	            //为每个marker点添加鼠标移入事件
//	            marker.addEventListener("mouseover",function(e){
//	            	
//	            	this.openInfoWindow(infoWindow);
//	            });
//	            marker.addEventListener("mouseout",function(e){
//	            	this.closeInfoWindow();
//	            });
	            marker.addEventListener("click",function(e){
	            	this.openInfoWindow(infoWindow);
	            })
		})(i);
      }
	for(var i =0;i<hospitals3.length;i++){
		(function(i){
				var marker = new BMap.Marker(new BMap.Point(hospitals3[i].geo[0],hospitals3[i].geo[1]),{
	                 icon: icon3
	            });
				var  content  ="从当前2017年9月，半年时间以来"+hospitals3[i].name+"数据分析高血压新增患者可能有"+hospitals3[i].d1+"名。"+"<br/>"+
           		"请对以下人群加以重视"; 
				var contentsUser="<div style='overflow-y:auto;height:182px;'><table><thead><th>姓名</th><th>身份证号</th><th>联系方式</th></thead>";
				var userName=["颜岩","王晓","黄磊","宋江","赵云","韩寒","金鑫","李雷"];
				for(var s=0;s<8;s++){
					contentsUser=contentsUser+"<tr><td>"+userName[s]+"</td><td>23232419900"+(s+1)+"****</td><td>1321043567"+(s+1)+"</td></tr>";
				}
				contentsUser=contentsUser+"</table></div>";
//				console.log(contentsUser);
				var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;color:black;width:400px;'>" + content + "</p>"+"" +contentsUser,{
	            	//options here
	             });	
	            //console.log(content);
	           
	            map.addOverlay(marker);
	            //map.addOverlay(circ);
	            //为每个marker点添加鼠标移入事件
//	            marker.addEventListener("mouseover",function(e){
//	            	
//	            	this.openInfoWindow(infoWindow);
//	            });
//	            marker.addEventListener("mouseout",function(e){
//	            	this.closeInfoWindow();
//	            });
	            marker.addEventListener("click",function(e){
	            	this.openInfoWindow(infoWindow);
	            })
		})(i);
      }
	for(var i =0;i<hospitals4.length;i++){
		(function(i){
				var marker = new BMap.Marker(new BMap.Point(hospitals4[i].geo[0],hospitals4[i].geo[1]),{
	                 icon: icon4
	            });
				var  content  ="从当前2017年9月，半年时间以来"+hospitals4[i].name+"数据分析高血压新增患者可能有"+hospitals4[i].d1+"名。"+"<br/>"+
           		"请对以下人群加以重视"; 
				var contentsUser="<div style='overflow-y:auto;height:182px;'><table><thead><th>姓名</th><th>身份证号</th><th>联系方式</th></thead>";
				var userName=["孙哈","王晓","黄磊","宋江","赵云","韩寒","金鑫","李雷"];
				for(var s=0;s<8;s++){
					contentsUser=contentsUser+"<tr><td>"+userName[s]+"</td><td>23232419900"+(s+1)+"****</td><td>1321043567"+(s+1)+"</td></tr>";
				}
				contentsUser=contentsUser+"</table></div>";
//				console.log(contentsUser);
				var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;color:black;width:400px;'>" + content + "</p>"+"" +contentsUser,{
	            	//options here
	             });	
	            //console.log(content);
	           
	            map.addOverlay(marker);
	            //map.addOverlay(circ);
	            marker.addEventListener("click",function(e){
	            	this.openInfoWindow(infoWindow);
	            })
		})(i);
      }
	for(var i =0;i<hospitals5.length;i++){
		(function(i){
				var marker = new BMap.Marker(new BMap.Point(hospitals5[i].geo[0],hospitals5[i].geo[1]),{
	                 icon: icon5
	            });
				var  content  ="从当前2017年9月，半年时间以来"+hospitals5[i].name+"数据分析高血压新增患者可能有"+hospitals5[i].d1+"名。"+"<br/>"+
           		"请对以下人群加以重视"; 
				var contentsUser="<div style='overflow-y:auto;height:182px;'><table><thead><th>姓名</th><th>身份证号</th><th>联系方式</th></thead>";
				var userName=["李四","王晓","黄磊","宋江","赵云","韩寒","金鑫","李雷"];
				for(var s=0;s<8;s++){
					contentsUser=contentsUser+"<tr><td>"+userName[s]+"</td><td>23232419900"+(s+1)+"****</td><td>1321043567"+(s+1)+"</td></tr>";
				}
				contentsUser=contentsUser+"</table></div>";
//				console.log(contentsUser);
				var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;color:black;width:400px;'>" + content + "</p>"+"" +contentsUser,{
	            	//options here
	             });	
	            //console.log(content);
	           
	            map.addOverlay(marker);
	            //map.addOverlay(circ);
	            marker.addEventListener("click",function(e){
	            	this.openInfoWindow(infoWindow);
	            })
		})(i);
      }
	for(var i =0;i<hospitals6.length;i++){
		(function(i){
				var marker = new BMap.Marker(new BMap.Point(hospitals6[i].geo[0],hospitals6[i].geo[1]),{
	                 icon: icon6
	            });
				var  content  ="从当前2017年9月，半年时间以来"+hospitals6[i].name+"数据分析高血压新增患者可能有"+hospitals6[i].d1+"名。"+"<br/>"+
           		"请对以下人群加以重视"; 
				var contentsUser="<div style='overflow-y:auto;height:182px;'><table><thead><th>姓名</th><th>身份证号</th><th>联系方式</th></thead>";
				var userName=["张力","李丽","吉吉","郭天","丁山","赵丽","陈成","王晓"];
				for(var s=0;s<8;s++){
					contentsUser=contentsUser+"<tr><td>"+userName[s]+"</td><td>23232419900"+(s+1)+"****</td><td>1321043567"+(s+1)+"</td></tr>";
				}
				contentsUser=contentsUser+"</table></div>";
//				console.log(contentsUser);
				var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;color:black;width:400px;'>" + content + "</p>"+"" +contentsUser,{
	            	//options here
	             });	
	            //console.log(content);
	           
	            map.addOverlay(marker);
	            //map.addOverlay(circ);
	            marker.addEventListener("click",function(e){
	            	this.openInfoWindow(infoWindow);
	            })
		})(i);
      }
}
//全部的
function selectDataHeat(city,type){
	//首页待显示的卫生院数据，可以加各种病情数据

	var hospitalsLocations = [
	                          {"geo":[115.917131,28.692808],"name":"南昌大学第一附属医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.896963,28.699293],"name":"江西省人民医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.992593,28.664981],"name":"江西中医药大学附属医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.960207,28.681747],"name":"江西省肿瘤医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.914884,28.672807],"name":"南昌大学第四附属医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.917185,28.658076],"name":"中国人民解放军九四医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.883831,28.658752],"name":"中国人民武装警察部队江西省总队医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.933666,28.647335],"name":"南昌三三四医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.948784,28.550393],"name":"南昌县人民医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.931157,28.578469],"name":"南昌县中医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.912847,28.633174],"name":"江西省长征医院（监狱局中心医院）","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.937066,28.682872],"name":"江西凤凰第一医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                         // {"geo":[115.924481,28.678672],"name":"江西广济医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.949429,28.724633],"name":"江西江氨化学工业有限公司职工医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.948239,28.661701],"name":"南昌航空大学医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.861502,28.632226],"name":"南昌市西湖区朝阳","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)}
	                          //江西华源江纺有限公司职工医院
	                      ];	

	selectMapHeat(city,hospitalsLocations,type);	
}