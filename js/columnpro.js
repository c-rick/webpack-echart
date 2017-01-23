var option = {
   title: {
        text: '景区产品排名',
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
        height: 200, //设置grid高度
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
        data: [{value:'大红袍',textStyle:{color:'#fff'}},
            {value:'白鸡冠',textStyle:{color:'#fff'}},
            {value: '普洱',textStyle:{color:'#fff'}},
            {value: '绿茶',textStyle:{color:'#fff'}},
            {value: '水仙',textStyle:{color:'#fff'}},
            {value: '乌龙',textStyle:{color:'#fff'}},            
            {value: '肉桂',textStyle:{color:'#fff'}},
            {value: '红茶',textStyle:{color:'#fff'}},
            {value: '菊花茶',textStyle:{color:'#fff'}},
            {value: '抹茶',textStyle:{color:'#fff'}},
            {value: '山泉',textStyle:{color:'#fff'}}
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
        barWidth: 13,
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
        data: [90,120,150,220,260, 270, 340, 364, 400, 520, 580]
    }]
};
module.exports=option;