import { getMonsters } from './api'
import { transformMonsters } from './monsters'
import { hasKey, persist, retrieve } from './db'
import { createStore } from './state'

const DB_NAME = 'favorite-pokemon/db'

log('Action: favorite-pokemon/db/retrieve')
if (!hasKey(DB_NAME)) {
  log('Action: favorite-pokemon/db/persist')
  persist(
    DB_NAME,
    transformMonsters(await getMonsters()),
  )
}

log('Action: favorite-pokemon/db/retrieve')
const monsters = retrieve(DB_NAME)

const initialState = {
  monsters,
}

const store = createStore(initialState)

export {
  store
}
