import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
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
                        {spriteSource ?
                            <Image style={styles.sprite} source={spriteSource} /> :
                            <Image style={styles.sprite} source={require('../../Assets/images/NoMiniSprite.png')} />
                        }
                    </View>
                    <Text style={{ color: 'white', fontWeight: 'bold', paddingLeft: 10 }}> {name} </Text>
                </View>
                <View style={typeOneSource.uri === undefined ? styles.typeOneContainer : styles.typeTwoContainer}>
                    <Image style={styles.type} source={typeOneSource} />
                    <Image style={styles.type} source={typeTwoSource} />
                </View>
            </View>
        )
    }
}
