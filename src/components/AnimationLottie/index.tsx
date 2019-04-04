import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './style'
import LottieView from 'lottie-react-native'

export default class AnimationLottie extends Component<LottieAnimProps, LottieAnimState> {
    constructor(props) {
        super(props)
    }
    render() {
        const { _animation } = { ...this.props }
        return (
            <View style={styles.containerActivity}>
                <LottieView loop autoPlay source={_animation} />
            </View>
        )
    }
}
