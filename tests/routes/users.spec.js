const request = require('supertest')('http://localhost:3000')
const should = require('chai').should()

describe('POST /api/users', function() {
  it('responds with 201 and sanitized user object when user is created', function(done) {
    request.post('/api/users')
      .send({email: 'bob@bob.bob', password: '123'})
      .set('accept', 'json')
      .expect(201)
      .end((err, res) => {
        if (err) return done(err)
        res.body.email.should.equal('bob@bob.bob')
        should.not.exist(res.body.password)
        done()
      })
  })

  it('responds with an error when input is invalid')
})

describe('GET /api/users', function() {
  it('responds with 200 and array of sanitized users', function(done) {
    request.get('/api/users')
      .set('accept', 'json')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        res.body.should.be.an('array')
        should.exist(res.body[0].email)
        should.not.exist(res.body[0].password)
        done()
      })
  })
})
