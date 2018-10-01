import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, ScrollView } from 'react-native'
import NavBarSimple from '../../components/NavBar/Simple'
import { getURL, getItem } from '../../util/api'
import { newString } from '../../Helpers/Validators'
import styles from './style'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../Helpers/Colors'

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
        const { name, category } = this.state.item
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{name ? `${newString(name)}` : 'Item Name'}</Text>
                <Text style={styles.subtitle}>{category ? `${category}` : 'Item Detail'}</Text>
            </View>
        )
    }

    renderSpriteItem(urlSprite) {
        return (
            <ImageBackground source={require('../../Assets/images/BG_Holder_Pkmn.png')} style={styles.spriteContainer}>
                <Image style={styles.sprite} source={{ uri: urlSprite }} />
            </ImageBackground>
        )
    }

    render() {
        const { urlSprite, effect_entries } = this.state.item
        return (
            <LinearGradient colors={[Colors.background, Colors.background1]} style={styles.loading} >
                <NavBarSimple
                    icon={'back'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View style={styles.head}>
                    <View style={styles.spriteContainer}>
                        {urlSprite ?
                            this.renderSpriteItem(urlSprite) :
                            <Image style={styles.sprite} source={require('../../Assets/images/Icon_Item.png')} />
                        }
                    </View>
                </View>
                <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                    <View style={styles.itemDetail}>
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                            {'Informacion'}
                        </Text>
                        <Text> {effect_entries ? `${effect_entries[0][0].short_effect} ` : ''}  </Text>
                    </View >
                </ScrollView>
            </LinearGradient >
        )
    }
}
