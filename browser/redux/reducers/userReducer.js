import {SET_CURRENT_USER} from '../actions'

export default function (state = 'A new and virgin state', action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        currentUser: action.currentUser
      }
    default:
      return state
  }
}
