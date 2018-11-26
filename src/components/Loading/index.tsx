import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import LottieView from 'lottie-react-native'
import Loading_Pokeball from '../../Assets/animation/Loading_Pokeball.json'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../Helpers/Colors'

export default class Loading extends Component<LoadingProps> {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <LinearGradient colors={[Colors.background, Colors.background1]} style={styles.loading} >
                    <View style={styles.containerActivity}>
                        <LottieView
                            loop
                            autoPlay
                            source={Loading_Pokeball}
                        />
                    </View>
                    <Text style={styles.textLoading}>{this.props.textLoading} </Text>
                </LinearGradient>
            </View >
        )
    }
}