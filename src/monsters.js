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

const likeMonster = (action, state) => {
  const { payload } = action
  const { monsters } = state

  return {
    ...state,
    monsters: [
      ...monsters.slice(0, payload.pokedex - 1),
      {
        ...state.monsters[payload.pokedex - 1],
        liked: true,
      },
      ...monsters.slice(payload.pokedex),
    ],
  }
}

const unlikeMonster = (action, state) => {
  const { payload } = action
  const { monsters } = state

  return {
    ...state,
    monsters: [
      ...monsters.slice(0, payload.pokedex - 1),
      {
        ...state.monsters[payload.pokedex - 1],
        liked: false,
      },
      ...monsters.slice(payload.pokedex),
    ]
  }
}



export {
  likeMonster,
  unlikeMonster,
  transformMonsters,
}
