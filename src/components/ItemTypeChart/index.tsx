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
    renderOffensive() {
        const { offensive = {} } = { ...this.props.data }
        const { byHalf = [], byOne = [], byTwo = [], byZero = [] } = { ...offensive }
        const [_byHalf = {}] = byHalf
        const [_byOne = {}] = byOne
        const [_byTwo = {}] = byTwo
        const [_byZero = {}] = byZero
        const sprites_byOne = this.validArray(byOne) && map(_byOne, (item: any) => {
            const { urlSprite = '' } = { ...item }
            return (
                <View style={styles.spriteContainer}>
                    <Image style={styles.sprite} source={{ uri: urlSprite }} />
                </View>
            )
        })
        const sprites_byTwo = this.validArray(byTwo) && map(_byTwo, (item: any) => {
            const { urlSprite = '' } = { ...item }
            return (
                <View style={styles.spriteContainer}>
                    <Image style={styles.sprite} source={{ uri: urlSprite }} />
                </View>
            )
        })
        const sprites_byHalf = this.validArray(byHalf) && map(_byHalf, (item: any) => {
            const { urlSprite = '' } = { ...item }
            return (
                <View style={styles.spriteContainer}>
                    <Image style={styles.sprite} source={{ uri: urlSprite }} />
                </View>
            )
        })
        const sprites_byZero = this.validArray(byZero) && map(_byZero, (item: any) => {
            const { urlSprite = '' } = { ...item }
            return (
                <View style={styles.spriteContainer}>
                    <Image style={styles.sprite} source={{ uri: urlSprite }} />
                </View>
            )
        })
        return this.validArray(byHalf) && (
            <View style={{ alignItems: 'flex-start' }}>
                <Text style={styles.textName}> {`Ofensivo`} </Text>
                <Text style={styles.textName}> {`x2`} </Text>
                <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
                    {sprites_byTwo}
                </View>
                <Text style={styles.textName}> {`x1`} </Text>
                <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
                    {sprites_byOne}
                </View>
                <Text style={styles.textName}> {`x0.5`} </Text>
                <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
                    {sprites_byHalf}
                </View>
                <Text style={styles.textName}> {`x0`} </Text>
                <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
                    {sprites_byZero}
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
                        {this.renderOffensive()}
                    </View>
                </View>
            </View>
        )
    }
}
