import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export default {
    container: {
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center'
    },
    loading: {
        width: width,
        height: height
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    }
}
