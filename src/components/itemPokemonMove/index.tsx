import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
export default class Itempokemonmove extends Component<any, any> {
    constructor(props) {
        super(props)
    }
    render() {
        const { number, name, spriteSource, method } = this.props
        return (
            <View style={styles.itemPokemon}>
                <Text style={{ color: 'white', fontWeight: 'bold', paddingHorizontal: 10 }} >{`# ${number}`} </Text>
                <View style={styles.spriteContainer}>
                    {spriteSource ?
                        <Image style={styles.sprite} source={spriteSource} /> :
                        <Image style={styles.sprite} source={require('../../Assets/images/NoMiniSprite.png')} />
                    }
                </View>
                <View style={{ flexDirection: 'column', marginRight: 20 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', paddingLeft: 10, fontSize: 20 }}> {name} </Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', paddingLeft: 10 }}> {method} </Text>
                </View>
            </View>
        )
    }
}
