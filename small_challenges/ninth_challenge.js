/*
Program that prints the numbers from 1 to 100. But for multiples of three
print "Fizz" instead of the number and the multiples of five print "Buzz".
For number which are multiples pf both three and five print "FizzBuzz".
 */

const ismultiple = (number) => {
    let output = "";
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}

for (i = 1; i <= 100; i++) {
    console.log(ismultiple(i));
}
