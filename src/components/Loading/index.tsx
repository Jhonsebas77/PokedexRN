import React, { Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './style'
import LottieView from 'lottie-react-native'
import Loading_Pokeball from '../../Assets/animation/Loading_Pokeball.json'
export default class Loading extends Component<LoadingProps> {
    render() {
        // this.animation.play()
        return (
            <View style={{ alignItems: 'center' }}>
                <ImageBackground source={(this.props.imageLoading) as any} style={styles.loading}>
                    <View style={styles.containerActivity}>
                        <LottieView
                            loop
                            autoPlay
                            source={Loading_Pokeball}
                        />
                    </View>
                    <Text style={styles.textLoading}>{this.props.textLoading} </Text>
                </ImageBackground>
            </View >
        )
    }
}