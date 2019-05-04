import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import { getMove } from '../../util/api'
import { newString, paddingNumber } from '../../Helpers/Tools'
import NavBarSimple from '../../components/NavBar/Simple'
import LinearGradient from 'react-native-linear-gradient'
import { Actions } from 'react-native-router-flux'
import { ColorType, GetColorType } from '../../Helpers/Colors'
import Itempokemonmove from '../../components/itemPokemonMove'
import Cristalzmove from '../../components/CristalZ_Move'
import _ from '../../Helpers/Utilities'
import Loading from '../../components/Loading'
import style from './style'

const styles = getComponentStyle(style)
export default class MoveDetail extends Component<PkmnDetailProps, PkmnDetailState> {
    constructor(props) {
        super(props)
        this.state = {
            move: [],
            loaded: false
        }
    }

    async componentWillMount() {
        let move = await getMove(this.props.item.idDex)
        this.setState({ move, loaded: true })
    }

    renderMiddle() {
        return (
            <View style={styles.middle}>
                <Text style={styles.titleNavBar}>{'MOVIMIENTOS'}</Text>
            </View>
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
                            <Itempokemonmove
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
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={` Cargando...`} />
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

    render() {
        const { name = '', effect_entries: { short_effect = '' } = {}, category: { sprite: spriteCategory = '' } = {},
            battleType: { sprite: spriteBattleType = '', name: nameBattleType = '' } = {} } = this.state.move
        const colortype = ColorType(nameBattleType)
        const borderColor = GetColorType(nameBattleType)
        if (!this.state.loaded) {
            return this.renderLoadingView()
        }
        return (
            <View style={styles.background} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} />
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