const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('should return status 200', (done) => {
    request(url, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
