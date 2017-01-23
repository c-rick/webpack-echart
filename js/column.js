var option = {
   title: {
        text: '游客逗留时间',
        textStyle:{
            color:'#fff',
            fontSize:18,
            fontWeight:'100'
        },
        textAlign: 'left',
        padding:[10,20]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: null // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '<div style="text-align: center;">当天逗留时间</div>{b} : {c}'
    },
    grid: {
        left: '2%',
        top: '10%',
        height: 470, //设置grid高度
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
        }

    }],
    yAxis: [{
        type: 'category',
        boundaryGap: true,
        axisTick: {
            show: true
        },
        axisLabel: {
            interval: null
        },   
        data: [{value:'广州',textStyle:{color:'#fff'}},
            {value:'北京',textStyle:{color:'#fff'}},
            {value: '深圳',textStyle:{color:'#fff'}},
            {value: '上海',textStyle:{color:'#fff'}},
            {value: '重庆',textStyle:{color:'#fff'}},
            {value: '河北',textStyle:{color:'#fff'}},            
            {value: '珠海',textStyle:{color:'#fff'}},
            {value: '河源',textStyle:{color:'#fff'}},
            {value: '梅州',textStyle:{color:'#fff'}},
            {value: '唐山',textStyle:{color:'#fff'}},
            {value: '太源',textStyle:{color:'#fff'}},
            {value: '西藏',textStyle:{color:'#fff'}},
            {value: '沈阳',textStyle:{color:'#fff'}},
            {value: '朝阳',textStyle:{color:'#fff'}}
            ],
        splitLine: {
            show: false
        },
        axisLine:{
        	lineStyle:{
        		color:"#03e9b5"
        	}
        }
    }],
    series: [{
        name: '时间',
        type: 'bar',
        barWidth: 20,
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
                color:'#03e9b5'
        	},
        	emphasis:{
        		opacity:1
        	}
        },
        data: [90,120,150,170,190,200,220,260, 270, 340, 364, 400, 520, 610]
    }]
};
module.exports=option;