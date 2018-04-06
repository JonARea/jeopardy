const bcrypt = require('bcryptjs')
const should = require('chai').should()
const _ = require('lodash')

class User {
  constructor(id, email, password) {
    this.id = id
    this.email = email
    this.password = password
  }
}

const user1 = new User(1, 'test@test.test', '123')

User.prototype.isCorrectPassword = function(input) {
  return bcrypt.compare(input, this.password)
    .then(result => result)
    .catch(console.error)
}

User.prototype.sanitize = function () {
  return _.omit(this, ['password'])
}


const setSaltandHashPassword = (userInstance, optionsObject) => {
  return bcrypt.genSalt()
    .then(salt => bcrypt.hash(userInstance.password, salt))
    .then(hash => {
      userInstance.password = hash
      return userInstance
    })
    .catch(console.error)
}

describe('User model methods', function() {
  describe('setSaltandHashPassword', function () {
    it('takes a userInstance and salts and hashes the password', function () {
      setSaltandHashPassword(user1)
        .then(user => {
          user.email.should.equal(user1.email)
          user1.password.should.not.equal('123')
        })
        .catch(console.error)
    })
  })

  describe('isCorrectPassword', function() {
    it('returns true for correct passwords', function() {
      user1.isCorrectPassword('123')
        .then(result => {
          result.should.equal(true)
        })
        .catch(console.error)
    })
    it('returns false for incorrect passwords', function() {
      user1.isCorrectPassword('234')
        .then(result => {
          result.should.equal(false)
        })
        .catch(console.error)
    })
  })

  describe('sanitize', function() {
    it('returns json of user object without password', function() {
      const sanitizedUser = user1.sanitize()
      user1.email.should.equal('test@test.test')
      should.not.exist(sanitizedUser.password)
    })
  })
})
