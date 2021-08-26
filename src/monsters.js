const buildImageUrl = (pokedex) => `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokedex}.png`

const transformMonsterTypes = (types) => types.map(({ type }) => type.name)

const transformMonsters = (monsters) => {
  return monsters.map(({
    id: pokedex,
    name,
    types,
  }) => {
    return {
      name,
      pokedex,
      imageUrl: buildImageUrl(pokedex),
      types: transformMonsterTypes(types),
      liked: false,
    }
  })
}

export {
  transformMonsters,
}
