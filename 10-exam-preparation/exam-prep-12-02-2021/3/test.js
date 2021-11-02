const pizzUni = require('./pizzUni');
const { expect } = require('chai');

describe('Test pizzUni', () => {
    describe('Test makeAnOrder func', () => {
        it('works with ordered pizza and ordered drink', () => {
            expect(pizzUni.makeAnOrder({ orderedPizza: 'Burger pizza', orderedDrink: 'Cola' })).to.equal('You just ordered Burger pizza and Cola.');
        });

        it('works with ordered pizza without ordered drink', () => {
            expect(pizzUni.makeAnOrder({ orderedPizza: 'Burger pizza' })).to.equal('You just ordered Burger pizza');
        });

        it('throw erorr with empty object or false data', () => {
            expect(() => pizzUni.makeAnOrder({})).to.throw();
            expect(() => pizzUni.makeAnOrder()).to.throw();
            expect(() => pizzUni.makeAnOrder({ undefined })).to.throw();
            expect(() => pizzUni.makeAnOrder({ NaN })).to.throw();
        })
    });

    describe('Test getRemainingWork func', () => {
        it('works with ready pizzas', () => {
            expect(pizzUni.getRemainingWork([{ pizzaName: 'Burger pizza', status: 'ready' }, { pizzaName: 'Peperoni', status: 'ready' }])).to.equal('All orders are complete!');
        });
        
        it('works with not ready pizzas', () => {
            expect(pizzUni.getRemainingWork([
                { pizzaName: 'Burger pizza', status: 'preparing' },
                { pizzaName: 'Peperoni', status: 'preparing' },
                { pizzaName: 'Prima vera', status: 'ready' }
            ])).to.equal('The following pizzas are still preparing: Burger pizza, Peperoni.');
        });
        
        it('works with empty array', () => {
            expect(pizzUni.getRemainingWork([])).to.equal('All orders are complete!');
        });
    });

    describe('Test orderType func', () => {
        it('works with order type - carry out, expect to make 10% discount', () => {
            expect(pizzUni.orderType(10, 'Carry Out')).to.equal(9);
        });

        it('works with order type - delivery, no discount', () => {
            expect(pizzUni.orderType(10, 'Delivery')).to.equal(10);
        });

        it('works with string totalSum', () => {
            expect(pizzUni.orderType('10', 'Carry Out')).to.equal(9);
            expect(pizzUni.orderType('10', 'Delivery')).to.equal('10');
        })

        it('works with without input data', () => {
            expect(pizzUni.orderType()).to.be.undefined;
        });
    });
})