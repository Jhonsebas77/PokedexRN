import { Dimensions } from 'react-native'
import { isAndroidWNotch } from '../../../Helpers/Constant'
const { width } = Dimensions.get('window')
export default {
    header: {
        width: isAndroidWNotch ? 360 : width,
        height: 70,
        resizeMode: 'contain'
    },
    navBarBtn: {
        android: {
            paddingLeft: 16
        },
        paddingTop: 23,
        alignItems: 'center',
        flexDirection: 'row'
    },
    navBar: {
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    stylePadding: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:  20
    },
    empty: {
        width: 90
    }
}
