var fs = require('fs')
var fetch = require('node-fetch')

let pokemon = 'butterfree'

function fetchpokemon() {
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
.then(response => response.json())
.then(json => (json.types.map(element => element.type.name)))
.then(data => console.log(pokemon + ": " + data.join(", ")))
}

fetchpokemon();