import React, { Component } from 'react'
import Router from './routes'
console.disableYellowBox = true
console.error = (error) => error.apply

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <Router />
    )
  }
}