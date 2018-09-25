export const Colors = {
    normal: '#E3E1D0',
    fighting: '#7A0F0C',
    flying: '#B3D3D3',
    poison: '#78309F',
    ground: '#6D3100',
    rock: '#5D554E',
    bug: '#196A00',
    ghost: '#5A1F7A',
    steel: '#77707B',
    fire: '#FB0909',
    water: '#2020B0',
    grass: '#06AC65',
    electric: '#FFFD00',
    psychic: '#D60079',
    ice: '#3AC3C3',
    dragon: '#35159D',
    dark: '#282227',
    fairy: '#BA2299',
    unknown: '#192f6a',
    shadow: '#1E1C1C'
}

export const ColorType = (type1, type2) => {
    let ColorsType = type1 + (type2 ? '_' + type2 : '')
    const typeColor = {
        fire: { color: () => [Colors.fire, Colors.fire] },
        electric: { color: () => [Colors.electric, Colors.electric] },
        psychic: { color: () => [Colors.psychic, Colors.psychic] },
        fairy: { color: () => [Colors.fairy, Colors.fairy] },
        dragon: { color: () => [Colors.dragon, Colors.dragon] },
        water: { color: () => [Colors.water, Colors.water] },
        fighting: { color: () => [Colors.fighting, Colors.fighting] },
        steel: { color: () => [Colors.steel, Colors.steel] },
        poison_grass: { color: () => [Colors.grass, Colors.poison] },
        flying_fire: { color: () => [Colors.fire, Colors.flying] }
    }
    return typeColor[ColorsType] ? typeColor[ColorsType].color() : [Colors.unknown, Colors.unknown]
}
