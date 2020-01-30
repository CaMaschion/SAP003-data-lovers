//filtrar pokemon

const getPokemonsTypes = async () => {
  let response = await fetch("https://pokeapi.co/api/v2/type/");
  let data = await response.json();
  let types = await data.results;

  const template = types.map((type, index) => menuTemplate(type.name, type.url));
  menu.innerHTML += template;
  
};

const countPokemonsByType = async url => {
  let response = await fetch(url);
  let data = await response.json();
  let number = await data.pokemon.length;

  addNumberOfPokemonInMenuTemplate(url, number);
};

const getPokemons = async url => {
  let response = await fetch(url);
  let data = await response.json();
  let pokemons = await data.results;

  setCurrentPokemon(pokemons);

  pokemons.map(async pokemon => {
    principal.innerHTML += cardTemplate(pokemon.name, pokemon.url);
  });
};

const getPokemonBasicInformation = async (url, name) => {
  let response = await fetch(url);
  let data = await response.json();
  let imageUrl = await data.sprites.front_default;
  let types = data.types.map(slot => slot.type.name).toString();

  addImageToCardTemplate(url, imageUrl);
  addPokemonTypeToCardTemplate(name, types);
};

const getPokemonsByType = async url => {
  let response = await fetch(url);
  let data = await response.json();
  let filtredPokemons = await data.pokemon;

  setCurrentPokemon(filtredPokemons, false);

  filtredPokemons.map(async filter => {
    principal.innerHTML += cardTemplate(
      filter.pokemon.name,
      filter.pokemon.url
    );
  });
};

const setCurrentPokemon = async (pokemon) => {

  pokemon.map(pokemon => currentPokemon.push(pokemon));
  console.log(currentPokemon);
};
