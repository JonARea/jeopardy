const Sequelize = require('sequelize')
const db = require('../_db')

const Clue = db.define('clue', {
  question: {
    type: Sequelize.STRING,
    validate: {
      len: [5, 70]
    }
  },
  answer: {
    type: Sequelize.STRING,
    validate: {
      len: [5, 70]
    }
  }
})

module.exports = Clue
