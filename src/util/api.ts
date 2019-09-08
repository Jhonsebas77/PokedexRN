export const basePath = `https://pokedexrn-api.herokuapp.com` // `https://1cf637e4.ngrok.io`
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
    return fetch(`${basePath}/pokedex`)
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
    return fetch(`${basePath}/itemlist`)
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
    return fetch(`${basePath}/item/${idDex}`)
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
    return fetch(`${basePath}/move/${idDex}`)
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
    return fetch(`${basePath}/movelist`)
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
    return fetch(`${basePath}/pokemon/${idDex}`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
      .catch((error) => {
        console.error(error)
      })
  }
