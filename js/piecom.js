var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} :({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data: ['已处理', '未处理'],
        textStyle:{
        	color:'#fff'
        },
        formatter: function(name) {
            var oa = option.series[0].data;
            var num = oa[0].value + oa[1].value;
            for (var i = 0; i < option.series[0].data.length; i++) {
                if (name == oa[i].name) {
                    return name  + (oa[i].value / num * 100).toFixed(2) + '%';
                }
            }
        }
    },
    series: [{
        type: 'pie', 
        radius:'70%',
        data: [{
            value: 310,
            name: '未处理'
        }, {
            value: 434,
            name: '已处理'
        }],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
         itemStyle: {
            
            labelLine: {
                show: true
            }
        }
    }]
};
module.exports=option;