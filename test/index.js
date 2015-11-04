'use strict';

var request = require('supertest'),
  should = require('should');

// API under test
var app = require('../api/server');

describe('GET /users', function(){
  it('respond with json', function(done){
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /users', function(){
  it('respond with the created user', function(done){
    request(app)
      .post('/users')
      .send({ email: 'john@doe.com', firstname: 'John', lastname: 'Doe' })
      .set('Accept', 'application/json')
      .end(function(err, res){
        res.status.should.equal(200);
        res.body.should.have.property('firstname', 'John');
        res.body.should.have.property('lastname', 'Doe');
        res.body.should.have.property('email', 'john@doe.com');
        done();
      });
  });
});
