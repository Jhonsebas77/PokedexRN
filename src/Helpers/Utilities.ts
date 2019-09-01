import Sugar from 'sugar'
Sugar.extend()
export default {
    capitalize: (value: string, all?: boolean) => Sugar.String.capitalize(value, true, all),
    upper: (value: string) => value ? value.toUpperCase() : value,
    lower: (value: string) => value.toLowerCase(),
    has: (value: Object, key: string) => Sugar.Object.has(value, key),
    exclude: (value: Object, key: string) => Sugar.Object.reject(value, key),
    isObject: (value: any) => Sugar.Object.isObject(value),
    isNumber: (value: any) => Sugar.Object.isNumber(value),
    objectEach: (value: Object, fcn) => Sugar.Object.forEach(value, fcn),
    get: (value, key: string) => Sugar.Object.get(value, key),
    formatNumberDecimal: (value, decimals) => value.toFixed(decimals),
    findProperty: function findProperty(object, property) {
        let value
        Object.keys(object).some((k) => {
            if (k === property) {
                value = object[k]
                return true
            }
            if (Sugar.Object.isObject(object[k])) {
                value = findProperty(object[k], property)
                return value !== undefined
            }
            return false
        })
        return value
    },
    arrayHasItems(arr: any = []) {
        if (Array.isArray(arr)) {
            return arr.length > 0
        }
        return false
    },
    map(values: any[] = [], fx: any) {
        return (values || []).map(fx)
    }
}