import React, { Component } from 'react'
import {
    Text,
    FlatList,
    View,
    TouchableOpacity
} from 'react-native'
import { getAllPokemon } from '../../util/api'
import ItemPokemon from '../../components/itemPokemon'
import { Actions } from 'react-native-router-flux'
import _ from '../../Helpers/Utilities'
import Loading from '../../components/Loading';
import styles from './style'

export default class Pokemon extends Component<any, any> {
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

    renderLoadingView() {
        return (
            <Loading imageLoading={require('../../Assets/images/Loading2.jpg')} textLoading={'Cargando la Pokedex'} />
        )
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <View>
                <Text> {`Pokemones`}</Text>
                <View style={styles.container}>
                    <FlatList
                        data={this.state.pokemones.results}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => { Actions.PokemonDetail({ item }) }}>
                                <ItemPokemon name={_.capitalize(item.name)} />
                            </TouchableOpacity>
                        } />
                </View>
            </View>
        )
    }
}

