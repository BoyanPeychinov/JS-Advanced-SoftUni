const numberOperations = require('./numberOperations');
const { expect } = require('chai');

describe('Test numberOperations', () => {
    describe('Test powNumber', () => {
        it('works with positive number', () => {
            expect(numberOperations.powNumber(5)).to.equal(25);
        });

        it('works with negative number', () => {
            expect(numberOperations.powNumber(-5)).to.equal(25);
        });

        it('works with floating point', () => {
            expect(numberOperations.powNumber(5.5)).to.equal(30.25);
        });
    });

    describe('Test numberChecker', () => {
        it('returns message for numbers lower than 100', () => {
            expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-1)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
        });

        it('returns message for numbers greater or equal to 100', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101.1)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
        });

        it('works with string numbers', () => {
            expect(numberOperations.numberChecker('1')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('-1')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('1.1')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('99')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('101')).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('101.1')).to.equal('The number is greater or equal to 100!');

        });

        it('works with false data, returns message for numbers lower than 100', () => {
            expect(numberOperations.numberChecker(null)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker([])).to.equal('The number is lower than 100!');
        });

        it('throw error message with NaN data', () => {
            expect(() => numberOperations.numberChecker(undefined)).to.throw();
            expect(() => numberOperations.numberChecker('error')).to.throw();
            expect(() => numberOperations.numberChecker(['error'])).to.throw();
            expect(() => numberOperations.numberChecker({})).to.throw();
            expect(() => numberOperations.numberChecker(Symbol)).to.throw();
        })
    });

    describe('Test sumArrays', () => {
        it('works with valid data', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4])).to.have.ordered.members([2, 4, 6, 4]);
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4])).to.have.lengthOf(4);
            expect(numberOperations.sumArrays([1.1, 2.2, 3.3], [1.1, 2.2, 3.3, 4.4])).to.have.ordered.members([2.2, 4.4, 6.6, 4.4]);
            expect(numberOperations.sumArrays([1, 3, 3], [-1, -2, -4, 4])).to.have.ordered.members([0, 1, -1, 4]);

        it('works with string elements in the arrays', () => {
            expect(numberOperations.sumArrays(['1', '2', '3'], ['1', '2', '3', '4'])).to.have.ordered.members(['11', '22', '33', '4']);
        })

        it('return empty array with two empty arrays given', () => {
            expect(numberOperations.sumArrays([], [])).to.be.an('array').that.is.empty;
        })

        });
    });
});