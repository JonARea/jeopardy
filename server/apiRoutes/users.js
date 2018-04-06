const router = require('express').Router()
const {User} = require('../db/models')

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => users.map(user => user.sanitize()))
    .then(users => res.status(200).send(users))
    .catch(next)
})

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.status(201).json(user.sanitize()))
    .catch(next)
})

module.exports = router
