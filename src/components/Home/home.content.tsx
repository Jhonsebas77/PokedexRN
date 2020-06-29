import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './home.style'
import Menu_Item from './Menu_item'
import { Actions } from 'react-native-router-flux'
import data from '../../Assets/json/Chip_Pokemon_Detail.json'

const styles = getComponentStyle(style)
export default function Home() {
    const { menu = [] } = { ...data }
    const onPressMenu = (item: any) => {
        const { action = '' } = { ...item }
        !!action && Actions.push(action)
    }
    return (
        <View style={styles.container}>
            <View style={styles.loading} >
                <View>
                    <FlatList
                        data={menu}
                        keyExtractor={(item) => (item as any).index}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => onPressMenu(item)}>
                                <Menu_Item
                                    name={(item as any).title}
                                    image={{ uri: (item as any).iconNoPress }}
                                />
                            </TouchableOpacity>
                        } />
                </View>
            </View>
        </View>
    )
}