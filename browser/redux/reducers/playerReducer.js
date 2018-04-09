import {ADD_PLAYER, ANSWER_QUESTION} from '../actions'

export default function (state = [], action) {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, action.player]
    case ANSWER_QUESTION:
      return state.map((player, index) => {
        if (index === action.player) {
          return {
            name: player.name,
            score: player.score + action.points
          }
        } else {
          return player
        }
      })
    default:
      return state
  }
}
