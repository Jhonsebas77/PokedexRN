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
                {!evo1_item ? <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                    <View style={styles.spriteContainer}>
                        <Image style={styles.sprite} source={{ uri: evo1_spriteURL }} />
                    </View>
                    {evo1_lv_next !== 0 && <Text style={{
                        color: 'white', textAlign: 'center',
                        fontWeight: 'bold', paddingTop: 10, paddingLeft: 10
                    }}> {`LV\n${evo1_lv_next}`}</Text>}
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
        const mega_data = megaData[0]
        const { mega_item = false, nameItem: mega_nameItem = '', itemSprite: mega_itemSprite = '', spriteURL: mega_spriteURL = '' } = { ...mega_data }
        return (
            <View>
                {!mega_item &&
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', paddingHorizontal: 10 }}>
                            <Image style={styles.sprite} source={{ uri: mega_itemSprite }} />
                            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}> {`${mega_nameItem}`}</Text>
                        </View>
                        <View style={styles.spriteContainer}>
                            <Image style={styles.sprite} source={{ uri: mega_spriteURL }} />
                        </View>
                    </View>
                }
            </View>
        )
    }
    render() {
        const { data = [] } = { ...this.props }
        const [evo1 = [], evo2 = [], evo3 = [], mega1 = [], mega2 = []] = data
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                    {evo1.length !== 0 && this.renderEvo(evo1)}
                    {evo2.length !== 0 && this.renderEvo(evo2)}
                    {evo3.length !== 0 && this.renderEvo(evo3)}
                </View>
                {mega1.length !== 0 && this.renderMega(mega1)}
                {mega2.length !== 0 && this.renderMega(mega2)}
            </View>
        )
    }
}
