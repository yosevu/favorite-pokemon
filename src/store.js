import { getMonsters } from './data'

/**
 * Creates a simple container for managing the state of a component.
 *
 * @param {Object} initialState - The component's initial state
 *
 */
const createStore = (initialState = {}) => {
  let state = initialState

  const subscriptions = []

  const get = (key = null) => {
    if (key === null) {
      return state
    }

    return state[key]
  }

  const update = (action, fn) => {
    const nextState = fn(action, state)

    logGroup(
      `Action: ${action.type}`,
      [
        () => log(`Payload:`, action.payload),
        () => log('Updated state:'),
        () => table(nextState.monsters),
      ],
    )

    if (state !== nextState) {
      state = nextState
      subscriptions.forEach((subscription) => {
        subscription(nextState)
      })
    }
  }

  const subscribe = (subscription) => {
    subscriptions.push(subscription)
  }

  return {
    get,
    update,
    subscribe,
  }
}

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
      name,
      index,
      imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${index}.png`,
      types: types.map(({ type }) => type.name),
      liked: false,
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

const store = createStore(initialState)

logGroup(
  `Action: favorite-pokemon/init`,
  [
    () => log('Initial state:'),
    () => table(initialState.monsters)
  ]
)

export {
  store
}
