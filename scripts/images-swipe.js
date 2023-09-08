/*
* Copyright 2023, Aminu Adamu Aminu
* All rights reserved. 
*/

const imagesSwipe = document.querySelector('.images-swipe');
const scrollRight = document.querySelector('.scroll-right');
const scrollLeft = document.querySelector('.scroll-left');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth;

var isDragged = false;
var currentPosition;
var positionX;

/*
* Get the current position when the mouse is down
* When the mouse is pressed, the current location will be gotten.
*/
const onDrag = (e) => {
    isDragged = true;
    currentPosition = imagesSwipe.scrollLeft;
    positionX = e.pageX;
}

/*
* Update the current position when dragging
* The the mouse is moved over the container, the position of the mouse is gotten.
*/
const onDragging = (e) => {
    if (isDragged)
        imagesSwipe.scrollLeft = currentPosition - (e.pageX - positionX);
}

/*
* Stop drag
* When the mouse is released, its position is gotten.
*/
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