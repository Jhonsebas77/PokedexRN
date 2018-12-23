import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
export default class LineEvolutive extends Component<AbilitiesProps, AbilitiesState> {
    constructor(props) {
        super(props)
    }
    render() {
        const { data = {} } = { ...this.props }
        const { next_evolution = [], prev_evolution = [], mini: mini_Sprite = '' } = { ...data }
        console.log('next_evolution', next_evolution)
        console.log('prev_evolution', prev_evolution)
        console.log('mini_Sprite', mini_Sprite)
        return (
                <View style={styles.spriteContainer}>
                    {mini_Sprite ?
                        <Image style={styles.sprite} source={{ uri: mini_Sprite }} /> :
                        <Image style={styles.sprite} source={require('../../Assets/images/NoMiniSprite.png')} />
                    }
                </View>
        )
    }
}
