const romanNumeralToDecimal = require('../index.js');
const expect = require('chai').expect;

describe('romanNumeralToDecimal invalid input test cases', () => {
    it('should return -1 when input is an empty string', () => {
        expect(romanNumeralToDecimal('')).to.equal(-1);
    });

    it('should return -1 when input contains a non-Roman numeral', () => {
        expect(romanNumeralToDecimal('aX')).to.equal(-1);
    });
});

describe('romanNumeralToDecimal valid input test cases', () => {
    it('should properly calculate a single (digit) numeral', () => {
        expect(romanNumeralToDecimal('X')).to.equal(10);
    });

    it('should properly calculate a multi-digit numeral', () => {
        expect(romanNumeralToDecimal('XII')).to.equal(12);
    });

    it('should properly calculate a numeral where smaller denominations precede larger', () => {
        expect(romanNumeralToDecimal('MCMLXXXVII')).to.equal(1987);
    });
});