import React, { Component } from 'react'
import { View, Image } from 'react-native'
import styles from './style'

export default class MenuItem extends Component<MenuItemProps> {
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
