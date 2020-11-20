import Game from "./modules/game.js"

/*
Metoda odpowiedzialna na rozpoczęcie rozgrywki.
 */
async function startGame() {
    console.log("You start the game SIMON! :)\n Good Luck!");
    //Uruchomienie gry
    let game = new Game();
    //Zainicjowanie klawiszy klawiatury i .container-box
    initSimonButtons(game);
    game.start();
    //Uruchomienie gry i czekanie az sie zakonczy
    await game.play();

    //Wznowienie startowanie gry poprzez nacisniecie div'a kontenera
    document.querySelector(".container-box").addEventListener("click", startGame);

}

/*
Deklaracja eventu listenera do obslugi nacisniecia klawiszy klawiatury.
 */
function initGameStart() {
    //Startowanie gry z klawiszy klawiatury
    window.addEventListener("keypress", startGame);

    //Startowanie gry poprzez nacisniecie div'a kontenera
    document.querySelector(".container-box").addEventListener("click", startGame);
}

/* Deklaracja eventu listenera do obslugi przyciskow SIMON'a, pozwalająca na
 * tworzenie sekwencji gracza.
 */
function initSimonButtons(game) {
    let button = document.querySelectorAll(".btn");
    //Wylaczenie startowania gry poprzez nacisniecie div'a kontenera
    document.querySelector(".container-box").removeEventListener(
        "click",
        startGame
    );

    for (var i = 0; i < button.length; i++) {
        button[i].classList.remove("btn-disabled");
        button[i].addEventListener("click", function() {
            try {
                game.addClickedButtonToSequence(this);
            } catch (e) {
                console.log("Maybe time to start the game? ;)")
            }
        });
    }
}

initGameStart();
