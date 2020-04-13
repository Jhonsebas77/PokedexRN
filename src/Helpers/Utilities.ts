const capitalize = (value: string, all: boolean = false) => {
    const strValue = isString(value) ? value : ''
    const lowerStr = strValue.toLowerCase()
    if (!all) {
        const delEmptySpaces = strValue.replace(/\s/g, '')
        for (let i = 0; i < strValue.length; i++) {
            const strChar = strValue.charAt(i)
            if (delEmptySpaces[0] === strChar) {
                const firstCharUpper = strChar.toUpperCase()
                const firstCharLower = strChar.toLowerCase()
                return lowerStr.replace(firstCharLower, firstCharUpper)
            }
        }
    }
    return lowerStr.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
}
const isString = (value: any) => Object.prototype.toString.call(value) === '[object String]'
const has = (value: Object, key: string) => Object.prototype.hasOwnProperty.call(value, key)
const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
const isNumber = (value: any) => Object.prototype.toString.call(value) === '[object Number]'
const formatNumberDecimal = (value: number = 0) => {
    return isNumber(value) ? Math.round(value) : 0
}
const arrayHasItems = (arr: Array<any> = []) => {
    if (Array.isArray(arr)) {
        return arr.length > 0
    }
    return false
}
const isEmpty = (obj: any = null) => {
    switch (Object.prototype.toString.call(obj)) {
        case '[object Object]':
            return Object.keys(obj).length === 0
        case '[object Array]':
            return obj.length === 0
        default:
            return !obj || obj === 'undefined' || obj === 'null'
    }
}
export default {
    upper: (value: string) => value ? value.toUpperCase() : value,
    lower: (value: string) => value.toLowerCase(),
    findProperty: function findProperty(object, property) {
        let value
        Object.keys(object).some((k) => {
            if (k === property) {
                value = object[k]
                return true
            }
            if (isObject(object[k])) {
                value = findProperty(object[k], property)
                return value !== undefined
            }
            return false
        })
        return value
    },
    map(values: any[] = [], fx: any) {
        return (values || []).map(fx)
    },
    arrayHasItems,
    capitalize,
    has,
    isObject,
    isNumber,
    isEmpty,
    formatNumberDecimal
}