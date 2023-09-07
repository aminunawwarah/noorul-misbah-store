const imagesSwipe = document.querySelector('.images-swipe');
const scrollRight = document.querySelector('.scroll-right');
const scrollLeft = document.querySelector('.scroll-left');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth;

var isDragged = false;
var currentPosition;
var positionX;

const onDrag = (e) => {
    isDragged = true;
    currentPosition = imagesSwipe.scrollLeft;
    positionX = e.pageX;
}

const onDragging = (e) => {
    if (isDragged)
        imagesSwipe.scrollLeft = currentPosition - (e.pageX - positionX);
}

const onDragStopped = () => {
    isDragged = false;
    currentPosition = imagesSwipe.scrollLeft;
}

imagesSwipe.addEventListener('mousedown', onDrag);
imagesSwipe.addEventListener('mouseover', onDragging);
document.addEventListener('mouseup', onDragStopped);

scrollRight.addEventListener('click', () => {
    imagesSwipe.scrollLeft += cardWidth;
});

scrollLeft.addEventListener('click', () => {
    imagesSwipe.scrollLeft -= cardWidth;
});