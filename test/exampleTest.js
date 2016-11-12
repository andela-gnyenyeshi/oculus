import supertest from 'supertest';
import app from '../server';
const expect = require('chai').expect;

describe('Tests', () => {
  it('Expects tests to pass', () => {
    expect(true).to.equal(true);
  });

  describe('Route tests', () => {
    it('Tests Akirachix route', (done) => {
      supertest(app)
        .get('/akirachix')
        .end((err, result) => {
          expect(result.status).to.equal(200);
          done();
        });
    });
  });
});
