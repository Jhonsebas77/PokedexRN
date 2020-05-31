import React, { Component } from 'react'
import { Text, View, FlatList, ImageBackground, Image } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import { getType } from '../../util/api'
import _ from '../../Helpers/Utilities'
import Loading_Screen from '../Loading'
import ItemType from './ItemTypeChart'
import NavBarSimple from '../NavBar/Simple'
import style from './typesChart.style'

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
            <Loading_Screen textLoading={'Cargando la Pokedex...'} />
        )
    }
    renderFailInternet() {
        return (
            <ImageBackground source={require('./../../Assets/images/BG_Home.png')}
                style={styles.loading} >
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
                <NavBarSimple contentCenter={this.renderMiddle()} isHome={true} />
                <View style={styles.contentItemPokemon}>
                    <FlatList
                        data={type}
                        keyExtractor={(item) => (item as any).index}
                        renderItem={({ item, index }) =>
                            <ItemType
                                number={index}
                                data={...item}
                            />
                        } />

                </View>
            </View>
        )
    }
}