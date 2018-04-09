import {combineReducers} from 'redux'
import currentUser from './userReducer'
import currentPlayer from './currentPlayer'
import players from './playerReducer'

export default combineReducers({currentUser, currentPlayer, players})
