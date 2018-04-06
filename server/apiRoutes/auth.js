const router = require('express').Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const LocalStrategy = require('passport-local').Strategy
const {User} = require('../db/models')

//Google Strategy
const verifyCallbackForGoogle = (token, refreshToken, profile, done) => {
  const user = {
    name: profile.displayName,
    email: profile.emails[0].value,
    photo: profile.photos ? profile.photos[0].value : undefined
  }
  User.findOrCreate({
    where: {
      googleID: profile.id
    },
    defaults: user
  })
  .spread(user => {
    done(null, user)
  })
  .catch(done)
}
//domain name of web app
const DOMAIN_NAME = 'http://localhost:1337'

const myGoogleStrategy = new GoogleStrategy({
 clientID: process.env.GOOGLE_CLIENT_ID,
 clientSecret: process.env.GOOGLE_CLIENT_SECRET,
 callbackURL: DOMAIN_NAME + '/api/auth/google/cb'
}, verifyCallbackForGoogle)

//Local Strategy

const myLocalStrategy = new LocalStrategy({usernameField: 'email'},
  (email, password, done) => {
    User.findOne({
      where: {
        email
      }
    })
    .then(user => {
      if (!user || !user.isCorrectPassword(password)) done(null, {})
      else done(null, user.sanitize())
    })
    .catch(done)
  }
)

passport.use(myGoogleStrategy)
passport.use(myLocalStrategy)

router.get('/google', passport.authenticate('google', { scope: 'email' }))

router.get('/google/cb', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login'
}))

router.get('/me', (req, res, next) => {
  if (req.user) res.send(req.user)
  else res.send({})
})

router.post('/local', passport.authenticate('local'), (req, res) => {
  if (req.user.email) res.send(req.user)
  else res.status(401).send('Incorrect Username or Password')
})

module.exports = router
