import { Dimensions } from 'react-native'
import { isIphoneWNotch } from '../../Helpers/Constant'
const { width, height } = Dimensions.get('window')

export default {
    loading: {
        width: width,
        height: isIphoneWNotch ? height - 110 : height
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    contentItemPokemon: {
        paddingTop: isIphoneWNotch ? 10 : 8,
        height: 570
    }
}
