import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
export default class Chip extends Component<ChipProps, ChipState> {
    constructor(props) {
        super(props)
    }
    logic() {
        const { text } = this.props
        if (this.props.isLast) {
            return (text.length * styles.shadowWidthFactor.width) + styles.marginChipImg.marginHorizontal
        } else {
            if (this.props.image || this.props.icon || this.props.gender) {
                return (text.length * styles.shadowWidthFactor.width) + styles.marginChipImg.marginHorizontal
            }
            return (text.length * styles.shadowWidthFactor.width) + styles.marginChip.marginHorizontal
        }
    }
    render() {
        const { onPress, pressed, text, index, isLast, isFirst, alignItems } = this.props
        const { container, active, activeLast, containerTextChip, textChip, textLast, textActive, marginFistChip } = styles
        const isActived = index === pressed
        return (
            <View style={[{ marginRight: 8, paddingLeft: 2 }, isFirst ? marginFistChip : {}]}>
                <TouchableOpacity activeOpacity={1} onPress={() => onPress()}>
                    <View style={[container, isLast && activeLast, isActived && active]}>
                        <View style={[containerTextChip, { alignItems: (alignItems || 'center') }]}>
                            <Text style={[textChip, isLast && textLast, isActived && textActive]}>{text}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View >
        )
    }
}
