import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'

export default class ItemPokemon extends Component<ItemPkmnProps, ItemPkmnState> {
    constructor(props) {
        super(props)
    }
    render() {
        const { number, name, spriteSource, typeOneSource, typeTwoSource } = this.props
        return (
            <View style={styles.itemPokemon}>
                <View style={styles.numberSprite}>
                    <Text style={{ color: 'white', fontWeight: 'bold', paddingHorizontal: 10 }} > {number} </Text>
                    <View style={styles.spriteContainer}>
                        <Image style={styles.sprite} source={spriteSource} />
                    </View>
                    <Text style={{ color: 'white' }}> {name} </Text>
                </View>
                <View style={styles.typeContainer}>
                    <Image style={styles.type} source={typeOneSource} />
                    <Image style={styles.type} source={typeTwoSource} />
                </View>
            </View>
        )
    }
}
