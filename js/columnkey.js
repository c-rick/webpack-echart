var option = {
   title: {
        text: '关键词排名',
         textAlign:'left',
        padding:[0,120],
        textStyle: {
            color: '#fff',
            fontWeight: 100
        },
        bottom:'0',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: null // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '2%',
        top: '10%',
        height: 180, //设置grid高度
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        max:600

    }],
    yAxis: [{
        type: 'category',
        boundaryGap: true,
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: null
        },   
        data: [{value:'空气好',textStyle:{color:'#fff'}},
            {value:'环境好',textStyle:{color:'#fff'}},
            {value: '性价比高',textStyle:{color:'#fff'}},
            {value: '物有所值',textStyle:{color:'#fff'}},
            {value: '交通方便',textStyle:{color:'#fff'}},
            {value: '绿化好',textStyle:{color:'#fff'}},            
            {value: '价格适中',textStyle:{color:'#fff'}}
            ],
        splitLine: {
            show: false
        },
        axisLine:{
        	lineStyle:{
        		color:"#c23531"
        	}
        }
    }],
    series: [{
        type: 'bar',
        barWidth: 16,
        label: {
            normal: {
                show: true,
                position: 'right',
		        textStyle:{
		        	color:'#fff',
		        	fontSize:12,
		        	fontWeight:'bold'
		        }

            }

        },
        itemStyle:{
        	normal:{
        		opacity:0.5,
                color:'#c23531'
        	},
        	emphasis:{
        		opacity:1
        	}
        },
        data: [150,220,260,  364, 400, 520, 580]
    }]
};
module.exports=option;