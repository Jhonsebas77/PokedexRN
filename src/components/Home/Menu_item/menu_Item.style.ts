import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')
import { isAndroidWNotch } from './../../../Helpers/Constant'
export default {
    itemMove: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        margin: 10,
        flexDirection: 'row',
        height: 60,
        width: isAndroidWNotch ? 300 : width,
        borderRadius: 50
    },
    type: {
        width: isAndroidWNotch ? 67 : 60,
        height: 60,
        borderRadius: 10
    },
    textName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
}
