//Check if year is leap year

const isLeep = (year) => {
    let isLeepYear = false;

    if (year % 4 === 0) {
        isLeepYear = true;
        if (year % 100 === 0) {
            isLeepYear = false;
            if (year % 400 === 0) {
                isLeepYear = true;
            }
        }
    }

    if (isLeepYear) {
        return "Leap year.";
    } else {
        return "Not leap year.";
    }
}

console.log(isLeep(2000));
console.log(isLeep(2100));
console.log(isLeep(1989));
console.log(isLeep(2400));
console.log(isLeep(1948));
