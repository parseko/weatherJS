import { getPokemon, getPokemonHabitats } from "./pokemonRutes";

let body = document.body;
const card = document.querySelector(".card");

const createName = (pokemon) => {
  let divPokemon = document.createElement('div'); 
  let crearHtml = `
    <div class="card-title">
      <h3>${pokemon.name}</h3> 
    </div>`;
  divPokemon.innerHTML = crearHtml;
  card.append(divPokemon);
};

const createHabitats = (habitats) => {
  let divHabitats = document.createElement('div'); 
  divHabitats.setAttribute('class', 'buttonHabitat')
  divHabitats.innerHTML = `<button class="btnHabitat">${habitats.name}</button>`;
  card.append(divHabitats)
};

export const init = async () => {
  // (await getPokemon()).forEach(createName);
  (await getPokemonHabitats()).forEach(createHabitats);
};
