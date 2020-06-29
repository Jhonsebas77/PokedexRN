import React, { useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import { getMove } from '../../util/api'
import { newString, paddingNumber } from '../../Helpers/Tools'
import NavBarSimple from '../NavBar/Simple'
import LinearGradient from 'react-native-linear-gradient'
import { Actions } from 'react-native-router-flux'
import { ColorType as _ColorType, GetColorType, Colors } from '../../Helpers/Colors'
import Item_pkm_Move from './Item_pkm_Move'
import Cristalzmove from './CristalZ_Move'
import _ from '../../Helpers/Utilities'
import Loading_Screen from '../Loading'
import Fail_Internet from '../Fail_Internet'
import style from './detail_Move.style'

const styles = getComponentStyle(style)
export default function MoveDetail(props: {}) {
    const { item: { idDex = 1 } = {} } = { ...props }
    const [loading, setLoading] = useState(false)
    const [LoadData, setLoadData] = useState(false)
    const [emptyState, setEmptyState] = useState(true)
    const [newMoveData, setNewMoveData] = useState([])
    const [spriteBattleType, setSpriteBattleType] = useState('')
    const [spriteCategory, setSpriteCategoryType] = useState('')
    const [short_effect, setShort_effect] = useState('')
    const [name, setName] = useState('')
    const [borderColor, setBorderColor] = useState([])
    const [colorType, setColorType] = useState([Colors.unknown, Colors.unknown1])

    const prepareDataMove = (move = {}) => {
        const { battleType = {}, category = {}, effect_entries: { short_effect: short_effect_ = '' } = {}, name: name_ = '' } = { ...move }
        const { sprite: sprite_Battle = '', name: nameBattleType = '' } = { ...battleType }
        const { sprite: sprite_Category = '' } = { ...category }
        const colorType_ = battleType && _ColorType(nameBattleType)
        const borderColor_ = battleType && GetColorType(nameBattleType)
        setSpriteBattleType(sprite_Battle)
        setSpriteCategoryType(sprite_Category)
        setBorderColor(borderColor_)
        setColorType(colorType_)
        setShort_effect(short_effect_)
        setName(name_)
    }
    useEffect(() => {
        const getPokemonData = async () => {
            const move_ = await getMove(idDex)
            prepareDataMove(move_)
            setNewMoveData(move_)
            setLoading(true)
            setLoadData(true)
        }
        !_.isEmpty(newMoveData) && setEmptyState(false)
        !LoadData && getPokemonData()
    }, [loading])

    const renderMiddle = () => {
        return (
            <Text style={styles.titleNavBar}>{'MOVIMIENTOS'}</Text>
        )
    }

    const renderSphere = (sprite: string) => {
        return (
            <View style={styles.categoryContainer}>
                <Image style={styles.type} source={{ uri: sprite }} />
            </View>
        )
    }
    const renderListPokemonLearn = () => {
        const { pokemon_learn: [pokemonMoves = []] = [] } = { ...newMoveData }
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
    const renderCristalzmove = () => {
        const { zPower = {} } = { ...newMoveData }
        const { basePower = 0, effect = '', name: name_cristalZ = '', urlSprite = '' } = { ...zPower }
        return (
            <View style={styles.head3}>
                <Cristalzmove name={name_cristalZ} urlSprite={urlSprite} basePower={basePower} effect={effect} />
            </View>
        )
    }

    const renderLoadingView = () => {
        return !loading && (
            <Loading_Screen textLoading={'Cargando el detalle del movimiento...'} />
        )
    }

    const renderMoveStats = () => {
        const { accuracy = 0, basePower = 0, pp = 0 } = { ...newMoveData }
        return (
            <View style={styles.containerStats}>
                <Text> {accuracy ? `Precisión: ${accuracy}% ` : '-- -----'}  </Text>
                <Text>  {basePower ? `Poder: ${basePower} ` : '-- -----'} </Text>
                <Text>  {pp && `PP: ${pp} `}  </Text>
            </View>
        )
    }

    const renderFailInternet = () => {
        return emptyState && (
            <Fail_Internet />
        )
    }

    return (
        <View style={styles.background} >
            <NavBarSimple contentCenter={renderMiddle()} />
            {renderLoadingView()}
            {renderFailInternet()}
            <ScrollView>
                <View style={[{ borderColor }, styles.head]}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colorType} style={styles.loading} >
                        <View style={styles.viewAlignItem}>
                            <Text style={styles.title}>{name ? `${newString(name)}` : 'Move Detail'}</Text>
                        </View>
                        <View style={styles.containerStatics}>
                            {renderSphere(spriteBattleType)}
                            {renderSphere(spriteCategory)}
                            {renderMoveStats()}
                        </View>
                        <View style={[{ borderColor }, styles.textContainer]}>
                            <Text style={styles.paddingText}>
                                {short_effect ? `${short_effect} ` : ''}
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
                {renderCristalzmove()}
                {renderListPokemonLearn()}
            </ScrollView>
        </View >
    )

}