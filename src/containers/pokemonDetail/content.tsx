import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { getPokemonURL } from '../../util/api'
import _ from '../../Helpers/Utilities'
import NavBarSimple from '../../components/NavBar/Simple'
import styles from './style'

export default class PokemonDetail extends Component<PkmnDetailProps, PkmnDetailState> {
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
            <View >
                <NavBarSimple icon={'back'}
                    shadow={false} pressLeft={() => console.log('home')} contentLeft={'Back'}>
                    <Text style={styles.title}>{name ? `${_.capitalize(name)}` : 'Pokemon Detail'}</Text>
                </NavBarSimple>
                <View style={styles.container}>
                    <View style={styles.item}>
                        <View style={styles.spriteContainer}>
                            {sprites ?
                                <Image style={styles.sprite} source={{ uri: sprites.front_default }} /> :
                                <Image style={styles.sprite} source={require('../../Assets/images/Icon_Pokedex.png')} />
                            }
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
            </View >
        )
    }
}
