import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground, FlatList, ScrollView } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import { getMove } from '../../util/api'
import { newString, paddingNumber } from '../../Helpers/Tools'
import NavBarSimple from '../NavBar/Simple'
import LinearGradient from 'react-native-linear-gradient'
import { Actions } from 'react-native-router-flux'
import { ColorType, GetColorType } from '../../Helpers/Colors'
import Item_pkm_Move from './Item_pkm_Move'
import Cristalzmove from './CristalZ_Move'
import _ from '../../Helpers/Utilities'
import Loading from '../Loading'
import style from './detail_Move.style'

const styles = getComponentStyle(style)
export default class MoveDetail extends Component<PkmnDetailProps, any> {
    constructor(props) {
        super(props)
        this.state = {
            move: [],
            loaded: false,
            spriteBattleType: '',
            short_effect: '',
            colortype: [],
            borderColor: []
        }
    }

    async componentWillMount() {
        const { item: { idDex = '001' } = {} } = { ...this.props }
        let move = await getMove(idDex)
        !!move && this.setStateMove(move)
        this.setState({ move, loaded: true })
    }

    setStateMove(move) {
        const { battleType = {}, effect_entries: { short_effect = '' } = {}, name = '' } = move
        const { sprite: spriteBattleType = '', name: nameBattleType = '' } = { ...battleType }
        const colortype = battleType && ColorType(nameBattleType)
        const borderColor = battleType && GetColorType(nameBattleType)
        this.setState({ colortype, borderColor, spriteBattleType, short_effect, name })
    }

    renderMiddle() {
        return (
            <Text style={styles.titleNavBar}>{'MOVIMIENTOS'}</Text>
        )
    }

    renderSphere(sprite) {
        return (
            <View style={styles.categoryContainer}>
                <Image style={styles.type} source={{ uri: sprite }} />
            </View>
        )
    }
    renderListPokemonLearn() {
        const { pokemon_learn: [pokemonMoves = {}] = [] } = { ...this.state.move }
        return (
            <View style={styles.head2}>
                <View style={styles.viewAlignItem}>
                    <Text style={styles.title2}>{'Pokémon que aprenden \n este movimiento'}</Text>
                </View>
                <FlatList
                    data={pokemonMoves}
                    keyExtractor={(item) => (item as any).index}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity
                            onPress={() => { Actions.PokemonDetail({ item, index }) }}>
                            <Item_pkm_Move
                                number={paddingNumber((item as any).idDex)}
                                name={_.capitalize((item as any).name)}
                                method={_.capitalize((item as any).method)}
                                spriteSource={{ uri: (item as any).urlSprite }}
                            />
                        </TouchableOpacity>
                    } />
            </View>
        )
    }
    renderCristalzmove() {
        const { zPower = {} } = { ...this.state.move }
        const { basePower = 0, effect = '', name = '', urlSprite = '' } = { ...zPower }
        return (
            <View style={styles.head3}>
                <Cristalzmove name={name} urlSprite={urlSprite} basePower={basePower} effect={effect} />
            </View>
        )
    }

    renderLoadingView() {
        return (
            <Loading imageLoading={require('./../../Assets/images/BG_Loading.png')} textLoading={` Cargando...`} />
        )
    }

    renderMoveStats() {
        const { accuracy = 0, basePower = 0, pp = 0 } = { ...this.state.move }
        return (
            <View style={styles.containerStats}>
                <Text> {accuracy ? `Precisión: ${accuracy}% ` : '-- -----'}  </Text>
                <Text>  {basePower ? `Poder: ${basePower} ` : '-- -----'} </Text>
                <Text>  {pp && `PP: ${pp} `}  </Text>
            </View>
        )
    }

    renderFailInternet() {
        return (
            <ImageBackground source={require('./../../Assets/images/BG_Home.png')}
                style={styles.failInternet} >
                <View style={styles.contentFailInternet}>
                    <Image style={styles.sprite} source={require('./../../Assets/images/No_Internet.png')} />
                    <Text style={styles.title}>{'Lo sentimos, \nalgo salio mal'}</Text>
                </View>
            </ImageBackground>
        )
    }

    render() {
        const { loaded = false, borderColor = null, colortype = null, spriteBattleType = '', move = null, spriteCategory = '',
            short_effect = '', name = '' } = { ...this.state }
        if (move === null) {
            return this.renderFailInternet()
        }
        if (!loaded) {
            return this.renderLoadingView()
        }
        return (
            <View style={styles.background} >
                <NavBarSimple contentCenter={this.renderMiddle()} />
                <ScrollView>
                    <View style={[{ borderColor }, styles.head]}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colortype} style={styles.loading} >
                            <View style={styles.viewAlignItem}>
                                <Text style={styles.title}>{name ? `${newString(name)}` : 'Move Detail'}</Text>
                            </View>
                            <View style={styles.containerStatics}>
                                {this.renderSphere(spriteBattleType)}
                                {this.renderSphere(spriteCategory)}
                                {this.renderMoveStats()}
                            </View>
                            <View style={[{ borderColor }, styles.textContainer]}>
                                <Text style={styles.paddingText}>
                                    {short_effect ? `${short_effect} ` : ''}
                                </Text>
                            </View>
                        </LinearGradient>
                    </View>
                    {this.renderCristalzmove()}
                    {this.renderListPokemonLearn()}
                </ScrollView>
            </View >
        )
    }
}