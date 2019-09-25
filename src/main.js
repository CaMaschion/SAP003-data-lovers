let personagens = POKEMON.pokemon;

function carregarPokemon(personagens) {

  const showPokemons = document.getElementById("principal");
  let layout = "";
  showPokemons.innerHTML = "";
  for (pokemons of personagens) {
    layout += `
          <div id="pokemon" class="poke-card">
            <div class="infos">
              <img src ="${pokemons.img}"/>
              <div id = "name">
                ${pokemons.name}
              </div>
              <p class="subtitle">Tipo:</p>
              ${pokemons.type}
              <p class="subtitle">Fraquezas:</p>
              ${pokemons.weaknesses}
            </div>
          </div>`;
  };
  showPokemons.innerHTML = layout;
}
carregarPokemon(personagens);
  
  //showPokemons.innerHTML = layout;

document.getElementById("filter").addEventListener("click", function() {
  const types = Array.from(document.querySelectorAll(".type:checked")).map(function (element) { 
    //foi criado um array, no qual estão os pokemon filtrados, a partir do array onde estão todos os pokemon
    //queryselectorall retornou uma lista com os elementos especificados(tipos checados pelo usuário)
    // map foi chamado para buscar o tipo dentro desse novo array
    return element.value;
  });
    filtrarPorTipo(POKEMON.pokemon, types);
    const pokemonFiltrado = app.filtrarPorTipo(POKEMON.pokemon, types);

    //console.log(pokemonFiltrado)
    carregarPokemon(pokemonFiltrado);
    console.log(pokePorcentagem(pokemonFiltrado));  

    //console.log(pokePorcentagem(pokemonFiltrado));
  });



document.getElementById("ordenarPokemons").addEventListener("change", function() {
  const ordem = Array.from(document.querySelectorAll("#ordenarPokemons")).map(function (element) {
    return element.value;
  });
  selectOrderPokemon(ordem);
}
);

function selectOrderPokemon() {
  let orderPokemon = document.getElementById("ordenarPokemons").value;
  let orderList = window.ordenPokemons(orderPokemon, personagens);
  carregarPokemon(orderList);
}



