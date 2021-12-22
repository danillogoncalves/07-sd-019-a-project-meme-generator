const inputText = document.querySelector('#text-input');
const inputImage = document.querySelector('#meme-insert');
const memeText = document.querySelector('#meme-text');
const memeImageInContainer = document.querySelector('#meme-image');


function printMemeText() {
    memeText.innerHTML = inputText.value;
}

function applyImageChoosed() {
    // https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
    // Usando as informações do link acima fiz algumas adaptações para solucionar a aplicação da imagem do input no img.
    memeImageInContainer.src = URL.createObjectURL(inputImage.files[0])
}


inputImage.addEventListener('change', applyImageChoosed);
inputText.addEventListener('keyup', printMemeText);