import React, { useEffect, useState, useRef } from 'react'
import { Text, FlatList, View, TouchableOpacity } from 'react-native'
import { getAllNewItem } from '../../util/api'
import ItemItem from './Item_Object'
import ItemModal from './Item_Modal'
import { newString } from '../../Helpers/Tools'
import _ from '../../Helpers/Utilities'
import Loading_Screen from '../Loading'
import NavBarSimple from '../NavBar/Simple'
import style from './list_Item.style'
import Fail_Internet from '../Fail_Internet'
import { getComponentStyle } from '../../Helpers/Stylus'

const styles = getComponentStyle(style)
export default function Item() {
    const refModal = useRef(null)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [LoadData, setLoadData] = useState(false)
    const [emptyState, setEmptyState] = useState(true)

    useEffect(() => {
        const getItemData = async () => {
            const itemData = await getAllNewItem()
            setItems(itemData)
            setLoading(true)
            setLoadData(true)
        }
        _.arrayHasItems(items) && setEmptyState(false)
        !LoadData && getItemData()
    }, [loading])

    const renderMiddle = () => {
        return (
            <Text style={styles.title}>{'MOCHILA'}</Text>
        )
    }
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
    const handleRefModal = (item: any) => {
        const { current = null } = refModal
        !!current && current.openModal && current.openModal(item)
    }
    return (
        <View style={styles.loading} >
            <NavBarSimple contentCenter={renderMiddle()} />
            {renderLoadingView()}
            {renderFailInternet()}
            <View style={styles.container}>
                <FlatList
                    data={items}
                    numColumns={3}
                    keyExtractor={(item) => (item as any).index}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => handleRefModal(item)}>
                            <ItemItem
                                name={newString((item as any).name)}
                                itemSpriteSource={{ uri: (item as any).urlSprite }}
                            />
                        </TouchableOpacity>
                    } />
                <ItemModal ref={refModal} />
            </View>
        </View>
    )
}