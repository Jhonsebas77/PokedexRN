import React, { Component } from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import NavBarSimple from '../../components/NavBar/Simple'
import { getURL } from '../../util/api'
import { newString } from '../../Helpers/Validators'
import styles from './style'

export default class ItemDetail extends Component<ItemDetailProps, ItemDetailState> {
    constructor(props) {
        super(props)
        this.state = {
            item: []
        }
    }

    async componentWillMount() {
        let itemUrl = this.props.item.url
        let item = await getURL(itemUrl)
        this.setState({ item })
    }

    renderMiddle() {
        const { name } = this.state.item
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{name ? `${newString(name)}` : 'Item Detail'}</Text>
            </View>
        )
    }

    renderSpriteItem(id) {
        return (
            <View>
                <Image style={styles.sprite} source={{ uri: id }} />
            </View>
        )
    }

    render() {
        const { sprites, effect_entries } = this.state.item
        return (
            <ImageBackground source={require('../../Assets/images/BG_Loading.png')} style={styles.loading}>
                <NavBarSimple
                    icon={'back'}
                    contentLeft={'<'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View style={styles.head}>
                    <View style={styles.spriteContainer}>
                        {sprites ?
                            this.renderSpriteItem(sprites.default) :
                            <Image style={styles.sprite} source={require('../../Assets/images/Icon_Item.png')} />
                        }
                    </View>
                </View>
                <View style={styles.item}>
                    <Text> {effect_entries ? `${effect_entries[0].short_effect} ` : ''}  </Text>
                </View >
            </ImageBackground >
        )
    }
}
