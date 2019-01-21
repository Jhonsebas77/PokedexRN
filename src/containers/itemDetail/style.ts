import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
export default {
    container: {
        backgroundColor: 'green'
    },
    itemDetail: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 340,
        height: 240,
        borderRadius: 20,
        margin: 30,
        alignItems: 'center'
    },
    sprite: {
        width: 250,
        height: 250
    },
    spriteContainer: {
        width: 250,
        height: 250
    },
    loading: {
        width: width,
        height: height,
        backgroundColor: '#C64934',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: width / 5
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'white',
        fontSize: 20
    },
    head: {
        alignItems: 'center'
    }
}
