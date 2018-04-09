import {SET_CURRENT_PLAYER} from '../actions'

export default function (state = 0, action) {
  switch (action.type) {
    case SET_CURRENT_PLAYER:
      return action.currentPlayerIndex
    default:
      return state
  }
}
