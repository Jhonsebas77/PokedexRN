
import { Dimensions } from 'react-native'
import { isAndroidWNotch } from '../../Helpers/Constant'
const { width } = Dimensions.get('window')
export default {
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5
    },
    numberSprite: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    itemPokemon: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        marginHorizontal: 10,
        marginVertical: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        width: isAndroidWNotch ? 340 : width,
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50
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
        width: isAndroidWNotch ? 45 : 40,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    type: {
        width: isAndroidWNotch ? 45 : 40,
        height: 40,
        borderRadius: 10
    },
    textNumber: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    textName: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 10
    }
}
