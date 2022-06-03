const drumKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];

document.addEventListener('keydown', event => {
    if (drumKeys.includes(event.key)) {
        const pressedKey = document.querySelector(`div[data-key="${event.key}"]`)
        const audio = document.querySelector(`audio[data-key="${event.key}"]`)
        if (!pressedKey || !audio) return;
        pressedKey.classList.add('playing');
        audio.currentTime = 0; // restart audio if playing
        audio.play();
    }
})

document.addEventListener('keyup', event => {
    if (drumKeys.includes(event.key)) {
        const releasedKey = document.querySelector(`div[data-key="${event.key}"]`)
        if (!releasedKey) return;
        releasedKey.classList.remove('playing');
    }
})