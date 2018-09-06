import React, { Component } from 'react'
import { Text, FlatList, View, TouchableOpacity, ImageBackground } from 'react-native'
import { getAllMoves } from '../../util/api'
import ItemMove from '../../components/ItemMove'
import { Actions } from 'react-native-router-flux'
import _ from '../../Helpers/Utilities'
import { newString, getTypeMoveSource, getTypeSource } from '../../Helpers/Validators'
import Loading from '../../components/Loading'
import NavBarSimple from '../../components/NavBar/Simple'
import styles from './style'

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
            <View style={{ alignItems: 'center' }}>
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
        const { loaded, moves } = this.state
        const { results } = moves
        if (!loaded) {
            return this.renderLoadingView()
        }
        return (
            <ImageBackground source={require('../../Assets/images/BG_Loading.png')} style={styles.loading}>
                <NavBarSimple
                    icon={'back'}
                    contentLeft={'<'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View>
                    <FlatList
                        data={results}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                onPress={() => { Actions.MoveDetail({ item, index }) }}>
                                <ItemMove
                                    name={newString((item as any).name)}
                                    typeSource={{ uri: getTypeSource('grass') }}
                                    categorySource={{ uri: getTypeMoveSource('special') }}
                                    description={'Short Description...'}
                                />
                            </TouchableOpacity>
                        } />
                </View>
            </ImageBackground>
        )
    }
}