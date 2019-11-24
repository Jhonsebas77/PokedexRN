import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
export default class ItemTypeItemtype extends Component<any, any> {
    constructor(props) {
        super(props)
    }
    render() {
        const { number = '', name = '', spriteSource = '', method = '' } = { ...this.props }
        return (
            <View style={styles.itemPokemon}>
                <Text style={styles.textStyle} >{`# ${number}`} </Text>
                <View style={styles.spriteContainer}>
                    {spriteSource ?
                        <Image style={styles.sprite} source={spriteSource} /> :
                        <Image style={styles.sprite} source={require('../../Assets/images/NoMiniSprite.png')} />
                    }
                </View>
                <View style={styles.containerNameMethod}>
                    <Text style={styles.textName}> {name} </Text>
                    <Text style={styles.textMethod}> {method} </Text>
                </View>
            </View>
        )
    }
}
