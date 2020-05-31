import { Dimensions } from 'react-native'
import { isAndroidWNotch } from '../../../Helpers/Constant'
import { Colors } from './../../../Helpers/Colors'
const { width } = Dimensions.get('window')
export default {
    header: {
        backgroundColor: Colors.redPokedex,
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
        alignItems: 'center'
    },
    empty: {
        width: 90
    }
}
