import React from 'react'
import {addPlayer} from '../redux/actions'
import {connect} from 'react-redux'


class Scoreboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addingPlayer: false,
      newPlayerName: ''
    }
  }

  toggleAddPlayerForm() {
    this.setState({addingPlayer: !this.state.addingPlayer})
  }

  handleAddPlayer() {
    this.props.addPlayer(this.state.newPlayerName)
    this.toggleAddPlayerForm()
  }

  handleNameChange(e) {
    this.setState({newPlayerName: e.target.value})
  }

  render() {
    if (this.state.addingPlayer) {
      return (
        <div>
          <label htmlFor="playerName">New Player Name</label>
          <input
            name="playerName"
            type="text"
            onChange={(e) => this.handleNameChange(e)}
          />
          <button
            className="btn addPlayerBtn"
            onClick={() => this.handleAddPlayer()}
          >
            Save
          </button>
        </div>
      )
    } else {
      return (
        <div className="scoreboard">
          <button
            className="btn addPlayerBtn"
            onClick={() => this.toggleAddPlayerForm()}
          >
            New Player
          </button>
          {this.props.players.map(player => (
            <div>
              <h3>{player.name}</h3>
              <h4>{player.score}</h4>
            </div>))}
        </div>
      )
    }
  }
}

const mapState = (state) => ({
  players: state.players
})

const mapDispatch = {
  addPlayer
}

export default connect(mapState, mapDispatch)(Scoreboard)
