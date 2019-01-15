import React, { Component } from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import NavBarSimple from '../../components/NavBar/Simple'
import { getItem } from '../../util/api'
import { newString } from '../../Helpers/Validators'
import style from './style'
import { getComponentStyle } from '../../Helpers/Stylus'

const styles = getComponentStyle(style)
export default class ItemDetail extends Component<ItemDetailProps, ItemDetailState> {
    constructor(props) {
        super(props)
        this.state = {
            item: []
        }
    }

    async componentWillMount() {
        let idItem = this.props.item.idDex
        let item = await getItem(idItem)
        this.setState({ item })
    }

    renderMiddle() {
        const { name = 'Item Name', category = 'Item Detail' } = { ...this.state.item }
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{`${newString(name)}`}</Text>
                <Text style={styles.subtitle}>{`${category}`}</Text>
            </View>
        )
    }

    renderSpriteItem(urlSprite) {
        return (
            <ImageBackground source={require('../../Assets/images/BG_Holder_Pkmn_W.png')} style={styles.spriteContainer}>
                <Image style={styles.sprite} source={{ uri: urlSprite }} />
            </ImageBackground>
        )
    }

    render() {
        const { urlSprite, effect_entries } = this.state.item
        return (
            <View >
                <NavBarSimple
                    icon={'back'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View style={styles.loading} >
                    <View style={styles.spriteContainer}>
                        {urlSprite ?
                            this.renderSpriteItem(urlSprite) :
                            <Image style={styles.sprite} source={require('../../Assets/images/Icon_Item.png')} />
                        }
                    </View>
                    <View style={{ paddingTop: 20 }} >
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10, fontSize: 25 }}>
                            {effect_entries ? `${effect_entries[0][0].short_effect} ` : ''}  </Text>
                    </View >
                </View >
            </View >
        )
    }
}
