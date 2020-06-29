import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
import { Colors } from './../../Helpers/Colors'

export default {
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
