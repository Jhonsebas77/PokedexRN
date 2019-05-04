import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
export default class ChipSprites extends Component<ChipItemProps, ChipItemState> {
    constructor(props) {
        super(props)
        this.state = {
            value: false
        }
        this.pressChip = this.pressChip.bind(this)
    }
    pressChip() {
        const { value } = this.state
        if (!value) {
            this.setState({ value: true })
        } else {
            this.setState({ value: false })
        }
    }
    render() {
        const { data: { icon = '', icon_Press = '' } = {} } = { ...this.props }
        const { value = false } = { ...this.state }
        return (
            <View style={styles.item}>
                <TouchableOpacity
                    onPress={this.pressChip}>
                    <View style={styles.spriteContainer}>
                        {value ?
                            <Image style={styles.sprite} source={{ uri: icon_Press }} /> :
                            <Image style={styles.sprite} source={{ uri: icon }} />
                        }
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}