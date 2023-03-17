import { sortedCities, citiesArray } from "./citiesJSON";
let inputCities = document.querySelector("#input");

const displayNames = (value) => {
    inputCities.value = value;
    if(inputCities.value != "") {
      removeElements();
    }
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

export const init = () => {
    citiesArray();
    inputCities.addEventListener("keyup", findCities);
};
