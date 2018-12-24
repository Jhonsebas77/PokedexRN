import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
export default class ChipSprites extends Component<MenuItemProps> {
    constructor(props) {
        super(props)
    }
    render() {
        const { icon } = this.props
        return (
            <View style={styles.item}>
                <View style={styles.spriteContainer}>
                    <Image style={styles.sprite} source={icon} />
                </View>
            </View>
        )
    }
}
