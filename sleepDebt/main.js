function getSleepHours(day) {
    day = day.toLowerCase();
    let hours;
    switch (day) {
        case 'monday':
            hours = 8;
            break;
        case 'tuesday':
            hours = 6;
            break;
        case 'wednesday':
            hours = 9;
            break;
        case 'thursday':
            hours = 5;
            break;
        case 'friday':
            hours = 5;
            break;
        case 'saturday':
            hours = 8;
            break;
        case 'sunday':
            hours = 9;
            break;
        default:
            console.log('default');
            break;
    }
    return hours;
}


function getActualSleepHours() {
    let total;
    total = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday')
    + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') 
    + getSleepHours('sunday');
    return total;
}

function getIdealSleepHours() {
    let idealHours = 8;
    return idealHours * 7; // days of the week
}

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    let debt = idealSleepHours - actualSleepHours;
    return debt;
}

console.log(getActualSleepHours());
console.log(getIdealSleepHours());
console.log('your sleep debt is ' + calculateSleepDebt() + ' hours.');

