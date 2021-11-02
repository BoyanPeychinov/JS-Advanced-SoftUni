class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
        this.carNumbers = [];
    }

    addCar(carModel, carNumber) {
        if (this.carNumbers.length == this.capacity) {
            throw new Error('Not enough parking space.');
        }
        this.vehicles.push({
            carModel,
            carNumber,
            payed: false
        });
        this.carNumbers.push(carNumber);

        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        if (this.carNumbers.includes(carNumber) == false) {
            throw new Error('The car, you\'re looking for, is not found.');
        }
        let currentCarIndex = this.carNumbers.findIndex(c => c == carNumber);

        if (this.vehicles[currentCarIndex].payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        this.vehicles.splice(currentCarIndex, 1);
        this.carNumbers.splice(currentCarIndex, 1);

        return `${carNumber} left the parking lot.`
    }

    pay(carNumber) {
        if (this.carNumbers.includes(carNumber) == false) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        let currentCarIndex = this.carNumbers.findIndex(c => c == carNumber);

        if (this.vehicles[currentCarIndex].payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        this.vehicles[currentCarIndex].payed = true;

        return `${carNumber}'s driver successfully payed for his stay.`

    }

    getStatistics(carNumber) {
        let result = '';
        if (carNumber == undefined) {
            result = `The Parking Lot has ${this.capacity - this.carNumbers.length} empty spots left.`;
            this.vehicles = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));

            for (let car of this.vehicles) {
                result += `\n${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`;
            }

            return result;
        }

        let currentCarIndex = this.carNumbers.findIndex(c => c == carNumber);

        result = `${this.vehicles[currentCarIndex].carModel} == ${this.vehicles[currentCarIndex].carNumber} - ${this.vehicles[currentCarIndex].payed ? 'Has payed' : 'Not payed'}`;

        return result;
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("VW Bora", "PB3032TX"));
console.log(parking.getStatistics());
console.log(parking.getStatistics("PB3032TX"));

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
