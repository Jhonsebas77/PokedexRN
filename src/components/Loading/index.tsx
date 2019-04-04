import React, { Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'
import LottieView from 'lottie-react-native'
import Loading_Pokeball from '../../Assets/animation/Loading_Pokeball.json'

const styles = getComponentStyle(style)
export default class Loading extends Component<LoadingProps> {
    render() {
        return (
            <View style={styles.styleCenter}>
                <ImageBackground source={require('../../Assets/images/BG_Home.png')}
                    style={styles.loading} >
                    <View style={styles.containerActivity}>
                        <LottieView loop autoPlay source={Loading_Pokeball} />
                    </View>
                    <Text style={styles.textLoading}>{this.props.textLoading} </Text>
                </ImageBackground>
            </View >
        )
    }
}