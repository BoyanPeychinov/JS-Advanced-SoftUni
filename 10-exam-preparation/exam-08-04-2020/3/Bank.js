class Bank {
    #bankName;

    constructor(bankName) {
        this.#bankName = bankName;
        this.allCustomers = [];
    }

    get bankName() {
        return this.#bankName;
    }

    newCustomer(customer) {
        if (this.allCustomers.some(c => c.personalId == customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);

        return customer;
    }

    depositMoney(personalId, amount) {
        let currentCustomer = this.allCustomers.find(c => c.personalId == personalId);

        if (currentCustomer == undefined) {
            throw new Error('We have no customer with this ID!');
        }

        if (currentCustomer['totalMoney'] == undefined) {
            currentCustomer['totalMoney'] = 0;
            currentCustomer['transactions'] = [];
        }
        currentCustomer.totalMoney += amount;
        currentCustomer.transactions.unshift(`${currentCustomer.transactions.length + 1}. ${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`);

        return `${currentCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let currentCustomer = this.allCustomers.find(c => c.personalId == personalId);

        if (currentCustomer == undefined) {
            throw new Error('We have no customer with this ID!');
        }

        if (currentCustomer.totalMoney < amount) {
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`);
        }

        currentCustomer.totalMoney -= amount;
        currentCustomer.transactions.unshift(`${currentCustomer.transactions.length + 1}. ${currentCustomer.firstName} ${currentCustomer.lastName} withdrew ${amount}$!`);

        return `${currentCustomer.totalMoney}$`;
    }

    customerInfo(personalId) {
        let currentCustomer = this.allCustomers.find(c => c.personalId == personalId);

        if (currentCustomer == undefined) {
            throw new Error('We have no customer with this ID!');
        }

        let result = `Bank name: ${this.bankName}\nCustomer name: ${currentCustomer.firstName} ${currentCustomer.lastName}\nCustomer ID: ${personalId}\nTotal Money: ${currentCustomer.totalMoney}$\nTransactions:\n`
        
        result += currentCustomer.transactions.join('\n');
        
        return result;
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));