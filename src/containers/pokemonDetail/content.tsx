import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getPokemonURL } from '../../util/api'
import _ from '../../Helpers/Utilities'
import styles from './style'

export default class PokemonDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: []
        }
    }

    async componentWillMount() {
        let pokemonUrl = this.props.item.url
        let pokemon = await getPokemonURL(pokemonUrl)
        this.setState({ pokemon })
    }

    render() {
        const { name, id, types, sprites } = this.state.pokemon
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => { Actions.pop() }}>
                    <Text>BACK</Text>
                </TouchableOpacity>
                <View style={styles.item}>
                    <View style={styles.spriteContainer}>
                        {sprites ?
                            <Image style={styles.sprite}

                                source={{ uri: sprites.front_default }} />
                            : undefined}
                    </View>
                    <Text>
                        {id && name ? `#${id} ${_.capitalize(name)}` : '-- -----'}
                    </Text>
                    <Text>
                        {types && types[0] ? _.capitalize(types[0].type.name) : '----'}
                        {' '}
                        {types && types[1] ? _.capitalize(types[1].type.name) : ' '}
                    </Text>
                </View >
            </View >
        )
    }
}
