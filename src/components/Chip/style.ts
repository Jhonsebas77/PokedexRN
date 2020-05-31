import { Colors } from './../../Helpers/Colors'
export default {
    container: {
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        justifyContent: 'flex-start'
    },
    imageChip: {
        height: 36,
        width: 36,
        borderRadius: 18,
        marginVertical: 2
    },
    iconGender: {
        height: 36,
        width: 36,
        backgroundColor: 'transparent',
        borderRadius: 18
    },
    iconStyle: {
        marginHorizontal: 16,
        fontSize: 23,
        color: 'blue'
    },
    textChip: {
        fontSize: 16,
        color: 'black'
    },
    active: {
        backgroundColor: Colors.activeChip
    },
    activeLast: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'green'
    },
    textLast: {
        fontSize: 16,
        color: 'green'
    },
    containerTextChip: {
        paddingHorizontal: 16
    },
    textActive: {
        color: '#a3d596'
    },
    shadow: {
        color: 'black',
        border: 3,
        radius: 16,
        opacity: 0.05,
        x: 0,
        y: 4,
        height: 38
    },
    marginFistChip: {
        marginLeft: 16
    },
    shadowWidthFactor: {
        width: 8
    },
    marginChipImg: {
        marginHorizontal: 100
    },
    marginChip: {
        marginHorizontal: 50
    }
}