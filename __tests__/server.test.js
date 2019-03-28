'use strict';

const supertest = require('supertest');

const { server } = require('../server.js');
const mockClient = supertest(server);

// let req = () => { };
// let res = () => { status('500'); };
// let next = () => { };

describe('The Server', () => {
  it('responds with a 200 on a good route', () => {
    // mockClient promise (like superagent)
    return mockClient.get('/a')
      .then(result => {
        expect(result.status).toEqual(200);
      });
  });

  it('can GET route /a', () => {
    return mockClient.get('/a')
      .then(result => {
        expect(result.body).toEqual({});
      });
  });


  it('responds with a 500 on an error', () => {
    return mockClient.get('/e')
      .then(result => {
        expect(result.status).toEqual(500);
      });
  });


  it('uses the error handler on a 500 error', () => {
    let error = 'foo';
    let req = {};
    let res = {};
    let next = () => {};

    


  });


  it('responds with a 404 on an unknown route', () => {
    return mockClient.get('/foo')
      .then(result => {
        expect(result.status).toEqual(404);
      });
  });
});
