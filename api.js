const fetchPokemon = (name) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      name: data.name;
    });
};

console.log(fetchPokemon('pikachu'));

module.exports = fetchPokemon;
