import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { getURL } from '../../util/api'
import { newString, getTypeSource, getTypeMoveSource } from '../../Helpers/Validators'
import _ from '../../Helpers/Utilities'
import NavBarSimple from '../../components/NavBar/Simple'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../Helpers/Colors'
import styles from './style'

export default class MoveDetail extends Component<PkmnDetailProps, PkmnDetailState> {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: []
        }
        this.renderType = this.renderType.bind(this)
        this.renderCategory = this.renderCategory.bind(this)
    }

    async componentWillMount() {
        let pokemonUrl = this.props.item.url
        let pokemon = await getURL(pokemonUrl)
        this.setState({ pokemon })
    }

    renderType(type) {
        const url = getTypeSource(type)
        return (
            <View style={styles.typeContainer}>
                <Image style={styles.type} source={{ uri: url }} />
            </View>
        )
    }

    renderCategory(type) {
        const url = getTypeMoveSource(type)
        return (
            <View style={styles.typeContainer}>
                <Image style={styles.type} source={{ uri: url }} />
            </View>
        )
    }

    renderMiddle() {
        const { name } = this.state.pokemon
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{name ? `${newString(name)}` : 'Move Detail'}</Text>
            </View>
        )
    }

    render() {
        const { accuracy, type, power, pp, damage_class, effect_entries } = this.state.pokemon
        return (
            <LinearGradient colors={[Colors.background, Colors.background1]} style={styles.loading} >
                <NavBarSimple
                    icon={'back'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View style={styles.head}>
                    <View style={{ flexDirection: 'row' }}>
                        {type && this.renderType(type.name)}
                        {damage_class && this.renderCategory(damage_class.name)}
                    </View>
                </View >
                <View style={styles.item}>
                    <Text>
                        {effect_entries ? `${effect_entries[0].short_effect} ` : ''}
                    </Text>
                </View>
                <View style={styles.item}>
                    <Text>
                        {accuracy && power && pp ? `accuracy: ${accuracy}   power: ${power} pp: ${pp} ` : '-- -----'}
                    </Text>
                </View>
            </LinearGradient >
        )
    }
}
