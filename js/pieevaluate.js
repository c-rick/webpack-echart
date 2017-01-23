var option = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        y:'center',
        data:['好评','中评','差评'],
        textStyle: {
            fontSize: '13',
            color:'#fff'
        }
    },
    series: [
        {
            name: '评价',
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
                {value:107, name:'差评',itemStyle:{normal:{color:'#d48265'}}}, 
                {value:307, name:'中评',itemStyle:{normal:{color:'#c23531'}}},
                {value:257, name:'好评',itemStyle:{normal:{color:'#2f4554'}}}
            ]
        }
    ]
};
module.exports=option;