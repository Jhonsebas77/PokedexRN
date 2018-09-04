import _ from './Utilities'
export const newString = (value: string) => {
    if (value) {
        const split = value.split('-')
        const partOne = _.capitalize(String(split[0]))
        const partTwo = split[1] ? _.capitalize(String(split[1])) : ''
        const newsString = `${partOne} ${partTwo}`
        return newsString
    } else {
        return undefined
    }
}
export const paddingNumber = (value: number) => {
    if (value) {
        const number = (value < 10 ? '00' : value < 100 ? '0' : '') + value
        return number
    } else {
        return undefined
    }
}
