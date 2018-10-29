import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { getURL, getMove } from '../../util/api'
import { newString } from '../../Helpers/Validators'
import _ from '../../Helpers/Utilities'
import NavBarSimple from '../../components/NavBar/Simple'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../Helpers/Colors'
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
        const { name } = this.state.move
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{name ? `${newString(name)}` : 'Move Detail'}</Text>
            </View>
        )
    }

    render() {
        const { accuracy = 0, battleType = {}, basePower = 0, pp = 0, category = {}, effect_entries = {} } = this.state.move
        return (
            <LinearGradient colors={[Colors.background, Colors.background1]} style={styles.loading} >
                <NavBarSimple
                    icon={'back'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View style={styles.head}>
                    <View style={{ flexDirection: 'row' }}>
                        {battleType &&
                            <View style={styles.typeContainer}>
                                <Image style={styles.type} source={{ uri: battleType.sprite }} />
                            </View>
                        }
                        {category && <View style={styles.typeContainer}>
                            <Image style={styles.type} source={{ uri: category.sprite }} />
                        </View>}
                    </View>
                </View >
                <View style={styles.item}>
                    <Text>
                        {effect_entries ? `${effect_entries.short_effect} ` : ''}
                    </Text>
                    <Text>
                        {effect_entries ? `${effect_entries.effect} ` : ''}
                    </Text>
                </View>
                <View style={styles.item}>
                    <Text>
                        {accuracy ? `accuracy: ${accuracy} ` : '-- -----'}
                    </Text>
                    <Text>
                        {basePower ? `power: ${basePower} ` : '-- -----'}
                    </Text>
                    <Text>
                        {pp && `pp: ${pp} `}
                    </Text>
                </View>
            </LinearGradient >
        )
    }
}
