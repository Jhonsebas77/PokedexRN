import { Dimensions } from 'react-native'
import { Colors } from './../../Helpers/Colors'
import { isAndroidWNotch, isIphoneWNotch } from '../../Helpers/Constant'

const { width, height } = Dimensions.get('window')

export default {
    loading: {
        ios: {
            width: isIphoneWNotch ? 350 : 360
        },
        android: {
            width: isAndroidWNotch ? 360 : width
        },
        height: height,
        backgroundColor: Colors.redPokedex
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    sprite: {
        width: 200,
        height: 200
    },
    contentTitle: {
        alignItems: 'center'
    },
    contentLoading: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center'
    },
    contentItemPokemon: {
        paddingTop: 10,
        height: 550
    }
}
