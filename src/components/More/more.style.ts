import { Dimensions } from 'react-native'
import { Colors } from './../../Helpers/Colors'
const { width, height } = Dimensions.get('window')

export default {
    loading: {
        width: width,
        height: height,
        backgroundColor: Colors.redPokedex
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    sprite: {
        width: 200,
        height: 200
    },
    contentTitle: {
        alignItems: 'center'
    },
    contentLoading: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center'
    },
    contentItemPokemon: {
        paddingTop: 10,
        height: 550
    },
    switch: {
        color: 'white'
    },
    containerDarkMode: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
}
