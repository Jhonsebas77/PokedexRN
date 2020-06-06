import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { getComponentStyle } from './../../../Helpers/Stylus'
import style from './itemTypeChart.style'
import _ from './../../../Helpers/Utilities'

const map = _.map
const styles = getComponentStyle(style)
export default class ItemType extends Component<any, any> {
    constructor(props) {
        super(props)
        this.validArray = this.validArray.bind(this)
        this.renderSprites = this.renderSprites.bind(this)
    }
    validArray = (arr: any) => {
        return arr && _.arrayHasItems(arr)
    }
    showNameData = (key: string) => {
        const context_name = {
            ['no_effect']: 'Sin Efecto',
            ['not_very_effective']: 'No Muy Efectivo',
            ['super_very_effective']: 'Super Efectivo',
            ['weakness']: 'Debil',
            ['resist']: 'Resistente',
            ['immune']: 'Inmune',
            ['DEFAULT']: '- - -'
        }
        return context_name[key] || context_name['DEFAULT']
    }
    showIconData = (kind: string) => {
        const context_kind = {
            offensive: '⚔️',
            defenssive: '🛡'
        }
        return context_kind[kind]
    }
    renderSprites = (data: any) => {
        const [typeData = {}] = data
        const { value = 0, kind = '', key = '' } = { ...typeData }
        const icon_kind = this.showIconData(kind)
        const key_name = this.showNameData(key)
        const showSprite = this.validArray(data) && map(data, (item: any) => {
            const { urlSprite = '', name = '' } = { ...item }
            return (
                <View style={styles.containerKindText}>
                    <Image style={styles.sprite} source={{ uri: urlSprite }} />
                    <Text style={styles.textTypeKind}> {name} </Text>
                </View>
            )
        })
        return (
            <View>
                <View style={styles.containerNameEffective}>
                    <View style={styles.containerNameIconKind}>
                        <Text style={styles.textEffective}> {`${key_name}`} </Text>
                        <Text style={styles.textEffective}> {`${icon_kind}`} </Text>
                    </View>
                    <Text style={styles.textEffective}> {`x${value}`} </Text>
                </View>
                <View style={styles.showValues}>
                    {showSprite}
                </View>
            </View>
        )
    }
    renderInfoTypes() {
        const { no_effect = [], not_very_effective = [], super_very_effective = [], weakness = [], resist = [], immune = [] } = { ...this.props.data }
        return (
            <View>
                {this.validArray(no_effect) && this.renderSprites(no_effect)}
                {this.validArray(not_very_effective) && this.renderSprites(not_very_effective)}
                {this.validArray(super_very_effective) && this.renderSprites(super_very_effective)}
                {this.validArray(weakness) && this.renderSprites(weakness)}
                {this.validArray(resist) && this.renderSprites(resist)}
                {this.validArray(immune) && this.renderSprites(immune)}
            </View>
        )
    }
    render() {
        const { name = '', sprite = null } = { ...this.props.data }
        return (
            <View>
                <View style={styles.containerItem}>
                    <View style={styles.spriteContainer}>
                        <Image style={styles.sprite} source={{ uri: sprite }} />
                    </View>
                    <Text style={styles.textName}> {name} </Text>
                </View>
                <View style={styles.itemPokemon}>
                    {this.renderInfoTypes()}
                </View>
            </View>
        )
    }
}
