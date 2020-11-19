const PATH_MAIN = "Bose_Level_Challenge_Drum_Kit/";
const PATH_SOUND = PATH_MAIN + 'sounds/';
const PATH_IMAGES = PATH_MAIN + 'images/';

setButtonEventListener = () => {
    let drum = document.querySelectorAll(".drum");

    for (var i = 0; i < drum.length; i++) {
        drum[i].addEventListener("click", function() {
            whatButtonClicked(this);
        });
    }
}

whatButtonClicked = (drum) => {
    try {
        drum.style.color = "white";
        // console.log("Button: " + drum.id);
        playSounds(getPathToPlaySound(drum));

        /* TODO: Switch statement is not necessary :DDDD */
        // switch (drum.id) { case "w": playSounds(getPathToPlaySound(drum)); break;
        // case "a": playSounds(getPathToPlaySound(drum)); break; case
        // "s":playSounds(getPathToPlaySound(drum)); break; case
        // "d":playSounds(getPathToPlaySound(drum)); break; case
        // "j":playSounds(getPathToPlaySound(drum)); break; case
        // "k":playSounds(getPathToPlaySound(drum)); break; case
        // "l":playSounds(getPathToPlaySound(drum)); break; }

        setTimeout(() => {
            drum.style.color = "";
        }, 100);
    } catch (e) {
        console.log("Pressed key not supported. 😔");
    }
}

getPathToPlaySound = (drum) => {
    let soundFile = getComputedStyle(drum).backgroundImage;
    soundFile = soundFile.split("/");
    soundFile = soundFile[soundFile.length - 1];
    soundFile = soundFile.split(".");

    return PATH_SOUND + soundFile[0];
}

playSounds = (src) => {
    let audio = new Audio(src + ".mp3");
    audio.play();
}

async function setKeyboardEventListener() {
    await window.addEventListener("keypress", function(event) {
        console.log(event.key);
        let drum = document.querySelector("#" + event.key);
        whatButtonClicked(drum);
    });
}

setButtonEventListener();
setKeyboardEventListener();
