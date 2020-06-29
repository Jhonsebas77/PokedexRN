export const basePath = `https://pokedexrn-api.herokuapp.com` // TODO: BasePath ->`https://1cf637e4.ngrok.io`
export const getURL = async (url: string) => {
  return fetch(`${url}`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getAllPokemon = async () => {
  return fetch(`${basePath}/pokedex`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getAllNewItem = async () => {
  return fetch(`${basePath}/itemlist`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getItem = async (idDex: Number) => {
  return fetch(`${basePath}/item/${idDex}`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getMove = async (idDex: Number) => {
  return fetch(`${basePath}/move/${idDex}`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getAllMoves = async () => {
  return fetch(`${basePath}/movelist`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getAllItems = async () => {
  return fetch(`https://pokeapi.co/api/v2/item/?limit=200`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getPokemon = async (idDex: Number) => {
  return fetch(`${basePath}/pokemon/${idDex}`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getType = async () => {
  return fetch(`${basePath}/type`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.error(error)
    })
}
