import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './style'
import LottieView from 'lottie-react-native'

export default class AnimationLottie extends Component<LottieAnimProps, LottieAnimState> {
    constructor(props) {
        super(props)
        // this.animation = this.animation.bind(this)
    }

    componentDidMount() {
        // this.animation.play()
    }

    render() {
        const { _animation } = this.props
        console.log('props', this.props);
        
        return (
            <View style={styles.containerActivity}>
                <LottieView
                    loop
                    // ref={animation => {
                    //     this.animation = animation;
                    //   }}
                    autoPlay
                    source={_animation}
                />
            </View>
        )
    }
}
