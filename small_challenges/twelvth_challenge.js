//Fibonacci numbers generator

const fibonacciGenerator = (n) => {
    if (n === 0) {
        return [0];
    }
    let output = [0, 1];
    for (let i = 2; i <= n; i++) {
        output.push(output[i - 1] + output[i - 2]);
    }

    return output;
}

console.log(fibonacciGenerator(50))
