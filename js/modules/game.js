import {display, _sleep as sleep, playSounds} from "./displayGame.js"

class Game {
    #debug = false;
    #game_buttons = ["green", "red", "yellow", "blue"];
    #game_level;
    #game_over;
    #game_sequence;
    #player_sequence;
    /*
    Podstawowy konstruktor klasy
     */
    constructor(debug) {
        this.#debug = debug;
    }

    /*
    Metoda pozwalajaca na dodawanie wcisniętego przycisku SIMON'a do tablicy sekwencji gracza.
     */
    addClickedButtonToSequence(button) {
        this.#player_sequence.push(button.id);
    }

    /*
    Metoda pozwalajaca na generowanie liczb losowych od 0 do 3
    */
    get #generateRandom() {
        let random = Math.floor(Math.random() * 4);
        return random;
    }

    /*
    Metoda pozwalająca na ustawienie odpowiedniego tytułu na stronie (modifikacja h1.title)
     */
    set #setTitle(title) {
        document.querySelector(".title").innerHTML = title;
    }

    /*
    Metoda pozwalająca na zwiększenie levelu gry
     */
    set #setLevel(level) {
        this.#game_level = level;
    }

    /*
    Metoda wywołująca koniec GRY!
     */
    async #gameOver(bool) {
        this.#game_over = bool;
        this.#setTitle = "Game OVER!\n Press any KEY to start again";
        playSounds("wrong");
        document.querySelector("body").classList.add("game-over");
        await sleep(400);
        document.querySelector("body").classList.remove("game-over");
    }

    /*
    Metoda rozpoczynająca grę -> Konieczny async/await do zachowania
    ciągłości wykonywanego kodu.
    */
    async start() {
        this.#game_level = 1;
        this.#game_sequence = [];
        this.#player_sequence = [];
    }

    async play() {
        while (!this.#game_over) {
            this.#player_sequence = [];
            //Ustawienie w tytule numeru poziomu gry
            this.#setTitle = "Level " + this.#game_level;
            //Generowanie sekwencji SIMON'a
            this.#game_sequence.push(this.#game_buttons[this.#generateRandom]);
            if (this.#debug) {
                console.log(this.#game_sequence);
            }
            //Wyswietlenie nowowygenerowanej sekwencji simona
            await display(this.#game_sequence);

            while (this.#game_sequence.length !== this.#player_sequence.length) {
                await sleep(100)
                let player_sequence_length = this.#player_sequence.length;
                if (this.#game_sequence[player_sequence_length - 1] != this.#player_sequence[player_sequence_length - 1]) {
                    this.#player_sequence = this.#game_sequence;
                    this.#gameOver(true);
                }
            }

            let length = this.#player_sequence.length;
            if (this.#game_sequence[length - 1] != this.#player_sequence[length - 1]) {
                this.#gameOver(true);
            }
            await sleep(500);
            this.#game_level++;
        }
    }
}

export default Game
