const router = require('express').Router()

router.use('/auth', require('./auth'))
router.use('/users', require('./users'))

router.get('/', (req, res, next) => {

})

router.post('/', (req, res, next) => {

})

router.put('/', (req, res, next) => {

})

router.delete('/', (req, res, next) => {

})


//handle unkown uri
router.use((req, res, next) => {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})

module.exports = router
