interface IBottomTabBarState {
    activeTab: number
}

interface IBottomTabBarProps {
  tabList: Array<BottomButtonTabBar>
  initialTab: number
}

interface BottomButtonTabBar {
    title: string,
    iconName: string,
    iconPress: string,
    accessibilityLabel?: string,
    cmp: React.ReactNode
}
