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
    return fetch(`https://pokedexrn-api.herokuapp.com/pokedex`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
      .catch((error) => {
        console.error(error)
      })
  }

export const getAllNewItem =
  () => {
    return fetch(`https://pokedexrn-api.herokuapp.com/itemlist`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
      .catch((error) => {
        console.error(error)
      })
  }

export const getItem =
  (idDex) => {
    return fetch(`https://pokedexrn-api.herokuapp.com/item/${idDex}`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
      .catch((error) => {
        console.error(error)
      })
  }

export const getMove =
  (idDex) => {
    return fetch(`https://pokedexrn-api.herokuapp.com/move/${idDex}`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
      .catch((error) => {
        console.error(error)
      })
  }

export const getAllMoves =
  () => {
    return fetch(`https://pokedexrn-api.herokuapp.com/movelist`)
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

export const getPokemon =
  (idDex) => {
    return fetch(`https://pokedexrn-api.herokuapp.com/pokemon/${idDex}`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
      .catch((error) => {
        console.error(error)
      })
  }
