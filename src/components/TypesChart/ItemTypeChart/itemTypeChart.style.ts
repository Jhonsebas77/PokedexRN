import { Dimensions } from 'react-native'
import { Colors } from './../../../Helpers/Colors'
import { isAndroidWNotch, isIphoneWNotch } from '../../../Helpers/Constant'
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
        backgroundColor: Colors.blackAlpha90,
        margin: 10,
        paddingLeft: 5,
        paddingVertical: 5,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    showValues: {
        flexDirection: 'row',
        marginVertical: 3
    },
    sprite: {
        ios: {
            width: isIphoneWNotch ? 37 : 30
        },
        android: {
            width: isAndroidWNotch ? 33 : 30
        },
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
        backgroundColor: Colors.white,
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
        color: Colors.white,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    textName: {
        color: Colors.white,
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 20
    },
    textValue: {
        color: Colors.black,
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 20,
        width: 70
    },
    textEffective: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 20
    },
    containerNameIconKind: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerNameEffective: {
        backgroundColor: Colors.blackAlpha80,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textTypeKind: {
        color: Colors.black,
        fontWeight: 'bold'
    },
    containerKindText: {
        margin: 3,
        alignItems: 'center'
    },
    containerItem: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    textMethod: {
        color: Colors.white,
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
