function population(townAsString) {
    // iterate over input
    // parse entries
    // store data
    // print result

    const towns = {};

    for (let data of townAsString) {
        const tokens = data.split(' <-> ');
        
        const name = tokens[0];
        let pop = Number(tokens[1]);
        
        if (towns[name]) {
            towns[name] += pop;
            continue;
        }
        towns[name] = pop;
    }

    for (const [name, pop] of Object.entries(towns)) {
        console.log(`${name} : ${pop}`);
    }
}

// population(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000'])

population(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    "Mexico City <-> 23401925",
    'Istanbul <-> 1000'])