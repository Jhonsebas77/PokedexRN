var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component } from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import { getAllPokemon, getPokemonData } from '../../util/api';
import ItemPokemon from '../../components/itemPokemon';
import { Actions } from 'react-native-router-flux';
import styles from './style';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemones: []
        };
    }
    componentWillMount() {
        return __awaiter(this, void 0, void 0, function* () {
            let pokemones = yield getAllPokemon();
            let pokemon = yield getPokemonData('5');
            this.setState({ pokemones, pokemon });
        });
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(Text, null,
                " ",
                `HOME POKEDEX`),
            React.createElement(View, { style: styles.container },
                React.createElement(FlatList, { data: this.state.pokemones.results, renderItem: ({ item }) => React.createElement(TouchableOpacity, { onPress: () => { Actions.PokemonDetail({ item }); } },
                        React.createElement(ItemPokemon, { name: item.name })) }))));
    }
}
