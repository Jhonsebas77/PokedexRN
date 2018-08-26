var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getPokemonURL } from '../../util/api';
import styles from './style';
export default class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        };
    }
    componentWillMount() {
        return __awaiter(this, void 0, void 0, function* () {
            let pokemonUrl = this.props.item.url;
            let pokemon = yield getPokemonURL(pokemonUrl);
            this.setState({ pokemon });
        });
    }
    getAbilities(abilities) {
        Object.keys(abilities).map((item, index) => {
            return React.createElement(Text, { key: `${index}` }, item);
        });
    }
    render() {
        const { name, id, abilities } = this.state.pokemon;
        return (React.createElement(View, { style: styles.container },
            React.createElement(TouchableOpacity, { onPress: () => { Actions.pop(); } },
                React.createElement(Text, null, "BACK")),
            React.createElement(Text, null, id && name ? `#${id} ${name}` : '-- -----'),
            React.createElement(Text, null, abilities ? this.getAbilities(abilities) : 'Ninguna')));
    }
}
