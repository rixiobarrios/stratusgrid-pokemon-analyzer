const axios = require('axios'); // Importing Axios
let totalWeight = 0; // Setting variables with 0 values to be populated by API results
let totalHeight = 0;
let totalPoke = 0;

axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200.')
    .then((res) => {
        let allPokemon = res.data.results; // Accessing  object properties through dot notation
        allPokemon.forEach((pokemon) => {
            // Iterating over the array of objects using .forEach()
            axios
                .get(pokemon.url)
                .then((innerRes) => {
                    const pokeWeight = innerRes.data.weight;
                    const pokeHeight = innerRes.data.height;
                    const pokeName = innerRes.data.name;
                    // console.log('Pokemon weight:', pokeWeight);
                    // console.log('Pokemon height:', pokeHeight);
                    // console.log('Pokemon total:', totalPoke);
                    totalWeight += pokeWeight;
                    totalHeight += pokeHeight;
                    totalPoke++;
                    // console.log(pokeName, pokeHeight, pokeWeight);
                })
                .finally(() => {
                    if ((totalPoke = allPokemon.length)) {
                        const averageWeight = totalWeight / totalPoke;
                        const averageHeight = totalHeight / totalPoke;
                        // console.log('Total Weight:', totalWeight);
                        // console.log('Total Height:', totalHeight);
                        // console.log('Total Pokemons:', totalPoke);
                        // console.log('Average Weight:', averageWeight);
                        // console.log('Average Height:', averageHeight);
                        // console.log(
                        //     `totalHeight: ${totalHeight}, totalWeight: ${totalWeight}\ntotalPoke: ${totalPoke}\naverageHeight: ${averageHeight}\naverageWeight: ${averageWeight}`
                        // );
                    }
                });
        });
    });
