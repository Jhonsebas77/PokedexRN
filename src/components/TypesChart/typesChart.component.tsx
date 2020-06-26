import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import { getType } from '../../util/api'
import _ from '../../Helpers/Utilities'
import Loading_Screen from '../Loading'
import ItemType from './ItemTypeChart'
import NavBarSimple from '../NavBar/Simple'
import Fail_Internet from '../Fail_Internet'
import style from './typesChart.style'

const styles = getComponentStyle(style)
export default function Types() {
    const [type, setType] = useState([])
    const [loading, setLoading] = useState(false)
    const [LoadData, setLoadData] = useState(false)
    const [emptyState, setEmptyState] = useState(true)

    useEffect(() => {
        const getTypeData = async () => {
            const typeData = await getType()
            setType(typeData)
            setLoading(true)
            setLoadData(true)
        }
        _.arrayHasItems(type) && setEmptyState(false)
        !LoadData && getTypeData()
    }, [loading])
    const renderMiddle = () => {
        return (
            <Text style={styles.title}>{'Tipos'}</Text>
        )
    }
    const renderLoadingView = () => {
        return !loading && (
            <Loading_Screen textLoading={'Cargando los datos...'} />
        )
    }
    const renderFailInternet = () => {
        return emptyState && (
            <Fail_Internet />
        )
    }
    return (
        <View style={styles.loading} >
            <NavBarSimple contentCenter={renderMiddle()} isHome={true} />
            {renderLoadingView()}
            {renderFailInternet()}
            <View style={styles.contentItemPokemon}>
                <FlatList
                    data={type}
                    keyExtractor={(item) => (item as any).index}
                    renderItem={({ item, index }) =>
                        <ItemType
                            number={index}
                            data={...item}
                        />
                    } />
            </View>
        </View>
    )
}