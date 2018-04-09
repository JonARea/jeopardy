const db = require('../_db')
const User = require('./user')
const Game = require('./game')
const Clue = require('./clue')
const Category = require('./category')

Game.belongsTo(User)
Category.belongsTo(Game)
Clue.belongsTo(Category)

module.exports = {
  db,
  User,
  Game,
  Category,
  Clue
}
