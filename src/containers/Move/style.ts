import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default {
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
