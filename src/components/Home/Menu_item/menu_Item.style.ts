import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')
import { isAndroidWNotch } from './../../../Helpers/Constant'
export default {
    itemMove: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        width: isAndroidWNotch ? 340 : width,
        borderRadius: 50
    },
    typeContainer: {
        width: 60,
        height: 60
    },
    type: {
        width: isAndroidWNotch ? 67 : 60,
        height: 60,
        borderRadius: 10
    },
    category: {
        width: 50,
        height: 50
    },
    stats: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        borderRadius: 50
    },
    col1: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    textName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    titleCol: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 5
    },
    containerCol: {
        color: 'white',
        marginLeft: 5
    }
}
