/*
* Copyright 2023, Aminu Adamu Aminu
* All rights reserved. 
*/

/*
* Toggle the navigation menu
* When the user clicks the menu icon, the navigation menu will appear. But when the close icon is clicked, 
* the navigation menu will disappear.
*/
function toggleMenu(arg) {
    if (arg === 'show')
        sitePrimaryNav.style.transform = 'translateY(0)';
    else if (arg === 'hide')
        sitePrimaryNav.style.transform = 'translateY(-120rem)';

}

/*
* Set an intersection observer
* When the user scrolls down the page, the intersection observer will make the device cards appear.
*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
});

const observedItems = document.querySelectorAll('.observe');
observedItems.forEach(item => observer.observe(item));

/*
* This solves the issues of the navigation menu not appearing when the page is resized after the menu icon
* is pressed.
*/
window.addEventListener('resize', () => {
    if (window.innerWidth < 1260)
        toggleMenu('hide');
    else
        toggleMenu('show');
})

const sitePrimaryNav = document.querySelector('nav');
const closeMenuIcon = document.querySelector('.close-menu-icon');
const menuIcon = document.querySelector('.menu-icon');

closeMenuIcon.addEventListener('click', () => toggleMenu('hide'));
menuIcon.addEventListener('click', () => toggleMenu('show'));