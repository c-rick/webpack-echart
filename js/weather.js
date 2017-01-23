
var option={
	getWeather:function(city,success){
	$.ajax({
		 url: 'http://wthrcdn.etouch.cn/weather_mini?',//http://platform.91zmt.com/interface/weather/'+city+'?webcode=czldly&uid=5&district='+city
		type: 'get',
		dataType: 'json',
		data:{city:city}
	})
	.done(function(rep) {
		success(rep);
	})
	.fail(function(rep) {
		console.log(rep)
	})
	
	}
}


module.exports=option;