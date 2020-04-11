import React, { Component } from 'react'
import { Text, FlatList, View, TouchableOpacity } from 'react-native'
import { getAllNewItem } from '../../util/api'
import ItemItem from '../ItemItem'
import ItemModal from '../ItemModal'
import { newString } from '../../Helpers/Tools'
import Loading from '../Loading'
import NavBarSimple from '../NavBar/Simple'
import style from './list_Item.style'
import { getComponentStyle } from '../../Helpers/Stylus'

const styles = getComponentStyle(style)
export default class Item extends Component<any, any> {
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
        const { loaded = false, items = [] } = { ...this.state }
        if (!loaded) {
            return this.renderLoadingView()
        }
        return (
            <View style={styles.loading} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} isHome={true} />
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
            </View>
        )
    }
}