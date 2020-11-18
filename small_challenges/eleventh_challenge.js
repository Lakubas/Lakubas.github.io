// Bottles SONG

let i = 99;

while (i >= 0) {
    let text1 = i + " bottles of beer on the wall, ";
    let text2 = i + " bottles of beer. "
    let text3 = "Take 1 down, pass it around, ";
    i--;
    if (i === 0) {
        i = "no more"
    }
    let text4 = i + " boottles of beer on the wall."
    console.log(text1 + text2 + text3 + text4);
}

console.log(
    "No more boottles of beer on the wall., no more bottles of beer. Ho to the stor" +
    "e and buy some more, 99 bottles of beer on the wall."
);
