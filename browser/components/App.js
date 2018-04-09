import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from './Login'
import Game from './Game'

const App = (props) => (

  <BrowserRouter>
    <div>
      <h1>This isn't Jeopardy!</h1>
      <p>
        {'Redux store: ' + props.reduxState}
      </p>
      <Route path='/login' component={Login} />
      <Route path='/game' component={Game} />
    </div>
  </BrowserRouter>
)

const mapState = (state) => ({reduxState: JSON.stringify(state)})

export default connect(mapState, null)(App)
