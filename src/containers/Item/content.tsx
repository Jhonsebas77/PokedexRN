import React, { Component } from 'react';
import {
    Text,
    FlatList,
    View,
    TouchableOpacity
} from 'react-native'
import { getAllItems } from '../../util/api'
import ItemPokemon from '../../components/itemPokemon'
import { Actions } from 'react-native-router-flux'
import styles from './style'

export default class Home extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            Items: []
        }
    }

    async componentWillMount() {
        let Items = await getAllItems()
        this.setState({ Items })
    }

    render() {
        return (
            <View>
                <Text> {`Items`}</Text>
                <View style={styles.container}>
                    <FlatList
                        data={this.state.Items.results}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => { Actions.ItemDetail({ item }) }}>
                                <ItemPokemon name={item.name} />
                            </TouchableOpacity>
                        } />
                </View>
            </View>
        )
    }
}

