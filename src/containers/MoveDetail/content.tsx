import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { getMove } from '../../util/api'
import { newString } from '../../Helpers/Validators'
import NavBarSimple from '../../components/NavBar/Simple'
import LinearGradient from 'react-native-linear-gradient'
import { ColorType, GetColorType } from '../../Helpers/Colors'
import styles from './style'

export default class MoveDetail extends Component<PkmnDetailProps, PkmnDetailState> {
    constructor(props) {
        super(props)
        this.state = {
            move: []
        }
    }

    async componentWillMount() {
        let move = await getMove(this.props.item.idDex)
        this.setState({ move })
    }

    renderMiddle() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{'MOVIMIENTOS'}</Text>
            </View>
        )
    }

    render() {
        const { name = '', accuracy = 0, battleType = {}, basePower = 0, pp = 0, category = {}, effect_entries = {} } = this.state.move
        const colortype = battleType && ColorType(battleType.name)
        const borderColor = GetColorType(battleType.name)
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={battleType && colortype} style={styles.loading} >
                <NavBarSimple
                    icon={'back'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                {battleType &&
                    <View style={styles.typeContainer}>
                        <Image style={styles.type} source={{ uri: battleType.sprite }} />
                    </View>
                }
                <View style={[{ borderColor }, styles.head]}>
                    <View >
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.title}>{name ? `${newString(name)}` : 'Move Detail'}</Text>
                        </View>
                        <Text>
                            {effect_entries ? `${effect_entries.short_effect} ` : ''}
                        </Text>
                        {category && <View style={styles.categoryContainer}>
                            <Image style={styles.type} source={{ uri: category.sprite }} />
                        </View>}
                    </View>
                    <Text> {effect_entries ? `${effect_entries.effect} ` : ''} </Text>
                    <Text> {accuracy ? `accuracy: ${accuracy}% ` : '-- -----'}  </Text>
                    <Text>  {basePower ? `power: ${basePower} ` : '-- -----'} </Text>
                    <Text>  {pp && `pp: ${pp} `}  </Text>
                </View>
            </LinearGradient >
        )
    }
}