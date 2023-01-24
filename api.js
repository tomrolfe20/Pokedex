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

// fetchPokemon('charizard').then((pokemon) => console.log(pokemon));

module.exports = fetchPokemon;
