var startAngle = 180, //灰色背景的起始角度
    endAngle = 0,
    alpha = startAngle - endAngle,
    x = [0, 10, 30, 40],
    sum = x[0] + x[1] + x[2] + x[3];

function getFrontStartAngle(x, sum) {
    return x / sum * alpha / 2 + (startAngle + endAngle) / 2;
}

function getPercent(x, v) {
    return (x / (x + sum) * 100).toFixed(2) + '%';
}

function back(left,top) {
    return {
        type: 'pie',
        startAngle: startAngle,
        center: [left, top],
        radius: ['0', '31%'],
        label: {
            normal: {
                show: false,
            }
        },
        data: [{
            value: alpha,
            itemStyle: {
                normal: {
                    color: '#888'
                }
            }
        }, {
            value: 360 - alpha,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }]
    };
}

function front(x, sum, name, left, color,top) {
    return {
        type: 'pie',
        name: name,
        startAngle: getFrontStartAngle(x, sum, alpha),
        center: [left, top],
        radius: ['0', '31%'],
        minAngle: 1,
        data: [{
            value: x,
            itemStyle: {
                normal: {
                    color: color,
                    shadowBlur: 16,
                    shadowColor: color
                }
            },
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}',
                    textStyle: {
                        color: '#000',
                        fontSize: 16
                    }
                }
            }
        }, {
            value: sum * (360 / alpha) - x,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            },
            label: {
                normal: {
                    position: 'inside',
                    formatter: name,
                    textStyle: {
                        color: color,
                        fontSize: 16
                    }
                }
            }
        }]
    };
}

var option = {
    title: {
        text: '游客来源前8',
        textStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold'
        }
    },
    //backgroundColor: '#333645',
    color: ['#FF6CA3', '#FDAD88', '#FFF2A1', '#2CBBC0', '#eee','#999', '#fb3232', '#335542'],
    series: [
        back('12.5%','40%'),
        back('37.5%','40%'),
        back('62.5%','40%'),
        back('87.5%','40%'),
        back('12.5%','80%'),
        back('37.5%','80%'),
        back('62.5%','80%'),
        back('87.5%','80%'),
        front(x[3], sum, '广州', '12.5%', '#fb358a','40%'),
        front(x[3], sum, '湖南', '37.5%', '#e59e7f','40%'),
        front(x[2], sum, '江西', '62.5%', '#e3d893','40%'),
        front(x[2], sum, '北京', '87.5%', '#33e8e9','40%'),
         front(x[1], sum, '天津', '12.5%', '#eee','80%'),
        front(x[1], sum, '深圳', '37.5%', '#999','80%'),
        front(x[0], sum, '湖北', '62.5%', '#fb3232','80%'),
        front(x[0], sum, '珠海', '87.5%', '#335542','80%')
    ]
};
module.exports=option;