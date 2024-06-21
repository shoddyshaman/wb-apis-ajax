import axios from "axios";

const episode = Math.ceil(Math.random() * 6);

axios.get(`https://swapi.dev/api/films/${episode}`).then((response) => {
  console.log(response) // executed 2nd
  console.log(`this will be logged second`); // executde 3rd
  document.querySelector("#star-wars-movie").innerText = response.data.title; //executed 4th
});

// const data = axios.get(`https://swapi.dev/api/films/${episode}`)

// console.log(data)

console.log(`i will run first`) //executed first