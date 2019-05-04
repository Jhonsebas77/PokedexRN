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

export const newStringItem = (value: string) => {
    if (value) {
        const split = value.split('-')
        const partOne = String(split[0])
        const partTwo = split[1] ? String(split[1]) : ''
        const newsString = `${partOne}${partTwo}`
        return newsString
    } else {
        return undefined
    }
}

export const paddingNumber = (id: number) => {
    const number = (id < 10 ? '00' : id < 100 ? '0' : '') + id
    return number
}