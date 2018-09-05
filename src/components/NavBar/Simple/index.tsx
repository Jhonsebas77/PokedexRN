import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './style'

export default ({ contentLeft, contentRight, onBack = (() => Actions.pop()), contentCenter }: any) => {
    const rightTitle = contentRight
    return (
        <View style={styles.navBar}>
            <TouchableOpacity onPress={onBack}
                activeOpacity={0.9}>
                {contentLeft ? <Text style={styles.subbutton}>{contentLeft}</Text> : undefined}
            </TouchableOpacity>
            <View >
                {contentCenter}
            </View>
            {contentRight ?
                <TouchableOpacity onPress={contentRight.onPress}
                    activeOpacity={0.9} disabled={!contentRight.enable}>
                    <Text style={styles.subbutton}>{rightTitle}</Text>
                </TouchableOpacity>
                : <View style={styles.empty} />}
        </View >
    )
}