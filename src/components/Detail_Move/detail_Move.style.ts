import { Dimensions } from 'react-native'
import { isAndroidWNotch } from './../../Helpers/Constant'
const { width, height } = Dimensions.get('window')

export default {
    head: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        margin: 10,
        overflow: 'hidden',
        borderRadius: 50,
        borderWidth: 5,
        width: 350,
        height: 210
    },
    head2: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        margin: 10,
        overflow: 'hidden',
        borderRadius: 50,
        borderWidth: 5,
        width: 350,
        height: 300
    },
    head3: {
        alignItems: 'center',
        margin: 10,
        overflow: 'hidden',
        borderRadius: 50,
        borderWidth: 5,
        height: 200
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        borderRadius: 50,
        borderWidth: 2,
        width: 300
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    titleNavBar: {
        color: 'white',
        marginLeft: 60,
        fontWeight: 'bold',
        alignSelf: 'center',
        android: {
            fontSize: isAndroidWNotch ? 24 : 20
        }
    },
    title2: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10
    },
    loading: {
        width: width,
        height: height,
        alignItems: 'center'
    },
    categoryContainer: {
        width: 80,
        height: 80,
        flexDirection: 'row',
        margin: 5
    },
    type: {
        width: 80,
        height: 80
    },
    background: {
        width: width,
        height: height,
        backgroundColor: '#C64934'
    },
    containerStats: {
        alignItems: 'center',
        paddingBottom: 10
    },
    viewAlignItem: {
        alignItems: 'center'
    },
    paddingText: {
        padding: 10,
        color: 'white'
    },
    containerCategoryInfo: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10
    },
    containerCategory: {
        width: 200,
        height: 100
    },
    middle: {
        alignItems: 'center'
    },
    containerStatics: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    contentFailInternet: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center'
    },
    failInternet: {
        width: width,
        height: height
    }
}
