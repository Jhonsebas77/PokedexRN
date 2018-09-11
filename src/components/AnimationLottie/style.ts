import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default {
    containerActivity: {
        width: width / 2,
        height: height / 2
    }
}
