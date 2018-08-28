import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

export default class ItemPokemon extends Component<ChipProps, ChipState> {
    constructor(props) {
        super(props)
    }
    render() {
        const { name } = this.props
        // ({ name }) => {
        return (
            <View style={styles.item}>
                <Text> {name} </Text>
            </View>
        )
    }
}
