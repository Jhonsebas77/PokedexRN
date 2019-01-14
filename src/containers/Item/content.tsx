import React, { Component } from 'react'
import { Text, FlatList, View, TouchableOpacity, ImageBackground } from 'react-native'
import { getAllNewItem } from '../../util/api'
import ItemItem from '../../components/ItemItem'
import { Actions } from 'react-native-router-flux'
import { newString } from '../../Helpers/Validators'
import Loading from '../../components/Loading'
import NavBarSimple from '../../components/NavBar/Simple'
import style from './style'
import { getComponentStyle } from '../../Helpers/Stylus'

const styles = getComponentStyle(style)
export default class Home extends Component<ItemProps, ItemState> {
    constructor(props) {
        super(props)
        this.state = {
            Items: [],
            loaded: false
        }
    }

    async componentWillMount() {
        let Items = await getAllNewItem()
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
        const { loaded = false, Items = {} } = { ...this.state }

        if (!loaded) {
            return this.renderLoadingView()
        }
        return (
            <ImageBackground source={require('../../Assets/images/BG_Home.png')}
                style={styles.loading} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} >
                </NavBarSimple>
                <View style={styles.container}>
                    <FlatList
                        data={Items}
                        numColumns={3}
                        keyExtractor={(item) => (item as any).index}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => { Actions.ItemDetail({ item }) }}>
                                <ItemItem
                                    name={newString((item as any).name)}
                                    itemSpriteSource={{ uri: (item as any).urlSprite }}
                                />
                            </TouchableOpacity>
                        } />
                </View>
            </ImageBackground>
        )
    }
}