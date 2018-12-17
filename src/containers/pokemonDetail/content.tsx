import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, FlatList, ScrollView } from 'react-native'
import { getPokemon } from '../../util/api'
import { paddingNumber } from '../../Helpers/Validators'
import _ from '../../Helpers/Utilities'
import { ColorType } from '../../Helpers/Colors'
import NavBarSimple from '../../components/NavBar/Simple'
import styles from './style'
import Chip from '../../components/Chip'
import Loading from '../../components/Loading'
import LinearGradient from 'react-native-linear-gradient'

const dataChip = [
    {
        'gender': 'F',
        'name': 'Normal',
        'pressed': 0
    },
    {
        'gender': 'F',
        'name': 'Shiny',
        'pressed': '2'
    },
    {
        'gender': 'F',
        'name': 'Mega Evolucion X',
        'pressed': '1'
    },
    {
        'gender': 'F',
        'name': 'Mega Evolucion Y',
        'pressed': 0
    }
]
export default class PokemonDetail extends Component<PkmnDetailProps, PkmnDetailState> {
    TypeColor: any
    constructor(props) {
        super(props)
        this.state = {
            pokemon: [],
            loaded: false
        }
        this.renderInformation = this.renderInformation.bind(this)
        this.renderEvolution = this.renderEvolution.bind(this)
        this.renderHability = this.renderHability.bind(this)
        this.selectChip = this.selectChip.bind(this)
    }

    async componentWillMount() {
        const { item = {} } = { ...this.state }
        const { idDex = '006' } = item
        let pokemon = await getPokemon(idDex)
        this.setState({ pokemon, loaded: true })
    }

    renderLoadingView() {
        const { item = {} } = { ...this.state }
        const { idDex = '006' } = item
        return (
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={` ${idDex}`} />
        )
    }

    renderMiddle() {
        const { name } = this.state.pokemon
        return (
            <View style={{ alignItems: 'center', paddingLeft: 2 }}>
                <Text style={styles.title}>{name ? name : 'Pokemon Detail'}</Text>
            </View>
        )
    }

    renderInformation() {
        const { dex_entry = {} } = this.state.pokemon
        const { flavor_text = {} } = dex_entry
        return (
            <View style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 340, borderRadius: 20,
                marginHorizontal: 30, alignItems: 'center', paddingTop: 5
            }}>
                <View>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                        {'Informacion'}
                    </Text>
                </View>
                <View>
                    <Text style={{ color: 'white', textAlign: 'center', paddingVertical: 10 }}>
                        {flavor_text}
                    </Text>
                </View>
            </View>
        )
    }

    renderStats() {
        const { stats = {} } = this.state.pokemon
        const { attack = {}, defense = {}, hp = {}, special_attack = {}, special_defense = {}, speed = {} } = stats
        return (
            <View style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 340, borderRadius: 20,
                marginHorizontal: 30, marginTop: 10
            }}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                    {'Estadisticas'}
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <Text style={{ color: 'white', textAlign: 'center', paddingVertical: 10 }}>
                        {`Ataque: ${attack}\n`}
                        {`Defensa: ${defense}\n`}
                        {`Salud: ${hp}`}
                    </Text>
                    <Text style={{ color: 'white', textAlign: 'center', paddingVertical: 10 }}>
                        {`Ataque Especial: ${special_attack}\n`}
                        {`Defensa Especial: ${special_defense}\n`}
                        {`Velocidad: ${speed}\n`}
                    </Text>
                </View>
            </View>
        )
    }

    renderEvolution() {
        return (
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 340, borderRadius: 20, marginHorizontal: 30, marginTop: 10 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                    {'Evolucion'}
                </Text>
            </View>
        )
    }

    renderHability() {
        return (
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 340, borderRadius: 20, marginHorizontal: 30, marginTop: 10 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                    {'Habilidad'}
                </Text>
            </View>
        )
    }

    selectChip(type?) {
        if (type) {
            if (type === 'Informacion') {
                return this.renderInformation()
            }
            if (type === 'Evolucion') {
                return this.renderEvolution()
            }
        } return this.renderInformation()
    }

    render() {
        const { idDex = '', types = [], sprites = {}, weight = '', height = '', dex_entry = {} } = this.state.pokemon
        const { classification = {} } = dex_entry
        const [principalType = [], secundaryType = []] = types
        const [typeppal] = principalType
        const [typesecond] = secundaryType
        const { type: { name: type2 = '', urlSprite: type2_urlSprite = {} } = {} } = { ...typeppal }
        const { type: { name: type1 = '', urlSprite: type1_urlSprite = '' } = {} } = { ...typesecond }
        const colortype = types && ColorType(type2, type1)
        if (!this.state.loaded) {
            return this.renderLoadingView()
        }
        return (
            <View style={styles.background} >
                <NavBarSimple
                    icon={'back'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View style={{ backgroundColor: '#C64934', padding: 10 }}>
                    {/* <View style={styles.loading} > */}
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={types && colortype} style={styles.loading} >
                        <ScrollView contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}>
                            <View>
                                {this.renderInformation()}
                                {this.renderStats()}
                                {this.renderEvolution()}
                                {this.renderHability()}
                            </View>
                        </ScrollView>
                        <View style={{ marginVertical: 10 }}>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={dataChip}
                                keyExtractor={(item) => (item as any).index}
                                renderItem={({ item, index }: any) =>
                                    <Chip onPress={() => {
                                        this.selectChip(item.name)
                                    }}
                                        text={`${item.name} ${item.lastName ? item.lastName.charAt(0) : ''}`}
                                        isFirst={index === 0}
                                        gender={item.gender}
                                        index={index}
                                        pressed={item.pressed}
                                    />}
                            />
                        </View>
                        <View style={styles.containerPkmn}>
                            <View style={{ marginLeft: 20, alignItems: 'center', justifyContent: 'center' }}>
                                {classification && <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                                    {`${classification}`}
                                </Text>}
                                <Text style={styles.titleId}>{idDex ? `#${paddingNumber(idDex)}` : '-- -----'}</Text>
                                <View style={styles.containerTypes}>
                                    {types && type1 &&
                                        <View style={styles.typeContainer}>
                                            <Image style={styles.type} source={{ uri: type1_urlSprite }} />
                                        </View>
                                    }
                                    {types && type2 &&
                                        <View style={styles.typeContainer}>
                                            <Image style={styles.type} source={{ uri: type2_urlSprite }} />
                                        </View>
                                    }
                                </View>
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                                    {` Peso ${weight}`}
                                </Text>
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                                    {`Altura  ${height}`}
                                </Text>
                            </View>
                            {sprites ?
                                <ImageBackground source={require('../../Assets/images/BG_Holder_Pkmn_W.png')} style={styles.spriteContainer}>
                                    <Image style={styles.sprite} source={{ uri: sprites.normal }} />
                                </ImageBackground> :
                                <Image style={styles.sprite} source={require('../../Assets/images/Icon_Pokedex.png')} />
                            }
                        </View>
                    {/* </View> */}
                    </LinearGradient >
                </View>
            </View >
        )
    }
}