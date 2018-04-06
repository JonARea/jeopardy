import React from 'react'
import { connect } from 'react-redux'
import {handleLoginThunk} from '../redux/actions'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onLoginSubmit = this.onLoginSubmit.bind(this)
  }

  render() {
    const { message } = this.props
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={event => this.onLoginSubmit(event)}>
            <div className="form-group">
              <label>email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                onChange={event => this.setState({email: event.target.value})}
                value={this.state.email}
                required
              />
            </div>
            <div className="form-group">
                <label>password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  onChange={event => this.setState({password: event.target.value})}
                  value={this.state.password}
                  required
                />
            </div>
            <button type="submit" className="btn btn-block btn-primary">{message}</button>
          </form>
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a
              target="_self"
              href="/api/auth/google"
              className="btn btn-social btn-google">
              <i className="fa fa-google" />
              <span>{message} with Google</span>
            </a>
          </p>
        </div>
      </div>
    );
  }

  onLoginSubmit(event) {
    event.preventDefault()
    this.props.login(this.state)
  }
}


const mapState = null
const mapDispatch = (dispatch, ownProps) => ({
  login(credentials) {
    dispatch(handleLoginThunk(credentials, ownProps.history))
  }
})

export default connect(mapState, mapDispatch)(Login)
