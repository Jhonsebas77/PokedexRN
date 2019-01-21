import { Dimensions } from 'react-native'
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
        height: 360
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        borderRadius: 50,
        borderWidth: 2
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
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
        padding: 10
    },
    containerCategoryInfo: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10
    },
    containerCategory: {
        width: 200,
        height: 100
    }
}
