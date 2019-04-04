import React, { Component } from 'react'
import { Text, FlatList, View, TouchableOpacity, ImageBackground } from 'react-native'
import { getAllMoves } from '../../util/api'
import { getComponentStyle } from '../../Helpers/Stylus'
import ItemMove from '../../components/ItemMove'
import { Actions } from 'react-native-router-flux'
import _ from '../../Helpers/Utilities'
import { newString } from '../../Helpers/Validators'
import Loading from '../../components/Loading'
import NavBarSimple from '../../components/NavBar/Simple'
import style from './style'

const styles = getComponentStyle(style)
export default class Move extends Component<MoveProps, MoveState> {
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
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={'Cargando los Movimientos'} />
        )
    }

    render() {
        const { loaded = false, moves = {} } = { ...this.state }
        if (!loaded) {
            return this.renderLoadingView()
        }
        return (
            <ImageBackground source={require('../../Assets/images/BG_Home.png')}
                style={styles.loading} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} />
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
            </ImageBackground>
        )
    }
}