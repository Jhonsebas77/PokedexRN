import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class ItemPokemon extends Component<ChipProps, ChipState> {
    constructor(props) {
        super(props)
    }
    render() {
        const { name } = this.props
        // ({ name }) => {
        return (
            <View style={{ backgroundColor: 'blue', height: 100, width: 300 }} >
                <Text> {name} </Text>
            </View>
        )
    }
}
