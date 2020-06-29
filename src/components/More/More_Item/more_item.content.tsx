import React from 'react'
import { View, Text } from 'react-native'
import { getComponentStyle } from '../../../Helpers/Stylus'
import style from './more_item.style'

const styles = getComponentStyle(style)
export default function MenuItem(props: MoreItemProps) {
    const { name = '' } = { ...props }
    return (
        <View style={styles.item}>
            <Text>{name}</Text>
        </View>
    )
}
