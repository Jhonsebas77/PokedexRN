import React, { useState } from 'react'
import { ThemeContext } from './theme.context'
import { lightTheme, darkTheme } from './theme'
import { useColorScheme, StatusBar } from 'react-native'
const LoadingProvider = ({ children }) => {
    const lightThemeConstant = 'light'
    const isLightTheme = (theme: string) => theme === lightThemeConstant
    const [colorScheme, setColorScheme] = useState(useColorScheme())
    const changeTheme = (newMode: any) => {
        setColorScheme(newMode)
    }
    const themeProvider = {
        colorScheme,
        isLightTheme: isLightTheme(colorScheme),
        theme: isLightTheme(colorScheme) ? lightTheme : darkTheme,
        changeTheme
    }

    return (
        <ThemeContext.Provider value={themeProvider}>
            <StatusBar barStyle={isLightTheme(colorScheme) ? 'dark-content' : 'light-content'} />
            {children}
        </ThemeContext.Provider >
    )
}

export default LoadingProvider