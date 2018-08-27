import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
// import HotelDetailPicture from '../Containers/HotelDetailPicture/content'
import pokemonDetail from '../containers/pokemonDetail/content'
import Home from '../containers/Home/content'
import Items from '../containers/Item/content'
import Pokemon from '../containers/Pokemon/content'
// import NavBar from '../Components/NavBar/'
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='Home' component={Home} />
          <Scene key='PokemonDetail' component={pokemonDetail} hideNavBar={true} />
          <Scene key='Items' component={Items} hideNavBar={true} />
          <Scene key='Pokemon' component={Pokemon} hideNavBar={true} />
        </Stack>
      </Router>
    )
  }
}