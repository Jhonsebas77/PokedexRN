import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
// import { Icon } from '../../Helpers/Icons'
// import Shadow from '../../Components/Wrapper/Shadow'
// import { getComponentStyle } from '../../Helpers/Stylus'
import styles from './style'
// import Svg from 'am-mobile-svg'
const genderImage = {
    F: '../../Assets/images/Pokeball-Fill-B.png',
    M: '../../Assets/images/Pokeball-Fill.png'
}
// const styles = getComponentStyle(_styles)

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
        const { onPress, pressed, text, image, icon, subtext, index, isLast, isFirst, gender, alignItems } = this.props
        const { container, active, imageChip, iconStyle, activeLast, containerTextChip, textChip, textLast, textActive,
            subtextChip, shadow, marginFistChip } = styles
        const isActived = index === pressed
        return (
            <View style={[{ marginRight: 8, paddingLeft: 2 }, isFirst ? marginFistChip : {}]}>
                {/* <Shadow settings={shadow} stylesShadow={{ width: this.logic() }}> */}
                <TouchableOpacity activeOpacity={1} onPress={() => onPress()}>
                    <View style={[container, isLast && activeLast, isActived && active]}>
                        <View style={[containerTextChip, { alignItems: (alignItems || 'center') }]}>
                            <Text style={[textChip, isLast && textLast, isActived && textActive]}>{text}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* </Shadow> */}
            </View >
        )
    }
}
