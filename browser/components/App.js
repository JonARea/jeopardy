import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from './Login'

const App = (props) => (

  <BrowserRouter>
    <div>
      <h1>Reacting from App.js</h1>
      <h2>This is red
      </h2>
      <p>
        {'Redux store: ' + props.reduxState}
      </p>
      <Route path='/login' component={Login} />
    </div>
  </BrowserRouter>
)

const mapState = (state) => ({reduxState: JSON.stringify(state)})

export default connect(mapState, null)(App)
