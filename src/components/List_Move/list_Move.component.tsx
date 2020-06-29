import React, { useEffect, useState } from 'react'
import { Text, FlatList, View, TouchableOpacity } from 'react-native'
import { getAllMoves } from '../../util/api'
import { getComponentStyle } from '../../Helpers/Stylus'
import ItemMove from './Item_Move'
import { Actions } from 'react-native-router-flux'
import _ from '../../Helpers/Utilities'
import { newString } from '../../Helpers/Tools'
import Loading_Screen from '../Loading'
import Fail_Internet from '../Fail_Internet'
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
        return !loading && (
            <Loading_Screen textLoading={'Cargando la lista de Movimientos...'} />
        )
    }
    const renderFailInternet = () => {
        return emptyState && (
            <Fail_Internet />
        )
    }
    const onPressMove = (item = {}, index: number) => Actions.MoveDetail({ item, index })

    return (
        <View style={styles.loading} >
            <NavBarSimple contentCenter={renderMiddle()} />
            {renderLoadingView()}
            {renderFailInternet()}
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