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
        this.renderType = this.renderType.bind(this)
    }
    validArray = (arr: any) => {
        return arr && _.arrayHasItems(arr)
    }
    renderType = (validArray: any, dataArray: any, valueEffective: Number) => {
        const showSprite = this.validArray(validArray) && map(dataArray, (item: any) => {
            const { urlSprite = '' } = { ...item }
            return (
                <View style={styles.spriteContainer}>
                    <Image style={styles.sprite} source={{ uri: urlSprite }} />
                </View>
            )
        })
        return this.validArray(validArray) && (
            <View style={styles.containerTypeAndDescription}>
                <View style={{ backgroundColor: 'white', borderRadius: 10 }}>
                    <Text style={styles.textValue}> {`x${valueEffective}`} </Text>
                </View>
                <View > {showSprite} </View>
            </View>
        )
    }
    renderOffensive() {
        const { offensive = {} } = { ...this.props.data }
        const { byHalf = [], byOne = [], byTwo = [], byZero = [] } = { ...offensive }
        const [_byHalf = {}] = byHalf
        const [_byOne = {}] = byOne
        const [_byTwo = {}] = byTwo
        const [_byZero = {}] = byZero
        const r_byHalf = this.renderType(byHalf, _byHalf, 0.5)
        const r_byOne = this.renderType(byOne, _byOne, 1)
        const r_byTwo = this.renderType(byTwo, _byTwo, 2)
        const r_byZero = this.renderType(byZero, _byZero, 0)
        return (
            <View style={styles.containerTypeForm}>
                <Text style={styles.textName}> {`Ofensivo ⚔️`} </Text>
                <View>
                    {r_byTwo}
                    {r_byOne}
                    {r_byHalf}
                    {r_byZero}
                </View>
            </View>
        )
    }
    renderDefenssive() {
        const { defenssive = {} } = { ...this.props.data }
        const { byHalf = [], byOne = [], byTwo = [], byZero = [] } = { ...defenssive }
        const [_byHalf = {}] = byHalf
        const [_byOne = {}] = byOne
        const [_byTwo = {}] = byTwo
        const [_byZero = {}] = byZero
        const r_byHalf = this.renderType(byHalf, _byHalf, 0.5)
        const r_byOne = this.renderType(byOne, _byOne, 1)
        const r_byTwo = this.renderType(byTwo, _byTwo, 2)
        const r_byZero = this.renderType(byZero, _byZero, 0)
        return (
            <View style={styles.containerTypeForm}>
                <Text style={styles.textName}> {`Defensivo 🛡`} </Text>
                <View>
                    {r_byTwo}
                    {r_byOne}
                    {r_byHalf}
                    {r_byZero}
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
