const randomDiceNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
}

const whichDiceImage = (number) => {
    return "./images/dice" + number + ".png";
}

const checkWhoWin = (firstDice, secondDice) => {
    if (firstDice === secondDice) {
        document.querySelector("#result").innerHTML = " 🚩 DRAW! 🚩 "
    } else if (firstDice > secondDice) {
        document.querySelector("#result").innerHTML = "🚩 Player 1 Wins!"
    } else {
        document.querySelector("#result").innerHTML = "Player 2 Wins! 🚩"
    }
}

const startGame = () => {
    let firstDice = randomDiceNumber();
    let secondDice = randomDiceNumber();

    document.querySelectorAll(".player img")[0].setAttribute(
        "src",
        whichDiceImage(firstDice)
    );
    document.querySelectorAll(".player img")[1].setAttribute(
        "src",
        whichDiceImage(secondDice)
    );

    checkWhoWin(firstDice, secondDice);

    document.querySelector(".gameContainer").style.visibility = "visible";
}
