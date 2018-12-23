import React, { Component } from 'react'
import { View, TouchableOpacity, FlatList } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import MenuItem from '../../components/MenuItem'
import { Actions } from 'react-native-router-flux'
import style from './style'
import Menu_Item from '../../Assets/json/Menu_home.json'
import NavBarSimple from '../../components/NavBar/Simple'

const styles = getComponentStyle(style)
export default class Home extends Component<any, any> {
    render() {
        const { options } = Menu_Item
        return (
            <View style={styles.container}>
                <NavBarSimple isHome={true} />
                <View style={styles.loading} >
                    <View style={styles.contentContainer}>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => (item as any).index}
                            renderItem={({ item }) =>
                                <TouchableOpacity
                                    onPress={() => { Actions.push(`${(item as any).actions}`) }}>
                                    <MenuItem
                                        name={(item as any).name}
                                        icon={{ uri: (item as any).icon }}
                                    />
                                </TouchableOpacity>
                            } />
                    </View>
                </View>
            </View>
        )
    }
}