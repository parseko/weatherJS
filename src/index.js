import { init } from "./js/componentes";
import "./styles.css";
init();



const URL_WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";
const bodys = document.body;
let latitude, longitude;

// const getLocationUser = () => {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };

// const getPositionUser = async () => {
//     let position = await getLocationUser();
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;

//     return {
//         latitude,
//         longitude,
//     };
// };

// const getWeatherUser = async () => {
//     const { latitude, longitude } = await getPositionUser();

//     let resp = await fetch(
//         `${URL_WEATHER_API}lat=${latitude}&lon=${longitude}&lang=sp&appid=aae095cd0c99a0f95b09395b2c368f19`
//     );

//     let { weather, name, main } = await resp.json();

//     return { weather, name, main };
// };

// const createHabitats = async () => {
//     const { weather, name, main } = await getWeatherUser();
//     const { icon, main: title, description } = weather[0];

//     let divWeather = document.createElement("div");
//     divWeather.setAttribute("class", "weather_card");
//     divWeather.innerHTML = `
//     <div class="card">
//         <h2 class="card_title">${title}</h2>
//         <div class="card_content_img">
//           <img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="Imagen" class="conten_img_image"/>
//         </div>
//         <div  class="card_content_description">

//           <h3 class="content_description_title">${name}</h3>
//           <h5 class="content_description_text">${description}</h5>
//           <p class="content_description_text">${Math.round(
//               main.temp - 273.15
//           )}&deg</p>
//         </div>
//     </div>`;
//     bodys.append(divWeather);
// };

// createHabitats();

// const init = async () => {
//     createHabitats()
// }

// init();
