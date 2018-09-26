import React, { Component } from 'react'
import { Text, FlatList, View, TouchableOpacity, ImageBackground } from 'react-native'
import { getAllPokemon, getPokemonGO } from '../../util/api'
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
            PkmnGO: [],
            loaded: false
        }
    }

    async componentWillMount() {
        let PkmnGO = await getPokemonGO()
        let pokemones = await getAllPokemon()
        this.setState({ pokemones, PkmnGO, loaded: true })
    }

    renderMiddle() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{'POKÉDEX'}</Text>
            </View>
        )
    }

    getTypeFromGO(PkmnGO, index) {
        if (PkmnGO) {
            const typeGO1 = PkmnGO.pokemon ? PkmnGO.pokemon[index - 1].type[0] : '---'
            const typeGO2 = PkmnGO.pokemon && PkmnGO.pokemon[index - 1] ? PkmnGO.pokemon[index - 1].type[1] : undefined
            const typeGO = [typeGO1, typeGO2]
            return typeGO
        }
    }

    renderLoadingView() {
        return (
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={'Cargando la Pokedex'} />
        )
    }

    render() {
        const { loaded, pokemones, PkmnGO } = this.state
        const { results } = pokemones
        const algo = PkmnGO ? this.getTypeFromGO(PkmnGO, 4) : '---'
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