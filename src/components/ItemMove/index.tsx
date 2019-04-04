import React from 'react'
import { View, Text, Image } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import style from './style'

const styles = getComponentStyle(style)
export default ({ name = '', typeSource = '', categorySource = '', power = '', accuracy = '' }: ItemMoveProps) => {
    return (
        <View style={styles.itemMove}>
            <View style={styles.typeContainer}>
                <Image style={styles.type} source={typeSource} />
            </View>
            <Text style={styles.textName}> {name} </Text>
            <View style={styles.stats}>
                <View style={styles.col1}>
                    <Text style={styles.titleCol}> {'Att'} </Text>
                    <Text style={styles.containerCol}>{power} </Text>
                </View>
                <View style={styles.col1}>
                    <Text style={styles.titleCol}> {'Acc'} </Text>
                    <Text style={styles.containerCol}> {accuracy} </Text>
                </View>
                <View style={styles.col1}>
                    <Image style={styles.category} source={categorySource} />
                </View>
            </View>
        </View>
    )
}
