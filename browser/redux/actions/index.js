import axios from 'axios'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'


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
