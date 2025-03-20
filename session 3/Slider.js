const value = document.getElementById('container');

let img = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
];

let i = 0;

value.style.backgroundImage = `url('${img[i]}')`;

function nextButton() {
    i++;
    if (i === img.length) {
        i = 0;
    }
    value.style.backgroundImage = `url('${img[i]}')`;
}

function prevButton() {
    i--;
    if (i < 0) {
        i = img.length - 1;
    }
    value.style.backgroundImage = `url('${img[i]}')`;
}

window.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight") {
        nextButton();
    } else if (event.key === "ArrowLeft") {
        prevButton();
    }
});