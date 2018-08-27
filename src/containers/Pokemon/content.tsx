import React, { Component } from 'react';
import {
    Text,
    FlatList,
    View,
    TouchableOpacity
} from 'react-native'
import { getAllPokemon, getPokemonData } from '../../util/api'
import ItemPokemon from '../../components/itemPokemon'
import { Actions } from 'react-native-router-flux'
import styles from './style'

export default class Pokemon extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            pokemones: []
        }
    }

    async componentWillMount() {
        let pokemones = await getAllPokemon()
        let pokemon = await getPokemonData('5')
        this.setState({ pokemones, pokemon })
    }

    render() {
        return (
            <View>
                <Text> {`Pokemones`}</Text>
                <View style={styles.container}>
                    <FlatList
                        data={this.state.pokemones.results}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => { Actions.PokemonDetail({ item }) }}>
                                <ItemPokemon name={item.name} />
                            </TouchableOpacity>
                        } />
                </View>
            </View>
        )
    }
}

