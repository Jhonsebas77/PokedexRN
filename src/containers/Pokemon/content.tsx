import React, { Component } from 'react'
import { Text, FlatList, View, TouchableOpacity, ImageBackground } from 'react-native'
import { getAllPokemon, getAllNewPokemon } from '../../util/api'
import ItemPokemon from '../../components/itemPokemon'
import { Actions } from 'react-native-router-flux'
import _ from '../../Helpers/Utilities'
import { paddingNumber } from '../../Helpers/Validators'
import Loading from '../../components/Loading'
import NavBarSimple from '../../components/NavBar/Simple'
import styles from './style'

export default class Pokemon extends Component<PkmnProps, PkmnState> {
    constructor(props) {
        super(props)
        this.state = {
            pokemones: [],
            pokedex: [],
            loaded: false
        }
    }

    async componentWillMount() {
        let pokedex = await getAllNewPokemon()
        let pokemones = await getAllPokemon()
        this.setState({ pokemones, pokedex, loaded: true })
    }

    renderMiddle() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{'POKÉDEX'}</Text>
            </View>
        )
    }

    renderLoadingView() {
        return (
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={'Cargando la Pokedex'} />
        )
    }

    render() {
        const { loaded, pokedex } = this.state
        if (!loaded) {
            return this.renderLoadingView()
        }
        return (
            <ImageBackground source={require('../../Assets/images/BG_Loading.png')} style={styles.loading}>
                <NavBarSimple
                    icon={'back'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View>
                    <FlatList
                        data={pokedex}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                onPress={() => { Actions.PokemonDetail({ item, index }) }}>
                                <ItemPokemon
                                    number={paddingNumber((item as any).idDex)}
                                    name={_.capitalize((item as any).name)}
                                    spriteSource={{ uri: (item as any).urlSprite }}
                                    typeTwoSource={{
                                        uri: (item as any).types && (item as any).types[0][0].type ? (item as any).types[0][0].type.urlSprite : undefined
                                    }}
                                    typeOneSource={{
                                        uri: (item as any).types && (item as any).types[1] &&
                                            (item as any).types[1][0].type ? (item as any).types[1][0].type.urlSprite : undefined
                                    }}
                                />
                            </TouchableOpacity>
                        } />
                </View>
            </ImageBackground>
        )
    }
}