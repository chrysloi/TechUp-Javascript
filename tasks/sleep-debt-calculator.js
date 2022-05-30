const getSleepHours = (day) => {
    day = day.toLowerCase();

    switch (day) {
        case 'monday':
            return 8;
    
        case 'tuesday':
            return 8;

        case 'wednesday':
            return 8;
    
        case 'thursday':
            return 8;

        case 'friday':
            return 8;
    
        case 'saturday':
            return 8;

        case 'sunday':
            return 8; 
            
        default:
            break;
    }

    // if (day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday') {
    //     return 8
    // }
}

function getActualSleepHours() {
    monday = getSleepHours('Monday');
    tuesday = getSleepHours('Tuesday')
    wednesday = getSleepHours('Wednesday')
    thursday = getSleepHours('thursday')
    friday = getSleepHours('friday')
    saturday = getSleepHours('saturday')
    sunday = getSleepHours('sunday')

    return monday + tuesday + wednesday + thursday + friday + saturday + sunday;
}

const getIdealSleepHours = (idealHours) => {
    return idealHours*7
}

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours == idealSleepHours) {
        return "\nYou've got a perfect sleep this week\n";
    } else if (actualSleepHours > idealSleepHours) {
        let excessHour = actualSleepHours - idealSleepHours
        return "\nThis week you had more " + excessHour + " excess hours of sleep\n";        
    } else if (actualSleepHours < idealSleepHours) {
        lessHours = idealSleepHours - actualSleepHours
        return "\nYou had " + lessHours + " hours less than the sleep you needed\n";
    }
}

console.log(calculateSleepDebt());