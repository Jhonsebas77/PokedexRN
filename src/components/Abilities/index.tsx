import React from 'react'
import { Text, View } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
export default ({ data = [] }: AbilitiesProps) => {
    const [pokemon_abilities] = data
    const { is_hidden = false, ability = {} } = pokemon_abilities
    const { name = '', description = '' } = { ...ability }
    return (
        <View style={styles.containerAbility}>
            {is_hidden &&
                <Text style={styles.textTitle}>
                    {`[Oculta] \n ${name}:`} <Text style={styles.textDescription}>{`${description}`}</Text>
                </Text>}
            {!is_hidden &&
                <Text style={styles.textTitle}>
                    {`${name}:`} <Text style={styles.textDescription}>{`${description}`}</Text>
                </Text>}
        </View >
    )
}
