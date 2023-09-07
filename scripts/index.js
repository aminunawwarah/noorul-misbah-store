function toggleMenu(arg) {
    if (arg === 'show')
        sitePrimaryNav.style.transform = 'translateY(0)';
    else if (arg === 'hide')
        sitePrimaryNav.style.transform = 'translateY(-120rem)';

}

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