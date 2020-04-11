import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import MenuItem from '../MenuItem'
import { Actions } from 'react-native-router-flux'
import _ from '../../Helpers/Utilities'
import Loading from '../Loading'
import NavBarSimple from '../NavBar/Simple'
import style from './more.style'

const styles = getComponentStyle(style)
export default class More extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {}
    }

    renderMiddle() {
        return (
            <View style={styles.contentTitle}>
                <Text style={styles.title}>{'MÁS'}</Text>
            </View>
        )
    }

    renderLoadingView() {
        return (
            <Loading imageLoading={require('./../../Assets/images/BG_Loading.png')} textLoading={'Cargando la Pokedex'} />
        )
    }

    render() {
        return (
            <View style={styles.loading} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} isHome={true} />
                <View style={styles.contentItemPokemon}>
                    <TouchableOpacity onPress={() => { Actions.Types() }}>
                        <MenuItem name={'Ventajas de Tipos'} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}