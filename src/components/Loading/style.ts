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
        justifyContent: 'center',
        backgroundColor: '#C64934'
    },
    textLoading: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    lottieAnimation: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleCenter: {
        alignItems: 'center'
    }
}
