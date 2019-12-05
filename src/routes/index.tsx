import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import PokemonDetail from '../containers/PokemonDetail'
import MoveDetail from '../containers/MoveDetail'
import Home from '../containers/Home'
import Items from '../containers/ListItem'
import Pokemon from '../containers/ListPokemon'
import Moves from '../containers/ListMove'
import More from '../containers/More'
import Types from '../containers/TypesChart'
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='Home' component={Home} hideNavBar={true}/>
          <Scene key='PokemonDetail' component={PokemonDetail} hideNavBar={true} />
          <Scene key='MoveDetail' component={MoveDetail} hideNavBar={true} />
          <Scene key='Items' component={Items} hideNavBar={true} />
          <Scene key='Pokemon' component={Pokemon} hideNavBar={true} />
          <Scene key='Moves' component={Moves} hideNavBar={true} />
          <Scene key='More' component={More} hideNavBar={true} />
          <Scene key='Types' component={Types} hideNavBar={true} />
        </Stack>
      </Router>
    )
  }
}