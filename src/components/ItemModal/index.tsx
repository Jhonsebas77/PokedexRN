import React, { Component } from 'react'
import { View, Text, Modal, Animated, PanResponder, Image, ImageBackground } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'
const styles = getComponentStyle(style)
export default class FilterModal extends Component<any, any> {
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
        console.log('sel', selectItem)
        this.setState({ modal: true, item: { ...selectItem } })
        Animated.timing(this.state.opacity, { toValue: 1, duration: 1000 }).start()
    }
    closeModal() {
        Animated.timing(this.state.opacity, { toValue: 0, duration: 500 }).start(() => {
            this.setState({ modal: false })
        })
    }
    renderSpriteItem(itemSpriteSource) {
        return (
            <ImageBackground source={require('../../Assets/images/BG_Holder_Pkmn_W.png')} style={styles.spriteContainer}>
                {itemSpriteSource ?
                    <Image style={styles.sprite} source={itemSpriteSource} /> :
                    <Image style={styles.sprite} source={require('../../Assets/images/NoMiniSprite.png')} />
                }
            </ImageBackground>
        )
    }
    render() {
        const { modal, opacity, item } = this.state
        const { name = '', itemSpriteSource, type = 'pokeball', effect_entries = {}, category } = item
        console.log('====================================');
        console.log('[STATE]', this.state);
        console.log('====================================');
        let extraStyle = {}
        if (type === 'large') { extraStyle = styles.largeContainer } else
            if (type === 'medium') { extraStyle = styles.chartContainer } else
                if (type === 'pokeball') { extraStyle = styles.smallContainer }
        return (
            <Modal animationType={'slide'} transparent={true}
                onRequestClose={() => this.closeModal()} visible={modal}>
                <Animated.View style={[styles.modalBackground, { opacity }]} {...this._panResponder.panHandlers}>
                </Animated.View>
                <View style={styles.modalView}>
                    <View style={styles.bar}></View>
                    <View style={[styles.container, extraStyle]}>
                        <View style={styles.header}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.subtitle}>{category}</Text>
                        </View>
                        <View style={styles.loading} >
                            <View style={styles.spriteContainer}>
                                {itemSpriteSource ?
                                    this.renderSpriteItem(itemSpriteSource) :
                                    <Image style={styles.sprite} source={require('../../Assets/images/Icon_Item.png')} />
                                }
                            </View>
                            <View style={{ paddingTop: 20 }} >
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10, fontSize: 18 }}>
                                    {effect_entries.effect}  </Text>
                            </View >
                        </View >
                    </View>
                </View>
            </Modal>
        )
    }
}