import React, { Component } from 'react'
import { Text, FlatList, View, TouchableOpacity } from 'react-native'
import { getAllPokemon } from '../../util/api'
import ItemPokemon from '../../components/itemPokemon'
import { Actions } from 'react-native-router-flux'
import _ from '../../Helpers/Utilities'
import Loading from '../../components/Loading'
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

    getSourceImage(id) {
        const number = (id < 10 ? '00' : id < 100 ? '0' : '') + id
        let url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${number}.png`
        return url
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
            <View>
                <Text> {`Pokemones`}</Text>
                <View style={styles.container}>
                    <FlatList
                        data={results}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                onPress={() => { Actions.PokemonDetail({ item, index }) }}>
                                <ItemPokemon
                                    name={_.capitalize((item as any).name)}
                                    imageSource={{ uri: this.getSourceImage(index + 1) }}
                                />
                            </TouchableOpacity>
                        } />
                </View>
            </View>
        )
    }
}

