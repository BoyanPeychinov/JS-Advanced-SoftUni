class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }

    shopping(product) {
        let [type, price] = product;
        price = Number(price);

        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(type);
        this.budget -= price;

        return `You have successfully bought ${type}!`
    }

    recipes(recipe) {
        let { recipeName, productsList } = recipe;
        
        if (productsList.every(e => this.products.includes(e)) == false) {
            throw new Error('We do not have this product');
        }

        this.dishes.push(
            {
                recipeName,
                productsList
            }
        );
        return `${recipeName} has been successfully cooked!`;

    }

    inviteGuests(name, dish) {
        if (this.dishes.some(d => d.recipeName == dish) == false) {
            throw new Error('We do not have this dish');
        }
        
        if (Object.keys(this.guests).includes(name)) {
            throw new Error('This guest has already been invited');
        }
        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = [];
        for (let guest in this.guests) {
            let products = this.dishes.find(a => a.recipeName == this.guests[guest])['productsList'];
            result.push(`${guest} will eat ${this.guests[guest]}, which consists of ${products.join(', ')}`);
        }

        return result.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

