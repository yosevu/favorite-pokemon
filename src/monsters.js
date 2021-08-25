const transformMonsters = (monsters) => {
  return monsters.map(({
    id: index,
    name,
    types,
  }) => {
    return {
      name,
      index,
      imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${index}.png`,
      types: types.map(({ type }) => type.name),
      liked: false,
    }
  })
}

export {
  transformMonsters,
}
