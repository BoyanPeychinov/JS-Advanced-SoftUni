const dealership = require('./dealership');
const { expect } = require('chai')

describe('Test dealership', () => {
    describe('Test newCarCost property', () => {
        it('works with right old car and decrease the price', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);      
        });

        it('works with diffrent old car without decrease of price', () => {
            expect(dealership.newCarCost('Mercedes', 50000)).to.equal(50000);
        });
    });

    describe('Test carEquipment property', () => {
        it('works with valid parts and indexes', () => {
            expect(dealership.carEquipment(['part1', 'part2', 'part3'], [0, 2])).to.have.members(['part1', 'part3']);
        });
        it('returns empty array with empty input', () => {
            expect(dealership.carEquipment([], [])).to.have.lengthOf(0);
            expect(dealership.carEquipment([], [1])).to.have.members([undefined]);
            expect(dealership.carEquipment(['part1'], [])).to.have.lengthOf(0);
            expect(dealership.carEquipment(['part1'], [1])).to.have.members([undefined]);
        });
    });

    describe('Test euroCategory property', () => {
        it('works with category greater than or equal to 4', () => {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.');
        });
        
        it('works with category less than 4', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });
})