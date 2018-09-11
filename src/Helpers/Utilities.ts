import Sugar from 'sugar'
Sugar.extend()
export default {
    capitalize: (value: string, all?: boolean) => Sugar.String.capitalize(value, true, all),
    upper: (value: string) => value ? value.toUpperCase() : value,
    lower: (value: string) => value.toLowerCase(),
    formatNumberDecimal: (value, decimals) => value.toFixed(decimals)
}