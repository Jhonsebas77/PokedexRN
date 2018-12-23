import React, { Component } from 'react'
import { Text, View } from 'react-native'
// import { getComponentStyle } from '../../Helpers/Stylus'
// import style from './style'

// const styles = getComponentStyle(style)
export default class Abilities extends Component<AbilitiesProps, AbilitiesState> {
    constructor(props) {
        super(props)
    }
    render() {
        const { data = [] } = { ...this.props }
        const [pokemon_abilities] = data
        const { is_hidden = false, ability = {} } = pokemon_abilities
        const { name = '', description = '' } = { ...ability }
        return (
            <View style={{ marginRight: 8, paddingLeft: 2 }}>
                {is_hidden &&
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                        {`[Hidden Ability] \n ${name}:`} <Text style={{ color: 'black', textAlign: 'center', paddingTop: 10 }}>
                            {`${description}`}</Text>
                    </Text>}
                {!is_hidden &&
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                        {`${name}:`} <Text style={{ color: 'black', textAlign: 'center', paddingTop: 10 }}>
                            {`${description}`}</Text>
                    </Text>}
            </View >
        )
    }
}
