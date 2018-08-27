import React, { Component } from 'react';
import {
    Text,
    FlatList,
    View,
    TouchableOpacity
} from 'react-native'
import MenuItem from '../../components/MenuItem'
import { Actions } from 'react-native-router-flux'
import styles from './style'

export default class Home extends Component<any, any> {
    render() {
        return (
            <View>
                <Text> {`HOME POKEDEX`}</Text>
                <View style={styles.container}>
                    <View style={styles.menuItem}>
                        <TouchableOpacity onPress={() => { Actions.Items() }}>
                            <MenuItem name={'Items'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuItem}>
                        <TouchableOpacity onPress={() => { Actions.Pokemon() }}>
                            <MenuItem name={'Pokemones'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

