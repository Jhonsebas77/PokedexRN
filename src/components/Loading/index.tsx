import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ImageBackground } from 'react-native'
import styles from './style'

export default class Loading extends Component<LoadingProps> {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <ImageBackground source={(this.props.imageLoading) as any} style={styles.loading}>
                    <View style={styles.containerActivity}>
                        <ActivityIndicator size='large' color='white' />
                    </View>
                    <Text style={styles.textLoading}>{this.props.textLoading} </Text>
                </ImageBackground>
            </View>
        )
    }
}