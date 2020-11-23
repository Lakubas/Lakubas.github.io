import Game from "./modules/game.js"

/*
Metoda odpowiedzialna na rozpoczęcie rozgrywki.
 */
async function startGame() {
    /*
    Wylaczenie startowania gry poprzez nacisniecie div'a kontenera badz klawisza
    klawiatury
     */
    disableGameStart();
    console.log("You start the game SIMON! :)\n Good Luck!");
    //Uruchomienie gry
    game = new Game();
    //Zainicjowanie klawiszy klawiatury i .container-box initSimonButtons(game);
    game.start();
    //Uruchomienie gry i czekanie az sie zakonczy
    await game.play();

    console.log("Game END!");
    /*
    Wznowienie startowanie gry poprzez nacisniecie div'a kontenera badz klawisza
    klawiatury
     */
    initGameStart();
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

function disableGameStart() {
    //Wylaczenie startowania gry poprzez nacisniecie div'a kontenera
    document.querySelector(".container-box").removeEventListener(
        "click",
        startGame
    );
    //Wylaczenie startowania gry poprzez nacisniecie przycisku
    window.removeEventListener("keypress", startGame);
}

/*
Deklaracja eventu listenera do obslugi przyciskow SIMON'a, pozwalająca na
tworzenie sekwencji gracza.
 */
function initSimonButtons() {
    let button = document.querySelectorAll(".btn");
    for (var i = 0; i < button.length; i++) {
        button[i].classList.remove("btn-disabled");
        button[i].addEventListener("click", function() {
            try {
                game.addClickedButtonToSequence(this);
                console.log("Listener bruzdzi!");
            } catch (e) {
                console.log("Maybe time to start the game? ;)")
            }
        });
    }
}

let game; //Zmienna globalna na zainicjowana klase Game (new Game())!
initSimonButtons();
initGameStart();
