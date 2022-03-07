import React from "react"

export default function getPokemon(pokemonName : string) : any{
  const response = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`)
  .then(response => {
    return response.json()
  })
  
  return response
}