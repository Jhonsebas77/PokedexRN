import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
// import HotelDetailPicture from '../Containers/HotelDetailPicture/content'
import pokemonDetail from '../containers/pokemonDetail/content'
import Home from '../containers/Home/content'
// import NavBar from '../Components/NavBar/'
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='Home' component={Home} />
          <Scene key='PokemonDetail' component={pokemonDetail} hideNavBar={true} />
        </Stack>
      </Router>
    )
  }
}