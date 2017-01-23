var option = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        y:'center',
        data:['开心','愤怒','伤心','悠闲'],
        textStyle: {
            fontSize: '13',
            color:'#fff'
        }
    },
    series: [
        {
            name: '情绪',
            type:'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 100
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:10, name:'开心',itemStyle:{normal:{color:'#d48265'}}}, 
                {value:30, name:'愤怒',itemStyle:{normal:{color:'#c23531'}}},
                {value:25, name:'伤心',itemStyle:{normal:{color:'#2f4554'}}},
                {value:35, name:'悠闲',itemStyle:{normal:{color:'#61a0a8'}}}
            ]
        }
    ]
};
module.exports=option;