

// 初始 option
var option = {
    title: {
        text: '各地点投诉数量',
       bottom:'0',
		textAlign:'left',
		padding:[0,100],
		textStyle:{
			color:'#fff',
			fontWeight:100
		}
    },
    grid: {
    	show:false,
    	left:'0%',
        top: '6%',
        borderWidth: 0,
        height: 120, //设置grid高度
        containLabel: true
    },
    tooltip: {},
    legend: {
        data:['数量']
    },
    xAxis: {
    	name:'地点',
        
        axisLine:{
        	lineStyle:{
        		color:'#fff'
        	}
        },
         axisLabel:{
            textStyle:{
                	color:'#fff'
            }
        },
        data: ['餐厅','动物园','售票处','水上乐园','酒店','特产酒店'],
        nameGap:5
    },
    yAxis: {
    	
    	axisLine:{
        	show: true,
        	lineStyle:{
        		color:'#fff'
        	}
        },
        splitLine: {
            show: false
        },
         axisLabel:{
            textStyle:{
                	color:'#fff'
            }
        }
    },
    series: [{
        type: 'bar',
        data: [100,150,300,380,200,100]
    }]
};
module.exports=option;
