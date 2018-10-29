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
    return fetch(`http://localhost:5034/pokedex`)
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
    return fetch(`http://localhost:5034/itemlist`)
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
    return fetch(`http://localhost:5034/item/${idDex}`)
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
    return fetch(`http://localhost:5034/move/${idDex}`)
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
    return fetch(`http://localhost:5034/movelist`)
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
