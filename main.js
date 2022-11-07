const input = document.querySelector("#input");
const city = document.querySelector("#city");

const cityName = document.querySelector("#cityName");
const Temp1 = document.querySelector("#temp_min");
const Temp2 = document.querySelector("#temp_max");
const main = document.querySelector("#main");
const discription = document.querySelector("#discription");
const image = document.querySelector("#image");

input.onsubmit = (submit) => {
  submit.preventDefault();
  weatherUpdate(city.value);
  city.value = "";
};

// const getWeather = async (city) => {
//       let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1178d1ba1db59597307405a5187afcc6&units=imperial`,
//       { method: 'GET' });
//       let data = await response.json();
//       console.log(data)
//       return data.weather.items
//   }

  weatherUpdate = (city) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1178d1ba1db59597307405a5187afcc6`);


  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("City not found");
    } else {
      var data = JSON.parse(xhr.response);
      cityName.innerHTML = data.name;
      Temp1.innerHTML = `${Math.round(data.main.temp_min - 273.15)}°C`;
      Temp2.innerHTML = `${Math.round(data.main.temp_max - 273.15)}°C`;
      main.innerHTML = data.weather[0].main;
      discription.innerHTML = data.weather[0].description;
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
  };
};

weatherUpdate("patna");