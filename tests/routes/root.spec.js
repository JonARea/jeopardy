const request = require('supertest')('http://localhost:3000')

describe('GET /', function() {
  it('sends index.html', function(done){
    request.get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })
})

describe('GET invalid route', function() {
  it('responds with 404', function(done) {
    request.get('/awoeifjawef')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })
})
