const searchInput = document.querySelector('.search-input') ;
const searchBtn = document.querySelector('button') ;
const weatherIcon = document.querySelector('.weather-icon') ;
const temp = document.querySelector('.temp');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity') ;
const wind = document.querySelector('.wind') ;


function displayWeather(data) {
    // weather-icon
    const weatherStatus = data.weather[0].main.toLowerCase() ;
    console.log(weatherStatus) ;
    switch (weatherStatus) {
        case  "clear" :
            weatherIcon.src = "./clear.png" ;
            break ;
        case "clouds" : 
            weatherIcon.src = "./clouds.png" ;
            break;
        case "drizzle" :
            weatherIcon.src = "./drizzle" ;
            break ;
        case "mist" :
            weatherIcon.src = "./mist.png" ;
            break ;
        case "rain" :
            weatherIcon.src = "./rain.png" ;
            break;
        case "snow" :
            weatherIcon.src = "./snow.png" ;
            break ;
            
    }

    // temperature text 
    temp.textContent = `${data.main.temp}° C`;

    //city Name 
    city.textContent = data.name ;

    // humidity text
    humidity.textContent = `${data.main.humidity}%` ;

    //wind speed
    wind.textContent = `${data.wind.speed} kmph` ;

    //input
    searchInput.value = "" ;

}

const fetchData = async (apiUrl) => {
    try{
        const url = apiUrl ;
        const response = await fetch(url) ;
        const data = await response.json() ;
        displayWeather(data) ;

    }
    catch(error){
         console.log('') ;
    }
};

const getInput = () => {
    const input = searchInput.value ;
    const apiKey = "d9ced364fdbb426955b22bbbabed0127" ;
    const city = "q=" + input ;
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?" 
    +  city + "&units=metric" + "&appid=" + apiKey ;
    fetchData(apiUrl) ;

};

searchBtn.addEventListener('click' , getInput);
searchInput.addEventListener('keypress' , (event) => {
    if(event.key === 'Enter'){
        getInput();
    }
}) ;

