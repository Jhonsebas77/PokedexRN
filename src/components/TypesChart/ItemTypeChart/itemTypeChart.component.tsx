import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { getComponentStyle } from './../../../Helpers/Stylus'
import style from './itemTypeChart.style'
import _ from './../../../Helpers/Utilities'

const map = _.map
const valueEffective_byHalf = 0.5
const valueEffective_byOne = 1
const valueEffective_byTwo = 2
const valueEffective_byZero = 0
const styles = getComponentStyle(style)
export default class ItemType extends Component<any, any> {
    constructor(props) {
        super(props)
        this.validArray = this.validArray.bind(this)
        this.renderType = this.renderType.bind(this)
        this.renderSprites = this.renderSprites.bind(this)
    }
    validArray = (arr: any) => {
        return arr && _.arrayHasItems(arr)
    }
    renderType = (validArray: any, dataArray: any) => {
        const showSprite = this.validArray(validArray) && map(dataArray, (item: any) => {
            const { urlSprite = '' } = { ...item }
            return (
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.sprite} source={{ uri: urlSprite }} />
                </View>
            )
        })
        return showSprite
    }
    renderSprites = (data: any, type: string) => {
        const { byHalf = [], byOne = [], byTwo = [], byZero = [] } = { ...data }
        const [_byHalf = {}] = byHalf
        const [_byOne = {}] = byOne
        const [_byTwo = {}] = byTwo
        const [_byZero = {}] = byZero
        const r_byHalf = this.renderType(byHalf, _byHalf)
        const r_byOne = this.renderType(byOne, _byOne)
        const r_byTwo = this.renderType(byTwo, _byTwo)
        const r_byZero = this.renderType(byZero, _byZero)
        return (
            <View style={styles.containerTypeForm}>
                <Text style={styles.textName}> {type} </Text>
                {r_byTwo && <View style={styles.showValues}>
                    <Text style={styles.textValue}> {`x${valueEffective_byTwo}`} </Text>
                    <View style={styles.textType}>
                        {r_byTwo}
                    </View>
                </View>}
                {r_byOne && <View style={styles.showValues}>
                    <Text style={styles.textValue}> {`x${valueEffective_byOne}`} </Text>
                    <View style={styles.textType}>
                        {r_byOne}
                    </View>
                </View>}
                {r_byHalf && <View style={styles.showValues}>
                    <Text style={styles.textValue}> {`x${valueEffective_byHalf}`} </Text>
                    <View style={styles.textType}>
                        {r_byHalf}
                    </View>
                </View>}
                {r_byZero && <View style={styles.showValues}>
                    <Text style={styles.textValue}> {`x${valueEffective_byZero}`} </Text>
                    <View style={styles.textType}>
                        {r_byZero}
                    </View>
                </View>}
            </View >
        )
    }
    renderOffensive() {
        const { offensive = {} } = { ...this.props.data }
        const offensive_sprites = this.renderSprites(offensive, `Ofensivo ⚔️`)
        return (
            <View>
                {offensive_sprites}
            </View>
        )
    }
    renderDefenssive() {
        const { defenssive = {} } = { ...this.props.data }
        const defenssive_sprites = this.renderSprites(defenssive, `Defensivo 🛡`)
        return (
            <View>
                {defenssive_sprites}
            </View>
        )
    }
    render() {
        const { name = '', sprite = null } = { ...this.props.data }
        return (
            <View>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <View style={styles.spriteContainer}>
                        <Image style={styles.sprite} source={{ uri: sprite }} />
                    </View>
                    <Text style={styles.textName}> {name} </Text>
                </View>
                <View style={styles.itemPokemon}>
                    {this.renderOffensive()}
                    {this.renderDefenssive()}
                </View>
            </View>
        )
    }
}
