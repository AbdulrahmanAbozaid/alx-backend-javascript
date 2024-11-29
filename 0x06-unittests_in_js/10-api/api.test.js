const request = require('request');
const { expect } = require('chai');

describe('API tests', () => {
    it('should return available payments', (done) => {
        request('http://localhost:7865/available_payments', { json: true }, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.deep.equal({
                payment_methods: {
                    credit_cards: true,
                    paypal: false,
                },
            });
            done();
        });
    });

    it('should login a user', (done) => {
        const options = {
            url: 'http://localhost:7865/login',
            method: 'POST',
            json: { userName: 'Betty' },
        };
        request(options, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });
});
