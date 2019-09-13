//const pokemonNames = POKEMON.pokemon

//for (let pokemons in POKEMON) {
//let name = pokemonNames.map(pokemon.name => `${pokemon.name}`);
 //console.log(POKEMON.name);
//}

//const POKEMONS = POKEMON.pokemon;


//for (let poke of POKEMONS){
    //document.write(`${poke.name}</br>`)


//const personagens = POKEMON.pokemon;
//const showPokemons = document.getElementById("main");

//for (pokemons of personagens) {
//showPokemons.innerHTML += `<img src ="${pokemons.img}"/>`
//};

//let pokemon = POKEMON.pokemon;

//pokemon.map (function (pokemons)  {
//  showPokemons.innerHTML+= `<img src = " ${pokemons.img}"/>`;
//})

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
};