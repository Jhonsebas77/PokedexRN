import React, { Component } from 'react'
import { View } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './home.style'
import Pokemon from './../List_Pokemon'
import Items from './../List_Item'
import Move from '../ListMove'
import More from '../More'
import BottomTabBar from './../BottomTabBar'
import data from '../../Assets/json/Chip_Pokemon_Detail.json'

const styles = getComponentStyle(style)
export default class Home extends Component<any, any> {
    render() {
        const { menu = [] } = { ...data }
        const [one = {}, two = {}, three = {}, four = {}] = menu || []
        const { title: oneTitle = '', iconPress: oneIconPress = '', iconName: oneIconName = '' } = { ...one }
        const { title: twoTitle = '', iconPress: twoIconPress = '', iconName: twoIconName = '' } = { ...two }
        const { title: threeTitle = '', iconPress: threeIconPress = '', iconName: threeIconName = '' } = { ...three }
        const { title: fourTitle = '', iconPress: fourIconPress = '', iconName: fourIconName = '' } = { ...four }
        return (
            <View style={styles.container}>
                <View style={styles.loading} >
                    {<BottomTabBar initialTab={0} tabList={[
                        {
                            title: oneTitle,
                            iconPress: oneIconPress,
                            iconName: oneIconName,
                            cmp: <Pokemon key={'1'} />
                        },
                        {
                            title: twoTitle,
                            iconPress: twoIconPress,
                            iconName: twoIconName,
                            cmp: <Items key={'2'} />
                        },
                        {
                            title: threeTitle,
                            iconPress: threeIconPress,
                            iconName: threeIconName,
                            cmp: <Move key={'3'} />
                        },
                        {
                            title: fourTitle,
                            iconPress: fourIconPress,
                            iconName: fourIconName,
                            cmp: <More key={'4'} />
                        }
                    ]} />}
                </View>
            </View>
        )
    }
}