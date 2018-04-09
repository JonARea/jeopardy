const Sequelize = require('sequelize')
const db = require('../_db')

const Category = db.define('category', {
  title: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 24]
    }
  }
})

module.exports = Category
