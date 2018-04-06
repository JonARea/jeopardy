const Sequelize = require('sequelize')
const db = require('../_db')
const bcrypt = require('bcryptjs')
const _ = require('lodash')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  googleID: Sequelize.STRING
})


//hooks
const setSaltandHashPassword = (userInstance, optionsObject) => {
  if (userInstance.changed('password') || userInstance.isNewRecord) {
    return bcrypt.genSalt()
      .then(salt => bcrypt.hash(userInstance.password, salt))
      .then(hash => {
        userInstance.password = hash
        return userInstance
      })
      .catch(console.error)
  }
}

User.beforeCreate(setSaltandHashPassword)

User.beforeUpdate(setSaltandHashPassword)


//instance methods
User.prototype.isCorrectPassword = function(input) {
  return bcrypt.compare(input, this.password)
    .then(result => result)
    .catch(console.error)
}

User.prototype.sanitize = function () {
  return _.omit(this.toJSON(), ['password'])
}


module.exports = User
