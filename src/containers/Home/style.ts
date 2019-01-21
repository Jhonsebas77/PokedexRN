import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export default {
    container: {
        width,
        height
    },
    loading: {
        width: width,
        height: height,
        backgroundColor: '#C64934',
        alignItems: 'center'
    },
    contentContainer: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding: 5
    },
    menuItem: {
        padding: 10
    }
}
