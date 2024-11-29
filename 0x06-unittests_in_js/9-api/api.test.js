const request = require('request');
const { expect } = require('chai');

describe('Cart page', () => {
    const base = 'http://localhost:7865/cart/';

    it('should return status 200 for valid ID', (done) => {
        request(`${base}12`, (err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct message for valid ID', (done) => {
        request(`${base}12`, (err, res, body) => {
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('should return 404 for invalid ID', (done) => {
        request(`${base}hello`, (err, res) => {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});
