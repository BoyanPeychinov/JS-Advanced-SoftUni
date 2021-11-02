function radar(speed, area) {
    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed = 20;

    let diff = 0;
    let speedZone = 0;
    let overLimit = '';

    switch (area) {
        case 'motorway':
            speedZone = motorwaySpeed;
            break;
        case 'interstate':
            speedZone = interstateSpeed;
            break;
        case 'city':
            speedZone = citySpeed;
            break;
        case 'residential':
            speedZone = residentialSpeed;
            break;
    }
        
    if (speed > speedZone) {
        diff = speed - speedZone;
    }
        
    if (diff > 0) {
        if (diff <= 20) {
            overLimit = 'speeding';
        } else if (diff <= 40) {
            overLimit = 'excessive speeding';
        } else {
            overLimit = 'reckless driving';
        }

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedZone} - ${overLimit}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedZone} zone`);
        }
}

radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');
