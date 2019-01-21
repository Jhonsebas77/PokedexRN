import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default {
    containerActivity: {
        width: width / 2,
        height: height / 2
    },
    loading: {
        width: width,
        height: height,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLoading: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    lottieAnimation: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}
