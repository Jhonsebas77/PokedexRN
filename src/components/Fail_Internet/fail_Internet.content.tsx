import React from 'react'
import { View, Image, Text } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './fail_Internet.style'

const styles = getComponentStyle(style)
export default function Fail_Internet() {
    return (
        <View style={styles.contentLoading}>
            <Image style={styles.sprite} source={require('./../../Assets/images/No_Internet.png')} />
            <Text style={styles.title}>{'Lo sentimos, no hay conexion a internet'}</Text>
        </View>
    )
}