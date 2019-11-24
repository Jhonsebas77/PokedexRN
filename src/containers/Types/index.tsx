import React, { Component } from 'react'
import { Text, View, FlatList, ImageBackground, Image } from 'react-native'
// import { Text,  View, TouchableOpacity } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
// import MenuItem from '../../components/MenuItem'
// import { Actions } from 'react-native-router-flux'
import { getType } from '../../util/api'
import _ from '../../Helpers/Utilities'
import Loading from '../../components/Loading'
import ItemType from '../../components/ItemType'
import NavBarSimple from '../../components/NavBar/Simple'
import style from './style'

const styles = getComponentStyle(style)
export default class Types extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            type: [],
            loaded: false
        }
    }

    async componentWillMount() {
        let responseType = await getType()
        this.setState({ type: responseType, loaded: true })
    }
    renderMiddle() {
        return (
            <View style={styles.contentTitle}>
                <Text style={styles.title}>{'Tipos'}</Text>
            </View>
        )
    }

    renderLoadingView() {
        return (
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={'Cargando la Pokedex'} />
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
    render() {
        const { loaded = false, type = [] } = { ...this.state }
        if (!loaded) {
            return this.renderLoadingView()
        }
        if (type === undefined) {
            return this.renderFailInternet()
        }
        return (
            <View style={styles.loading} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} isHome={true} />
                <View style={styles.contentItemPokemon}>
                    <FlatList
                        data={type}
                        keyExtractor={(item) => (item as any).index}
                        renderItem={({ item, index }) =>
                            <ItemType
                                number={index}
                                name={(item as any).name}
                            />
                        } />

                </View>
            </View>
        )
    }
}