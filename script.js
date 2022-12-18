console.log('eh')
// Enter Your api key by login from Open Weather website https://openweathermap.org/api
let key = "";

let search = document.querySelector('#search');
let button = document.querySelector('#button');



button.addEventListener('click',()=>{
    console.log('clicked')
    var city = '';
    city = search.value;
    console.log(city);
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((resp)=>{
        console.log(resp);
        let container = document.querySelector('.container');
        let celcius = Math.round(parseFloat(resp.main.temp)-273.15);
        console.log(container)
        console.log(celcius)


        container.innerHTML +=`<div class="box">
        <h2>${city}</h2>
        <img src="https://openweathermap.org/img/wn/${resp.weather[0].icon}@4x.png" alt="">
        <p class="deg">${celcius} &deg; c</p>
        <p>${resp.weather[0].description}</p>
        <h2>${resp.name}, ${resp.sys.country}</h2>
      </div>`
      search.value = '';
    })
    .catch((err)=> alert('Pleae Enter Valid City Name'))
})

