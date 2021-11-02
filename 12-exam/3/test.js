const library = require('./library');
const { expect } = require('chai');

describe('Test library', () => {
    describe('Test calcPriceOfBook func', () => {
        it('works with valid data - book after 1980', () => {
            expect(library.calcPriceOfBook("Book", 2000)).to.equal('Price of Book is 20.00');
        });

        it('works with valid data - book before and from 1980, with discount', () => {
            expect(library.calcPriceOfBook("Book", 1980)).to.equal('Price of Book is 10.00');
            expect(library.calcPriceOfBook("Book", 1979)).to.equal('Price of Book is 10.00');
        });

        it('throw error with invalid input', () => {
            expect(() => library.calcPriceOfBook(1, 2)).to.throw();
            expect(() => library.calcPriceOfBook(undefined, 1)).to.throw();
            expect(() => library.calcPriceOfBook(Symbol, undefined)).to.throw();
            expect(() => library.calcPriceOfBook(NaN, 1)).to.throw();
            expect(() => library.calcPriceOfBook(null, 1)).to.throw();
            expect(() => library.calcPriceOfBook('Book', 'false')).to.throw();
            expect(() => library.calcPriceOfBook('Book', '')).to.throw();
            expect(() => library.calcPriceOfBook('Book', undefined)).to.throw();
            expect(() => library.calcPriceOfBook('Book', NaN)).to.throw();
            expect(() => library.calcPriceOfBook('Book', Symbol)).to.throw();
            expect(() => library.calcPriceOfBook('Book', null)).to.throw();
        })
    });

    describe('Test findBook func', () => {
        it('works with matching books', () => {
            expect(library.findBook(['Vinetu', 'Book'], 'Book')).to.equal('We found the book you want.');
        });

        it('works without matching books', () => {
            expect(library.findBook(['Vinetu', '1984'], 'Book')).to.equal('The book you are looking for is not here!');
        });

        it('throws error with empty array', () => {
            expect(() => library.findBook([], 'Book')).to.throw();
        })
    });

    describe('Test arrangeTheBooks func', () => {
        it('works with valid data and space left', () => {
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(1)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.');
        });

        it('works with valid data without space left', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });

        it('throws error with not valid input type', () => {
            expect(() => library.arrangeTheBooks(NaN)).to.throw();
            expect(() => library.arrangeTheBooks(undefined)).to.throw();
            expect(() => library.arrangeTheBooks('false')).to.throw();
            expect(() => library.arrangeTheBooks('')).to.throw();
            expect(() => library.arrangeTheBooks(Symbol)).to.throw();
        });

        it('throws error with number below 0', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw();
            expect(() => library.arrangeTheBooks(-100)).to.throw();
        });
    });
})