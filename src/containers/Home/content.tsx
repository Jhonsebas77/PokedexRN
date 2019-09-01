import React, { Component } from 'react'
import { View } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'
import Pokemon from '../../containers/Pokemon'
import Items from '../../containers/Item'
import Move from '../../containers/Move'
import BottomTabBar from '../../components/BottomTabBar'

const styles = getComponentStyle(style)
export default class Home extends Component<any, any> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loading} >
                    {<BottomTabBar initialTab={0} tabList={[{
                        title: 'Pokemon',
                        iconPress: 'https://pokedex-jsob.s3.us-east-2.amazonaws.com/UI/Menu_Item/Icon_Pok_Press.png',
                        iconName: 'https://s3.us-east-2.amazonaws.com/pokedex-jsob/UI/Menu_Item/Icon_Pokedex.png', cmp: <Pokemon key={'1'}
                            title='Más'
                        />
                    }, {
                        title: 'Item',
                        iconPress: 'https://pokedex-jsob.s3.us-east-2.amazonaws.com/UI/Menu_Item/Icon_Bag_Press.png',
                        iconName: 'https://s3.us-east-2.amazonaws.com/pokedex-jsob/UI/Menu_Item/Icon_Item.png', cmp: <Items key={'2'}
                            title='Más'
                        />
                    }, {
                        title: 'Movimientos',
                        iconPress: 'https://pokedex-jsob.s3.us-east-2.amazonaws.com/UI/Menu_Item/Icon_Mov_Press.png',
                        iconName: 'https://s3.us-east-2.amazonaws.com/pokedex-jsob/UI/Menu_Item/Icon_Moves.png', cmp: <Move key={'3'}
                            title='Más'
                        />
                    }
                    ]} />}
                </View>
            </View>
        )
    }
}