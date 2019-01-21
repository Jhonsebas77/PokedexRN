import React from 'react'
import { View, Text, Image } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
export default ({ name = '', itemSpriteSource }: IitemProps) => {
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
