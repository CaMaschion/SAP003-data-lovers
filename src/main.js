
const personagens = POKEMON.pokemon;
const showPokemons = document.getElementById("main");

  for (pokemons of personagens) {
    showPokemons.innerHTML += `
    <div id="pokemon" class="pokeCard">
    
    <div id="name">
    ${pokemons.name}
    </div>
    
    <img src ="${pokemons.img}"/>

    </div>`;
  }

function selectOrderPokemon() {
  let orderPokemon = document.getElementById("ordenarPokemons").value;
  orderPokemon = window.ordenPokemons();
}