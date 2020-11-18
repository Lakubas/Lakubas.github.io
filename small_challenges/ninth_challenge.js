/*
Program that prints the numbers from 1 to 100. But for multiples of three
print "Fizz" instead of the number and the multiples of five print "Buzz".
For number which are multiples pf both three and five print "FizzBuzz".
 */

const ismultiple = (number, output) => {
    if (number % 3 === 0 && number % 5 === 0) {
        output.push("FizzBuzz");
    } else if (number % 3 === 0) {
        output.push("Fizz");
    } else if (number % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(number);
    }
}

let array = [];

for (i = 1; i <= 100; i++) {
    ismultiple(i, array);
}

array.reverse();
while (array.length !== 0) {
    let poped = array.pop();
    console.log(poped);
}
