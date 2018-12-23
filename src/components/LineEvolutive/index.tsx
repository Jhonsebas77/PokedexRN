import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
export default class LineEvolutive extends Component<AbilitiesProps, AbilitiesState> {
    constructor(props) {
        super(props)
        this.renderEvo = this.renderEvo.bind(this)
        this.renderMega = this.renderMega.bind(this)
    }
    renderEvo(evoData) {
        const evo1_data = evoData[0]
        const { evo1_item = false, nameItem: evo1_nameItem = '', itemSprite: evo1_itemSprite = '', lv_next: evo1_lv_next = 0,
            spriteURL: evo1_spriteURL = '' } = { ...evo1_data }
        return (
            <View>
                {!evo1_item ? <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.spriteContainer}>
                        <Image style={styles.sprite} source={{ uri: evo1_spriteURL }} />
                    </View>
                    {evo1_lv_next !== 0 && <Text> {`->\n${evo1_lv_next}`}</Text>}
                </View> :
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.sprite} source={{ uri: evo1_spriteURL }} />
                        <Image style={styles.sprite} source={{ uri: evo1_itemSprite }} />
                        <Text> {`->  ${evo1_nameItem}\n ->`}</Text>
                    </View>
                }
            </View>
        )
    }
    renderMega(megaData) {
        const evo1_data = megaData[0]
        const { evo1_item = false, nameItem: evo1_nameItem = '', itemSprite: evo1_itemSprite = '', spriteURL: evo1_spriteURL = '' } = { ...evo1_data }
        return (
            <View>
                {!evo1_item ? <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={styles.sprite} source={{ uri: evo1_itemSprite }} />
                    <View style={styles.spriteContainer}>
                        <Image style={styles.sprite} source={{ uri: evo1_spriteURL }} />
                    </View>
                </View> :
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.sprite} source={{ uri: evo1_spriteURL }} />
                        <Image style={styles.sprite} source={{ uri: evo1_itemSprite }} />
                        <Text> {`->  ${evo1_nameItem}\n ->`}</Text>
                    </View>
                }
            </View>
        )
    }
    render() {
        const { data = [] } = { ...this.props }
        const [evo1 = [], evo2 = [], evo3 = [], evo4 = []] = data
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    {this.renderEvo(evo1)}
                    {this.renderEvo(evo2)}
                    {this.renderEvo(evo3)}
                </View>
                {this.renderMega(evo4)}
            </View>
        )
    }
}
