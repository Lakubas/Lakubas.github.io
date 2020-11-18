//Chack if name is on guest list.

const isGueast = (guestName) => {
    var guestList = [
        "Ala",
        "Ola",
        "Pola",
        "Adam",
        "Arek",
        "Kasztan"
    ];
    guestName = guestName.slice(0, 1).toUpperCase() + guestName.slice(1).toLowerCase();

    return guestList.includes(guestName)
}

let inputName = prompt("What is your name?");

if (isGueast(inputName)) {
    console.log("Wellcome " + inputName);
} else {
    console.log("Sorry, maybe next time!")
}
