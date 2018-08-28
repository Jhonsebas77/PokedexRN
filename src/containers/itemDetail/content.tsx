import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getPokemonURL } from '../../util/api'
import styles from './style'

export default class ItemDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: []
        }
    }

    async componentWillMount() {
        let itemUrl = this.props.item.url
        let item = await getPokemonURL(itemUrl)
        this.setState({ item })
    }

    render() {
        const { name, sprites } = this.state.item
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    // style={styles.btnContainer}
                    onPress={() => { Actions.pop() }}>
                    <Text>BACK</Text>
                </TouchableOpacity>
                <View style={styles.item}>
                    <View style={styles.spriteContainer}>
                        {sprites ?
                            <Image style={styles.sprite}

                                source={{ uri: sprites.default }} />
                            : undefined}
                    </View>
                    <Text>
                        {name ? `${name}` : '-----'}
                    </Text>
                </View >
            </View >
        )
    }
}