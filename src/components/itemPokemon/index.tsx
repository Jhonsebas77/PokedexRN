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
        const { number = '', name = '', spriteSource = '', typeOneSource = {}, typeTwoSource = {} } = { ...this.props }
        return (
            <View style={styles.itemPokemon}>
                <View style={styles.numberSprite}>
                    <Text style={styles.textNumber} > {number} </Text>
                    <View style={styles.spriteContainer}>
                        {spriteSource ?
                            <Image style={styles.sprite} source={spriteSource} /> :
                            <Image style={styles.sprite} source={require('../../Assets/images/NoMiniSprite.png')} />
                        }
                    </View>
                    <Text style={styles.textName}> {name} </Text>
                </View>
                <View style={styles.typeOneContainer}>
                    <Image style={styles.type} source={typeOneSource} />
                    {!!typeTwoSource.uri && <Image style={styles.type} source={typeTwoSource} />}
                </View>
            </View>
        )
    }
}
