import { Dimensions } from 'react-native'
import { Colors } from './../../Helpers/Colors'
const { height, width } = Dimensions.get('window')

export default {
    container: {
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center'
    },
    loading: {
        width: width,
        height: height,
        backgroundColor: Colors.redPokedex
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    contentTitle: {
        alignItems: 'center'
    }
}
