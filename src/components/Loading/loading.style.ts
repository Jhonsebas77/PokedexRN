import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default {
    containerActivity: {
        width: 200,
        height: 200
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
        fontWeight: 'bold',
        textAlign: 'center'
    },
    lottieAnimation: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleCenter: {
        backgroundColor: '#C64934'
    }
}
