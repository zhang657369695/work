$(function(){
	//主要1
	var ectTab1 = echarts.init(document.getElementById('ectTab1'));
    var symbolSize = 20;
    var data = [[2012, 30], [2013, 56], [2014, 75], [2015,60 ], [2016, 35]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        tooltip: {

            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'全省新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
           y:10,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
            //坐标轴类型'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
    //'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
    //'log' 对数轴。适用于对数数据。
    type: 'category',
           // offest:20,相对于默认位置的偏移
           axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
      interval:10,
        
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 15,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    ectTab1.setOption(option);
	
$("#ectTab1").on("mouseover",function(params){
		//第一行
	var myChart21 = echarts.init(document.getElementById('div21'));
    var symbolSize = 15;
    var data = [[2012, 55], [2013, 33], [2014, 34], [2015,42 ], [2016, 12]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
       
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
           y:28,
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
            
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart21.setOption(option);
    var myChart22 = echarts.init(document.getElementById('div22'));
    var symbolSize = 15;
    var data = [[2012, 24], [2013, 20], [2014, 77], [2015,50 ], [2016, 33]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
        	y:28,
           left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart22.setOption(option);
    //3
    var myChart23 = echarts.init(document.getElementById('div23'));
    var symbolSize = 15;
    var data = [[2012, 56], [2013, 12], [2014, 70], [2015,11 ], [2016, 40]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
        	y:28,
           left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
            
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart23.setOption(option);
    //4
    var myChart24 = echarts.init(document.getElementById('div24'));
    var symbolSize = 15;
    var data = [[2012, 66], [2013, 77], [2014, 30], [2015,55 ], [2016, 30]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
        	y:28,               left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
            
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart24.setOption(option);
    //第二行
    var myChart31 = echarts.init(document.getElementById('div31'));
    var symbolSize = 15;
    var data = [[2012, 44], [2013, 33], [2014, 44], [2015,22 ], [2016, 11]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        /*title: {
            text: '近五年高血压增加人口走势',
            left:'10%',
            textStyle:{fontSize:'15',color:'white'},
            
        },*/
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
        	y:28,               left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
            
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart31.setOption(option);
    var myChart32 = echarts.init(document.getElementById('div32'));
    var symbolSize = 15;
    var data = [[2012, 10], [2013, 20], [2014, 30], [2015,20 ], [2016, 40]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
        	y:28,               left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart32.setOption(option);
    //3
    var myChart33 = echarts.init(document.getElementById('div33'));
    var symbolSize = 15;
    var data = [[2012, 66], [2013, 55], [2014, 66], [2015,44 ], [2016, 55]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
        	y:28,               left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
            
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart33.setOption(option);
    //4
    var myChart34 = echarts.init(document.getElementById('div34'));
    var symbolSize = 15;
    var data = [[2012, 10], [2013, 20], [2014, 77], [2015,20 ], [2016, 40]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
        	y:28,               left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
            
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart34.setOption(option);
    //第四行
    var myChart41 = echarts.init(document.getElementById('div41'));
    var symbolSize = 15;
    var data = [[2012, 10], [2013, 20], [2014, 30], [2015,11], [2016, 40]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        /*title: {
            text: '近五年高血压增加人口走势',
            left:'10%',
            textStyle:{fontSize:'15',color:'white'},
            
        },*/
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
          y:28,
           left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
            
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart41.setOption(option);
    var myChart42 = echarts.init(document.getElementById('div42'));
    var symbolSize = 15;
    var data = [[2012, 10], [2013, 20], [2014, 22], [2015,2 ], [2016, 40]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
          y:28,
           left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart42.setOption(option);
    //3
    var myChart43 = echarts.init(document.getElementById('div43'));
    var symbolSize = 15;
    var data = [[2012, 44], [2013, 20], [2014, 30], [2015,88 ], [2016, 40]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
        	y:28,
           left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
            
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart43.setOption(option);
    //4
    var myChart44 = echarts.init(document.getElementById('div44'));
    var symbolSize = 15;
    var data = [[2012, 10], [2013, 20], [2014, 30], [2015,20 ], [2016, 9]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
        	y:28,
           left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
            
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart44.setOption(option);
    //第五行
    var myChart51 = echarts.init(document.getElementById('div51'));
    var symbolSize = 15;
    var data = [[2012, 44], [2013, 20], [2014, 55], [2015,20 ], [2016, 66]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        /*title: {
            text: '近五年高血压增加人口走势',
            left:'10%',
            textStyle:{fontSize:'15',color:'white'},
            
        },*/
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
        	y:28,
           left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
            
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart51.setOption(option);
    var myChart52 = echarts.init(document.getElementById('div52'));
    var symbolSize = 15;
    var data = [[2012, 10], [2013, 77], [2014, 30], [2015,88 ], [2016, 40]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
        	y:28,
           left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart52.setOption(option);
    //3
    var myChart53 = echarts.init(document.getElementById('div53'));
    var symbolSize = 15;
    var data = [[2012, 10], [2013, 55], [2014, 30], [2015,77 ], [2016, 88]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
        	y:28,
           left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
            
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart53.setOption(option);
    //4
    var myChart54 = echarts.init(document.getElementById('div54'));
    var symbolSize = 15;
    var data = [[2012, 88], [2013, 20], [2014, 30], [2015,20 ], [2016, 40]];
    var len=data.length;
    var points = [];
    option = {
      color:['#108DD2'],
        
        tooltip: {
            formatter: function (params) {
                      var res=JSON.stringify(params.name) ;
                      var res1=JSON.stringify(params.value);
                      var res='<span>'+res+'上饶市新增高血压患者'+res1+'万</span>';  
                      return res;
                  },
           position:  function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
              },
        grid: {
        	y:50,
            left: '0%',
            right: '0%',
             bottom: '0%',
            containLabel: true
        },
       
        xAxis: {
          data : [data[0][0], data[1][0], data[2][0], data[3][0], data[4][0]],
          axisLine: {show: false},
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
},
            
    type: 'category',
           // offest:20,相对于默认位置的偏移
          axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
           
    },
    yAxis: {
        type: 'value',
       axisLine: {onZero: true,lineStyle:{
                    color:'white'
                    
                },show:false},
                
// 控制网格线是否显示
splitLine: {
show: false
},
// 去除y轴上的刻度线
axisTick: {
show: false
}
    },

    series: [
    {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: 10,
        symbol: 'circle',
        data:[data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]]
    }
    ]
    };
    myChart54.setOption(option);
    echarts.connect([ectTab1,myChart21,myChart22,myChart23,myChart24,myChart31,myChart32,myChart33,myChart34,myChart41,myChart42,myChart43,myChart44,myChart51, myChart52,myChart53,myChart54]);
	})
$("#ectTab1").trigger("mouseover");
})