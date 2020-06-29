import React from 'react'
import { View, Text } from 'react-native'
import { getComponentStyle } from '../../../Helpers/Stylus'
import _ from '../../../Helpers/Utilities'
import style from './stats_pokemon.style'

const styles = getComponentStyle(style)
export default function InformationPokemon(props: StatsPkmnProps) {
    const { stats = '' } = { ...props }
    const { attack = 0, defense = 0, hp = 0, special_attack = 0, special_defense = 0, speed = 0 } = { ...stats }
    return (
        <View style={styles.containerStats}>
            <Text style={styles.titleCardInfo}>  {'Estadisticas'} </Text>
            <View style={styles.textContainerColumnStats}>
                <Text style={styles.textStats}>
                    {`Ataque: ${attack}\n Defensa: ${defense}\n Salud: ${hp}`}
                </Text>
                <Text style={styles.textStats}>
                    {`Ataque Especial: ${special_attack}\n Defensa Especial: ${special_defense}\n Velocidad: ${speed}\n`}
                </Text>
            </View>
        </View>
    )
}
