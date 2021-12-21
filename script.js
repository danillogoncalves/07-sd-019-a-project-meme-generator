const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

function printMemeText() {
    memeText.innerHTML = inputText.value;
}

inputText.addEventListener('keyup', printMemeText);