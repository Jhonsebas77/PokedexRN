import React, { Component } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import pokemonDetail from '../containers/pokemonDetail/content';
import Home from '../containers/Home/content';
export default class Routes extends Component {
    render() {
        return (React.createElement(Router, null,
            React.createElement(Stack, { key: 'root' },
                React.createElement(Scene, { key: 'Home', component: Home }),
                React.createElement(Scene, { key: 'PokemonDetail', component: pokemonDetail, hideNavBar: true }))));
    }
}
