import React, { Component } from 'react'
import { Text, FlatList, View, TouchableOpacity, ImageBackground } from 'react-native'
import { getAllPokemon } from '../../util/api'
import ItemPokemon from '../../components/itemPokemon'
import { Actions } from 'react-native-router-flux'
import _ from '../../Helpers/Utilities'
import { paddingNumber, getTypeSource, getMiniSpriteSource } from '../../Helpers/Validators'
import Loading from '../../components/Loading'
import NavBarSimple from '../../components/NavBar/Simple'
import styles from './style'

export default class Pokemon extends Component<PkmnProps, PkmnState> {
    constructor(props) {
        super(props)
        this.state = {
            pokemones: [],
            loaded: false
        }
    }

    async componentWillMount() {
        let pokemones = await getAllPokemon()
        this.setState({ pokemones, loaded: true })
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
        const { loaded, pokemones } = this.state
        const { results } = pokemones
        if (!loaded) {
            return this.renderLoadingView()
        }
        return (
            <ImageBackground source={require('../../Assets/images/BG_Loading.png')} style={styles.loading}>
                <NavBarSimple
                    icon={'back'}
                    contentLeft={'<'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View>
                    <FlatList
                        data={results}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                onPress={() => { Actions.PokemonDetail({ item, index }) }}>
                                <ItemPokemon
                                    number={paddingNumber(index + 1)}
                                    name={_.capitalize((item as any).name)}
                                    spriteSource={{ uri: getMiniSpriteSource(index + 1) }}
                                    typeOneSource={{ uri: getTypeSource('fire') }}
                                    typeTwoSource={{ uri: getTypeSource('water') }}
                                />
                            </TouchableOpacity>
                        } />
                </View>
            </ImageBackground>
        )
    }
}