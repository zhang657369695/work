$(function(){
  var ectTab3 = echarts.init(document.getElementById('ectTab3'));
        var data2 = [['东湖区', 390], ['西湖区', 330], ['青云谱区', 380], ['进贤县',200 ], ['安义县', 400]];
        option13 = {
          color:['#61B085'],
           
         tooltip: {
         
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){  
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:10,
            left: '0%',
            right: '3%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {
          axisLabel:{  
                         interval:0, 
                         rotate:0,
                    }  ,
            type : 'category',
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0], data2[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1], data2[4][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 

label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    ectTab3.setOption(option13);

$("#ectTab3").on("mouseover",function(){
  var myChart21 = echarts.init(document.getElementById('div21'));
        var data2 = [['庐山区', 100], ['浔阳区', 50], ['九江县', 200], ['永修县',90 ], ['星子县', 200]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
         
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
           data: [{
    value: data2[0][0],
    textStyle: {
      
        fontSize: 8,
    }
}, {
    value: data2[1][0],
    textStyle: {
        fontSize: 8,
    }
}, {
    value: data2[2][0],
    textStyle: {
        fontSize: 8,
    }
},{
    value: data2[3][0],
    textStyle: {
        fontSize: 8,
    }

}],

             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
            bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1], data2[4][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart21.setOption(option13);
   var myChart22 = echarts.init(document.getElementById('div22'));
        var data2 = [['龙华乡', 100], ['太窝乡', 50], ['朱坊乡', 200], ['麻双乡',90 ], ['坪市乡', 200]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
           data: [{
    value: data2[0][0],
    textStyle: {
        fontSize: 9,
    }
}, {
    value: data2[1][0],
    textStyle: {
        fontSize: 10,
    }
}, {
    value: data2[2][0],
    textStyle: {
        fontSize: 10,
    }
},{
    value: data2[3][0],
    textStyle: {
        fontSize: 10,
    }
},{
    value: data2[4][0],
    textStyle: {
        fontSize: 10,
    }
}],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1], data2[4][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart22.setOption(option13);
    var myChart23 = echarts.init(document.getElementById('div23'));
              var data2 = [['昌江县', 100], ['珠山县', 50], ['浮梁县', 200],['乐平市',90 ]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart23.setOption(option13);
    var myChart24 = echarts.init(document.getElementById('div24'));
              var data2 = [['安源区', 100], ['上栗县', 50], ['湘东区', 200], ['芦溪区',90 ], ['莲花县', 200]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0], data2[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1], data2[4][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart24.setOption(option13);

      var myChart31 = echarts.init(document.getElementById('div31'));
        var data2 = [['分宜县', 100], ['余水县', 50], ['高新区', 200], ['仙女湖区',90 ]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart31.setOption(option13);
   var myChart32 = echarts.init(document.getElementById('div32'));
              var data2 = [['月湖区', 100], ['梅园新区', 50], ['余江县', 200], ['龙岗新区',90 ]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {
           nameTextStyle:{fontSize:20},
          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart32.setOption(option13);
    var myChart33 = echarts.init(document.getElementById('div33'));
        var data2 = [['会昌县', 100], ['龙南县', 50], ['上犹县', 200], ['全南县',90 ]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart33.setOption(option13);
    var myChart34 = echarts.init(document.getElementById('div34'));
          var data2 = [['樟树县', 100], ['丰城县', 50], ['高安县', 200], ['宜丰县', 200]];
        option13 = {
          textStyle:{
            fontSize:9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart34.setOption(option13);
  
      var myChart41 = echarts.init(document.getElementById('div41'));
var data2 = [['上饶县', 100], ['玉山县', 50], ['广丰区', 200], ['信州区',90 ], ['铅山县', 200]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0], data2[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1], data2[4][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart41.setOption(option13);
   var myChart42 = echarts.init(document.getElementById('div42'));
var data2 = [['东乡县', 100], ['资溪县', 50], ['金溪县', 200], ['南丰县', 200]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart42.setOption(option13);
    var myChart43 = echarts.init(document.getElementById('div43'));
var data2 = [['吉州区', 100], ['青原区', 50], ['吉安县', 200], ['泰安县',90 ]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart43.setOption(option13);
    var myChart44 = echarts.init(document.getElementById('div44'));
var data2 = [['万田乡', 100], ['日东乡', 50], ['叶坪乡', 200], ['武阳镇',90 ], ['冈面乡', 200]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0], data2[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1], data2[4][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart44.setOption(option13);

      var myChart51 = echarts.init(document.getElementById('div51'));
var data2 = [['九江县', 100], ['湖口县', 50], ['彭泽县', 200], ['都昌县',90 ], ['德安县', 200]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0], data2[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1], data2[4][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart51.setOption(option13);
   var myChart52 = echarts.init(document.getElementById('div52'));
var data2 = [['余家乡', 100], ['上清镇', 50], ['彭湾乡', 200], ['白田乡',90 ]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart52.setOption(option13);
    var myChart53 = echarts.init(document.getElementById('div53'));
 var data2 = [['高家镇', 100], ['玉山县', 50], ['塔前镇', 200], ['后港镇', 200]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
    myChart53.setOption(option13);
    var myChart54 = echarts.init(document.getElementById('div54'));
 var data2 = [['花桥镇', 100], ['万村乡', 50], ['海口镇', 200], ['黄柏乡',90 ]];
        option13 = {
          textStyle:{
            fontSize: 9
        },
          color:['#61B085'],
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name).substring(1,3) ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'高血压患者'+res2+'万</span>';  
                      return res;
                  },
              position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        } },    
        grid: {
          y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
           
        },
        xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            
            data : [data2[0][0], data2[1][0], data2[2][0], data2[3][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
        yAxis : {axisTick:{show:false},
               axisLine: {lineStyle:{
                    color:'white'
                },show:false},
                splitLine:{  
            show:false  
         }  ,
                type : 'value'

            },
        series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
             bottom: '0%',
            x:0,
            data:[data2[0][1], data2[1][1], data2[2][1], data2[3][1]],
            itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#D09313', 
'#D09313','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
label: { 
show: false 
} 
} 
} 
        }
        ]
    };
myChart54.setOption(option13);
    echarts.connect([ectTab3,myChart21,myChart22,myChart23,myChart24,myChart31,myChart32,myChart33,myChart34,myChart41,myChart42,myChart43,myChart44,myChart51, myChart52,myChart53,myChart54]);
  })

})