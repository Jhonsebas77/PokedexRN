import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default {
    container: {
        backgroundColor: 'green'
    },
    item: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
        margin: 10,
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 10
    },
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
    sprite: {
        width: '100%',
        height: '100%'
    },
    spriteContainer: {
        width: 150,
        height: 150,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 70
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    titleId: {
        color: 'white',
        fontSize: 14
    },
    loading: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    typeContainer: {
        width: 80,
        height: 80,
        justifyContent: 'center'
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
    }
}
