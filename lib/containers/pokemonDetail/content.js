import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getPokemonURL } from '../../util/api';
export default class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        };
    }
    async componentWillMount() {
        let pokemonUrl = this.props.item.url;
        let pokemon = await getPokemonURL(pokemonUrl);
        console.log('==============================');
        console.log('POKEMON SELECT');
        console.log(pokemon);
        console.log('==============================');
        this.setState({ pokemon });
    }
    getAbilities(abilities) {
        Object.keys(abilities).map((item, index) => {
            return React.createElement(Text, { key: `${index}` }, item);
        });
    }
    render() {
        const { name, id, abilities } = this.state.pokemon;
        console.log('POKEMON this.state.pokemon', this.state.pokemon);
        console.log('POKEMON abilities', abilities);
        return (React.createElement(View, null,
            React.createElement(TouchableOpacity, { onPress: () => { Actions.pop(); } },
                React.createElement(Text, null, "BACK")),
            React.createElement(Text, null, `#${id} ${name}`),
            React.createElement(Text, null, abilities ? this.getAbilities(abilities) : 'Ninguna')));
    }
}
