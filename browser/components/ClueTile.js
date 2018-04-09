import React from 'react'

class ClueTile extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
      finished: false,
      showAnswer: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.renderModal = this.renderModal.bind(this)
  }

  handleClick() {
    !this.state.open && this.setState({open: true})
  }

  renderModal() {
    return (
      <div className='clueModal'>
        {this.state.showAnswer ? this.props.clue.answer : this.props.clue.question}

        <button className='btn closeBtn' onClick={() => this.setState({open: false})}>Close
        </button>
        <button className='btn showAnswerBtn' onClick={() => this.setState({showAnswer: !this.state.showAnswer})}>
          {this.state.showAnswer ? 'Show Question' : 'Show Answer'}
        </button>
        <button className='btn correctBtn' onClick={() => this.setState({open: false, finished: true})}>
          Correct
        </button>
        <button className='btn incorrectBtn' onClick={() => this.setState({open: false, finished: true})}>
          Incorrect
        </button>
      </div>
    )
  }

  render() {
    if (this.props.header) {
      return (
        <div className='clueTile'>
          <h2>{this.props.header}</h2>
        </div>
      )
    } else {
      return (
        <div
          className={this.state.finished ? 'clueTile finished' : 'clueTile'}
          onClick={this.handleClick}
        >
          {
            this.state.open ?
            this.renderModal() :
            <h3>{this.props.value}</h3>
          }
        </div>
      )
    }
  }
}

export default ClueTile
