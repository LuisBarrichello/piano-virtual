const keys = document.querySelectorAll('.key')

function playNote(event) {
    let audioKeyCode = getKeyCode(event);

    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)


    const cantFoundAnyKey = !key;

    if(cantFoundAnyKey) {
        return;
    }

    addPlayingClasse(key)
    
    playAudio(audioKeyCode)
}

function addPlayingClasse(key) {
    key.classList.add('playing')
}

function removePlayingClass(event) {
    event.target.classList.remove("playing")
}

function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === "keydown"
    if(isKeyboard) {
    keyCode = event.keyCode
    } else {
    keyCode = event.target.dataset.key
    }

    return keyCode
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function registerEvents() {
    keys.forEach((key) => {
        key.addEventListener('click', playNote);
        key.addEventListener("transitionend", removePlayingClass);
    })
    
    window.addEventListener('keydown', playNote)
}

window.addEventListener("load", registerEvents)