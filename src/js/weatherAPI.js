import { createHabitats } from "./componentes";

const URL_WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";

const getLocationUser = () => {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

export const getPositionUser = async () => {
    let position = await getLocationUser();

    const { latitude, longitude } = position.coords;

    getWeatherUser(latitude, longitude);
};

export const getWeatherUser = async (latitude, longitude) => {
    let resp = await fetch(
        `${URL_WEATHER_API}lat=${latitude}&lon=${longitude}&lang=sp&appid=aae095cd0c99a0f95b09395b2c368f19`
    );

    let { weather, name, main } = await resp.json();

    createHabitats(weather, name, main);
};
