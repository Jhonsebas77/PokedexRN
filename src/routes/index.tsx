import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import PokemonDetail from './../components/Detail_Pokemon'
import MoveDetail from './../components/Detail_Move'
import Home from './../components/Home'
import Items from './../components/List_Item'
import Pokemon from './../components/List_Pokemon'
import Moves from './../components/List_Move'
import More from './../components/More'
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