import React, { Component } from 'react'
import { Text, FlatList, View, TouchableOpacity, Image } from 'react-native'
import { getAllPokemon } from '../../util/api'
import ItemPokemon from '../../components/itemPokemon'
import { Actions } from 'react-native-router-flux'
import _ from '../../Helpers/Utilities'
import { paddingNumber } from '../../Helpers/Validators'
import Loading from '../../components/Loading'
import NavBarSimple from '../../components/NavBar/Simple'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../Helpers/Colors'
import styles from './style'

export default class Pokemon extends Component<PkmnProps, PkmnState> {
    constructor(props) {
        super(props)
        this.state = {
            pokedex: [],
            loaded: false
        }
    }

    async componentWillMount() {
        let pokedex = await getAllPokemon()
        this.setState({ pokedex, loaded: true })
    }

    renderMiddle() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{'POKÉDEX'}</Text>
            </View>
        )
    }

    renderFailInternet() {
        return (
            <LinearGradient colors={[Colors.background, Colors.background1]} style={styles.loading} >
                <NavBarSimple
                    icon={'back'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View style={{
                    flex: 1, justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center'
                }}>
                    <Image style={styles.sprite} source={require('../../Assets/images/No_Internet.png')} />
                    <Text style={styles.title}>{'Lo sentimos, no hay conexion a internet'}</Text>
                </View>
            </LinearGradient>
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
        if (this.state.pokedex === undefined) {
            return this.renderFailInternet()
        }
        return (
            <LinearGradient colors={[Colors.background, Colors.background1]} style={styles.loading} >
                <NavBarSimple
                    icon={'back'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View>
                    <FlatList
                        data={pokedex}
                        keyExtractor={(item) => (item as any).index}
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
            </LinearGradient>
        )
    }
}