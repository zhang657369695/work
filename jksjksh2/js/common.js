$(function(){
	//nav
	var hscreen=$(window).height();
	$('.slideNav').css('height',hscreen+'px');
	$('.slideNav>li').on('click','a',function(){
		var txt=$(this).text();
		switch(txt){
			case '健康地图':
				window.location.href="index.html";
				break;
			case '风险预测':
				window.location.href="divine.html";
				break;
			case '健康统计':
				window.location.href="statistics.html";
				break;
			case '用药监测':
				window.location.href="monitor.html";
				break;
			default:
				window.location.href="index.html";
		}
	});
});

function setYbp(num){
	var ects_exponent = echarts.init(document.getElementById('ects_exponent'));
				var option2 = {
				    tooltip : {
				        formatter: "{a} <br/>{b} : {c}%"
				    },
				    series: [
				        {
				            name: '业务指标',
				            type: 'gauge',
				            radius:'100%',
				            detail: {
				                  show:false,
				            },
				            axisTick:{
				            	show:false,
				            },
				            pointer:{
				            	width:4,
				            },
				            itemStyle:{
				            	normal:{
				            		color:'#e37306',
				                }
				            },
				            axisLine:{ 
					           	lineStyle:{
						           	width:9,
						            color:[[0.1, '#1D7216'],[0.2,'#22861A'] ,[0.3,'#29A420'],[0.35,'#2DAC22'],[0.4,'#32C626'],[0.42,'#30CB14'],[0.44,'#31D015'],[0.46, '#32d916'],[0.48,'#71E267'],[0.5,'#86E77E'],[0.52,'#BED8AF'],[0.54,'#CFCFB6'],[0.56,'#D6B5AF'],[0.58,'#F48C84'],[0.6,'#F38278'],[0.65,'#F16256'],[0.7,'#EF5043'],[0.8,'#E72212'],[0.9,'#DD2011'],[1, '#c91717']]
						        }
					        },
					        axisLabel:{
					        	show:false
					        },
						    splitLine:{
						        length:9,
						        width:0.5,
						        lineStyle:{
						            color:'#0b172b',
						            opacity:0.4
						        },
						    },
					        data: [{value: num}]
				        }
				    ]
				};
				ects_exponent.setOption(option2);
}
