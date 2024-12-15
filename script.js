var overlay= document.querySelector('.overlay')
var cityName=document.querySelector('#cityName')
var btn=document.querySelector('#search')
var climate=document.querySelector('#climate')
var temp=document.querySelector('#temp')
var city=document.querySelector('#city')
var humid=document.querySelector('#humid')
var wind=document.querySelector('#wind')

btn.addEventListener('click',()=>{
    if(cityName.value===''){
        alert('Enter city name')
        return
    }
    overlay.style.display='flex'
    setTimeout(async()=>{
        
        let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=5d014e4a63ab5b92cc4026f9e52f371a`
        const res =await fetch(apiURL)
        const data=await res.json()

        if(data){
            overlay.style.display='none'
            if(data.cod==='404'){
                alert(data.message)
            }
            else{
                climate.innerHTML=data.weather[0].main
                temp.innerHTML=(data.main.temp - 273.15).toFixed(2) +'°C'
                city.innerHTML=data.name
                humid.innerHTML=data.main.humidity+'%'
                wind.innerHTML=data.wind.speed+'meter/sec'
            }
        }
    },1500);
})