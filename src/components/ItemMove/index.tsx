import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'

export default class ItemPokemon extends Component<ItemMoveProps, ItemMoveState> {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, typeSource, categorySource, description } = this.props
        return (
            <View style={styles.itemMove}>
                <View style={styles.typeContainer}>
                    <Image style={styles.type} source={typeSource} />
                </View>
                <View style={styles.numberSprite}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}> {name} </Text>
                    <Text style={{ color: 'white' }}> {description} </Text>
                </View>
                <View style={styles.specs}>
                    <View style={styles.col1}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}> {'Att'} </Text>
                        <Text style={{ color: 'white' }}> {'120'} </Text>
                    </View>
                    <View style={styles.col1}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}> {'Acc'} </Text>
                        <Text style={{ color: 'white' }}> {'100'} </Text>
                    </View>
                    <View style={styles.col1}>
                        <Image style={styles.type} source={categorySource} />
                    </View>
                </View>
            </View>
        )
    }
}
