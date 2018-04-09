import ADD_PLAYER from '../actions'

export default function (state = [], action) {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, action.player]
    default:
      return state
  }
}
