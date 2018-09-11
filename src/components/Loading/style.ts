import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default {
    containerActivity: {
        width: width / 2,
        height: height / 2
    },
    loading: {
        width: '100%',
        height: '100%',
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
