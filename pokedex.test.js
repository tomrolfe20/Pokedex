const Pokedex = require("./pokedex");

it("calling all on new pokedex returns empty array", () => {
  const pokedex = new Pokedex();
  expect(pokedex.all()).toStrictEqual([]);
});

it("catch can add pokemon to array", async () => {
  const pokedex = new Pokedex();
  await pokedex.catch("pikachu");
  expect(pokedex.all()).toStrictEqual(["pikachu"]);
});
