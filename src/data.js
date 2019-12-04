
window.app = {
  filtrarPorTipo,
 // ordenPokemons,
  pokeCalc
};

//filtrar pokemon

function filtrarPorTipo(pokemon, types) {
  let pokeTipos = []; 
  for (let i = 0; i < types.length; i++) { 
    const type = types[i];
    pokemon.map(function (personagem) { 
      if (personagem.type.includes(type)) { 
        pokeTipos.push(personagem); 
      }
    });
  }
  return pokeTipos;

}

//ordenarpokemon

function orderPokemons(orderPokemon, pokemons) {
  if (orderPokemon === "a-z") {
    pokemons.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
  } else if (orderPokemon === "z-a") {
    pokemons.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      return 1;
    });
  } else {
    return pokemons;
  }
  return pokemons;
};

// function ordenPokemons(orderPokemon, pokemons) {
//   let orderList = [];

//   switch (orderPokemon) {
//   case "a-z":
//     pokemons.sort((a, b) => {
//       if (a.name > b.name) {
//         return 1;
//       }
//       return -1;
//     });
//     break;
//   case "z-a":
//     pokemons.sort((a, b) => {
//       if (a.name > b.name) {
//         return 1;
//       }
//       return -1;
//     });
//     pokemons.reverse();
//     break;
//   }
//   return pokemons;
// };

//Calcula quantos pokemons tem de cada tipo

function pokeCalc(pokeData) {
  let countTypes = pokeData.reduce(function (acumulador, pokemon) {
    for (tipoPokemon of pokemon.type) {
      if (tipoPokemon in acumulador) {
        acumulador[tipoPokemon]++;
      } else {
        acumulador[tipoPokemon]=1;
      }
    }

    return acumulador;
  }, {});
  return countTypes;
};
