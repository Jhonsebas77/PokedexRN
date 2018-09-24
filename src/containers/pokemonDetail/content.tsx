import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, FlatList } from 'react-native'
import { getURL } from '../../util/api'
import { paddingNumber, getTypeSource, getNormalSpriteSource } from '../../Helpers/Validators'
import _ from '../../Helpers/Utilities'
import { Colors, ColorType } from '../../Helpers/Colors'
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
        this.renderType = this.renderType.bind(this)
        this.renderSpritePokemon = this.renderSpritePokemon.bind(this)
        // this.renderColorType = this.renderColorType.bind(this)
    }

    async componentWillMount() {
        let pokemonUrl = this.props.item.url
        let pokemon = await getURL(pokemonUrl)
        console.log('====================================')
        console.log('pokemon WillMount', pokemon)
        console.log('====================================')
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

    // renderColorType(type1, type2?) {
    //     let ColorType
    //     let ColorsType = type1 + (type2 ? '_' + type2 : '')
    //     if (ColorsType === 'fire') {
    //         ColorType = Colors.fire
    //     } else if (ColorsType === 'poison_grass') {
    //         ColorType = Colors.poison_grass
    //     }

    //     console.log('color', ColorType)

    //     // let ColorsType = `Colors.` + type1 + (type2 ? '_' + type2 : '')
    //     return ColorType
    // }

    render() {
        const { id, types, sprites, weight, height, loaded } = this.state.pokemon
        console.log('props', this.props)
        // const colortype = this.renderColorType(types && types[0] && types[0].type.name, types && types[1] && types[1].type.name)
        console.log('====================================')
        const loquesea = ColorType(types && types[0] && types[0].type.name, types && types[1] && types[1].type.name)
        console.log('state', this.state)
        console.log('Value loquesea:', loquesea, 'Type Variable: ', typeof loquesea)
        console.log('====================================')
        if (!this.state.loaded) {
            return this.renderLoadingView()
        }
        return (
            <LinearGradient colors={[Colors.water, Colors.fight]} style={styles.loading} >
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
                    <View style={{ flexDirection: 'row' }}>
                        {types && types[1] ? this.renderType(types[1].type.name) : undefined}
                        {types && types[0] ? this.renderType(types[0].type.name) : undefined}
                    </View>
                </View >
                {/* <View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={dataChip}
                        renderItem={({ item, index }: any) =>
                            <Chip onPress={(item) => {
                                console.log('item', item)
                            }}
                                text={`${item.name} ${item.lastName ? item.lastName.charAt(0) : ''}`}
                                isFirst={index === 0}
                                gender={item.gender}
                                index={index}
                                pressed={item.pressed}
                            />}
                    />
                </View>

                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 340, height: 310, borderRadius: 20, margin: 30 }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                        {'Informacion'}
                    </Text>
                </View> */}
            </LinearGradient >
        )
    }
}
