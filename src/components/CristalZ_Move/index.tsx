import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
export default class Cristalzmove extends Component<any, any> {
    constructor(props) {
        super(props)
    }
    render() {
        const { basePower, effect, name, urlSprite } = this.props

        return (
            <View style={styles.itemPokemon}>
                <Text style={styles.title}>{'CRISTAL Z'} </Text>
                <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', paddingHorizontal: 10 }} >{name} </Text>
                        <Text style={{ color: 'white', fontWeight: 'bold', paddingHorizontal: 10 }} >{`Poder Base: ${basePower}`} </Text>
                    </View>
                    <View style={styles.spriteContainer}>
                        {urlSprite ?
                            <Image style={styles.sprite} source={{ uri: urlSprite }} /> :
                            <Image style={styles.sprite} source={require('../../Assets/images/NoMiniSprite.png')} />
                        }
                    </View>
                </View>
                <Text style={{ color: 'white', fontWeight: 'bold', paddingHorizontal: 10 }} >{effect} </Text>
            </View>
        )
    }
}
