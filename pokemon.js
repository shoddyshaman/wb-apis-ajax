import axios from 'axios';

const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
console.log(pokemon)

function getPokemon() {
  //we need to fetch the input for number of pokemons
  const numPokemon = document.querySelector('#num-pokemon').value
  const url = `https://pokeapi.co/api/v2/pokemo?limit=${numPokemon}`
  // const queryString = new URLSearchParams({limit : 50, offset: 10}).toString()

  // const url = `https://pokeapi.co/api/v2/pokemon?${queryString}`

  //asynchronous request using axios to pokeAPI to fetch pokemons and use .then() to hold the code that displays them on the browser
  axios.get(url).then((response) => {
    let pokemonList = ''
    for(const pokemon of response.data.results){
      pokemonList += `<li> ${pokemon.name} </li>`
    }
    document.querySelector('#pokemon-list').innerHTML = pokemonList
  }).catch(error => console.log(error.response.data))
}

//3 step process DOM Manipulation based on events

//1st step get the element that we want to watch for event
const button = document.querySelector('#get-pokemon')

//2nd step add an event listener that will listen for the event. 3rd step to provide the type of event and a callback function to execute when that event happens
button.addEventListener('click',getPokemon)