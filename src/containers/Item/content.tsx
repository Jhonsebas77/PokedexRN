import React, { Component } from 'react'
import { Text, FlatList, View, TouchableOpacity } from 'react-native'
import { getAllItems } from '../../util/api'
import ItemItem from '../../components/ItemItem'
import { Actions } from 'react-native-router-flux'
import { newString } from '../../Helpers/Validators'
import Loading from '../../components/Loading'
import styles from './style'

export default class Home extends Component<ItemProps, ItemState> {
    constructor(props) {
        super(props)
        this.state = {
            Items: [],
            loaded: false
        }
    }

    async componentWillMount() {
        let Items = await getAllItems()
        this.setState({ Items, loaded: true })
    }

    renderLoadingView() {
        return (
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={'Cargando los Items'} />
        )
    }

    render() {
        const { loaded, Items } = this.state
        const { results } = Items
        if (!loaded) {
            return this.renderLoadingView()
        }
        return (
            <View>
                <Text> {`Items`}</Text>
                <View style={styles.container}>
                    <FlatList
                        data={results}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => { Actions.ItemDetail({ item }) }}>
                                <ItemItem name={newString((item as any).name)} />
                            </TouchableOpacity>
                        } />
                </View>
            </View>
        )
    }
}