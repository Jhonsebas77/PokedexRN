import React, { useEffect, useState } from 'react'
import { Text, View, Image, ImageBackground, FlatList, ScrollView } from 'react-native'
import { getPokemon } from '../../util/api'
import { getComponentStyle } from '../../Helpers/Stylus'
import _ from '../../Helpers/Utilities'
import { paddingNumber } from '../../Helpers/Tools'
import { Colors } from '../../Helpers/Colors'
import { ColorType } from '../../Helpers/Colors'
import NavBarSimple from '../NavBar/Simple'
import style from './detail_Pokemon.style'
import ChipSprites from './ChipSprites'
import Chip from '../../Assets/json/Chip_Pokemon_Detail.json'
import Fail_Internet from '../Fail_Internet'
import Loading_Screen from '../Loading'
import Information_Pokemon from './Information_Pokemon'
import Stats_Pokemon from './Stats_Pokemon'
import Evolution_Pokemon from './Evolution_Pokemon'
import Hability_Pokemon from './Hability_Pokemon'
import LinearGradient from 'react-native-linear-gradient'

const styles = getComponentStyle(style)
export default function PokemonDetail(props: PkmnDetailProps) {
    const [pokemon, setPokemon] = useState([])
    const [pokemonTypes, setPokemonTypes] = useState({})
    const [pokemonStats, setPokemonStats] = useState({})
    const [pokemonHabilities, setPokemonHabilities] = useState({})
    const [colortype, setColortype] = useState([Colors.unknown, Colors.unknown1])
    const [loading, setLoading] = useState(false)
    const [LoadData, setLoadData] = useState(false)
    const [pokemonEvolution, setPokemonEvolution] = useState([])
    const [emptyState, setEmptyState] = useState(true)
    const [info_pokemon, setInfo_pokemon] = useState('')

    useEffect(() => {
        const getItemData = async () => {
            const { item: { idDex = '001' } = {} } = { ...props }
            const pokemonData = await getPokemon(idDex)
            setPokemon(pokemonData)
            const { types = [], dex_entry = {}, stats = {}, line_evolution = [], abilities = [] } = { ...pokemonData }
            const { flavor_text = '' } = { ...dex_entry }
            setInfo_pokemon(flavor_text)
            setPokemonStats(stats)
            setPokemonEvolution(line_evolution)
            setPokemonHabilities(abilities)
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
            <Loading_Screen textLoading={'Cargando la información del Pokémon seleccionado...'} />
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
            <Text style={styles.title}>{name}</Text>
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
                        <Information_Pokemon flavor_text={info_pokemon} />
                        <Stats_Pokemon stats={pokemonStats} />
                        <Evolution_Pokemon evolutionChain={pokemonEvolution} />
                        <Hability_Pokemon habilities={pokemonHabilities} />
                    </ScrollView>
                    {renderChipSprites()}
                    {renderPkmn()}
                </LinearGradient >
            </View>
        </View >
    )
}