//Calculate how much days, weeks and months you live

function lifeInWeeks(age) {

    let days = (90 - age) * 365;
    let weeks = (90 - age) * 52;
    let months = (90 - age) * 12;

    let outputString = "You have " + days + "days, " + weeks + "weeks, and " +
            months + " months left."
    console.log(outputString)
}

lifeInWeeks(56);
