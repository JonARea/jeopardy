const Sequelize = require('sequelize')
const db = require('../_db')

const Game = db.define('game', {
  title: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 30]
    }
  }
})

module.exports = Game
