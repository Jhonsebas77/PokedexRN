import React, { useContext } from 'react'
import { View, Text, Image } from 'react-native'
import { getComponentStyle } from '../../../Helpers/Stylus'
import { ThemeContext } from '../../../Helpers/Theme/theme.context'
import style from './item_Pokemon.style'

const styles = getComponentStyle(style)
export default function ItemPokemon(props: ItemPkmnProps) {
    const { number = '', name = '', spriteSource = '', typeOneSource = {}, typeTwoSource = {} } = { ...props }
    const { theme = {} } = useContext(ThemeContext)
    const { backgroundColorItem = '', textColor = '' } = { ...theme }
    return (
        <View style={[styles.itemPokemon, { backgroundColor: backgroundColorItem }]}>
            <View style={styles.numberSprite}>
                <Text style={[styles.textNumber, { color: textColor }]} > {number} </Text>
                <View style={styles.spriteContainer}>
                    {spriteSource ?
                        <Image style={styles.sprite} source={spriteSource} /> :
                        <Image style={styles.sprite} source={require('./../../../Assets/images/NoMiniSprite.png')} />
                    }
                </View>
                <Text style={[styles.textName, { color: textColor }]}> {name} </Text>
            </View>
            <View style={styles.typeOneContainer}>
                <Image style={styles.type} source={typeOneSource} />
                {!!typeTwoSource.uri && <Image style={styles.type} source={typeTwoSource} />}
            </View>
        </View>
    )
}
