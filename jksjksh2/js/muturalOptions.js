var series_templet={
	name:'',
	type:'map',
	mapType:'',
	label:{
			emphasis:{
				show:true,
		        textStyle: {
		            color: "#fff"
		        }
			}
		},
	itemStyle:{
					normal:{
						areaColor:'#0b172c',
						shadowColor: '#3760a0',
						shadowBlur: 10,
					},
					emphasis:{
						label:{
		                        show:true,
		                        textStyle: {
		                            color: "#fff"
		                        }
		                    },
						areaColor:{
							type: 'radial',
						    x: 0.5,
						    y: 0.5,
						    r: 1.5,
							colorStops:[{
								offset: 1, color: '#aac8f4' // 100% 处的颜色blue 0b172c
							},{
								offset: 0, color: '#0e1f3e' // 0% 处的颜色 #fff #3c68ab
							}],
							globalCood:false
						}
					}
	},
	data:[]
};

var data_templet = [];

var deceaseNames = ['高血压','糖尿病','重度精神病','婴幼儿','孕产妇'];

var province = '江西';

var cities = ['南昌市','九江市', '景德镇市','上饶市','宜春市','鹰潭市', '赣州市','吉安市', '抚州市','新余市','萍乡市'];


//11个市的区县信息
var counties_1=['安义县','南昌县','进贤县','青云谱区','新建区','西湖区','东湖区','青山湖区','湾里区'];// so on ..
var counties_2=['浔阳区','濂溪区','九江县','武宁县','修水县','永修县','德安县','都昌县','湖口县','彭泽县','瑞昌市','共青城市','庐山市'];
var counties_3=['昌江区','珠山区','浮梁县','乐平市'];
var counties_4=['信州区','上饶县','广丰区','玉山县','铅山县','横峰县','弋阳县','余干县','鄱阳县','万年县','婺源县','德兴市'];
var counties_5=['袁州区','靖安县','奉新县','上高县','宜丰县','铜鼓县','万载县','樟树市','丰城市','高安市'];
var counties_6=['月湖区',' 余江县','贵溪市'];
var counties_7=['章贡区','南康县','赣县区','信丰县','大余县','上犹县','崇义县','安远县','龙南县','定南县','全南县','宁都县','于都县','兴国县','会昌县','寻乌县','石城县','瑞金市'];
var counties_8=['吉州区','青原区','吉水县','峡江县','新干县','永丰县','泰和县','遂川县','万安县','安福县','永新县','井冈山市'];
var counties_9=['临川区','南城县','黎川县','南丰县','崇仁县','乐安县','宜黄县','金溪县','资溪县','东乡县','广昌县'];
var counties_10=['渝水区','分宜县'];
var counties_11=['安源区','湘东区','莲花县','上栗县','芦溪县'];
var counties = [counties_1,counties_2,counties_3,counties_4,counties_5,counties_6,counties_7,counties_8,counties_9,counties_10,counties_11];

function setSeries(name,mapType,data){
	var series_templet={
		name:'',
		type:'map',
		mapType:'',
		label:{
			emphasis:{
				show:true,
		        textStyle: {
		            color: "#fff"
		        }
			}
		},
		itemStyle:{
						normal:{
							areaColor:'#0b172c',
							shadowColor: '#3760a0',
							shadowBlur: 10,
							borderColor:'#fff'
						},
						emphasis:{
							areaColor:{
								type: 'radial',
							    x: 0.5,
							    y: 0.5,
							    r: 1,
								colorStops:[{
									offset: 1, color: '#aac8f4' // 100% 处的颜色 blue
								},{
									offset: 0, color: '#0e1f3e' // 0% 处的颜色white
								}],
								globalCood:false
							}
						}
		},
		data:[]
	};
	series_templet.name=name;//疾病名称
	series_templet.mapType=mapType;
	series_templet.data=data;
	return series_templet;
}

function setProvinceData(data_templet,cities){
	var data_templet=[];
	for (var i = 0; i < cities.length; i++) {
		data_templet.push({name:cities[i],value:Math.round(Math.random() * 1000)});
	}
	return data_templet;
}

function setCityData(data_templet,counties){
	var data_templet=[];
	for (var i = 0; i < counties.length; i++) {
		data_templet.push({name:counties[i],value:Math.round(Math.random() * 1000)});
	}
	return data_templet;
}

//散点数据可以汇总到这里
var geoCoordMap = {
	"南昌大学第一附属医院":[115.917131,28.692808],
	"南昌大学第二附属医院":[115.908386,28.688574],
	"江西省人民医院":[115.896963,28.699293],
	"江西中医药大学附属医院":[115.992593,28.664981],
	"江西省肿瘤医院":[115.960207,28.681747],
	"江西省妇幼保健院":[115.908843,28.684091],
	"江西省胸科医院":[115.898637,28.689715],
	"南昌大学第四附属医院":[115.914884,28.672807],
	"中国人民解放军九四医院":[115.917185,28.658076],
	"中国人民武装警察部队江西省总队医院":[115.883831,28.658752],
	"南昌三三四医院":[115.933666,28.647335],
	"南昌县人民医院":[115.948784,28.550393],
	"南昌县中医院":[115.931157,28.578469],
	"江西省长征医院（监狱局中心医院）":[115.912847,28.633174],
	"江西凤凰第一医院":[115.937066,28.682872],
	"江西广济医院":[115.924481,28.678672],
	"江西江氨化学工业有限公司职工医院":[115.949429,28.724633],
	"南昌航空大学医院":[115.948239,28.661701],
	"南昌市第二中西医结合医院":[115.891315,28.685826]
};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

var series_sandian={
	name:'sd',
	type:'scatter',
	coordinateSystem: 'geo',
	data: convertData([
                {name: "南昌大学第一附属医院", value: Math.round(Math.random()*10000)},
                {name: "南昌大学第二附属医院", value: Math.round(Math.random()*10000)},
                {name: "江西省人民医院", value: Math.round(Math.random()*10000)},
                {name: "江西中医药大学附属医院", value: Math.round(Math.random()*10000)},
                {name: "江西省肿瘤医院", value: Math.round(Math.random()*10000)},
                {name: "江西省妇幼保健院", value: Math.round(Math.random()*10000)},
                {name: "江西省胸科医院", value: Math.round(Math.random()*10000)},
                {name: "南昌大学第四附属医院", value: Math.round(Math.random()*10000)},
                {name: "中国人民解放军九四医院", value: Math.round(Math.random()*10000)},
                {name: "中国人民武装警察部队江西省总队医院", value: Math.round(Math.random()*10000)},
				{name: "南昌三三四医院", value: Math.round(Math.random()*10000)},
				{name: "南昌县人民医院", value: Math.round(Math.random()*10000)},
				{name: "南昌县中医院", value: Math.round(Math.random()*10000)},
				{name: "江西省长征医院（监狱局中心医院）", value: Math.round(Math.random()*10000)},
				{name: "江西凤凰第一医院", value: Math.round(Math.random()*10000)},
				{name: "江西广济医院", value: Math.round(Math.random()*10000)},
				{name: "江西江氨化学工业有限公司职工医院", value: Math.round(Math.random()*10000)},
				{name: "南昌航空大学医院", value: Math.round(Math.random()*10000)},
				{name: "南昌市第二中西医结合医院", value: Math.round(Math.random()*10000)}
            ]),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
}

function setSeriesSandian(map){
	var series_sandian_templet={
		type:'scatter',
		coordinateSystem: 'geo',
		tooltip:{
			formatter:function(params){
				console.log(params);
				return params.name+":"+params.value[2];
			}
		},
		data: convertData(//传入map对应的数组
				[
	                {name: "南昌大学第一附属医院", value: Math.round(Math.random()*10000)},
	                {name: "南昌大学第二附属医院", value: Math.round(Math.random()*10000)},
	                {name: "江西省人民医院", value: Math.round(Math.random()*10000)},
	                {name: "江西中医药大学附属医院", value: Math.round(Math.random()*10000)},
	                {name: "江西省肿瘤医院", value: Math.round(Math.random()*10000)},
	                {name: "江西省妇幼保健院", value: Math.round(Math.random()*10000)},
	                {name: "江西省胸科医院", value: Math.round(Math.random()*10000)},
	                {name: "南昌大学第四附属医院", value: Math.round(Math.random()*10000)},
	                {name: "中国人民解放军九四医院", value: Math.round(Math.random()*10000)},
	                {name: "中国人民武装警察部队江西省总队医院", value: Math.round(Math.random()*10000)},
					{name: "南昌三三四医院", value: Math.round(Math.random()*10000)},
					{name: "南昌县人民医院", value: Math.round(Math.random()*10000)},
					{name: "南昌县中医院", value: Math.round(Math.random()*10000)},
					{name: "江西省长征医院（监狱局中心医院）", value: Math.round(Math.random()*10000)},
					{name: "江西凤凰第一医院", value: Math.round(Math.random()*10000)},
					{name: "江西广济医院", value: Math.round(Math.random()*10000)},
					{name: "江西江氨化学工业有限公司职工医院", value: Math.round(Math.random()*10000)},
					{name: "南昌航空大学医院", value: Math.round(Math.random()*10000)},
					{name: "南昌市第二中西医结合医院", value: Math.round(Math.random()*10000)},
					{name: "南昌市西湖区朝阳", value: Math.round(Math.random()*10000)}
					
	            ]),
	            symbolSize: 6,
	            label: {
	                normal: {
	                    show: false
	                },
	                emphasis: {
	                    show: false
	                }
	            },
	            itemStyle: {
	                emphasis: {
	                    borderColor: '#fff',
	                    borderWidth: 1
	                }
	            }
	};
	return series_sandian_templet;
}


//返回江西省的series 包括5个病，每个病11个市
var series_jiangxi=[];
for (var i = 0; i < deceaseNames.length; i++) {
	series_jiangxi.push(
		setSeries(deceaseNames[i],province,setProvinceData(data_templet,cities))
	)
}

series_jiangxi.push(setSeriesSandian(province));

/*设定江西省地图的数据*/
var option_jiangxi = {
			series: series_jiangxi,
			//legend:['高血压','糖尿病','重度精神病','婴幼儿','孕产妇','11'],
			tooltip:{
				formatter: function(params) {
	                var res = '2017年3月<br/>'+params.name+'共有卫生站300个<br/>';
	                var myseries = option_jiangxi.series;
	                for (var i = 0; i < myseries.length; i++) {
	                    for(var j=0;j<myseries[i].data.length;j++){
	                        if(myseries[i].data[j].name==params.name){
	                            res+=myseries[i].name +' : '+myseries[i].data[j].value+'</br>';
	                        }
	                    }
	                }
	                return res;
	           },
	           backgroundColor:'#fff',
							           textStyle:{
							           	color:'#000'
							           },
				padding:[12,18,12,18]
			},
			geo:{
		        map: '江西',
		        label: {
		            emphasis: {
		                show: false
		            }
		        },
		        itemStyle: {
		            normal: {
		            	show:true,
		                areaColor: '#323c48',
		                borderColor: '#111'
		            },
		            emphasis: {
		            	show:false,
		                areaColor: '#2a333d'
		            }
		        }
		    }
		};
