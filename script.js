var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true')
request.send()
request.onload=function(){
var data=JSON.parse(this.response)
console.log(data)
for(var i in data)
{
    var newarr=[];
    newarr.push(data[i].latlng)
    
    console.log(newarr)
   
}
}

var request=new XMLHttpRequest();
request.open('GET','https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=314c377edcc97e23eac8a6e286d6dab0','true')
request.send()
request.onload=function(){
    var data=JSON.parse(this.response)
    console.log(data)
}

var request=new XMLHttpRequest();
request.open('GET','https://api.openweathermap.org/data/2.5/weather?lat=35.0&lon=-97.0&appid=314c377edcc97e23eac8a6e286d6dab0','true')
request.send()
request.onload=function(){
    var data=JSON.parse(this.response)
    console.log(data)
}