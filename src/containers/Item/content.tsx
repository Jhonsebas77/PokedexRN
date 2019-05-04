import React, { Component } from 'react'
import { Text, FlatList, View, TouchableOpacity, ImageBackground } from 'react-native'
import { getAllNewItem } from '../../util/api'
import ItemItem from '../../components/ItemItem'
import ItemModal from '../../components/ItemModal'
import { newString } from '../../Helpers/Tools'
import Loading from '../../components/Loading'
import NavBarSimple from '../../components/NavBar/Simple'
import style from './style'
import { getComponentStyle } from '../../Helpers/Stylus'

const styles = getComponentStyle(style)
export default class Home extends Component<ItemProps, ItemState> {
    modal: any
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            loaded: false
        }
    }

    async componentWillMount() {
        let items = await getAllNewItem()
        this.setState({ items, loaded: true })
    }

    renderMiddle() {
        return (
            <View style={styles.contentTitle}>
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
        const { loaded = false, items = {} } = { ...this.state }
        if (!loaded) {
            return this.renderLoadingView()
        }
        return (
            <ImageBackground source={require('../../Assets/images/BG_Home.png')}
                style={styles.loading} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} />
                <View style={styles.container}>
                    <FlatList
                        data={items}
                        numColumns={3}
                        keyExtractor={(item) => (item as any).index}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => this.modal.openModal(item)}>
                                <ItemItem
                                    name={newString((item as any).name)}
                                    itemSpriteSource={{ uri: (item as any).urlSprite }}
                                />
                            </TouchableOpacity>
                        } />
                    <ItemModal ref={(ref) => { this.modal = ref }} />
                </View>
            </ImageBackground>
        )
    }
}