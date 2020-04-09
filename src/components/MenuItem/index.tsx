import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
export default class MenuItem extends Component<MenuItemProps> {
    constructor(props) {
        super(props)
    }
    render() {
        const { name = '' } = { ...this.props }
        return (
            <View style={styles.item}>
                <Text>{name}</Text>
            </View>
        )
    }
}
