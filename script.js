const options ={
    method: 'GET',
    headers: {
        'x-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90ple091djsnfb21cde4eb87',
        'x-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidopi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/vl/weather?city=Seattle' + city,options)
    .then(response => response.json())
    .then((response)=> {
        
        console.log(response)
        feels_like.innerHTML=response.feels_like
        humidity.innerHTML=response.humidity
        max_temp.innerHTML=response.max_temp
        min_temp.innerHTML=response.min_temp
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
        temp.innerHTML=response.temp
        wind_degrees.innerHTML=response.wind_degrees
        wind_speed.innerHTML=response.wind_speed
    })
    .catch(err => console.error(err));
}

submit.addEventListenter("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("surat")