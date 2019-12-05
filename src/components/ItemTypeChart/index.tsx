import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'
import _ from '../../Helpers/Utilities'

const map = _.map
const styles = getComponentStyle(style)
export default class ItemType extends Component<any, any> {
    constructor(props) {
        super(props)
        this.validArray = this.validArray.bind(this)
    }
    validArray = (arr: any) => {
        return arr && _.arrayHasItems(arr)
    }
    renderStrengths() {
        const { strengths = [] } = { ...this.props.data }
        const [strengths_ = {}] = strengths
        const sprites = this.validArray(strengths) && map(strengths_, (item: any) => {
            const { urlSprite = '' } = { ...item }
            return (
                <View style={styles.spriteContainer}>
                    <Image style={styles.sprite} source={{ uri: urlSprite }} />
                </View>
            )
        })
        return this.validArray(strengths) && (
            <View style={{ alignItems: 'flex-start' }}>
                <Text style={styles.textName}> {`Fuerte`} </Text>
                <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
                    {sprites}
                </View>
            </View>
        )
    }
    renderWeaknesses() {
        const { weaknesses = [] } = { ...this.props.data }
        const [weaknesses_ = {}] = weaknesses
        const sprites = this.validArray(weaknesses) && map(weaknesses_, (item: any) => {
            const { urlSprite = '' } = { ...item }
            return (
                <View style={styles.spriteContainer}>
                    <Image style={styles.sprite} source={{ uri: urlSprite }} />
                </View>
            )
        })
        return this.validArray(weaknesses) && (
            <View style={{ alignItems: 'flex-start' }}>
                <Text style={styles.textName}> {`Debil`} </Text>
                <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
                    {sprites}
                </View>
            </View>
        )
    }
    renderVulnerables() {
        const { vulnerables = [] } = { ...this.props.data }
        const [weaknesses_ = {}] = vulnerables
        const sprites = this.validArray(vulnerables) && map(weaknesses_, (item: any) => {
            const { urlSprite = '' } = { ...item }
            return (
                <View style={styles.spriteContainer}>
                    <Image style={styles.sprite} source={{ uri: urlSprite }} />
                </View>
            )
        })
        return this.validArray(vulnerables) && _.arrayHasItems(vulnerables) && (
            <View style={{ alignItems: 'flex-start' }}>
                <Text style={styles.textName}> {`Neutro`} </Text>
                <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
                    {sprites}
                </View>
            </View>
        )
    }
    renderResistants() {
        const { resistants = null } = { ...this.props.data }
        const [weaknesses_ = {}] = resistants
        const _strenghs = this.validArray(resistants) && map(weaknesses_, (item: any) => {
            const { urlSprite = '' } = { ...item }
            return (
                <View style={styles.spriteContainer}>
                    <Image style={styles.sprite} source={{ uri: urlSprite }} />
                </View>
            )
        })
        return this.validArray(resistants) && (
            <View style={{ alignItems: 'flex-start' }}>
                <Text style={styles.textName}> {`No tiene efecto`} </Text>
                <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
                    {_strenghs}
                </View>
            </View>
        )
    }
    render() {
        const { name = '', sprite = null } = { ...this.props.data }
        return (
            <View>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <View style={styles.spriteContainer}>
                        {sprite ?
                            <Image style={styles.sprite} source={{ uri: sprite }} /> :
                            <Image style={styles.sprite} source={require('../../Assets/images/NoMiniSprite.png')} />
                        }
                    </View>
                    <Text style={styles.textName}> {name} </Text>
                </View>
                <View style={styles.itemPokemon}>
                    <View>
                        {this.renderStrengths()}
                        {this.renderWeaknesses()}
                        {this.renderVulnerables()}
                        {this.renderResistants()}
                    </View>
                </View>
            </View>
        )
    }
}
