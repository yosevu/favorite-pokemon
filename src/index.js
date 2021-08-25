import { render } from 'uhtml'
import { App } from './components'
import { getMonsters } from './data'

const DB_NAME = 'favorite-pokemon/db'

const persist = (key, value) => localStorage.setItem(key, value)
const retrieve = (key) => localStorage.getItem(key)

const transformMonsters = (monsters) => {
  return monsters.map(({
    id: index,
    name,
    types,
  }) => {
    return {
      index,
      name,
      imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${index}.png`,
      types: types.map(({ type }) => type.name),
    }
  })
}

if (retrieve(DB_NAME) === null) {
  persist(DB_NAME, JSON.stringify(transformMonsters(await getMonsters())))
}

const monsters = JSON.parse(retrieve(DB_NAME))

const initialState = {
  monsters,
}

render(document.getElementById('app'), App(initialState))
