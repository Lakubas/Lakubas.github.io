//Use random generator to choose whos paying for food.

const whosPaying = (names) => {
    let selectRandom = Math.floor((Math.random() * 100)) % names.length;

    let outputText = names[selectRandom] + " is going to buy lunch today!";

    return outputText;
}

let nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

console.log(whosPaying(nameList));
