import { getWeatherUser } from "./weatherAPI";

let cities = [];

const getCities = async () => {
    let resp = await fetch("assets/citiesMexico.json");
    let data = await resp.json();
    return data;
};

const citiesArray = async () => {
    (await getCities()).forEach((city) => {
        cities.push(city.name);
    });
    return cities;
};

let sortedCities = cities.sort();

const getLatitudeLongitude = async (value) => {
    (await getCities()).forEach((city) => {
        if (city.name == value) {
            const { lon, lat } = city.coord;
            getWeatherUser(lat, lon);
        }
    });
};

export { sortedCities, citiesArray, getLatitudeLongitude };
