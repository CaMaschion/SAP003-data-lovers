
window.app = {
  filtrarPorTipo,
  ordenPokemons,
  pokePorcentagem
};

//filtrar pokemon

function filtrarPorTipo(pokemon, types) { 
  let pokeTipos = []; // recebe/adiciona o pokemon filtrado
  for (let i = 0; i < types.length; i++) { //entra no array que guarda os tipos de pokemon
    const type = types[i]; 
    pokemon.map(function (personagem) { //procura dentro do "for" o tipo de pokemon selecionado no checkbox
      if (personagem.type.includes(type)) { // determinamos se realmente o array contem o tipo de pokemon selecionado
        pokeTipos.push(personagem); //retorna então adicionando o pokemon selecionado ao array    
      }          
    });     
  }
  console.log(pokeTipos)
  return pokeTipos;
  
  //personagens = pokeTipos; 
  //carregarPokemon(personagens); //coloca na tela o pokemon filtrado a partir da carregamento de todos os cards
    
}

//ordenarpokemon

function ordenPokemons(orderPokemon, pokemons) {
  // const personagens = POKEMON.pokemon;
  let orderList = [];

  switch (orderPokemon) {
  case "a-z": 
    pokemons.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
    break;
  case "z-a": 
    pokemons.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
    pokemons.reverse();
    break;
  }
  return pokemons;
};

//calcular pokemon

function pokePorcentagem(data) {
  console.log(data)
  return ((data.length*100)/151).toFixed(1);
}

/*const total = data.type.reduce(
  (accumulator, item) => {
    console.log(data.type)
    return accumulator + item.type, 0
  });*/

