import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import { getMove } from '../../util/api'
import { newString } from '../../Helpers/Validators'
import NavBarSimple from '../../components/NavBar/Simple'
import LinearGradient from 'react-native-linear-gradient'
import { ColorType, GetColorType } from '../../Helpers/Colors'
import MenuItem from '../../components/MenuItem'
import Loading from '../../components/Loading'
import style from './style'

const styles = getComponentStyle(style)
export default class MoveDetail extends Component<PkmnDetailProps, PkmnDetailState> {
    constructor(props) {
        super(props)
        this.state = {
            move: [],
            loaded: false
        }
    }

    async componentWillMount() {
        let move = await getMove(this.props.item.idDex)
        this.setState({ move, loaded: true })
    }

    renderMiddle() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{'MOVIMIENTOS'}</Text>
            </View>
        )
    }

    renderSphere(sprite) {
        return (
            <View style={styles.categoryContainer}>
                <Image style={styles.type} source={{ uri: sprite }} />
            </View>
        )
    }
    renderBtnPokemon() {
        return (
            <View style={styles.head}>
                <TouchableOpacity
                    // onPress={() => { Actions.push(`Pokemon`) }}>
                    onPress={() => console.log('Presiono')}>
                    <MenuItem
                        name={'Aprenden el Movimiento'}
                        icon={{ uri: 'https://s3.us-east-2.amazonaws.com/pokedex-jsob/UI/Menu_Item/Icon_MoveLearn.png' }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    renderLoadingView() {
        return (
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={` Cargando...`} />
        )
    }

    renderMoveStats() {
        const { accuracy = 0, basePower = 0, pp = 0 } = { ...this.state.move }
        return (
            <View style={styles.containerStats}>
                <Text> {accuracy ? `accuracy: ${accuracy}% ` : '-- -----'}  </Text>
                <Text>  {basePower ? `power: ${basePower} ` : '-- -----'} </Text>
                <Text>  {pp && `pp: ${pp} `}  </Text>
            </View>
        )
    }

    render() {
        const { name = '', effect_entries = {}, category: { sprite: spriteCategory = '' } = {},
            battleType: { sprite: spriteBattleType = '', name: nameBattleType = '' } = {} } = this.state.move
        const colortype = ColorType(nameBattleType)
        const borderColor = GetColorType(nameBattleType)
        const { short_effect = '' } = { ...effect_entries }
        if (!this.state.loaded) {
            return this.renderLoadingView()
        }
        return (
            <View style={styles.background} >
                <NavBarSimple icon={'back'} contentCenter={this.renderMiddle()} > </NavBarSimple>
                <View style={[{ borderColor }, styles.head]}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colortype} style={styles.loading} >
                        <View style={styles.viewAlignItem}>
                            <Text style={styles.title}>{name ? `${newString(name)}` : 'Move Detail'}</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                            {this.renderSphere(spriteBattleType)}
                            {this.renderSphere(spriteCategory)}
                            {this.renderMoveStats()}
                        </View>
                        <View style={[{ borderColor }, styles.textContainer]}>
                            <Text style={styles.paddingText}>
                                {effect_entries ? `${short_effect} ` : ''}
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
                {this.renderBtnPokemon()}
            </View >
        )
    }
}