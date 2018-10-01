import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, FlatList, ScrollView, TouchableHighlight } from 'react-native'
import { getURL } from '../../util/api'
import { paddingNumber, getTypeSource, getNormalSpriteSource } from '../../Helpers/Validators'
import _ from '../../Helpers/Utilities'
import { ColorType } from '../../Helpers/Colors'
import NavBarSimple from '../../components/NavBar/Simple'
import styles from './style'
import Chip from '../../components/Chip'
import Loading from '../../components/Loading'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient'

const dataChip = [
    {
        'gender': 'F',
        'name': 'Informacion',
        'pressed': 0
    },
    {
        'gender': 'F',
        'name': 'Evolucion',
        'pressed': '1'
    },
    {
        'gender': 'F',
        'name': 'Habilidades',
        'pressed': '2'
    },
    {
        'gender': 'F',
        'name': 'Stats',
        'pressed': '3'
    },
    {
        'gender': 'F',
        'name': 'Movimientos',
        'pressed': '4'
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
        this.renderType = this.renderType.bind(this)
        this.renderSpritePokemon = this.renderSpritePokemon.bind(this)
        this.renderInformation = this.renderInformation.bind(this)
        this.renderEvolution = this.renderEvolution.bind(this)
        this.renderHability = this.renderHability.bind(this)
        this.selectChip = this.selectChip.bind(this)
    }

    async componentWillMount() {
        let pokemonUrl = this.props.item.url
        let pokemon = await getURL(pokemonUrl)
        this.setState({ pokemon, loaded: true })
    }

    renderType(type) {
        const url = getTypeSource(type)
        return (
            <View style={styles.typeContainer}>
                <Image style={styles.type} source={{ uri: url }} />
            </View>
        )
    }

    renderLoadingView() {
        return (
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={'Cargando el detalle'} />
        )
    }

    renderMiddle() {
        const { name, id } = this.state.pokemon
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{name ? `${_.capitalize(name)}` : 'Pokemon Detail'}</Text>
                <Text style={styles.titleId}>{id ? `#${paddingNumber(id)}` : '-- -----'}</Text>
            </View>
        )
    }

    renderSpritePokemon(id) {
        const url = getNormalSpriteSource(id)
        return (
            <ImageBackground source={require('../../Assets/images/BG_Holder_Pkmn.png')} style={styles.spriteContainer}>
                <Image style={styles.sprite} source={{ uri: url }} />
            </ImageBackground>
        )
    }

    renderInformation() {
        return (
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 340, height: 310, borderRadius: 20, margin: 30 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                    {'Informacion'}
                </Text>
            </View>
        )
    }

    renderEvolution() {
        return (
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 340, height: 310, borderRadius: 20, margin: 30 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                    {'Evolucion'}
                </Text>
            </View>
        )
    }

    renderHability() {
        return (
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 340, height: 310, borderRadius: 20, margin: 30 }}>
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
        const { id, types, sprites, weight, height } = this.state.pokemon
        let type1 = types && types[0] ? types[0].type.name : 'unknown'
        let type2 = types && types[1] && types[1].type.name
        const colortype = types && ColorType(type1, type2)

        if (!this.state.loaded) {
            return this.renderLoadingView()
        }
        return (
            <LinearGradient colors={types && colortype} style={styles.loading} >
                <NavBarSimple
                    icon={'back'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
                <View style={styles.head}>
                    <View>
                        {sprites ?
                            this.renderSpritePokemon(id) :
                            <Image style={styles.sprite} source={require('../../Assets/images/Icon_Pokedex.png')} />
                        }
                    </View>
                </View >
                <ScrollView contentContainerStyle={{ paddingVertical: 20, alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 340, height: 70, borderRadius: 20, alignItems: 'center', paddingVertical: 10 }}>
                        <View style={{ flexDirection: 'row', height: 30 }}>
                            {types && types[1] ? this.renderType(types[1].type.name) : undefined}
                            {types && types[0] ? this.renderType(types[0].type.name) : undefined}
                        </View>
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                            {` Peso ${weight} - Altura  ${height}`}
                        </Text>
                    </View>
                    <View>
                        {this.selectChip()}
                    </View>
                </ScrollView>
                <View style={{ marginVertical: 10 }}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={dataChip}
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
            </LinearGradient >
        )
    }
}
