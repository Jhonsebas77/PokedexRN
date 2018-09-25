interface ChipProps {
    pressed: number,
    text: string,
    subtext?: string,
    onPress: any,
    image?: string,
    icon?: string,
    index?: number,
    alignItems?: 'center' | 'flex-start' | 'flex-end' | undefined,
    isLast?: boolean,
    isFirst?: boolean
    gender?: any
}
interface ChipState {
    widthChip: any
}
