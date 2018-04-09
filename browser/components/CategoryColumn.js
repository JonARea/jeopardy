import React from 'react'
import ClueTile from './ClueTile'

//import from store or pass from Gameboard
const clues = [{question: 'True or False: Javascript is a strongly typed language', answer: 'False'}, {question: 'What array method adds an element to the front of the array?', answer: 'array.unshift()'}]

const CategoryColumn = (props) => (
  <div className='categoryColumn'>
    <ClueTile header={props.name} />
    {
      clues.map((clue, index) => <ClueTile clue={clue} value={(index + 1) * 100} />)
    }
  </div>
)

export default CategoryColumn
