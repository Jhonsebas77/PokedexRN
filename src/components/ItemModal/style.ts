import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
export default {
    modalBackground: {
        backgroundColor: 'rgba(0,0,0,.4)',
        width: 375,
        height: 667
    },
    modalView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    bar: {
        width: 46,
        height: 4,
        borderRadius: 2,
        backgroundColor: 'white',
        marginBottom: 8
    },
    container: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: 'white',
        height: 270,
        android: {
            width: 360
        },
        ios: {
            width: 375
        }
    },
    largeContainer: {
        height: 570
    },
    chartContainer: {
        height: 420
    },
    smallContainer: {
        height: 300
    },
    header: {
        height: 56,
        backgroundColor: '#C64934',
        alignItems: 'center',
        flexDirection: 'column',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomColor: 'black',
        paddingTop: 5
    },
    title: {
        color: 'white',
        fontSize: 25,
        letterSpacing: 0,
        fontWeight: 'bold'
    },
    bottomBtnView: {
        flex: 1,
        alignItems: 'center'
    },
    bottomBtn: {
        height: 52
    },
    resetButton: {
        position: 'absolute',
        right: 17
    },
    resetButtonText: {
        color: 'orange',
        fontSize: 16,
        lineHeight: 24
    },
    resetTextDisabled: {
        color: 'orange'
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
        width: 100,
        height: 100
    },
    spriteContainer: {
        width: 100,
        height: 100
    },
    loading: {
        width: width,
        height: height,
        backgroundColor: '#C64934',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 10
    },
    subtitle: {
        color: 'white',
        fontSize: 14
    },
    head: {
        alignItems: 'center'
    }
}