const request = require('supertest')('http://localhost:3000')

describe('GET /login', function() {
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
