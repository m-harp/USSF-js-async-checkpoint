var fs = require('fs')
var fetch = require('fetch')

let pokemon = 'butterfree'

function fetchpokemon() {
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
.then(response => response.json())
.then(json => (json.type.map(element => element.type.name)) 
.then(data => console.log(pokemon + ": " + json.join(", ")))
}