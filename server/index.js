require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const volleyball = require('volleyball')
const passport = require('passport')
const session = require('express-session')
const path = require('path')
const {db, User} = require('./db/models')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(volleyball)


//authentication and session logging
app.use(session({
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
  try {
    done(null, user.id)
  } catch (err) {
    done(err)
  }
})

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => done(null, user))
  .catch(done)
})

//api routes
app.use('/api', require('./apiRoutes'))


app.get('/logout', (req, res, next) => {
  req.logOut()
  res.sendStatus(200)
})

const validFrontendRoutes = ['/', '/login']
const indexPath = path.join(__dirname, '../public/index.html')
validFrontendRoutes.forEach(stateRoute => {
  app.get(stateRoute, (req, res, next) => {
    res.sendFile(indexPath)
  })
})

//static routes
app.use(express.static(path.join(__dirname, '../public')))

//error handling
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Whoops')
})

const port = 3000

db.sync({force: true})
  .then(() => app.listen(port, () => console.log('Listening on port ' + port)))
  .catch(console.error)

