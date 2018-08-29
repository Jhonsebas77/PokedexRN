import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'

export default class MenuItem extends Component<ItemProps> {
    constructor(props) {
        super(props)
    }
    render() {
        const { name, icon } = this.props
        return (
            <View style={styles.item}>
                <View>
                    <Text> {name} </Text>
                </View>
                <View style={styles.spriteContainer}>
                    <Image style={styles.sprite} source={icon} />
                </View>
            </View>
        )
    }
}
