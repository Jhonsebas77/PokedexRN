import React from 'react'
import { View, Text } from 'react-native'
import { getComponentStyle } from '../../../Helpers/Stylus'
import _ from '../../../Helpers/Utilities'
import LineEvolutive from './LineEvolutive'
import style from './evolution_pokemon.style'

const styles = getComponentStyle(style)
export default function EvolutionPokemon(props: EvolutionPkmnProps) {
    const { evolutionChain = [] } = { ...props }
    return (
        <View style={styles.containerEvolution}>
            <Text style={styles.titleCardInfo}>
                {'Evolucion'}
            </Text>
            <View style={styles.containerEvolutionLine}>
                <LineEvolutive data={evolutionChain} />
            </View>
        </View>
    )
}
