import React from 'react'
import { View, Text, Image } from 'react-native'
import { getComponentStyle } from '../../../Helpers/Stylus'
import style from './menu_Item.style'

const styles = getComponentStyle(style)
export default ({ name = '', image = '' }: MenuItemProps) => {
    return (
        <View style={styles.itemMove}>
            <Image style={styles.type} source={image} />
            <Text style={styles.textName}> {name} </Text>
        </View>
    )
}
