export const getAllPokemon =
  () => {
    return fetch(`http://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
      .catch((error) => {
        console.error(error)
      })
  }
export const getPokemonData =
(id) => {
  return fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.error(error)
    })
}
export const getPokemonURL =
(url) => {
  return fetch(`${url}`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.error(error)
    })
}
export const getAllItems =
  () => {
    return fetch(`https://pokeapi.co/api/v2/item/`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
      .catch((error) => {
        console.error(error)
      })
  }

