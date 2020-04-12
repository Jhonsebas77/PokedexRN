import { Dimensions } from 'react-native'
import { isAndroidWNotch } from '../../../Helpers/Constant'
const { width } = Dimensions.get('window')
export default {
    header: {
        backgroundColor: '#C64934',
        width: isAndroidWNotch ? 360 : width,
        height: 70,
        resizeMode: 'contain'
    },
    navBarBtn: {
        android: {
            paddingLeft: 16,
            paddingRight: 16,
            justifyContent: 'space-between'
        },
        paddingTop: 30,
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
        marginBottom: 20
    },
    empty: {
        width: 90
    }
}
