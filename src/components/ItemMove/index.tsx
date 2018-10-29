import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'

export default class ItemPokemon extends Component<ItemMoveProps, ItemMoveState> {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, typeSource, categorySource, power, accuracy } = this.props
        return (
            <View style={styles.itemMove}>
                <View style={styles.typeContainer}>
                    <Image style={styles.type} source={typeSource} />
                </View>
                <View style={styles.numberSprite}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}> {name} </Text>
                </View>
                <View style={styles.specs}>
                    <View style={styles.col1}>
                        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5 }}> {'Att'} </Text>
                        <Text style={{ color: 'white', marginLeft: 5 }}> {power} </Text>
                    </View>
                    <View style={styles.col1}>
                        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5 }}> {'Acc'} </Text>
                        <Text style={{ color: 'white', marginLeft: 5 }}> {accuracy} </Text>
                    </View>
                    <View style={styles.col1}>
                        <Image style={styles.category} source={categorySource} />
                    </View>
                </View>
            </View>
        )
    }
}
