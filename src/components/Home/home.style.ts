import { Dimensions } from 'react-native'
import { Colors } from './../../Helpers/Colors'
const { height, width } = Dimensions.get('window')

export default {
    container: {
        width: width,
        height: height,
        backgroundColor: Colors.redPokedex
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 110
    }
}
