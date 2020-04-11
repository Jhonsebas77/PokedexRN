import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { getComponentStyle } from './../../../Helpers/Stylus'
import style from './cristalZ_Move.style'

const styles = getComponentStyle(style)
export default class Cristalzmove extends Component<any, any> {
    constructor(props) {
        super(props)
    }
    render() {
        const { basePower = '', effect = '', name = '', urlSprite = null } = { ...this.props }
        return (
            <View style={styles.itemPokemon}>
                <Text style={styles.title}>{'CRISTAL Z'} </Text>
                <View style={styles.containerSpriteTitle}>
                    <View style={styles.containerNameTitle}>
                        <Text style={styles.textNameTitle} >{name} </Text>
                        <Text style={styles.textNameTitle} >{`Poder Base: ${basePower}`} </Text>
                    </View>
                    <View style={styles.spriteContainer}>
                        {urlSprite ?
                            <Image style={styles.sprite} source={{ uri: urlSprite }} /> :
                            <Image style={styles.sprite} source={require('../../Assets/images/NoMiniSprite.png')} />
                        }
                    </View>
                </View>
                <Text style={styles.textEffect} >{effect} </Text>
            </View>
        )
    }
}
