const loveCalculator = () => {
    let firstPersonName = prompt("What is your name?");
    let secondPersonName = prompt("What is their name?");

    let loveScore = Math.floor(Math.random() * 100);

    alert(firstPersonName + " + " + secondPersonName + " = " + loveScore + "%💕")
}

loveCalculator();
