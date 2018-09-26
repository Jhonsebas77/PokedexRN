export const getURL =
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

export const getAllPokemon =
  () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=150`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
      .catch((error) => {
        console.error(error)
      })
  }

export const getPokemonGO =
  () => {
    return fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('--> ', responseJson)
        return responseJson
      })
      .catch((error) => {
        console.error(error)
      })
  }

export const getAllMoves =
  () => {
    return fetch(`https://pokeapi.co/api/v2/move/?limit=100`)
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
    return fetch(`https://pokeapi.co/api/v2/item/?limit=200`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
      .catch((error) => {
        console.error(error)
      })
  }
