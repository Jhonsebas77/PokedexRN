import React, { Component } from 'react'
import { Text, FlatList, View, TouchableOpacity, ImageBackground } from 'react-native'
import { getAllItems } from '../../util/api'
import ItemItem from '../../components/ItemItem'
import { Actions } from 'react-native-router-flux'
import { newString, getItemSpriteSource } from '../../Helpers/Validators'
import Loading from '../../components/Loading'
import NavBarSimple from '../../components/NavBar/Simple'
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

    renderMiddle() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{'MOCHILA'}</Text>
            </View>
        )
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
            <ImageBackground source={require('../../Assets/images/BG_Loading.png')} style={styles.loading}>
                <NavBarSimple
                    icon={'back'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View style={styles.container}>
                    <FlatList
                        data={results}
                        numColumns={3}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => { Actions.ItemDetail({ item }) }}>
                                <ItemItem
                                    name={newString((item as any).name)}
                                    itemSpriteSource={{ uri: getItemSpriteSource((item as any).name) }}
                                />
                            </TouchableOpacity>
                        } />
                </View>
            </ImageBackground>
        )
    }
}