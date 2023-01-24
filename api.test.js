const fetchPokemon = require('./api');

describe('fetchPokemon', () => {
  it('fetches the data for charizard', async () => {
    const result = await fetchPokemon('charizard');
    expect(result.name).toBe('charizard');
    expect(result.id).toBe(6);
    expect(result.height).toBe(17);
    expect(result.weight).toBe(905);
    expect(result.types).toEqual(['fire', 'flying']);
  });
});
