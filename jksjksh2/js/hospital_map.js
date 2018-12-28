/*
 * 
 */
"use strict";
function selectMap(city,hospitalsLocations,type){
	// 百度地图API功能
	var map = new BMap.Map("map");    // 创建Map实例
	map.centerAndZoom(city,13);      // 初始化地图,用城市名设置地图中心点
	var mapStyle = {
		features: ["road", "water","land"],
		style:"midnight"//地图风格
	}
	map.setMapStyle(mapStyle);
	//map.centerAndZoom(new BMap.Point(115.90,28.71), 14);  // 初始化地图,设置中心点坐标和地图级别
	//map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP]}));   //添加地图类型控件
	//map.setCurrentCity(city);          // 设置地图显示的城市 此项是必须设置的？？？？
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	//
	var icon = new BMap.Icon('images/hospital.png', new BMap.Size(30, 32), {
		//20*32为可显示部分的大小
		//png为自定义的图标文件

	    anchor: new BMap.Size(10, 30),

	    /*指定定位位置。   
		当标注显示在地图上时，其所指向的地理位置距离图标左上    
		角各偏移10像素和25像素。您可以看到在本例中该位置即是图标中央下端的尖角位置。*/   
	    //offset: new BMap.Size(10, 25),

	    infoWindowAnchor: new BMap.Size(10, 0)//偏移量

	    /*设置图片偏移。   
		当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
		需要指定大图的偏移位置，此做法与css sprites技术类似。    */
		//imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移
	});

//	//首页待显示的卫生院数据，可以加各种病情数据
//	var hospitalsLocations = [
//            {"geo":[116.282967,39.910959],"name":"中国人民解放军总医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
//            {"geo":[116.378824,39.962809],"name":"中国人民解放军第二炮兵总医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
//            {"geo":[116.350461,40.063795],"name":"北京大学第三医院第二门诊部","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
//            {"geo":[116.422091,39.916995],"name":"北京协和医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
//            {"geo":[116.303295,39.956306],"name":"首都医科大学附属医院北京朝阳医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)}
//        ];	
//	var hospitalsHigh = [
//	        {"geo":[116.282967,39.910959],"name":"中国人民解放军总医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
//	        {"geo":[116.378824,39.962809],"name":"中国人民解放军第二炮兵总医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
//	        {"geo":[116.350461,40.063795],"name":"北京大学第三医院第二门诊部","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
//	        {"geo":[116.422091,39.916995],"name":"北京协和医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
//	        {"geo":[116.303295,39.956306],"name":"首都医科大学附属医院北京朝阳医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)}
//	  ];	
	//var hostpitalName=["中国人民解放军总医院","中国人民解放军第二炮兵总医院","北京大学第三医院第二门诊部","北京协和医院","首都医科大学附属医院北京朝阳医院"];
	// marker样式
	//var mkr = new BMap.Marker(new BMap.Point(115.903047,28.71074), {
	    //icon: icon
	//});
	//从卫生院坐标里取坐标作为marker坐标
	for( var i = 0;i<hospitalsLocations.length;i++){
			(function(i){
				var marker = new BMap.Marker(new BMap.Point(hospitalsLocations[i].geo[0],hospitalsLocations[i].geo[1]),{
	                 icon: icon
	            });
	            var content = hospitalsLocations[i].name+"<br/>"+"目前回访情况：<br/>"+"1、高血压人数"+hospitalsLocations[i].d1+"人"+"<br/>"+"2、糖尿病人数"+hospitalsLocations[i].d2+"人"+"<br/>" +
	            		"3、重度精神病人数："+hospitalsLocations[i].d3+"人"+"<br/>"+"4、孕妇："+hospitalsLocations[i].d4+"人"+"<br/>"+"5、婴幼儿育苗接种："+hospitalsLocations[i].d5+"人"+"<br/>";
	            if(type=="1"){
	            	content ="高血压<br/>"+hospitalsLocations[i].name+"<br/>目前访问情况：<br/>高血压人数：" +hospitalsLocations[i].d1+"<br/>"+
            		"男性："+hospitalsLocations[i].d2+"患者   女性"+hospitalsLocations[i].d3+"患者"+"<br/>";
	            }else if(type=="2"){
	            	content ="糖尿病<br/>"+hospitalsLocations[i].name+"<br/>目前访问情况：<br/>糖尿病人数：" +hospitalsLocations[i].d1+"<br/>"+
            		"男性："+hospitalsLocations[i].d2+"患者   女性"+hospitalsLocations[i].d3+"患者"+"<br/>";
	            }else if(type=="3"){
	            	content ="重度精神病<br/>"+hospitalsLocations[i].name+"<br/>目前访问情况：<br/>重度精神病：" +hospitalsLocations[i].d1+"<br/>"+
            		"男性："+hospitalsLocations[i].d2+"患者   女性"+hospitalsLocations[i].d3+"患者"+"<br/>";
	            }else if(type=="4"){
	            	content ="孕妇<br/>"+hospitalsLocations[i].name+"<br/>目前访问情况：：<br/>孕妇人数：" +hospitalsLocations[i].d1+"<br/>";
	            }else if(type=="5"){
	            	content ="婴幼儿<br/>"+hospitalsLocations[i].name+"<br/>目前访问情况：<br/>婴幼儿人数：" +hospitalsLocations[i].d1+"<br/>";
	            }
	            var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;color:black;z-index:12;'>" + content + "</p>",{
	            	//options here
	            });
	            map.addOverlay(marker);
	            //为每个marker点添加鼠标移入事件
	            marker.addEventListener("mouseover",function(e){
	            	this.openInfoWindow(infoWindow);
	            });
	            marker.addEventListener("mouseout",function(e){
	            	this.closeInfoWindow();
	            });
	            marker.addEventListener("click",function(e){
	            	console.log("hello");
	            })
			})(i);
            
        }
}
//全部的
function selectDateAll(city,type){
	//首页待显示的卫生院数据，可以加各种病情数据

	var hospitalsLocations = [
	                          {"geo":[115.917131,28.692808],"name":"南昌大学第一附属医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.908386,28.688574],"name":"南昌大学第二附属医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.896963,28.699293],"name":"江西省人民医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.992593,28.664981],"name":"江西中医药大学附属医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.960207,28.681747],"name":"江西省肿瘤医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.908843,28.684091],"name":"江西省妇幼保健院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.898637,28.689715],"name":"江西省胸科医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.914884,28.672807],"name":"南昌大学第四附属医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.917185,28.658076],"name":"中国人民解放军九四医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.883831,28.658752],"name":"中国人民武装警察部队江西省总队医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.933666,28.647335],"name":"南昌三三四医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.948784,28.550393],"name":"南昌县人民医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.931157,28.578469],"name":"南昌县中医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.912847,28.633174],"name":"江西省长征医院（监狱局中心医院）","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.937066,28.682872],"name":"江西凤凰第一医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.924481,28.678672],"name":"江西广济医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.949429,28.724633],"name":"江西江氨化学工业有限公司职工医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.948239,28.661701],"name":"南昌航空大学医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.891315,28.685826],"name":"南昌市第二中西医结合医院","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)},
	                          {"geo":[115.861502,28.632226],"name":"南昌市西湖区朝阳","d1":Math.round(Math.random()*10000),"d2":Math.round(Math.random()*10000),"d3":Math.round(Math.random()*10000),"d4":Math.round(Math.random()*10000),"d5":Math.round(Math.random()*10000)}
	                          //江西华源江纺有限公司职工医院
	                      ];	

	selectMap(city,hospitalsLocations,type);	
}


