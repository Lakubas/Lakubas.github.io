/*
Funkcja odpowiedzialna za odtwarzanie dzwięków.
 */
function playSounds(buttonIdName) {
    let audio = new Audio("../sounds/" + buttonIdName + ".mp3");
    audio.play();
}

/*
Asynchroniczna matoda odpowiedzialna za wyswietlanie sekwencji SIMON
 */
async function display(game_sequence) {
    for (var i = 0; i < game_sequence.length; i++) {
        let id = game_sequence[i].toString();
        try {
            await _sleep(125);
            document.querySelector("#" + id).classList.add("btn-active")
            playSounds(id);
            await _sleep(500);
            document.querySelector("#" + id).classList.remove("btn-active")
        } catch  {}
    }
}

/*
Co to za kod bez metody typu "sleep"> :D
 */
function _sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export {
    playSounds,
    display,
    _sleep
};
