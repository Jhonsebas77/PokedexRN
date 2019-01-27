import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import { getMove } from '../../util/api'
import { newString } from '../../Helpers/Validators'
import NavBarSimple from '../../components/NavBar/Simple'
import LinearGradient from 'react-native-linear-gradient'
import { Actions } from 'react-native-router-flux'
import { ColorType, GetColorType } from '../../Helpers/Colors'
import Itempokemonmove from '../../components/itemPokemonMove'
import _ from '../../Helpers/Utilities'
import { paddingNumber } from '../../Helpers/Validators'
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
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{'MOVIMIENTOS'}</Text>
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

    renderLoadingView() {
        return (
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={` Cargando...`} />
        )
    }

    renderMoveStats() {
        const { accuracy = 0, basePower = 0, pp = 0 } = { ...this.state.move }
        return (
            <View style={styles.containerStats}>
                <Text> {accuracy ? `accuracy: ${accuracy}% ` : '-- -----'}  </Text>
                <Text>  {basePower ? `power: ${basePower} ` : '-- -----'} </Text>
                <Text>  {pp && `pp: ${pp} `}  </Text>
            </View>
        )
    }

    render() {
        const { name = '', effect_entries = {}, category: { sprite: spriteCategory = '' } = {},
            battleType: { sprite: spriteBattleType = '', name: nameBattleType = '' } = {} } = this.state.move
        const colortype = ColorType(nameBattleType)
        const borderColor = GetColorType(nameBattleType)
        const { short_effect = '' } = { ...effect_entries }
        if (!this.state.loaded) {
            return this.renderLoadingView()
        }
        return (
            <View style={styles.background} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} > </NavBarSimple>
                <View style={[{ borderColor }, styles.head]}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colortype} style={styles.loading} >
                        <View style={styles.viewAlignItem}>
                            <Text style={styles.title}>{name ? `${newString(name)}` : 'Move Detail'}</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                            {this.renderSphere(spriteBattleType)}
                            {this.renderSphere(spriteCategory)}
                            {this.renderMoveStats()}
                        </View>
                        <View style={[{ borderColor }, styles.textContainer]}>
                            <Text style={styles.paddingText}>
                                {effect_entries ? `${short_effect} ` : ''}
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
                {this.renderListPokemonLearn()}
            </View >
        )
    }
}