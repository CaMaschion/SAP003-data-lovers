// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

//const example = () => {
  //return "example";
//};

window.ordenPokemons = ordenPokemons;

function ordenPokemons(orderPokemon) {
  const personagens = POKEMON.pokemon;
  let orderList = [];

  switch (orderPokemon){
  case "a-z":
    orderList = personagens.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
});
    break;
  case "z-a":
    orderList = personagens.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
});
    orderList = personagens.reverse();
    break;
 }
 
};
