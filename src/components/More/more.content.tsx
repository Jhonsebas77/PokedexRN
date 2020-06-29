import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, Switch } from 'react-native'
import { ThemeContext } from './../../Helpers/Theme/theme.context'
import { getComponentStyle } from '../../Helpers/Stylus'
import More_Item from './More_Item'
import { Actions } from 'react-native-router-flux'
import _ from '../../Helpers/Utilities'
import NavBarSimple from '../NavBar/Simple'
import style from './more.style'

const styles = getComponentStyle(style)
export default function More() {
    const { theme = '', changeTheme = () => { }, isLightTheme = true } = useContext(ThemeContext)
    const [isEnabled, setIsEnabled] = useState(isLightTheme ? false : true)
    const { textColor = '', thumbColor = '', trackColorOn = '', trackColorOff = '' } = { ...theme }
    const toggleSwitch = () => {
        const newTheme = isLightTheme ? 'dark' : 'light'
        changeTheme(newTheme)
        setIsEnabled(previousState => !previousState)
    }
    const renderMiddle = () => {
        return (
            <View style={styles.contentTitle}>
                <Text style={styles.title}>{'MÁS'}</Text>
            </View>
        )
    }
    return (
        <View style={styles.loading} >
            <NavBarSimple contentCenter={renderMiddle()} isHome={true} />
            <View style={styles.containerDarkMode}>
                <Text style={{ color: textColor }}>{'Modo Oscuro '}</Text>
                <Switch style={styles.switch} trackColor={{ true: trackColorOn, false: trackColorOff }}
                    onValueChange={toggleSwitch} value={isEnabled} thumbColor={thumbColor} />
            </View>
            <View style={styles.contentItemPokemon}>
                <TouchableOpacity onPress={() => Actions.Types()}>
                    <More_Item name={'Ventajas de Tipos'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}