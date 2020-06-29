import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { getComponentStyle } from '../../../Helpers/Stylus'
import _ from '../../../Helpers/Utilities'
import Abilities from './Abilities'
import style from './hability_pokemon.style'

const styles = getComponentStyle(style)
export default function HabilityPokemon(props: HabilityPkmnProps) {
    const { habilities = [] } = { ...props }
    return (
        <View style={styles.containerAbility}>
            <Text style={styles.titleCardInfo}> {'Habilidad'} </Text>
            <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                data={habilities}
                keyExtractor={(item) => (item as any).index}
                renderItem={({ item }: any) => <Abilities data={item} />}
            />
        </View>
    )
}
