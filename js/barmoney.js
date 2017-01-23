

// 初始 option
var option = {
    title: {
        text: '充值金额与数量',
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
        top: '8%',
        borderWidth: 0,
        height: 190, //设置grid高度
        containLabel: true
    },
    tooltip: {},
    legend: {
        data:['充值金额']
    },
    xAxis: {
    	name:'金额',
        
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
        data: ['100','200','500','1000','2000','5000'],
        nameGap:2
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
