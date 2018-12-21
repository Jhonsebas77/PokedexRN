import React from 'react'
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getComponentStyle } from '../../../Helpers/Stylus'
import style from './style'
import Btn_Back from '../../Btn_Back'

const styles = getComponentStyle(style)
export default ({ contentLeft, contentRight, onBack = (() => Actions.pop()), contentCenter, isHome }: any) => {
    const rightTitle = contentRight
    return (
        <ImageBackground source={require('../../../Assets/images/BG_Header.png')} style={styles.header}>
            <View style={styles.navBar}>
                {!isHome && <TouchableOpacity onPress={onBack}
                    style={styles.spriteContainer}
                    activeOpacity={0.9}>
                    {contentLeft ? <Text style={styles.subbutton}>{contentLeft}</Text> : <Btn_Back />}
                </TouchableOpacity>}
                <View style={{ paddingLeft: 20 }}>
                    {contentCenter}
                </View>
                {contentRight ?
                    <TouchableOpacity onPress={contentRight.onPress}
                        activeOpacity={0.9} disabled={!contentRight.enable}>
                        <Text style={styles.subbutton}>{rightTitle}</Text>
                    </TouchableOpacity>
                    : <View style={styles.empty} />}
            </View >
        </ImageBackground>
    )
}