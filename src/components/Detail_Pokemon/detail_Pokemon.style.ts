import { Dimensions } from 'react-native'
import { isAndroidWNotch } from './../../Helpers/Constant'
const { width, height } = Dimensions.get('window')

export default {
    sprite: {
        width: isAndroidWNotch ? 220 : 200,
        height: 200
    },
    spriteContainer: {
        width: isAndroidWNotch ? 220 : 200,
        height: 200
    },
    title: {
        color: 'white',
        marginLeft: 60,
        fontWeight: 'bold',
        alignSelf: 'center',
        android: {
            fontSize: isAndroidWNotch ? 30 : 20
        }
    },
    titleId: {
        color: 'white',
        fontSize: 14
    },
    contentPokemon: {
        width: width,
        height: height,
        paddingBottom: 77
    },
    background: {
        width: width,
        height: height
    },
    typeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    containerTypes: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    type: {
        width: isAndroidWNotch ? 55 : 50,
        height: 50,
        borderRadius: 10
    },
    containerPkmn: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 350,
        height: 200,
        borderBottomRightRadius: isAndroidWNotch ? 120 : 100,
        borderTopRightRadius: isAndroidWNotch ? 120 : 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerPkmnInfo: {
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    chipContainer: {
        margin: 5,
        marginLeft: 10,
        width: 330,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleInfo: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
}
