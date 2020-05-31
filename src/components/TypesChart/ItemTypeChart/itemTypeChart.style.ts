import { Dimensions } from 'react-native'
import { Colors } from './../../../Helpers/Colors'
const { height, width } = Dimensions.get('window')

export default {
    container: {
        width: width,
        height: height,
        backgroundColor: Colors.redPokedex
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
        paddingLeft: 5,
        paddingVertical: 5,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    showValues: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 3
    },
    sprite: {
        width: 30,
        height: 30
    },
    spriteContainer: {
        width: 30,
        height: 30
    },
    spriteContainerTypes: {
        width: 30,
        height: 30,
        flexDirection: 'row'
    },
    typeOneContainer: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textType: {
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        margin: 5
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
        fontSize: 20,
        width: 70
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
