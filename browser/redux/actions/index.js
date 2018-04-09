import axios from 'axios'
import store from '../store'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const ADD_PLAYER = 'ADD_PLAYER'
export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export const addPlayer = (playerName) => ({
  type: ADD_PLAYER,
  player: {
    name: playerName,
    score: 0
  }
})

export const setCurrentPlayer = () => {
  const state = store.getState()
  const nextPlayer = (state.currentPlayer + 1) % state.players.length
  return {
    type: SET_CURRENT_PLAYER,
    currentPlayerIndex: nextPlayer
  }
}

export const answerQuestion = (points) => {
  const player = store.getState().currentPlayer
  return {
    type: ANSWER_QUESTION,
    player,
    points
  }
}

const setCurrentUser = (currentUser) => ({
  type: SET_CURRENT_USER,
  currentUser
})


export const handleLoginThunk = user => dispatch => {
  axios.post('/api/auth/local', user)
    .then(res => {
      dispatch(setCurrentUser(res.data))
    })
    .catch(err => {
      alert('Invalid Username or Password')
      console.error(err)
    })
}

