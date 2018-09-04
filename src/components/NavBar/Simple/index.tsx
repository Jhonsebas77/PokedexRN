import React from 'react'
import { Text, View, TouchableOpacity, Platform } from 'react-native'
import { Actions } from 'react-native-router-flux'
import _ from '../../../Helpers/Utilities'
import styles from './style'

const isIos = Platform.OS === 'ios'
export default ({  contentLeft, contentRight, onBack = (() => Actions.pop()), children,
    justifyChildren = true }: any) => {
    const rightTitle = contentRight ? (isIos ? _.capitalize(contentRight.title) :
        _.upper(contentRight.title)) : ''
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={[styles.button, styles.buttonTittle]} onPress={onBack}
                    activeOpacity={0.9} testID={'btnNavBack'}>
                    <Text>{'<-'}</Text>
                    {contentLeft ?
                        <Text style={styles.subbutton}>{contentLeft}</Text>
                        : undefined
                    }
                </TouchableOpacity>
                <View style={justifyChildren}>
                    {children}
                </View>
                {
                    contentRight ?
                        <TouchableOpacity style={[styles.button, { opacity: contentRight.enable ? 1 : 0.5 }]} onPress={contentRight.onPress}
                            activeOpacity={0.9} testID={'btnNavBack'} disabled={!contentRight.enable}>
                            <Text style={contentRight.style ? contentRight.style : styles.subbutton}>{rightTitle}</Text>
                        </TouchableOpacity>
                        : <View style={styles.empty} />
                }
            </View>
        </View >
    )
}