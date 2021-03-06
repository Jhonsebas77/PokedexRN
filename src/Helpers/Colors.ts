import _ from './Utilities'

export const Colors = {
    normal: '#ada594', normal1: '#525252', normal_border: '#808080',
    fighting: '#a55239', fighting1: '#4a3931',
    flying: '#9cadf7', flying1: '#425294',
    poison: '#b55aa5', poison1: '#4a3952',
    ground: '#d6b55a', ground1: '#735218',
    rock: '#bda55a', rock1: '#735218',
    bug: '#adbd21', bug1: '#426b39',
    ghost: '#5A1F7A',
    steel: '#adadc6', steel1: '#525252',
    fire: '#f75231', fire1: '#732108',
    water: '#399cff', water1: '#425294',
    grass: '#7bce52', grass1: '#426b39',
    electric: '#ffc631', electric1: '#735218',
    psychic: '#ff73a5', psychic1: '#6b3939',
    ice: '#5acee7', ice1: '#425294',
    dragon: '#7b63e7', dragon1: '#4a3994',
    dark: '#282227',
    fairy: '#f7b5f7', fairy1: '#bd18ce',
    unknown: '#192f6a', unknown1: '#192f6a',
    shadow: '#1E1C1C', background: '#a2db96', background1: '#24cca9'
}

export const GetColorType = (type) => {
    const typeBorder = `${type}_border`
    return _.findProperty(Colors, typeBorder)
}

export const ColorType = (type1, type2?) => {
    let ColorsType = type1 + (type2 ? '_' + type2 : '')
    const typeColor = {
        fire: { color: () => [Colors.fire, Colors.fire1] },
        unknown: { color: () => [Colors.unknown, Colors.unknown1] },
        grass: { color: () => [Colors.grass, Colors.grass1] },
        ground: { color: () => [Colors.ground, Colors.ground1] },
        bug: { color: () => [Colors.bug, Colors.bug1] },
        ice: { color: () => [Colors.ice, Colors.ice1] },
        rock: { color: () => [Colors.rock, Colors.rock1] },
        poison: { color: () => [Colors.poison, Colors.poison1] },
        normal: { color: () => [Colors.normal, Colors.normal1] },
        flying: { color: () => [Colors.flying, Colors.flying1] },
        electric: { color: () => [Colors.electric, Colors.electric1] },
        psychic: { color: () => [Colors.psychic, Colors.psychic1] },
        fairy: { color: () => [Colors.fairy, Colors.fairy1] },
        dragon: { color: () => [Colors.dragon, Colors.dragon1] },
        water: { color: () => [Colors.water, Colors.water1] },
        fighting: { color: () => [Colors.fighting, Colors.fighting1] },
        steel: { color: () => [Colors.steel, Colors.steel1] },
        steel_electric: { color: () => [Colors.electric, Colors.steel] },
        bug_grass: { color: () => [Colors.bug, Colors.grass] },
        grass_poison: { color: () => [Colors.grass, Colors.poison1] },
        water_ice: { color: () => [Colors.water, Colors.ice] },
        rock_water: { color: () => [Colors.rock1, Colors.water] },
        psychic_water: { color: () => [Colors.water, Colors.psychic] },
        psychic_grass: { color: () => [Colors.grass, Colors.psychic] },
        psychic_ice: { color: () => [Colors.ice, Colors.psychic] },
        fairy_psychic: { color: () => [Colors.psychic, Colors.fairy] },
        poison_bug: { color: () => [Colors.bug, Colors.poison1] },
        poison_ghost: { color: () => [Colors.ghost, Colors.poison] },
        poison_water: { color: () => [Colors.water, Colors.poison1] },
        ground_poison: { color: () => [Colors.poison, Colors.ground] },
        ground_rock: { color: () => [Colors.rock, Colors.ground1] },
        rock_ground: { color: () => [Colors.ground1, Colors.rock] },
        fire_flying: { color: () => [Colors.fire, Colors.fire, Colors.flying, Colors.flying] },
        flying_rock: { color: () => [Colors.rock1, Colors.flying] },
        bug_flying: { color: () => [Colors.bug, Colors.flying] },
        flying_poison: { color: () => [Colors.poison, Colors.flying] },
        flying_water: { color: () => [Colors.water1, Colors.flying] },
        flying_normal: { color: () => [Colors.normal, Colors.flying] },
        flying_dragon: { color: () => [Colors.dragon1, Colors.flying] }
    }
    return typeColor[ColorsType] ? typeColor[ColorsType].color() : [Colors.unknown, Colors.unknown]
}
