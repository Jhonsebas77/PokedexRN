import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default {
    sprite: {
        width: 200,
        height: 200
    },
    spriteContainer: {
        width: 200,
        height: 200
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    titleCardInfo: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 10
    },
    titleId: {
        color: 'white',
        fontSize: 14
    },
    loading: {
        width: 356,
        height: 540,
        borderRadius: 30
    },
    background: {
        width: width,
        height: height
    },
    typeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    containerTypes: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    type: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    containerPkmn: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 350,
        height: 200,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerPkmnInfo: {
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    chipContainer: {
        margin: 5,
        marginLeft: 10,
        width: 330,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    content: {
        backgroundColor: '#C64934',
        padding: 10
    },
    scrollContainer: {
        alignItems: 'center',
        paddingTop: 10
    },
    titleInfo: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textStats: {
        color: 'white',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    textContainerColumnStats: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    containerStats: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 340,
        borderRadius: 20,
        marginHorizontal: 30,
        marginTop: 10
    },
    containerEvolution: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 340,
        borderRadius: 20,
        marginHorizontal: 30,
        marginTop: 10,
        paddingBottom: 20
    },
    containerEvolutionLine: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10
    },
    containerAbility: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 340,
        borderRadius: 20,
        marginHorizontal: 30,
        marginTop: 10
    },
    textMiddle: {
        alignItems: 'center',
        paddingLeft: 2
    },
    containerInfoPkmn: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 340,
        borderRadius: 20,
        marginHorizontal: 30,
        alignItems: 'center',
        paddingTop: 5
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
