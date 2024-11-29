const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber with Chai', () => {
  it('should correctly handle SUM', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should correctly handle SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should correctly handle DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return Error for DIVIDE by 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
