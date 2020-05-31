import { Dimensions } from 'react-native'
import { isAndroidWNotch } from '../../Helpers/Constant'
import { Colors } from './../../Helpers/Colors'
const { height, width } = Dimensions.get('window')

export default {
    container: {
        width,
        height
    },
    loading: {
        width: width,
        height: isAndroidWNotch ? height - 110 : height,
        backgroundColor: Colors.redPokedex,
        alignItems: 'center'
    },
    contentContainer: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding: 5
    },
    menuItem: {
        padding: 10
    }
}
