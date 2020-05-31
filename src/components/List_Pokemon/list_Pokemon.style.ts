import { Dimensions } from 'react-native'
import { isIphoneWNotch } from '../../Helpers/Constant'
import { Colors } from './../../Helpers/Colors'
const { width, height } = Dimensions.get('window')

export default {
    loading: {
        width: width,
        height: isIphoneWNotch ? height - 110 : height
    },
    title: {
        color: Colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    contentItemPokemon: {
        paddingTop: isIphoneWNotch ? 10 : 8,
        height: 570
    }
}
