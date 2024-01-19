const { Type } = require("../db");
const axios = require("axios");

const getPokemonTypes = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type/");
    const typesOfPokemon = response.data.results.map((type) => type.name);

    //console.log(typesOfPokemon);
    return typesOfPokemon;
  } catch (error) {
    console.error("Error al obtener los tipos de Pokémon:", error.message);
    return [];
  }
};

module.exports = getPokemonTypes;
