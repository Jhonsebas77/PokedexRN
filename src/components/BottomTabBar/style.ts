export default {
    cmpContainer: {
        flex: 1
    },
    tabBarContainer: {
        position: 'absolute',
        bottom: 0,
        ios: {
            height: 60,
            width: 375,
            shadowColor: 'grey',
            shadowOffset: { width: -1, height: -2 },
            shadowOpacity: 0.3,
            shadowRadius: 1
        },
        android: {
            height: 64,
            width: 360,
            elevation: 8
        },
        backgroundColor: 'white'
    },
    container: {
        android: {
            width: 360,
            height: 64,
            paddingVertical: 10
        },
        ios: {
            width: 375,
            paddingVertical: 6,
            height: 60
        },
        flexDirection: 'row',
        backgroundColor: '#C64934',
        justifyContent: 'space-around'
    },
    tabContainer: {
        flexDirection: 'column',
        width: 40,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabIcon: {
        ios: {
            width: 30,
            height: 30,
            fontSize: 30
        },
        android: {
            width: 25,
            height: 25,
            fontSize: 25,
            marginBottom: 8
        },
        alignSelf: 'center'
    },
    tabTitle: {
        fontFamily: 'Gill Sans',
        fontSize: 11,
        lineHeight: 11
    },
    activeTab: {
        color: 'red'
    },
    inactiveTab: {
        color: 'blue'
    },
    item: {
        alignItems: 'center',
        padding: 20
    },
    sprite: {
        width: 100,
        height: 30
    },
    spriteContainer: {
        width: 100,
        height: 30
    }
}
