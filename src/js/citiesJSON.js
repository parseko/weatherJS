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


export {
    sortedCities,
    citiesArray
}
