import React from 'react'
import { View, Text } from 'react-native'
import { getComponentStyle } from '../../../Helpers/Stylus'
import _ from '../../../Helpers/Utilities'
import style from './information_pokemon.style'

const styles = getComponentStyle(style)
export default function InformationPokemon(props: InformationPkmnProps) {
    const { flavor_text = '' } = { ...props }
    return (
        <View style={styles.containerInfoPkmn}>
            <Text style={styles.titleCardInfo}> {'Informacion'}  </Text>
            <Text style={styles.textStats}>{flavor_text}</Text>
        </View>
    )
}
