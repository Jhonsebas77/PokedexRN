import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')
export default {
    container: {
        width,
        height
    },
    loading: {
        width: '100%',
        height: '100%',
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
