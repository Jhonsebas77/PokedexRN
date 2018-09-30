import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'

export default class ItemItem extends Component<IitemProps, IitemState> {
    constructor(props) {
        super(props)
    }
    render() {
        const { name, itemSpriteSource } = this.props
        return (
            <View style={styles.item}>
                <View>
                {itemSpriteSource ?
                            <Image style={styles.sprite} source={itemSpriteSource} /> :
                            <Image style={styles.sprite} source={require('../../Assets/images/NoMiniSprite.png')} />
                        }
                </View>
                <View>
                    <Text style={styles.nameItem}> {name} </Text>
                </View>
            </View>
        )
    }
}
