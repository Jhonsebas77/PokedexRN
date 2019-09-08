import React, { Component } from 'react'
import { Text, FlatList, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { getAllPokemon } from '../../util/api'
import { getComponentStyle } from '../../Helpers/Stylus'
import ItemPokemon from '../../components/itemPokemon'
import { Actions } from 'react-native-router-flux'
import _ from '../../Helpers/Utilities'
import { paddingNumber } from '../../Helpers/Tools'
import Loading from '../../components/Loading'
import NavBarSimple from '../../components/NavBar/Simple'
import style from './style'

const styles = getComponentStyle(style)
export default class Pokemon extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            newPokemonData: [],
            pokedex: [],
            loaded: false
        }
    }

    async componentWillMount() {
        let pokedex = await getAllPokemon()
        const newPokemonData = pokedex && this.preparePokemon(pokedex)
        this.setState({ newPokemonData, loaded: true })
    }

    renderMiddle() {
        return (
            <View style={styles.contentTitle}>
                <Text style={styles.title}>{'POKÉDEX'}</Text>
            </View>
        )
    }

    renderFailInternet() {
        return (
            <ImageBackground source={require('../../Assets/images/BG_Home.png')}
                style={styles.loading} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} />
                <View style={styles.contentLoading}>
                    <Image style={styles.sprite} source={require('../../Assets/images/No_Internet.png')} />
                    <Text style={styles.title}>{'Lo sentimos, no hay conexion a internet'}</Text>
                </View>
            </ImageBackground>
        )
    }

    renderLoadingView() {
        return (
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={'Cargando la Pokedex'} />
        )
    }

    preparePokemon(pokedex) {
        const newPokemonData = pokedex.map((pokemon) => {
            const { idDex = 0, name = '', url = '', urlSprite = '', types: [pokemonTypes] = {} } = { ...pokemon }
            const { typeOneName = '', typeOneURL = '', typeOneUrlSprite = '', typeTwoName = '', typeTwoURL = '', typeTwoUrlSprite = '' } = pokemonTypes
            return { idDex, name, url, urlSprite, typeOneName, typeOneURL, typeOneUrlSprite, typeTwoName, typeTwoURL, typeTwoUrlSprite }
        })
        return newPokemonData
    }

    render() {
        const { loaded = false, newPokemonData = [] } = { ...this.state }
        if (!loaded) {
            return this.renderLoadingView()
        }
        if (newPokemonData === undefined) {
            return this.renderFailInternet()
        }
        return (
            <View style={styles.loading} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} isHome={true} />
                <View style={styles.contentItemPokemon}>
                    <FlatList
                        data={newPokemonData}
                        keyExtractor={(item) => (item as any).index}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                onPress={() => { Actions.PokemonDetail({ item, index }) }}>
                                <ItemPokemon
                                    number={paddingNumber((item as any).idDex)}
                                    name={_.capitalize((item as any).name)}
                                    spriteSource={{ uri: (item as any).urlSprite }}
                                    typeTwoSource={{
                                        uri: (item as any).typeTwoUrlSprite ? (item as any).typeTwoUrlSprite : undefined
                                    }}
                                    typeOneSource={{
                                        uri: (item as any).typeOneUrlSprite ? (item as any).typeOneUrlSprite : undefined
                                    }}
                                />
                            </TouchableOpacity>
                        } />
                </View>
            </View>
        )
    }
}