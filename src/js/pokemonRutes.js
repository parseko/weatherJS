export const getPokemon = async () => {
  try {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const { results } = await resp.json();
    return results;
  } catch (error) {
    throw error;
  }
};

export const getPokemonHabitats = async () => {
  try {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon-habitat/");
    const { results } = await resp.json();
    return results;
  } catch (error) {
    throw error;
  }
};
