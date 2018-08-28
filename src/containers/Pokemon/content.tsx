import React, { Component } from 'react'
import {
    Text,
    FlatList,
    View,
    TouchableOpacity
} from 'react-native'
import { getAllPokemon, getPokemonData } from '../../util/api'
import ItemPokemon from '../../components/itemPokemon'
import { Actions } from 'react-native-router-flux'
import _ from '../../Helpers/Utilities'
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
        this.setState({ pokemones })
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
                                <ItemPokemon name={_.capitalize(item.name)} />
                            </TouchableOpacity>
                        } />
                </View>
            </View>
        )
    }
}

