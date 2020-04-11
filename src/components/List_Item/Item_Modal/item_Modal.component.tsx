import React, { Component } from 'react'
import { View, Text, Modal, Animated, PanResponder, Image, ImageBackground } from 'react-native'
import { getComponentStyle } from './../../../Helpers/Stylus'
import { newString } from './../../../Helpers/Tools'
import style from './item_Modal.style'
const styles = getComponentStyle(style)
export default class ItemModal extends Component<any, any> {
    _panResponder: any
    constructor(props) {
        super(props)
        this.state = {
            opacity: new Animated.Value(0),
            modal: false,
            item: {
                name: '',
                itemSpriteSource: '',
                type: '',
                effect_entries: {},
                category: ''
            }
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderRelease: () => this.closeModal(),
            onPanResponderTerminate: () => this.closeModal()
        })
    }
    openModal(selectItem) {
        this.setState({ modal: true, item: { ...selectItem } })
        Animated.timing(this.state.opacity, { toValue: 1, duration: 1000, useNativeDriver: true }).start()
    }
    closeModal() {
        Animated.timing(this.state.opacity, { toValue: 0, duration: 500, useNativeDriver: true }).start(() => {
            this.setState({ modal: false })
        })
    }
    renderSpriteItem(urlSprite) {
        return (
            <ImageBackground source={require('./../../../Assets/images/BG_Holder_Pkmn_W.png')} style={styles.spriteContainer}>
                {urlSprite ?
                    <Image style={styles.sprite} source={{ uri: urlSprite }} /> :
                    <Image style={styles.sprite} source={require('./../../../Assets/images/NoMiniSprite.png')} />
                }
            </ImageBackground>
        )
    }
    renderTypeModal(type) {
        const context = {
            large: { ...styles.largeContainer },
            medium: { ...styles.chartContainer },
            pokeball: { ...styles.smallContainer }
        }
        return context[type] || context['pokeball']
    }
    render() {
        const { modal, opacity, item } = this.state
        const { name = '', urlSprite, type = 'pokeball', effect_entries: { effect = '' } = {}, category = '' } = item
        let extraStyle = this.renderTypeModal(type)
        return (
            <Modal animationType={'slide'} transparent={true}
                onRequestClose={() => this.closeModal()} visible={modal}>
                <Animated.View style={[styles.modalBackground, { opacity }]} {...this._panResponder.panHandlers}>
                </Animated.View>
                <View style={styles.modalView}>
                    <View style={styles.bar}></View>
                    <View style={[styles.container, extraStyle]}>
                        <View style={styles.header}>
                            <Text style={styles.title}>{newString(name)}</Text>
                            <Text style={styles.subtitle}>{category}</Text>
                        </View>
                        <View style={styles.loading} >
                            <View style={styles.spriteContainer}>
                                {urlSprite ?
                                    this.renderSpriteItem(urlSprite) :
                                    <Image style={styles.sprite} source={require('./../../../Assets/images/Icon_Item.png')} />
                                }
                            </View>
                            <View style={styles.containerEffect} >
                                <Text style={styles.textEffect}>
                                    {effect}
                                </Text>
                            </View >
                        </View >
                    </View>
                </View>
            </Modal>
        )
    }
}