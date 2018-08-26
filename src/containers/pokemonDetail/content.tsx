import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getPokemonURL } from '../../util/api'
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

    getAbilities(abilities) {
        Object.keys(abilities).map((item, index) => {
            return <Text key={`${index}`}>{item}</Text>
        })
    }

    render() {
        const { name, id, abilities } = this.state.pokemon
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    // style={styles.btnContainer}
                    onPress={() => { Actions.pop() }}>
                    <Text>BACK</Text>
                </TouchableOpacity>
                <Text>
                    {id && name ? `#${id} ${name}` : '-- -----'}
                </Text>
                <Text>
                    {abilities ? this.getAbilities(abilities) : 'Ninguna'}
                </Text>
            </View >
        )
    }
}
