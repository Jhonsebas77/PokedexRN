import Sugar from 'sugar'
Sugar.extend()
export default {
    capitalize: (value: string, all?: boolean) => Sugar.String.capitalize(value, true, all),
    upper: (value: string) => value ? value.toUpperCase() : value,
    lower: (value: string) => value.toLowerCase(),
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
    }
}