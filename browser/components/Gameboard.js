import React from 'react'
import CategoryColumn from './CategoryColumn'

//import categories from store
const categories = ['JS101', 'Famous Programmers', 'State']

const Gameboard = () => (
  <div className='gameBoard'>
    {categories.map(category => <CategoryColumn name={category} />)}
  </div>
)

export default Gameboard
