import React, { Component } from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import { getAllPokemon, getPokemonData } from '../../util/api';
import ItemPokemon from '../../components/itemPokemon';
import { Actions } from 'react-native-router-flux';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemones: []
        };
    }
    async componentWillMount() {
        console.log('HOla Mundo');
        let pokemones = await getAllPokemon();
        let pokemon = await getPokemonData('5');
        this.setState({ pokemones, pokemon });
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(Text, null, "HOME POKEDEX"),
            React.createElement(View, null,
                React.createElement(FlatList, { data: this.state.pokemones.results, renderItem: ({ item }) => React.createElement(TouchableOpacity, { onPress: () => { Actions.PokemonDetail({ item }); } },
                        React.createElement(ItemPokemon, { name: item.name })) }))));
    }
}
