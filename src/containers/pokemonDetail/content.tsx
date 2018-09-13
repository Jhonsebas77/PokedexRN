import React, { Component } from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import { getURL } from '../../util/api'
import { paddingNumber, getTypeSource, getNormalSpriteSource } from '../../Helpers/Validators'
import _ from '../../Helpers/Utilities'
import NavBarSimple from '../../components/NavBar/Simple'
import styles from './style'
import TabBarSimple from '../../components/TabBar/Simple'

export default class PokemonDetail extends Component<PkmnDetailProps, PkmnDetailState> {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: []
        }
        this.renderType = this.renderType.bind(this)
        this.renderSpritePokemon = this.renderSpritePokemon.bind(this)
    }

    async componentWillMount() {
        let pokemonUrl = this.props.item.url
        let pokemon = await getURL(pokemonUrl)
        this.setState({ pokemon })
    }

    renderType(type) {
        const url = getTypeSource(type)
        return (
            <View style={styles.typeContainer}>
                <Image style={styles.type} source={{ uri: url }} />
            </View>
        )
    }

    renderMiddle() {
        const { name, id } = this.state.pokemon
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{name ? `${_.capitalize(name)}` : 'Pokemon Detail'}</Text>
                <Text style={styles.titleId}>{id ? `#${paddingNumber(id)}` : '-- -----'}</Text>
            </View>
        )
    }

    renderSpritePokemon(id) {
        const url = getNormalSpriteSource(id)
        return (
            <ImageBackground source={require('../../Assets/images/BG_Holder_Pkmn.png')} style={styles.spriteContainer}>
                <Image style={styles.sprite} source={{ uri: url }} />
            </ImageBackground>
        )
    }

    render() {
        const { id, types, sprites, weight, height } = this.state.pokemon
        return (
            <ImageBackground source={require('../../Assets/images/BG_Loading.png')} style={styles.loading}>
                <NavBarSimple
                    icon={'back'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View style={styles.head}>
                    <View>
                        {sprites ?
                            this.renderSpritePokemon(id) :
                            <Image style={styles.sprite} source={require('../../Assets/images/Icon_Pokedex.png')} />
                        }
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {types && types[0] ? this.renderType(types[0].type.name) : undefined}
                        {types && types[1] ? this.renderType(types[1].type.name) : undefined}
                    </View>
                </View >
                {/* <View style={styles.item}>
                    <Text>
                        {weight && height ? `Peso: ${_.formatNumberDecimal(weight, 1)} Kg  Altura: ${_.formatNumberDecimal(height, 2)} m` : '-- -----'}
                    </Text>
                </View> */}
                <TabBarSimple
                    rAbilities={types && types[0] ? this.renderType(types[0].type.name) : undefined}
                    rStats={types && types[0] ? this.renderType(types[0].type.name) : undefined}
                    rMoves={types && types[0] ? this.renderType(types[0].type.name) : undefined}
                />
            </ImageBackground >
        )
    }
}
