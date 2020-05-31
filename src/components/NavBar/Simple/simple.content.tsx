import React from 'react'
import { View, ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getComponentStyle } from '../../../Helpers/Stylus'
import style from './simple.style'
import Btn_Back from '../../Btn_Back'

const styles = getComponentStyle(style)
export default ({ onBack = (() => Actions.pop()), contentCenter, isHome }: any) => {
    return (
        <ImageBackground source={require('../../../Assets/images/BG_Header.png')} style={styles.header}>
            <View style={isHome ? styles.navBar : styles.navBarBtn}>
                {!isHome && <Btn_Back onPress={onBack} />}
                <View style={styles.stylePadding}>
                    {contentCenter}
                </View>
                {!isHome && <View style={styles.empty} />}
            </View >
        </ImageBackground>
    )
}