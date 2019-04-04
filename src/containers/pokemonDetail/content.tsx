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
        const { item: { idDex = '001' } = {} } = { ...this.props }
        let pokemon = await getPokemon(idDex)
        this.setState({ pokemon, loaded: true })
    }

    renderLoadingView() {
        return (
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={`Cargando la información del Pokémon seleccionado`} />
        )
    }

    renderMiddle() {
        const { pokemon = {} } = { ...this.state }
        const { name = 'Pokemon Detail' } = { ...pokemon }
        return (
            <View style={styles.textMiddle}>
                <Text style={styles.title}>{name}</Text>
            </View>
        )
    }

    renderInformation() {
        const { dex_entry: { flavor_text = {} } = {} } = this.state.pokemon
        return (
            <View style={styles.containerInfoPkmn}>
                <View>
                    <Text style={styles.titleCardInfo}> {'Informacion'}  </Text>
                    <Text style={styles.textStats}>  {flavor_text}  </Text>
                </View>
            </View>
        )
    }

    renderStats() {
        const { pokemon: { stats = {} } = {} } = { ...this.state }
        const { attack = 0, defense = 0, hp = 0, special_attack = 0, special_defense = 0, speed = 0 } = { ...stats }
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
        const { pokemon = {} } = { ...this.state }
        const { line_evolution = [] } = { ...pokemon }
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
        const { pokemon = {} } = { ...this.state }
        const { abilities = {} } = { ...pokemon }
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

    renderPkmn() {
        const { idDex = '006', types = [], sprites = {}, weight = '', height = '', dex_entry: { classification = {} } = {} } = this.state.pokemon
        const [principalType = [], secundaryType = []] = types
        const [typeppal] = principalType
        const [typesecond] = secundaryType
        const { type: { name: type1 = '', urlSprite: type1_urlSprite = '' } = {} } = { ...typeppal }
        const { type: { name: type2 = '', urlSprite: type2_urlSprite = '' } = {} } = { ...typesecond }
        let hasSecondType = (types && type2 && type2_urlSprite !== '') ? true : false
        return (
            <View style={styles.containerPkmn}>
                <View style={styles.containerPkmnInfo}>
                    {classification && <Text style={styles.titleInfo}>
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
        const { types = [] } = this.state.pokemon
        const [principalType = [], secundaryType = []] = types
        const [typeppal] = principalType
        const [typesecond] = secundaryType
        const { type: { name: type1 = '' } = {} } = { ...typeppal }
        const { type: { name: type2 = '' } = {} } = { ...typesecond }
        const colortype = types && ColorType(type1, type2)
        if (!this.state.loaded) {
            return this.renderLoadingView()
        }
        return (
            <View style={styles.background} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} />
                <View style={styles.content}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={types && colortype} style={styles.loading} >
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