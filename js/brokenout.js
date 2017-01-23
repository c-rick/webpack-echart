var option = {
   title: {
        text: '出园游客数据',
		bottom:'0',
		textAlign:'left',
		padding:[0,100],
		textStyle:{
			color:'#fff',
			fontWeight:100
		}
    },
    tooltip: {
        trigger: 'axis'
    },
    grid:{
        show:true,
        top: '8%',
        borderColor: '#028162',
    },
   xAxis: {
    	name:'时间',
        type: 'category',
        boundaryGap: false,
        data: ['8:30', '10:00', '11:30', '13:00', '15:30', '16:00', '15:30'],
        axisLine:{
        	show: true,
        	lineStyle:{
        		color:'#028162'
        	}
        },
        axisLabel:{
            textStyle:{
                	color:'#fff'
            }
        },
        splitLine:{
        	show: true,
            lineStyle:{
        		color:'#028162'
        	}
        },
        nameTextStyle:{
        	color:"#fff"
        },
        nameGap:5
    },
    yAxis: {
    	name:'人数',
        type: 'value',
        max: 500,
        axisLine:{
        	show: true,
        	lineStyle:{
        		color:'#028162'
        	}
        },
        axisLabel:{
            textStyle:{
                	color:'#fff'
            }
        },
        splitLine:{
        	show: true,
            lineStyle:{
        		color:'#028162'
        	}
        },
        nameTextStyle:{
        	color:"#fff"
        },
        nameGap:5
    },
    
    
    series: [{
        type: 'line',
        data: [0, 100,400,200,100,300,500],
        showAllSymbol:true,
        itemStyle:{
        	normal:{
        	    color:'#03e9b5',
        		borderColor:'#03e9b5',
        		borderWidth:4,
        	},
        	emphasis:{
        	    color:'#03e9b5',
        		borderColor:'#03e9b5',
        		borderWidth: 8,
        	}
        }
    }]

};
module.exports=option;