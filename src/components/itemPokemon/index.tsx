import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'

export default class ItemPokemon extends Component<ChipProps, ChipState> {
    constructor(props) {
        super(props)
    }
    render() {
        const { name, imageSource } = this.props
        return (
            <View style={styles.itemPokemon}>
                <View style={styles.spriteContainer}>
                    <Image style={styles.sprite} source={imageSource} />
                </View>
                <Text> {name} </Text>
            </View>
        )
    }
}
