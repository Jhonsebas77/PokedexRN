import React, { PureComponent } from 'react'
import { View, Image, TouchableWithoutFeedback } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import _ from '../../Helpers/Utilities'
import style from './style'
const map = _.map
const styles = getComponentStyle(style)
export default class BottomTabBar extends PureComponent<IBottomTabBarProps, IBottomTabBarState> {
    tabBarRef: any
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        }
        this.tabBarRef = React.createRef()
        this.renderTabs = this.renderTabs.bind(this)
        this.setTab = this.setTab.bind(this)
    }
    componentDidMount() {
        const { initialTab = 0 } = { ...this.props }
        this.setState({ activeTab: initialTab })
    }
    setTab(selectedTab: number) {
        const { activeTab = 0 } = { ...this.state }
        activeTab !== selectedTab && this.setState({ activeTab: selectedTab })
    }
    renderTabs(item: BottomButtonTabBar, index: number) {
        const { activeTab = 0 } = { ...this.state }
        const { iconName = '', iconPress = '' } = { ...item }
        const isActive = index === activeTab
        return (
            <TouchableWithoutFeedback key={index} style={styles.tabContainer} onPress={() => this.setTab(index)}>
                <View>
                    <Image style={styles.sprite} source={{ uri: isActive ? iconPress : iconName }} />
                </View>
            </TouchableWithoutFeedback>
        )
    }
    validateScreens(cmpList: Array<BottomButtonTabBar>) {
        return cmpList.filter((item: BottomButtonTabBar) => !!item.cmp)
    }

    render() {
        const { tabList = [] } = { ...this.props }
        const { activeTab = 0 } = { ...this.state }
        const cmps: Array<BottomButtonTabBar> = this.validateScreens(tabList)
        const { cmp = <View /> } = { ...cmps[activeTab] }
        return (
            <View style={styles.cmpContainer}>
                {cmp}
                <View style={styles.tabBarContainer}>
                    <View style={styles.container}>
                        {map(tabList, this.renderTabs)}
                    </View>
                </View>
            </View>)
    }
}