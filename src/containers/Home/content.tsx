/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
// import styles from './style'

// type Props = {};
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemones: []
        }
    }
    async componentWillMount() {
        console.log('HOla Mundo')
        // const { iAtaOrigin, iAtaDestination, dateIda } = this.props

        let pokemones = await getAllPokemon()
        let pokemon = await getPokemonData('5')
        this.setState({ pokemones, pokemon })
    }

    render() {
        return (
            <View>
                <Text>
                    HOME POKEDEX
                </Text>
                <View>
                    <FlatList
                        data={this.state.pokemones.results}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                // style={styles.btnContainer}
                                onPress={() => { Actions.PokemonDetail({ item }) }}>
                                <ItemPokemon name={item.name} />
                            </TouchableOpacity>
                        } />
                </View>
            </View>
        )
    }
}

