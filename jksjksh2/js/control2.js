$(function(){
	var ectTab2 = echarts.init(document.getElementById('ectTab2'));
           var data1 = [[30, 80], [40, 280], [50, 200], [60,334 ], [70, 390]];
           option12 = {
        color: ['#3398DB'],
        tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'-'+res1+'岁全省新增高血压患者'+res2+'人</span>';  
                      return res;
                  },
                  position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
              	y:10,
                left: '0%',
                right: '3%',
                bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {

          axisLabel:{  
                         interval:0,
                         rotate:0, 
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
                show:false
            }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
            	axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 
var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         ectTab2.setOption(option12);
         $("#ectTab2").on("mouseover",function(){
         	var myChart21 = echarts.init(document.getElementById('div21'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
       
        tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                       var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';  
                      return res;
                  },
                  position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
              	y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0,
                         rotate:0, 
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart21.setOption(option12);
         var myChart22 = echarts.init(document.getElementById('div22'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
       
        tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                       var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';  
                      return res;
                  },
                  position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0,
                         rotate:0,  
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart22.setOption(option12);
         var myChart23 = echarts.init(document.getElementById('div23'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
       
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';  
                      return res;
                  },
                  position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0,
                         rotate:0, 
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart23.setOption(option12);
         var myChart24 = echarts.init(document.getElementById('div24'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
       
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';  
                      return res;
                  },
                  position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0, 
                         rotate:0,
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart24.setOption(option12);
        
      var myChart31 = echarts.init(document.getElementById('div31'));
    var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
     option12 = {
        color: ['#3398DB'],
       
        tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';  
                      return res;
                  },
                  position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0,  
                         rotate:0,
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart31.setOption(option12);
         var myChart32 = echarts.init(document.getElementById('div32'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
       
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                       var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';   
                      return res;
                  },
                  position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0,  
                         rotate:0, 
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart32.setOption(option12);
         var myChart33 = echarts.init(document.getElementById('div33'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
        tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                       var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';  
                      return res;
                  },
                  position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart33.setOption(option12);
         var myChart34 = echarts.init(document.getElementById('div34'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
       
       tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';  
                      return res;
                  },
                  position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0,  
                         rotate:0,
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart34.setOption(option12);
        
                  	var myChart41 = echarts.init(document.getElementById('div41'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
       
         tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                       var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';  
                      return res;
                  },
                  position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0,
                         rotate:0,  
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart41.setOption(option12);
         var myChart42 = echarts.init(document.getElementById('div42'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
        tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                       var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';  
                      return res;
                  },
                  position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0,
                         rotate:0, 
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart42.setOption(option12);
         var myChart43 = echarts.init(document.getElementById('div43'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
       
        tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                       var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';  
                      return res;
                  },
                  position:  function(p){  
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0,
                         rotate:0,
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart43.setOption(option12);
         var myChart44 = echarts.init(document.getElementById('div44'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
       
 tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                       var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';  
                      return res;
                  },
                  position:  function(p){  
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0, 
                         rotate:0,
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart44.setOption(option12);
        
                  	var myChart51 = echarts.init(document.getElementById('div51'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
       
 tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                       var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';  
                      return res;
                  },
                  position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0,  
                         rotate:0, 
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart51.setOption(option12);
         var myChart52 = echarts.init(document.getElementById('div52'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
       
  tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                       var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';  
                      return res;
                  },
                  position:  function(p){  
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0, 
                         rotate:0,
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart52.setOption(option12);
         var myChart53 = echarts.init(document.getElementById('div53'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
       
 tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';   
                      return res;
                  },
                  position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0, 
                         rotate:0,  
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart53.setOption(option12);
         var myChart54 = echarts.init(document.getElementById('div54'));
           var data1 = [[30, 40], [40, 140], [50, 100], [60,170 ], [70, 200]];
           option12 = {
        color: ['#3398DB'],
       
 tooltip: {
            formatter: function (params) {
                      var res0=JSON.stringify(params.name) ;
                      var len=JSON.stringify(params.name).length;
                      //var res0=JSON.stringify(params.value)[1];
                      //alert(len);
                      var res1=parseInt(res0)+10 ;
                      var res2=JSON.stringify(params.value);
                      var res='<span>'+res0+'-'+res1+'岁上饶市新增高血压患者'+res2+'人</span>';    
                      return res;
                  },
                  position:  function(p){   
            return [p[0] + 10, p[1] - 10];
        }
              },
              grid: {
                y:28,
                left: '0%',
                right: '10%',
                 bottom: '0%',
                containLabel: true
            },
             xAxis : [
        {
          axisLabel:{  
                         interval:0,
                         rotate:0, 
                    }  ,
            type : 'category',
            data : [data1[0][0], data1[1][0], data1[2][0], data1[3][0], data1[4][0]],
             axisLine: {lineStyle:{
                    color:'white'
                },show:false},
            axisTick: {
                alignWithLabel: true,
     show:false       }
        }
        ],
            yAxis:{axisTick: {
                show:false
            },
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
                data:[data1[0][1], data1[1][1], data1[2][1], data1[3][1], data1[4][1]],
                itemStyle: { 
normal: { 
color: function(params) { 

var colorList = [ 
'#A4D2F1','#36A92E','#108DD2','#245F80','#329D78', 
'#0AAF9F','#E89589' 
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
         myChart54.setOption(option12);
    echarts.connect([ectTab2,myChart21,myChart22,myChart23,myChart24,myChart31,myChart32,myChart33,myChart34,myChart41,myChart42,myChart43,myChart44,myChart51, myChart52,myChart53,myChart54]);
  })

})