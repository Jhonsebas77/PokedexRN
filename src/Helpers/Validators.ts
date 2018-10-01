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

export const getTypeSource = (type: string) => {
    let urlType = `https://www.serebii.net/pokedex-bw/type/${type}.gif`
    return urlType
}

export const getTypeMoveSource = (type: string) => {
    let urlType = `https://www.serebii.net/attackdex-bw/type/${type}.png`
    return urlType
}

export const getItemSpriteSource = (item: string) => {
    let nitem = newStringItem(item)
    let urlType = `https://www.serebii.net/itemdex/sprites/${nitem}.png`
    return urlType
}

export const getMiniSpriteSource = (id: number) => {
    let urlSprite = `https://www.serebii.net/pokedex-xy/icon/${paddingNumber(id)}.png`
    return urlSprite
}

export const getNormalSpriteSource = (id: number) => {
    let urlSprite = `https://s3.us-east-2.amazonaws.com/pokedex-jsob/Sprites/${id}.png`
    return urlSprite
}