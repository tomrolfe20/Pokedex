function fetchPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      return {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map((object) => object.type.name),
      };
    });
}

class Pokedex {
  constructor() {
    this.pokemons = [];
  }

  all() {
    return this.pokemons.map((pokemon) => pokemon.name);
  }

  async catch(name) {
    this.pokemons.push(await fetchPokemon(name));
  }
}

module.exports = Pokedex;
