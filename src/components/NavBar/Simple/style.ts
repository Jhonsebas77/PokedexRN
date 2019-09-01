import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

export default {
    container: {
        width: 500
    },
    header: {
        height: 110,
        backgroundColor: '#C64934'
    },
    navBar: {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        width: width,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    checkoutRow: {
        flexDirection: 'row',
        paddingLeft: 16
    },
    button: {
        height: 56,
        justifyContent: 'center'
    },
    buttonTittle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonIcon: {
        fontSize: 16,
        color: 'white',
        marginRight: 5
    },
    shadow: {
        color: '#000',
        border: 3,
        radius: 5,
        opacity: 0.20,
        x: 0.5,
        y: 2
    },
    noShadow: {
        color: 'white',
        border: 0,
        radius: 1,
        opacity: 0.01,
        x: 0,
        y: 0
    },
    subbutton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    empty: {
        width: 60
    },
    spriteContainer: {
        paddingLeft: 17,
        paddingTop: 8,
        width: 60,
        height: 60
    },
    stylePadding: {
        paddingLeft: 80,
        marginTop: 4
    }
}
