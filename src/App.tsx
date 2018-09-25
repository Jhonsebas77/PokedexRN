import React, { Component } from 'react'
import Router from './routes'
import { StatusBar, View, StyleSheet, ImageBackground } from 'react-native';
console.disableYellowBox = true
console.error = (error) => error.apply

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent={true}
          backgroundColor='rgba(0, 0, 0, 0.2)'
          barStyle='dark-content' />
        <Router />
      </View>
    )
  }
}