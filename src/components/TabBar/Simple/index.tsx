import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { getComponentStyle } from '../../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
export default class Simple extends Component<TabSimpleProps, TabSimpleState> {

    renderLeft() {
        const { rAbilities } = this.props
        return (
            <TouchableOpacity style={styles.tabBtn} onPress={() => { rAbilities }}>
                <Text style={styles.tabText} >{'HABILIDADES'}</Text>
            </TouchableOpacity>
        )
    }
    renderMiddle() {
        const { rStats } = this.props
        return (
            <TouchableOpacity style={styles.tabBtn} onPress={() => { rStats }}>
                <Text style={styles.tabText} >{'STATS'}</Text>
            </TouchableOpacity>
        )
    }
    renderRight() {
        const { rMoves } = this.props
        return (
            <TouchableOpacity style={styles.tabBtn} onPress={() => { rMoves }}>
                <Text style={styles.tabText} >{'MOVIMIENTOS'}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.navBar}>
                <View style={styles.container1}>
                    <View style={styles.ContainerTitleNavBar}>
                        <Text style={styles.navBarTitle} >{'¿Que tipo de vuelo buscas?'}</Text>
                    </View>
                    <View style={styles.tabContainer}>
                        {this.renderLeft()}
                        {this.renderMiddle()}
                        {this.renderRight()}
                    </View>
                    <View style={{ backgroundColor: 'white', height: '100%', margin: 10, width: '100%' }}>

                    </View>
                </View>
            </View>
        )
    }
}
