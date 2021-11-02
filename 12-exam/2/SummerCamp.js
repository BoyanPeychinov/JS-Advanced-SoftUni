class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (Object.keys(this.priceForTheCamp).includes(condition) == false) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this.listOfParticipants.some(n => n.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        if (this.listOfParticipants.some(n => n.name == name) == false) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        let index = this.listOfParticipants.findIndex(p => p.name == name);
        this.listOfParticipants.splice(index, 1);

        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (this.listOfParticipants.some(n => n.name == participant1) == false) {
            throw new Error('Invalid entered name/s.');
        }

        if (typeof participant2 != 'undefined' && this.listOfParticipants.some(n => n.name == participant2) == false) {
            throw new Error('Invalid entered name/s.');
        }

        let player1 = this.listOfParticipants.find(p => p.name == participant1);
        let player2 = this.listOfParticipants.find(p => p.name == participant2);

        if (typeof player2 != 'undefined') {
            if (player1.condition != player2.condition) {
                throw new Error('Choose players with equal condition.');
            }
        }

        if (typeOfGame == 'Battleship') {
            player1.power += 20;

            return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
        }

        if (player1.power > player2.power) {
            player1.wins += 1;

            return `The ${player1.name} is winner in the game ${typeOfGame}.`
        } else if (player2.power > player1.power) {
            player2.wins += 1;

            return `The ${player2.name} is winner in the game ${typeOfGame}.`
        }

        return 'There is no winner.';
    }

    toString() {
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
        this.listOfParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for (let p of this.listOfParticipants) {
            result += `\n${p.name} - ${p.condition} - ${p.power} - ${p.wins}`
        }

        return result;
    }
}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));

console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
