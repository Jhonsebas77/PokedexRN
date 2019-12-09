import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export default {
    container: {
        width: width,
        height: height,
        backgroundColor: '#C64934'
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5
    },
    numberSprite: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemPokemon: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sprite: {
        width: 30,
        height: 30
    },
    spriteContainer: {
        width: 30,
        height: 30
    },
    typeOneContainer: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    typeTwoContainer: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    type: {
        width: 40,
        height: 40,
        borderRadius: 10
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    textName: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 20
    },
    textValue: {
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 20
    },
    textMethod: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 10
    },
    containerNameMethod: {
        flexDirection: 'column',
        marginRight: 20
    },
    containerTypeForm: {
        alignItems: 'flex-start'
    },
    containerTypeAndDescription: {
        alignItems: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}
