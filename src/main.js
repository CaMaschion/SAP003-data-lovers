const principal = document.getElementById("principal")
const menu = document.getElementById("poke-types")


getPokemons("https://pokeapi.co/api/v2/pokemon?limit=20", "");
getPokemonsTypes();

const personagens = POKEMON.pokemon;

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




document.getElementById("ordenarPokemons").addEventListener("change", (e) => {
  const orderPokemon = e.target.value;
  principal.innerHTML = "";
  getPokemons(orderPokemon);
});

document.getElementById("filter").addEventListener("click", function() {
  const types = Array.from(document.querySelectorAll(".type:checked")).map(function (element) {
    
    return element.value;
  });
 
  principal.innerHTML += "";

  types.map((url, index)=>{

    console.log("filtrando:", index)
    getPokemons(url, "a-z");
  })
  
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

function menuTemplate(name, url) { 
  
  countPokemonsByType(url)
  
  const layout = `
  <input type="checkbox" 
  class="type" value="${url}">${name}(<span id="typeWater"></span>)<br>`;
  return layout;
}

showTypes();

