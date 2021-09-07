/* eslint-disable functional/no-conditional-statement */

const initialState = {
  monsters: []
}

export const pokemonReducer = (state = initialState, action) => {
  if(typeof state === 'undefined') return 0;

  switch(action.type) {
    case 'GET_MONSTERS': 
      return {
        ...state,
        monsters: action.payload
      } 
    case 'TOGGLE_LIKE': 
      return {
        ...state,
        monsters: [ ...state.monsters.filter(monster => monster.name !== action.name), action.payload ]
      } 
    default:
      return state
  }
}