
require('./css/style.css');
var allData=require('./js/map');
var otherData=require('./js/othermap');
var echarts=require('echarts');
var china=require('./js/china');
var column=require('./js/column');
// var sector=require('./js/sector');
var pie=require('./js/pie');
var weather=require('./js/weather');
var parkOption=require('./js/park');
var brokeninOption=require('./js/brokenin');
var brokenonOption=require('./js/brokenon');
var brokenoutOption=require('./js/brokenout');
var columnproOption=require('./js/columnpro');
var barmoneyOption=require('./js/barmoney');
var barcomOption=require('./js/barcomplaint');
var piecomOption=require('./js/piecom');
var pieemoOption=require('./js/pieemotion');
var pieevalOption=require('./js/pieevaluate');
var columnkeyOption=require('./js/columnkey');

weather.getWeather('广州',success);
function success(data){
	
}
if(localStorage.divarr){
	var olddivarr=JSON.parse(localStorage.divarr);
	
	$(".dataForm .EC_border").each(function(i){
		console.log(olddivarr[i])
		$(this).attr('id',olddivarr[i])
	})
}
var mymap_option = {
    
    legend: {
        show: false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: true,
                textStyle:{
                	color:'#fff'
                }
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        },
        selectedMode:'single',
        zoom:1.2
    },
    series: [{
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            emphasis: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: 2,
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: '#46bee9'
            }
        },
        data: allData.citys
    }, {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            constantSpeed: 30,
            symbol: 'pin',
            symbolSize: 6,
            trailLength: 0,
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                width: 1,
                opacity: 0.2,
                curveness: 0.1
            }
        },
        data: allData.moveLines
    }]
};

//自定义组件

var htmlmap=' <div class="mapbody"></div><div class="mapHeader"><span>实时客流</span><div class="mapSearch">'+
            '<input type="text" placeholder="搜城市,景区"><a href="" class="iconfont icon-search"></a></div></div>';
var htmlmap2=' <div class="mapbody"></div><div class="mapHeader"><span class="selecttext">实时航班</span><i  class="selectmap iconfont icon-xialakuang"></i><div class="mapSearch">'+
            '<input type="text" placeholder="搜城市,景区"><a href="" class="iconfont icon-search"></a></div></div>';
var htmlwp='<div id="weather"></div><div id="park"></div>'
document.querySelector('#map').innerHTML=htmlmap;
document.querySelector('#othermap').innerHTML=htmlmap2;
document.querySelector('#wp').innerHTML=htmlwp;
// 基于准备好的dom，初始化echarts实例
var mycolumn=echarts.init(document.getElementById('column')), 
    mymap = echarts.init(document.querySelector('#map>.mapbody')),
    othermap=echarts.init(document.querySelector('#othermap>.mapbody')),
    park=echarts.init(document.querySelector('#park')),
    brokenin= echarts.init(document.getElementById('brokenin')),
    brokenon= echarts.init(document.getElementById('brokenon')),
    brokenout= echarts.init(document.getElementById('brokenout')),
    mypie=echarts.init(document.getElementById('pie')),
    columnpro=echarts.init(document.getElementById('columnpro')),
    barmoney=echarts.init(document.getElementById('barmoney')),
    barcomplaint=echarts.init(document.getElementById('barcomplaint')),
    piecom=echarts.init(document.getElementById('piecom')),
    pieevaluate=echarts.init(document.getElementById('pieevaluate')),
    pieemotion=echarts.init(document.getElementById('pieemotion')),
    columnkey=echarts.init(document.getElementById('columnkey'));
// 绘制图表
mycolumn.setOption(column);
mymap.setOption(mymap_option);
othermap.setOption(otherData[0]);
park.setOption(parkOption);
brokenin.setOption(brokeninOption);
brokenon.setOption(brokenonOption);
brokenout.setOption(brokenoutOption);
mypie.setOption(pie);
columnpro.setOption(columnproOption);
barmoney.setOption(barmoneyOption);
barcomplaint.setOption(barcomOption);
piecom.setOption(piecomOption);
pieemotion.setOption(pieemoOption);
pieevaluate.setOption(pieevalOption);
columnkey.setOption(columnkeyOption);

$('.loader').fadeOut(200);



//表互联事件
mymap.on('geoselectchanged', function (params) {
    if(params.name=='青海'){
    	column.yAxis[0].data=[{value:'广州',textStyle:{color:'#fff'}},
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
            ];
    	column.series[0].data=[90,120,150,170,190,200,220,260, 270, 340, 364, 400, 520, 610]
    }else if(params.name=='新疆'){
    	column.yAxis[0].data=[{value:'广州',textStyle:{color:'#fff'}},
            {value:'北京',textStyle:{color:'#fff'}},
            {value: '深圳',textStyle:{color:'#fff'}},
            {value: '上海',textStyle:{color:'#fff'}},
            {value: '重庆',textStyle:{color:'#fff'}},
            {value: '河北',textStyle:{color:'#fff'}},
            {value: '石家庄',textStyle:{color:'#fff'}},            
            {value: '珠海',textStyle:{color:'#fff'}},
            {value: '河源',textStyle:{color:'#fff'}},
            {value: '梅州',textStyle:{color:'#fff'}},
            {value: '唐山',textStyle:{color:'#fff'}},
            {value: '太源',textStyle:{color:'#fff'}},
            {value: '西藏',textStyle:{color:'#fff'}},
            {value: '沈阳',textStyle:{color:'#fff'}},
            {value: '朝阳',textStyle:{color:'#fff'}}
            ];
    	column.series[0].data=[100,220,260,240, 264,610,520,160, 264,610,520,160,240, 264,610]
    }else if(params.name=='西藏'||params.name=='内蒙古'){
    	column.yAxis[0].data=[{value:'广州',textStyle:{color:'#fff'}},
            {value:'北京',textStyle:{color:'#fff'}},
            {value: '深圳',textStyle:{color:'#fff'}},
            {value: '上海',textStyle:{color:'#fff'}},
            {value: '重庆',textStyle:{color:'#fff'}},
            {value: '河北',textStyle:{color:'#fff'}},
            {value: '石家庄',textStyle:{color:'#fff'}},            
            {value: '珠海',textStyle:{color:'#fff'}},
            {value: '河源',textStyle:{color:'#fff'}},
            {value: '梅州',textStyle:{color:'#fff'}},
            {value: '唐山',textStyle:{color:'#fff'}},
            {value: '太源',textStyle:{color:'#fff'}},
            {value: '西藏',textStyle:{color:'#fff'}},
            {value: '沈阳',textStyle:{color:'#fff'}},
            {value: '朝阳',textStyle:{color:'#fff'}}
            ];
    	column.series[0].data=[120,150,170,190,200,220,260,240, 264,610,520,160,240, 264,610]
    }else{
    	column.yAxis[0].data=[{value:'广州',textStyle:{color:'#fff'}},
            {value:'北京',textStyle:{color:'#fff'}},
            {value: '深圳',textStyle:{color:'#fff'}},
            {value: '上海',textStyle:{color:'#fff'}},
            {value: '重庆',textStyle:{color:'#fff'}},
            {value: '河北',textStyle:{color:'#fff'}},
            {value: '石家庄',textStyle:{color:'#fff'}},            
            {value: '珠海',textStyle:{color:'#fff'}},
            {value: '河源',textStyle:{color:'#fff'}},
            {value: '梅州',textStyle:{color:'#fff'}},
            {value: '唐山',textStyle:{color:'#fff'}},
            {value: '太源',textStyle:{color:'#fff'}},
            {value: '西藏',textStyle:{color:'#fff'}},
            {value: '沈阳',textStyle:{color:'#fff'}},
            {value: '朝阳',textStyle:{color:'#fff'}}
            ];
    	column.series[0].data=[120,150,170,260,240, 264,610,520, 264,610,520,160,240, 264,610]
    }
    mycolumn.setOption(column);
});
selectdemo('.selectmap',['实时汽车','实时航班','实时公交'],'.selecttext',changemap);
function selectdemo(obj,data,tarobj,callback){
    var html='<ul class="selectBox" >';

    for(var i=0;i<data.length;i++){
        
        html+='<li>'+data[i]+'</li>';
      
    }
    html+='</ul>';
    $(obj).html(html);
    $(obj).on('click',function(){
        $(this).find('.selectBox').slideToggle();
    })

    $('.selectBox li').on('mouseover',function(){
       
        $(this).siblings('li').removeClass('active')
        $(this).addClass('active')
    })
    $('.selectBox li').on('click',function(){
       
        $(tarobj).html($(this).text())
        if(callback&&typeof callback=='function'){
           callback($(this).index()) 
        }
    })

}

function changemap(i){
    var otherdata=otherData[0];
    if(i==1){otherdata.series=[otherData[1][3],otherData[1][4],otherData[1][5]]
    }else if(i==2){otherdata.series=[otherData[1][6],otherData[1][7],otherData[1][8]]}else{
        otherdata.series=[otherData[1][0],otherData[1][1],otherData[1][2]];
    }
    othermap.setOption(otherdata);
}

//拖拽事件
var divarr=[];
new Sortable(multi, {
	draggable: '.EC_border',
	handle: '.EC_border',
	onUpdate: function (evt){
	divarr=[];
     $('.EC_border').each(function(i){
     	divarr.push($(this).attr('id'))
     })
     localStorage.divarr=JSON.stringify(divarr); 
  }
});
new Sortable(multi2, {
    draggable: '.EC_border',
    handle: '.EC_border',
    onUpdate: function (evt){
    divarr=[];
     $('.EC_border').each(function(i){
        divarr.push($(this).attr('id'))
     })
     localStorage.divarr=JSON.stringify(divarr); 
  }
});
new Sortable(multi3, {
    draggable: '.EC_border',
    handle: '.EC_border',
    onUpdate: function (evt){
    divarr=[];
     $('.EC_border').each(function(i){
        divarr.push($(this).attr('id'))
     })
     localStorage.divarr=JSON.stringify(divarr); 
  }
});


//更新页面
var weather='<section class="weatherToday">'+
			'<div  ><p>星期一</p><p>1月23日</p><strong class="iconfont icon-qing" "></strong></div><div class="wendu">12</div></section>'+
			'<section class="weatherOther" >'+
			'<div><p>星期二</p><strong class="iconfont icon-zhongyu "></strong><div class="wendu">10</div></div>'+
			'<div><p>星期三</p><strong class="iconfont  icon-zhenyu"></strong><div class="wendu">10</div></div>'+
			'<div><p>星期四</p><strong class="iconfont  icon-yintian"></strong><div class="wendu">10</div></div>'+
			'<div><p>星期五</p><strong class="iconfont  icon-dabaoyu"></strong><div class="wendu">10</div></div>';

$('#weather').html(weather);
