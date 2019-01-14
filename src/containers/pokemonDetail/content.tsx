import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, FlatList, ScrollView } from 'react-native'
import { getPokemon } from '../../util/api'
import { getComponentStyle } from '../../Helpers/Stylus'
import { paddingNumber } from '../../Helpers/Validators'
import { ColorType } from '../../Helpers/Colors'
import NavBarSimple from '../../components/NavBar/Simple'
import Abilities from '../../components/Abilities'
import LineEvolutive from '../../components/LineEvolutive'
import style from './style'
import ChipSprites from '../../components/ChipSprites'
import Chip from '../../Assets/json/Chip_Pokemon_Detail.json'
import Loading from '../../components/Loading'

import LinearGradient from 'react-native-linear-gradient'

const styles = getComponentStyle(style)
export default class PokemonDetail extends Component<PkmnDetailProps, PkmnDetailState> {
    TypeColor: any
    constructor(props) {
        super(props)
        this.state = {
            pokemon: [],
            loaded: false
        }
        this.renderInformation = this.renderInformation.bind(this)
        this.renderEvolution = this.renderEvolution.bind(this)
        this.renderAbility = this.renderAbility.bind(this)
        this.selectChip = this.selectChip.bind(this)
    }

    async componentWillMount() {
        const { item = {} } = { ...this.props }
        const { idDex = '006' } = item
        let pokemon = await getPokemon(idDex)
        this.setState({ pokemon, loaded: true })
    }

    renderLoadingView() {
        const { item = {} } = { ...this.state }
        const { idDex = '006' } = item
        return (
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={` ${idDex}`} />
        )
    }

    renderMiddle() {
        const { name } = this.state.pokemon
        return (
            <View style={{ alignItems: 'center', paddingLeft: 2 }}>
                <Text style={styles.title}>{name ? name : 'Pokemon Detail'}</Text>
            </View>
        )
    }

    renderInformation() {
        const { dex_entry = {} } = this.state.pokemon
        const { flavor_text = {} } = dex_entry
        return (
            <View style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 340, borderRadius: 20,
                marginHorizontal: 30, alignItems: 'center', paddingTop: 5
            }}>
                <View>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                        {'Informacion'}
                    </Text>
                </View>
                <View>
                    <Text style={{ color: 'white', textAlign: 'center', paddingVertical: 10 }}>
                        {flavor_text}
                    </Text>
                </View>
            </View>
        )
    }

    renderStats() {
        const { stats = {} } = this.state.pokemon
        const { attack = {}, defense = {}, hp = {}, special_attack = {}, special_defense = {}, speed = {} } = stats
        return (
            <View style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 340, borderRadius: 20,
                marginHorizontal: 30, marginTop: 10
            }}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                    {'Estadisticas'}
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <Text style={{ color: 'white', textAlign: 'center', paddingVertical: 10 }}>
                        {`Ataque: ${attack}\n`}
                        {`Defensa: ${defense}\n`}
                        {`Salud: ${hp}`}
                    </Text>
                    <Text style={{ color: 'white', textAlign: 'center', paddingVertical: 10 }}>
                        {`Ataque Especial: ${special_attack}\n`}
                        {`Defensa Especial: ${special_defense}\n`}
                        {`Velocidad: ${speed}\n`}
                    </Text>
                </View>
            </View>
        )
    }

    renderEvolution() {
        const { line_evolution = [] } = this.state.pokemon
        return (
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 340, borderRadius: 20, marginHorizontal: 30, marginTop: 10, paddingBottom: 20 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                    {'Evolucion'}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
                    <LineEvolutive data={line_evolution} />
                </View>
            </View>
        )
    }

    renderAbility() {
        const { abilities = {} } = this.state.pokemon
        return (
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 340, borderRadius: 20, marginHorizontal: 30, marginTop: 10 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                    {'Habilidad'}
                </Text>
                <FlatList
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    data={abilities}
                    keyExtractor={(item) => (item as any).index}
                    renderItem={({ item }: any) => <Abilities data={item} />}
                />
            </View>
        )
    }

    selectChip(type?) {
        if (type) {
            if (type === 'Informacion') {
                return this.renderInformation()
            }
            if (type === 'Evolucion') {
                return this.renderEvolution()
            }
        } return this.renderInformation()
    }

    render() {
        const { idDex = '', types = [], sprites = {}, weight = '', height = '', dex_entry = {} } = this.state.pokemon
        const { classification = {} } = dex_entry
        const [principalType = [], secundaryType = []] = types
        const [typeppal] = principalType
        const [typesecond] = secundaryType
        const { type: { name: type1 = '', urlSprite: type1_urlSprite = '' } = {} } = { ...typeppal }
        const { type: { name: type2 = '', urlSprite: type2_urlSprite = '' } = {} } = { ...typesecond }
        const { options } = Chip
        let hasSecondType = (types && type2 && type2_urlSprite !== '') ? true : false
        const colortype = types && ColorType(type1, type2)
        if (!this.state.loaded) {
            return this.renderLoadingView()
        }
        return (
            <View style={styles.background} >
                <NavBarSimple
                    icon={'back'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View style={{ backgroundColor: '#C64934', padding: 10 }}>
                    {/* <View style={styles.loading} > */}
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={types && colortype} style={styles.loading} >
                        <ScrollView contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}>
                            <View>
                                {this.renderInformation()}
                                {this.renderStats()}
                                {this.renderEvolution()}
                                {this.renderAbility()}
                            </View>
                        </ScrollView>
                        <View style={{
                            margin: 5,
                            marginLeft: 10,
                            width: 330,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row'
                        }}>
                            <FlatList
                                data={options}
                                horizontal={true}
                                keyExtractor={(item) => (item as any).index}
                                renderItem={({ item }) => <ChipSprites data={item} />} />
                        </View>
                        <View style={styles.containerPkmn}>
                            <View style={{ marginLeft: 20, alignItems: 'center', justifyContent: 'center' }}>
                                {classification && <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                                    {`${classification}`}
                                </Text>}
                                <Text style={styles.titleId}>{idDex ? `#${paddingNumber(idDex)}` : '-- -----'}</Text>
                                <View style={styles.containerTypes}>
                                    {types && type1 &&
                                        <View style={styles.typeContainer}>
                                            <Image style={styles.type} source={{ uri: type1_urlSprite }} />
                                        </View>
                                    }
                                    {hasSecondType &&
                                        <View style={styles.typeContainer}>
                                            <Image style={styles.type} source={{ uri: type2_urlSprite }} />
                                        </View>
                                    }
                                </View>
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                                    {` Peso ${weight}`}
                                </Text>
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                                    {`Altura  ${height}`}
                                </Text>
                            </View>
                            {sprites ?
                                <ImageBackground source={require('../../Assets/images/BG_Holder_Pkmn_W.png')} style={styles.spriteContainer}>
                                    <Image style={styles.sprite} source={{ uri: sprites.male }} />
                                </ImageBackground> :
                                <Image style={styles.sprite} source={require('../../Assets/images/Icon_Pokedex.png')} />
                            }
                        </View>
                        {/* </View> */}
                    </LinearGradient >
                </View>
            </View >
        )
    }
}