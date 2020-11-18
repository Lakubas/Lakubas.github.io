// Fun with alerts
function allerter() {
    let message = "Hello";
    let name = "Bert";

    alert(message + " " + name);
}
function tekst() {
    let tweet = prompt("Write something: ");
    let tweetLength = tweet.length;
    alert(
        "You have written " + tweetLength + " charactrers, you have " + (
            140 - tweetLength
        ) + " characters remaining."
    );
}
function tekst140() {
    let tweet = prompt("Write something: ");
    let tweetUnder140 = tweet.slice(0, 140);
    alert("Your tweer:\n" + tweetUnder140);
}
function alert140() {
    alert(prompt("Write something: ").slice(0, 140).toLocaleUpperCase());
}
function name() {
    let name = prompt("What is your name?");
    alert("Hello " + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase());
}

function dogToHumanAge() {
    let dogAge = prompt("What is your doge age?");
    dogAge = ((dogAge - 2) * 4) + 21;
    alert("It is a " + dogAge + " years in human age!");
}

dogToHumanAge();
