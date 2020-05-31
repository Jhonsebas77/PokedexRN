import rgba from 'rgba-convert'

const color = {
    white: rgba.hex('#FFFFFF'),
    black: rgba.hex('#121212'),
    grey: rgba.hex('#BDBDBD'),
    greyDark: rgba.hex('#CFCFCF'),
    green: rgba.hex('#077A3E'),
    red: rgba.hex('#E30613')
}

export const lightTheme = {
    backgroundColor: color.white,
    backgroundColorItem: color.greyDark,
    textColor: color.black,
    thumbColor: color.black,
    trackColorOn: color.green,
    trackColorOff: color.red
}

export const darkTheme = {
    backgroundColor: color.black,
    backgroundColorItem: color.grey,
    textColor: color.white,
    thumbColor: color.white,
    trackColorOn: color.green,
    trackColorOff: color.red
}