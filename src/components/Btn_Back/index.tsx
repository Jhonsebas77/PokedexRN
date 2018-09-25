import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './style'

export default ({ onBack = (() => Actions.pop()) }: any) => {
    return (
            <TouchableOpacity onPress={onBack}
                activeOpacity={0.9}>
                <Image style={styles.sprite} source={require('../../Assets/images/Btn_Back.png')}/>
            </TouchableOpacity>
    )
}