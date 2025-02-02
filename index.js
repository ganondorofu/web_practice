const images = [
    "img/cat.jpg",
    "img/dog.jpg",
    "img/aligator.jpg"
];

let currentIndex = 0;
const mainVisual = document.querySelector(".mainVisual");

function changeBackground() {
    mainVisual.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 3000);
changeBackground();

