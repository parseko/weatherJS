import { sortedCities, citiesArray, getLatitudeLongitude } from "./citiesJSON";
let inputCities = document.querySelector("#input");
const bodys = document.body;

const displayNames = (value) => {
    inputCities.value = value;
    if (inputCities.value != "") {
        removeElements();
    }
    getLatitudeLongitude(value);
};

const removeElements = () => {
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => item.remove());
};

const findCities = () => {
    removeElements();
    for (let i of sortedCities) {
        if (
            i.toLowerCase().startsWith(inputCities.value.toLowerCase()) &&
            inputCities.value != ""
        ) {
            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.addEventListener("click", () => {
                displayNames(i);
            });
            let word = "<b>" + i.substr(0, inputCities.value.length) + "</b>";
            word += i.substr(input.value.length);
            listItem.innerHTML = word;
            document.querySelector(".cities").appendChild(listItem);
        }
    }
};

export const createHabitats = async (weather, name, main) => {
    const { icon, main: title, description } = weather[0];

    let divWeather = document.querySelector("#weather");
    deleteChildrensDiv(divWeather);
    divWeather.setAttribute("class", "weather_card");
    divWeather.innerHTML = `
    <div class="card">
        <h2 class="card_title">${title}</h2>
        <div class="card_content_img">
          <img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="Imagen" class="conten_img_image"/>
        </div>
        <div  class="card_content_description">

          <h3 class="content_description_title">${name}</h3>
          <h5 class="content_description_text">${description}</h5>
          <p class="content_description_text">${Math.round(
              main.temp - 273.15
          )}&deg</p>
        </div>
    </div>`;
    bodys.append(divWeather);
};

const deleteChildrensDiv = (div) => {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
};

export const init = () => {
    citiesArray();
    inputCities.addEventListener("keyup", findCities);
};
