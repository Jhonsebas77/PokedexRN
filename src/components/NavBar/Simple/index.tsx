import React from 'react'
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import { getComponentStyle } from '../../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
export default ({ contentRight, contentCenter }: any) => {
    const rightTitle = contentRight
    return (
        <ImageBackground source={require('../../../Assets/images/BG_Header.png')} style={styles.header}>
            <View style={styles.navBar}>
                <View style={styles.stylePadding}>
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