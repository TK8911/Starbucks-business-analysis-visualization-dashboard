// 柱状图模块1
(function() {
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2. 指定配置项和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
	toolbox: { feature: {  
	        magicType: {  
	         type: ['line', 'bar'], // 支持柱状图和折线图的切换  
	         show: true }  
	                }  
	            },  
    // 修改图表的大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
        ],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: "12"
        },
        // 不显示x坐标轴的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
		min:25000,
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: 12
        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        data: [31231,30449,30625,31162,31207,29614,30182],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };
  // 3. 把配置项给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 条状图2
(function() {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["6~8点","9~11点","12~14点","15~17点","18~20点"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [168,220,122,123,66],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {name: "条",
        type: "bar",
        data: [120.3,157.5,87.2,88.0,47.0],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: function(params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%"
        }
      },
      {name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [180, 180, 180, 180, 180],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 转化图模块制作  √
(function() {
var myChart = echarts.init(document.querySelector(".line .chart"));
  var option = {
	color: ["#008acd","#5ab1ef","#2ec7f0","rgba(46,199,201,1)","#ADD8E6"],
	     //配置标题组件
	     tooltip: { trigger: 'item', formatter: "{a} <br/>{b} : {c}%" },  //配置提示框组件
	     legend: { bottom: "0%",
      // 修改小图标的大小
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
	data: ['总用户','可挖掘客户','受吸引客户','较稳定客户','高价值客户'],
		}, 
	     calculable: true,
	    series: [
	        {name: 'Expected',
	          type: 'funnel',
	          left: '10%',
	          width: '80%',
	          label: {
	            formatter: '{b}'
	          },
	          labelLine: {
	            show: false
	          },
	          itemStyle: {
	            opacity: 0.7
	          },
	          emphasis: {
	            label: {
	              position: 'inside',
	              formatter: '{b}Expected: {c}%'
	            }
	          },
	             data: [  //设置在漏斗图中展示的数据 
	                 { value: 100, name: '总用户' }, 
							{value: 87, name:'可挖掘客户' },
							{value: 32, name:'受吸引客户' },
							{value: 26, name:'较稳定客户' },
							{value: 11, name:'高价值客户' }]
	         }
	     ]
	 };
	myChart.setOption(option); 
	  window.addEventListener("resize", function() {
	    myChart.resize();
	  });
})();
	
// 堆叠图 模块制作  √
(function() {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
  		 textStyle: {color: "#e0ffff"},
		 itemWidth: 10,
		 itemHeight:5,
        data: ['Coffee','Drinking Chocolate','Bakery','Coffee Beans','Branded','Flavours']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Jan','Feb','Mar','Apr','May','Jun'],
  		 axisLabel:{color:"#1089E7"}
        }
      ],
      yAxis: [
        {
          type: 'value',
  		 axisLabel:{color:"#1089E7"}
        },
      ],
      series: [
        {name: 'Coffee',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
  		 itemStyle: {normal: {color: "#008acd"} },
  		label: {show: false},
          data: [31256.85 ,29268.95 ,38303.60 ,45971.20 ,60362.85 ,64789.00 ]
        },
        {name: 'Bakery',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
  		 itemStyle: {normal: {color: "#5ab1ef"} },
  		 label: {show: false},
          data: [9535.75 ,9038.82 ,11902.58 ,14021.70 ,18565.52 ,19251.27 ]
        },
        {name: 'Drinking Chocolate',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
  		 itemStyle: {normal: {color: "#2ec7f0"} },
  		 label: {show: false},
          data: [8337.75 ,8132.25 ,10253.50 ,12266.75 ,16319.75 ,17106.00 ,12069.33 ]
        },
        {name: 'Coffee Beans',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
  		 itemStyle: {normal: {color: "rgba(46,199,201,1)"} },
  		 label: {show: false},
          data: [5245.25 ,4077.50 ,5256.20 ,6824.70 ,8768.95 ,9912.65 ]
        },
   	 {name: 'Branded',
   	   type: 'line',
   	   stack: 'Total',
   	   label: {
   	     show: true,
   	     position: 'top'
   	   },
   	   areaStyle: {},
   	   emphasis: {
   	     focus: 'series'
   	   },
  	   itemStyle: {normal: {color: "#ADD8E6"} },
  	   label: {show: false},
   	   data: [1890,1235,1801,2379,2889,3413]
   	 },
        {name: 'Flavours',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
  		 itemStyle: {normal: {color: "#e0ffff"} },
  		 label: {show: false},
          data: [974.40 ,930.40 ,1172.00 ,1418.40 ,1905.60 ,2008.00 ]
        }
      ]
    };
   	// 3. 把配置给实例对象
   myChart.setOption(option);
   // 4. 让图表跟随屏幕自动的去适应
   window.addEventListener("resize", function() {
     myChart.resize();
   });
})();

// 饼形图1
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 2.指定配置
  var option = {
    color: ["#065aab", "#066eab","#0682da","#0696ab", "#06a0aa","#32c5e9"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      bottom: "0%",
      // 修改小图标的大小
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "用户收入",
        type: "pie",
        // 这个radius可以修改饼形图的大小
        // radius 第一个值是内圆的半径 第二个值是外圆的半径
        radius: ["40%", "60%"],
        center: ["50%", "45%"],
        avoidLabelOverlap: false,
        // 图形上的文字
        label: {
          show: false,
          position: "center"
        },
        // 链接文字和图形的线是否显示
        labelLine: {
          show: false
        },
        data: [
          { value: 20.1, name: "30-45k" },
          { value: 24.5, name: "45-60k" },
          { value: 25.5, name: "60-75k" },
          { value: 14.6, name: "75-90k" },
          { value: 9.8, name: "90-105k" },
          { value: 5, name: ">105k" },
        ]
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//词云图模块
(function() {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
  tooltip: { show: true },  //配置提示框组件
  series: [{  //数据系列及其配置
  	name: '咖啡',  //设置名称
  	type: 'wordCloud',  //设置图表类型为字云图
  	sizeRange: [20, 100],  //设置数据大小范围
  	size: ['100%', '80%'],  //设置显示的字云图的大小
  	textRotation: [0, 45, 90, 135, -45, -90],  //设置文字倾斜角度
  	textPadding: 3,  //设置文字之间的间距
  	autoSize: { enable: true, minSize: 5 },  //设置文字的自动大小
  	textStyle: {
  		normal: {color: function () {return 'rgb(' + [
  					Math.round(Math.random() *50+50),
  					Math.round(Math.random() *50+80),
  					Math.round(Math.random() *150+100)
  				].join(',') + ')';
  			}
  		},
  		emphasis: {
  			shadowBlur: 26,
  			color: '#333',
  			shadowColor: "#ADD8E6",
  			fontSize: 20
  		}
  	},
  	data: [  //设置具体的数据
  		{name:'Ethiopia Rg',value:2866},
  		{name:'Spicy Eye Opener Chai Lg',value:2951},
  		{name:'Dark chocolate Lg',value:3029},
  		{name:'Our Old Time Diner Blend Sm',value:2919},
  		{name:'Oatmeal Scone',value:1812},
  		{name:'Columbian Medium Roast Sm',value:2728},
  		{name:'Latte Rg',value:2896},
  		{name:'Dark chocolate Rg',value:2636},
  		{name:'Spicy Eye Opener Chai Rg',value:2705},
  		{name:'Ethiopia Lg',value:2741},
  		{name:'Earl Grey Lg',value:2702},
  		{name:'Ouro Brasileiro shot',value:2222},
  		{name:'Serenity Green Tea Lg',value:2750},
  		{name:'Jumbo Savory Scone',value:2008},
  		{name:'Lemon Grass Rg',value:2792},
  		{name:'Sustainably Grown Organic Lg',value:2961},
  		{name:'Hazelnut Biscotti',value:2009},
  		{name:'Cappuccino',value:2793},
  		{name:'Lemon Grass Lg',value:2647},
  		{name:'Chocolate Chip Biscotti',value:1891},
  		{name:'Peppermint Lg',value:2857},
  		{name:'Chocolate Croissant',value:3076},
  		{name:'Latte',value:2990},
  		{name:'Brazilian Rg',value:2904},
  		{name:'Brazilian Lg',value:2771},
  		{name:'Columbian Medium Roast Rg',value:3013},
  		{name:'Morning Sunrise Chai Rg',value:3026},
  		{name:'Morning Sunrise Chai Lg',value:2830},
  		{name:'Our Old Time Diner Blend Lg',value:2664},
  		{name:'Sustainably Grown Organic Rg',value:2842},
  		{name:'Scottish Cream Scone ',value:1952},
  		{name:'Peppermint Rg',value:2949},
  		{name:'English Breakfast Rg',value:2743},
  		{name:'Our Old Time Diner Blend Rg',value:2894},
  		{name:'Serenity Green Tea Rg',value:2921},
  		{name:'Brazilian Sm',value:2814},
  		{name:'Jamaican Coffee River Sm',value:2630},
  		{name:'Jamaican Coffee River Lg',value:2911},
  		{name:'Ginger Biscotti',value:1811},
  		{name:'Traditional Blend Chai Lg',value:2716},
  		{name:'Cappuccino Lg',value:2772},
  		{name:'Espresso shot',value:2730},
  		{name:'Earl Grey Rg',value:3053},
  		{name:'Ginger Scone',value:2324},
  		{name:'Jamaican Coffee River Rg',value:2594},
  		{name:'Cranberry Scone',value:2077},
  		{name:'Almond Croissant',value:1903},
  		{name:'Croissant',value:1933},
  		{name:'Ethiopia Sm',value:2833},
  		{name:'English Breakfast Lg',value:2852},
  		{name:'Traditional Blend Chai Rg',value:2955},
  		{name:'Columbian Medium Roast Lg',value:2731},
  		{name:'Hazelnut syrup',value:1521},
  		{name:'Peppermint',value:153},
  		{name:'Carmel syrup',value:1725},
  		{name:'Ethiopia',value:218},
  		{name:'Organic Decaf Blend',value:206},
  		{name:'Sugar Free Vanilla syrup',value:1811},
  		{name:'Chocolate syrup',value:1733},
  		{name:'Dark chocolate',value:118},
  		{name:'Jamacian Coffee River',value:146},
  		{name:'Brazilian - Organic',value:209},
  		{name:'Morning Sunrise Chai',value:168},
  		{name:'Guatemalan Sustainably Grown',value:134},
  		{name:'Primo Espresso Roast',value:150},
  		{name:'Serenity Green Tea',value:159},
  		{name:'Traditional Blend Chai',value:153},
  		{name:'Espresso Roast',value:169},
  		{name:'Sustainably Grown Organic',value:221},
  		{name:'I Need My Bean! Latte cup',value:304},
  		{name:'Spicy Eye Opener Chai',value:122},
  		{name:'Chili Mayan',value:148},
  		{name:'English Breakfast',value:161},
  		{name:'Lemon Grass',value:152},
  		{name:'Columbian Medium Roast',value:148},
  		{name:'Our Old Time Diner Blend',value:183},
  		{name:'I Need My Bean! T-shirt',value:221},
  		{name:'Earl Grey',value:142},
  		{name:'Civet Cat',value:190},
  		{name:'I Need My Bean! Diner mug',value:222},
  	]  
  }]  
  };
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();