const principal = document.getElementById("principal")
const personagens = POKEMON.pokemon;

const getPokemons = (order) => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then(response => response.json())
    .then(data => {
      const pokemonsApi = data.results;
     // const filterPokemon = filterPoke(filter)
      const ordenated = orderPokemons(order, pokemonsApi);
      ordenated.map(pokemon => {
        fetch(pokemon.url)
          .then(response => response.json())
          .then(data => {
            const img = data.sprites.front_default;
            const types = data.types.map(type => type.type.name);
            const typesPrint = types.join(", ");

            principal.innerHTML += cardTemplate(img, pokemon.name, typesPrint);

            //  types.forEach(type =>{
            //    document.getElementById("type" + type).textContent++;
            //  })

            // data.types.map(type => {
            //   fetch(type.type.url)
            //     .then(response => response.json())
            //     .then(data => {
            //       const infos = {
            //         name: pokemon.name,
            //         img: Image,
            //         types: typesPrint,  
            //       }
                  
            //     })
            // })
          })
      })
    })
}


const cardTemplate = (image, name, types) => {
  const layout = `
    <div id="pokemon" class="poke-card">
      <div class="infos">
        <img src ="${image}"/>
        <div id = "name" class="name">
          ${name}
        </div>
        <p class="subtitle">Tipo:</p>
          ${types}        
       </div>
    </div>`;
  return layout;
};

getPokemons("");

document.getElementById("ordenarPokemons").addEventListener("change", (e) => {
  const orderPokemon = e.target.value;
  principal.innerHTML = "";
  getPokemons(orderPokemon);
});

// function carregarPokemon(pokemons) {
//   personagens = pokemons;

//   const showPokemons = document.getElementById("principal");
//   let layout = "";
//   showPokemons.innerHTML = "";
//   for (pokemon of pokemons) {
//     layout += `
//           <div id="pokemon" class="poke-card">
//             <div class="infos">
//               <img src ="${pokemon.img}"/>
//               <div id = "name">
//                 ${pokemon.name}
//               </div>
//               <p class="subtitle">Tipo:</p>
//               ${pokemon.type}
//               <p class="subtitle">Fraquezas:</p>
//               ${pokemon.weaknesses}
//             </div>
//           </div>`;
//   };
//   showPokemons.innerHTML = layout;
// }
// carregarPokemon(personagens);

document.getElementById("filter").addEventListener("click", function () {
  const types = Array.from(document.querySelectorAll(".type:checked")).map(function (element) {
    return element.value;
  });
  filtrarPorTipo(POKEMON.pokemon, types);
  const pokemonFiltrado = app.filtrarPorTipo(POKEMON.pokemon, types);

  cardTemplate(pokemonFiltrado);

});

document.getElementById("ordenarPokemons").addEventListener("change", function () {
  const ordem = Array.from(document.querySelectorAll("#ordenarPokemons")).map(function (element) {
    return element.value;
  });
  selectOrderPokemon(ordem);
}
);

function selectOrderPokemon() {
  let orderPokemon = document.getElementById("ordenarPokemons").value;
  let orderList = window.orderPokemons(orderPokemon, personagens);
  carregarPokemon(orderList);
}

function showTypes() {
  let qtTypes = app.pokeCalc(personagens);
  for (tipo in qtTypes) {
    document.getElementById("type" + tipo).innerHTML = qtTypes[tipo];
  }

}

showTypes();

