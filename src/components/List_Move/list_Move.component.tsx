import React, { useEffect, useState } from 'react'
import { Text, FlatList, View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { getAllMoves } from '../../util/api'
import { getComponentStyle } from '../../Helpers/Stylus'
import ItemMove from './Item_Move'
import { Actions } from 'react-native-router-flux'
import _ from '../../Helpers/Utilities'
import { newString } from '../../Helpers/Tools'
import Loading_Screen from '../Loading'
import NavBarSimple from '../NavBar/Simple'
import style from './list_Move.style'

const styles = getComponentStyle(style)
export default function List_Move() {
    const [loading, setLoading] = useState(false)
    const [LoadData, setLoadData] = useState(false)
    const [emptyState, setEmptyState] = useState(true)
    const [newMovesData, setNewMovesData] = useState([])

    useEffect(() => {
        const getPokemonData = async () => {
            const moves = await getAllMoves()
            setNewMovesData(moves)
            setLoading(true)
            setLoadData(true)
        }
        _.arrayHasItems(newMovesData) && setEmptyState(false)
        !LoadData && getPokemonData()
    }, [loading])

    const renderMiddle = () => {
        return (
            <Text style={styles.title}>{'MOVIMIENTOS'}</Text>
        )
    }
    const renderLoadingView = () => {
        return (
            <Loading_Screen imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={'Cargando la Pokedex'} />
        )
    }
    const renderFailInternet = () => {
        return (
            <ImageBackground source={require('./../../Assets/images/BG_Home.png')} style={styles.loading} >
                <View style={styles.contentLoading}>
                    <Image style={styles.sprite} source={require('./../../Assets/images/No_Internet.png')} />
                    <Text style={styles.title}>{'Lo sentimos, no hay conexion a internet'}</Text>
                </View>
            </ImageBackground>
        )
    }
    const onPressMove = (item = {}, index: number) => Actions.MoveDetail({ item, index })

    return (
        <View style={styles.loading} >
            <NavBarSimple contentCenter={renderMiddle()} />
            {!loading && renderLoadingView()}
            {emptyState && renderFailInternet()}
            <View>
                <FlatList
                    data={newMovesData}
                    keyExtractor={(item) => (item as any).index}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity
                            onPress={() => onPressMove(item, index)}>
                            <ItemMove
                                name={newString((item as any).name)}
                                typeSource={{ uri: (item as any).spriteBattleType }}
                                categorySource={{ uri: (item as any).spriteCategory }}
                                power={(item as any).basePower}
                                accuracy={(item as any).accuracy}
                            />
                        </TouchableOpacity>
                    } />
            </View>
        </View>
    )
}