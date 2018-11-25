import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, FlatList, ScrollView } from 'react-native'
import { getPokemon } from '../../util/api'
import { paddingNumber} from '../../Helpers/Validators'
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
        this.renderInformation = this.renderInformation.bind(this)
        this.renderEvolution = this.renderEvolution.bind(this)
        this.renderHability = this.renderHability.bind(this)
        this.selectChip = this.selectChip.bind(this)
    }

    async componentWillMount() {
        let pokemon = await getPokemon(this.props.item.idDex)
        this.setState({ pokemon, loaded: true })
    }

    renderLoadingView() {
        return (
            <Loading imageLoading={require('../../Assets/images/BG_Loading.png')} textLoading={'Cargando el detalle'} />
        )
    }

    renderMiddle() {
        const { name } = this.state.pokemon
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{name ? name : 'Pokemon Detail'}</Text>
            </View>
        )
    }

    renderInformation() {
        return (
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 340, height: 200, borderRadius: 20, margin: 30 }}>
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
        const { idDex, types, sprites, weight, height } = this.state.pokemon
        let type1 = types && types[0][0].type ? types[0][0].type.name : 'unknown'
        let type2 = types && types[1][0].type && types[1][0].type.name
        const colortype = types && ColorType(type1, type2)
        if (!this.state.loaded) {
            return this.renderLoadingView()
        }
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={types && colortype} style={styles.loading} >
                <NavBarSimple
                    icon={'back'}
                    contentCenter={this.renderMiddle()}
                >
                </NavBarSimple>
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
                <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                    <View>
                        {this.selectChip()}
                    </View>
                </ScrollView>
                <View style={styles.containerPkmn}>
                    <View style={{ marginLeft: 0 }}>
                        <View style={styles.containerTypes}>
                            {types && types[1][0].type &&
                                <View style={styles.typeContainer}>
                                    <Image style={styles.type} source={{ uri: types[1][0].type.urlSprite }} />
                                </View>
                            }
                            {types && types[0][0].type &&
                                <View style={styles.typeContainer}>
                                    <Image style={styles.type} source={{ uri: types[0][0].type.urlSprite }} />
                                </View>
                            }
                        </View>
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                            {` Peso ${weight}`}
                        </Text>
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                            {`Altura  ${height}`}
                        </Text>
                        <Text style={styles.titleId}>{idDex ? `#${paddingNumber(idDex)}` : '-- -----'}</Text>
                    </View>
                    {sprites ?
                        <ImageBackground source={require('../../Assets/images/BG_Holder_Pkmn_W.png')} style={styles.spriteContainer}>
                            <Image style={styles.sprite} source={{ uri: sprites.normal }} />
                        </ImageBackground> :
                        <Image style={styles.sprite} source={require('../../Assets/images/Icon_Pokedex.png')} />
                    }
                </View>
            </LinearGradient >
        )
    }
}
