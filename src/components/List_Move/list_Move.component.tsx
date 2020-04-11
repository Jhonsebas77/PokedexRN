import React, { Component } from 'react'
import { Text, FlatList, View, TouchableOpacity } from 'react-native'
import { getAllMoves } from '../../util/api'
import { getComponentStyle } from '../../Helpers/Stylus'
import ItemMove from './Item_Move'
import { Actions } from 'react-native-router-flux'
import _ from '../../Helpers/Utilities'
import { newString } from '../../Helpers/Tools'
import Loading from '../Loading'
import NavBarSimple from '../NavBar/Simple'
import style from './list_Move.style'

const styles = getComponentStyle(style)
export default class Move extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            moves: [],
            loaded: false
        }
    }

    async componentWillMount() {
        let moves = await getAllMoves()
        this.setState({ moves, loaded: true })
    }

    renderMiddle() {
        return (
            <View style={styles.contentTitle}>
                <Text style={styles.title}>{'MOVIMIENTOS'}</Text>
            </View>
        )
    }

    renderLoadingView() {
        return (
            <Loading imageLoading={require('./../../Assets/images/BG_Loading.png')} textLoading={'Cargando los Movimientos'} />
        )
    }

    render() {
        const { loaded = false, moves = [] } = { ...this.state }
        if (!loaded) {
            return this.renderLoadingView()
        }
        return (
            <View style={styles.loading} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} isHome={true} />
                <View>
                    <FlatList
                        data={moves}
                        keyExtractor={(item) => (item as any).index}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                onPress={() => { Actions.MoveDetail({ item, index }) }}>
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
}