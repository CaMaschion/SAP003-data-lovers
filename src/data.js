
window.app = {
  // filtrarPorTipo,
  pokeCalc
};

//filtrar pokemon

const getPokemonsTypes = () => {
  fetch("https://pokeapi.co/api/v2/type/")
    .then(response => response.json())
    .then(data => {
      const typesApi = data.results;
      typesApi.map(type => {
        menu.innerHTML += menuTemplate(type.name, type.url);
      })
    })
}

const countPokemonsByType = (url) => {
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      counter = data.pokemon.length;  
          
    })
    
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

//Calcula quantos pokemons tem de cada tipo

function pokeCalc(pokeData) {
  let countTypes = pokeData.reduce(function (acumulador, pokemon) {
    for (tipoPokemon of pokemon.type) {
      if (tipoPokemon in acumulador) {
        acumulador[tipoPokemon]++;
      } else {
        acumulador[tipoPokemon] = 1;
      }
    }

    return acumulador;
  }, {});

  return countTypes;
};

const getPokemons = (url,order) => {
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let pokemons = data.results;
      console.log(data.results)
      //const ordenated = orderPokemons(order, pokemonsApi);
      pokemons.map(pokemon => {
        fetch(pokemon.url)
          .then(response => response.json())
          .then(data => {
            const img = data.sprites.front_default;
            const types = data.types.map(type => type.type.name);

            principal.innerHTML += cardTemplate(img, pokemon.name, types);

          })
      })
    })
}