import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import MenuItem from '../../components/MenuItem'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../Helpers/Colors'
import styles from './style'

export default class Home extends Component<any, any> {
    render() {
        return (
            <View>
                <View style={styles.container}>
                <LinearGradient colors={[Colors.background, Colors.background1]} style={styles.loading} >
                        <View style={styles.contentContainer}>
                            <View style={styles.menuItem}>
                                <TouchableOpacity onPress={() => { Actions.Items() }}>
                                    <MenuItem name={'ItemDex'} icon={require('../../Assets/images/Icon_Item.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menuItem}>
                                <TouchableOpacity onPress={() => { Actions.Pokemon() }}>
                                    <MenuItem name={'Pokedex'} icon={require('../../Assets/images/Icon_Pokedex.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menuItem}>
                                <TouchableOpacity onPress={() => { Actions.Moves() }}>
                                    <MenuItem name={'Movimientos'} icon={require('../../Assets/images/Icon_Moves.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        )
    }
}