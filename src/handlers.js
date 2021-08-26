import { store  } from './store'
import { likeMonster, unlikeMonster } from './monsters'

const handleLike = ({ pokedex }) => {
  const action = { type: 'favorite-pokemon/store/like', payload: { pokedex } }
  store.update(action, likeMonster)
}

const handleUnlike = ({ pokedex }) => {
  const action = { type: 'favorite-pokemon/store/unlike', payload: { pokedex } }
  store.update(action, unlikeMonster)
}

export {
  handleLike,
  handleUnlike
}
