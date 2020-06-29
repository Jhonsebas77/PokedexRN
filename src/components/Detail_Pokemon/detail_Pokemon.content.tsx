import React, { useEffect, useState } from 'react'
import { Text, View, Image, ImageBackground, FlatList, ScrollView } from 'react-native'
import { getPokemon } from '../../util/api'
import { getComponentStyle } from '../../Helpers/Stylus'
import _ from '../../Helpers/Utilities'
import { paddingNumber } from '../../Helpers/Tools'
import { Colors } from '../../Helpers/Colors'
import { ColorType } from '../../Helpers/Colors'
import NavBarSimple from '../NavBar/Simple'
import Abilities from './Abilities'
import LineEvolutive from './LineEvolutive'
import style from './detail_Pokemon.style'
import ChipSprites from './ChipSprites'
import Chip from '../../Assets/json/Chip_Pokemon_Detail.json'
import Fail_Internet from '../Fail_Internet'
import Loading_Screen from '../Loading'

import LinearGradient from 'react-native-linear-gradient'

const styles = getComponentStyle(style)
export default function PokemonDetail(props: PkmnDetailProps) {
    const [pokemon, setPokemon] = useState([])
    const [pokemonTypes, setPokemonTypes] = useState({})
    const [colortype, setColortype] = useState([Colors.unknown, Colors.unknown1])
    const [loading, setLoading] = useState(false)
    const [LoadData, setLoadData] = useState(false)
    const [emptyState, setEmptyState] = useState(true)

    useEffect(() => {
        const getItemData = async () => {
            const { item: { idDex = '001' } = {} } = { ...props }
            const pokemonData = await getPokemon(idDex)
            setPokemon(pokemonData)
            const { types = [] } = { ...pokemonData }
            const [res_types] = types
            setPokemonTypes(res_types)
            const { typeOneName = '', typeTwoName = '' } = { ...pokemonTypes }
            const type_Color = ColorType(typeOneName, typeTwoName)
            setColortype(type_Color)
            setLoading(true)
            setLoadData(true)
        }
        !LoadData && getItemData()
    }, [loading])
    useEffect(() => {
        !_.isEmpty(pokemon) && setEmptyState(false)
    }, [pokemon])

    const renderLoadingView = () => {
        return !loading && (
            <Loading_Screen textLoading={'Cargando los Items...'} />
        )
    }
    const renderFailInternet = () => {
        return emptyState && (
            <Fail_Internet />
        )
    }
    const renderMiddle = () => {
        const { name = '' } = { ...pokemon }
        return (
            <Text style={styles.title}>{emptyState ? 'Ups!' : name}</Text>
        )
    }

    const renderInformation = () => {
        const { dex_entry = {} } = { ...pokemon }
        const { flavor_text = '' } = { ...dex_entry }
        return (
            <View style={styles.containerInfoPkmn}>
                <Text style={styles.titleCardInfo}> {'Informacion'}  </Text>
                <Text style={styles.textStats}>{flavor_text}</Text>
            </View>
        )
    }

    const renderStats = () => {
        const { stats = {} } = { ...pokemon }
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

    const renderEvolution = () => {
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

    const renderAbility = () => {
        const { abilities = [] } = { ...pokemon }
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

    const renderChipSprites = () => {
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

    const renderPkmn = () => {
        const { idDex = 0, sprites = {}, weight = '', height = '', dex_entry: { classification = {} } = {} } = { ...pokemon }
        const { typeOneUrlSprite = '', typeTwoUrlSprite = '' } = { ...pokemonTypes }
        const { male: male_sprite = '' } = { ...sprites }
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
                    <ImageBackground source={require('./../../Assets/images/BG_Holder_Pkmn_W.png')} style={styles.spriteContainer}>
                        <Image style={styles.sprite} source={{ uri: male_sprite }} />
                    </ImageBackground> :
                    <Image style={styles.sprite} source={require('./../../Assets/images/Icon_Pokedex.png')} />
                }
            </View>
        )
    }
    return (
        <View style={styles.background} >
            <NavBarSimple contentCenter={renderMiddle()} />
            {renderLoadingView()}
            {renderFailInternet()}
            <View style={styles.content}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colortype} style={styles.contentPokemon} >
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        {!!pokemon &&
                            <View>
                                {renderInformation()}
                                {renderStats()}
                                {renderEvolution()}
                                {renderAbility()}
                            </View>}
                    </ScrollView>
                    {renderChipSprites()}
                    {renderPkmn()}
                </LinearGradient >
            </View>
        </View >
    )
}