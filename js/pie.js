var option = {
	title: {
        text: '销售比例',
        textAlign:'left',
        padding:[0,120],
        textStyle: {
            color: '#fff',
            fontWeight: 100
        },
        bottom:'0',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        y:'bottom',
        data:['OTA','在线直销','线下销售'],
        textStyle: {
            fontSize: '13',
            color:'#fff'
        }
    },
    series: [
        {
            name:'销售比例',
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
                {value:15060.5, name:'在线直销',itemStyle:{normal:{color:'#d48265'}}}, 
                {value:1074, name:'线下销售',itemStyle:{normal:{color:'#c23531'}}},
                {value:8230.2, name:'OTA',itemStyle:{normal:{color:'#2f4554'}}}
            ]
        }
    ]
};
module.exports=option;