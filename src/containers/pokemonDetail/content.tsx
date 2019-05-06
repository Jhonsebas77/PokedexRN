import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, FlatList, ScrollView } from 'react-native'
import { getPokemon } from '../../util/api'
import { getComponentStyle } from '../../Helpers/Stylus'
import { paddingNumber } from '../../Helpers/Tools'
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
            loaded: false,
            colortype: []
        }
        this.renderInformation = this.renderInformation.bind(this)
        this.renderEvolution = this.renderEvolution.bind(this)
        this.renderAbility = this.renderAbility.bind(this)
        this.selectChip = this.selectChip.bind(this)
    }

    async componentWillMount() {
        const { item: { idDex = '001' } = {} } = { ...this.props }
        let pokemon = await getPokemon(idDex)
        const { types: [pokemonTypes] = {} } = pokemon
        const { typeOneName = '', typeTwoName = '' } = pokemonTypes
        const colortype = ColorType(typeOneName, typeTwoName)
        this.setState({ pokemon, loaded: true, colortype })
    }

    renderLoadingView() {
        return (
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={`Cargando la información del Pokémon seleccionado`} />
        )
    }

    renderMiddle() {
        const { pokemon: { name = '' } = {} } = { ...this.state }
        return (
            <View style={styles.textMiddle}>
                <Text style={styles.title}>{name}</Text>
            </View>
        )
    }

    renderInformation() {
        const { dex_entry: { flavor_text = {} } = {} } = { ...this.state.pokemon }
        return (
            <View style={styles.containerInfoPkmn}>
                <Text style={styles.titleCardInfo}> {'Informacion'}  </Text>
                <Text style={styles.textStats}>  {flavor_text}  </Text>
            </View>
        )
    }

    renderStats() {
        const { pokemon: { stats: { attack = 0, defense = 0, hp = 0, special_attack = 0, special_defense = 0, speed = 0 } = {} } = {} } = { ...this.state }
        return (
            <View style={styles.containerStats}>
                <Text style={styles.titleCardInfo}>  {'Estadisticas'} </Text>
                <View style={styles.textContainerColumnStats}>
                    <Text style={styles.textStats}>
                        {`Ataque: ${attack}\n Defensa: ${defense}\n Salud: ${hp}`}
                    </Text>
                    <Text style={styles.textStats}>
                        {`Ataque Especial: ${special_attack}\n Defensa Especial: ${special_defense}\n Velocidad: ${speed}\n`}
                    </Text>
                </View>
            </View>
        )
    }

    renderEvolution() {
        const { pokemon: { line_evolution = [] } = {} } = { ...this.state }
        return (
            <View style={styles.containerEvolution}>
                <Text style={styles.titleCardInfo}>
                    {'Evolucion'}
                </Text>
                <View style={styles.containerEvolutionLine}>
                    <LineEvolutive data={line_evolution} />
                </View>
            </View>
        )
    }

    renderAbility() {
        const { pokemon: { abilities = {} } = {} } = { ...this.state }
        return (
            <View style={styles.containerAbility}>
                <Text style={styles.titleCardInfo}> {'Habilidad'} </Text>
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

    selectChip(type) {
        const context = {
            Informacion: this.renderInformation(),
            Evolucion: this.renderEvolution()
        }
        return context[type] || context['Informacion']
    }

    renderChipSprites() {
        const { options = {} } = { ...Chip }
        return (
            <View style={styles.chipContainer}>
                <FlatList
                    data={options}
                    horizontal={true}
                    keyExtractor={(item) => (item as any).index}
                    renderItem={({ item }) => <ChipSprites data={item} />} />
            </View>
        )
    }

    renderFailInternet() {
        return (
            <ImageBackground source={require('../../Assets/images/BG_Home.png')}
                style={styles.failInternet} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} />
                <View style={styles.contentFailInternet}>
                    <Image style={styles.sprite} source={require('../../Assets/images/No_Internet.png')} />
                    <Text style={styles.title}>{'Lo sentimos, \nalgo salio mal'}</Text>
                </View>
            </ImageBackground>
        )
    }

    renderPkmn() {
        const { idDex = '006', types: [pokemonTypes] = {}, sprites = {}, weight = '', height = '', dex_entry: { classification = {} } = {} } = this.state.pokemon
        const { typeOneUrlSprite = '', typeTwoUrlSprite = '' } = pokemonTypes
        return (
            <View style={styles.containerPkmn}>
                <View style={styles.containerPkmnInfo}>
                    {classification && <Text style={styles.titleInfo}>
                        {`${classification}`}
                    </Text>}
                    <Text style={styles.titleId}>{idDex ? `#${paddingNumber(idDex)}` : '-- -----'}</Text>
                    <View style={styles.containerTypes}>
                        {<View style={styles.typeContainer}>
                            <Image style={styles.type} source={{ uri: typeOneUrlSprite }} />
                        </View>}
                        {!!typeTwoUrlSprite && <View style={styles.typeContainer}>
                            <Image style={styles.type} source={{ uri: typeTwoUrlSprite }} />
                        </View>}
                    </View>
                    <Text style={styles.titleInfo}>  {` Peso: ${weight} \n Altura:  ${height}`} </Text>
                </View>
                {sprites ?
                    <ImageBackground source={require('../../Assets/images/BG_Holder_Pkmn_W.png')} style={styles.spriteContainer}>
                        <Image style={styles.sprite} source={{ uri: sprites.male }} />
                    </ImageBackground> :
                    <Image style={styles.sprite} source={require('../../Assets/images/Icon_Pokedex.png')} />
                }
            </View>
        )
    }

    render() {
        const { colortype, pokemon, loaded } = { ...this.state }
        if (pokemon === undefined) {
            return this.renderFailInternet()
        }
        if (!loaded) {
            return this.renderLoadingView()
        }
        return (
            <View style={styles.background} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} />
                <View style={styles.content}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colortype} style={styles.loading} >
                        <ScrollView contentContainerStyle={styles.scrollContainer}>
                            <View>
                                {this.renderInformation()}
                                {this.renderStats()}
                                {this.renderEvolution()}
                                {this.renderAbility()}
                            </View>
                        </ScrollView>
                        {this.renderChipSprites()}
                        {this.renderPkmn()}
                    </LinearGradient >
                </View>
            </View >
        )
    }
}