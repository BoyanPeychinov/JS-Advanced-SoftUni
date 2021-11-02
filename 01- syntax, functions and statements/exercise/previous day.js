function calcDate(year, month, day) {
    //const date = new Date(year, month-1, day);
    //const resultDate = new Date();
    //const millisecs = 1000 * 60 * 60 * 24;
    //resultDate.setTime(date.getTime() - millisecs);
    //console.log(resultDate);

    let dateString = year + '-' + month + '-' + day;
    let event = new Date(dateString);
    event.setDate(day - 1);
    console.log(event.getFullYear()+'-' + (Number(event.getMonth()) + 1)+ '-' + event.getDate());
}


calcDate(2016, 9, 30)
calcDate(2016, 10, 1)
