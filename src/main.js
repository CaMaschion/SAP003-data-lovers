
const personagens = POKEMON.pokemon;
printPokemons(personagens);

function printPokemons(pokemonList) {
  const showPokemons = document.getElementById("main");
  showPokemons.innerHTML = "";
  for (pokemons of pokemonList) {
    showPokemons.innerHTML += `
    <div id="pokemon" class="pokeCard">

    <div id="name">
    ${pokemons.name}
    </div>

    <img src ="${pokemons.img}"/>

    </div>`;
  }
}

function selectOrderPokemon() {
  let orderPokemon = document.getElementById("ordenarPokemons").value;
  let orderList = window.ordenPokemons(orderPokemon);
  printPokemons(orderList);
}
