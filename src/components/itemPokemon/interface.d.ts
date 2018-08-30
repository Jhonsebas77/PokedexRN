interface ChipProps {
    pressed: number,
    name: any,
    text: string,
    subtext?: string,
    onPress: any,
    image?: string,
    icon?: string,
    index?: number,
    isLast?: boolean,
    imageSource: any,
    gender?: string
}
interface ChipState {
    name: any,
    imageSource: any,
    widthChip: any
}
