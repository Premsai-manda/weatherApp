const apiKey ='facdd880cb4cfa79fad3be397582050b'; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon img');


async function checkWeather(city){

  const url = apiUrl+city+`&appid=${apiKey}`;
  console.log("Requesting", url);

  const response = await fetch(url);
  if(response.status == 404){
    document.querySelector(".err").style.display = 'block';
    document.querySelector(".weather").style.display = 'none';
  }
  else{
     var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temprature").innerHTML = Math.round(data.main.temp)+"°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
  document.querySelector(".speed").innerHTML = data.wind.speed +"Kmph";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src="asserts/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src="asserts/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src="asserts/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src="asserts/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src="asserts/mist.png";
  }
  document.querySelector(".weather").style.display = 'block'
  document.querySelector(".err").style.display = 'none';

  }

 
}

searchBtn.addEventListener("click",()=>{
  const city = document.querySelector('.search input').value;
  checkWeather(city);
})


