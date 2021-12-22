const inputText = document.querySelector('#text-input');
const inputImage = document.querySelector('#meme-insert');
const memeText = document.querySelector('#meme-text');
const memeImageInContainer = document.querySelector('#meme-image');
const memeContainer = document.querySelector('#meme-image-container');
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');
const memePreContainer = document.querySelector('#meme-pre-container').children;

function printMemeText() {
  memeText.innerHTML = inputText.value;
}

function applyImageChoosed() {
  // https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
  // Usando as informações do link acima fiz algumas adaptações para solucionar a aplicação da imagem do input no img.
  memeImageInContainer.src = URL.createObjectURL(inputImage.files[0]);
}

function applyBorderFire() {
  memeContainer.style.border = '3px dashed red';
}

function applyBorderWater() {
  memeContainer.style.border = '5px double blue';
}
function applyBorderEarth() {
  memeContainer.style.border = '6px groove green';
}

function applyMemePre(e) {
  memeImageInContainer.src = e.target.src;
}

for (let i = 0; i < memePreContainer.length; i += 1) {
  memePreContainer[i].addEventListener('click', applyMemePre);
}

inputImage.addEventListener('change', applyImageChoosed);
inputText.addEventListener('keyup', printMemeText);
buttonFire.addEventListener('click', applyBorderFire);
buttonWater.addEventListener('click', applyBorderWater);
buttonEarth.addEventListener('click', applyBorderEarth);
