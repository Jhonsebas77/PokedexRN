import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'

export default class ItemPokemon extends Component<ChipProps, ChipState> {
    constructor(props) {
        super(props)
    }
    render() {
        const { name } = this.props
        return (
            <View style={styles.item}>
                <View>
                    <Image style={styles.sprite} source={require('../../Assets/images/Icon_Item.png')} />
                </View>
                <View>
                    <Text style={styles.nameItem}> {name} </Text>
                    <Text> {'Descripcion Item'} </Text>
                </View>
            </View>
        )
    }
}
