// console.log('This App is Working...');

// // // Using axios library to make my http request from Node.js
// const axios = require('axios'); // Importing Axios
// const { clear } = require('node:console');

// // Average will be calculated totalWeight or totalHeight divided by total Pokemons
// const totalWeight = 0; // Setting variables with 0 values to be populated by API
// const totalHeight = 0;
// const totalPoke = 0;
// let limit = 0;
// let offset = 1;

// axios
//     .get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200.')
//     .then(function (res) {
//         // The then() method in JavaScript has been defined in the Promise API and is used to deal with asynchronous tasks such as an API call
//         console.log(res.data.results);
//     });

// Set config defaults when creating the instance
// var pokemon_api = axios.create({
//     baseURL: 'https://pokeapi.co/api/v2/',
// });

// pokemon_api.get(`pokemon/101`).then(function (response) {
//     console.log(
//         `name: ${response.data.name}, height: ${response.data.height}, weight ${response.data.weight}`
//     );
// });

const axios = require('axios'); // Importing Axios
let totalWeight = 0; // Setting variables with 0 values to be populated by API
let totalHeight = 0;
axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200.')
    .then((res) => {
        let allPokemon = res.data.results;
        allPokemon.forEach((pokemon) => {
            axios
                .get(pokemon.url)
                .then((innerRes) => {
                    const currentPokemonWeight = innerRes.data.weight;
                    const currentPokemonHeight = innerRes.data.height;
                    console.log(
                        'current Pokemon weight =>',
                        currentPokemonWeight
                    );
                    totalWeight += currentPokemonWeight;
                    totalHeight += currentPokemonHeight;
                })
                .finally(() => {
                    const averageWeight = totalWeight / 100;
                    const averageHeight = totalHeight / 100;
                    console.log('Average Weight =>', averageWeight);
                    console.log('Average Height =>', averageHeight);
                });
        });
    });
