export const Colors = {
    normal: '#E3E1D0',
    fight: '#7A0F0C',
    flying: '#B3D3D3',
    poison: '#78309F',
    ground: '#6D3100',
    rock: '#5D554E',
    bug: '#AFD121',
    ghost: '#502293',
    steel: '#4c669f',
    fire: '#FF0000',
    water: '#192f6a',
    grass: '#192f6a',
    electric: '#192f6a',
    psychic: '#192f6a',
    ice: '#192f6a',
    dragon: '#192f6a',
    dark: '#192f6a',
    fairy: '#4c669f',
    unknown: '#192f6a',
    shadow: '#192f6a'
}

export const ColorType = (type1, type2?) => {
    let ColorsType = type1 + (type2 ? '_' + type2 : '')
    const typeColor = {
        fire: { color: () => [Colors.fire, Colors.fire] },
        grass_poison: { color: () => [Colors.grass, Colors.poison] },
        flying: () => (Colors.flying),
        water: () => (Colors.fire)
    }
    return typeColor[ColorsType].color()

}
