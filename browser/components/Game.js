import React from 'react'
import CategoryColumn from './CategoryColumn'
import Scoreboard from './Scoreboard'

//import categories from store
const categories = ['JS101', 'Famous Programmers', 'State']

const Game = () => (
  <div className='game'>
    <div className='gameboard'>
      {categories.map(category => <CategoryColumn name={category} />)}
    </div>
    <Scoreboard />
  </div>
)

export default Game
