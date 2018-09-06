import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import PokemonDetail from '../containers/pokemonDetail/content'
import ItemDetail from '../containers/itemDetail/content'
import MoveDetail from '../containers/MoveDetail/content'
import Home from '../containers/Home/content'
import Items from '../containers/Item/content'
import Pokemon from '../containers/Pokemon/content'
import Moves from '../containers/Move/content'
// import NavBar from '../Components/NavBar/'
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='Home' component={Home} hideNavBar={true}/>
          <Scene key='PokemonDetail' component={PokemonDetail} hideNavBar={true} />
          <Scene key='ItemDetail' component={ItemDetail} hideNavBar={true} />
          <Scene key='MoveDetail' component={MoveDetail} hideNavBar={true} />
          <Scene key='Items' component={Items} hideNavBar={true} />
          <Scene key='Pokemon' component={Pokemon} hideNavBar={true} />
          <Scene key='Moves' component={Moves} hideNavBar={true} />
        </Stack>
      </Router>
    )
  }
}