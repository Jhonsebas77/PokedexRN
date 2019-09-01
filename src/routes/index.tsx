import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import PokemonDetail from '../containers/pokemonDetail/content'
import MoveDetail from '../containers/MoveDetail/content'
import Home from '../containers/Home/content'
import Items from '../containers/Item'
import Pokemon from '../containers/Pokemon'
import Moves from '../containers/Move'
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
        </Stack>
      </Router>
    )
  }
}