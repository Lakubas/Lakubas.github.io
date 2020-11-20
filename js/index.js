import Game from "./modules/game.js"
import {playSounds} from "./modules/displayGame.js"

/*
Metoda odpowiedzialna na rozpoczęcie rozgrywki.
 */
function startGame() {
    console.log("You start the game SIMON! :)\n Good Luck!");
    let game = new Game();
    game.start();
    game.play();
    initSimonButtons(game);

}

function checkSimonMove() {

    let move = document
}

/*
Deklaracja eventu listenera do obslugi nacisniecia klawiszy klawiatury.
 */
function initKeyboardButtons() {
    window.addEventListener("keypress", startGame);
}

/* Deklaracja eventu listenera do obslugi przyciskow SIMON'a, pozwalająca na
 * tworzenie sekwencji gracza.
 */
function initSimonButtons(game) {
    let button = document.querySelectorAll(".btn");
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function() {
            playSounds(this.id);
            try {
                game.addClickedButtonToSequence(this);
            } catch (e) {
                console.log("Maybe time to start the game? ;)")
            }
        });
    }
}

initKeyboardButtons();
initSimonButtons();
