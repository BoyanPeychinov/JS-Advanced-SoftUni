// function ticketsData(arr, criteria) {
//     class Ticket {
//         constructor(destination, price, status) {
//             this.destination = destination;
//             this.price = Number(price);
//             this.status = status;
//         }
//     }
//     const tickets = [];

//     for (ticket of arr) {
//         let [destination, price, status] = ticket.split('|');
//         tickets.push(new Ticket(destination, price, status));
//     }

//     return forSorting(tickets, criteria);

//     function forSorting(arr, criteria) {
//         if (criteria == 'destination') {
//             return arr.sort((a, b) => a.destination.localeCompare(b.destination));
//         } else if (criteria == 'price') {
//             return arr.sort((a, b) => a.price - b.price);
//         } else {
//             return arr.sort((a, b) => a.status.localeCompare(b.status))
//         };
//     }
// }


// arr1 = ticketsData(
//         ['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//         'destination'
//     );

// arr1.forEach((el) => console.log(el))

// arr2 = ticketsData(
//     ['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'status'
// );


// arr2.forEach((el) => console.log(el))

function solve(tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const ticketObjs = [];

    tickets.forEach((entry) => {
        const [dest, price, status] = entry.split('|');
        ticketObjs.push(new Ticket(dest, Number(price), status));
    })

    if (criteria == 'destination') {
        ticketObjs.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        })
    } else if (criteria == 'status') {
        ticketObjs.sort((a, b) => {
            return a.status.localeCompare(b.status);
        })
    } else {
        ticketObjs.sort((a, b) => {
            return a.price - b.price;
        })
    }

    return ticketObjs;
}