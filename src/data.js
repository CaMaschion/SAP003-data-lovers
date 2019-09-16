// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

//const example = () => {
  //return "example";
//};

window.ordenPokemons = ordenPokemons;

function ordenPokemons() {
  const personagens = POKEMON.pokemon;
  let orderPokemon = "";

  for(pokemons of personagens) {

  switch (orderPokemon){
  case "a-z":
    personagens.name.sort();
    break;
  case "z-a":
    personagens.name.sort();
    personagens.name.reverse();
    break;
 }
};