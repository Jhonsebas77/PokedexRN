import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getPokemonURL } from '../../util/api'

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
        console.log('==============================')
        console.log('POKEMON SELECT')
        console.log(pokemon)
        console.log('==============================')
        this.setState({ pokemon })
    }

    getAbilities(abilities) {
        Object.keys(abilities).map((item, index) => {
            return <Text key={`${index}`}>{item}</Text>
        })
    }

    render() {
        const { name, id, abilities } = this.state.pokemon
        console.log('POKEMON this.state.pokemon', this.state.pokemon)
        console.log('POKEMON abilities', abilities)
        // return passengers.map((item) => {
        return (
            <View >
                <TouchableOpacity
                    // style={styles.btnContainer}
                    onPress={() => { Actions.pop() }}>
                    <Text>BACK</Text>
                </TouchableOpacity>
                <Text>
                    {`#${id} ${name}`}
                </Text>
                <Text>
                    {
                        abilities ? this.getAbilities(abilities) : 'Ninguna'
                    }

                    {/* {this.state.pokemon.types[0] ? this.state.pokemon.types[0].type.name : '--'}
                    {this.state.pokemon.types[1] ? this.state.pokemon.types[1].type.name : '--'} */}

                    {/* {this.state.pokemon.types[0].type.name} */}
                </Text>
            </View >
        )
    }
}
