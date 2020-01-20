const principal = document.getElementById("principal");
const menu = document.getElementById("poke-types");
let currentPokemon = [];

getPokemons("https://pokeapi.co/api/v2/pokemon?limit=151");
getPokemonsTypes();

const cardTemplate = (name, url) => {
  getPokemonBasicInformation(url, name);

  const layout = `
    <div id="pokemon" class="poke-card">
      <div class="infos">
        <img id="${url}"/>
        <div id = "name" class="name">
          ${name}
        </div>
        <p class="subtitle" id="${name}-type"></p>
       </div>
    </div>`;
  return layout;
};

document.getElementById("ordenarPokemons").addEventListener("change", e => {
  const orderPokemon = e.target.value;
  principal.innerHTML = "";
  getPokemons(orderPokemon);
});

document.getElementById("filter").addEventListener("click", async function () {
  const types = Array.from(document.querySelectorAll(".type:checked")).map(
    function (element) {
      return element.value;
    }
  );

  currentPokemon = [];
  principal.innerHTML = "";

  types.map(async url => {
    getPokemonsByType(url);
  });
});

document
  .getElementById("ordenarPokemons")
  .addEventListener("change", function () {
    const ordem = Array.from(document.querySelectorAll("#ordenarPokemons")).map(
      function (element) {
        return element.value;
      }
    );
    selectOrderPokemon(ordem);
  });

const selectOrderPokemon = () => {
  let option = document.getElementById("ordenarPokemons").value;
  let orderedList = orderPokemons(option);

  principal.innerHTML = "";
  orderedList.map((pokemon, index) => {
    principal.innerHTML += cardTemplate(pokemon.name, pokemon.url);
  });
};

const menuTemplate = (name, url) => {
  countPokemonsByType(url);

  const layout = `
  <input type="checkbox" 
  class="type" value="${url}">${name}(<span id="${url}"></span>)<br>`;
  return layout;
};

const addNumberOfPokemonInMenuTemplate = (url, number) => {
  let span = document.getElementById(url);
  span.innerHTML = number;
};

const addImageToCardTemplate = (url, imageUrl) => {
  let img = document.getElementById(url);
  img.src = imageUrl;
};

const addPokemonTypeToCardTemplate = (name, types) => {
  let span = document.getElementById(`${name}-type`);
  span.innerHTML = `Tipo: ${types}`;
};

//ordenarpokemon

const orderPokemons = (option) => {
  if (option === "a-z") {
    currentPokemon.sort((current, next) => {
      if (current.name > next.name) {
        return 1;
      }
      return -1;
    });
  } else if (option === "z-a") {
    currentPokemon.sort((current, next) => {
      if (current.name > next.name) {
        return -1;
      }
      return 1;
    });
  } else {
    return currentPokemon;
  }
  return currentPokemon;
};
