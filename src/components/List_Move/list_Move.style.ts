import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
import { isAndroidWNotch } from './../../Helpers/Constant'

export default {
    loading: {
        width: width,
        height: height
    },
    title: {
        color: 'white',
        marginLeft: 60,
        fontWeight: 'bold',
        alignSelf: 'center',
        android: {
            fontSize: isAndroidWNotch ? 24 : 20
        }
    },
    contentTitle: {
        alignItems: 'center'
    }
}
